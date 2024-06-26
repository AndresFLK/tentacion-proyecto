from flask import Flask
from flask_cors import CORS

# Routes
from .routes import AuthRoutes
from .routes import ProveedorRoutes
from .routes import ProductoRoutes
from .routes import EmpresaRoutes
from .routes import ServicioRoutes
from .routes import UsuarioRoutes
from .routes import ReservaRoutes

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ["*", "http://localhost:3000", "http://localhost:5000"], "methods": ["PUT", "GET", "POST", "DELETE", "OPTIONS"]}})

def init_app(config):
    # Configuration
    app.config.from_object(config)

    # Blueprints
    app.register_blueprint(AuthRoutes.main, url_prefix='/auth')
    app.register_blueprint(UsuarioRoutes.main, url_prefix='/usuarios')
    app.register_blueprint(ProveedorRoutes.main, url_prefix='/proveedores')
    app.register_blueprint(ProductoRoutes.main, url_prefix='/productos')
    app.register_blueprint(EmpresaRoutes.main, url_prefix='/empresas')
    app.register_blueprint(ServicioRoutes.main, url_prefix='/servicios')
    app.register_blueprint(ReservaRoutes.main, url_prefix='/reservas')

    return app
