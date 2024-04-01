from flask import Blueprint, request, jsonify

# Errors
from src.utils.errors.CustomException import CustomException
# Security
from src.utils.Security import Security
# Services
from src.services import ReservaService

main = Blueprint('reserva_blueprint', __name__)

@main.route('/', methods=['GET'])
def get_reserva():
        try:
            reservas = ReservaService.get_reserva()
            if (len(reservas) > 0):
                return jsonify([reserva.to_json() for reserva in reservas])
            else:
                return jsonify({'message': "NOTFOUND", 'success': True})
        except CustomException:
            return jsonify({'message': "ERROR", 'success': False})

@main.route('/<int:id_reserva>', methods=['GET'])
def get_reserva_unique(id_reserva: int):
    try:
        reservas = ReservaService.get_reserva_unique(id_reserva)
        if (len(reservas) > 0):
            return jsonify([reserva.to_json() for reserva in reservas])
        else:
            return jsonify({'message': "NOTFOUND", 'success': True})
    except CustomException:
        return jsonify({'message': "ERROR", 'success': False})

@main.route('/mis-reservas', methods=['GET'])
@Security.custom_middleware()
def get_reserva_usuario():
    try:
        headers = request.headers
        cedula = Security.profile_data(headers)

        if cedula:
            reservas = ReservaService.get_reserva_usuario(cedula)
            if (len(reservas) > 0):
                return jsonify([reserva.to_json() for reserva in reservas])
            else:
                return jsonify({'message': "NOTFOUND", 'success': True})

        response = jsonify({'message': 'Unauthorized'})
        return response, 401
    except CustomException:
        return jsonify({'message': "ERROR", 'success': False})


@main.route('/', methods=['POST'])
@Security.custom_middleware(required_keys=['fecha', 'nombre_reserva'])
def post_reserva():
    try:
        headers = request.headers
        cedula = Security.profile_data(headers)
        
        if cedula and cedula == request.json['cedula']:
            fecha = request.json['fecha']
            nombre_reserva = request.json['nombre_reserva']
            reserva = ReservaService.post_reserva(fecha, nombre_reserva, cedula)
            return jsonify(reserva.to_json()), 201

        response = jsonify({'message': 'Unauthorized'})
        return response, 401
    except CustomException:
        return jsonify({'message': "ERROR", 'success': False})

@main.route('/<int:id_reserva>', methods=['PUT'])
@Security.custom_middleware(required_keys=['fecha', 'nombre_reserva'])
def put_reserva(id_reserva: int):
    has_access = Security.verify_token(request.headers)

    if has_access:
        try:
            fecha = request.json['fecha']
            nombre_reserva = request.json['nombre_reserva']
            reserva = ReservaService.put_reserva(id_reserva, fecha, nombre_reserva)
            return jsonify(reserva.to_json()), 201
        except CustomException:
                return jsonify({'message': "ERROR", 'success': False})
    else:
        response = jsonify({'message': 'Unauthorized'})
        return response, 401

@main.route('/<int:id_reserva>', methods = ['DELETE'])
@Security.custom_middleware()
def delete_reserva(id_reserva: int):
    has_access = Security.verify_token(request.headers)

    if has_access:
        try:
            ReservaService.delete_reserva(id_reserva)
            return jsonify({'message': "Reserva borrada exitosamente"}), 200
        except CustomException:
            return jsonify({'message': "ERROR", 'success': False})
    else:
        response = jsonify({'message': 'Unauthorized'})
        return response, 401

