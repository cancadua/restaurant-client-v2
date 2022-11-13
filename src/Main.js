import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Home, FormRoom, FormRoomReservation, FormTable, FormTableReservation} from "./pages";
import "./Main.css"
import {Room} from "./pages/Room";
import {Table} from "./pages/Table";

const Main = () => {
    return (
        <Routes className={"container"}>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/formRoom' element={<FormRoom/>}></Route>
            <Route path='/formTable' element={<FormTable/>}></Route>
            <Route path='/formRoomReservation' element={<FormRoomReservation/>}></Route>
            <Route path='/formTableReservation' element={<FormTableReservation/>}></Route>
            <Route path='/room/:id' element={<Room/>}></Route>
            <Route path='/table/:id' element={<Table/>}></Route>
        </Routes>
    );
}

export default Main;