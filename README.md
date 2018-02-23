<h1 align="center">Tyle</h1>
 Tyle es una libreía de css de código abierto con un sistema de grid de 12 columnas (utilizando css grid). Además de contar con el sistema de  grid, cuenta tambien con propiedades utilitarias, como lo son por ejemplo las propiedades de flexbox, de grid, propiedades para los márgenes, entre otros.
 
 Tyle también cuenta con componentes adicionales como por ejemplo botones, barras de progreso, navs, modals, cards, entre otros.

 Tyle, basicamente esta hecho con Sass("css con superpoderes"), ya que facilita mucho a la hora de desarrollar el código css.
---

## ¿Cómo utilizarlo?
 Para empezar, una vez descargado podes vincular, a tu página .html, diferentes archivos de Tyle:
 ```
 tyle/ 
  ├── css/
  |   ├── tyle.css
  |   ├── tyle.min.css
  |   |
  |   ├── tyle-grid-sistem.css
  |   ├── tyle-grid-sistem.min.css
  |   |
  |   ├── tyle-utilities.css
  |   ├── tyle-utilities.min.css
  |   |
  |   ├── tyle-components.css
  |   └── tyle-components.min.css
  |
  └── js/
      ├── tyle.js
      └── tyle.min.js
 ```
 A continuación les mostraré un cuadro con lo que contienen los diferentes archivos:
 
 |                       Archivos                          | Sistema de grid  | Componentes |     Clases utilitarias     |
 | ------------------------------------------------------- |:---------------: | :---------: | :------------------------: |
 | **tyle.css**<br>**tyle.min.css**                        |     Incluido     |  Incluido   |          Incluido          |
 | **tyle-grid-sistem.css**<br>**tyle-grid-sistem.min.css**|     Incluido     | No Incluido | Solo las de grid y flexbox |
 | **tyle-utilities.css**<br>**tyle-utilities.min.css**    |    No Incluido   | No Incluido |          Incluido          |
 | **tyle-components.css**<br>**tyle-components.min.css**  |    No Incluido   |   Incluido  |         No Incluido        |
 
 Como podrás ver en el anterior cuadro, tenes la libertad de poder elegir si querés utilizar todo lo que es Tyle, o solo su sistema de grid o  sus componentes o sus clases utilitarias.
 
 ### Estructura básica para comenzar a utilizar Tyle:
 
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Comenzando a utilizar Tyle</title>
      <link href="https://file.myfontastic.com/VKjMJTbzfBSFneVYf4x7VT/icons.css" rel="stylesheet">    
      <link rel="stylesheet" href="tyle/css/tyle.min.css">
  </head>
  <body>
      <!-- 
          Contenido de tu página
      -->
      <script src="tyle/js/tyle.min.js"></script>
  </body>
  </html>
  ```
  Cómo podrás observar, solo tienes que vincular los archivos de Tyle de Css y JavaScript para comenzar a  utilizarlo y poder desarrollar todo  tu código con Tyle.
  
  Además, otra cosa que podrás observar en el anterior código es que, se está linkeando un archivo exterior, este archivo es de *fontastic* (se  utiliza para poder incluir íconos en la página), que trae algunos íconos para utilizarlos en los diferentes componentes de Tyle (solo es  necesario linkearlo si utilizas algún componente, si no, no es necesario).
 
## Documentación:

 ### Sistema de Grid:

  Para empezar, Tyle cuenta con un sistema de grid de 12 columnas. Dicho sistema esta hecho con Css grid.
  
  Para utilizar el sistema de grid debes crear un div con la clase ***row***, y allí dentro del div ponés los distintos componenetes con sus   respectivas clases del sistema de grid. Dichas clases que le debes poner a los hijos del div con la clase *row* son las diferentes clases de   columnas que las indicas con la clase ***col-*** y luego del guión le indicas cuantas columnas querés que ocupe tu elemento. Tal como se   muestra en el siguiente bloque de código:
  
  Html:
  ```html
    <div class="row">
        <div class="col-1">Una columna</div>
        <div class="col-2">Dos columnas</div>
        <div class="col-3">Tres columnas</div>
        <div class="col-4">Cuatro columnas</div>
        <div class="col-5">Cinco columnas</div>
        <div class="col-6">Seis columnas</div>
        <div class="col-7">Siete columnas</div>
        <div class="col-8">Ocho columnas</div>
        <div class="col-9">Nueve columnas</div>
        <div class="col-10">Diez columnas</div>
        <div class="col-11">Once columnas</div>
        <div class="col-12">Doce columnas</div>
    </div>
  ```
  Con un poco de estilos css (indicándole a los contenedores una altura, un color de fondo, un color al texto, un centrado total al texto, una   separación entre los divs, que cada contenedor valla debajo y no al lado, etc...) , obtenés el siguiente resultado:
  
  ![Grid sistem](/images/grid-sistem.png "Grid sistem")
  
  Sin embargo, esto no es todo acerca del sistema de grid, ya que Tyle cuenta con un sistema de grid totalmente responsive.
  Estas clases para el responsive de los elementos se definen de la siguiente manera:
  ***col*-(a partir de que medida ocupa dichas columnas)-(Número de columnas a ocupar)**
  Las medidas utilizadas en Tyle son las siguientes: 
  
  | Clase | Desde  |  Hasta  |
  | ----- |:-----: | :-----: |
  | *xs*  | 480px  | 639px   |
  | *sm*  | 640px  | 767px   |
  | *md*  | 768px  | 1023px  |
  | *lg*  | 1024px | 1365px  |
  | *xl*  | 1366px | 1366px |
  
  Por lo tanto podés formar clases como por ejemplo:
  *col-xs-12* (va a ocupar 12 columnas desde 480px para arriba)
  *col-sm-6* (va a ocupar 6 columnas desde 640px para arriba)
  *col-md-4* (va a ocupar 4 columnas desde 768px para arriba)
  *col-lg-3* (va a ocupar 3 columnas desde 1024px para arriba)
  
  Si no pones la medida en la clase col, quiere decir que siempre va a ocupar las columnas que le indiques, al menos que le agregues otra clase   con la medida.
  Ejemplo:
  ```html
  <div class="row">
      <div class="col-12 col-md-4 col-lg-3"></div>
  </div>
  ```
  En este ejemplo, el div va a ocupar 12 columnas hasta 768px, debido a que a partir de 768px ocupará 4 columnas, y a partir de 1024px ocupará  3  columnas.
  
  Y así podes seguir y formar todas las combinaciones que quieras segun lo necesite tu página.

  #### Start Column
   Tyle también cuenta con clases para que puedas elegir a partir de que columna empieza el div.
   Dicha clase se llama de la siguientes maneras:
   ***start-(A partir de que columna empieza)***
   O también podes elegir a partir de que medida empezará en la columna que elijas, poniendo la clase de la siguiente forma:
   ***start-(A partir de que medida)-(A partir de que columna empieza)***
 
   Las medidas son las mismas que las mencionadas anteriormente (xs, sm, md, lg, xl).
   
   En el siguiente ejemplo podrás observar mejor lo mencionado anteriormente:
   
   Html
   ```html
   <div class="row">
       <div class="col-5 start-5">Comienza en la columna 5</div>
       <div class="col-8 start-2">Comienza en la columna 2</div>
       <div class="col-9 start-3">Comienza en la columna 3</div>    
   </div>
   ```
   Resultado:
   
   ![Start Column](/images/start-col.png "Start Column")
   
   Como podrás observar (con la ayuda del inspector de google Chrome) que cada div comienza donde se lo indiques.

 ### Clases Utilitarias:

  #### Clases para la propiedad *Display:*
   La propiedad ***display*** especifica el comportamiento de visualización de un elemento. Dicha propiedad se le  puede aplicar a cualquier   elemento. Esta propiedad puede aceptar muchos valores diferentes. Tyle tiene clases  para los valores más importantes. Estos valores son:
       <ul>
        <li> <em><strong>inline</strong></em>: Este valor hace que la caja de un elemento se de linea, y por lo tanto solo ocupa el espacio necesario para mostrar sus contenidos.       
            <img src="/images/display-inline.png" alt="Display" style="display: block;" /> 
        </li>
        <li> <em><strong>block</strong></em>: Este valor hace que la caja de un elemento se de bloque, y por lo tanto ocupa todo el espacio disponible hasta el final de su linea, aunque sus contenidos puedan no ocupar todo el sitio. 
            <img src="/images/display-block.png" alt="Display" style="display: block;" />         
        </li>
        <li> <em><strong>inline-block</strong></em>: Este valor crea cajas que son de bloque y de linea simultaneamente.  Una caja de tipo inline-block se comporta como si fuera de bloque, pero respecto a los elementos que la rodean es una caja en línea.
            <img src="/images/display-inline-block.png" alt="Display" style="display: block;" />         
        </li>
        <li> <em><strong>list-item</strong></em>: Este valor hace que cualquier elemento de cualquier tipo al que se le aplique se muestre como si fuera un elemento de una lista.
            <img src="/images/display-list-item.png" alt="Display" style="display: block;" />         
        </li>    
        <li> <em><strong>flex</strong></em>: Este valor define un contenedor flexible; en línea o bloque dependiendo del valor dado. Permite un contexto flexible para todos sus hijos directos. Al definir este valor a un contenedor se genera lo siguiente: 
            <img src="/images/flexbox.png" alt="Flexbox" style="display: block;" />
            <ul style="margin-left: 30px">
                <li><em><strong>main axis</strong></em>: El eje principal de un contenedor flexible es el *main axis* a lo largo del cual se disponen los elementos flexibles. No es necesariamente horizontal; depende de la propiedad *flex-direction**</li>
                <li><em><strong>main-start | main-end</strong></em>: Los elementos flexibles se colocan dentro del contenedor comenzando desde el *main-axis* y hasta el *main-end*.</li>
                <li><em><strong>main size</strong></em>:  El ancho o la altura de un elemento flexible se define por cualquier que esté en la dimensión principal, y es el tamaño *main size*. La propiedad de tamaño principal del elemento Flex es la propiedad 'ancho' o 'alto', cualquiera que esté en la dimensión principal.</li>
                <li><em><strong>cross axis</strong></em>: El eje perpendicular al *main axis* se llama *cross axis*. Su dirección depende de la dirección del *main axis*.</li>
                <li><em><strong>cross-start | cross-end</strong></em>: Las líneas flexibles se llenan con elementos y se colocan en el contenedor comenzando en el lado de *cross start* del contenedor flexible y yendo hacia el lado del *cross end*.</li>
                <li><em><strong>cross size</strong></em>: El ancho o la altura de un elemento flexible, cualquiera que esté en la dimensión transversal, es el *cross size* del artículo. La propiedad de tamaño cruzado es cualquiera de 'ancho' o 'altura' que esté en la dimensión transversa</li>            
            </ul>
            <img src="/images/display-flex.png" alt="Display" style="display: block;" />             
        </li>
        <li> <em><strong>inline-flex</strong></em>: Establece un contenedor de ítems flexible en línea, de forma equivalente a inline-block.
            <img src="/images/display-inline-flex.png" alt="Display" style="display: block;" />         
        </li>
        <li> <em><strong>grid</strong></em>: Define al elemento como una grilla. Por si sola, esta propiedad no hace nada, si no que va en conjunto de otras propiedades. Se debe aplicar a un contenedor y, así el contendedor y todos sus hijos directos podrán recibir propiedades de grid.
            <img src="/images/display-grid.png" alt="Display" style="display: block;" />         
        </li>
        <li> <em><strong>inline-grid</strong></em>: Establece un contenedor de grid en línea, de forma equivalente a inline-block.
            <img src="/images/display-inline-grid.png" alt="Display" style="display: block;" />         
        </li>
        <li> <em><strong>none</strong></em>: Este valor hace que el elemento al que se le aplica no genere ninguna caja. El resultado es que el elemento desaparece por completo de la página y no ocupa sitio, por lo que los elementos adyacentes ocupan su lugar. Si se utiliza la propiedad *display: none* sobre un elemento, todos sus descendientes también desaparecen por completo de la página.
            <img src="/images/display-none.png" alt="Display" style="display: block;" />         
         </li>
       </ul>
   Para indicar una clase para la propiedad *display*, debes poner la clase de la siguiente manera:
   
   ***d-(valor)***
   
   Los valores son los mencionados anteriormente (inline, block, inline-block, list-item, flex, inline-flex, grid,  inline-grid, none).

   Estas diferentes clases para la propiedad *display* cuentan con las diferentes clases para el responsive. Estas clases para el responsive son las mencionadas anteriormente (ver sistema de grid).
   Para indicar estas clases se hace de la siguiente manera:

   ***d-(medida responsive)-(valor)***
 
   Como podrás saber, las *medidas responsive* son *xs*, *sm*, *md*, *lg* y *xl*; y los valores son *inline*,   *block*, *inline-block*, *list-item*, *flex*, *inline-flex*, *grid*, *inline-grid* y *none*.
   Ya con esto, puedes hacer todas las convinaciones que tu pagina requiera. 
 
  #### Clases de Grid:
 
   - #### Grid Gap:
   
    La proppiedad ***grid-gap*** se puede aplicar solamente a los componentes que tengan la propiedad *display: grid*.
    Grid gap se refiere a la separación que hay entre las columnas y filas que se encuentran dentro del componente que tenga  la propiedad    display: grid.
    
    Como podrás ver en la siguiente imagen, el contenedor (con la clase *row*) no tiene la propiedad *grid-gap*, y por lo  tanto no hay ninguna    separación entre sus columnas y filas.
    ![Sin Grid Gap](/images/grid-gap-0.png "Sin Grid Gap")
    
    En cambio, en la siguiente imagen, el contenedor si tiene la propiedad *grid-gap*, y por la tanto se genera una  separación entre sus    columnas y filas.
    ![Con Grid Gap](/images/grid-gap-1.png "Con Grid Gap")
    
    Tyle cuenta con clases para el *grid-gap*. Estas calses se llaman de la siguiente manera:
    **grid-gap-(número)**
    El numero que va luego de *grid-gap-* puede ir del 0 hasta al 10. Cuanto mas grande sea el número, habrá una mayor  separación entre   columnas  y filas.
    
   - #### Order:
    La propiedad ***order*** sirve para indicarle un orden al componente que tenga dicha propiedad. Solo se le puede aplicar  a los hijos    directos de los componentes que tengan la propiedad *display: grid* o la propiedad *display: flex*. La  propiedad *order* solor acepta    números, y estos números pueden ser tanto positivos, como negativos. El valor por defecto  de la propiedad *order* es 0.
    Tyle cuenta con clases para la propiedad *order*, y dicahs clases se indican de la siguiente forma:
    ***order-(número)***
    El número, que va luego de *order-*, puede ir desde -6 hasta 6.
    
    Ejemplo:
    ```html
    <div class="row">
        <div class="col-4">Elemento Nº 1</div>
        <div class="col-4">Elemento Nº 2</div>
        <div class="col-4">Elemento Nº 3</div>
        <div class="col-4">Elemento Nº 4</div>
        <div class="col-4">Elemento Nº 5</div>
        <div class="col-4">Elemento Nº 6</div>
        <div class="col-4">Elemento Nº 7</div>
        <div class="col-4">Elemento Nº 8</div>
        <div class="col-4">Elemento Nº 9</div>
        <div class="col-4">Elemento Nº 10</div>
        <div class="col-4">Elemento Nº 11</div>
        <div class="col-4">Elemento Nº 12</div>
    </div>
    ```
    
    Resultado:
    ![Sin la propiedad order](/images/order-0.png "Sin la propiedad order")
    
    Como podrás ver en la anterior imagen, los elementos no tienen la propiedad *order*, y por lo tanto, están ubicados  según su posición en  el html.
    
    En cambio, en la siguiente situación, los elementos tienen la propiedad *order*, y ya no se posicionan según están  ubicados en el html, si    no que se posicionan según la propiedad order
    
    ```html
    <div class="row">
        <div class="col-4 order--3">Elemento Nº 1</div>
        <div class="col-4 order--1">Elemento Nº 2</div>
        <div class="col-4 order-1">Elemento Nº 3</div> 
        <div class="col-4 order--2">Elemento Nº 4</div> 
        <div class="col-4 order-3">Elemento Nº 5</div>
        <div class="col-4 order-2">Elemento Nº 6</div>
        <div class="col-4 order--6">Elemento Nº 7</div>
        <div class="col-4 order--4">Elemento Nº 8</div>
        <div class="col-4 order-6">Elemento Nº 9</div> 
        <div class="col-4 order-5">Elemento Nº 10</div>
        <div class="col-4 order--5">Elemento Nº 11</div>
        <div class="col-4 order-4">Elemento Nº 12</div>
    </div>
    ```
    
    Resultado:
    ![Con la propiedad order](/images/order-1.png "Con la propiedad order")
   
   - #### Justify Items:
    Esta propiedad ***justify-items*** se le debe aplicar (en el caso de grid) a los contenedores que tengan la propiedad  *display: grid*. Lo   que hace esta propiedad es alinear el contenido dentro de un elemento de la cuadrícula a lo largo  del eje de la fila. Dicha propiedad  puede  tener los siguientes valores:
   
    <ul>
       <li> <em>start:</em> Alinea el contenido en el extremo izquierdo del área de la cuadrícula.</li>
       <img src="/images/justify-items-1.png" alt="Justify Items" style="display: block;" />
       <li> <em>end:</em> Alinea el contenido en el extremo derecho del área de la cuadrícula.</li>
       <img src="/images/justify-items-2.png" alt="Justify Items" style="display: block;" />
       <li> <em>center:</em> Alinea el contenido en el centro del área de la cuadrícula.</li>
       <img src="/images/justify-items-3.png" alt="Justify Items" style="display: block;" />
       <li> <em>stretch:</em> Rellena toda la altura del área de la cuadrícula (este es el valor predeterminado).</li>
       <img src="/images/justify-items-4.png" alt="Justify Items" style="display: block;" />
    </ul>
   
    Tyle cuenta con clases para estas propiedades. Para indicar dicahs clases se hace de la siguiente manera:
   
    ***g-justify-items-(valor)***
   
    La *g-* es para diferenciar las clases de grid de las de flexbox, ya que en flexbox hay propiedades con el mismo nombre  pero diferente   valor. Y los *valores* son los mencionados anteriormente (start, end, center, stretch).
   
   - #### Align Items:
    Esta propiedad ***align-items*** se le debe aplicar (en el caso de grid) a los contenedores que tengan la propiedad  *display: grid*. Lo  que  hace esta propiedad es alinear el contenido dentro de un elemento de la cuadrícula a lo largo  del eje de la columna. Dicha propiedad  puede  tener los siguientes valores:
    <ul>
       <li> <em>start<em>: Alinea el contenido en la parte superior del área de la cuadrícula.</li>
       <img src="/images/align-items-1.png" alt="Align Items" style="display: block;" />
       <li> <em>end<em>: Alinea el contenido en la parte inferior del área de la cuadrícula.</li>
       <img src="/images/align-items-2.png" alt="Align Items" style="display: block;" />
       <li> <em>center<em>: Alinea el contenido en el centro del área de la cuadrícula.</li>
       <img src="/images/align-items-3.png" alt="Align Items" style="display: block;" />
       <li> <em>stretch<em>: Rellena todo el ancho del área de la cuadrícula (este es el valor por defecto).</li>
       <img src="/images/justify-items-4.png" alt="Align Items" style="display: block;" />
    </ul>
    Tyle cuenta con clases para estas propiedades. Para indicar dichas clases se hace de la siguiente manera:
   
    ***g-align-items-(valor)***
   
    Los *valores* son los mencionados anteriormente (start, end, center, stretch).
   
   - #### Justify Content:
    Esta propiedad ***justify-content*** se le debe aplicar (en el caso de grid) a los contenedores que tengan la propiedad  *display: grid*.  Lo  que hace esta propiedad es alinear el todo el contenido de la cuadrícula dentro del contenedor de la  cuadrícula. Esta propiedad alinea  la  cuadrícula a lo largo del eje de la fila. Dicha propiedad puede tener los  siguientes valores:
    <ul>
       <li> <em>start:</em> Alinea la cuadrícula con el extremo izquierdo del contenedor de la cuadrícula.</li>
       <img src="/images/justify-content-1.png" alt="Justify Content" style="display: block;" />
       <li> <em>end:</em> Alinea la grilla con el extremo derecho del contenedor de la grilla.</li>
       <img src="/images/justify-content-2.png" alt="Justify Content" style="display: block;" />
       <li> <em>center:</em> Alinea la cuadrícula en el centro del contenedor de la cuadrícula.
       <img src="/images/justify-content-3.png" alt="Justify Content" style="display: block;" />
       <li> <em>stretch:</em> Cambia el tamaño de los elementos de la grilla para permitir que la grilla ocupe todo el  ancho del contenedor de   la grilla.</li>
       <img src="/images/justify-content-4.png" alt="Justify Content" style="display: block;" />
       <li> <em>space-between:</em> Coloca una cantidad par de espacio entre cada elemento de la cuadrícula, sin espacio en  los extremos.</li>
       <img src="/images/justify-content-5.png" alt="Justify Content" style="display: block;" />
       <li> <em>space-around:</em> Coloca una cantidad par de espacios entre cada elemento de la grilla, con espacios de la  mitad de tamaño en   los extremos.</li>
       <img src="/images/justify-content-6.png" alt="Justify Content" style="display: block;" />
       <li> <em>space-evenly:</em> Coloca una cantidad igual de espacio entre cada elemento de la cuadrícula, incluidos los  extremos.</li>
       <img src="/images/justify-content-7.png" alt="Justify Content" style="display: block;" />
    </ul>
   
    Tyle cuenta con clases para estas propiedades. Para indicar dichas clases se hace de la siguiente manera:
   
    ***g-justify-content-(valor)***
   
    Los *valores* son los mencionados anteriormente (start, end, center, stretch, beetween, around, evenly).
   
   - #### Align Content:
    Esta propiedad ***align-content*** se le debe aplicar (en el caso de grid) a los contenedores que tengan la propiedad  *display: grid*. Lo   que hace esta propiedad es esestablecer la alineación de la cuadrícula dentro del contenedor de la  cuadrícula. Esta propiedad alinea la   cuadrícula a lo largo del eje de la columna. Dicha propiedad puede tener los  siguientes valores:
    <ul>
       <li> <em>start:</em> Alinea la cuadrícula con la parte superior del contenedor de la cuadrícula.</li>
       <img src="/images/align-content-1.png" alt="Align Content" style="display: block;" />
       <li> <em>end:</em> Alinea la grilla con la parte inferior del contenedor de la grilla.</li>
       <img src="/images/align-content-2.png" alt="Align Content" style="display: block;" />
       <li> <em>center:</em> Ainea la cuadrícula en el centro del contenedor de la cuadrícula.</li>
       <img src="/images/align-content-3.png" alt="Align Content" style="display: block;" />
       <li> <em>stretch:</em> Cambia el tamaño de los elementos de la grilla para permitir que la grilla ocupe toda la  altura del contenedor  de  la grilla.</li>
       <img src="/images/align-content-4.png" alt="Align Content" style="display: block;" />
       <li> <em>space-between:</em> Coloca una cantidad par de espacio entre cada elemento de la cuadrícula, sin espacio en  los extremos.</li>
       <img src="/images/align-content-5.png" alt="Align Content" style="display: block;" />
       <li> <em>space-around:</em> Coloca una cantidad par de espacios entre cada elemento de la grilla, con espacios de la  mitad de tamaño en   los extremos.</li>
       <img src="/images/align-content-6.png" alt="Align Content" style="display: block;" />
       <li> <em>space-evenly:</em> Coloca una cantidad igual de espacio entre cada elemento de la cuadrícula, incluidos los  extremos.</li>
       <img src="/images/align-content-7.png" alt="Align Content" style="display: block;" />
    </ul>
   
    Tyle cuenta con clases para estas propiedades. Para indicar dichas clases se hace de la siguiente manera:
   
    ***g-align-content-(valor)***
   
    Los *valores* son los mencionados anteriormente (start, end, center, stretch, beetween, around, evenly).
   
   - #### Justify Self:
    Esta propiedad ***justify-self*** se le debe aplicar (en el caso de grid) a los contenedores que tengan la propiedad  *display: grid*. Lo  que  hace esta propiedad es alinear el contenido dentro de un elemento de la cuadrícula a lo largo  del eje de la fila. Este valor se  aplica al  contenido dentro de un único elemento de la grilla. Dicha propiedad puede  tener los siguientes valores:
    <ul>
       <li> <em>start:</em> Alinea el contenido en el extremo izquierdo del área de la cuadrícula.</li>
       <img src="/images/justify-self-1.png" alt="Justify Self" style="display: block;" />
       <li> <em>end:</em> Alinea el contenido en el extremo derecho del área de la cuadrícula.</li>
       <img src="/images/justify-self-2.png" alt="Justify Self" style="display: block;" />
       <li> <em>center:</em> Alinea el contenido en el centro del área de la cuadrícula.</li>
       <img src="/images/justify-self-3.png" alt="Justify Self" style="display: block;" />
       <li> <em>stretch:</em> Rellena todo el ancho del área de la cuadrícula (este es el valor por defecto).</li>
       <img src="/images/justify-self-4.png" alt="Justify Self" style="display: block;" />
    </ul>
   
    Tyle cuenta con clases para estas propiedades. Para indicar dicahs clases se hace de la siguiente manera:
   
    ***g-justify-self-(valor)***
   
    Los *valores* son los mencionados anteriormente (start, end, center, stretch).
  
   - #### Align Self:
    Esta propiedad ***align-self*** se le debe aplicar (en el caso de grid) a los contenedores que tengan la propiedad  *display: grid*. Lo que  hace esta propiedad es alinear el contenido dentro de un elemento de la cuadrícula a lo largo  del eje de la columna. Este valor se aplica al  contenido dentro de un único elemento de la grilla. Dicha propiedad puede  tener los siguientes valores:
    <ul>
       <li> <em>start:</em> Alinea el contenido en la parte superior del área de la cuadrícula.</li>
       <img src="/images/align-self-1.png" alt="Align Self" style="display: block;" />
       <li> <em>end:</em> Alinea el contenido en la parte inferior del área de la cuadrícula.</li>
       <img src="/images/align-self-2.png" alt="Align Self" style="display: block;" />
       <li> <em>center:</em> Alinea el contenido en el centro del área de la cuadrícula.</li>
       <img src="/images/align-self-3.png" alt="Align Self" style="display: block;" />
       <li> <em>stretch:</em> Rellena toda la altura del área de la cuadrícula (este es el valor predeterminado).</li>
       <img src="/images/align-self-4.png" alt="Align Self" style="display: block;" />
    </ul>
   
    Tyle cuenta con clases para estas propiedades. Para indicar dicahs clases se hace de la siguiente manera:
   
    ***g-align-self-(valor)***
   
    Los *valores* son los mencionados anteriormente (start, end, center, stretch).
   
  #### Clases de Flexbox:
  
   - #### Flex Direction:
    La propiedad ***flex-direction*** establece la dirección de un elemento flexible dentro de un contenedor (es decir que el contenedor tenga   la  propiedad *display: flex*).
   
    La propiedad *flex-direction* puede tener los siguientes valores:
    <li> <em>row:</em> Este es el valor por defecto. Los elementos flexibles se muestran horizontalmente, como una fila</li>
    <li> <em>row reverse:</em> Los elementos flexibles se muestran horizontalmente, como una fila, pero en orden invertido</li>
    <li> <em>Column:</em> Los elementos flexibles se muestran verticalmente, como una columna</li>
    <li> <em>Column reverse:</em> Los elementos flexibles se muestran verticalmente, como una columna, pero en orden invertido</li>
   
    En la siguiente imagen podrás apreciar mejor esta propiedad:
   
    <img src="/images/flex-direction.png" alt="Flex direction" style="display: block;" />
   
    Tyle ya cuenta con clases para dicha propiedad, y estas clases se indican de la siguiente manera:
   
    ***f-flex-direction-(valor)***
   
    Todas las clases de flexbox que siguen a continuación y, estas mismas clases también, llevan una *f-* delante de la clase para   diferenciarlas   de las clases de css grid, que tienen la misma propiedad pero diferentes valores. Los valores que van luego de   *f-flex-direction-* son los   mencionados anteriormente (row, row-reverse, col, col-reverse).
  
   - #### Flex Wrap:
    La propiedad ***flex-wrap*** solo se le puede aplicar a los contenedores que tengan la propiedad *display: flex;*. Esta propiedad   *flex-wrap*,especifica si los elementos flexibles deben ajustarse o no. Como ya fue mencionado anteriormente, lo que hace la propiedad   *dispaly: flex* es poner todos sus elementos hijos en una sola linea, a pesar de que no entren, al no entrar, se disminuye el tamaño de los  elementos hijos para  que puedan entrar. Si tu no quieres que esto ocurra, debes utilizar la propiedad *flex-wrap*, que solo acepta los   siguientes valores:
    
    <li> <em>nowrap:</em> Este es el valor por defecto, y por lo tanto, los elementos hijos se ajustarán al contenido de ser necesario.</li>
    <li> <em>wrap:</em> Este valor especifica que si los elementos hijos, del contenedor flexible, no entran, se irán a la siguiente   fila/columna (según el <em>flex-direction</em>), generando de esta manera un contenedor flexible de líneas multiples.</li>
    <li> <em>wrap-reverse:</em> Este valor especifica lo mismo que el valor <em>wrap</em>, solo que revierte los elementos.</li>
    
    En la siguiente imagen podrás apreciar mejor la propiedad *flex-wrap*:
    <img src="/images/flex-wrap.png" alt="Flex Wrap" style="display: block;" />
    
    Tyle ya cuenta con clases para dicha propiedad, y estas clases se indican de la siguiente manera:
    
    ***f-flex-wrap-(valor)***
    
    Los valores que van luego de *f-flex-wrap-* son los mencioandos anteriormente (no-wrap, wra, wrap-reverse).
  
   - #### Flex Grow:
    La propiedad ***flex-grow*** solo se le puede aplicar a los hijos de los contenedores que tengan lo propiedad *display: flex*. Esta  propiedad  *flex-grow* especifica la capacidad de que un elemento flexible crezca si es posible. Esta propiedad acepta cualquier número  positivo, y  funciona de la siguiente manera:
    Lo que hace es calcular el espacio disponible, y darselos a los que tengan esta propiedad según el valor que tengan.
    Por ejemplo: Si hay un elemento que tenga un *flex-grow: 1* y otro tiene un *flex-grow: 3*, se calcula el espacio disponible y lo divide  entre 4, ya que suma el valor de esta propiedad de cada elemento del contenedor, y le da 3/4 partes al segundo elemento y 1/4 parte al  primer elemento.
  
    En el siguiente ejemplo entenderás esto mejor:
    <img src="/images/flex-grow-1.png" alt="Flex Grow" style="display: block;" />
    <img src="/images/flex-grow-2.png" alt="Flex Grow" style="display: block;" />
   
    Como habrás podido observar, al primer elemento se le ha agregado la propiedad *flex-grow* y ha crecido según el espacio disponible que  había.
   
    Una vez más, Tyle ya cuenta con clases para esta propiedad, y se indican de la siguiente manera: 
   
    ***f-flex-grow-(número)*** 
   
    El número que va luego de *f-flex-grow* puede ir del 1 al 5.
   
   - #### Flex Shrink: 
    La propiedad ***flex-shrink*** solo se le puede aplicar a los contenedores que tengan la propiedad *display: flex;*. Esta propiedad    *flex-shrink* especifica la capacidad de que un elemento flexible se encoja. Esta propiedad acepta cualquier número positivo. Esta  propiedad, funciona de una manera muy similar a *flex-grow*, pero con resultado opuesto.
    En el siguiente ejemplo lo podrás entender mejor:
    <img src="/images/flex-shrink-1.png" alt="Flex Shrink" style="display: block;" />
    Como podrás observar, los 4 elementos no entran en el container.
    Pero aplicando un *flex-shrink* al primer elemento sucede lo siguiente:
    <img src="/images/flex-shrink-2.png" alt="Flex Shrink" style="display: block;" /> 
    Al aplicarle un *flex-shrink* al primer elemento, este se encojió dandole más espacio a los demás elementos.
  
    Tyle ya cuenta con clases para esta propiedad, y se indican de la siguiente manera:
     
    ***f-flex-shrink-(número)*** 
   
    El número que va luego de *f-flex-shrink* puede ir del 1 al 5.
 
   - #### Order:
    La propiedad ***order*** también se puede utilizar en los elementos hijos de un contenedor que tenga la propiedad *display: flex*, y esta   propiedad *order* es la misma que la mencionada anteriormente (en las calses de grid), y funciona exactamente de la misma manera.
 
   - #### Align Items:
    Esta propiedad ***align-items*** se le debe aplicar (en el caso de flexbox) a los contenedores que tengan la propiedad  *display: flex*. La  propiedad *align-items* define el comportamiento predeterminado de cómo se colocan los elementos flexibles a lo largo del eje transversal  en la línea actual. Dicha propiedad puede tener los siguientes valores:
    <ul>
        <li> <em>flex-start<em>: Alinea el contenido en la parte superior del eje transversal.</li>
        <li> <em>flex-end<em>: Alinea el contenido en la parte inferior del eje transversal.</li>
        <li> <em>center<em>: Alinea el contenido en el centro del eje transversal.</li>
        <li> <em>baseline<em>: Las lineas base de los elementos están alineados.</li>
        <li> <em>stretch<em>: Los elementos se estiran hasta llenar todo el contenedor (este es el valor por defecto).</li>
    </ul>
    <img src="/images/f-align-items.png" alt="Align Items" style="display: block;" /> 
    
    Tyle cuenta con clases para estas propiedades. Para indicar dichas clases se hace de la siguiente manera:
    
    ***f-align-items-(valor)***
    
    Los *valores* son los mencionados anteriormente (start, end, center, baseline, stretch).
   
   - #### Justify Content:
    Esta propiedad ***justify-content*** se le debe aplicar (en el caso de flexbox) a los contenedores que tengan la propiedad  *display:  flex*. Lo  que hace esta propiedad es alinear a lo largo del eje principal. Ayuda a distribuir el espacio libre que sobra cuando todos los   elementos flexibles de una línea son inflexibles o flexibles, pero han alcanzado su tamaño máximo. También ejerce algún control sobre la   alineación de los elementos cuando se desbordan la línea.. Dicha propiedad puede tener los  siguientes valores:
    <ul>
        <li> <em>flex-start:</em> Alinea el contenido hacia la linea de inicio del contenedor flexible.</li>
        <li> <em>flex-end:</em> Alinea el contenido hacia la linea de fin del contenedor flexible.</li>
        <li> <em>center:</em> Alinea el contenido hacia la linea del centro del contenedor flexible. </li>
        <li> <em>space-between:</em> Distribuye el contenido de manera uniforme. El primer elemento va hacia la linea de inicio y, el último   hacia la linea de fin.</li>
        <li> <em>space-around:</em> Distribuye el contenido de manera uniforme con espacios entre los elementos. Estos espacios son de la   mitad de tamaño en los extremos.</li>
        <li> <em>space-evenly:</em>  Distribuye el contenido de manera uniforme con espacios exactamente iguales (tanto al inicio como al final) entre los elementos. </li>
    </ul>
    <img src="/images/f-justify-content.png" alt="Justify Content" style="display: block;" /> 
  
    Tyle cuenta con clases para estas propiedades. Para indicar dichas clases se hace de la siguiente manera:
    
    ***f-justify-content-(valor)***
    
    Los *valores* son los mencionados anteriormente (start, end, center, beetween, around, evenly).
   
   - #### Align Content:
    Esta propiedad ***align-content*** se le debe aplicar (en el caso de flexbox) a los contenedores que tengan la propiedad  *display: flex*.    Esta propiedad alinea las líneas de un contenedor flexible dentro del contenedor flexible cuando hay espacio adicional en el eje   transversal. Dicha propiedad puede tener los siguientes valores:
    <ul>
        <li> <em>flex-start:</em> Alinea el contenido en la linea de inicio del eje transversal.</li>
        <li> <em>flex-end:</em> Alinea el contenido en la linea de fin del eje transversal.</li>
        <li> <em>center:</em> Alinea el contenido en el centro del eje transversal.</li>
        <li> <em>space-between:</em> Distribuye el contenido de manera uniforme en el eje transversal. El primer elemento va hacia la linea de   inicio del eje transversal y, el último hacia la linea de fin del eje transversal.</li>
        <li> <em>space-around:</em> Distribuye el contenido de manera uniforme en el eje transversal con espacios entre los elementos. Estos   espacios son de la mitad de tamaño en los extremos.</li>
        <li> <em>stretch:</em> Este es el valor por defecto. Las líneas se estiran para ocupar el espacio restante.</li>
    </ul>
    <img src="/images/f-align-content.png" alt="Align Content" style="display: block;" /> 
  
    Tyle cuenta con clases para estas propiedades. Para indicar dichas clases se hace de la siguiente manera:
    
    ***f-align-content-(valor)***
    
    Los *valores* son los mencionados anteriormente (start, end, center, stretch, beetween, around).
   
   - #### Align Self:
    Esta propiedad ***align-self*** se le debe aplicar (en el caso de flexbox) a los hijos de los contenedores que tengan la propiedad    *display: flex*. Lo que  hace esta propiedad es alinear el elemento, al que se le aplique esta propiedad, en el eje transversal. Dicha   propiedad puede tener los siguientes valores:
    <ul>
        <li> <em>flex-start:</em> El elemento se alinea en la linea de inicio del eje transversal.</li>
        <li> <em>flex-end:</em>El elemento se alinea en la linea de fin del eje transversal.</li>
        <li> <em>center:</em> El elemento se alinea en el centro del eje transversal.</li>
        <li> <em>stretch:</em> El elemento ocupa toda la altura del eje transversal</li>
        <li> <em>baseline:</em> Se alinea con las lineas bases de los elementos</li>
        <li> <em>auto:</em> El elemento se alineará en función del valor predeterminado o el valor especificado para la propiedad  *align-items*.  (este es el valor predeterminado).</li>
    </ul>
    <img src="/images/f-align-self.png" alt="Align Self" style="display: block;" /> 
    
    Tyle cuenta con clases para estas propiedades. Para indicar dicahs clases se hace de la siguiente manera:
    
    ***f-align-self-(valor)***
    
    Los *valores* son los mencionados anteriormente (start, end, center, stretch, baseline, auto).

  #### Clases para las propiedades *margin* y *padding:*
  
   - #### Margin:
      La propiedad ***margin*** se utiliza para generar un espaciado entre los elementos, fuera de cualquier borde definido. Con css tenés control total sobre el *margin*. Existen propiedades para establecer el margin de cada lado de un elemento (arriba, derecha, abajo e izquierda).
      Las diferentes propiedades para el margin son:
      - *margin:* Establece un espaciado en los cuatro lados.
      - *margin-top:* Establece un espaciado en la parte de arriba del elemento.
      - *margin-right:* Establece un espaciado en la parte derecha del elemento.
      - *margin-bottom:* Establece un espaciado en la parte de abajo del elemento.
      - *margin-left:* Establece un espaciado en la parte izquierda del elemento. 

      Tyle ya cuenta con clases para estas propiedades. Dichas clases se indican de la siguiente manera:

      ***(propiedad Abreviada)-(Valor)***    

      Las propiedades abreviadas son ***m*** (para el *margin*), ***mt*** (para el *margin-top*), ***mr*** (para el *margin-right*), ***mb*** (para el *margin-bottom*) y ***ml*** (para el *margin-left*). Pero Tyle también tiene clases para establecer el *margin* en left y en right al mismo tiempo (***mx***) y para top y bottom (***my***). Los valores son: *0*, *1*, *2*, *3*, *4*, *5* y *auto*.

      En la siguiente imagen podrás observar las diferentes medidas para los *margins*:
       <img src="/images/margin.png" alt="Margin" style="display: block;" />      

   - #### Padding:
      La propiedad ***padding*** se utiliza para generar un espaciado alrededor del contenido de un elemento, dentro cualquier borde definido. Al igual que con ek *margin*, con css tenés control total sobre el *padding*. Existen propiedades para establecer el padding de cada lado de un elemento (arriba, derecha, abajo e izquierda).
      Las diferentes propiedades para el padding son:
      - *padding:* Establece un espaciado  dentro del contenido del elemento en los cuatro lados.
      - *padding-top:* Establece un espaciado dentro del contenido del elemento en la parte de arriba del elemento.
      - *padding-right:* Establece un espaciado dentro del contenido del elemento en la parte derecha del elemento.
      - *padding-bottom:* Establece un espaciado  dentro del contenido del elementoen la parte de abajo del elemento.
      - *padding-left:* Establece un espaciado dentro del contenido del elemento en la parte izquierda del elemento. 

      Tyle ya cuenta con clases para estas propiedades. Dichas clases se indican de la siguiente manera:

      ***(propiedad Abreviada)-(Valor)***    

      Las propiedades abreviadas son ***p*** (para el *padding*), ***pt*** (para el *padding-top*), ***pr*** (para el *padding-right*), ***pb*** (para el *padding-bottom*) y ***pl*** (para el *padding-left*). Pero Tyle también tiene clases para establecer el *padding* en left y en right al mismo tiempo (***px***) y para top y bottom (***py***). Los valores son: *0*, *1*, *2*, *3*, *4* y *5*. En la siguiente imagen podrás observar las diferentes medidas para los *paddings*:
       <img src="/images/padding.png" alt="Padding" style="display: block;" />   