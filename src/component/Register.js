import { useHistory } from "react-router-dom"

export default function Register(){
  const history=useHistory();
    return(
        <div className='login'>
        <img src="https://i.pinimg.com/originals/a6/cb/8a/a6cb8a288fd7cd1a2902818fe961841a.jpg" />
        <div className=' log'>
          <h1>Create an Account</h1>
          <input className='put' placeholder='First Name' />
          <input className='put' placeholder='Last Name' /><br />
          <input className='put1' placeholder='Email Address' /><br />
          <input className='put' placeholder='Password' />
          <input className='put' placeholder='Repeat Password' />
          <button className='bo1 bot '>
            <p>Register Account</p>
          </button><hr/>
          <button className='dan bot '>
            <img className='top12' src='https://i.pinimg.com/originals/5c/fd/f9/5cfdf9580e179b3d7df21e8d8adbe1ba.jpg'></img>
            <p>Register With Google</p>
          </button> <button className='bo1 bot '>
            <img className='top12 ' src='https://www.pngkit.com/png/detail/0-4506_facebook-logo-png-transparent-facebook-icon-small-png.png'></img>
            <p>Register With Facebook</p>
          </button><hr/>
          <a
          href="#"
          style={{color:"blue"}}
          onClick={()=>history.push("/forget")}
          ><u>Forget Passworg?</u></a>
          <br/><br/>
          <a 
          href="#"
          style={{color:"blue"}}
          onClick={()=>history.push('/login')}
        ><u>Already have an account? Login!</u></a>

        </div>
      </div>
    )
}