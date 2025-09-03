import Create from './Create';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

const App = () => {
  const title = "Welcome to new Blog site";
  const likes = 50;


  return ( 
    <>
    <Router>
      <div className="App m-auto ">
        <Navbar/>
        <div className="content bg-gradient-to-tl from-pink-600 to-white  p-[20px]">
          <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/create" element={<Create/>} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
   );
}
 
export default App;