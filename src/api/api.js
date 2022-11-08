const getRooms = async () => {
    await fetch('http://localhost:8080/api/rooms')
        .then((res) => res.json())
        .then((res) => {return res})
}

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

const deleteRoom = async (id) => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(id)
    };

    await fetch('http://localhost:8080/api/rooms/{id}', requestOptions)
        .then(response => response.json())
}

const getTables = async () => {
    await fetch('http://localhost:8080/api/tables')
        .then((res) => res.json())
        .then((res) => {return res})
}

const getRoomTables = async (roomId) => {
    await fetch('http://localhost:8080/api/tables/{roomId}')
        .then((res) => res.json())
        .then((res) => {return res})
}

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

const deleteTable = async (id) => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(id)
    };

    await fetch('http://localhost:8080/api/tables/{id}', requestOptions)
        .then(response => response.json())
}

export {
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