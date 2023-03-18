import { Anime } from "./data2";
import { DropDown } from "./DropDown";

export function Animation(){
    return(
        <div className="bac">
            <h1>Animation Utilities</h1>
            <p>Bootstrap's default utility classes can be found on the official Bootstrap Documentation page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>
            <div style={{display:"flex"}}>
                {Anime.map((prop,idx)=>(
                    <div className="anim" key={idx}>
                        <h6>{prop.top}</h6>
                        <hr/>
                        <p>{prop.p1}</p>
                        <p>{prop.p2}</p>
                        <div className="flx">
                            <h5>{prop.p3}</h5>
                            <DropDown/>
                        </div>
                        <br/>
                        <p>{prop.p4}</p>
                        <p style={{display:prop.dis}}><DropDown/></p>
                        <p>{prop.p5}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}