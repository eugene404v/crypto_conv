import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import {logout} from './../redux/reducers/auth.reducer'
import HeaderNavLink from "./HeaderNavLink";

function Navbar() {
  const headerMenuData = [
    {
      link: "/",
      classname: "fa-file-alt",
      title: "Документы",
    },
    {
      link: "/personal",
      classname: "fa-user-hard-hat",
      title: "Персонал",
    },
    {
      link: "/clients",
      classname: "fa-user-cowboy",
      title: "Клиенты",
    },
    {
      link: "/unavailable",
      classname: "fa-user-tie",
      title: "Поставщики",
    },
    {
      link: "/unavailable",
      classname: "fa-users",
      title: "Пользов.",
    },
    {
      link: "/",
      classname: "fa-poll-people",
      title: "Сделки",
    },
    {
      link: "/",
      classname: "fa-store",
      title: "Продажи",
    },
    {
      link: "/",
      classname: "fa-inventory",
      title: "Закупки",
    },
    {
      link: "/",
      classname: "fa-layer-group",
      title: "Произв.",
    },
    {
      link: "/",
      classname: "fa-analytics",
      title: "Отчеты",
    },
    {
      link: "/",
      classname: "fa-ruble-sign",
      title: "Финансы",
    },
  ];

  const history = useHistory()
  const dispatch = useDispatch()
const {name, photo, email} = useSelector(state => state.authReducer)



  const logoutHandler = () => {
    dispatch(logout())
    history.push('/')
  };

  const [visiblePopup, setVisiblePopup] = React.useState(0);
const popupRef = React.useRef();
const profileRef = React.useRef();

const toggleVisiblePopup = (index) => {
  setVisiblePopup(index);
};

const handleOutsideClick = (event) => {
  const path = event.path || (event.composedPath && event.composedPath());
  if (!path.includes(popupRef.current) && !path.includes(profileRef.current)) {
    setVisiblePopup(0);
  }
};

React.useEffect(() => {
  document.body.addEventListener("click", handleOutsideClick);
}, []);


  return (
  <header>
    <Link to="/" className="logo">
      <img src="/assets/img/logo.png" alt="" className="logo-default" />
      <img src="/assets/img/logo-short.png" alt="" className="logo-short" />
    </Link>
    <ul className="main-menu">
      {headerMenuData.map((el) => {
        return (
          <HeaderNavLink
            key={el.link + el.classname}
            link={el.link}
            title={el.title}
            classname={el.classname}
          />
        );
      })}
    </ul>

    <ul className="side-menu ml-a" ref={popupRef}>
      <li className="popup-parent">
        <a
          onClick={() => {
            toggleVisiblePopup(1);
          }}
        >
          <i className="fal fa-search"></i>
        </a>
        <div
          className={`popup popup-search ${visiblePopup === 1 && "active"}`}
        >
          <form action="">
            <input
              type="text"
              placeholder="Искать документ, человека, прочее..."
            />
            <button type="submit">Найти</button>
          </form>
        </div>
      </li>
      <li className="popup-parent">
        <a
          onClick={() => {
            toggleVisiblePopup(2);
          }}
        >
          <i className="fal fa-tools"></i>
        </a>
        <div
          className={`popup popup-settings ${visiblePopup === 2 && "active"}`}
        >
          <ul className="popup-menu">
            <li>
              <a href="#">
                <i className="fal fa-paint-brush"></i>Персонализация
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fal fa-sliders-h"></i>Настройки личных кабинетов
              </a>
            </li>
            <li className="no-icon">
              <a href="#">Управление доступом</a>
            </li>
            <li className="no-icon">
              <a href="#">Роли в системе</a>
            </li>
            <div className="hr"></div>
            <li className="no-icon">
              <a href="#">Приложения к системе</a>
            </li>
            <li className="no-icon">
              <a href="#">Переменные для документов</a>
            </li>
            <div className="hr"></div>
            <li>
              <a href="#">
                <i className="fal fa-cube"></i>Интеграция с 1С
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fal fa-exchange-alt"></i>Импорт/Экспорт
              </a>
            </li>
            <li className="no-icon">
              <a href="#">Резервное копирование</a>
            </li>
          </ul>
        </div>
      </li>
      <li className="popup-parent">
        <a
          onClick={() => {
            toggleVisiblePopup(3);
          }}
        >
          <i className="fal fa-bell"></i>
        </a>
        <div
          className={`popup popup-notif ${visiblePopup === 3 && "active"}`}
        >
          <ul>
            <li>
              <input type="checkbox" id="not-1" />
              <label htmlFor="not-1">
                Истекает действие договора №6156. Требуется продление или
                перемещение в архив.
              </label>
            </li>
            <li>
              <input type="checkbox" id="not-2" />
              <label htmlFor="not-2">
                Истекает действие договора №6156. Требуется продление или
                перемещение в архив.
              </label>
            </li>
            <li>
              <input type="checkbox" id="not-3" />
              <label htmlFor="not-3">
                Истекает действие договора №6156. Требуется продление или
                перемещение в архив.
              </label>
            </li>
            <li>
              <input type="checkbox" id="not-4" />
              <label htmlFor="not-4">
                Истекает действие договора №6156. Требуется продление или
                перемещение в архив.
              </label>
            </li>
          </ul>
          <a href="#" className="go-to-notif">
            <i className="fal fa-bell"></i>
            <span>Перейти в центр уведомлений</span>
          </a>
        </div>
      </li>
    </ul>
    <div className="profile-info" ref={profileRef}>
      <div
        className="profile-name"
        onClick={() => {
          toggleVisiblePopup(4);
        }}
      >
        <span>{name}</span>
        <span>{email}</span>
      </div>

      <div className="popup-parent">
        <img
          onClick={() => {
            toggleVisiblePopup(4);
          }}
          src={photo}
          alt=""
          width="50"
          height="50"
          className="rounded-img"
        />

        <div
          className={`popup popup-usermenu ${visiblePopup === 4 && "active"}`}
        >
          <ul className="popup-menu">
            <li>
              <Link to='/profile'>
                <i className="fal fa-user"></i>
                Мой профиль
              </Link>
                
              
            </li>
            <li>
              <a onClick={logoutHandler}>
                <i className="fal fa-external-link"></i>Выход
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
);
}

export default Navbar;





