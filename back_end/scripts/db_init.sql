-- PRIMERA VEZ CONECTANDOSE:
-- -> Conectarse a psql con usuario POSTGRES
-- -> Crear base de datos tentacion_online y conectarse a ella '\c tentacion_online'
CREATE DATABASE tentacion_online;
-- -> Crear rol y usuario
CREATE ROLE tentacion_admin;
GRANT ALL PRIVILEGES ON DATABASE tentacion_online TO tentacion_admin;
CREATE USER admin WITH PASSWORD 'AdminstradorTentacion2024';
GRANT tentacion_admin TO admin;

-- Proveedor
CREATE TABLE PROVEEDOR (
    id_proveedor SERIAL PRIMARY KEY,
    nombre VARCHAR(40) NOT NULL
);

-- Producto
CREATE TABLE PRODUCTO (
    id_producto SERIAL PRIMARY KEY,
    nombre VARCHAR(40) NOT NULL,
    precio INT NOT NULL,
    descripcion VARCHAR(200) NOT NULL
);

-- producto_proveedor
CREATE TABLE PRODUCTO_PROVEEDOR (
    id_producto INT NOT NULL,
    id_proveedor INT NOT  NULL,
    FOREIGN KEY(id_producto) REFERENCES Producto(id_producto),
    FOREIGN KEY(id_proveedor) REFERENCES Proveedor(id_proveedor)
);


-- Dar permisos en tablas a rol
-- Permisos de select
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO tentacion_admin;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO tentacion_admin;
GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public TO tentacion_admin;
