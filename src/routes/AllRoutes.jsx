
import { Route, Routes } from "react-router-dom";
import { Dashboard , Usermanagement } from "../pages/compiler";



const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Dashboard />}>
                
            </Route>
            <Route path="about" element={<Usermanagement />}>
                
            </Route>
        </Routes>
    </div>
  )
}

export default AllRoutes
