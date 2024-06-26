import React from "react";
import { NavLink } from "react-router-dom";

import { MdPhone } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaFax,
  FaLocationDot,
} from "react-icons/fa6";

const FooterLinks = [
  { path: "/", title: "Home" },
  { path: "/about-us", title: "About Us" },
  { path: "/our-services", title: "Our Services" },
  { path: "/our-clients", title: "Our Clients" },
  { path: "/contact-us", title: "Contact Us" },
];

const Footer = () => {
  return (
    <>
      <div className="bg-black/90 text-slate-300">
        <section className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 py-5">
            {/* Company Details */}
            <div className="py-8">
              <div className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                <a
                  href="/"
                  className="flex items-center gap-3 text-2xl text-black font-semibold"
                >
                  {/* <img
                  src="../images/RowadLogo/RowadFooter.png"
                  alt=""
                  className="footerlogo"
                  /> */}
                  <h1 className="text-slate-300 footerlogo mb-3">
                    R<span className="text-secondary">O</span>WAD
                  </h1>
                </a>
              </div>
              <p className="text-sm">
                Welcome to{" "}
                <span className="font-semibold">
                  Rowad For Software Development
                </span>
                , We are your partner in digital growth providing digital
                solutions, specializing in reliable and secure web hosting,
                website development and deployment, and innovative digital
                marketing strategies.
              </p>
              <br />
              {/* Social Media handle */}
              <div className="flex items-center gap-4 mt-2">
                <a href="#" className="scale-100 hover:scale-110 duration-300">
                  <FaFacebook className="text-2xl hover:text-secondary scale-100 hover:scale-110 duration-300" />
                </a>
                <a href="#" className="scale-100 hover:scale-110 duration-300">
                  <FaInstagram className="text-2xl hover:text-secondary scale-100 hover:scale-110 duration-300" />
                </a>
                <a href="#" className="scale-100 hover:scale-110 duration-300">
                  <FaLinkedin className="text-2xl hover:text-secondary scale-100 hover:scale-110 duration-300" />
                </a>
                <a href="#" className="scale-100 hover:scale-110 duration-300">
                  <FaXTwitter className="text-2xl hover:text-secondary scale-100 hover:scale-110 duration-300" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 col-span-1 md:pl-10">
              {/* Site Navigation Column */}
              <div>
                <div className="py-8">
                  <h1 className="text-xl font-bold mb-3 ">Site Navigation</h1>
                  <ul className="space-y-3">
                    {FooterLinks.map((link) => (
                      <li
                        key={link.title}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:text-secondary space-x-1 text-white/80"
                      >
                        <NavLink to={link.path}>{link.title}</NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Contact Column */}
              <div>
                <div className="py-8">
                  <h1 className="text-xl font-bold mb-3">Contact</h1>
                  <ul className="space-y-3">
                    <li className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-secondary items-center text-slate-300 gap-2">
                      <FaLocationDot className="text-xl sm:text-2xl" />
                      <span>584 El-Horreya Road, Gleem Alexandria, Egypt</span>
                    </li>
                    <li className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-secondary items-center text-slate-300 gap-2">
                      <IoMail className="text-xl sm:text-2xl" />
                      <span>info@rowad.com</span>
                    </li>
                    <li className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-secondary items-center text-slate-300 gap-2">
                      <MdPhone className="text-xl sm:text-2xl" />
                      <span>+20 109 1539396</span>
                    </li>
                    <li className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-secondary items-center text-slate-300 gap-2">
                      <FaFax className="text-xl sm:text-2xl" />
                      <span>+203 425 7786</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="border-t-2 border-gray-300/50 py-6 text-center">
              <span>Copyright © 2024 </span>
              <a className="" href="/">
                Rowad
              </a>
              <span> All Rights Reserved</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
