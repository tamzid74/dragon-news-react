/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaBookmark, FaCodeMerge, FaEye } from "react-icons/fa6";

const NewsPortal = ({ news }) => {
  const { title, image_url, details, _id, author, rating, total_view } = news;

  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl mt-16 mb-16 p-4">
        <div className="flex items-center justify-between">
          <div className="flex mt-4 mb-4">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={author.img} />
              </div>
            </label>
            <div className="flex flex-col ml-2">
              <p>{author.name}</p>
              <p>{author.published_date}</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaBookmark></FaBookmark>
            <FaCodeMerge className="ml-4"></FaCodeMerge>
          </div>
        </div>
        <h2 className="card-title">{title}</h2>
        <figure className="mt-4">
          <img src={image_url} className="rounded-xl" />
        </figure>
        <div className="mt-4">
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}
              <Link className="text-blue-600" to={`/news/${_id}`}>
                Read more....
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
        <div className="border-t p-4 mt-4">
          <div className=" flex justify-between">
            <div className="rating">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <p className="ml-4">{rating.number}</p>
            </div>
            <div className="flex items-center">
              <FaEye></FaEye>
              <p className="ml-2">{total_view}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPortal;
