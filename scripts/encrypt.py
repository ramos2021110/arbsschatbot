import socket
import threading

import rsa

public_key, private_key = rsa.newkeys(1024)
public_partner = None


choice = input("Press (1) for hosting and (2) for connecting: ")

if choice=="1":
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM) #internet socket, tcp
    server.bind(("192.168.1.5", 9999)) #ip address is the address of the host (your pc)
    print("Went after bind")
    server.listen()
    print("After server")

    client, _ = server.accept()
    print("After accept")
    client.send(public_key.save_pkcs1("PEM"))
    public_partner = rsa.PublicKey.load_pkcs1(client.recv(1024))
    
elif choice=="2":
    client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    client.connect(("192.168.1.5", 9999)) #same ip address only because currently using both as client and host, otherwise, go to https://realpython.com/python-sockets/#multi-connection-client-and-server and find the header "Multi-Connection Client"
    public_partner = rsa.PublicKey.load_pkcs1(client.recv(1024))
    client.send(public_key.save_pkcs1("PEM"))
else: 
    exit()



def sending_messages(c):
    while True:
        print("Starting session...")
        global userMessage
        userMessage = input("")
        c.send(rsa.encrypt(userMessage.encode(), public_partner))
        # c.send(message.encode())
        print("You: " + userMessage)
        


from chatbot import response

def chatbot_messages(c):
    while True:
        rsa.encrypt(response.encode(), public_partner)
        
def receiving_messages(c):
    while True:
        print("Arby: " + rsa.decrypt(response, private_key).decode())
        # print("Arby: " + c.recv(1024).decode())
        
threading.Thread(target=sending_messages, args=(client,)).start()
threading.Thread(target=receiving_messages, args=(client,)).start()