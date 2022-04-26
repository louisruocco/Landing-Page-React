import React, {useState, useEffect} from "react";

function Time(){

    const [date, setDate] = useState("");
    const [clock, setClock] = useState("");

    useEffect(() => {
        let date = new Date();
        let day = date.getDay();
        let timeOfDay = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();

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

        setDate(days[day] + " " + timeOfDay + " " + months[month] + " " + year);
    })

    return (
        <div className = "date">
            <h2>{date}</h2>
        </div>
    );
}

export default Time;