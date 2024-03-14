from src.database.db import db

class Rol(db.Model):

    id_rol = db.Column(db.Integer, primary_key = True)
    nombre = db.Column(db.String(40), nullable = False)
    usuarios = db.relationship('Usuario', backref='rol', lazy='dynamic')

    def __init__(self, id_rol, nombre) -> None:
        self.id_rol = id_rol 
        self.nombre = nombre

    def to_json(self):
        return {
            'id_rol': self.id_rol,
            'nombre': self.nombre
        }
