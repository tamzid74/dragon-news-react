/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {
    const{id} = useParams();
  return (
    <div>
      <Header></Header>
        <Navbar></Navbar>
      <div className="grid md:grid-cols-4 border p-4">
        <div className="col-span-3">
          <h1>Dragon news</h1>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
