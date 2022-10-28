import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import './style.css';

import {
    activities,
    routines,
    routine_activities,
    users
} from './Components';

const App = () => {
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});
    const navigate= useNavigate();
}

const container = document.querySelector('#container');
const root=ReactDOM.createRoot(container);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
