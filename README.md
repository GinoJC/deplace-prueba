Soy Gino Carignano y esta es la resolución al desafío para Deplace:

Se creó un listado de personajes de Rick and Morty, y si se selecciona a uno se abre una nueva pantalla con una imagen y detalles del personaje.
La aplicación cuenta con un buscador que filtra por nombre y además un botón que abre un modal para filtrar entre géneros y estado de vida del personaje.
La app fué hecha en NextJS, se utilizó Context para el manejo de estado y las consultas se hicieron utilizando Apollo y GraphQL.
Aunque no es una buena práctica, agregué el archivo .env al repositorio para que puedan conectarse con la API.
Para el apartado visual utilizé Style-Components ya que es una herramienta bastante utilizada y que dá mayor flexibilidad a la hora de crear los componentes.

La app fué deployada en Netlify, esta es la url: https://deplace-challenge-gc.netlify.app/

Se utilizó yarn en vez de npm.

Para correr el proyecto primero lo deben instalar usando "yarn install".
Luego pueden correrlo en modo dev con "yarn dev" o pueden crear el build con "yarn build" y ejecutarlo con "yarn start".
