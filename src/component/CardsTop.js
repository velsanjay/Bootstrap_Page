import { Cards } from "./data";

export function CardsTop(){
    return(
        <div className='car'>
          {Cards.map((prod, idx) => (
            <div style={{backgroundColor:prod.color}} className='cad'>
              <p ></p>
              <div className='cards' key={idx}>
                <div>
                  <h6>{prod.name}</h6>
                  <h2>{prod.amount}</h2>
                </div>
                <img className='cards-first' src={prod.img}></img>
              </div>
            </div>
          ))}
        </div>
    )
}