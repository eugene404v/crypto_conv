import React from "react";

function LeftBar() {
    const [isActive, setActive] = React.useState(false)

    const burgerHandler = () => {
        if (isActive === false) {
            setActive(true)
        } else {
            setActive(false)
        }
    }
  return (
    <aside className={isActive && 'active'}>
      <button className="burger" onClick={burgerHandler}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="hr"></div>

      <ul class="aside-menu">
        <li>
          <a href="/">
            <div class="icon">
              <i class="fa fa-file-alt"></i>
            </div>
            <span>Список договоров</span>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="icon">
              <i class="fa fa-poll-people"></i>
            </div>
            <span>Текущие сделки</span>
          </a>
        </li>
        <li>
          <a href="/documents/new_document/1?type=2">
            <div class="icon">
              <i class="fal fa-receipt"></i>
            </div>
            <span>Выставить счёт</span>
          </a>
        </li>
        <li>
          <a href="/unavailable">
            <div class="icon">
              <i class="fal fa-dolly"></i>
            </div>
            <span>Отгрузки клиентам</span>
          </a>
        </li>
        <li>
          <a href="/unavailable">
            <div class="icon">
              <i class="fal fa-plus"></i>
            </div>
            <span>Добавить пункт</span>
          </a>
        </li>
      </ul>

      <div class="hr"></div>

      <ul class="aside-menu green">
        <li>
          <a href="/unavailable">
            <div class="icon">
              <i class="fal fa-folders"></i>
            </div>
            <span>Управление файлами</span>
          </a>
        </li>
        <li class="popup-parent right">
          <a href="#">
            <div class="icon">
              <i class="fal fa-landmark"></i>
            </div>
            <span>Мои компании</span>
          </a>

          <div class="popup popup-right">
            <ul class="popup-menu">
              <li>
                <a href="/company_group/lists">
                  <i class="fal fa-trademark"></i>Торговые марки
                </a>
              </li>
              <li>
                <a href="/requisites/lists">
                  <i class="fal fa-clipboard-list-check"></i>Реквизиты
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fal fa-code-branch"></i>Отделы и структура компании
                </a>
              </li>
              <div class="hr"></div>
              <li>
                <a href="/files/lists">
                  <i class="fal fa-folder-open"></i>Файлы и папки
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fal fa-key"></i>Права доступа
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fal fa-sliders-h"></i>Настройки
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="/catalog/lists">
            <div class="icon">
              <i class="fal fa-tags"></i>
            </div>
            <span>Товары и услуги</span>
          </a>
        </li>
        <li>
          <a href="/unavailable">
            <div class="icon">
              <i class="fal fa-list"></i>
            </div>
            <span>Справочники</span>
          </a>
        </li>
      </ul>

      <div class="hr"></div>

      <ul class="aside-menu" id="favs"></ul>
    </aside>
  );
}

export default LeftBar;
