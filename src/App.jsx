import Home from './Home';
import Navbar from './Navbar';
const App = () => {
  const title = "Welcome to new Blog site";
  const likes = 50;


  return ( 
    <>
    <div className="App m-auto ">
      <Navbar/>
      <div className="content bg-gradient-to-tl from-pink-600 to-white  p-[20px]">
        {/* <h1 className="text-3xl font-bold flex justify-center align-middle text-red-500">{title}</h1> */}
        <Home/>
      </div>
    </div>
    </>
   );
}
 
export default App;