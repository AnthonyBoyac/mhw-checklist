<template>
  <ul>
    <li><router-link to="/home">Home</router-link></li>
    <li><router-link to="/armor">Armor</router-link></li>
    <li><router-link to="/weapons">Weapons</router-link></li>
    <li><router-link to="/charms">Charms</router-link></li>
    <li><router-link to="/decorations">Decorations</router-link></li>
    <li><router-link to="/specialized-tools">Tools</router-link></li>
    <li><router-link to="/palico-gear">Palico Gear</router-link></li>
    <li><router-link to="/gadgets-grimalkyne">Palico Gadgets + Grimalkyne</router-link></li>
    <li><router-link to="/pendants">Pendants</router-link></li>
    <li><router-link to="/crowns">Crowns</router-link></li>
    <li><router-link to="/research">Research</router-link></li>
    <li><router-link to="/quests">Quests</router-link></li>
    <li><router-link to="/deliveries">Deliveries</router-link></li>
  </ul>
</template>

<style scoped>
a {
  font-weight: bold;
  color: #ffffff;
  text-transform: uppercase;
  padding: 8px 0;
}
a.router-link-exact-active {
  color: #42b983;
}
li {
  padding: 10px 0;
}
a:hover {
  background: #4c4c4c;
  width: fit-content;
}
</style>