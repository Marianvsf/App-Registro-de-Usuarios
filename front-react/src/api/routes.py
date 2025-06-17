from flask import Flask, Blueprint, jsonify, request, url_for
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token, jwt_required, get_jwt, get_jwt_identity, current_user
from api.models import User
from api.utils import generate_sitemap, APIException
from api.extensions import db, bcrypt
from os import getenv
import os
import requests
import json



api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {
        "msg": "¡Hola! Soy un mensaje del backend."
    }
    return jsonify(response_body), 200

@api.route('/registration_form', methods=['POST'])
def user_registration():
    # Se reciben los datos de la petición
    body=request.get_json()
    if body['name'] is None:
        return jsonify({"msg":"El campo nombre y apellido es obligatorio"})
    if body['email'] is None:
        return jsonify({"msg":"Por especifique un correo electrónico"}),400
    # Se valida que se esta ingresando un usuario y contraseña
    if body['password'] is None:
        return jsonify({"msg":"Por favor especifique su contraseña"}),400
    
    existing_user = User.query.filter_by(email=body['email']).first()
    if existing_user:
        return jsonify({"msg": "El correo electrónico ya está registrado"}), 400

    # Se encripta la contraseña
    body['password']=bcrypt.generate_password_hash(body['password']).decode('utf-8')
    # Se guarda en la base de datos 
    user = User(name=body['name'], last_name=body['last_name'], email=body['email'], password=body['password'])
    db.session.add(user)
    db.session.commit()
    return jsonify({"msg":"Usuario creado con exito", "user": user.serialize()})

@api.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()  # Fetch todos los usuarios
    print(users)
    user_data = [user.serialize() for user in users]  # Serialize la data del usuario
    return jsonify({"users": user_data}), 200
