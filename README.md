# Challenge-Ticmas

# Para Ejecutar el proyecto se deben seguir las siguientes indicaciones:
- A) Clonar el repositorio en su computadora.
- B) Ejecutar el comando npm i tanto en la carpeta /server como en la carpeta /client/my-app para instalar las dependencias.
- C) Ejecutar el comando docker compose up para levantar la base de datos, este comando se hace en la base del proyecto, el puerto utilizado es el 5432, este mismo debe estar libre o se deberia cambiar en el archivo docker-compose.yml.
- D)  En la carpeta /server ejecutar el comando "npm run db:migrate" para generar las tablas de la base de datos.
- E) En la carpeta /server ejecutar el comando "npm run dev" para levantar el Backend en el puerto 3001.
- F) En la carpeta /client/my-app ejecutar el comando "npm start" para levantar el Frontend en el puerto 3000 y automáticamente se abrira una web en el puerto 3000.

# Cosas a mejorar: 
- Hacer un validador para que el archivo deba contener un orden y tipo de datos exactos.
- Arreglar el bug que hace que los actores se creen mas de una vez.
- Bug que no deja crear el mismo archivo dos veces y hay que dar de baja y levantar el proyecto nuevamente
- Validación de parte del FrontEnd en el archivo.
- Dockerizar ambas apps.
- Agregar los metodos http faltantes.