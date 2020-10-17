import React from 'react';
import './App.scss';
import Mapbox from './components/Mapbox/mapbox';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/footer';
import Slider from './components/Slider/slider';
import Doshka from './components/Doshka/doshka';
import NewsBlock from './components/NewsBlock/NewsBlock';
// import Category from './components/Category/category';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/RegisterForm/LoginComponent";
import SignUp from "./components/RegisterForm/SignupComponent";
import StateComponent from './components/StateComponent/StateComponent';



// import CarouselBox from './components/CarouselBox/CarouselBox';

function App() {


  const factsSlides = [


    {
      id: '1333',
      imgUrl: require("./assets/slider/slider-02.jpg"),
      desc: "Свята"
    },
    {
      id: '1335',
      imgUrl: require("./assets/slider/slider-04.jpg"),
      desc: "Вихідні, канікули, карантин в ваших школах"
    },
    {
      id: '1334',
      imgUrl: require("./assets/slider/slider-03.jpg"),
      desc: "Новини ваших шкіл"
    },
    {
      id: '1332',
      imgUrl: require("./assets/slider/zno.jpg"),
      desc: "Участь і перемоги у конкурсах, олімпіадах"
    },
    {
      id: '1336',
      imgUrl: require("./assets/slider/slider-05.jpg"),
      desc: "Школи з різними ухилами і секціями"
    }
  ];

  const news = [
    {
      name: "Осінні канікули в школах можуть розпочатися до 15 жовтня через ситуацію з Covid-19",
      imgUrl: require("./assets/news/news_1.jpg"),
      description: "В Україні осінні канікули в школах можуть розпочатися до 15 жовтня через ситуацію із захворюваністю коронавірусів. Про це в Facebook повідомив глава парламентського комітету з питань здоров'я нації, медичної допомоги і медичного страхування Михайло Радуцький.",
    },
    {
      name: "«Це покоління мотивують не оцінки». Інтерв'ю з Василем Дяківим, визнаним найкращим учителем Україна 2020",
      imgUrl: require("./assets/news/news_2.jpeg"),
      description: "В Украине эти выходные праздновали День учителя. В праздничный день премия Global Teacher Prize Ukraine выбрала лучшего учителя страны.\n" +
        "\n" +
        "В 2020 году награду получил учитель истории Василий Дякив из города Залещики Тернопольской области. О своем опыте учительства он рассказал в интервью Радио НВ.",
    },
    {
      name: "У школах України в листопаді з'являться електронні щоденники і класні журнали",
      imgUrl: require("./assets/news/news_3.jpg"),
      description: "В Украине приступили к тестированию электронных журналов и дневников. Для этого было создано бесплатное программное обеспечение. В испытании новых е-приложений примут участие не менее двух-трех учебных заведений из каждой области.",
    },
    {
      name: "Осінні канікули в школах України можуть початися раніше",
      imgUrl: require("./assets/news/news_4.jpg"),
      description: "В связи с проведением местных выборов каникулы в украинских школах предполагается сделать на 10 дней раньше запланированного. Об этом во время круглого стола на тему «Местные выборы 2020 и COVID-19» заявил главный государственный санитарный врач Украины Виктор Ляшко, передает УНИАН.",
    },
    {
      name: "Чи можуть батьки в Україні дозволити собі віддати дитину в приватну школу",
      imgUrl: require("./assets/news/news_5.jpg"),
      description: "Просто порахуйте, - розповідала телеведуча і засновниця приватної школи Даша Малахова у своїй колонці. Я нічого не буду вам доводити, але якщо ваш бюджет на дитину перевищує 500 грн / день (вважайте таксі, переїзди, няню, ваш час поза роботою), ви можете собі дозволити шукати приватну школу \".",
    },
    {
      name: "Формула успіху. Які предмети потрібні в школі",
      imgUrl: require("./assets/news/news_6.jpg"),
      description: "Когда предметы изучаются не по-отдельности, а наоборот, берется какое-то явление (например, телефон, еда, вода, джинсы, и т. д., которые рассматриваются с позиции «предметов» — физики, биологии, математики, бизнеса и т. д). Что приятно, полезно и практично.",
    },
    {
      name: "Рейтинг шкіл України за результатами ЗНО: які підходять для кар'єри в сфері IT",
      imgUrl: require("./assets/news/news_7.jpg"),
      description: "Вот какие школы вошли в топ-10:\n" +
        "-Лицей «Интеллект», Киев;\n" +
        "-Львовский физико-математический лицей-интернат при ЛНУ, Львов;\n" +
        "-Русановский лицей, Киев;\n" +
        "-Украинский физико-математический лицей КНУ им. Т. Шевченко, Киев;\n" +
        "-Естественно-научный лицей №145, Киев;\n" +
        "-Технический лицей КПИ, Киев;\n" +
        "-Гимназия №178, Киев\n" +
        "-Коммунальное учебное заведение «Днепровский областной лицей-интернат физико-математического профиля», Днепр\n" +
        "-Киево-Печерский лицей №171 «Лидер», Киев;\n" +
        "-Комунальное учебное заведение «Харьковский физико-математический лицей №27», Харьков.",
    },
    {
      name: "Влада Франківська проголосували за відкриття шкіл: посилаються на Конституцію",
      imgUrl: require("./assets/news/news_8.jpg"),
      description: "Городской совет Ивано-Франковска проголосоваа решение поэтапно возобновлять работу детских садов и школ, ссылаясь на многочисленные обращения родителей и на конституционное право граждан Украины получать образование.",
    }
  ];
  // const NavbarMars = [
  // 	{
  // 		img: require("./assets/navbar/mars.png")
  // 	}
  // ];

  return (

    <Router>
      <Switch>

        <Route path="/sign-in" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route exact path="/" render={() => <StateComponent slides={factsSlides} items={news} />} />

      </Switch>



    </Router>
  );
}

export default App;


// import React, { useState, useEffect, rootReducer, createStore } from "react";
// import { useDispatch, useSelector, Provider } from "react-redux";
// import { Router, Switch, Route, Link } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.scss";

// import Login from "./component/Login";
// import Register from "./component/Register";
// import Home from "./component/Home";
// import Profile from "./component/Profile";
// import BoardUser from "./component/BoardUser";
// import BoardModerator from "./component/BoardModerator";
// import BoardAdmin from "./component/BoardAdmin";

// import { logout } from "./actions/auth";
// import { clearMessage } from "./actions/message";

// import { history } from "./helpers/history";


// const AppWrapper = () => {
//   const store = createStore(rootReducer);

//   return (
//     <Provider store={store}> // Set context
//       <App /> // Now App has access to context
//     </Provider>
//   )
// }

// const App = () => {
//   const [showModeratorBoard, setShowModeratorBoard] = useState(false);
//   const [showAdminBoard, setShowAdminBoard] = useState(false);

//   const { user: currentUser } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     history.listen((location) => {
//       dispatch(clearMessage()); // clear message when changing location
//     });
//   }, [dispatch]);

//   useEffect(() => {
//     if (currentUser) {
//       setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
//       setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
//     }
//   }, [currentUser]);

//   const logOut = () => {
//     dispatch(logout());
//   };

//   return (
//     <Router history={history}>
//       <div>
//         <nav className="navbar navbar-expand navbar-dark bg-dark">
//           <Link to={"/"} className="navbar-brand">
//             bezKoder
//           </Link>
//           <div className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <Link to={"/home"} className="nav-link">
//                 Home
//               </Link>
//             </li>

//             {showModeratorBoard && (
//               <li className="nav-item">
//                 <Link to={"/mod"} className="nav-link">
//                   Moderator Board
//                 </Link>
//               </li>
//             )}

//             {showAdminBoard && (
//               <li className="nav-item">
//                 <Link to={"/admin"} className="nav-link">
//                   Admin Board
//                 </Link>
//               </li>
//             )}

//             {currentUser && (
//               <li className="nav-item">
//                 <Link to={"/user"} className="nav-link">
//                   User
//                 </Link>
//               </li>
//             )}
//           </div>

//           {currentUser ? (
//             <div className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link to={"/profile"} className="nav-link">
//                   {currentUser.username}
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <a href="/login" className="nav-link" onClick={logOut}>
//                   LogOut
//                 </a>
//               </li>
//             </div>
//           ) : (
//             <div className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link to={"/login"} className="nav-link">
//                   Login
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link to={"/register"} className="nav-link">
//                   Sign Up
//                 </Link>
//               </li>
//             </div>
//           )}
//         </nav>

//         <div className="container mt-3">
//           <Switch>
//             <Route exact path={["/", "/home"]} component={Home} />
//             <Route exact path="/login" component={Login} />
//             <Route exact path="/register" component={Register} />
//             <Route exact path="/profile" component={Profile} />
//             <Route path="/user" component={BoardUser} />
//             <Route path="/mod" component={BoardModerator} />
//             <Route path="/admin" component={BoardAdmin} />
//           </Switch>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;