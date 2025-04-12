import React from 'react';

function UserCard({ name, email }) {
  return (
    <div className="max-w-sm p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
}

export default UserCard;
