import { useHistory } from "react-router-dom"
import NavBarBtn from "./DropDown";

export function NavBar() {
    const history = useHistory();
    return (
        <div>
            <button
                onClick={() => history.push("/")}
                className="nav-btn">
                <h3 ><span>&#128521;</span>  SB ADMIN<sup>2</sup></h3>
            </button> 
            <hr />
            <button
                onClick={() => history.push("/")}
                className="nav-btn">
                <h6>Dashboard</h6>
            </button> 
            <hr/>
            <NavBarBtn />
        </div>
    )
}