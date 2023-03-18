import { Color } from "./data";

export default function ColorData() {
  return (
    <div className="bac mar">
      <h1>Color Utilities</h1>
      <p>Bootstrap's default utility classes can be found on the official Bootstrap Documentation page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>
      <div className="date">
        {Color.map((prop, idx) => (
          <div className="color" key={idx}>
            <h6>{prop.top}</h6>
            <hr />
            <p style={{ background: prop.bgclr1,padding:prop.pad,margin:"0px",fontSize:prop.font}}>{prop.t1}</p>
            <p style={{ background: prop.bgclr2,padding:prop.pad,margin:"0px"}}>{prop.t2}</p>
            <p style={{ background: prop.bgclr3,padding:prop.pad,margin:"0px"}}>{prop.t3}</p>
            <p style={{ background: prop.bgclr4,padding:prop.pad,margin:"0px"}}>{prop.t4}</p>
            <p style={{ background: prop.bgclr5,padding:prop.pad,margin:"0px"}}>{prop.t5}</p>
            <p style={{ background: prop.bgclr6,padding:prop.pad,margin:"0px"}}>{prop.t6}</p>
            <p style={{ background: prop.bgclr7,padding:prop.pad,margin:"0px"}}>{prop.t7}</p>
            <p style={{ background: prop.bgclr8,padding:prop.pad,margin:"0px"}}>{prop.t8}</p>
            <p style={{ background: prop.bgclr9,padding:prop.pad1,margin:"0px"}}>{prop.t9}</p>
          </div>
        ))}
      </div>
    </div>
  )
}