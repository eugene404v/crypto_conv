import PageTitle from "components/PageTitle";
import React from "react";

function ProfilePage() {
  return (
    <div class="main-wrapper not-main">
      <div class="hr"></div>
      <PageTitle title="dddd"/>

      <form
        action="/users/profile/"
        method="POST"
        id="form"
        enctype="multipart/form-data"
      >
        <div class="form-group row">
          <label for="input_name" class="col-xl-2 col-form-label">
            Логин
          </label>
          <div class="col-xl-6">
            <input
              type="text"
              class="form-control"
              name="name"
              id="name"
              value="maxadmin"
            />
          </div>
        </div>

        <div class="form-group row">
          <label for="input_email" class="col-xl-2 col-form-label">
            Email
          </label>
          <div class="col-xl-6">
            <input
              type="text"
              class="form-control"
              name="email"
              id="email"
              value="max@test.tt"
            />
          </div>
        </div>

        <div class="form-group row">
          <label for="input_password" class="col-xl-2 col-form-label">
            Пароль
          </label>
          <div class="col-xl-6">
            <input
              type="text"
              class="form-control"
              name="password"
              id="input_password"
              value=""
            />
          </div>
        </div>

        <div class="form-group row">
          <label for="input_avatar" class="col-xl-2 col-form-label">
            Аватарка
          </label>
          <div class="col-xl-6 align-self-center">
            <input type="file" name="avatar" id="input_avatar" />
          </div>
        </div>
        <div class="form-group row">
          <label for="input_fio" class="col-xl-2 col-form-label">
            ФИО
          </label>
          <div class="col-xl-6 align-self-center">
            <input
              type="text"
              class="form-control"
              name="fio"
              id="input_fio"
              value=""
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="input_phone" class="col-xl-2 col-form-label">
            Телефон
          </label>
          <div class="col-xl-6 align-self-center">
            <input
              type="text"
              class="form-control"
              name="phone"
              id="input_phone"
              value=""
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="input_department" class="col-xl-2 col-form-label">
            Отдел
          </label>
          <div class="col-xl-6 align-self-center">
            <select
              name="department"
              class="form-control"
              id="input_department"
            >
              <option value="0">Не выбрано</option>
              <option value="2">Отдел 2</option>
              <option value="1">Отдел 1</option>
            </select>
          </div>
        </div>

        <div class="form_buttons">
          <div class="row">
            <div class="col-auto">
              <button class="btn btn-success">Сохранить</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProfilePage;
