import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from '../../pages/Mainpage';
import Login from '../../pages/Login';
import NotFound from '../../pages/Notfound';

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/*" element={<NotFound />} />    
      </Routes>
    </Router>
  );
};


export default Routers;