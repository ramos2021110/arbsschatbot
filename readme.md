To run chatbot, make sure the Python version you're using is version 3.11

Create a virtual env in the main folder:
```
py -3.11 -m venv .venv
```

Then activate the environment using:
```
.venv/Scripts/activate

if error use this override the policy then reenter activation

Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

```
Then use this command to install needed packages:
```
pip install flask flask-socketio nltk tensorflow pycryptodome markupsafe
```

Then you can now run chatbot.py
You can also run app.py, just change the host IP address in app.py and io.connect IPadd in arbsshtml.html

* If there were changes made to intents.json, run training.py first

<h3><u><b>NOTE:</b></u></h3> 
Change the IP Address in line 46 of app.py and line 19 of arbsshtml.html to your IP Address. Can be found through cmd ipconfig command.
