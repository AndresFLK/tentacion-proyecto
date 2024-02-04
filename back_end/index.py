from decouple import config as cf
from config import config
from src import init_app
from src.database.db import db

configuration = config['development']
app = init_app(configuration)

app.config['SQLALCHEMY_DATABASE_URI'] = cf('PSQL_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

if __name__ == '__main__':
    app.run()
