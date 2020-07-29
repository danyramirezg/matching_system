import React from 'react';

const Member = () => {
  return (
    <>
      <h5 className='my-2 font-weight-normal text-center' style={{ color: '#999' }}>Team member</h5>
      <p className='text-muted mb-1'>Full Name:</p>
      <p>Name</p>
      <p className='text-muted mb-1'>GitHub URL:</p>
      <p>github.com</p>
      <p className='text-muted mb-1'>LinkedIn URL:</p>
      <p>linkedin.com</p>
      <p className='text-muted mb-1'>What’s an impressive thing you have done?</p>
      <p className='text-justify'>Description...</p>
      <hr />
    </>
  );
};

export default Member;
