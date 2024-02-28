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

-- servicio
CREATE TABLE SERVICIO (
    id_servicio SERIAL PRIMARY KEY,
    id_empresa INT NOT NULL,
    tiempo DATE NOT NULL,
    imagen VARCHAR(50) NOT NULL,
    descripcion VARCHAR(200) NOT NULL,
    titulo VARCHAR(100)  NOT NULL,
    FOREIGN KEY(id_empresa) REFERENCES EMPRESA(id_empresa)
);

-- empresa
CREATE TABLE EMPRESA (
    id_empresa SERIAL PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL
);

-- usuario
CREATE TABLE USUARIO(
    cedula INT NOT NULL PRIMARY KEY,
    telefono VARCHAR(10) NOT NULL,
    contrasena VARCHAR(40) NOT NULL,
    nombre VARCHAR(12) NOT NULL,
    correo VARCHAR(20) NOT NULL,
    prim_apellido VARCHAR(15) NOT NULL,
    seg_apellido VARCHAR(15) NOT NULL,
    id_rol INT NOT NULL,
    id_direccion INT NOT NULL,
    FOREIGN KEY(id_direccion) REFERENCES DIRECCION(id_direccion),
    FOREIGN KEY(id_rol) REFERENCES ROL(id_rol)
)

-- rol
CREATE TABLE ROL(
    id_rol INT NOT NULL PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL
)

-- reserva
CREATE TABLE RESERVA(
    id_reserva INT NOT NULL PRIMARY KEY,
    fecha DATE NOT NULL,
    nombre_reserva VARCHAR(25) NOT NULL,
    id_usuario INT NOT NULL,
    FOREIGN KEY(id_usuario) REFERENCES USUARIO(id_usuario)
)

-- pedido
CREATE TABLE PEDIDO(
    id_pedido INT NOT NULL PRIMARY KEY,
    descripcion VARCHAR(60) NOT NULL,
    precio FLOAT NOT NULL,
    estado BOOLEAN NOT NULL,
    id_usuario INT NOT NULL,
    FOREIGN KEY(id_usuario) REFERENCES USUARIO(id_usuario)
)

-- orden
CREATE TABLE ORDEN(
    id_orden INT NOT NULL PRIMARY KEY
    precio FLOAT NOT NULL,
    num_mesa INT NOT NULL,
    descripcion VARCHAR(70),
    estado BOOLEAN NOT NULL
)

--  direccion
CREATE TABLE DIRECCION (
    id_direccion INT NOT NULL PRIMARY KEY,
    detalles VARCHAR(100) NOT NULL,
    id_canton INT NOT NULL,
    id_distrito INT NOT NULL,
    FOREIGN KEY (id_canton) REFERENCES Canton(id_canton),
    FOREIGN KEY (id_distrito) REFERENCES Distrito(id_distrito)
);

-- canton
CREATE TABLE CANTON (
    id_canton INT NOT NULL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    id_provincia INT NOT NULL,
    FOREIGN KEY (id_provincia) REFERENCES PROVINCIA(id_provincia)
)

--  distrito
CREATE TABLE DISTRITO(
    id_distrito INT NOT NULL PRIMARY KEY,
    nombre VARCHAR(30)
)

-- provincia
CREATE TABLE PROVINCIA (
    id_provincia INT NOT NULL PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL
)

-- Dar permisos en tablas a rol
-- Permisos de select
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO tentacion_admin;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO tentacion_admin;
GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public TO tentacion_admin;
