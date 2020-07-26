<template>
  <div id="app" class="container">
    <div id="nav">
      <a href="/">
        <h1 class="display-4 text-primary">Chaistand</h1>
      </a>
    </div>
    <router-view />
  </div>
</template>

<style>
body,
html {
  height: 100vh;
}
#app {
  font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: url('./assets/tea-cozy-background.jpg') no-repeat center center
    fixed;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  height: 100%;
}
</style>
