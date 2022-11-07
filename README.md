# API REST: AHORCADO
## Creado por: 
### Erick Ernesto Maldonado y Jony Salvador López

Instrucciones

Para realizar las peticiones a la API se deben crear 4 diferentes solicitudes en el siguiente orden:

1. Peticion GET LIST: Crear peticion para listar las categorias del juego, con la 
    siguiente URL: http://localhost:3000/api/categories . Esto devolvera una lista de las categorias: "frutas" y "paises".
    Debe escoger una para agregarla a la URL de la siguiente peticion.


2.  Crear el GET ONE con el URL: http://localhost:3000/api/categories/frutas . En esta peticion se debe
    escribir al final del URL el nombre de la categoria que escoja (en esta URL se ha selecionado frutas) para enviar la peticion y que comience el juego.

3. Crear la peticion POST, URL: http://localhost:3000/api/categories . El juego ya ha comenzado, por lo que en la peticion
    POST usted debera ingresar la letra que considere correcta, con el siguiente formato JSON:

        {
    	    "letter": "a"
        }

    Al enviar la peticion, la letra ingresada aparecera en el espacio correspodiente en caso de que este correcta, de lo contrario el contador de intentos disminuira. Hacer las peticiones necesarias hasta que se termine el juego y poder
    pasar al siguiente nivel.

    Cada categoria tiene niveles, los cuales tienen una dificultad diferente, se avanzara al siguiente nivel solo si se
    completa la palabra y si continua jugando en la misma categoria.

4. Peticion POST para crear el endpoint de agregar palabras. URL http://localhost:3000/api/categories/new . Aqui se agregaran
    las nuevas palabras, es necesario escribir la categoria a la que va a dirigir la palabra, de la siguiente manera:

    {
	    "id": "paises",
	    "palabraNueva": "nicaragua"
    }

    el campo id es la categoria seleccionada. Despues de enviar la peticion aparecera la lista de palabras que hay en el diccionario agrupadas en categorias. 