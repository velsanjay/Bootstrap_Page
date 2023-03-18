import { useHistory } from "react-router-dom"

export function LoginPage(){
    const history=useHistory();
    return(
        <div className='login'>
        <img style={{width:"400px"}} src="https://media1.popsugar-assets.com/files/thumbor/yDmG0ifN-I44d2uG4EIDwWg2yfE/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/08/21/616/n/24155406/a4387395142b050c_charles-deluvio-550068-unsplash/i/Cute-Photos-Dogs.jpg" />
        <div className=' log'>
          <h1>Welcome Back!</h1>
          <input className='put1' placeholder='Enter Email Address...' />
          <input className='put1' placeholder='Password' /><br />
          <button 
          onClick={()=>history.push('/')}
          className='bo1 bot'>
            <p>Login</p>
          </button><hr/>
          <button 
          onClick={()=>history.push('/')}
          className='dan bot '>
            <img className='top12' src='https://i.pinimg.com/originals/5c/fd/f9/5cfdf9580e179b3d7df21e8d8adbe1ba.jpg'></img>
            <p>Register With Google</p>
          </button> 
          <button 
          onClick={()=>history.push('/')}
          className='bo1 bot '>
            <img className='top12 ' src='https://www.pngkit.com/png/detail/0-4506_facebook-logo-png-transparent-facebook-icon-small-png.png'></img>
            <p>Register With Facebook</p>
          </button><hr/>
          <br/>
          <a 
          href="#"
          style={{color:"blue"}}
          onClick={()=>history.push("/forget")}
          ><u>Forget Passworg?</u></a>
          <br/><br/>
          <a 
          href="#"
          style={{color:"blue"}}
          onClick={()=>history.push('/register')}
          ><u>Create An Account</u></a>

        </div>
      </div>
    )
}