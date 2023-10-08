import { Routes, Route } from "react-router-dom";
import Main from '../../pages/Mainpage/Mainpage';
import NotFound from '../../pages/Notfound';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/*" element={<NotFound />} />    
    </Routes>
  );
};

export default Routers;
