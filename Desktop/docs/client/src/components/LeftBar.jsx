import React from "react";
import FavLink from "./FavLink";
import {useSelector, useDispatch} from 'react-redux'
import { fetchFavs } from "redux/reducers/favs.reducer";




function LeftBar() {
    const [isActive, setActive] = React.useState(false)
    const favs = useSelector(state => state.favsReducer.links)
    const [ready, setReady] = React.useState(false);
    const dispatch = useDispatch();
  
    React.useEffect(() => {
      if (ready === false) {
        dispatch(fetchFavs());
        setReady(true);
      }
    });

    const burgerHandler = () => {
        if (isActive === false) {
            setActive(true)
        } else {
            setActive(false)
        }
    }
  return (
    <aside className={isActive ? 'active' : ''}>
      <button className="burger" onClick={burgerHandler}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="hr"></div>

      <ul className="aside-menu">
        <li>
          <a href="/">
            <div className="icon">
              <i className="fa fa-file-alt"></i>
            </div>
            <span>Список договоров</span>
          </a>
        </li>
        <li>
          <a href="#">
            <div className="icon">
              <i className="fa fa-poll-people"></i>
            </div>
            <span>Текущие сделки</span>
          </a>
        </li>
        <li>
          <a href="/documents/new_document/1?type=2">
            <div className="icon">
              <i className="fal fa-receipt"></i>
            </div>
            <span>Выставить счёт</span>
          </a>
        </li>
        <li>
          <a href="/unavailable">
            <div className="icon">
              <i className="fal fa-dolly"></i>
            </div>
            <span>Отгрузки клиентам</span>
          </a>
        </li>
        <li>
          <a href="/unavailable">
            <div className="icon">
              <i className="fal fa-plus"></i>
            </div>
            <span>Добавить пункт</span>
          </a>
        </li>
      </ul>

      <div className="hr"></div>

      <ul className="aside-menu green">
        <li>
          <a href="/unavailable">
            <div className="icon">
              <i className="fal fa-folders"></i>
            </div>
            <span>Управление файлами</span>
          </a>
        </li>
        <li className="popup-parent right">
          <a href="#">
            <div className="icon">
              <i className="fal fa-landmark"></i>
            </div>
            <span>Мои компании</span>
          </a>

          <div className="popup popup-right">
            <ul className="popup-menu">
              <li>
                <a href="/company_group/lists">
                  <i className="fal fa-trademark"></i>Торговые марки
                </a>
              </li>
              <li>
                <a href="/requisites/lists">
                  <i className="fal fa-clipboard-list-check"></i>Реквизиты
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fal fa-code-branch"></i>Отделы и структура компании
                </a>
              </li>
              <div className="hr"></div>
              <li>
                <a href="/files/lists">
                  <i className="fal fa-folder-open"></i>Файлы и папки
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fal fa-key"></i>Права доступа
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fal fa-sliders-h"></i>Настройки
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="/catalog/lists">
            <div className="icon">
              <i className="fal fa-tags"></i>
            </div>
            <span>Товары и услуги</span>
          </a>
        </li>
        <li>
          <a href="/unavailable">
            <div className="icon">
              <i className="fal fa-list"></i>
            </div>
            <span>Справочники</span>
          </a>
        </li>
      </ul>

      <div className="hr"></div>

      <ul className="aside-menu" id="favs">
      {favs && favs.map(el => {
          return <FavLink link={el.link} title={el.title}/>
        })}
      </ul>
    </aside>
  );
}

export default LeftBar;
