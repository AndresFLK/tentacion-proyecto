from flask import Flask

# Routes
from .routes import AuthRoutes
from .routes import ProveedorRoutes
from .routes import ProductoRoutes

app = Flask(__name__)


def init_app(config):
    # Configuration
    app.config.from_object(config)

    # Blueprints
    app.register_blueprint(AuthRoutes.main, url_prefix='/auth')
    app.register_blueprint(ProveedorRoutes.main, url_prefix='/proveedores')
    app.register_blueprint(ProductoRoutes.main, url_prefix='/productos')

    return app
