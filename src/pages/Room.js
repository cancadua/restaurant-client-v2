import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {getRoomTables} from "../api/api";
import TableThumbnail from "../components/TableThumbnail";
import "./Room.css"

export const Room = () => {

    const {id} = useParams();
    const [tables, setTables] = useState();

    useEffect(() => {
        console.log(id)
        getRoomTables(id).then(data => {
            setTables(data)
        })
    }, []);

    return (
        <div className={"room-wrapper"}>
            <h1>Sala numer {id}</h1>
            <Link to={`/formRoom`} state={id}>
                <button className={"app-button"}>
                    Usuń salę
                </button>
            </Link>
            <div className={"container"}>
                {
                    tables?.map(table =>
                        <Link to={`/table/${table._id}`}>
                            <TableThumbnail key={table._id} {...table}/>
                        </Link>
                    )}
                <Link to="/formTable" state={id}>
                    <button className={"table"}>
                        Dodaj nowy stół
                    </button>
                </Link>
            </div>
        </div>
    );
}

