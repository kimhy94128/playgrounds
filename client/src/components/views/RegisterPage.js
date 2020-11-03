import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../_actions/user_action';
import { withRouter } from 'react-router-dom'

function RegisterPage(props) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const onChange = (event) => {
    const { target: {name, value}} = event;
    switch(name){
      case 'email':
        setEmail(value)
        break;
      case 'name':
        setName(value)
        break;
      case 'password':
        setPassword(value)
        break;
      case 'confirmPassword':
        setConfirmPassword(value)
        break;
      default :
        break;
    }
  }
  const onSubmit = (event) => {
    event.preventDefault();
    
    if(password !== confirmPassword){
      return alert("비밀번호가 일치하지 않습니다.")
    }

    let body = {
      email,
      name,
      password,
    }
    
    dispatch(registerUser(body))
      .then(response => {
        if(response.payload.success){
          props.history.push('/login');
        } else {
          alert('회원가입에 실패했습니다.')
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
        <label>Name</label>
        <input type="text" value={name} name="name" onChange={onChange} />
        <label>Password</label>
        <input type="password" value={password} name="password" onChange={onChange} />
        <label>Confirm Password</label>
        <input type="password" value={confirmPassword} name="confirmPassword" onChange={onChange} />
        <br />
        <button>회원가입</button>
      </form>
    </div>
  )
}

export default withRouter(RegisterPage)
