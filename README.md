# Pre_entrega_JS
Repositorio Karina Reguera. Pre-entrega JS


Pre-entrega del proyecto Ja Script: 

El objetivo es construir una herramienta funcional para manejar productos de una tienda en línea desde la terminal, utilizando la API FakeStore. 

El sistema interpreta los comandos ingresados en la terminal y ejecutar las siguientes acciones:

npm run start GET products
npm run start GET products/15
npm run start POST products "T-Shirt-Rex" 300 "remeras"
npm run start DELETE products/7



Configuración inicial:

•	Cree  el archivo index.js  para alojar el proyecto y como punto de entrada.

•	Cree un proyecto de Node con el comando npm init –y, lo cual generó un archivo package.json

•	Modifiqué el archivo package.json, agregando y o modificando las propiedades:
“type”: “module” para indicar que trabaja con MODULE, de esta manera permite trabajar con sintaxis moderna de Java Script.
“scripts”/”start”:  “node –watch index.js”. Indico como script de arranque.
“author”: “Karina Reguera”
“descripcion”: “Pre-entrega del proyecto”


Gestión de los productos:

Se utiliza fetch para interactuar con la Fake Store API (https://fakestoreapi.com/products) y realizar operaciones básicas de GET, POST y DELETE sobre los productos.

•	GET: Obtener datos: 
La función getData(url) obtiene la lista de productos desde la API, convirtiendo la respuesta en JSON y mostrándola en la consola.

•	POST: Enviar datos:
La función postData(url, body) envía un nuevo producto a la API.
Usa fetch con el método POST, un encabezado “Content-Type”: “application/json” y convierte el objeto body a formato JSON antes de enviarlo.
Al recibir la respuesta, la muestra en la consola.

DELETE: Eliminar un producto:
La función deleteData(url, id) elimina un producto según su ID.
Usa fetch con el método DELETE y verifica si la eliminación fue exitosa.

Uso del script:
El código toma argumentos de la línea de comandos (process.argv.slice(2)) para ejecutar los distintos comandos:

npm run start GET products: Obtiene la data de todos los productos.
npm run start GET products/15: Obtiene la data del producto con Id 15.
npm run start POST products "T-Shirt-Rex" 300 "remeras": Crea un producto.
npm run start DELETE products/7:: Elimina el producto con Id 7.

Si el comando ingresado no es GET, POST o DELETE, el script muestra un mensaje de error.

