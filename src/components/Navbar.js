import "./Navbar.css"
import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">
                <button>Start</button>
            </Link>
            <Link to="/addRoom">
                <button>Dodaj pomieszczenie</button>
            </Link>
            <Link to="/addTable">
                <button>Dodaj stolik</button>
            </Link>
            <Link to="/addRoomReservation">
                <button>Dodaj rezerwację pomieszczenia</button>
            </Link>
            <Link to="/addTableReservation">
                <button>Dodaj rezerwację stolika</button>
            </Link>
        </div>
    )
}