const getRooms = async () => (
    fetch('http://localhost:8080/api/rooms')
        .then(res => res.json())
        .then(data => data)
        .catch(e => console.log(e)))

const addRoom = async (data) => {

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    await fetch('http://localhost:8080/api/rooms', requestOptions)
        .then(res => res.json())
        .then((data) => {return data})
}

const modifyRoom = async (data) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    await fetch('http://localhost:8080/api/rooms/{id}', requestOptions)
        .then(response => response.json())
}

const deleteRoom = async (_id) => {
    const requestOptions = {
        method: 'DELETE',
        body: JSON.stringify(_id)
    };

    await fetch(`http://localhost:8080/api/rooms/${_id}`, requestOptions)
        .then(response => response.json())
        .catch(e => console.log(e))
}

const getTables = async () => {
    await fetch('http://localhost:8080/api/tables')
        .then((res) => res.json())
        .then((res) => {return res})
}

const getTable = async (_id) => (
    await fetch(`http://localhost:8080/api/table/${_id}`)
        .then(res => res.json())
        .then(data => data)
        .catch(e => console.log(e))
)


const getRoomTables = async (roomId) => (
     fetch(`http://localhost:8080/api/tables/${roomId}`)
        .then(res => res.json())
        .then(data => data)
        .catch(e => console.log(e))
)

const addTable = async (data) => {

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    };

    await fetch('http://localhost:8080/api/tables', requestOptions)
        .then(res => res.json())
        .then((data) => {return data})
}

const modifyTable = async (data) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    await fetch('http://localhost:8080/api/tables/{id}', requestOptions)
        .then(response => response.json())
}

const deleteTable = async (_id) => {
    const requestOptions = {
        method: 'DELETE'
    };
     await fetch(`http://localhost:8080/api/tables/${_id}`, requestOptions)
        .then(response => response.json())
}

export {
    getTable,
    getRooms,
    addRoom,
    modifyRoom,
    deleteRoom,
    getTables,
    addTable,
    getRoomTables,
    modifyTable,
    deleteTable
}