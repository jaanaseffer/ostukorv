import React from 'react';

export default function Form(props) {
    
    return <form className="box col-1">
        <h2>Add a product</h2>
        <form className="row">
            <input type="text" placeholder="Product image"></input>
            <input type="text" placeholder="Product name"></input>
            <input type="number" placeholder="Product price"></input>
            <button>Add product</button>
        </form>
    </form>
}