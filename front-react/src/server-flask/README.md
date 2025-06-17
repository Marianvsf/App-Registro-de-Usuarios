## README para el Backend (Flask)
# App de Registro de Usuarios - Backend
Este es el backend de la aplicación de registro y gestión de usuarios, construido con Flask. Es responsable de la lógica del negocio, la interacción con la base de datos y la provisión de una API para el frontend.

# 🚀 Cómo Empezar
Sigue estos pasos para configurar y ejecutar el backend en tu máquina local.

# Prerrequisitos
Asegúrate de tener Python 3 y pip (Python Package Installer) instalados en tu sistema.

# Configuración del Entorno
1- Crea un archivo .env:
Necesitarás un archivo .env en la carpeta raíz del backend para las variables de entorno (por ejemplo, configuración de la base de datos, claves secretas, etc.). Un ejemplo de cómo debe lucir este archivo probablemente esté disponible en el repositorio (a menudo un ``` .env.example``` ). Crea uno con tus propias configuraciones.
```
# Ejemplo de .env
# DATABASE_URL=sqlite:///your_database.db
# SECRET_KEY=your_secret_key_here
```

2- Navega a la carpeta del backend:
Abre tu terminal y ve a la carpeta raíz de tu proyecto donde se encuentra el backend (probablemente server-flask o la carpeta que contiene app.py):
```
cd server-flask # o la ruta donde esté tu app.py
```

# Instalación
1- Instala las dependencias:
Una vez dentro de la carpeta del backend, instala todas las librerías de Python requeridas usando ```pip```:
```
pip install -r requirements.txt
```
# Ejecutar el Servidor
Para iniciar el servidor backend de Flask:
```
python app.py # O el nombre de tu archivo principal de Flask
```
El servidor se ejecutará típicamente en http://localhost:5000. Si necesitas que sea accesible públicamente, puedes usar herramientas como ngrok o configurar un servidor web como Gunicorn/Nginx para producción.