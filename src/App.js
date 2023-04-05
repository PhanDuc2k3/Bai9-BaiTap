import React,{ useState } from 'react';
import Header from './BaiTap1/Header';
import UserFrom from './BaiTap2/UserForm'
import Greeting from './BaiTap2/Greeting'

function App() {

  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <div>
      <p>Bai1</p>
      <Header />
      <p>This is my app content.</p>
      <p> bai2 </p>
      <div>
      <UserFrom onNameChange={handleNameChange} />
      <Greeting name={name} />
    </div>
      
    </div>
  );
}

export default App;