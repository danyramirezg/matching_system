import React from 'react';
import Footer from '../Footer';

const SignIn = () => {
  return (
    <>
      <main>
        <div className='container text-center'>
          <div className='row mt-5'>
            <div className='col-md-4 mx-auto mb-4'>
              <div className='card p-5 shadow'>
                <form className='form'>
                  <img className='mb-4' src='/images/holberton-logo.png' alt='' width='72' height='72' />
                  <h1 className='h5 mb-3 font-weight-normal'>Please sign in</h1>
                  <div className='form-group'>
                    <label for='inputEmail' className='sr-only'>Email address</label>
                    <input type='email' id='inputEmail' className='form-control' placeholder='Email address' name='email' required />
                  </div>
                  <div className='form-group'>
                    <label for='inputPassword' className='sr-only'>Password</label>
                    <input type='password' id='inputPassword' className='form-control' placeholder='Password' name='password' required />
                  </div>
                  <button className='btn btn-danger' type='submit'>Sign in</button>
                  <hr />
                  <div className='my-3'>
                    <a href='/auth/register'>Create an account</a>
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

export default SignIn;
