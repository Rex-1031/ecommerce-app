import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

library.add(fab)


const  App = ()=> {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home/>} />
        <Route path="/shop" element={<Shop />}/>
        <Route path="/auth" element={<Authentication/>}/>
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>

  );
}

export default App;
