import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const RightSideNav = () => {
  const {googleLogIn} =useContext(AuthContext);
  const {githubLogIn} =useContext(AuthContext);

  const handleLogin=(media)=>{
    media()
    .then(result=>{
      console.log(result.user)
    })
    .catch(error=>{
      console.log(error.message)
    })
  }
  return (
    <div className="p-4">
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Login with</h1>
        <button onClick={()=>handleLogin(googleLogIn)} className="btn btn-primary btn-outline w-full">
          <FaGoogle></FaGoogle>Login with google
        </button>
        <button onClick={()=>handleLogin(githubLogIn)} className="btn btn-neutral btn-outline w-full">
          <FaGithub></FaGithub>Login with github
        </button>
      </div>
      <div className="mt-8">
        <h1 className="text-2xl font-semibold mb-6">Find on us</h1>
        <a href="" className="flex items-center p-4 border rounded-t-lg">
          <FaFacebook className="mr-4"></FaFacebook>
          Facebook
        </a>
        <a href="" className="flex items-center p-4 border-x">
          <FaTwitter className="mr-4"></FaTwitter>
          Twitter
        </a>
        <a href="" className="flex items-center p-4 border rounded-b-lg">
          <FaInstagram className="mr-4"></FaInstagram>
          Instagram
        </a>
      </div>
      <div className="mt-8 space-y-8 bg-[#E7E7E7] p-4">
        <h1 className="text-2xl font-semibold mb-6 text-black">Q-Zone</h1>
        <div className="flex flex-col">
          <img src={qZone1} alt="" />
          <img src={qZone2} alt="" />
          <img src={qZone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
