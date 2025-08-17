import { useState, useEffect } from 'react';
import BlogList from './Bloglist';
import avigail from './assets/avigail.jpg'
import bave from './assets/bave.jpg'
import good from './assets/good.jpg'

// // Parent conponent, passing props from the parent component to the child component to make a reusable blog list.
const Home = () => {
      const [blogs, setBlogs] = useState(null);
      
      // created the handleDelete function to be pass to the children component.
            const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
      }

      useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
           return res.json();
        })
        .then(data => {
            console.log(data);
            setBlogs(data);
        })
      }, []);

 

    return ( 
        <div className="home max-xl:w-full lg:w-full container max-md:w-full">
            {/* child component */}
            <div className=' flex justify-center items-center container  '>
                {/* passing the props to the children component */}
                {blogs && <BlogList blogs={blogs} title='All Blogs!' handleDelete={handleDelete} />}
                <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title= "Mario's Blogs" />
                {/* <BlogList blogs={blogs.filter((blog) => blog.image === 'mario')} title= "Mario's Blogs" /> */}
            </div>
      
        </div>
     );
}
 
export default Home;

