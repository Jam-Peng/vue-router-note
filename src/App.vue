<template>
  <nav class="navbar navbar-expand-lg bg-light mb-3 fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Features</a> -->
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Pricing</a> -->
            <router-link :to="{ name: '新增頁面' }" class="nav-link"
              >Product</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container" style="height: 300vh">
    <router-view />
  </div>

  <router-link :to="{ name: '新增頁面' }" class="nav-link mb-4"
    >Product</router-link
  >
</template>

<style lang="scss">
@import 'bootstrap';
body {
  padding-top: 7%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
