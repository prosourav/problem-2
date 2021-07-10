import React from 'react';
import './Card.css';

const Cards = (props) => {
  const {avatar,email,id,first_name,last_name} = props.page;

   return (
      <div className='col-md-4 text-center custom'>
      <div>
      <img src={avatar} alt="" className='img-fluid' />
      </div>
      <div>
      
      <h3> <span>#{id}</span> {first_name} {last_name}</h3>
      <p>{email}</p>
      
      </div>
      </div>
   );
};

export default Cards;