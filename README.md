<h1 style="text-align: center">Tyle</h1>
Tyle es una libreía de css de código abierto con un sistema de grid de 12 columnas (utilizando css grid). Además de contar con el sistema de grid, cuenta tambien con propiedades utilitarias, como lo son por ejemplo las propiedades de flexbox, de grid, propiedades para los márgenes, entre otros.

Tyle también cuenta con componentes adicionales como por ejemplo botones, barras de progreso, navs, modals, cards, entre otros.

---

##¿Cómo utilizarlo?
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

Como podrás ver en el anterior cuadro, tenes la libertad de poder elegir si querés utilizar todo lo que es Tyle, o solo su sistema de grid o sus componentes o sus clases utilitarias.

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
Cómo podrás observar, solor tienes que vincular los archivos de Tyle de Css y JavaScript para comenzar a utilizarlo y poder desarrollar todo tu código con Tyle.

Además, otra cosa que podrás observar en el anterior código es que, se está linkeando un archivo exterior,este archivo es de _fontastic_ (se utiliza para poder incluir íconos en la página), que trae algunos íconos para utilizarlos en los diferentes componentes de Tyle.

## Documentación:

### Sistema de Grid:

Para empezar, Tyle cuenta con un sistema de grid de 12 columnas. Dicho sistema esta hecho con Css grid.

Para utilizar el sistema de grid debes crear un div con la clase **_row_**, y allí dentro del div ponés los distintos componenetes con sus respectivas clases del sistema de grid. Dichas clases que le debes poner a los hijos del div con la clase _row_ son las diferentes clases de columnas que las indicas con la clase **_col-_** y luego del guión le indicas cuantas columnas querés que ocupe tu elemento. Tal como se muestra en el siguiente bloque de código:

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
Con un poco de estilos css (indicándole a los contenedores una altura, un color de fondo, un color al texto, un centrado total al texto, una separación entre los divs, que cada contenedor valla debajo y no al lado, etc...) , obtenés el siguiente resultado:

![Grid sistem](/images/grid-sistem.png "Grid sistem")

Sin embargo, esto no es todo acerca del sistema de grid, ya que Tyle cuenta con un sistema de grid totalmente responsive.
Estas clases para el responsive de los elementos se definen de la siguiente manera:
**_col_-(a partir de que medida ocupa dichas columnas)-(Número de columnas a ocupar)**
Las medidas utilizadas en Tyle son las siguientes: 

| Clase | Desde  |  Hasta  |
| ----- |:-----: | :-----: |
| _xs_  | 480px  | 639px   |
| _sm_  | 640px  | 767px   |
| _md_  | 768px  | 1023px  |
| _lg_  | 1024px | 1365px  |
| _xl_  | 1366px | +1366px |

Por lo tanto podés formar clases como por ejemplo:
_col-xs-12_ (va a ocupar 12 columnas desde 480px para arriba)
_col-sm-6_ (va a ocupar 6 columnas desde 640px para arriba)
_col-md-4_ (va a ocupar 4 columnas desde 768px para arriba)
_col-lg-3_ (va a ocupar 3 columnas desde 1024px para arriba)

Si no pones la medida en la clase col, quiere decir que siempre va a ocupar las columnas que le indiques, al menos que le agregues otra clase con la medida.
Ejemplo:
```html
<div class="row">
    <div class="col-12 col-md-4 col-lg-3"></div>
</div>
```
En este ejemplo, el div va a ocupar 12 columnas hasta 768px, debido a que a partir de 768px ocupará 4 columnas, y a partir de 1024px ocupará 3 columnas.

Y así podes seguir y formar todas las combinaciones que quieras segun lo necesite tu página.

