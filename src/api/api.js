const getRooms = async () => (
    fetch('http://localhost:8080/api/rooms')
        .then(res => res.json())
        .then(data => data)
        .catch(e => console.log(e)))

const addRoom = async () => (
    await fetch('http://localhost:8080/api/rooms', {method: 'POST'})
        .then(res => res.json())
        .then(data => data)
        .catch(e => console.log(e))
)

const deleteRoom = async (_id) => (
    await fetch(`http://localhost:8080/api/rooms/${_id}`, {
        method: 'DELETE',
        body: JSON.stringify(_id)
    })
        .then(response => response.json())
        .catch(e => console.log(e))
)

const getTables = async () => (
    await fetch('http://localhost:8080/api/tables')
        .then(res => res.json())
        .then(res => res)
        .catch(e => console.log(e))
)

const getTable = async (_id) => (
    await fetch(`http://localhost:8080/api/table/${_id}`)
        .then(res => res.json())
        .then(data => data)
        .catch(e => console.log(e))
)


const getRoomTables = async (roomId) => (
    fetch(`http://localhost:8080/api/tables/${roomId}/`)
        .then(res => res.json())
        .then(data => data)
        .catch(e => console.log(e))
)

const addTable = async (data) => (
    await fetch('http://localhost:8080/api/tables', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then(data => data)
        .catch(e => console.log(e))
)

const modifyTable = async (data) => (
    await fetch(`http://localhost:8080/api/tables/${data._id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .catch(e => console.log(e))
)

const deleteTable = async (_id) => (
    await fetch(`http://localhost:8080/api/tables/${_id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .catch(e => console.log(e))
)

export {
    getTable,
    getRooms,
    addRoom,
    deleteRoom,
    getTables,
    addTable,
    getRoomTables,
    modifyTable,
    deleteTable
}