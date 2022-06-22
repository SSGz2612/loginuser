import { useState } from 'react';
import './App.css';

function App(){
  const [ user, setUser ] = useState({});

  const handle = (e) => {
    e.preventDefault();

    let v = e.target.value;
    let i = e.target.getAttribute('name');

    const newuser = { ...user };
    newuser[i] = v;
    setUser(newuser);    
  }

  const getData = (e) => {
    e.preventDefault();
    console.log(user);
  }

  return(
    <div className='container'>
      <div className='title'>Login</div>
      <form onSubmit={ getData }>
        <input
          type='text'
          name='user'
          placeholder='User'
          onChange={ handle }
        >
        </input>

        <input
          type='password'
          name='password'
          placeholder='Password'
          onChange={ handle }
        >
        </input>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default App;
