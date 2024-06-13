import './App.css';
import Home from './components/pages/home/home';
import Dishes from './components/pages/dishes/dishes';
import Menu from './components/pages/menu/menu';
import Galleries from './components/pages/galleries/galleries';
import Reservation from './components/pages/reservation/reservation';


function App() {
  return (
    <div className='App'>
      <Home/>
      <Dishes/>
      <Menu/>
      <Galleries/>
      <Reservation/>

    </div>
  );
}

export default App;
