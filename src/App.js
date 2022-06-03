import Header from './components/Header';
import Products from './components/Products';
import Form from './components/Form';
import data from './data';

function App() {
  const { products } = data;
  return (
    <div className="App">
      <Header></Header>
      <div className="row">
        <Form></Form>
        <Products product={ products }></Products>
      </div>
    </div>
  );
}

export default App;
