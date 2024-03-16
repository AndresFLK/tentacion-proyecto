import hashlib
from src.database.db import db

class Usuario(db.Model):

    cedula = db.Column(db.String(40), primary_key = True)
    nombre = db.Column(db.String(40), nullable = False)
    primer_apellido = db.Column(db.String(40), nullable = False)
    segundo_apellido = db.Column(db.String(40), nullable = False)
    correo = db.Column(db.String(40), nullable = False)
    password = db.Column(db.String(256), nullable = False)
    id_rol = db.Column(db.Integer, db.ForeignKey('rol.id_rol'), nullable = False)

    def __init__(self, cedula, password, nombre="", primer_apellido="", 
                 segundo_apellido="", correo="", id_rol=0) -> None:
        self.cedula = cedula
        self.nombre = nombre
        self.primer_apellido = primer_apellido
        self.segundo_apellido = segundo_apellido
        self.correo = correo
        self.password = password
        self.id_rol = id_rol

    def hash_password(self):
        password = self.password.encode('utf-8')
        hasher = hashlib.sha256()
        hasher.update(password)
        self.password = hasher.hexdigest()

    def to_json(self):
        return {
            'cedula': self.cedula,
            'nombre': self.nombre,
            'primer_apellido': self.primer_apellido,
            'segundo_apellido': self.segundo_apellido,
            'correo': self.correo,
            'rol': self.rol.nombre,
        }
