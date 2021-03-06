import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/home';
import Contact from './pages/contact/contact';
import Introduce from './pages/introduce/introduce';
import Login from './pages/login/login';
import notFound from './pages/notFound/notFound';
import Register from './pages/register/register';
import ProductDetail from './pages/productDetail/productDetail';
import Buy from './pages/buy/buy';
import History from './pages/history/history';
import Cart from './pages/cart/cart';
import ManageOrder from './pages/admin/order/manageOrder';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/contact' exact component={Contact}/>
        <Route path='/introduce' exact component={Introduce}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/register' exact component={Register}/>
        <Route path='/product/:id' exact component={ProductDetail}/>
        <Route path='/buy/:id' component={Buy}/>
        <Route path='/history/:id' exact component={History}/>
        <Route path='/cart/:id' exact component={Cart}/>
        <Route path='/admin/order' exact component={ManageOrder}/>
        <Route exact component={notFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
