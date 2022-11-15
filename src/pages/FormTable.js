import {useState} from "react";
import {addTable, deleteTable, modifyTable} from "../api/api";
import {useLocation, useNavigate} from "react-router-dom";
import TableThumbnail from "../components/TableThumbnail";
import "./FormTable.css"

export const FormTable = () => {
    const navigate = useNavigate()

    const location = useLocation();
    const {table} = location.state.table || {undefined};
    const room_id = location.state || undefined;

    const [formTable, setFormTable] = useState({
        _id: table?._id || "",
        room_id: table?.room_id || room_id || "",
        max_seats: table?.max_seats || ""
    });

    const handleChange = (event) => {
        console.log(formTable)
        const name = event.target.name;
        const value = event.target.value;
        setFormTable(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formTable)
        addTable(formTable).then(() => navigate(`/room/${room_id}`));
    };

    const handleDelete = () => {
        deleteTable(table._id).then(() => navigate(`/room/${table.room_id}`));
    }

    const handleModify = () => {
        modifyTable(formTable).then(() => navigate(`/room/${formTable.room_id}`));
    }

    return (
        <div className={"container"}>
            {table ? <div className={"form-table-wrapper"}>
                    <TableThumbnail {...table}/>
                    <button className={"app-button"} onClick={handleDelete}>
                        Usuń stolik
                    </button>
                    <form className={"forms"} onSubmit={handleSubmit}>
                        <label htmlFor={"max_seats"}>
                            Zmień ilość miejsc:
                        </label>
                        <input type="number" name="max_seats" onChange={handleChange}
                               value={formTable.max_seats || ""}/>
                        <button className={"app-button"} onClick={handleModify}>
                            Zatwierdź
                        </button>
                    </form>
                </div>
                : <form className={"forms"} onSubmit={handleSubmit}>
                    <label htmlFor={"room_id"}>
                        Sala numer:
                    </label>
                    <input type="number" name="room_id" onChange={handleChange} disabled={true}
                           value={formTable.room_id || ""}/>
                    <label htmlFor={"max_seats"}>
                        Wpisz ilość miejsc:
                    </label>
                    <input type="number" name="max_seats" onChange={handleChange} value={formTable.max_seats || ""}/>
                    <input className={"app-button"} type="submit" value="Zatwierdź"/>
                </form>
            }
        </div>
    )
}