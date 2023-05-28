import HomeIcon from "../assets/icons/home.svg";
import GameIcon from "../assets/icons/game.svg";
import ProfileIcon from "../assets/icons/profile.svg";
import NewsIcon from "../assets/icons/news.svg";

import ComponentHome from "../components/pages/HomePage/home";
import ComponentProfile from "../components/pages/ProfilePage/profile";
import  GamesPage  from "../components/pages/GamePage/game";
import NewsPage from "../components/pages/NewsPage/news";

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
    title: "Game",
    path: "/game",
    element: <GamesPage />,
    img: GameIcon,
    hidden: false,
  },
  {
    id: 3,
    title: "News",
    path: "/news",
    element: <NewsPage />,
    img: NewsIcon,
    hidden: false,
  },
  {
    id: 4,
    title: "Profile",
    path: "/profile",
    element: <ComponentProfile />,
    img: ProfileIcon,
    hidden: false,
  },
];
export default data;
