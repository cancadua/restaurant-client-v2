import "./RoomThumbnail.css"
import Person from "./Person";


const RoomThumbnail = (room) => (
        <button className={"room"}>
                Sala numer {room._id}
            <div className={"peopleContainer"}>
                {room.max_seats} x
                <Person/>
            </div>
        </button>
)

export default RoomThumbnail;