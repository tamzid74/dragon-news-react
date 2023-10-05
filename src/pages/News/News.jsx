/* eslint-disable no-unused-vars */
import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import { FaArrowLeft } from "react-icons/fa6";

const News = () => {
  const { id } = useParams();
  const news = useLoaderData();
  const aNews = news.find((aNews) => aNews._id === id);
  console.log(aNews);
  const { image_url, title, details } = aNews;

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 p-4">
        <div className="col-span-3">
          <h1 className="mb-4">Dragon news</h1>
          <div className="border p-4">
            <img className="w-full" src={image_url} alt="" />
            <h1 className="mt-4 text-2xl font-bold">{title}</h1>
            <p className="mt-4 ">{details}</p>
            <Link to="/">
              <button className=" mt-4 btn btn-secondary">
                <FaArrowLeft></FaArrowLeft>All news in this category
              </button>
            </Link>
          </div>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
