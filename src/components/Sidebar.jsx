import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import NagaLogo from '../assets/img/curved-images/NAGA_round.ico';




export default props => {
  return (

    <>
      <Menu style={{ marginLeft: '0 !important' }}>
        <a className="menu-item" href="./components/Dasboard.jsx">
          Home
        </a>

        <a className="menu-item" href="/-transaction">
          Transaction
        </a>

        <a className="menu-item" href="/balance">
          Balance
        </a>

        <a className="menu-item" href="/billing">
          Billing
        </a>

        <a className="menu-item" href="/Earning">
          Earnings
        </a>

        <a className="menu-item" href="/savings">
          Savings
        </a>
        <img src={NagaLogo} className='navbar-brand-img smalli !important' alt='NagA'   />
      </Menu>

      <footer>
       
      </footer>
    </>
  );
};