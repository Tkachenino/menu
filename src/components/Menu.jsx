import {NavLink} from 'react-router-dom';

function Menu() {
  return (
    <div className='menu'>
      <NavLink to='/' exact activeClassName='menu__item-active' className='menu__item'>Главная</NavLink>
      <NavLink to='/drift' activeClassName='menu__item-active' className='menu__item' >Дрифт-такси</NavLink>
      <NavLink to='/timeattack' activeClassName='menu__item-active' className='menu__item'>TIME ATTACK</NavLink>
      <NavLink to='/forza' activeClassName='menu__item-active' className='menu__item'>FORZA CARTING</NavLink>
    </div>
  );
}

export default Menu;