import Header from './components/Header';
import Products from './components/Products';
import Form from './components/Form';
import data from './data';
import { useState } from 'react';

function App() {
  const { initialProducts } = data;
  const [ cartItems, setCartItems ] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1} : x)
      );
    } else {
      setCartItems([...cartItems, {...product, qty: 1}])
    }
  };
  return (
    <div className="App">
      <Header />
      <div className="row">
        <Form onAdd={onAdd} />
        <Products onAdd={onAdd} products={ initialProducts } />
      </div>
    </div>
  );
}

export default App;
