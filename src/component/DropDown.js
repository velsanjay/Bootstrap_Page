import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useHistory } from 'react-router-dom';
import { Nav } from './data';

function NavBarBtn() {
    const history=useHistory();
  return (
   <div>
    <p>INTERFACE</p>
    {Nav.map((prop,idx)=>(
       <div>
         <DropdownButton  key={idx} className='nav-btn' id="dropdown-basic-button" title={prop.top}>
        <span>{prop.p1}</span>
        <Dropdown.Item onClick={()=>history.push(prop.but)} href="#">{prop.line1}</Dropdown.Item>
        <Dropdown.Item onClick={()=>history.push(prop.car)} href="#">{prop.line2}</Dropdown.Item>
        <Dropdown.Item onClick={()=>history.push(prop.anime)} href="#">{prop.line3}</Dropdown.Item>
        <span>{prop.p2}</span>
        <Dropdown.Item onClick={()=>history.push(prop.page)} href="#">{prop.line4}</Dropdown.Item>
        <Dropdown.Item onClick={()=>history.push(prop.bla)} href="#">{prop.line5}</Dropdown.Item>
      </DropdownButton>
      <hr/>
       </div>
      
    ))}
  
   </div>
  )
}

export function DropDown(){
  return(
    <DropdownButton  id="dropdown-basic-button" title={"Drop Down"}>
        <Dropdown.Item href="#">Action</Dropdown.Item>
        <Dropdown.Item href="#">Action action</Dropdown.Item>
        <hr/>
        <Dropdown.Item  href="#">Something else here</Dropdown.Item>
      </DropdownButton>
  )
}

export default NavBarBtn;