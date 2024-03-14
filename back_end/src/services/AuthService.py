import hashlib
# Database
from src.database.db import db
# Errors
from src.utils.errors.CustomException import CustomException
# Models
from .models import Usuario


class AuthService():

    @classmethod
    def login_user(cls, usuario):
        try:
            password = usuario.password.encode('utf-8')
            hasher = hashlib.sha256()
            hasher.update(password)
            password_hash = hasher.hexdigest()

            user = Usuario.query.get_or_404(usuario.cedula)

            if user.password == password_hash:
                return user

        except CustomException as ex:
            raise CustomException(ex)

    @classmethod
    def register(cls, cedula, password, nombre, primer_apellido, segundo_apellido, correo, id_rol):
        try:
            password = password.encode('utf-8')
            hasher = hashlib.sha256()
            hasher.update(password)
            password_hash = hasher.hexdigest()

            nuevo_usuario = Usuario(cedula, password_hash, nombre, primer_apellido, segundo_apellido, correo, id_rol)
            db.session.add(nuevo_usuario)
            db.session.commit()

            return nuevo_usuario
        except CustomException as ex:
            raise CustomException(ex)

    @classmethod
    def profile(cls, cedula):
        try:
            return Usuario.query.get_or_404(cedula)
        except CustomException as ex:
            raise CustomException(ex)

    @classmethod
    def put_profile(cls, cedula, nombre, primer_apellido, segundo_apellido, correo):
        try:
            usuario = Usuario.query.get_or_404(cedula)
            usuario.nombre = nombre
            usuario.primer_apellido = primer_apellido
            usuario.segundo_apellido = segundo_apellido
            usuario.correo = correo

            db.session.commit()

            return usuario
        except CustomException as ex:
            raise CustomException(ex)




