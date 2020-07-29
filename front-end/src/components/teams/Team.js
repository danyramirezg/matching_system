import React from 'react';
import Header from '../Header';
import Member from './Member';
import Footer from '../Footer';

const Team = () => {
  return (
    <>
      <Header />
      <main>
        <div className='container'>
          <div className='row mt-5'>
            <div className='col-md-8 mx-auto mb-4'>
              <div className='card shadow'>
                <div className='card-body'>
                  <h2 className='text-center my-4' style={{ color: '#999' }}>Team name <a className='btn btn-sm btn-outline-danger float-right mt-1' href='/teams' role='button'>Back</a></h2>
                  <hr />
                  <p className='text-muted mb-1'>Why is your team the best team to complete any of the projects presented by the company?</p>
                  <p className='text-justify'>Description...</p>
                  <hr />
                  <Member />
                  <Member />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <hr />
      <Footer />
    </>
  );
};

export default Team;
