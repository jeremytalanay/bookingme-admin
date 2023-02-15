import { Link } from 'react-router-dom';

import style from './Page404.module.css';

const Page404 = () => {
  return (
    <div className={`container ${style['page-404']}`}>
      <h1>404 Page Not Found</h1>
      <p>We're sorry, but the page you're looking for cannot be found.</p>
      <p>Please check that the URL is spelled correctly or try returning to the <Link to="/">homepage</Link>.</p>
    </div>
  );
};

export default Page404;