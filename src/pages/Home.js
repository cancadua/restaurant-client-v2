import {useEffect, useState} from "react";
import Room from "../components/Room";
import "./Home.css"

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
                        <Room key={index} {...room}/>
                    )
                })}
        </div>

    );
}