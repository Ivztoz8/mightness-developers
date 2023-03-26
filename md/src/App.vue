<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header class="sticky-top box-shadow0">
      <nav class="navbar bg-c-navbar justify-content-between ">
      <div class="container-fluid">
        <div class="d-flex justify-content-center text-center  rounded-circle" >
          <RouterLink class="navbar-brand" to="/">
            <img src="../public/img/md_logo_nav.png" alt="logo mightness developers" style="width: 50px; height: 50px;">
          </RouterLink>
        </div>
        <div class="d-flex row-6">
          <div class="col ms-2">
            <RouterLink class="text-white" to="/about">About</RouterLink>
          </div>
          <div class="col ms-2">
            <RouterLink class="text-white" to="/skills">Skills</RouterLink>
          </div>
          <div class="col ms-2">
            <RouterLink class="text-white" to="/projects">Projects</RouterLink>
          </div>
          <div class="col ms-2">
            <RouterLink class="text-white" to="/templates">Templates</RouterLink>
          </div>
          <div class="col ms-2">
            <RouterLink class="text-white" to="/donate">Donate</RouterLink>
          </div>
          <div class="col ms-2">
            <RouterLink class="text-white" to="/contacts">Contacts</RouterLink>
          </div>

        </div>
        
      </div>
    </nav>
  </header>

  <RouterView />

  <footer>
    <div class="navbar bg-tertiary-color justify-content-between ">
      <div class="container-fluid">
        <div class="rounded-circle g-primary-color">
          <RouterLink class="navbar-brand" to="/">
            <img src="../../public/img/md_logo_footer.png" alt="Mightness developers logo" class="rainbow" style="width: 100px; height: auto;">
          </RouterLink>
        </div>
        <div class="row-6">
          <div>
            <ul>
              <li><a class="grey-text text-lighten-3" href="https://lotus-portfolio.netlify.app/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="width: 50px; height: 50px;"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg><br> Presentazione di Maya</a></li>
              <li><a class="grey-text text-lighten-3" href="https://itdevportfolio.netlify.app/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="width: 50px; height: 50px;"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg><br> Presentazione di Ivan</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>
