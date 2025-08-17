
const Navbar = () => {
    return ( 
        <>
        <nav className="navbar z-50 bg-slate-200 sticky top-0 left-0 right-0  p-[20px] flex items-center justify-around w-full m-0 border-b-1 border-b-gray-300  ">
            <h1 className="text-2xl max-sm:text-xl font-bold text-pink-600">The Dojo Blog</h1>
            <div className="links ml-65 max-sm:ml-17 
            [p] text-gray-600 ">
                <a href="/" className=" decoration-none pr-[14px] max-sm:p-2  hover:text-pink-600">Home</a>
                <a href="/create" className="decoration-none p-[6px] max-sm:p-2  bg-pink-700 text-white border rounded-xl hover:bg-white hover:text-pink-600 transition ease-in-out delay-300 duration-300">New Blog</a>
            </div>
        </nav>
        </>
     );
}
 
export default Navbar;