import React, { useState } from 'react'
import './Header.css'

import Logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import Bars from '../../assets/bars.png';

const Header = () => {
  const mobile = window.innerWidth<=768 ? true : false;
  const [menuOpened , setMenuOpened] = useState(false);
  return (
    <div className="header">
        
        <img src={Logo} alt="" className="logo"/>
        {(menuOpened === false && mobile === true) ? (<div style={{
          backgroundColor:'#3c3f45' , padding:'0.5rem' , borderRadius:'5px'
          }} onClick={()=>setMenuOpened(true)}>
          <img src={Bars} alt="" style={{width:'1.5rem' , height:'1.5rem'}}/>
        </div>):
        (<ul className='header-menu'>
            <li >
            <Link onClick={()=>setMenuOpened(false)}
              to="Hero"
              activeClass='active'
              span={true}
              smooth={true}
              >Home</Link>
              </li>
            <li >
            <Link onClick={()=>setMenuOpened(false)}
              to="Programs"
              span={true}
              smooth={true}
              >Programs</Link>
              
              </li>
            <li >
            <Link onClick={()=>setMenuOpened(false)}
              to="Reasons"
              span={true}
              smooth={true}
              >Why us</Link>
              </li>
            <li >
              
              <Link onClick={()=>setMenuOpened(false)}
              to="Plans"
              span={true}
              smooth={true}
              >Plans</Link>
              </li>
            <li >
              <Link onClick={()=>setMenuOpened(false)}
              to="Testimonials"
              span={true}
              smooth={true}
              >Testimonials</Link>
              </li>
        </ul>)
          }

    </div>
  )
}

export default Header
