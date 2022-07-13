import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import Counters from './components/counters';

const element = <Counters />;
console.log(element);

const root = createRoot(document.getElementById("root"));
root.render(element)
