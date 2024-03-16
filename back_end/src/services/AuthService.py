# Database
from src.database.db import db
# Errors
from src.utils.errors.CustomException import CustomException
# Models
from .models import Usuario


class AuthService():

    @classmethod
    def login_user(cls, usuario: Usuario):
        try:

            usuario.hash_password()
            user = Usuario.query.get_or_404(usuario.cedula)

            if user.password == usuario.password:
                return user

        except CustomException as ex:
            raise CustomException(ex)

    @classmethod
    def register(cls, cedula: str, password: str, nombre: str, primer_apellido: str,
                 segundo_apellido: str, correo:str, id_rol: int):
        try:
            nuevo_usuario = Usuario(cedula, password, nombre, primer_apellido, segundo_apellido, correo, id_rol)
            nuevo_usuario.hash_password()

            db.session.add(nuevo_usuario)
            db.session.commit()

            return nuevo_usuario
        except CustomException as ex:
            raise CustomException(ex)

    @classmethod
    def profile(cls, cedula: str):
        try:
            return Usuario.query.get_or_404(cedula)
        except CustomException as ex:
            raise CustomException(ex)

    @classmethod
    def put_profile(cls, cedula:str, nombre:str, primer_apellido:str, segundo_apellido: str, correo: str):
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




