import React, {useEffect, useState} from "react";

function Greeting(){
    const [name, setName] = useState("");
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        setName(localStorage.getItem("name"));
        let date = new Date();
        let hours = date.getHours();

        if(hours < 12){
            setGreeting("Good Morning ");
        } else if(hours < 19){
            setGreeting("Good Afternoon ");
        } else {
            document.body.className = "evening";
            setGreeting("Good Evening ");

        }
    })

    const saveName = (e) => {
        if(e.keyCode === 13){
            localStorage.setItem("name", e.currentTarget.textContent);
            e.preventDefault();
            e.currentTarget.blur();
            setName(localStorage.getItem("name"));
        }
    }

    return (
        <div className = "greeting">
            <h1>{greeting}<span contentEditable="true" suppressContentEditableWarning="true" onKeyDown={saveName}>{name}</span></h1>
        </div>
    );
}

export default Greeting;