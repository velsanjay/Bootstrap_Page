import { useHistory } from "react-router-dom"

export function ForgetPassWord(){
    const history=useHistory();
    return(
        <div className='login'>
        <img style={{width:"400px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjSRDhz5M3-79WB38q_gupe4AnHhdSUMuKusOCbOa674CUWI81y-jKTvrIQ_S-b3DQPo3BN5-Jt_M&usqp=CAU&ec=48600112" />
        <div className=' log'>
          <h1>Forgot Your Password?</h1>
          <label>We get it, stuff happens. Just enter your email</label> <label>address below and we'll send you a link to reset</label><p> your password!</p>
         
          <input className='put1' placeholder='Enter Email Address...' />
          <button 
          onClick={()=>history.push('/login')}
          className='bo1 bot '>
            <p>Reset Password</p>
          </button><hr/>
          
          <a
          href="#"
          style={{color:"blue"}}
          onClick={()=>history.push("/register")}
          ><u>Create An Account?</u></a>
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