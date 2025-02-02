import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Mockman from 'mockman-js';
import { Nav } from './components';
import { Home, MockApi, ProductDetails, ProductList, WishList } from './pages';
import Login from './pages/Auth/Login/Login';
import { useAuth } from './contexts/auth-context';
import Loader from './components/Loader/Loader';
import { useData } from './contexts/data-context';
import CartList from './pages/Cart/CartList';
import SignUp from './pages/Auth/Signup/Signup';
import Logout from './pages/Auth/Logout/Logout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const { token } = useAuth();
  const { loader } = useData();
  return (
    <>
      {loader && <Loader />}
      <ToastContainer
        position='bottom-right'
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        theme='colored'
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <Nav />
      <Routes>
        <Route path='/mock-man' element={<MockApi />} />
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
        <Route
          path='/wishlist'
          element={token ? <WishList /> : <Navigate to='/login' />}
        />
        <Route
          path='/cartlist'
          element={token ? <CartList /> : <Navigate to={'/login'} />}
        />
      </Routes>
    </>
  );
}

export default App;
