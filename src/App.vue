<template>
  <div id="app">
    <div id="nav">
      <Header />
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/details">Details</router-link> |
      <router-link to="/transfers">Transfers</router-link> -->
      
      
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/layout/Header';
export default {
  name: "app",
  components: {
    Header
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f9f9f9;
  height: 1250px;
  width: 1366px;
  margin: auto;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
