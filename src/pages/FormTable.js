import {useState} from "react";
import {addTable, deleteTable} from "../api/api";
import {useLocation, useNavigate} from "react-router-dom";
import TableThumbnail from "../components/TableThumbnail";
import "./FormTable.css"

export const FormTable = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const {table} = location.state || {undefined};
    const [formTable, setFormTable] = useState({
        _id: table?._id || "",
        room_id: table?.room_id || "",
        max_seats: table?.max_seats || ""
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormTable(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addTable(formTable).then(r => console.log(r));
    };

    const handleDelete = () => {
        deleteTable(table._id).then(() => navigate(`/room/${table.room_id}`))

    }

    return (
        <div className={"container"}>
            {table
                ?
                <div className={"form-table-wrapper"}>
                    <TableThumbnail {...table}/>
                    <button className={"app-button"} onClick={handleDelete}>
                        Usuń stolik
                    </button>
                    <form className={"forms"} onSubmit={handleSubmit}>
                        <label htmlFor={"room_id"}>
                            Zmień salę (Uwaga, zmieni się numer stolika!):
                        </label>
                        <input type="number" name="room_id" onChange={handleChange} value={formTable.room_id || ""}/>
                        <label htmlFor={"max_seats"}>
                            Zmień ilość miejsc:
                        </label>
                        <input type="number" name="max_seats" onChange={handleChange} value={formTable.max_seats || ""}/>
                        <input className={"app-button"} type="submit" value="Zatwierdź" />
                    </form>
                </div>

                : <form className={"forms"} onSubmit={handleSubmit}>
                    <label htmlFor={"room_id"}>
                        Wybierz salę:
                    </label>
                    <input type="number" name="room_id" onChange={handleChange} value={formTable.room_id || ""}/>
                    <label htmlFor={"max_seats"}>
                        Wpisz ilość miejsc:
                    </label>
                    <input type="number" name="max_seats" onChange={handleChange} value={formTable.max_seats || ""}/>
                    <input className={"app-button"} type="submit" value="Zatwierdź" />
                </form>
            }
        </div>
    )
}