import React from 'react';
import { Link } from 'react-router-dom';
import logoCollabSabaraMoskitto from '../assets/collabLogo_transp.png';

const Header = () => {
  return (
    <header className="bg-success py-3 px-4 d-flex justify-content-around align-items-center">
      <nav>
        <ul className="d-flex align-items-center list-unstyled m-0 p-0">
          <li className="me-3">
            <img
              src={logoCollabSabaraMoskitto}
              alt="Logo"
              style={{
                backgroundColor: '#8eff94',
                border: '2px solid green',
                padding: '10px',
                borderRadius: '20px',
                height: '60px'
              }}
            />
          </li>
          <li className="me-3">
            <Link
              to="/"
              className="text-decoration-none"
              style={{
                color: 'darkgreen',
                backgroundColor: '#8eff94',
                padding: '10px',
                border: '2px solid green',
                borderRadius: '5px',
                fontSize: 'large',
                transition: '0.3s'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'green';
                e.target.style.color = '#8eff94';
                e.target.style.border = '2px solid darkgreen';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#8eff94';
                e.target.style.color = 'darkgreen';
                e.target.style.border = '2px solid green';
              }}
            >
              Home
            </Link>
          </li>
          <li className="me-3">
            <Link
              to="/dashboard"
              className="text-decoration-none"
              style={{
                color: 'darkgreen',
                backgroundColor: '#8eff94',
                padding: '10px',
                border: '2px solid green',
                borderRadius: '5px',
                fontSize: 'large',
                transition: '0.3s'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'green';
                e.target.style.color = '#8eff94';
                e.target.style.border = '2px solid darkgreen';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#8eff94';
                e.target.style.color = 'darkgreen';
                e.target.style.border = '2px solid green';
              }}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/admin"
              className="text-decoration-none"
              style={{
                color: 'darkgreen',
                backgroundColor: '#8eff94',
                padding: '10px',
                border: '2px solid green',
                borderRadius: '5px',
                fontSize: 'large',
                transition: '0.3s'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'green';
                e.target.style.color = '#8eff94';
                e.target.style.border = '2px solid darkgreen';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#8eff94';
                e.target.style.color = 'darkgreen';
                e.target.style.border = '2px solid green';
              }}
            >
              Administração
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
