import logo from '../assets/pizza.svg';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as axios from 'axios';
import '../App.css';
import { useEffect, useState } from 'react';

function Home() {
    
    const [isOpen, setIsOpen] = useState(false)

    // Hook called upon loading the component
    useEffect(() => {
        async function fetchData() {
            // GET request using axios inside useEffect React hook
            const response = await axios.get('http://localhost:8080/openingHours')
            // console.log('response: ', response);
            if(response.data){
                setIsOpen(response.data.isOpen)
            }
        }
        fetchData();
    }, []);

    return (
        <div className="App">
            <header className="App-full">
                <h1 className="m-4">
                    Welcome to Joe's Bistro.
                </h1>
                <img src={logo} className="App-logo m-3" alt="logo" />
                <h2>
                    We are currently {isOpen ? 'open' : 'closed'}
                </h2>
                <button type="button" className="btn btn-success btn-lg" disabled={!isOpen}><Link to="/menu">Start an order</Link></button>
            </header>
        </div>
    );
}

export default Home;
