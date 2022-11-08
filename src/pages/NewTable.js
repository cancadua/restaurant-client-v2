import {useState} from "react";
import {addTable} from "../api/api";

export const NewTable = () => {
    const [table, setTable] = useState({
        _id: "",
        room_id: "",
        max_seats: ""
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setTable(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(table);
        addTable(table).then(r => console.log(r));
    };

    return (
        <div className={"container"}>
            <span>
                Nowy stolik
            </span>
            <form className={"forms"} onSubmit={handleSubmit}>
                <label>
                    Numer:
                    <input type="number" name="_id" onChange={handleChange} value={table._id || ""}/>
                </label>
                <label>
                    Numer sali:
                    <input type="number" name="room_id" onChange={handleChange} value={table.room_id || ""}/>
                </label>
                <label>
                    Ilość miejsc:
                    <input type="number" name="max_seats" onChange={handleChange} value={table.max_seats || ""}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}