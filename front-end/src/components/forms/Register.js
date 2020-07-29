import React from 'react';
import Footer from '../Footer';

const Register = () => {
  return (
    <>
      <main>
        <div className='container'>
          <div className='row mt-5'>
            <div className='col-md-5 mx-auto mb-4'>
              <div className='card p-5 shadow'>
                <form className='form'>
                  <div className='text-center'>
                    <img className='mb-4' src='/images/holberton-logo.png' alt='' width='72' height='72' />
                    <h1 className='h5 mb-3 font-weight-normal'>Welcome</h1>
                  </div>
                  <div className='form-group'>
                    <label for='inputName' className='text-muted'>Full name:</label>
                    <input type='text' id='inputName' className='form-control' name='name' required />
                  </div>
                  <div className='form-group'>
                    <label for='selectUserType' className='text-muted'>User type:</label>
                    <select className='form-control' id='selectUserType' name='userType'>
                      <option value='' selected>--- Select ---</option>
                      <option value='student'>Student</option>
                      <option value='company'>Company</option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label for='inputEmail' className='text-muted'>Email:</label>
                    <input type='email' id='inputEmail' className='form-control' name='email' required />
                  </div>
                  <div className='form-group'>
                    <label for='inputPassword' className='text-muted'>Password:</label>
                    <input type='password' id='inputPassword' className='form-control' name='password' required />
                  </div>
                  <div className='text-center mt-4'>
                    <button className='btn btn-danger' type='submit'>Create</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Register;
