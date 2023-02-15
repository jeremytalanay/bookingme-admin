import { Routes, Route } from 'react-router-dom';

import Sidebar from './ui/sidebar/Sidebar';
import NavigationBar from './ui/navigation/NavigationBar';

import Home from './pages/Home';
import DemoElements from './pages/DemoElements';
import DemoUI from './pages/DemoUI';
import DemoForm from './pages/DemoForm';
import AddUsersForm from './pages/users/AddUsersForm';
import Login from './pages/login/Login';
import Page404 from './pages/Page404';
import ActiveUsers from './pages/users/ActiveUsers';
import AddListingForm from './pages/listings/AddListingForm';
import ActiveListings from './pages/listings/ActiveListings';
import ActiveBookings from './pages/bookings/ActiveBookings';
import PendingBookings from './pages/bookings/PendingBookings';
import CancelledBookings from './pages/bookings/CancelledBookings';

const App = () => {
  return (
    <div className="main">
      <div className="sidebar-container">
        <div className="sidebar-bg">
          <Sidebar />
        </div>
      </div>
      <div className="right-hand">
        <NavigationBar />
        <div className="the-content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/users/add" element={<AddUsersForm />} />
            <Route path="/users/active" element={<ActiveUsers />} />

            <Route path="/listings/add" element={<AddListingForm />} />
            <Route path="/listings/active" element={<ActiveListings />} />

            <Route path="/bookings/active" element={<ActiveBookings />} />
            <Route path="/bookings/cancelled" element={<CancelledBookings />} />
            <Route path="/bookings/pending" element={<PendingBookings />} />

            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Page404 />} />

            <Route path="/elements" element={<DemoElements />} />
            <Route path="/ui" element={<DemoUI />} />
            <Route path="/form" element={<DemoForm />} />
            {/* <Route path="/homes/:slug" element={<HomesSingle />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;