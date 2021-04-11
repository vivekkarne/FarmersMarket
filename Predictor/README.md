# Prediction of image uploaded by user

Jupyter Notebooks:

FruitNet.py - Classification model trained on fruits360 data from kaggle consisting of 131 classes, predicts with an accuracy of 92% when trained for 5 epochs.

Resuts.py - Classifier, uses the weights of trained model to put the image into one of the classes defined in the best possible way.

app.py - Flask app to host the classifier, rest endpoint at predict takes in the uploaded user image and returns the predicted class.

Misc:

Procfile - Config file for heroku, the Flask framework runs on a gunicorn server hosted here on heroku.


Frameworks: Pytorch, Flask <br />
Web Server: Gunicorn <br />
Deployment Cloud: Heroku <br />
