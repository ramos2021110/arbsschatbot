print("Running chatbot.py...")
import random
import json
import pickle
import numpy as np
import os
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

import nltk
from nltk.stem import WordNetLemmatizer

from keras.models import load_model


nltk.download('punkt')
lemmatizer = WordNetLemmatizer()
#load the intents json file
DIRNAME = '\\'.join(os.path.dirname(__file__).split("\\"))
intents = json.loads(open(os.path.join(DIRNAME, 'intents.json')).read())

#open the words and classes pkl files created from training.py
words = pickle.load(open(os.path.join(DIRNAME, 'words.pkl'), 'rb'))
classes = pickle.load(open(os.path.join(DIRNAME, 'classes.pkl'), 'rb'))

#load the chatbot model created from training.py
model = load_model(os.path.join(DIRNAME, 'chatbot_model.keras'))

def clean_up_sentence(sentence):
    sentence_words = nltk.word_tokenize(sentence)
    sentence_words = [lemmatizer.lemmatize(word) for word in sentence_words]
    return sentence_words

def bag_of_words(sentence):
    sentence_words = clean_up_sentence(sentence)
    bag = [0] * len(words)
    for w in sentence_words:
        for i, word in enumerate(words):
            if word == w:
                bag[i] = 1
    return np.array(bag)

def predict_class(sentence):
    bow = bag_of_words(sentence)
    res = model.predict(np.array([bow]))[0] #result
    ERROR_THRESHOLD = 0.25
    results = [[i,r] for i,r in enumerate(res) if r > ERROR_THRESHOLD]
    results.sort(key= lambda x: x[1], reverse= True)
    return_list = []
    
    for r in results:
        return_list.append({'intent': classes[r[0]],'probability': str(r[1])})
    return return_list

def get_response(intents_list,intents_json):
    global tag
    tag = intents_list[0]['intent']
    print(intents_list)
    list_of_intents = intents_json['intents']
    for i in list_of_intents:
        if i['tag'] == tag:
            result = random.choice(i['responses'])
            break
    return result

print("GO! Bot is running")

# from app import userInput

def get_chat_response(msg):
    loop = True
    while loop:
        # msg = input("")
        ints = predict_class(msg.lower())
        global botResponse
        # if()
        try:
            botResponse = get_response(ints, intents)
            
            print(botResponse)
            # if botResponse == "Awww, okay, take care!" or botResponse == "Okay, thanks for talking with me!" or botResponse == "Okay, goodbye!" or botResponse == "Understood. Goodbye!" :
            #     loop = False
            if tag == 'goodbye':
                loop = False
                return botResponse
            return botResponse
        except IndexError:
            botResponse = "I'm sorry. That is something I might not have in my knowledge banks. Can you rephrase again?"
            
            print(botResponse)
            return botResponse
        
        # botResponse = get_response(ints, intents)
            
        # print(botResponse)
        # # if botResponse == "Awww, okay, take care!" or botResponse == "Okay, thanks for talking with me!" or botResponse == "Okay, goodbye!" or botResponse == "Understood. Goodbye!" :
        # #     loop = False
        # if tag == 'goodbye':
        #     loop = False
        #     return botResponse
        # return botResponse