import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const ShopPage =()=>{
  return(
    <h1>Shop Page</h1>
  )
}

const  App = ()=> {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home/>} />
        <Route path="/shop" element={<ShopPage />}/>
        <Route path="/auth" element={<Authentication/>}/>
      </Route>
    </Routes>

  );
}

export default App;
