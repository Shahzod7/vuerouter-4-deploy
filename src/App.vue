<template>

  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-item">
        <router-link class="nav-link" :to="{  name: 'home' }">Home</router-link>
        </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{  name: 'about' }">About</router-link>
        </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{  name: 'blog' }">Blog</router-link>
        </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{  name: 'contact' }">Contact</router-link>
        </li>
    </ul>
  </nav>

  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 12px;
  padding-left: 12px;
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}
@media (min-width: 1600px) {
  .container {
    max-width: 1536px;
  }
}
  .nav {
    &-list {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 15px;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    &-link {
      text-decoration: none;
      font-size: 15px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      color: #111;
      border-bottom: 2px solid transparent;
      &.router-link-active {
        color: red;
        border-bottom: 2px solid red;
      }
    }
  }  
</style>
