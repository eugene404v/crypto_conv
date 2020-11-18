import React from "react";
import RightChat from "./RightChat";
import RightMessages from "./RightMessages";
import Shedule from './Shedule'

function RightBar() {
  const [tabIndex, setTabIndex] = React.useState(0)
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
        <button class={`btn ${tabIndex===0&&'active'}`} data-target="#calendar" onClick={()=>setTabIndex(0)}>
          <i class="far fa-calendar-alt"></i>
        </button>
        <button class={`btn ${tabIndex===1&&'active'}`} data-target="#chat" onClick={()=>setTabIndex(1)}>
          <i class="far fa-comment-dots"></i>
        </button>
        <button class={`btn ${tabIndex===2&&'active'}`} data-target="#mail" onClick={()=>setTabIndex(2)}>
          <i class="far fa-envelope"></i>
        </button>
        <button class="btn ml-a menu-expand">
          <i class="far fa-bars"></i>
        </button>
      </div>

      <div class={`tab-content ${tabIndex===0&&'active'}`} id="calendar">
        <Shedule/>
      </div>

      <div class={`tab-content ${tabIndex===1&&'active'}`} id="chat">
        <RightChat/>
      </div>

      <div class={`tab-content ${tabIndex===2&&'active'}`} id="mail">
        <RightMessages/>
      </div>
    </div>
  );
}

export default RightBar;