import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex p-2 bg-[#F3F3F3]">
      <button className="btn btn-secondary">Latest</button>
      <Marquee pauseOnHover={true} speed={100} style={{color:"#403F3F"}}>
        <Link className="ml-4" to='/about'>I can be a React component, multiple React components, or just some
        text.</Link>
        <Link className="ml-4" to='/about'>I can be a React component, multiple React components, or just some
        text.</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
