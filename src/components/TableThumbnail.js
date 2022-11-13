import "./TableThumbnail.css"
import Person from "./Person";

const TableThumbnail = (table) => (
    <button className={"table"}>
        <div>
            Stolik numer {table._id}
        </div>
        <div className={"peopleContainer"}>
            <span>
                {table.max_seats} x
            </span>
            <span>
                <Person/>
            </span>
        </div>
    </button>
)

export default TableThumbnail;