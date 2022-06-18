import { Route, Routes } from 'react-router-dom';

import './App.css';

import Blogs from './Pages/Blogs/Blogs';

import Home from './Pages/Home/Home';


import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth';


import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import InventoryDetails from './Pages/InventoryDetails/InventoryDetails';
import ManageItems from './Pages/ManageItems/ManageItems';
import AddItems from './Pages/AddItems/AddItems';
import MyItems from './Pages/MyItems/MyItems';
import ManageInventories from './Pages/Home/ManageInventories/ManageInventories';

import Contact from './Pages/Contact/Contact';
import AddInventory from './Pages/AddInventory/AddInventory';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/InventoryItem/:id' element={
        <RequireAuth>
          <InventoryDetails></InventoryDetails>
        </RequireAuth>}></Route>
       <Route path='/manageItems' element={
        <RequireAuth>
          <ManageItems></ManageItems>
        </RequireAuth>}></Route>
       <Route path='/addItems' element={
        <RequireAuth>
          <AddItems></AddItems>
        </RequireAuth>}></Route>
       <Route path='/myItems' element={
        <RequireAuth>
          <MyItems></MyItems>
        </RequireAuth>}></Route>
       
       <Route path="/contact" element={<Contact></Contact>}></Route>
        
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
       <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      
       <Route path="/addInventory" element={<AddInventory></AddInventory>}></Route>
      
        <Route path="/manageInventories" element={ <ManageInventories></ManageInventories>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;