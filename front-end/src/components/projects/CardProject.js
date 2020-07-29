import React from 'react';

const CardProject = () => {
  return (
    <div className='col-md-8 mx-auto mb-4'>
      <div className='card shadow'>
        <div className='card-header'>
          <div className='row justify-content-end mt-2 mr-1'>
            <button type='button' className='btn btn-outline-danger btn-sm'>Like</button>
          </div>
          <h5><a href='/project' style={{ color: '#999' }}>Company name</a></h5>
        </div>
        <div className='card-body'>
          <p className='text-justify'>Project description...</p>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
