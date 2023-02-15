import { Link } from 'react-router-dom';

import style from './Home.module.css';

import Card from '../ui/Card';

const Home = () => {
  return (
    <div className={style.home}>
      <h1>Home - Dashboard</h1>
      <div className={style['home__grid']}>

        <div>
          <Card className={`${style.card} bg-info text-white`} body={true}>
            <span className={style['card__count']}>52</span>
            <hr className="custom-rule"/>
            <span className={style['card__label']}><Link to="/users/active">Approved Users <i className="fa fa-external-link-square" aria-hidden="true"></i></Link></span>
          </Card>
        </div>
        <div>
          <Card className={`${style.card} bg-primary text-white`} body={true}>
            <span className={style['card__count']}>87</span>
            <hr className="custom-rule"/>
            <span className={style['card__label']}><Link to="/listings/approved">Approved Listings <i className="fa fa-external-link-square" aria-hidden="true"></i></Link></span>
          </Card>
        </div>
        <div>
          <Card className={`${style.card} bg-success text-white`} body={true}>
            <span className={style['card__count']}>7</span>
            <hr className="custom-rule"/>
            <span className={style['card__label']}><Link to="/bookings/active">Active bookings <i className="fa fa-external-link-square" aria-hidden="true"></i></Link></span>
          </Card>
        </div>
        <div>
          <Card className={`${style.card} bg-success text-white`} body={true}>
            <span className={style['card__count']}>126</span>
            <hr className="custom-rule"/>
            <span className={style['card__label']}><Link to="/bookings/pending">Pending Bookings <i className="fa fa-external-link-square" aria-hidden="true"></i></Link></span>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;