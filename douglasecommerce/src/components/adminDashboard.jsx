import AdminNavBar from "./adminNavBar";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AdminPage from "./adminPage/admin";
import AdminProductList from './adminProductList'

const AdminDashBoard = ({userData, onRemove = f => f, onUpdateForm = f => f, onAdd = f => f}) => {
    return ( 
          <div className="flex flex-row">
            <AdminNavBar />
                <Routes>
                    <Route path="/adminProductList" element={<AdminProductList />} />
                    <Route index element={<AdminPage userData={userData} onRemove={onRemove} onUpdateForm={onUpdateForm} onAdd={onAdd} />} />
                </Routes>
        </div> 
     );
}
 
export default AdminDashBoard;
