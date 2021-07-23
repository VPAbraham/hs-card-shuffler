import { ReactElement } from 'react';
import '../styles/NavBar.scss';

type NavBarProps = {
  button: ReactElement,
  dropdown1: Function,
  dropdown2: Function
}

const NavBar = ({ button, dropdown1, dropdown2 }: NavBarProps) => {
  return (
    <nav className='navbar nav-bar px-3'>
      <div className='navbar-brand'>
        <h1>CARD SHUFFLER</h1>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-start'>
          <span className='navbar-item'>
            {button}
          </span>
          <span className='navbar-item'>
            {dropdown1()}
          </span>
          <span className='navbar-item'>
            {dropdown2()}
          </span>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;