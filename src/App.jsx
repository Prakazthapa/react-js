import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./User/Home/Home";
import AboutUs from "./User/AboutUs/AboutUs";
import Blog from "./User/Blog/Blog";
import UserLayout from "./User/UserLayout";
import SingleBlog from "./User/Blog/SingleBlog";
import AdminLayout from "./Admin/AdminLayout";
import AdminHome from "./Admin/Home/AdminHome";
import AddBlog from "./Admin/Blog/AddBlog";
import EditBlog from "./Admin/Blog/EditBlog";
import Login from "./Auth/Login";


function App() {
  // const [a, setA] = React.useState("Hello");
  // const [b,setB] = React.useState("Hy");


  // React.useEffect(() => {
  //   console.log("This is useeffect");
  // });


  // React.useEffect(() => {
  //   console.log("This is second useeffect");
  // },[]);


  // React.useEffect(() => {
  //   console.log("This is third useeffect");
  // },[a]);

  return (
    <>
      {/* <button onClick={() => setA('hey there')}>Change me</button>
      <button onClick={() => setB('heysd there')}>Change sme</button>

      {a}{b} */}
      <Router>
        <Routes> 
          <Route path="/login" element={<Login />} />

          {/* userlayout start */}
          <Route path="" element={<UserLayout/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/aboutus" element={<AboutUs/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/blog/:id" element={<SingleBlog/>} />
          </Route>
          {/* userlayout ends */}

          <Route path="/admin/" element={<AdminLayout/>}>
            <Route path="home" element={<AdminHome/>} />
            <Route path="add" element={<AddBlog/>} />
            <Route path="edit/:id" element={<EditBlog/>} />
          </Route>

        </Routes>
      </Router>
    </>
  );
}

export default App
