import os
from decouple import config


class Config():
    SECRET_KEY = os.environ['SECRET_KEY']
    # SECRET_KEY = config('SECRET_KEY')


class DevelopmentConfig(Config):
    DEBUG = True


config = {
    'development': DevelopmentConfig
}
