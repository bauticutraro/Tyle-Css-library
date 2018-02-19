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
Además, otra cosa que podrás observar en el anterior código es que se está linkeando un archivo exterior, este archivo es de fontastic (se utiliza para poder incluir íconos en la página), que trae algunos íconos para utilizarlos en los diferentes componentes de Tyle.
