'use client';

import React from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import {
	Navbar,
	NavItem,
	NavbarToggler,
	Collapse,
	NavLink,
	Nav,
	NavbarBrand
} from 'reactstrap';

function NavBar() {

	// Collapse isOpen State
	const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
		
                    <Navbar className='bg1 navbar-expand-lg navbar navbar-inverse' fixed="top" navbar-right 
                            style={{paddingRight:"28px",
               
               backgroundImage:
               'url("https://flicfloc.in/images/bg.jpg")',
               
               backgroundRepeat: "no-repeat",}}
                 >
                    <NavbarBrand href="/"
                    
                >  <img
                        
        alt="logo"
        src="images/logo.svg" 
        style={{
          
          width: 100,
    marginLeft: 51,
    marginTop: 22,
        }}
      /></NavbarBrand>
				<NavbarToggler style={{hight:'20px'}} onClick={() => { setIsOpen(!isOpen) }} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="navbar-nav align-items-lg-center ms-auto me-lg-5" navbar>
                           < li className="nav-item">
                                
                                <Link className="nav-link fs-5 inactive" href="/"> Home</Link>
                        </li>
                        < li className="nav-item">
                                
                                <Link className="nav-link fs-6 inactive" href="/services"> SERVICES</Link>
                        </li>< li className="nav-item">
                                
                                <Link className="nav-link fs-6 inactive" href="/ourwork"> OUR WORK</Link>
                        </li>< li className="nav-item">
                                
                                <Link className="nav-link  fs-6 inactive" href="/about"> ABOUT</Link>
                        </li>
                        
					</Nav>
				</Collapse>
			</Navbar>
            
        </>
	);
}

export default NavBar;