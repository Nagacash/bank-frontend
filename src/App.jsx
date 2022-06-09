import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from './components/Sidebar.jsx';



const App = () => {
  return (

    <>
      <SideBar  />
      <div className="sidemargi">
    
<Dashboard className="sidemargi" />


  </div>
    </>
  
  );
}

export default App;

