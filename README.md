# PokeapiAngular

Mediante el service cree funciones asincronas para utilizar el fetch y asi traer los datos de los pokemons y apartir de ahi empezar a estructurar el funcionamiento de los components y la forma en que el service le da vida a lo que es a los elementos a mostrarse. Utilice la implementacion OnInit para ejecutar el fetch y asi traer los pokemons. 

Para el diseño utilice un gradient, tanto en la parte del header como en el fondo del main para sobreponer los diferentes componentes utilice el z-index, tambien hice uso de un webkit-scrollbar para difinir el diseño del scroll.
Llamamos con un constructor al pokemon service para conectar y asi llamarlo en el ngOnInit, realice el llamado de la api mediante un async await con  una promesa que me devolveria los resultados de la api mediante un array y asi hacer llamado a los datos con ngIf para el nombre del pokemon, con el nro de id para ordenarlos por orden numero por medio del getById.

Seleccionamos las tarjetas mediante un evento de click para obtener su id, hicimos visible la imagen principal de los pokemons creando una interface donde se declaro todos los objetos de la array para asi hacer uso en este caso, llamar a la imagen desde el html que se refleje en la misma segun el pokemon seleccionado de la pokedex.

Se definio en infinite scroll por un evento scroll en el html, impidiendo su expansion fuera del tamano de la pantalla con el maxheight en 100% y con un limite de 5 paginas, mediante pseudoselecctores realice el estilo del scrollbar, con uno que maneja el tamaño, el otro la barra de scroll y por ultimo el que le da diseño al fondo del scroll.

Para distingar al pokemon seleccionado con una ngClass creamos el seleccionado de tipo @input, donde le dimos un valor booleano en falso y si era seleccionado cambiaba mostrando con un color mas resalteado al pokemon seleccionado, declarando estas mismas en la tarjeta que es donde tambien hacemos referencia para mostrar al pokemon en pantalla.

como hice que la plantilla abra y cierre? la flecha que nos va a dar pie a crear las caracteristicas del pokemon seleccionado, dentro de ese detalle vamos a generar que se abra esa plantilla, la cual le agregue un rotate de 180 cuando abre y cierra, para crear ese desplazamiento cuando abre y cierra lo hice mediante un left negativo que seria a donde se ocultaria la plantilla, con una transition y una ngClass.

Se agrego un backdrop en el cual al cuando abrimos la tarjeta con las caracteristicas tambien se ponia el fondo gris para resaltar la atencion solo en la tarjeta.

Desde el component detalle hice la implementacion de la bio del pokemon selecionado donde mostraba su tarjeta de  presentacion que incluyen sus caracteristicas, gracias a la api que tambien aportaba la informacion en diferentes idiomas lo supe aprovechar trayendo esa informacion.

en este proyecto vi el uso de directivas, ciclo de vida de components, inyeccion de dependencias, interpolacion, tipos de Class y ng, promesas async/await, manipulacion del dom, bindings y pipes
