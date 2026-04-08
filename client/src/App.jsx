import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import SplashScreen from './pages/SplashScreen';
import Login from './pages/Login';
import StoreSelection from './pages/StoreSelection';
import ProximityDetection from './pages/ProximityDetection';
import Scanner from './pages/Scanner';
import StoreHome from './pages/StoreHome';
import ProductDetails from './pages/ProductDetails';
import Insights from './pages/Insights';
import Profile from './pages/Profile';
import SearchExplore from './pages/SearchExplore';
import Cart from './pages/Cart';
import ShareCart from './pages/ShareCart';
import JoinCart from './pages/JoinCart';
import SharedBasket from './pages/SharedBasket';
import Checkout from './pages/Checkout';
import PaymentToken from './pages/PaymentToken';
import SuccessPage from './pages/SuccessPage';
import ComingSoon from './pages/ComingSoon';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';

function App() {
    return (
          <AuthProvider>
                <CartProvider>
                        <Router>
                                  <div className="app-container">
                                              <Routes>
                                                            <Route path="/" element={<SplashScreen />} />
                                                            <Route path="/login" element={<Login />} />
                                                            <Route path="/stores" element={<StoreSelection />} />
                                                            <Route path="/proximity" element={<ProximityDetection />} />
                                                            <Route path="/scanner" element={<Scanner />} />
                                                            <Route path="/home" element={<StoreHome />} />
                                                            <Route path="/product/:id" element={<ProductDetails />} />
                                                            <Route path="/insights" element={<Insights />} />
                                                            <Route path="/profile" element={<Profile />} />
                                                            <Route path="/search" element={<SearchExplore />} />
                                                            <Route path="/cart" element={<Cart />} />
                                                            <Route path="/share-cart" element={<ShareCart />} />
                                                            <Route path="/join-cart" element={<JoinCart />} />
                                                            <Route path="/shared-basket" element={<SharedBasket />} />
                                                            <Route path="/checkout" element={<Checkout />} />
                                                            <Route path="/payment-token" element={<PaymentToken />} />
                                                            <Route path="/success" element={<SuccessPage />} />
                                                            <Route path="/coming-soon" element={<ComingSoon />} />
                                                            <Route path="/admin" element={<Admin />} />
                                                            <Route path="*" element={<NotFound />} />
                                              </Routes>Routes>
                                  </div>div>
                        </Router>Router>
                </CartProvider>CartProvider>
          </AuthProvider>AuthProvider>
        );
}

export default App;
</AuthProvider>
