from src.database.db import db

class Servicio(db.Model):

    id_servicio = db.Column(db.Integer, primary_key = True)
    tiempo = db.Column(db.String(40), nullable = False)
    titulo = db.Column(db.String(100), nullable = False)
    descripcion = db.Column(db.String(200), nullable = False)
    imagen = db.Column(db.String(100), nullable = False)
    id_empresa = db.Column(db.Integer, db.ForeignKey('empresa.id_empresa'), nullable = False)

    def __init__(self, tiempo, titulo, descripcion, imagen, id_empresa) -> None:
       self.tiempo = tiempo
       self.descripcion = descripcion
       self.titulo = titulo
       self.imagen =  imagen
       self.id_empresa = id_empresa

    def to_json(self):
        return {
            'id_servicio': self.id_servicio,
            'titulo': self.titulo,
            'descripcion': self.descripcion,
            'tiempo': self.tiempo,
            'empresa': self.empresa.nombre,
            'imagen': self.imagen
        }
