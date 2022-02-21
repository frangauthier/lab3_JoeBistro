import React from 'react';
import '../styles/Menu.css'

const MenuItem = (props) => {

    const selectButton = props.selectItem ?
    (
        <button className='btn btn-success m-1' onClick={() => props.selectItem(props.id)}>Select item</button>
    ) : (<div></div>)

    return (
        <div className='m-2 bg-white rounded'>
            <h2>{props.name}</h2>
            <h3>Price: {props.price.toFixed(2)}$</h3>
            <img src={props.imageLink} width="300" height="300"></img>
            <div>
                {selectButton}
            </div>
        </div>
    );
  }
  

export default MenuItem;