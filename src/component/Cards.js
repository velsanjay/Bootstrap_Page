 import { CardsTop } from "./CardsTop"
import { CardBottom } from "./data"


 export default function CardsData(){
    return(
        <div className='bac'>
        <h1>Cards</h1>
        <CardsTop/>
        <div className="a1">
          {CardBottom.map((pro,idx)=>(
            <div className='base' style={{color:pro.color}} key={idx}>
              <h6>{pro.top}</h6><hr/>
              <p>{pro.bot}</p>
            </div>
          ))}
        </div>
      </div>
    )
 }