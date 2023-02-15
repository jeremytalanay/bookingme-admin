import { NavLink, Link, useLocation } from 'react-router-dom';

import style from "./Sidebar.module.css";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className={style.sidebar}>
      <div className={style['sidebar-wrap']}>
        <div className={style.logo}>
          <Link to="/"><h1>Bookingme Admin</h1></Link>
        </div>
        <div className={style['sidebar-head']}>
          <h2>Admin access</h2>
        </div>
        <ul className={style.menu}>
          <li><NavLink className={location.pathname === '/' ? style.active : ''} to="/"><i className="fa fa-home" aria-hidden="true"></i> Home</NavLink></li>
          <li>
            <span className={style.label}><i className="fa fa-users" aria-hidden="true"></i> Users</span>
            <ul>
              <li><NavLink className={(nav) => nav.isActive ? style.active : '' } to="/users/add">Add New User</NavLink></li>
              <li><NavLink className={(nav) => nav.isActive ? style.active : '' } to="/users/active">Active Users</NavLink></li>
            </ul>
          </li>
          <li>
            <span className={style.label}><i className="fa fa-bed" aria-hidden="true"></i> Listings</span>
            <ul>
              <li><NavLink className={(nav) => nav.isActive ? style.active : '' } to="/listings/add">Add New Listing</NavLink></li>
              <li><NavLink className={(nav) => nav.isActive ? style.active : '' } to="/listings/active">Approved Listings</NavLink></li>
            </ul>
          </li>
          <li>
            <span className={style.label}><i className="fa fa-calendar" aria-hidden="true"></i> Bookings</span>
            <ul>
              <li><NavLink className={(nav) => nav.isActive ? style.active : '' } to="/bookings/active">Active Bookings</NavLink></li>
              <li><NavLink className={(nav) => nav.isActive ? style.active : '' } to="/bookings/pending">Pending Bookings</NavLink></li>
              <li><NavLink className={(nav) => nav.isActive ? style.active : '' } to="/bookings/cancelled">Cancelled Bookings</NavLink></li>
            </ul>
          </li>
        </ul>
        <hr className="custom-rule" />
        <div className={style['sidebar-head']}>
          <h2>Pages</h2>
        </div>
        <ul className={style.menu}>
          <li><Link to="/login"><i className="fa fa-file" aria-hidden="true"></i> Login</Link></li>
          <li><Link to="/404"><i className="fa fa-file" aria-hidden="true"></i> 404</Link></li>
        </ul>
        <hr className="custom-rule" />
        <div className={style['sidebar-head']}>
          <h2>Demo</h2>
        </div>
        <ul className={style.menu}>
          <li><a href="https://fontawesome.com/v4/icons/" target="_blank" rel="noreferrer"><i className="fa fa-file" aria-hidden="true"></i> Icons</a></li>
          { /*  BUTTONS, FIELDS, ETC.  */ } <li><NavLink className={(nav) => nav.isActive ? style.active : '' } to="/elements"><i className="fa fa-file" aria-hidden="true"></i> Elements</NavLink></li>  
          { /* WORKING ALERT, CARD, MODAL, ETC */ } <li><NavLink className={(nav) => nav.isActive ? style.active : '' } to="/ui"><i className="fa fa-file" aria-hidden="true"></i> UI</NavLink></li> 
          <li><NavLink className={(nav) => nav.isActive ? style.active : '' } to="/form"><i className="fa fa-file" aria-hidden="true"></i> Form</NavLink></li>
        </ul>

        <div className="spacer"></div>
      </div>
    </div>
  );
};

export default Sidebar;