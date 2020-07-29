import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Project = () => {
  return (
    <>
      <Header />
      <main>
        <div className='container'>
          <div className='row mt-5'>
            <div className='col-md-8 mx-auto mb-4'>
              <div className='card shadow'>
                <div className='card-body'>
                  <h2 className='text-center my-4' style={{ color: '#999' }}>Company name <a className='btn btn-sm btn-outline-danger float-right mt-1' href='/projects' role='button'>Back</a></h2>
                  <hr />
                  <p className='text-muted mb-1'>Description of the project:</p>
                  <p className='text-justify'>Description...</p>
                  <p className='text-muted mb-1'>Desired languages and frameworks for development:</p>
                  <p className='text-justify'>Languages...</p>
                  <hr />
                  <p className='text-muted mb-1'>Mentor name:</p>
                  <p>Name</p>
                  <p className='text-muted mb-1'>Mentor email:</p>
                  <p>Email</p>
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

export default Project;
