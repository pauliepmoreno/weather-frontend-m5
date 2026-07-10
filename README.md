# 🌍 City Climate

Aplicación de clima que muestra el estado del tiempo en ciudades icónicas del mundo.

## 🔗 Repositorio
https://github.com/pauliepmoreno/weather-frontend-m4

## Cómo ejecutar
Clonar el repositorio y abrir `index.html` en el navegador.

## Tecnologías
- HTML5 semántico
- Bootstrap 5
- JavaScript
- SASS

## Modelado de datos
Los datos están definidos en un array de objetos en JS. Cada ciudad tiene `id`, `nombre`, `tempActual`, `estadoActual`, `emoji`, `humedad`, `viento` y un array `pronostico` con 7 días, cada uno con `dia`, `emoji`, `min`, `max` y `estado`.

## Estadísticas que calcula la app
- Temperatura mínima y máxima de la semana
- Temperatura promedio (basada en los máximos diarios)
- Conteo de días por tipo de clima
- Resumen textual según el clima predominante

## Metodología de estilos
BEM (Block Element Modifier).

## Autora
Paulina Poblete