<template>
  <div id="app">

    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link to="/" class="navbar-brand">
            hello
          </router-link>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <router-link tag="li" to="/dashboard" active-class="active" exact>
              <a>Dashboard</a>
            </router-link>
            <router-link tag="li" to="/users-list" active-class="active" exact>
              <a>User list</a>
            </router-link>
            <router-link tag="li" to="/user/add" active-class="active" exact>
              <a>Add user</a>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
p {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
