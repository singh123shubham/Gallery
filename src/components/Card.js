import React from "react";
import image1 from "./Assests/img.jpg";
import "./card.css";
const Card = () => {
  return (
      <div className="bg-red-400  w-3/12  rounded-lg border-2 border-green-500 m-8 cursor-pointer">
        <div className="">
          <div className="absolute bg-lime-400 mt-4 w-auto p-2 ">
            <h2 className="font-bold">In 80 days</h2>
          </div>

          <div className="absolute bg-lime-400 mt-4 ml-56 w-10 p-2 rounded-lg  flex justify-center items-center  border-2 border-black">
            <h2 className="font-bold">3</h2>
          </div>

          <div className="absolute bg-lime-400 flex items-center justify-center w-36 mt-60 ml-16 rounded-lg border-2 border-black">
            <h1 className="m-2 font-bold">Azuki</h1>
          </div>

          <div className='absolute bg-lime-400 w-10 mt-56 ml-4 p-2 rounded-lg  flex justify-center items-center border-2 border-black'>
            <h2>I</h2>
        </div>
        <div className='absolute bg-lime-400 w-10 mt-56 ml-56 p-2 rounded-lg  flex justify-center items-center border-2 border-black'>
            <h2>W</h2>
        </div>
          <img
            src={image1}
            alt="image"
            className=" w-96 rounded-md shadow-lg "
          />
        </div>

        <div className="flex flex-wrap bg-black justify-center p-4 rounded-lg">
          <h3 className="m-3 text-white	">Price</h3>
          <h3 className="m-3 text-white	">Supply</h3>
          <h3 className="m-3 text-white	">Promote</h3>
          <h3 className="m-3 text-emerald-400	">256HGT</h3>
          <h3 className="m-3 text-emerald-400	">22222</h3>
          <h3 className="m-3  text-pink-500	">20XX</h3>
        </div>
      </div>
  );
};

export default Card;