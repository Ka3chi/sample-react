
import { Route, Routes } from "react-router-dom";
import { Dashboard , Usermanagement , Login , Signup , Sample } from "../pages/compiler";




const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/Login" element={<Login />}>
            </Route>
            <Route path="/Sample" element={<Sample />}>
            </Route>
            <Route path="/Signup" element={<Signup />}>
            </Route>
            <Route path="/" element={<Dashboard />}>
                
            </Route>
            <Route path="/about" element={<Usermanagement />}>
                
            </Route>
        </Routes>
    </div>
  )
}

export default AllRoutes
