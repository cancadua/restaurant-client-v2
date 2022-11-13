import {useState} from "react";
import {addRoom, deleteRoom} from "../api/api";
import {Link, useLocation} from "react-router-dom";
import "./FormRoom.css"
import { useNavigate } from "react-router-dom";

export const FormRoom = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const {id} = location.state || {undefined};
    const [room, setRoom] = useState({
        _id: "",
        max_seats: ""
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setRoom(values => ({...values, [name]: value}))
    }

    const handleDelete = () =>   {
        deleteRoom(id).then(() => (navigate("/")))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(room);
        addRoom(room).then(r => console.log(r));
    };

    return (

        <div className={"form-room-wrapper"}>
            {id
                ? <div className={"forms"}>
                    <h1>Czy na pewno chcesz usunąć salę numer {id}? (numeracja sal zmieni się automatycznie)</h1>
                    <button className={"app-button"} onClick={handleDelete}>
                        Usuń
                    </button>
                </div>

                : <form className={"forms"} onSubmit={handleSubmit}>
                    <label htmlFor={"_id"}>
                        Numer:
                    </label>
                    <input type="number" name="_id" onChange={handleChange} value={room._id || ""}/>
                    <label htmlFor={"max_seats"}>
                        Ilość miejsc:
                    </label>
                    <input type="number" name="max_seats" onChange={handleChange} value={room.max_seats || ""}/>
                    <input type="submit" value="Zatwierdź" />
                </form>
            }

        </div>
    )
}