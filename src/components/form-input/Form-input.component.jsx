import React from 'react';
import { Input } from './Form-input.styles';

const FormInput = () => {
  return (
    <div style={{ width: '70%', margin: '0 auto' }}>
      <label
        style={{
          fontSize: '2rem',
          paddingBottom: '15px'
        }}
        htmlFor=""
      >
        Email
      </label>
      <br></br>
      <Input placeholder="email" type="text" />
    </div>
  );
};

export default FormInput;
