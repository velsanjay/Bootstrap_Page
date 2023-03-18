import { useHistory } from "react-router-dom"

export function PageNotFound(){
    const history=useHistory();
    return(
        <div style={{textAlign:'center',height:"87vh"}}>
            <h1 style={{fontSize:"250px"}}>404</h1>
            <p><b>Page Not Found</b></p>
            <br/><br></br>
            <p>It looks like you found a glitch in the matrix...</p>
            <a 
            onClick={()=>history.push("/")}
            // href="#"
            ><u>← Back to Dashboard</u></a>
        </div>
    )
}