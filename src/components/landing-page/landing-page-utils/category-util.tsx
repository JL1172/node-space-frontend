import { SiNestjs } from "react-icons/si";
import { CategoryType } from "../../../global-dto/g-dtos";
import { FaReact } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const categories: CategoryType[] = [
  {
    cat_type: "Backend",
    cat_color: "#E0234E",
    cat_icon: <SiNestjs className="cat-icons " color="#E0234E" />,
    cat_desc: (
      <>
        Dive into the realm of backend development with our blog series on the
        latest trends, tools, and frameworks. From server-side scripting
        languages to scalable architecture, our content covers everything a
        backend enthusiast needs. Explore hands-on tutorials, case studies, and
        best practices to enhance your backend development skills and stay ahead
        in this dynamic field.
      </>
    ),
  },
  {
    cat_type: "Frontend",
    cat_color: "rgb(97, 219, 251)",
    cat_icon: <FaReact className="cat-icons" color="rgb(97, 219, 251)" />,
    cat_desc: (
      <>
        Embark on a journey through the ever-evolving landscape of frontend
        development. Our blog collection delves into responsive design,
        cutting-edge JavaScript frameworks, and user interface innovations.
        Discover practical tips, code snippets, and design principles that will
        empower you to create visually stunning and highly interactive web
        applications. Stay connected with the latest in frontend technology and
        elevate your user experience game
      </>
    ),
  },
  {
    cat_type: "Database",
    cat_color: "#0064a5",
    cat_icon: <BiLogoPostgresql className="cat-icons" color="#0064a5" />,
    cat_desc: (
      <>
        Uncover the mysteries of databases with our insightful blog series that
        covers everything from SQL to NoSQL, data modeling, and database
        optimization. Whether you're a seasoned database administrator or just
        starting out, our content offers valuable insights into managing and
        leveraging databases effectively. Stay informed about the latest trends,
        security practices, and performance optimization strategies to ensure
        your data is not just stored but utilized to its full potential.
      </>
    ),
  },
];
