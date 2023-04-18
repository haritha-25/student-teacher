import './App.css';
import Users from './Context/Users/UsersList';
import ProductPage from './Context/Product/ProductPage'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import DashboardSidebar from './Components/DashboardSidebar';
import DashboardNavbar from './Components/DashboardNavbar';
import AdminDashboard from './Components/AdminDashboard';
import { UsersProvider } from './Context/Users/Users';
import CreateUser from './Context/Users/CreateUser';
function App() {
  return (
    <>
    <BrowserRouter basename='/React-CRUD'> 
      <div id="wrapper">
        <DashboardSidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <DashboardNavbar />
            <UsersProvider>
              <Routes>
                <Route path='/dashboard' exact component={AdminDashboard} />
                <Route path='/users' exact component={Users} />
                <Route path='/CreateUser' exact component={CreateUser} />
                <Route path='/editUser/:uid' exact component={CreateUser} />
                <Route path='/products' exact component ={ProductPage} />
                <Route path="/" exact>
                  <Navigate to='/dashboard' />
                </Route>
              </Routes>
            </UsersProvider>
          </div>
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy;  2021</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </BrowserRouter> 
    </>
  );
}

export default App;