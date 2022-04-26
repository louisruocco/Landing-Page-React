import React, {useState, useEffect} from "react";

function Weather(){

    const [weather, setWeather] = useState("");

    useEffect(() => {
        let lat;
        let lon;

        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(async position => {
                lat = position.coords.latitude;
                lon = position.coords.longitude;
    
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=8916ec882e494cc4301bfcb4caaa4f26`)
                const data = await response.json();
        
                const { temp } = data.main;
                const location = data.name  
                setWeather(`${location}: ${temp}°C`)
            });
        }
    })

    return (
        <div className = "weather">
            <h2>Weather:</h2>
            <h3>{weather}</h3>
        </div>
    );
}

export default Weather;