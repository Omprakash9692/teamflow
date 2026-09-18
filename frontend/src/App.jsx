import { Routes,Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Profile from "./pages/Profile";


const App = () => {
  return (
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/tasks" element={<Tasks/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Route>
      </Routes>
  )
}

export default App