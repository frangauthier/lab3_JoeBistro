import 'bootstrap/dist/css/bootstrap.min.css';
import Moment from 'react-moment';
import { Outlet, Link, useNavigate } from "react-router-dom";
import '../App.css';
import { useState, useEffect } from 'react';


function ConfirmationSuccess() {

    // state hook see: https://reactjs.org/docs/hooks-state.html
    const [confirmation, setConfirmation] = useState({})

    // Hook called upon loading the component
    useEffect(() => {
        // TODO 3
        // GET confirmation number + ETA from server
        // use setConfirmation()
        // END TODO
    }, []);

    return (
        <div className="App">
            <div className='Nav-bar'>
                <nav>
                    <Link to="/menu"> &#60; Back</Link>
                </nav>
                <Outlet />
            </div>
            <header className="App-header">
                <h1>Your order is on its way</h1>
            </header>
            <div className="App-body">
                <div className="White-bg">
                    <div className='container'>
                        <div className='m-2 bg-success text-light rounded'>
                            <div>Your order was confirmed</div>
                            <div>Confirmation number <b>{confirmation.number}</b></div>
                            <div>Expected delivery <b><Moment format="ddd D MMM LT">{confirmation.eta}</Moment></b></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ConfirmationSuccess;
