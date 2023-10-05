import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import image1 from "../../../assets/1.png";
import image2 from "../../../assets/2.png";
import image3 from "../../../assets/3.png";
import { FaCalendar } from "react-icons/fa";
import moment from "moment/moment";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h1 className="text-4xl">All category</h1>
      <div className="p-4 space-y-8">
        <h1 className="bg-[#E7E7E7] p-4 text-center text-[#403F3F] font-semibold">
          National News
        </h1>
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            className="block ml-10"
            key={category.id}
          >
            {" "}
            {category.name}{" "}
          </NavLink>
        ))}
      </div>
        <div className="space-y-4 p-1">
          <img className="w-full" src={image1} alt="" />
          <p className="text-xl">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </p>
          <div className="flex items-center space-x-4">
            <p>sports</p>
            <FaCalendar></FaCalendar>
            <p>{moment().format("MMMM, YYYY")}</p>
          </div>
        </div>
        <div className="space-y-4 p-1">
          <img className="w-full" src={image2} alt="" />
          <p className="text-xl">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </p>
          <div className="flex items-center space-x-4">
            <p>sports</p>
            <FaCalendar></FaCalendar>
            <p>{moment().format("MMMM, YYYY")}</p>
          </div>
        </div>
        <div className="space-y-4 p-1">
          <img className="w-full" src={image3} alt="" />
          <p className="text-xl">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </p>
          <div className="flex items-center space-x-4">
            <p>sports</p>
            <FaCalendar></FaCalendar>
            <p>{moment().format("MMMM, YYYY")}</p>
          </div>
        </div>
    </div>
  );
};

export default LeftSideNav;
