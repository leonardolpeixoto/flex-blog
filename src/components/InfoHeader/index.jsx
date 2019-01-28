import React from 'react';

const InfoHeader = (props) => {
  return (
    <div className='superinfo-bg'>
      <p>{props.expedient}</p>
      <a href={`tel:${props.phone.number}`}>{props.phone.formatted}</a>
      <p>{props.address}</p>
    </div>
  );
};

export default InfoHeader;