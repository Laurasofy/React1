# React1
 Desarrollar una aplicación web simple utilizando React que permite ver información sobre personajes de la serie "Rick and Morty

Problemas:
La instalación de React en Visual Studio Code fue la parte que más complicaciones me presentó. En la consola, al intentar crear un proyecto con el comando "npx create-react-app", me encontré con numerosos errores. Para superar este problema, me vi en la necesidad de reinstalar Node.js una vez más. Opté por la opción de reparar durante la instalación y, finalmente, obtuve las distintas carpetas sin ningún error.
Otro inconveniente surgió al intentar iniciar un nuevo terminal con el comando "npm start". Para resolver este problema, fue necesario verificar el script correspondiente. En la consola, logré solucionarlo utilizando el comando "pwd".

Facilidad 
"Me resultó ágil el diseño en CSS, la secuencia de pasos y la comprensión de la estructura del código. En algunas secciones, simplemente seguí la lógica, especialmente al trabajar con los botones, donde la única variación consistió en ajustar el valor a menos 1 para permitir el retorno a la página anterior. Además, cabe destacar que consumir la API fue igualmente sencillo para mí, facilitando aún más el desarrollo. Asimismo, la instalación de Bootstrap y la aplicación de su diseño resultaron tareas igualmente accesibles."
Como lo hice 
Primero, busqué información en Internet y vi algunos videos tutoriales. Aprendí a instalar Node.js y los comandos necesarios para crear un proyecto con las carpetas en el archivo app.js. Importé algunas librerías y creé una función que contiene un div con diferentes diseños. Además, desarrollé un componente llamado CharacterList para mostrar la lista de personajes. Posteriormente, creé una carpeta llamada "componentes" que contiene un archivo CharacterList. En este archivo, utilicé useEffect para llamar y fetch los datos de la API, dos instancias para los botones de regreso y siguiente para la paginación,  por último, el método map para iterar sobre la lista de personajes.

En el segundo componente, Character.js, instalé Bootstrap utilizando el comando npm i bootstrap@5.2.0-beta1 en la terminal, el cual está disponible en la página web oficial. Luego, lo importé en el archivo index.js para aplicar clases de Bootstrap, centrar el texto, agregar relleno alrededor del contenido y mostrar el nombre y otros detalles de los personajes. Además, en el archivo CSS, añadí algunos diseños para los títulos y la información de los personajes.

En resumen, mi proceso comenzó con la búsqueda de información y tutoriales, seguido por la instalación de Node.js y la configuración del proyecto. Desarrollé los componentes necesarios, utilicé Bootstrap para mejorar el estilo y diseñé elementos específicos en el archivo CSS para los títulos y la información de los personajes.
