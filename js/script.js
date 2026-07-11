const ciudades = [
    {
        id: 1,
        nombre: "Santiago",
        lat: -33.45,
        lng: -70.65,
        tempActual: 17,
        estadoActual: "Sunny",
        emoji: "☀️",
        humedad: 48,
        viento: 12,
        pronostico: [
            { dia: "Lunes", emoji: "☀️", min: 12, max: 18, estado: "Sunny" },
            { dia: "Martes", emoji: "⛅", min: 10, max: 15, estado: "Partly Cloudy" },
            { dia: "Miércoles", emoji: "☀️", min: 13, max: 19, estado: "Sunny" },
            { dia: "Jueves", emoji: "☁️", min: 11, max: 16, estado: "Cloudy" },
            { dia: "Viernes", emoji: "🌧️", min: 9, max: 13, estado: "Rainy" },
            { dia: "Sábado", emoji: "☀️", min: 14, max: 20, estado: "Sunny" },
            { dia: "Domingo", emoji: "☀️", min: 15, max: 21, estado: "Sunny" }
        ]
    },
    {
        id: 2,
        nombre: "New York",
        lat: 40.71,
        lng: -74.01,
        tempActual: 12,
        estadoActual: "Cloudy",
        emoji: "☁️",
        humedad: 72,
        viento: 18,
        pronostico: [
            { dia: "Lunes", emoji: "☁️", min: 7, max: 11, estado: "Cloudy" },
            { dia: "Martes", emoji: "🌧️", min: 5, max: 9, estado: "Rainy" },
            { dia: "Miércoles", emoji: "☁️", min: 6, max: 10, estado: "Cloudy" },
            { dia: "Jueves", emoji: "⛅", min: 8, max: 13, estado: "Partly Cloudy" },
            { dia: "Viernes", emoji: "☀️", min: 10, max: 15, estado: "Sunny" },
            { dia: "Sábado", emoji: "☁️", min: 7, max: 12, estado: "Cloudy" },
            { dia: "Domingo", emoji: "🌧️", min: 4, max: 8, estado: "Rainy" }
        ]
    },
    {
        id: 3,
        nombre: "London",
        lat: 51.51,
        lng: -0.13,
        tempActual: 9,
        estadoActual: "Rainy",
        emoji: "🌧️",
        humedad: 88,
        viento: 22,
        pronostico: [
            { dia: "Lunes", emoji: "🌧️", min: 5, max: 8, estado: "Rainy" },
            { dia: "Martes", emoji: "🌧️", min: 4, max: 7, estado: "Rainy" },
            { dia: "Miércoles", emoji: "☁️", min: 6, max: 10, estado: "Cloudy" },
            { dia: "Jueves", emoji: "🌧️", min: 5, max: 9, estado: "Rainy" },
            { dia: "Viernes", emoji: "⛅", min: 7, max: 11, estado: "Partly Cloudy" },
            { dia: "Sábado", emoji: "☁️", min: 6, max: 10, estado: "Cloudy" },
            { dia: "Domingo", emoji: "🌧️", min: 4, max: 8, estado: "Rainy" }
        ]
    },
    {
        id: 4,
        nombre: "Tokyo",
        lat: 35.68,
        lng: 139.69,
        tempActual: 22,
        estadoActual: "Partly Cloudy",
        emoji: "⛅",
        humedad: 65,
        viento: 10,
        pronostico: [
            { dia: "Lunes", emoji: "☀️", min: 18, max: 24, estado: "Sunny" },
            { dia: "Martes", emoji: "⛅", min: 17, max: 22, estado: "Partly Cloudy" },
            { dia: "Miércoles", emoji: "🌧️", min: 15, max: 20, estado: "Rainy" },
            { dia: "Jueves", emoji: "☁️", min: 16, max: 21, estado: "Cloudy" },
            { dia: "Viernes", emoji: "☀️", min: 19, max: 25, estado: "Sunny" },
            { dia: "Sábado", emoji: "☀️", min: 20, max: 26, estado: "Sunny" },
            { dia: "Domingo", emoji: "⛅", min: 18, max: 23, estado: "Partly Cloudy" }
        ]
    },
    {
        id: 5,
        nombre: "Paris",
        lat: 48.85,
        lng: 2.35,
        tempActual: 11,
        estadoActual: "Rainy",
        emoji: "🌧️",
        humedad: 81,
        viento: 16,
        pronostico: [
            { dia: "Lunes", emoji: "🌧️", min: 6, max: 10, estado: "Rainy" },
            { dia: "Martes", emoji: "☁️", min: 7, max: 12, estado: "Cloudy" },
            { dia: "Miércoles", emoji: "⛅", min: 8, max: 13, estado: "Partly Cloudy" },
            { dia: "Jueves", emoji: "🌧️", min: 5, max: 9, estado: "Rainy" },
            { dia: "Viernes", emoji: "☀️", min: 9, max: 14, estado: "Sunny" },
            { dia: "Sábado", emoji: "☁️", min: 7, max: 11, estado: "Cloudy" },
            { dia: "Domingo", emoji: "⛅", min: 8, max: 12, estado: "Partly Cloudy" }
        ]
    },
    {
        id: 6,
        nombre: "Dubai",
        lat: 25.20,
        lng: 55.27,
        tempActual: 38,
        estadoActual: "Sunny",
        emoji: "☀️",
        humedad: 29,
        viento: 14,
        pronostico: [
            { dia: "Lunes", emoji: "☀️", min: 30, max: 39, estado: "Sunny" },
            { dia: "Martes", emoji: "☀️", min: 31, max: 40, estado: "Sunny" },
            { dia: "Miércoles", emoji: "☀️", min: 32, max: 41, estado: "Sunny" },
            { dia: "Jueves", emoji: "☀️", min: 29, max: 38, estado: "Sunny" },
            { dia: "Viernes", emoji: "☀️", min: 28, max: 37, estado: "Sunny" },
            { dia: "Sábado", emoji: "☀️", min: 30, max: 39, estado: "Sunny" },
            { dia: "Domingo", emoji: "☀️", min: 31, max: 40, estado: "Sunny" }
        ]
    },
    {
        id: 7,
        nombre: "Sydney",
        lat: -33.87,
        lng: 151.21,
        tempActual: 20,
        estadoActual: "Sunny",
        emoji: "☀️",
        humedad: 55,
        viento: 20,
        pronostico: [
            { dia: "Lunes", emoji: "☀️", min: 15, max: 21, estado: "Sunny" },
            { dia: "Martes", emoji: "☀️", min: 16, max: 22, estado: "Sunny" },
            { dia: "Miércoles", emoji: "⛅", min: 14, max: 19, estado: "Partly Cloudy" },
            { dia: "Jueves", emoji: "☁️", min: 13, max: 18, estado: "Cloudy" },
            { dia: "Viernes", emoji: "🌧️", min: 12, max: 17, estado: "Rainy" },
            { dia: "Sábado", emoji: "☀️", min: 17, max: 23, estado: "Sunny" },
            { dia: "Domingo", emoji: "☀️", min: 18, max: 24, estado: "Sunny" }
        ]
    },
    {
        id: 8,
        nombre: "Mexico City",
        lat: 19.43,
        lng: -99.13,
        tempActual: 25,
        estadoActual: "Partly Cloudy",
        emoji: "⛅",
        humedad: 58,
        viento: 11,
        pronostico: [
            { dia: "Lunes", emoji: "⛅", min: 18, max: 24, estado: "Partly Cloudy" },
            { dia: "Martes", emoji: "☀️", min: 20, max: 26, estado: "Sunny" },
            { dia: "Miércoles", emoji: "🌧️", min: 16, max: 22, estado: "Rainy" },
            { dia: "Jueves", emoji: "⛅", min: 17, max: 23, estado: "Partly Cloudy" },
            { dia: "Viernes", emoji: "☀️", min: 21, max: 27, estado: "Sunny" },
            { dia: "Sábado", emoji: "☀️", min: 22, max: 28, estado: "Sunny" },
            { dia: "Domingo", emoji: "⛅", min: 19, max: 25, estado: "Partly Cloudy" }
        ]
    },
    {
        id: 9,
        nombre: "Cairo",
        lat: 30.04,
        lng: 31.24,
        tempActual: 35,
        estadoActual: "Sunny",
        emoji: "☀️",
        humedad: 25,
        viento: 17,
        pronostico: [
            { dia: "Lunes", emoji: "☀️", min: 28, max: 36, estado: "Sunny" },
            { dia: "Martes", emoji: "☀️", min: 29, max: 37, estado: "Sunny" },
            { dia: "Miércoles", emoji: "☀️", min: 30, max: 38, estado: "Sunny" },
            { dia: "Jueves", emoji: "☀️", min: 27, max: 35, estado: "Sunny" },
            { dia: "Viernes", emoji: "☀️", min: 26, max: 34, estado: "Sunny" },
            { dia: "Sábado", emoji: "☀️", min: 28, max: 36, estado: "Sunny" },
            { dia: "Domingo", emoji: "☀️", min: 29, max: 37, estado: "Sunny" }
        ]
    },
    {
        id: 10,
        nombre: "Moscow",
        lat: 55.75,
        lng: 37.62,
        tempActual: -2,
        estadoActual: "Snowy",
        emoji: "❄️",
        humedad: 90,
        viento: 13,
        pronostico: [
            { dia: "Lunes", emoji: "❄️", min: -6, max: -3, estado: "Snowy" },
            { dia: "Martes", emoji: "❄️", min: -8, max: -5, estado: "Snowy" },
            { dia: "Miércoles", emoji: "☁️", min: -4, max: -1, estado: "Cloudy" },
            { dia: "Jueves", emoji: "❄️", min: -7, max: -4, estado: "Snowy" },
            { dia: "Viernes", emoji: "☁️", min: -3, max: 0, estado: "Cloudy" },
            { dia: "Sábado", emoji: "❄️", min: -5, max: -2, estado: "Snowy" },
            { dia: "Domingo", emoji: "❄️", min: -9, max: -6, estado: "Snowy" }
        ]
    },
    {
        id: 11,
        nombre: "Buenos Aires",
        lat: -34.61,
        lng: -58.38,
        tempActual: 19,
        estadoActual: "Windy",
        emoji: "💨",
        humedad: 63,
        viento: 31,
        pronostico: [
            { dia: "Lunes", emoji: "💨", min: 13, max: 18, estado: "Windy" },
            { dia: "Martes", emoji: "☀️", min: 15, max: 20, estado: "Sunny" },
            { dia: "Miércoles", emoji: "⛅", min: 14, max: 19, estado: "Partly Cloudy" },
            { dia: "Jueves", emoji: "💨", min: 12, max: 17, estado: "Windy" },
            { dia: "Viernes", emoji: "🌧️", min: 10, max: 15, estado: "Rainy" },
            { dia: "Sábado", emoji: "☀️", min: 17, max: 22, estado: "Sunny" },
            { dia: "Domingo", emoji: "☀️", min: 18, max: 23, estado: "Sunny" }
        ]
    },
    {
        id: 12,
        nombre: "Beijing",
        lat: 39.91,
        lng: 116.39,
        tempActual: 14,
        estadoActual: "Foggy",
        emoji: "🌫️",
        humedad: 84,
        viento: 7,
        pronostico: [
            { dia: "Lunes", emoji: "🌫️", min: 8, max: 13, estado: "Foggy" },
            { dia: "Martes", emoji: "☁️", min: 10, max: 15, estado: "Cloudy" },
            { dia: "Miércoles", emoji: "⛅", min: 12, max: 17, estado: "Partly Cloudy" },
            { dia: "Jueves", emoji: "🌫️", min: 9, max: 14, estado: "Foggy" },
            { dia: "Viernes", emoji: "☀️", min: 13, max: 18, estado: "Sunny" },
            { dia: "Sábado", emoji: "☁️", min: 11, max: 16, estado: "Cloudy" },
            { dia: "Domingo", emoji: "🌫️", min: 7, max: 12, estado: "Foggy" }
        ]
    }
];

class WeatherApp {
    constructor() {
        this.lugares = ciudades; // array de ciudades
    }
    async obtenerClimaActual(lat, lng) {
        const respuesta = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`);
        const datos = await respuesta.json();
        return datos.current_weather;
    }

    async cargarLugares() {
        for (let i = 0; i < this.lugares.length; i++) {
            const clima = await this.obtenerClimaActual(this.lugares[i].lat, this.lugares[i].lng);
            this.lugares[i].tempActual = Math.round(clima.temperature);
            this.lugares[i].viento = clima.windspeed;
        }
    }

    mostrarCardsHomeAPI() {
        const contenedor = document.getElementById("ciudadesClima");

        this.lugares.forEach(function (ciudad) {
            const card = `
    <div class="col-12 col-lg-3">
        <div class="card place-card">
            <div class="card-body">
                <h5 class="card-title place-card__name">${ciudad.nombre}</h5>
                <p class="place-card__emoji">${ciudad.emoji}</p>
                <p class="place-card__temp">${ciudad.tempActual}°C</p>
                <p class="place-card__state">${ciudad.estadoActual}</p>
                <a href="detalleLocalidad.html?ciudad=${ciudad.nombre}" class="btn btn-custom">Ver detalle</a>
            </div>
        </div>
    </div>
`;
            contenedor.insertAdjacentHTML("beforeend", card);
        });

    }

}


function buscarCiudad(nombre) {
    return ciudades.find(function (c) {
        return c.nombre === nombre;
    });
}

function calcularEstadisticas(pronostico) {
    let sumaMax = 0;
    let tempMin = pronostico[0].min;
    let tempMax = pronostico[0].max;
    let diasSunny = 0;
    let diasPartlyCloudy = 0;
    let diasCloudy = 0;
    let diasRainy = 0;
    let diasSnowy = 0;
    let diasWindy = 0;
    let diasFoggy = 0;

    for (let i = 0; i < pronostico.length; i++) {
        if (pronostico[i].min < tempMin) {
            tempMin = pronostico[i].min;
        }
        if (pronostico[i].max > tempMax) {
            tempMax = pronostico[i].max;
        }
        sumaMax = sumaMax + pronostico[i].max;

        if (pronostico[i].estado == "Sunny") {
            diasSunny++;
        } else if (pronostico[i].estado == "Partly Cloudy") {
            diasPartlyCloudy++;
        } else if (pronostico[i].estado == "Cloudy") {
            diasCloudy++
        } else if (pronostico[i].estado == "Rainy") {
            diasRainy++
        } else if (pronostico[i].estado == "Snowy") {
            diasSnowy++
        } else if (pronostico[i].estado == "Windy") {
            diasWindy++
        } else if (pronostico[i].estado == "Foggy") {
            diasFoggy++
        }

    }

    const maxDias = Math.max(diasSunny, diasPartlyCloudy, diasCloudy, diasRainy, diasSnowy, diasWindy, diasFoggy);
    const promedio = Math.round(sumaMax / pronostico.length);

    let resumen = "";

    if (diasSunny === maxDias) {
        resumen = "Semana mayormente soleada";
    } else if (diasPartlyCloudy === maxDias) {
        resumen = "Semana mayormente parcialmente nublada";
    } else if (diasCloudy === maxDias) {
        resumen = "Semana mayormente nublada";
    } else if (diasRainy === maxDias) {
        resumen = "Semana con varias lluvias";
    } else if (diasSnowy === maxDias) {
        resumen = "Semana con nieve";
    } else if (diasWindy === maxDias) {
        resumen = "Semana ventosa";
    } else if (diasFoggy === maxDias) {
        resumen = "Semana con neblina";
    }

    return {
        tempMin: tempMin,
        tempMax: tempMax,
        promedio: promedio,
        resumen: resumen,
        diasSunny: diasSunny,
        diasPartlyCloudy: diasPartlyCloudy,
        diasCloudy: diasCloudy,
        diasRainy: diasRainy,
        diasSnowy: diasSnowy,
        diasWindy: diasWindy,
        diasFoggy: diasFoggy,
    };

}




if (document.getElementById("datosCiudad")) {
    const params = new URLSearchParams(window.location.search);
    const nombreCiudad = params.get("ciudad");

    if (!nombreCiudad) {
        window.location.href = "index.html";
    }

    const ciudad = buscarCiudad(nombreCiudad);
    const stats = calcularEstadisticas(ciudad.pronostico);


    const contenedorDatosCiudad = document.getElementById("datosCiudad");

    const htmlCiudad = `
    <div class="col-12">
        <div class="card place-card place-card--detail mb-4">
            <div class="card-body">
                <h2 class="place-card__name">${ciudad.nombre} ${ciudad.emoji}</h2>
                <p class="place-card__temp">🌡️ Temperatura: ${ciudad.tempActual}°C</p>
                <p class="place-card__humidity">💧 Humedad: ${ciudad.humedad}%</p>
                <p class="place-card__wind">💨 Viento: ${ciudad.viento} km/h</p>
                <p class="place-card__state">${ciudad.estadoActual}</p>
            </div>
        </div>
    </div>
`;

    contenedorDatosCiudad.innerHTML = htmlCiudad;

    const contenedorEstadisticas = document.getElementById("estadisticas");

    let contadores = "";
    if (stats.diasSunny > 0) contadores += `☀️ Días soleados: ${stats.diasSunny} | `;
    if (stats.diasPartlyCloudy > 0) contadores += `⛅ Días parcialmente nublados: ${stats.diasPartlyCloudy} | `;
    if (stats.diasCloudy > 0) contadores += `☁️ Días nublados: ${stats.diasCloudy} | `;
    if (stats.diasRainy > 0) contadores += `🌧️ Días lluviosos: ${stats.diasRainy} | `;
    if (stats.diasSnowy > 0) contadores += `❄️ Días con nieve: ${stats.diasSnowy} | `;
    if (stats.diasWindy > 0) contadores += `💨 Días ventosos: ${stats.diasWindy} | `;
    if (stats.diasFoggy > 0) contadores += `🌫️ Días con neblina: ${stats.diasFoggy} | `;

    const htmlStats = `
    <div class="col-12">
        <div class="card">
            <div class="card-body">
                <h3>📊 Estadísticas de la semana</h3>
                <p>🌡️ Mínima: ${stats.tempMin}°C</p>
                <p>🌡️ Máxima: ${stats.tempMax}°C</p>
                <p>🌡️ Promedio: ${stats.promedio}°C</p>
                <p>${stats.resumen}</p>
                <p>${contadores}</p>

            </div>
        </div>
    </div>
`;

    contenedorEstadisticas.innerHTML = htmlStats;

    const contenedorPronoSemAct = document.getElementById("pronosticoSemanaActual");

    ciudad.pronostico.forEach(function (dia) {
        const card2 = `
    <div class="col-12 col-lg-3">
        <div class="card place-card">
            <div class="card-body">
                <h5 class="card-title place-card__name">${dia.dia}</h5>
                <p class="place-card__emoji">${dia.emoji}</p>
                <p class="place-card__temp">${dia.min}°C - ${dia.max}°C</p>
            </div>
        </div>
    </div>
`;
        contenedorPronoSemAct.insertAdjacentHTML("beforeend", card2);
    });



    const contenedorAlertas = document.getElementById("alertas");
    let alertas = "";

    if (stats.promedio > 32) {
        alertas = `<p>⚠️ Alerta de calor</p>`;
    } else if (stats.promedio < 5) {
        alertas = `<p>🥶 Alerta de frío</p>`;
    }

    contenedorAlertas.innerHTML = `
    <div class="col-12">
        <div class="card">
            <div class="card-body">
                <h3>🚨 Alertas de clima</h3>
                ${alertas || "<p>Sin alertas para esta semana</p>"}
            </div>
        </div>
    </div>
`;
}





const app = new WeatherApp();

if (document.getElementById("ciudadesClima")) {
    app.cargarLugares().then(() => {
        app.mostrarCardsHomeAPI();
    });
}