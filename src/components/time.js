import React, {useState, useEffect} from "react";

function Time(){

    const [clock, setClock] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        let time = new Date();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let day = time.getDay();
        let timeOfDay = time.getDate();
        let month = time.getMonth();
        let year = time.getFullYear();

        const days = [
            "Sunday", 
            "Monday",
            "Tuesday", 
            "Wednesday", 
            "Thursday", 
            "Friday", 
            "Saturday"
        ]
    
        const months = [
            "January", 
            "February", 
            "March", 
            "April", 
            "May",
            "June", 
            "July", 
            "August",
            "September", 
            "October", 
            "November", 
            "December"
        ]

        setInterval(() => {
            setClock(hours + ":" + minutes);
        }, 1000)

        setDate(days[day] + " " + timeOfDay + " " + months[month] + " " + year)
    })

    return (
        <div className = "time">
            <h1 className = "clock">{clock}</h1>
            <h2 className = "date">{date}</h2>
        </div>
    );
}

export default Time;