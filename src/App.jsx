import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import './pages/All1.css';
// import Homepage from './pages/Home';
import Footer from './component/Footer';
import Myroute from './component/Myroute';
// import TodaysDeals from './pages/TodaysDeals';
// import Login from './pages/Login';
import { GlobalContext } from './context/Context';



const  App = () => {
  let {state , dispatch} = useContext(GlobalContext);
  return (
    <div className="App">
      <Header />
      <Myroute />
      {/* <Homepage /> */}
      <Footer />
    </div>
  )
}

export default App;
