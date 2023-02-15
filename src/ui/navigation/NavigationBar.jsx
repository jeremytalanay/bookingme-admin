import { NavLink } from 'react-router-dom';
import style from './NavigationBar.module.css';

const NavigationBar = () => {
  return (<nav className={style.nav}>
    <div className={style['nav-row']}>
      <div className={style.left}>
        You can put anything here...
      </div>
      <div className={style.right}>
        <ul className={style.menu}>
          <li><NavLink to="/"><i className="fa fa-user-circle" aria-hidden="true"></i> Jeremy</NavLink></li>
          <li><NavLink to="/">Logout</NavLink></li>
        </ul>
      </div>
    </div>
  </nav>);
};

export default NavigationBar;