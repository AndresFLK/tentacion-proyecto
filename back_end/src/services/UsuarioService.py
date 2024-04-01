import hashlib
# Errors
from src.database.db import db
from src.utils.errors.CustomException import CustomException
# Models
from .models import Usuario

class UsuarioService():

    @classmethod
    def get_usuario(cls):
        try:
            return Usuario.query.filter_by(id_rol = 2).all()
        except CustomException as ex:
            raise CustomException(ex)

    @classmethod
    def get_admin(cls):
        try:
            return Usuario.query.filter_by(id_rol = 1).all()
        except CustomException as ex:
            raise CustomException(ex)

    @classmethod
    def get_usuario_unique(cls, cedula: str):
        try:
            return Usuario.query.filter_by(cedula = cedula).first_or_404()
        except CustomException as ex:
            raise CustomException(ex)

    @classmethod
    def post_usuario(cls, cedula, password, nombre, primer_appelido, segundo_apellido, correo, id_rol):
        try:
            password = password.encode('utf-8')
            hasher = hashlib.sha256()
            hasher.update(password)
            password_hash = hasher.hexdigest()

            nuevo_usuario = Usuario(cedula, password_hash, nombre, primer_appelido, segundo_apellido, correo, id_rol)
            db.session.add(nuevo_usuario)
            db.session.commit()
            return nuevo_usuario
        except CustomException as ex:
            raise CustomException(ex)
    
    @classmethod
    def put_usuario(cls, cedula, password, nombre, primer_appelido, segundo_apellido, correo, id_rol):
        try:
            password = password.encode('utf-8')
            hasher = hashlib.sha256()
            hasher.update(password)
            password_hash = hasher.hexdigest()

            usuario = Usuario.query.get_or_404(cedula)
            usuario.nombre = nombre
            usuario.cedula = cedula
            usuario.primer_appelido = primer_appelido
            usuario.segundo_apellido = segundo_apellido
            usuario.correo = correo
            usuario.id_rol = id_rol
            usuario.password = password_hash

            db.session.commit()
            return usuario
        except CustomException as ex:
            raise CustomException(ex)

    @classmethod
    def delete_usuario(cls, cedula):
        try: 
            usuario = Usuario.query.get_or_404(cedula)
            db.session.delete(usuario)
            db.session.commit()
        except CustomException as ex:
            raise CustomException(ex)
