# Tentacion Proyecto
Backend setup (tener instalado libreria virtualenv y estar en /back_end) :
```
psql -c "CREATE DATABASE tentacion_online;" postgres
```
```
psql -d tentacion_online -a -f scripts/db_init.sql
```
```
python -m virtualenv env
```
```
source venv/bin/activate
```
```
pip install -r requirements.txt
```
```
python index.py
```
Cada vez que se vaya a usar, volver a usar 4to comando y correr index, si se va a dejar de usar desactivar con `deactivate`
