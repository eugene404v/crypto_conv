import React from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

function RightBar() {
  return (
    <div class="right-panel">
      <div class="rp-company-select">
        <span>Компания:</span>
        <div class="docs-select">
          <div class="ds-chosen">
            <img src="/files/img_cache/3_50_50_resize.jpg" alt="" />
            <span>Вебсервис</span>
          </div>

          <div class="ds-choose">
            <div class="dsc-item">
              <img
                width="30"
                height="30"
                src="/files/img_cache/1_30_30_resize.jpg"
                alt=""
              />
              <div>
                <p>
                  <a href="/company_group/view/1/?from_page=/users/profile/">
                    Ленпромаудит
                  </a>
                </p>
              </div>
            </div>
            <div class="dsc-item">
              <img
                width="30"
                height="30"
                src="/files/img_cache/2_30_30_resize.jpg"
                alt=""
              />
              <div>
                <p>
                  <a href="/company_group/view/2/?from_page=/users/profile/">
                    Росстройресурс
                  </a>
                </p>
              </div>
            </div>
            <div class="dsc-item">
              <img
                width="30"
                height="30"
                src="/files/img_cache/3_30_30_resize.jpg"
                alt=""
              />
              <div>
                <p>
                  <a href="/company_group/view/3/?from_page=/users/profile/">
                    Вебсервис
                  </a>
                </p>
              </div>

              <div class="chosen-label">
                <i class="fas fa-check-circle"></i>
              </div>
            </div>

            <a href="#" class="go-to-companies">
              <i class="fa fa-landmark"></i>
              <span>Управление компаниями</span>
            </a>
          </div>
        </div>
      </div>
      <div class="hr"></div>

      <div class="side-tabs">
        <button class="btn active" data-target="#calendar">
          <i class="far fa-calendar-alt"></i>
        </button>
        <button class="btn" data-target="#chat">
          <i class="far fa-comment-dots"></i>
        </button>
        <button class="btn" data-target="#mail">
          <i class="far fa-envelope"></i>
        </button>
        <button class="btn ml-a menu-expand">
          <i class="far fa-bars"></i>
        </button>
      </div>

      <div class="tab-content active" id="calendar">
        <Calendar 
          locale="RU-ru"
          onClickDay={(value)=> {alert(value)}}
        />

        <div class="hr"></div>

        <h3>
          События на <span class="today-label">сегодня</span>:
        </h3>
        <div class="events-wrapper">
          <div class="no-events">Событий нет</div>
        </div>

        <div class="centered">
          <a href="/events/add/" class="btn">
            <i class="far fa-plus-circle"></i>
            Новое событие
          </a>
        </div>
      </div>

      <div class="tab-content" id="chat">
        Сейчас недоступно
      </div>

      <div class="tab-content" id="mail">
        Сейчас недоступно
      </div>
    </div>
  );
}

export default RightBar;
