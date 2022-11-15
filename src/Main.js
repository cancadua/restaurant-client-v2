import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {FormRoom, FormTable, Home} from "./pages";
import "./Main.css"
import {Room} from "./pages/Room";
import {Table} from "./pages/Table";

const Main = () => {
    return (
        <Routes className={"container"}>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/formRoom' element={<FormRoom/>}></Route>
            <Route path='/formTable' element={<FormTable/>}></Route>
            <Route path='/room/:id' element={<Room/>}></Route>
            <Route path='/table/:id' element={<Table/>}></Route>
        </Routes>
    );
}

export default Main;