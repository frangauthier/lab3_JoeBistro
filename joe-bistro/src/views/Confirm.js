import 'bootstrap/dist/css/bootstrap.min.css';
import * as axios from 'axios';
import '../App.css';
import { useSearchParams, Outlet, Link, useNavigate } from "react-router-dom";
import MenuItem from '../components/menu-item';
import { useState, useEffect } from 'react';

import { menu } from '../data/menu';

function Confirm() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const itemId = searchParams.get('id')

    // state hook see: https://reactjs.org/docs/hooks-state.html
    const [taxes, setTaxes] = useState({})
    const [total, setTotal] = useState(0)

    // Hook called upon loading the component
    useEffect(() => {
        // console.log('itemId: ', itemId);
        const item = menu.find((item) => item.id === parseInt(itemId))
        
        async function fetchData() {
            // GET request using axios inside useEffect React hook

            // TODO 2
            // Fetch taxes + total
            // Send item
            // Receive taxes + total
            setTaxes({ qst: item.price * 0.09975, gst: item.price * 0.05 }) // Change this - add response from server
            setTotal(item.price * 1.14975) // Change this - add response from server
            // END TODO
        }
        fetchData();
    }, []);
    
    // function getTotal(item) {
    //     setTaxes({ qst: item.price * 0.09975, gst: item.price * 0.05 }) // Change this - add response from server
    //     setTotal(item.price * 1.14975) // Change this - add response from server
    // }

    function onConfirmClick() {
        navigate(`/confirm/success`)
    }

    if (!itemId) {
        return (
            <div className="App">
                <header className="App-full">
                    <h1 className="m-4">
                        No item chosen.
                    </h1>
                    <button type="button" className="btn btn-success btn-lg"><Link to="/menu">Back to menu</Link></button>
                </header>
            </div>
        )
    } else {
        const item = menu.find((item) => item.id === parseInt(itemId))
        console.log('item: ', item);

        // TODO 2:
        // Get the order summary from the server
        // Send item object
        // Receive taxes + total
        // getTotal(item)
        // End TODO

        return (
            <div className="App">
                <div className='Nav-bar'>
                    <nav>
                        <Link to="/menu"> &#60; Back</Link>
                    </nav>
                    <Outlet />
                </div>
                <header className="App-header">
                    <h1 className="m-4">
                        Proceed to checkout
                    </h1>
                    <h4>
                        <i>Your satisfaction is our TOP priority</i>
                    </h4>
                </header>
                <div className='App-body'>
                    <div className="White-bg">
                        <div>
                            Articles:
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-3'></div>
                                    <div className='col-6'>
                                        <MenuItem id={item.id} name={item.name} price={item.price} imageLink={item.image}> </MenuItem>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            Subtotal: {item.price.toFixed(2)}$
                        </div>
                        <div>
                            QST: {taxes.qst ? taxes.qst.toFixed(2) : 0}$
                            GST: {taxes.gst ? taxes.gst.toFixed(2) : 0}$
                        </div>
                        <div>
                            Total: {total ? total.toFixed(2) : 0}$
                        </div>

                        <div className='m-4'>
                            <div>
                                <button className='btn btn-success' onClick={onConfirmClick}>Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Confirm;
