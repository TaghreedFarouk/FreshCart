import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import WishlistItems from './pages/WishlistItems/WishlistItems';
import CartItems from './pages/cartItems/cartItems';
import NotFound from './pages/NotFound/NotFound';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Layout from './Components/Layout/Layout';
import AuthContextProvider from './context/authinticationContext';
import ProtectedROUTE from './Components/Protected Route/ProtectedROUTE';
import ProductDetails from './Components/productDetails/productDetails';
import { CartProvider } from './context/cartContext'; 
import { WishlistProvider } from './context/WishlistContext';
import CheckOutSession from './Components/CheckOutSession/CheckOutSession';
import Orders from './pages/Orders/Orders';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import VerifyPassword from './Components/VerifyPassword/verifyPassword';
import UpdatePassword from './Components/UpdatePassword/UpdatePassword';
import CategoryPage from './Components/CategoryPage/CategoryPage';
import { CategoryProvider } from './context/categoryContext';
import Categories from './Components/Categories/Categories';
import UserProvider from './context/userContext';
import BrandsSlider from './Components/BrandsSlider/BrandsSlider';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <ProtectedROUTE><Home /></ProtectedROUTE> },
        { path:"freshcart", element: <ProtectedROUTE><Home /></ProtectedROUTE> },
        { path: 'products', element: <ProtectedROUTE><Products /></ProtectedROUTE> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'forgetPassword', element: <ForgetPassword /> },
        { path: 'verifyPassword', element: <VerifyPassword /> },
        { path: 'updatePassword', element: <UpdatePassword /> },
        { path: 'productDetails/:id', element: <ProtectedROUTE><ProductDetails /></ProtectedROUTE> },
        { path: 'cart', element: <ProtectedROUTE><CartItems /></ProtectedROUTE> },
        { path: 'wishlistItems', element: <ProtectedROUTE><WishlistItems /></ProtectedROUTE> },
        { path: 'allorders', element: <ProtectedROUTE><Orders /></ProtectedROUTE> },
        { path: 'categories', element: <ProtectedROUTE><Categories /></ProtectedROUTE> },
        { path: 'brandslider', element: <ProtectedROUTE><BrandsSlider/></ProtectedROUTE> },
        { path: 'category/:categoryId', element: <ProtectedROUTE><CategoryPage /></ProtectedROUTE> },
        { path: 'checkout/:cartId', element: <ProtectedROUTE><CheckOutSession /></ProtectedROUTE> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ]);

  return (
    <UserProvider>
    <CategoryProvider>
      <AuthContextProvider>
        <WishlistProvider>
          <CartProvider>
            <RouterProvider router={router} />
            <ToastContainer />
          </CartProvider>
        </WishlistProvider>
      </AuthContextProvider>
    </CategoryProvider>
    </UserProvider>
  );
}

export default App;
