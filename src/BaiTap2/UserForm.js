import React from 'react';

function UserForm(props) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" name="name" onChange={props.onNameChange} />
    </div>
  );
}

export default UserForm;