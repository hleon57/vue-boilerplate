<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->

    <div class="container">
      <h1>Vue Js Boilerplate</h1>
      <h3>Pre Installed</h3>
      <ul>
        <li>Vue Router</li>
        <li>Vuex, modules recommended</li>
        <li>Global SCSS setup 'src/assets/scss/_global.scss'</li>
        <li>Global Variables 'src/assets/scss/_variables.scss'</li>
        <li>Global Mixins 'src/assets/scss/_mixins.scss'</li>
        <li>
          Sass Media Query Simple Mixin '@include mq-max(device / mesure in px)'
        </li>
        <li>
          Pre defined breakpoints based on Bulma CSS Framework, adjust to your
          needs
        </li>
        <li>
          If any other global scss file needed create on 'src/assets/scss' and
          add to imports.scss (src/assets/scss/imports.scss)
        </li>
        <li>
          Any file imported on imports.scss will be global (added in
          vue.config.js to be global)
        </li>
        <li>
          Axios recommended but not pre installed.
          [https://github.com/axios/axios]
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
}
</style>
