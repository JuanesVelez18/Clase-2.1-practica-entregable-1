import React from 'react';

const Card = ({ userInfo }) => {
  const fullName = `${userInfo.name.title} ${userInfo.name.first} ${userInfo.name.last}`;

  return (
    <div>
      <div>
        <img src={userInfo.picture.medium} alt={userInfo.name.first} />
      </div>
      <h1>{fullName}</h1>
      <p>{userInfo.email}</p>
      <p>City: {userInfo.location.city}</p>
    </div>
  );
};

export default Card;
