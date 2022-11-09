import "./RoomThumbnail.css"
import Person from "./Person";


const RoomThumbnail = (room) => {
    return (
        <button className={"room"}>
            <div>
                Sala numer {room._id}
            </div>
            <div className={"peopleContainer"}>
                <span>
                    {room.max_seats} x
                </span>
                <span>
                    <Person/>
                </span>

            </div>
        </button>
        )

}

export default RoomThumbnail;