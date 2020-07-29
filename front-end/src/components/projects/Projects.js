import React from 'react';
import Header from '../Header';
import CardProject from './CardProject';
import Footer from '../Footer';

const Projects = () => {
  return (
    <>
      <Header />
      <main>
        <div className='container'>
          <h1 class='text-center my-4'>Projects</h1>
          <div class='row justify-content-center mb-4'>
            <div class='btn-group shadow-sm' role='group'>
              <button type='button' class='btn btn-outline-danger' style={{ width: '150px' }}>All</button>
              <button type='button' class='btn btn-outline-danger' style={{ width: '150px' }}>Favorites</button>
            </div>
          </div>
          <div className='row'>
            <CardProject />
            <CardProject />
          </div>
        </div>
        <hr />
      </main>
      <Footer />
    </>
  );
};

export default Projects;
