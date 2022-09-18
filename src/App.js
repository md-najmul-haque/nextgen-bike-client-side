import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import ManageInventories from './Pages/ManageInventories/ManageInventories'
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import UpdateInventory from './Pages/UpdateInventory/UpdateInventory';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import AddInventory from './Pages/AddInventory/AddInventory';
import MyItems from './Pages/MyItems/MyItems';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <UpdateInventory></UpdateInventory>
          </RequireAuth>
        }></Route>
        <Route path='/manageinventories' element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>}>
        </Route>
        <Route path='/addinventory' element={
          <RequireAuth>
            <AddInventory></AddInventory>
          </RequireAuth>}>
        </Route>
        <Route path="/myitems" element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>}>
        </Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
