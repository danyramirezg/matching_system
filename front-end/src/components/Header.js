import React from 'react';

const Header = () => {
  return (
    <>
      <nav className='navbar navbar-expand-md navbar-light bg-light' style={{ borderBottom: '1px solid #ddd' }}>
        <a className='navbar-brand' href='/'>
          <img src='/images/holberton-logo.png' width='30' height='30' className='d-inline-block align-top' alt='Holberton logo' loading='lazy' />
          Holberton
        </a>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='/teams'>Teams</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/projects'>Projects</a>
            </li>
            <li className='nav-item dropdown'>
              <a className='nav-link dropdown-toggle' href='/' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                Profile
              </a>
              <div className='dropdown-menu dropdown-menu-right shadow' aria-labelledby='navbarDropdown'>
                <a className='dropdown-item' href='/'>Your profile</a>
                <a className='dropdown-item' href='/teams/new'>Create team</a>
                <a className='dropdown-item' href='/projects/new'>Create project</a>
                <div className='dropdown-divider' />
                <a className='dropdown-item' href='/auth/sign-in'>Sing out</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
