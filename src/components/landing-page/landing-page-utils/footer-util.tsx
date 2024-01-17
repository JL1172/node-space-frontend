import { AnchorHTMLAttributes, ReactElement } from "react";
import { IconType } from "react-icons";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { RiStackFill } from "react-icons/ri";
import { TfiInstagram } from "react-icons/tfi";
import { DivCategoryFooterType } from "../../../global-dto/g-dtos";

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
    cat_1: "Explore Backend Blogs",
    cat_2: "Explore Frontend Blogs",
    cat_3: "Explore Database Blogs",
    cat_4: "Sign Up For Updates",
  },
  {
    head: "Node-Space",
    cat_1: "Explore Node.js Tutorials",
    cat_2: "Sign Up For Updates",
    cat_3: undefined,
    cat_4: undefined,
  },
  {
    head: "General",
    cat_1: "Contact Form",
    cat_2: "Want To Write A Blog?",
    cat_3: "Buy Me A Coffee",
    cat_4: undefined,
  },
];
