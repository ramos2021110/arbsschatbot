import random
import json
import pickle
import numpy as np
import os
from nltk.stem import WordNetLemmatizer
from keras.models import Sequential
from keras.layers import Dense, Activation, Dropout
from keras.optimizers import SGD

def train():
    lemmatizer = WordNetLemmatizer()

    # Load intents data
    DIRNAME = os.path.dirname(os.path.abspath(__file__))
    intents_path = os.path.join(DIRNAME, 'intents.json')
    with open(intents_path) as file:
        intents = json.load(file)

    words = []
    classes = []
    documents = []
    ignoreLetters = ['?', '!', '.', ',']

    # Preprocess intents data
    for intent in intents['intents']:
        for pattern in intent['patterns']:
            wordList = nltk.word_tokenize(pattern)
            words.extend(wordList)
            documents.append((wordList, intent['tag']))
            if intent['tag'] not in classes:
                classes.append(intent['tag'])

    words = [lemmatizer.lemmatize(word.lower()) for word in words if word not in ignoreLetters]
    words = sorted(set(words))
    classes = sorted(set(classes))

    # Prepare training data
    training = []
    output_empty = [0] * len(classes)

    for document in documents:
        bag = []
        word_patterns = document[0]
        word_patterns = [lemmatizer.lemmatize(word.lower()) for word in word_patterns]
        for word in words:
            bag.append(1) if word in word_patterns else bag.append(0)

        output_row = list(output_empty)
        output_row[classes.index(document[1])] = 1
        training.append(bag + output_row)

    np.random.shuffle(training)
    training = np.array(training)
    train_x = training[:, :len(words)]
    train_y = training[:, len(words):]

    # Define the model
    model = Sequential([
        Dense(128, activation='relu'),
        Dropout(0.5),
        Dense(64, activation='relu'),
        Dropout(0.5),
        Dense(len(classes), activation='softmax')
    ])

    # Compile the model
    sgd = SGD(learning_rate=0.001, momentum=0.9, nesterov=True)
    model.compile(loss='categorical_crossentropy', optimizer=sgd, metrics=['accuracy'])

    # Train the model
    model.fit(train_x, train_y, epochs=1680, batch_size=5, verbose=1)

    # Save the model
    model.save(os.path.join(DIRNAME, 'chatbot_model.keras'))
    print('Done')
