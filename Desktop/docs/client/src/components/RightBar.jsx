import React from "react";

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
        <div class="calendar">
          <div class="clndr">
            <div class="c-header">
              <span class="c-current">ноябрь 2020</span>
              <div class="c-controls">
                <button class="c-prev">
                  <i class="fa fa-chevron-up"></i>
                </button>
                <button class="c-next">
                  <i class="fa fa-chevron-down"></i>
                </button>
              </div>
            </div>

            <div class="hr"></div>

            <div class="c-grid">
              <div class="days">
                <div class="body">
                  <div
                    class="c-current past adjacent-month last-month calendar-day-2020-10-26 calendar-dow-0"
                    id=""
                  >
                    26
                  </div>
                  <div
                    class="c-current past adjacent-month last-month calendar-day-2020-10-27 calendar-dow-1"
                    id=""
                  >
                    27
                  </div>
                  <div
                    class="c-current past adjacent-month last-month calendar-day-2020-10-28 calendar-dow-2"
                    id=""
                  >
                    28
                  </div>
                  <div
                    class="c-current past adjacent-month last-month calendar-day-2020-10-29 calendar-dow-3"
                    id=""
                  >
                    29
                  </div>
                  <div
                    class="c-current past adjacent-month last-month calendar-day-2020-10-30 calendar-dow-4"
                    id=""
                  >
                    30
                  </div>
                  <div
                    class="c-current past adjacent-month last-month calendar-day-2020-10-31 calendar-dow-5"
                    id=""
                  >
                    31
                  </div>
                  <div
                    class="c-current past calendar-day-2020-11-01 calendar-dow-6"
                    id=""
                  >
                    1
                  </div>
                  <div
                    class="c-current past calendar-day-2020-11-02 calendar-dow-0"
                    id=""
                  >
                    2
                  </div>
                  <div
                    class="c-current past calendar-day-2020-11-03 calendar-dow-1"
                    id=""
                  >
                    3
                  </div>
                  <div
                    class="c-current past calendar-day-2020-11-04 calendar-dow-2"
                    id=""
                  >
                    4
                  </div>
                  <div
                    class="c-current past calendar-day-2020-11-05 calendar-dow-3"
                    id=""
                  >
                    5
                  </div>
                  <div
                    class="c-current today calendar-day-2020-11-06 calendar-dow-4 today-clicked"
                    id=""
                  >
                    6
                  </div>
                  <div
                    class="c-current calendar-day-2020-11-07 calendar-dow-5"
                    id=""
                  >
                    7
                  </div>
                  <div
                    class="c-current calendar-day-2020-11-08 calendar-dow-6"
                    id=""
                  >
                    8
                  </div>
                  <div
                    class="c-current calendar-day-2020-11-09 calendar-dow-0"
                    id=""
                  >
                    9
                  </div>
                  <div
                    class="c-current calendar-day-2020-11-10 calendar-dow-1"
                    id=""
                  >
                    10
                  </div>
                  <div
                    class="c-current calendar-day-2020-11-11 calendar-dow-2"
                    id=""
                  >
                    11
                  </div>
                  <div
                    class="c-current calendar-day-2020-11-12 calendar-dow-3"
                    id=""
                  >
                    12
                  </div>
                  <div
                    class="c-current calendar-day-2020-11-13 calendar-dow-4"
                    id=""
                  >
                    13
                  </div>
                  <div
                    class="c-current calendar-day-2020-11-14 calendar-dow-5"
                    id=""
                  >
                    14
                  </div>
                  <div
                    class="c-current calendar-day-2020-11-15 calendar-dow-6"
                    id=""
                  >
                    15
                  </div>
                  <div
                    class="c-current calendar-day-2020-11-16 calendar-dow-0"
                    id=""
                  >
                    16
                  </div>
                  <div
                    class="c-current calendar-day-2020-11-17 calendar-dow-1"
                    id=""
                  >
                    17
                  </div>
                  <div
                    class="c-current calendar-day-2020-11-18 calendar-dow-2"
                    id=""
                  >
                    18
                  </div>
                  <div
                    class="c-current calendar-day-2020-11-19 calendar-dow-3"
                    id=""
                  >
                    19
                  </div>
                  <div
                    class="c-current calendar-day-2020-11-20 calendar-dow-4"
                    id=""
                  >
                    20
                  </div>
                  <div
                    class="c-current calendar-day-2020-11-21 calendar-dow-5"
                    id=""
                  >
                    21
                  </div>
                  <div
                    class="c-current calendar-day-2020-11-22 calendar-dow-6"
                    id=""
                  >
                    22
                  </div>
                  <div
                    class="c-current calendar-day-2020-11-23 calendar-dow-0"
                    id=""
                  >
                    23
                  </div>
                  <div
                    class="c-current calendar-day-2020-11-24 calendar-dow-1"
                    id=""
                  >
                    24
                  </div>
                  <div
                    class="c-current calendar-day-2020-11-25 calendar-dow-2"
                    id=""
                  >
                    25
                  </div>
                  <div
                    class="c-current calendar-day-2020-11-26 calendar-dow-3"
                    id=""
                  >
                    26
                  </div>
                  <div
                    class="c-current calendar-day-2020-11-27 calendar-dow-4"
                    id=""
                  >
                    27
                  </div>
                  <div
                    class="c-current calendar-day-2020-11-28 calendar-dow-5"
                    id=""
                  >
                    28
                  </div>
                  <div
                    class="c-current calendar-day-2020-11-29 calendar-dow-6"
                    id=""
                  >
                    29
                  </div>
                  <div
                    class="c-current calendar-day-2020-11-30 calendar-dow-0"
                    id=""
                  >
                    30
                  </div>
                  <div
                    class="c-current adjacent-month next-month calendar-day-2020-12-01 calendar-dow-1"
                    id=""
                  >
                    1
                  </div>
                  <div
                    class="c-current adjacent-month next-month calendar-day-2020-12-02 calendar-dow-2"
                    id=""
                  >
                    2
                  </div>
                  <div
                    class="c-current adjacent-month next-month calendar-day-2020-12-03 calendar-dow-3"
                    id=""
                  >
                    3
                  </div>
                  <div
                    class="c-current adjacent-month next-month calendar-day-2020-12-04 calendar-dow-4"
                    id=""
                  >
                    4
                  </div>
                  <div
                    class="c-current adjacent-month next-month calendar-day-2020-12-05 calendar-dow-5"
                    id=""
                  >
                    5
                  </div>
                  <div
                    class="c-current adjacent-month next-month calendar-day-2020-12-06 calendar-dow-6"
                    id=""
                  >
                    6
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
