import Header from "./component/header/Header";
import Navbar from "./component/Navbar/Navbar";
import Search from "./component/Search/Search";
import Allmobiles from "./component/Allmobiles/Allmobiles";
import { useState } from "react";
import Home from "./component/Home/Home";
import Detail from "./component/Detail/Detail";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import AddtoCart from "./component/Addtocart/AddtoCart";
import Register from "./component/Backend/Register/Register";
import Login from "./component/Backend/Login/Login";
import Admin from "./component/Admin/Admin";
import Alert from "./component/Alert/Alert";
import About from "./component/About/About";
import Fotter from "./component/Fotter/Fotter";
function App() {
  const [loginuser,setloginuser] = useState({})
  const [alert,setalert] = useState("")
  const [mode,setmode] = useState("light")
  const [responsive,setresponsive] = useState(false)
  const [searchdata,setsearchdata] = useState("")
  const searching = (event)=>{
    const data = (event.target.value).toLowerCase() 
    setsearchdata(data)
  }
  const toggelmode = ()=>{
    if(mode === "light"){
      document.body.style.backgroundColor ='black'
      showalert('Dark Mode has be enables successfully')
      setmode('white')
    }
    else  {
      document.body.style.backgroundColor ='white'
      showalert('Lithe Mode has be enables successfully')
      setmode("light")
    }
  }
  const showalert = (type,message)=>{
    setalert({
      type:type,
      message:message,
    })
  }
  setTimeout(()=>{
    setalert(null)
  },7000)
  const ResponsiveHandler = ()=>{
    if(responsive === false){
      setresponsive(true)
    }
    else{
      setresponsive(false)
    }
  }
  return (
<>
<BrowserRouter>
<Header mode={mode}/>
<Navbar loginuser={loginuser} mode={mode} ResponsiveHandler={ResponsiveHandler} />
<Search loginuser={loginuser} setloginuser={setloginuser} toggelmode={toggelmode} mode={mode}  searching={searching}  />
<Alert alert={alert}  />
<Routes>
<Route path="/" element={<Home mode={mode} responsive={responsive}  />}  />
  <Route path="/almobiles" element={<Allmobiles responsive={responsive}   mode={mode}  searchdata={searchdata}  />}  />
  <Route path="detailes/:model" element={<Detail mode={mode} />}  />
  <Route path="/addtocart" element={<AddtoCart mode={mode} />} />
  <Route path="/registration" element={<Register showalert={showalert} mode={mode}   />} />
  <Route path="/login" element={<Login mode={mode} showalert={showalert}   loginuser={loginuser}   setloginuser={setloginuser} />} />
  <Route path="/about" element={<About  responsive={responsive}   />} />


  <Route path="/content" element={< Fotter  responsive={responsive}   />} />

  <Route path="/admin" element={<Admin/>} />
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
