import { useEffect } from 'react'
// // child component receiving the props from the parent component to use the blog list
const BlogList = ({ blogs, title,  }) => { // <-- shorthand props, handleDelete is a function as props been passed from the Parent component.

  // const blogs = props.blogs;
  // const title = props.title;

  return (
    <div className="blog-list ">
      <h2 className="text-2xl bg-clip-text animate-pulse backdrop-blur-2xl drop-shadow-sm drop-shadow-pink-600 text-transparent bg-gradient-to-bl from-pink-600 to-black font-bold font-sans text-center mb-15 mt-10">{title}</h2>
      {blogs.map((blog) => (
        <div
          className="blog-preview pt-[10px] bg-white grayscale-100 hover:grayscale-0 mb-10 hover:scale-110 transition xl:w-200 lg:w-150 pl-[] m-[10px] rounded-xl shadow-black/30 shadow-md container "
          key={blog.id}
        >
          <div className="flex justify-around">
            <div className="pt-5">
              <h2 className="text-[20px] mb-[8px] text-pink-600 font-bold">
                {blog.title}
              </h2>
              <p className="mb-3">Written by {blog.author}</p>
              {/* Making use of the handleDelete props to make the button function  */}
              <button
                 
                className="border p-1 rounded-xl cursor-pointer hover:shadow-md duration-500 hover:shadow-pink-500 bg-pink-600 mb-3 text-white hover:text-pink-500 hover:bg-white transition "
              >
                Delete blog
              </button>
            </div>
            {/* <div>
              <img
                className=" pt-5 w-30 max-sm:w-20 xl:rounded-b-full lg:rounded-e-full max-md:rounded-bl-full max-sm:rounded-e-full mb-3"
                src={blog.image}
                alt=""
                srcset=""
              />
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
