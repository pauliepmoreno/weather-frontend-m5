# 🌍 City Climate

Aplicación de clima que muestra el estado del tiempo en ciudades icónicas del mundo.

## 🔗 Repositorio
https://github.com/pauliepmoreno/weather-frontend-m5

## Cómo ejecutar
Clonar el repositorio y abrir `index.html` en el navegador.

## Tecnologías
- HTML5 semántico
- Bootstrap 5
- JavaScript (ES6+)
- SASS

## Estructura de clases
- `WeatherApp` → clase principal que gestiona los lugares, consume la API y actualiza la interfaz

## API utilizada
Open-Meteo (https://open-meteo.com) — gratuita, sin registro. Se usa para obtener temperatura actual y viento de cada ciudad.

## Modelado de datos
Cada ciudad tiene `id`, `nombre`, `lat`, `lng`, `tempActual`, `estadoActual`, `emoji`, `humedad`, `viento` y un array `pronostico` con 7 días.

## Estadísticas que calcula la app
- Temperatura mínima, máxima y promedio semanal
- Conteo de días por tipo de clima
- Resumen textual según clima predominante
- Alertas de calor (promedio > 32°C) o frío (promedio < 5°C)

## Metodología de estilos
BEM (Block Element Modifier).

## Autora
Paulina Poblete