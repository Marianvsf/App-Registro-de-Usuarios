import os
from flask import Flask
from flask_cors import CORS
from api.extensions import db


app = Flask (__name__)
CORS(app) #enable CORS on all routes

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
from api.routes import api

app.register_blueprint(api, url_prefix='/api')


@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)