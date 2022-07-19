import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Layout from './pages/Layout';
import Login from './pages/Login';
import NoPage from './pages/NoPage';
import User from './pages/User';
import Velib from './pages/Velib';

const routes = [
    {path: '/', element: <Login />},
    {path: '/login', element: <Login />},
    {path: '/user', element: <User />},
    {path: '/velib', element: <Velib />},
    {path: '*', element: <NoPage />},
];

const CallLayout = () => {
    return(
        <header className="App-layout">
            <Layout />
        </header>
    );
}

const RouteElement = (element) => {
    return (
        <div>
            <CallLayout />
            {element}
        </div>
    )
}

const Element = () => {
    return(
        <BrowserRouter>
            <Routes>
                {routes.map(page =>
                    <Route
                        path={page.path}
                        element={RouteElement(page.element)}
                    />
                )}
            </Routes>
        </BrowserRouter>
    );
}

export default function App() {
    return (
        <header className="App-header">
            <Element />
        </header>
    )
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
