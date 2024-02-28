from flask import Flask

# Routes
from .routes import AuthRoutes
from .routes import ProveedorRoutes
from .routes import ProductoRoutes
from .routes import EmpresaRoutes

app = Flask(__name__)


def init_app(config):
    # Configuration
    app.config.from_object(config)

    # Blueprints
    app.register_blueprint(AuthRoutes.main, url_prefix='/auth')
    app.register_blueprint(ProveedorRoutes.main, url_prefix='/proveedores')
    app.register_blueprint(ProductoRoutes.main, url_prefix='/productos')
    app.register_blueprint(EmpresaRoutes.main, url_prefix='/empresas')

    return app
