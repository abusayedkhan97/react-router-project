import { Link } from "react-router-dom";
import { blogs } from "../../fake/data";
const Blog = () => {
  return (
    <>
      <div className="blog flex p-10 mx-10 flex-wrap gap-5">
        {blogs.map((item) => {
          return (
            <div className="item flex gap-4 justify-start p-3 border w-[32%]" key={item.id}>
              <div className="blog-phoito">
                <img className="w-[150px] h-24 object-cover rounded" src={item.photo} alt="" />
              </div>

              <div className="content flex flex-col justify-between">
                <div className="blog-title">{item.title}</div>
                <Link to={`/blog/${item.id}`} className="bg-black text-white px-5 py-2 rounded-md">
                  Lern More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Blog;
