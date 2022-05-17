import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    useRoutes,
} from "react-router-dom";
import NavBar from "./Components/navbar";
import Home from "./Pages/home";

const Path = () => {
    let routes = useRoutes([
        { path: '', element: <Home /> }
    ]);
    return routes;
}

const App = () => {
    return (
        <Router>
            <NavBar />
            <Path />
        </Router>
    )
}

export default App;
