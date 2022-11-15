import {addRoom, deleteRoom} from "../api/api";
import {useLocation, useNavigate} from "react-router-dom";
import "./FormRoom.css"

export const FormRoom = () => {
    const navigate = useNavigate()

    const location = useLocation()
    const {id} = location.state || {undefined};

    const handleDelete = () => {
        deleteRoom(id).then(() => (navigate("/")))
    }

    const handleSubmit = () => {
        addRoom().then(() => (navigate("/")))
    };

    return (
        <div className={"form-room-wrapper"}>
            {id ? <div className={"forms"}>
                    <h1>Czy na pewno chcesz usunąć salę o numerze {id}?</h1>
                    <button className={"app-button"} onClick={handleDelete}>
                        Usuń
                    </button>
                </div>
                : <div className={"forms"}>
                    <h1>Dodajesz nową salę</h1>
                    <button className={"app-button"} onClick={handleSubmit}>
                        Zatwierdź
                    </button>
                </div>
            }
        </div>
    )
}