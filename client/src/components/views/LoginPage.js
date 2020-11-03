import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../_actions/user_action';

function LoginPage(props) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onChange = (event) => {
    const { target: {name, value}} = event;
    if(name === 'email'){
      setEmail(value)
    } else if(name === 'password'){
      setPassword(value)
    }
  }
  const onSubmit = (event) => {
    event.preventDefault();
    let body = {
      email, password
    }
    
    dispatch(loginUser(body))
      .then(response => {
        if(response.payload.loginSuccess){
          props.history.push('/');
        } else {
          alert('error')
        }
      })
  }
  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh'
    }}>

      <form style={{
        display: 'flex', flexDirection: 'column'
      }}
      onSubmit={onSubmit}
      >
        <label>Email</label>
        <input type="email" value={email} name="email" onChange={onChange} />
        <label>Password</label>
        <input type="password" value={password} name="password" onChange={onChange} />
        <br />
        <button>로그인</button>
      </form>
    </div>
  )
}

export default LoginPage
