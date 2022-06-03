import React from 'react';

export default function Header(props) {
    return (
        <header className="row box center">
            <div>
                <a href="#/">
                    <h1>Shop</h1>
                </a>
            </div>
            <div>
                <a href="#cart">Cart</a>
            </div>
        </header>
    )
}