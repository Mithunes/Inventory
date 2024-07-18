import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate();

  useEffect(()=>{
    navigate('/Login');
  },[])
  return (
    <div className='container-fluid p-5'>
        <h2>Go to Products Section.</h2>
    </div>
  )
}
