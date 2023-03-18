import { Border } from "./data2";

export function BorderData() {
    return (
        <div className="bac">
            <h1>Border Utilities</h1>
            <p>Bootstrap's default utility classes can be found on the official Bootstrap Documentation page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>
            <div className="top">
                <div >
                    {Border.map((prod, idx) => (
                        <div style={{ backgroundColor: prod.clr}} className='cad'>
                            <p ></p>
                                    <h6 style={{ padding: "40px 300px 40px 20px", background:"white",margin:"0px",borderRadius:"10px" }}>{prod.p}</h6>
                            
                        </div>
                    ))}
                </div>
                <div>
                    {Border.map((prop, idx) => (
                        <div key={idx} className="bor">
                            <div style={{ backgroundColor: prop.clr, borderRadius: "10px" }}>
                                <div style={{ backgroundColor: "white", borderRadius: "10px" }}>
                                    <h6 style={{ padding: "40px 300px 40px 20px", }}>{prop.p}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}