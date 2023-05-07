import React,{useEffect,useState} from 'react'
import './nav.css'
function Nav() {
    const [show,setShow] = useState()
useEffect(()=>{
  window.addEventListener('scroll',()=>{
        if (window.scrollY>500) {
            setShow(true)
        }else{
            setShow(false)
        }
  })
},[]) 
  return (
    <div className={show ? 'navigationOnScroll' : 'navigation'}>
        <img className='logo' src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png" alt="logo"/>
    </div>
  )
}

export default Nav