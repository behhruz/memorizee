import HomeIcon from "../assets/icons/home.svg";
import ExamIcon from "../assets/icons/examp.svg";
import ProfileIcon from "../assets/icons/profile.svg";
import ComponentHome from "../components/pages/HomePage/home";
import ComponentExam from "../components/pages/ExamPage/exam";
import ComponentProfile from "../components/pages/ProfilePage/profile";

let data = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    element: <ComponentHome />,
    img: HomeIcon,
    hidden: false,
  },
  {
    id: 2,
    title: "Exam",
    path: "/exam",
    element: <ComponentExam />,
    img: ExamIcon,
    hidden: false,
  },
  {
    id: 3,
    title: "Profile",
    path: "/profile",
    element: <ComponentProfile />,
    img: ProfileIcon,
    hidden: false,
  },
];
export default data;
