import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/home';
import Contact from './pages/contact/contact';
import Introduce from './pages/introduce/introduce';
import Login from './pages/login/login';
import notFound from './pages/notFound/notFound';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/contact' exact component={Contact}/>
        <Route path='/introduce' exact component={Introduce}/>
        <Route path='/login' exact component={Login}/>
        <Route exact component={notFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
