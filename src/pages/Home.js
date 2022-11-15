import {useEffect, useState} from "react";
import RoomThumbnail from "../components/RoomThumbnail.js";
import "./Home.css"
import {Link} from "react-router-dom";
import {getRooms} from "../api/api";

export const Home = () => {

    const [rooms, setRooms] = useState();

    useEffect(() => {
        getRooms().then(data => setRooms(data))
    }, []);

    return (
        <div className={"home-container"}>
            <h1>Sale</h1>
            <div className={"container"}>
                {
                    rooms?.map(room =>
                        <Link to={`/room/${room._id}`}>
                            <RoomThumbnail key={room._id} {...room}/>
                        </Link>
                    )
                }
                <Link to="/formRoom">
                    <button className={"room"}>
                        Dodaj nową salę
                    </button>
                </Link>
            </div>
        </div>
    );
}