import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/signin/sign-in.component";

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
        <Route path="/sign-in" element={<SignIn/>}/>
      </Route>
    </Routes>

  );
}

export default App;
