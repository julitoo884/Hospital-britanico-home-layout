import React from 'react';
import './header.css';
import logo from '../../assets/logo.png'
import { Navbar , Container, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Header(){
    return(
        
        <Navbar bg="light" expand="lg" className='customNavbar navbar navbar-expand-lg navbar-light'>
            
                <Navbar.Brand href="#home" className='head--header-left'>
                    <img src={logo} alt="logo" className='head--header-logo' />
                    <Link to="/" className='head--header-home-btn'> 
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA4CAYAAABJ7S5PAAAABHNCSVQICAgIfAhkiAAAAyFJREFUaEPtmkFS2zAUhp8yZUrZlCNwg3KEeBEXk0M03CA5AeEE5AakJ+gqmDoLhxvQkxQ2FIZMVMnjpIljWU+yJOOOtJYs6XtPv34/m0CDLU3T4z+vyx+U0u/9KJw2uBQgTU3OITy/vqUEyClfA4Nx0SSMRkDMkuQUVoRBgOPtQBAC4+hr76qJ4DgHIYKw3jwFOu2fhReuYTgFMYuTARByXcyE4qY5jKOPB6MgCB5dAXEGgkMghNxgN8ZgPDAYjIUbGE5AxD/nl5TCGAth65g4g2EdxOwuuWE3w0AVwj8Y8AgdGvTD8EH3GZhx1kDk1yPTA30ILmFYAVH0CKKIMB34xXSg+/yyHLKr87IqchRYZlA6suU1jINQhbAWQ6yY2jJeRkHIPMIm4sxSfzo8GBZvhBzGhPX7XJUdNoyXMRAqEM6jUCie/DlkRRYyGKaNlxEQaKNE4aof9aTXqAoMU8arNghbZzvXmgW7db5Ui6gZ41ULBNIoPTGBG+qovUsY2iCQRumJdmi3jhnKahYvbxP2jvJNer3WMF7KIBSMUm0I2xu/jZOpTRhKIHQ9AsbiYvrM4vnYlvFCg2gawhqULXFGgVDxCGVGCRNtlT42jJcUhAqEKqOkslFMXxWvgal4VYIwbZQwG1TpowJDZryEILBnkS18dH7W4+8HjbT8k8Bv2eSyilcpCKRRyuYmFIIo6vF3g8ba7d2cvaXLWxWMPRBIo7SZtU0g+KKzukaJ8dqAUDBKO+jbBkIEIwOB9QhlyddGEBsYWxUvUgdC2zSiLJDrihdhQjNkpfadT2/FAQToicjnV2UEF125hCF7rOBeJMpCsaT0nkJW5KlsR4cfJlJDxZ8Qx/MuJZCqHg2smssWmqVyRVFHNE/VmP1gI1bhQeSQPAgPYve8+IzwGWE3I0zfAK29NTyIPNE8CA9iV3N8RviM8BlRWkLzR8MfDX80/NHgOaBjfV2NeReFmf9SLBEFrr0uOiBMz2M8I0wv0FWd04MQRK52FdtnhA6BGoZKZzqn5XzTC3znGpGerGA50Nl02ZgOwEL01Yr/MOZinuIcfwEUoRLCaZVEnwAAAABJRU5ErkJggg==" alt="home"/>   
                    </Link>
                    <h3>¡Hola Mariana!</h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='head--header-right head--header-links-container'>
                    <Nav className="">
                        <Nav.Link href="#FAMILY"><Link className='head--header-link' to="/grupo-familiar">Grupo familiar</Link></Nav.Link>
                        <Nav.Link href="#PROFILE"><Link className='head--header-link' to="/perfil">Perfil</Link></Nav.Link>
                        <Nav.Link href="#HELP"><Link className='head--header-link' to="/ayuda">Ayuda</Link></Nav.Link>
                        <Nav.Link href="#LOGOUT"><Link className='head--header-link logout-link' to="/LOGOUT">Cerrar sesión</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            
        </Navbar>
        
    )
}

export default Header;

/**
 <nav className='header--navigation'>  
            <div className='header--navigation-subnav'></div>
            <div className='header--navigation-nav customNavbar navbar navbar-expand-lg navbar-light'>
                <div className='head--header-left'> 
                       
                    <div className="customNavbar_brand_logo_separator"></div>
                    <Link to="/" className='head--header-home-btn'> 
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA4CAYAAABJ7S5PAAAABHNCSVQICAgIfAhkiAAAAyFJREFUaEPtmkFS2zAUhp8yZUrZlCNwg3KEeBEXk0M03CA5AeEE5AakJ+gqmDoLhxvQkxQ2FIZMVMnjpIljWU+yJOOOtJYs6XtPv34/m0CDLU3T4z+vyx+U0u/9KJw2uBQgTU3OITy/vqUEyClfA4Nx0SSMRkDMkuQUVoRBgOPtQBAC4+hr76qJ4DgHIYKw3jwFOu2fhReuYTgFMYuTARByXcyE4qY5jKOPB6MgCB5dAXEGgkMghNxgN8ZgPDAYjIUbGE5AxD/nl5TCGAth65g4g2EdxOwuuWE3w0AVwj8Y8AgdGvTD8EH3GZhx1kDk1yPTA30ILmFYAVH0CKKIMB34xXSg+/yyHLKr87IqchRYZlA6suU1jINQhbAWQ6yY2jJeRkHIPMIm4sxSfzo8GBZvhBzGhPX7XJUdNoyXMRAqEM6jUCie/DlkRRYyGKaNlxEQaKNE4aof9aTXqAoMU8arNghbZzvXmgW7db5Ui6gZ41ULBNIoPTGBG+qovUsY2iCQRumJdmi3jhnKahYvbxP2jvJNer3WMF7KIBSMUm0I2xu/jZOpTRhKIHQ9AsbiYvrM4vnYlvFCg2gawhqULXFGgVDxCGVGCRNtlT42jJcUhAqEKqOkslFMXxWvgal4VYIwbZQwG1TpowJDZryEILBnkS18dH7W4+8HjbT8k8Bv2eSyilcpCKRRyuYmFIIo6vF3g8ba7d2cvaXLWxWMPRBIo7SZtU0g+KKzukaJ8dqAUDBKO+jbBkIEIwOB9QhlyddGEBsYWxUvUgdC2zSiLJDrihdhQjNkpfadT2/FAQToicjnV2UEF125hCF7rOBeJMpCsaT0nkJW5KlsR4cfJlJDxZ8Qx/MuJZCqHg2smssWmqVyRVFHNE/VmP1gI1bhQeSQPAgPYve8+IzwGWE3I0zfAK29NTyIPNE8CA9iV3N8RviM8BlRWkLzR8MfDX80/NHgOaBjfV2NeReFmf9SLBEFrr0uOiBMz2M8I0wv0FWd04MQRK52FdtnhA6BGoZKZzqn5XzTC3znGpGerGA50Nl02ZgOwEL01Yr/MOZinuIcfwEUoRLCaZVEnwAAAABJRU5ErkJggg==" alt="home"/>   
                    </Link>
                    <h3>¡Hola Mariana!</h3>
                </div>            
                <ul className='head--header-links-container head--header-right navbar-collapse collapse show'>
                    <li className='head--header-link navItem__button nav-link'>Grupo familiar</li>
                    <li className='head--header-link navItem__button nav-link'>Perfil</li>
                    <li className='head--header-link navItem__button nav-link'>Ayuda</li>
                    <li className='head--header-link logout-link navItem__button nav-link'>Cerrar sesión</li>
                </ul>    
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div> 
        </nav>
 */