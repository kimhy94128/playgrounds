import React, { useEffect, useState } from 'react'
import axios from 'axios'

function LandingPage() {
  const [ message, setMessage ] = useState("");
  useEffect(()=> {
    axios.get('/api/hello').then(res => {
      const msg = res.data.message
      setMessage(msg);
      })
    });

  return (
    <div>
      랜딩페이지 { message }
    </div>
  )
}

export default LandingPage
