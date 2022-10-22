import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import Table from "./Table";
import TableElement from "./TableElement";

const AppRouter = () => {
    return (
            <Routes>
                <Route path='/' exact element={<Table/>}/>
                <Route path='/:id' exact element={<TableElement/>}/>
            </Routes>
    );
};

export default AppRouter;
