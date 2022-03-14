import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Dashboard from '../pages/dashboard';
import Register from '../pages/register';
import Users from '../pages/users';
import './index.css';

const App = () => {
  return (
    <>
      <Header />

      <div className="container-fluid">
        <div className="row">
          <Menu />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="users" element={<Users />} />
              <Route path="register" element={<Register />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
