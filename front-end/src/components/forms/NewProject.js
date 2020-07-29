import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const NewProject = () => {
  return (
    <>
      <Header />
      <main>
        <div className='container'>
          <div className='row mt-5'>
            <div className='col-md-8 mx-auto mb-4'>
              <div className='card p-5 shadow'>
                <form className='form' action='http://localhost:4000/projects/new' method='POST'>
                  <h1 className='h2 mb-4 text-center' style={{ color: '#999' }}>New Project</h1>
                  <div className='form-group'>
                    <label for='inputCompanyName' className='text-muted'>Company name:</label>
                    <input type='text' id='inputCompanyName' className='form-control' name='companyName' required />
                  </div>
                  <div className='form-group'>
                    <label for='inputProjectDescription' className='text-muted'>Description of the project:</label>
                    <textarea id='inputProjectDescription' className='form-control' name='projectDescription' rows='3' required />
                  </div>
                  <div className='form-group'>
                    <label for='inputLanguages' className='text-muted'>Desired languages and frameworks for development: <em>(opcional)</em></label>
                    <textarea id='inputLanguages' className='form-control' name='languages' rows='2' />
                  </div>
                  <div className='form-group'>
                    <label for='inputMentorName' className='text-muted'>Mentor name:</label>
                    <input type='text' id='inputMentorName' className='form-control' name='mentorName' required />
                  </div>
                  <div className='form-group'>
                    <label for='inputMentorEmail' className='text-muted'>Mentor email:</label>
                    <input type='email' id='inputMentorEmail' className='form-control' name='mentorEmail' required />
                  </div>
                  <div className='text-center mt-4'>
                    <button className='btn btn-danger' type='submit'>Create</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </main>
      <Footer />
    </>
  );
};

export default NewProject;
