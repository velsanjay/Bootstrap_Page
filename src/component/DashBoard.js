import { CardsTop } from "./CardsTop";
import { Dash, DashBoardData } from "./data2";

export function DashBoard(){
    return(
        <div className="bac">
            <h1>Dashboard</h1>
            <CardsTop/>
            <div className="date">
            <div className="dash">
            {DashBoardData.map((prop,idx)=>(
                <div className="board" style={{backgroundColor:prop.clr}} key={idx}>
                    <h5>{prop.top}</h5>
                    <p>{prop.clr}</p>
                </div>
            ))}
            </div>
            <div >
                {Dash.map((prop,idx)=>(
                    <div className="da" key={idx}>
                        <h5>{prop.top}</h5>
                        <hr/>
                        <p>{prop.para}</p>
                        <br/>
                        <p>{prop.para1}</p>
                    </div>
                ))}
            </div>
            </div>
        </div>
    )
}