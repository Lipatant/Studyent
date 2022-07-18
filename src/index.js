import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
//import { BrowserRouter, Routes, Route } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter }
    from "react-router-dom";

import Layout from './pages/Layout';
import Login from './pages/Login';
import NoPage from './pages/NoPage';
import User from './pages/User';

const routes = [
    {path: '/', element: <Login />},
    {path: '/login', element: <Login />},
    {path: '/user', element: <User />},
    {path: '*', element: <NoPage />},
];

const Element = () => {
    return(
        <BrowserRouter>
            <Routes>
                {routes.map(page =>
                    <Route
                        path={page.path}
                        element=<div><Layout />{page.element}</div>
                    />
                )}
            </Routes>
        </BrowserRouter>
    );
}

export default function App() {
    return (
        <Element />
    )
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
