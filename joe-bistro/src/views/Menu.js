import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link, useNavigate } from "react-router-dom";
import '../App.css';
import MenuItem from '../components/menu-item';
import '../styles/Menu.css'

import { menu } from '../data/menu'; // REMOVE this

function Menu() {

    const navigate = useNavigate();

    // TODO 1:
    // Fetch the menu from the server 
    // GET http /menu
    // Receive: a list of menu items
    const items = menu
    // END TODO

    function selectItem(itemId) {
        console.log('Hello from parent')
        navigate(`/confirm?id=${itemId}`)
    }

    return (
        <div className="App">
            <div className='Nav-bar'>
                <nav>
                    <Link to="/"> &#60; Back</Link>
                </nav>
                <Outlet />
            </div>
            <header className="App-header">

                <h1>Order an item</h1>
                <h3><i>Pick from our finest selection</i></h3>
            </header>
            <div className="App-body">
                <div className="White-bg">
                    <div className='container'>
                        <div className='row'>
                            {items.map((item) => {
                                return (
                                    <div key={item.id} className='col-6'>
                                        <MenuItem id={item.id} name={item.name} price={item.price} imageLink={item.image} selectItem={selectItem}> </MenuItem>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;


