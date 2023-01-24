import HomePage from "./HomePage";
import ShopPage from "./Shop/shop";
import MagazinePage from "./Magazine/Magazine";
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import ProductDetailPage from "./Shop/productId";
function App(){
    return (
    <div>
         <Header />
         <Routes>
        <Route
            exact path="/"
            element={<HomePage />} />
        <Route
            exact path="Shop"
            element={<ShopPage />} />
        <Route
            exact path="Magazine"
            element={<MagazinePage />} />
            <Route
            exact path="/Shop/:id"
            element={<ProductDetailPage />} />
       
    </Routes>
   
    </div>
    );
}
export default App;