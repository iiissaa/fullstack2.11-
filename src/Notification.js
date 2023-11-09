import React from 'react';

const ilmoitus = ({ message, isError }) => {
  const notificationStyle = {
    color: isError ? 'red' : 'green',
    background: 'lightgrey',
    fontSize: 16,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  if (message === null) {
    return null;
  }

  return (
    <div style={notificationStyle}>
      {message}
    </div>
  );
};

export default Notification;