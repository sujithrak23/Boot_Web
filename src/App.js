import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './components/Blog';
import Slideshow from './components/Slideshow';
import SinglePost from './components/SinglePost';
import Sidescreen from './components/Sidescreen';
import Largeimg from './components/Largeimg';
import Cards from './components/Cards';
import Template from './components/Template';
import Login from './components/Login';
import HomeCart from './Cart/HomeCart';
import AddToCart from './Cart/AddToCart';
import { CartProvider } from 'react-use-cart';


function App() {
  return(
    <div>
      <Blog/>
      {/*<Cards/>
      <Slideshow/>
      <Largeimg/>
      <SinglePost/>
      <Sidescreen/>
      <Template/>
  <Login/>*/}
      <CartProvider>
          <HomeCart/>
          <AddToCart/>
      </CartProvider>
     
    </div>
  );
}

export default App;
