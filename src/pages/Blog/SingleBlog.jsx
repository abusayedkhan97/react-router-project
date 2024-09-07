import { useParams } from "react-router-dom";
import { blogs } from "../../fake/data";

const SingleBlog = () => {
    const {blogId} = useParams();
    const blog = blogs.find(item => item.id == blogId);
    
  return (
    <div className="singleBlogPage w-1/2 mx-auto bg-slate-200 px-16 py-5">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <img className="m-auto mb-4" src={blog.photo} alt="" />
        <p>{blog.des}</p>
    </div>
  )
}

export default SingleBlog