from src.database.db import db

class Empresa(db.Model):

    id_empresa = db.Column(db.Integer, primary_key = True)
    nombre = db.Column(db.String(30), unique = True, nullable = False)

    def __init__(self, nombre: str) -> None:
        self.nombre = nombre

    def to_json(self):
        return {
            'id_proveedor': self.id_empresa,
            'nombre': self.nombre
        }
