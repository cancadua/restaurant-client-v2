import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Home, NewRoom, NewRoomReservation, NewTable, NewTableReservation} from "./pages";
import "./Main.css"

const Main = () => {
    return (
        <Routes className={"container"}>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/addRoom' element={<NewRoom/>}></Route>
            <Route path='/addTable' element={<NewTable/>}></Route>
            <Route path='/addRoomReservation' element={<NewRoomReservation/>}></Route>
            <Route path='/addTableReservation' element={<NewTableReservation/>}></Route>
        </Routes>
    );
}

export default Main;