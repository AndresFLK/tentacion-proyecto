from flask import Flask

# Routes
from .routes import AuthRoutes
from .routes import ProveedorRoutes
from .routes import ProductoRoutes
from .routes import EmpresaRoutes
from .routes import ServicioRoutes
from .routes import UsuarioRoutes
from .routes import ReservaRoutes

app = Flask(__name__)

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
