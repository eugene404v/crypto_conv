import PageTitle from "components/PageTitle";
import React from "react";

function ProfilePage() {
  const pageTitle = "Мой профиль"

  return (
    <div className="main-wrapper not-main">
      <div className="hr"></div>
      <PageTitle title={pageTitle}/>

      <form
        action="/users/profile/"
        method="POST"
        id="form"
        enctype="multipart/form-data"
      >
        <div className="form-group row">
          <label htmlFor="input_name" className="col-xl-2 col-form-label">
            Логин
          </label>
          <div className="col-xl-6">
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value="maxadmin"
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="input_email" className="col-xl-2 col-form-label">
            Email
          </label>
          <div className="col-xl-6">
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              value="max@test.tt"
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="input_password" className="col-xl-2 col-form-label">
            Пароль
          </label>
          <div className="col-xl-6">
            <input
              type="text"
              className="form-control"
              name="password"
              id="input_password"
              value=""
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="input_avatar" className="col-xl-2 col-form-label">
            Аватарка
          </label>
          <div className="col-xl-6 align-self-center">
            <input type="file" name="avatar" id="input_avatar" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="input_fio" className="col-xl-2 col-form-label">
            ФИО
          </label>
          <div className="col-xl-6 align-self-center">
            <input
              type="text"
              className="form-control"
              name="fio"
              id="input_fio"
              value=""
            />
          </div>
        </div>
        <div class="form-group row">
          <label htmlFor="input_phone" className="col-xl-2 col-form-label">
            Телефон
          </label>
          <div className="col-xl-6 align-self-center">
            <input
              type="text"
              className="form-control"
              name="phone"
              id="input_phone"
              value=""
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="input_department" className="col-xl-2 col-form-label">
            Отдел
          </label>
          <div className="col-xl-6 align-self-center">
            <select
              name="department"
              className="form-control"
              id="input_department"
            >
              <option value="0">Не выбрано</option>
              <option value="2">Отдел 2</option>
              <option value="1">Отдел 1</option>
            </select>
          </div>
        </div>

        <div className="form_buttons">
          <div className="row">
            <div className="col-auto">
              <button className="btn btn-success">Сохранить</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProfilePage;
