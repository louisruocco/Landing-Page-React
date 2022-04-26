import React, {useState, useEffect} from "react";

function Weather(){

    const [weather, setWeather] = useState("");
    const [location, setLocation] = useState("");

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
                setWeather(`${temp}°C`);
                setLocation(location);
            });
        }
    })

    return (
        <div className = "weather">
            <h2>Weather:</h2>
            <h3>{location}</h3>
            <h4>{weather}</h4>
        </div>
    );
}

export default Weather;