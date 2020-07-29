import React from 'react';
import Header from '../Header';
import CardTeam from './CardTeam';
import Footer from '../Footer';

const Teams = () => {
  return (
    <>
      <Header />
      <main>
        <div className='container'>
          <h1 class='text-center my-4'>Teams</h1>
          <div class='row justify-content-center mb-4'>
            <div class='btn-group shadow-sm' role='group'>
              <button type='button' class='btn btn-outline-danger' style={{ width: '150px' }}>All</button>
              <button type='button' class='btn btn-outline-danger' style={{ width: '150px' }}>Favorites</button>
            </div>
          </div>
          <div className='row'>
            <CardTeam />
            <CardTeam />
          </div>
        </div>
        <hr />
      </main>
      <Footer />
    </>
  );
};

export default Teams;
