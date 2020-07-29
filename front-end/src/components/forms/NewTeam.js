import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const NewTeam = () => {
  return (
    <>
      <Header />
      <main>
        <div className='container'>
          <div className='row mt-5'>
            <div className='col-md-8 mx-auto mb-4'>
              <div className='card p-5 shadow'>
                <form className='form'>
                  <h1 className='h2 mb-4 text-center' style={{ color: '#999' }}>New Team</h1>
                  <div className='form-group'>
                    <label for='inputTeamName' className='text-muted'>Team name:</label>
                    <input type='text' id='inputTeamName' className='form-control' name='teamName' required />
                  </div>
                  <div className='form-group'>
                    <label for='inputWhyYourTeam' className='text-muted'>Why is your team the best team to complete any of the projects presented by the company?</label>
                    <textarea id='inputWhyYourTeam' className='form-control' name='whyYourTeam' rows='3' required />
                  </div>
                  <hr className='mt-5' />
                  <h5 className='my-3 font-weight-normal text-center' style={{ color: '#999' }}>Team member 1</h5>
                  <div className='form-group'>
                    <label for='inputMemberOneName' className='text-muted'>Full name:</label>
                    <input type='text' id='inputMemberOneName' className='form-control' name='memberOneName' required />
                  </div>
                  <div className='form-group'>
                    <label for='inputMemberOneGithub' className='text-muted'>GitHub URL:</label>
                    <input type='text' id='inputMemberOneGithub' className='form-control' name='memberOneGithub' required />
                  </div>
                  <div className='form-group'>
                    <label for='inputMemberOneLinkedin' className='text-muted'>LinkedIn URL:</label>
                    <input type='text' id='inputMemberOneLinkedin' className='form-control' name='memberOneLinkedin' required />
                  </div>
                  <div className='form-group'>
                    <label for='inputMemberOneDone' className='text-muted'>What’s an impressive thing you have done?:</label>
                    <textarea id='inputMemberOneDone' className='form-control' name='memberOneDone' rows='2' required />
                  </div>
                  <hr className='mt-5' />
                  <h5 className='my-3 font-weight-normal text-center' style={{ color: '#999' }}>Team member 2</h5>
                  <div className='form-group'>
                    <label for='inputMemberTwoName' className='text-muted'>Full name:</label>
                    <input type='text' id='inputMemberTwoName' className='form-control' name='memberTwoName' />
                  </div>
                  <div className='form-group'>
                    <label for='inputMemberTwoGithub' className='text-muted'>GitHub URL:</label>
                    <input type='text' id='inputMemberTwoGithub' className='form-control' name='memberTwoGithub' />
                  </div>
                  <div className='form-group'>
                    <label for='inputMemberTwoLinkedin' className='text-muted'>LinkedIn URL:</label>
                    <input type='text' id='inputMemberTwoLinkedin' className='form-control' name='memberTwoLinkedin' />
                  </div>
                  <div className='form-group'>
                    <label for='inputMemberTwoDone' className='text-muted'>What’s an impressive thing you have done?:</label>
                    <textarea id='inputMemberTwoDone' className='form-control' name='memberTwoDone' rows='2' />
                  </div>
                  <hr className='mt-5' />
                  <h5 className='my-3 font-weight-normal text-center' style={{ color: '#999' }}>Team member 3</h5>
                  <div className='form-group'>
                    <label for='inputMemberThreeName' className='text-muted'>Full name:</label>
                    <input type='text' id='inputMemberThreeName' className='form-control' name='memberThreeName' />
                  </div>
                  <div className='form-group'>
                    <label for='inputMemberThreeGithub' className='text-muted'>GitHub URL:</label>
                    <input type='text' id='inputMemberThreeGithub' className='form-control' name='memberThreeGithub' />
                  </div>
                  <div className='form-group'>
                    <label for='inputMemberThreeLinkedin' className='text-muted'>LinkedIn URL:</label>
                    <input type='text' id='inputMemberThreeLinkedin' className='form-control' name='memberThreeLinkedin' />
                  </div>
                  <div className='form-group'>
                    <label for='inputMemberThreeDone' className='text-muted'>What’s an impressive thing you have done?</label>
                    <textarea id='inputMemberThreeDone' className='form-control' name='memberThreeDone' rows='2' />
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

export default NewTeam;
