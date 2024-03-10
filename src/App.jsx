import { Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import Singleuser from "./components/Singleuser";
import Galery from './components/Galery';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="single/:id" element={<Singleuser />} />
      <Route path="" element={<Galery />} />
    </Routes>
  );
}

export default App;
