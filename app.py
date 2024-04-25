import os
import json
from flask import Flask, render_template
from flask_socketio import SocketIO, send, emit
from markupsafe import Markup
from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_OAEP
from Crypto.Hash import SHA256
from Crypto import Random
from base64 import b64decode
from scripts.chatbot import get_chat_response

random_generator = Random.new().read
key = RSA.generate(2048, random_generator)
crypto_key = key.public_key().export_key()
client_random_generator = Random.new().read
private_random_generator = Random.new().read
client_key = RSA.generate(2048, client_random_generator)
private_key = client_key.exportKey()
public_key = client_key.publickey().exportKey()
app = Flask(__name__, template_folder="template")
app.config['SECRET'] = "secret!123"
socketio = SocketIO(app, cors_allowed_origins="*")

@socketio.on('message')
def handle_message(message):
    client_key_pv = RSA.importKey(private_key)
    client_key_decrypter = PKCS1_OAEP.new(client_key_pv, hashAlgo=SHA256)
    
    try:
        json_dumped = json.dumps(message)
        json_message = json.loads(json_dumped)

        if json_message.get("twoparts", False):
            ciphertext1 = b64decode(json_message.get("userMessageP1", ""))
            decrypted1 = client_key_decrypter.decrypt(ciphertext1)
            decoded1 = decrypted1.decode('UTF-8')

            ciphertext2 = b64decode(json_message.get("userMessageP2", ""))
            decrypted2 = client_key_decrypter.decrypt(ciphertext2)
            decoded2 = decrypted2.decode('UTF-8')

            full_message = decoded1 + decoded2
            response = get_chat_response(full_message)
        else:
            ciphertext = b64decode(json_message.get("userMessage", ""))
            decrypted = client_key_decrypter.decrypt(ciphertext)
            full_message = decrypted.decode('UTF-8')
            response = get_chat_response(full_message)

        emit("arby_answers", {"message": response})

    except Exception as e:
        print("Decryption error:", e)
        # Handle the decryption error gracefully

@app.get("/")
def index():
    print(public_key)
    print(private_key)
    print('Sending...')
    return render_template('arbsshtml.html', 
                           clientCrypto=Markup(public_key.decode("utf-8")))

if __name__ == '__main__':
    # Get the port from the PORT environment variable provided by Render
    port = int(os.environ.get("PORT", 5000))
    # Run the Flask app with SocketIO support
    socketio.run(app, host="0.0.0.0", port=port, debug=True)
