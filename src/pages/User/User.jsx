import { user } from "../../fake/user";

const User = () => {
  return (
    <>
        <div className="container flex flex-wrap gap-3 p-10 mx-auto">
        <h1 className="text-center font-bold text-4xl py-10">Our Team Membar</h1>
            {user.map((item)=>{
                return (
                    <div className="user w-[19%] border p-5" key={item}>
                        <img className="w-[200px] h-[200px] object-cover rounded-2xl mx-auto" src={item.photo} alt="" />
                        <h1 className="text-2xl mt-3 text-center font-bold text-emerald-600">{item.name}</h1>
                    </div>
                );
            })}
        </div>
    </>
  )
}

export default User