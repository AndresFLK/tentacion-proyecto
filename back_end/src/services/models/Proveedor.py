from src.database.db import db

class Proveedor(db.Model):

    id_proveedor = db.Column(db.Integer, primary_key = True)
    nombre = db.Column(db.String(40), unique = True, nullable = False)

    def __init__(self, nombre: str) -> None:
        self.nombre = nombre

    def to_json(self):
        return {
            'id_proveedor': self.id_proveedor,
            'nombre': self.nombre
        }
