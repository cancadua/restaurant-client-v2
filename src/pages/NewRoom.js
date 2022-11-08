import {useState} from "react";
import {addRoom} from "../api/api";

export const NewRoom = () => {
    const [room, setRoom] = useState({
        _id: "",
        max_seats: ""
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setRoom(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(room);
        addRoom(room).then(r => console.log(r));
    };

    return (
        <div className={"container"}>
            <span>
                Nowe pomieszczenie
            </span>
            <form className={"forms"} onSubmit={handleSubmit}>
                <label>
                    Numer:
                    <input type="number" name="_id" onChange={handleChange} value={room._id || ""}/>
                </label>
                <label>
                    Ilość miejsc:
                    <input type="number" name="max_seats" onChange={handleChange} value={room.max_seats || ""}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}