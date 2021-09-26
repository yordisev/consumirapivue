<template>
  <nav class="navbar navbar-dark bg-dark">
<div class="container">
<router-link class="navbar-brand" to="/">
   nombre
</router-link>
<div>
     <router-link
     to="/crud"
     class="btn btn-primary mx-1"
     >
  CRUD
     </router-link>
     <router-link
     to="/perfil"
     class="btn btn-primary mx-1"
     >
  PERFIL
     </router-link>
   <button class="btn btn-danger mx-1" 
     >Salir</button>
</div>
</div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>