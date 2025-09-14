import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './ProductCard'

function App() {
  return (

    <div className="outerdiv">
    <spam id="list">Product List</spam>
    <div id="products-container">
      
      <ProductCard product={{ name: "Product 1", price: 100, status: "Available" }} />
      <ProductCard product={{ name: "Product 2", price: 200, status: "Out of Stock" }} />
      <ProductCard product={{ name: "Product 3", price: 400, status: "Available" }} />
    </div>
    </div>
    
  )
}
export default App