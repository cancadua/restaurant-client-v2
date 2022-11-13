import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getTable} from "../api/api";
import "./Table.css"
import TableThumbnail from "../components/TableThumbnail";

export const Table = () => {

    const {id} = useParams();
    const [table, setTable] = useState()

    useEffect(() => {
        getTable(id).then(data => {
            setTable(data)
        })
    }, []);


    return (
        <div className={"table-wrapper"}>
            <h1>Sala numer {table?.room_id}</h1>
            <TableThumbnail {...table}/>
            <div className={"buttons-wrapper"}>
                <Link to={`/formTable`} state={{table}}>
                    <button>
                        Usuń ten stolik
                    </button>
                </Link>
                <Link to={`/formTable`} state={{table}}>
                    <button>
                        Modyfikuj ten stolik
                    </button>
                </Link>
                <button>
                    Dodaj rezerwację tego stolika
                </button>
            </div>
        </div>
    )
}