import React from "react";

const Footer = () => {
  return (
    <>
    <div className="footer-container hidden sm:flex sm:mt-[1px] sm:px-5 sm:justify-around sm:py-5 sm:bg-slate-500">
      <div>
        <p className="font-bold cursor-pointer mb-1">Get to Know us</p>

        <ul className="flex flex-col gap-0 cursor-pointer fon">
          <li className="">About us</li>
          <li>Careers</li>
          <li>Press releases</li>
          <li>Lorem</li>
        </ul>
      </div>
      <div>
        <p className="font-bold cursor-pointer mb-1">Get to Know us</p>

        <ul className="flex flex-col gap-0 cursor-pointer fon">
          <li className="">About us</li>
          <li>Careers</li>
          <li>Press releases</li>
          <li>Lorem</li>
          <li>Lorem, ipsum dolor.</li>
        </ul>
      </div>
      <div>
        <p className="font-bold cursor-pointer mb-1">Get to Know us</p>

        <ul className="flex flex-col gap-0 cursor-pointer fon">
          <li className="">About us</li>
          <li>Careers</li>
          <li>Press releases</li>
          <li>Lorem</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem</li>
        </ul>
      </div>
      <div>
        <p className="font-bold cursor-pointer mb-1">Get to Know us</p>

        <ul className="flex flex-col gap-0 cursor-pointer fon">
          <li className="">About us</li>
          <li>Careers</li>
          <li>Press releases</li>
          <li>Lorem</li>
        </ul>
      </div>

      
    </div>

    <div className="bg-slate-600 hidden sm:mt-[1px] sm:flex sm:justify-center sm:items-center sm:py-2 sm:flex-col sm:p-1">
        <div>
    <p> All Rights Reserved &copy; <span className="text-[15px] font-semibold">Menol</span></p>
    </div>

    <div className="flex gap-4 mt-2 text-xl text-white">
    <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-x-twitter"></i>
    </div>

    </div>
    </>
  );
};

export default Footer;
