import BlogList from "./Bloglist";
import useFetch from "./useFetch";

// // Parent conponent, passing props from the parent component to the child component to make a reusable blog list.
const Home = () => {
  const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');


  return (
    <div className="home max-xl:w-full lg:w-full container max-md:w-full">
      {/* child component */}
      <div className=" flex justify-center items-center container  ">
        {/* passing the props to the children component wrapped in conditional template */}
        {error && <div> {error} </div>}
        {isPending && <div> loading... </div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      </div>
    </div>
  );
};

export default Home;
