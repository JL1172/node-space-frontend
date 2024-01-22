import { AnchorHTMLAttributes, ReactElement } from "react";
import { IconType } from "react-icons";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { RiStackFill } from "react-icons/ri";
import { TfiInstagram } from "react-icons/tfi";
import { DivCategoryFooterType } from "../../../global-dto/g-dtos";
import { Link } from "react-router-dom";

export const connectSocials: ReactElement<
  AnchorHTMLAttributes<any>,
  IconType
>[] = [
  <a href="/">
    <TfiInstagram className="social-icons" />
  </a>,
  <a href="/">
    <BsLinkedin className="social-icons" />
  </a>,
  <a href="/">
    <FaGithubSquare className="social-icons" />
  </a>,
  <a href="/">
    <RiStackFill className="social-icons" />
  </a>,
];
export const divCategories: DivCategoryFooterType[] = [
  {
    head: "Categories",
    cat_1: <Link to = "">Explore Backend Blogs</Link>,
    cat_2: <Link to = "">Explore Frontend Blogs</Link>,
    cat_3: <Link to = "">Explore Database Blogs</Link>,
    cat_4: <Link to = "">Sign Up For Updates</Link>,
  },
  {
    head: "Node-Space",
    cat_1: <Link to = "">Explore Node.js Tutorials</Link>,
    cat_2: <Link to = "">Sign Up For Updates</Link>,
    cat_3: undefined,
    cat_4: undefined,
  },
  {
    head: "General",
    cat_1: <Link to="contact-form">Contact Form</Link>,
    cat_2: <Link to="creator/login">Want To Write A Blog?</Link>,
    cat_3: <Link to = "">Buy Me A Coffee</Link>,
    cat_4: undefined,
  },
];
