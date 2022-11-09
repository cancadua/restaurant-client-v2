import {useEffect, useState} from "react";
import RoomThumbnail from "../components/RoomThumbnail.js";
import "./Home.css"
import Person from "../components/Person";
import {Link} from "react-router-dom";

export const Home = () => {

    const [rooms, setRooms] = useState();

    useEffect(() => {
        const dataFetch = async () => {
            const data = await (
                await fetch('http://localhost:8080/api/rooms', {
                    method: 'GET',
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json"
                    }
                })
            ).json();
            setRooms(data);
        };

        dataFetch();
    }, []);

    return (

        <div className={"container"}>
            {
                rooms?.map((room, index) => {
                    return (
                        <RoomThumbnail key={index} {...room}/>
                    )
                })}
            <Link to="/addRoom">
                <button  className={"room"}>
                    Dodaj nową salę
                </button>
            </Link>

        </div>

    );
}