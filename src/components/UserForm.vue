<template>
  <div>

    <div class="form-group" :class="{ 'has-error': errors.has('firstName') }">
      <label>Имя</label>
      <input type="text" class="form-control" v-model="userModel.firstName" v-validate="'required'" name="firstName"/>
      <span v-if="errors.has('firstName')" class="help-block text-danger">{{ errors.first('firstName') }}</span>
    </div>

    <div class="form-group" :class="{ 'has-error': errors.has('lastName') }">
      <label>Фамилия</label>
      <input type="text" class="form-control" v-model="userModel.lastName" v-validate="'required'" name="lastName"/>
      <span v-if="errors.has('lastName')" class="help-block text-danger">{{ errors.first('lastName') }}</span>
    </div>

    <div class="form-group" :class="{ 'has-error': errors.has('email') }">
      <label>Email</label>
      <input type="text" class="form-control" v-model="userModel.email" v-validate="'required|email'" name="email"/>
      <span v-if="errors.has('email')" class="help-block text-danger">{{ errors.first('email') }}</span>
    </div>

    <div class="form-group" :class="{ 'has-error': errors.has('image') }">
      <label>Url для картинки</label>
      <p>
        <img :src="userModel.picture" class="img-thumbnail"/>
      </p>
      <FileUploader v-model="userModel.picture" v-validate="'required'" name="image"></FileUploader>
      <span v-if="errors.has('image')" class="help-block text-danger">{{ errors.first('image') }}</span>
    </div>

    <div class="form-group" :class="{ 'has-error': errors.has('age') }">
      <label>Возраст</label>
      <input type="text" class="form-control"  v-model="userModel.age" v-validate="'required'" name="age"/>
      <span v-if="errors.has('age')" class="help-block text-danger">{{ errors.first('age') }}</span>
    </div>

    <div class="form-group">
      <label>Активный</label>
      <input type="checkbox" v-model="userModel.isActive"/>
    </div>

    <div class="form-group" :class="{ 'has-error': errors.has('accessLevel') }">
      <label>Уровень доступа</label>
      <input type="text" class="form-control" v-model="userModel.accessLevel" v-validate="'required'" name="accessLevel"/>
      <span v-if="errors.has('accessLevel')" class="help-block text-danger">{{ errors.first('accessLevel') }}</span>
    </div>

    <div class="form-group" :class="{ 'has-error': errors.has('balance') }">
      <label>Баланс</label>
      <input type="text" class="form-control" v-model="userModel.balance" v-validate="'required'" name="balance"/>
      <span v-if="errors.has('balance')" class="help-block text-danger">{{ errors.first('balance') }}</span>
    </div>

    <div class="form-group" :class="{ 'has-error': errors.has('phone') }">
      <label>Телефон</label>
      <input type="text" class="form-control" v-model="userModel.phone" v-validate="'required'" name="phone"/>
      <span v-if="errors.has('phone')" class="help-block text-danger">{{ errors.first('phone') }}</span>
    </div>

    <div class="form-group" :class="{ 'has-error': errors.has('address') }">
      <label>Адрес</label>
      <input type="text" class="form-control" v-model="userModel.address" v-validate="'required'" name="address"/>
      <span v-if="errors.has('address')" class="help-block text-danger">{{ errors.first('address') }}</span>
    </div>

    <div class="form-group" :class="{ 'has-error': errors.has('company') }">
      <label>Компания</label>
      <input type="text" class="form-control" v-model="userModel.company" v-validate="'required'" name="company"/>
      <span v-if="errors.has('company')" class="help-block text-danger">{{ errors.first('company') }}</span>
    </div>

    <div class="form-group" :class="{ 'has-error': errors.has('about') }">
      <label>Биография</label>
      <MediumEditor id="about" :value="userModel.about" @input="(value) => userModel.about = value"></MediumEditor>
    </div>

    <div class="form-group" :class="{ 'has-error': errors.has('registerDate') }">
      <label>Дата регистрации</label>
      <DatePicker class="form-control" v-model="userModel.registered" v-validate="`before:${dateToday},true|date_format:DD.MM.YYYY`" name="registerDate" data-vv-as="register date"></DatePicker>
      <span v-if="errors.has('registerDate')" class="help-block text-danger">{{ errors.first('registerDate') }}</span>
    </div>

  </div>
</template>

<script>
import DatePicker from '@/components/DatePicker'
import MediumEditor from '@/components/MediumEditor'
import FileUploader from '@/components/FileUploader'

export default {
  name: 'add-user',
  inject: ['$validator'],
  components: {DatePicker, MediumEditor, FileUploader},
  props: {
    userModel: {
      type: Object,
      required: true
    }
  },
  computed: {
    dateToday () {
      const date = new Date()
      const currDate = date.getDate()
      const currMonth = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
      const currYear = date.getFullYear()
      return currDate + '.' + currMonth + '.' + currYear
    }
  }
}
</script>

<style scoped>
  div {
    margin-top: 10px;
    text-align: left;
  }
  label {
    font-weight: bold;
  }
  input:not([type="checkbox"]), textarea {
    display: block;
    width: 100%;
    padding: 3px;
    border-radius: 5px;
    border: solid #ccc 1px;
    outline: none;
  }

</style>
