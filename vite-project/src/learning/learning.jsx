import { useState } from "react";

export default function App(){
    const [restaurantName , setRestName] = useState ("Lemon");
    function updateRestName(){
        setRestName("Little Lemon");
    };
    return(
        <div>
            <h1>{restaurantName}</h1>
            <button onClick={updateRestName}>Here you could update the Rest Name</button>
        </div>
    )
}

