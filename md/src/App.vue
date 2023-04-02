<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <header class="sticky-top box-shadow0">
      <nav class="navbar bg-c-navbar justify-content-between ">
      <div class="container-fluid">
        <div class="d-flex justify-content-center text-center  rounded-circle" >
          <RouterLink class="navbar-brand" to="/">
            <img src="../public/img/md_logo_nav.png" alt="logo mightness developers" style="width: 50px; height: 50px;" class="box-shadow1 b-r-10 shake">
          </RouterLink>
        </div>
        <ul class="d-flex row-6 menu" style="font-size: 25px;">
          <li class="col ms-2 menu_list">
            <span class="front"><font-awesome-icon icon="fa-solid fa-house"/></span>
            <RouterLink class="text-white side" to="/home" style="font-size: 13px;">Home</RouterLink>
          </li>
          <li class="col ms-2 menu_list">
            <span class="front"><font-awesome-icon icon="fa-solid fa-address-card"/></span>
            <RouterLink class="text-white side" to="/about" style="font-size: 13px;">About</RouterLink>
          </li>
          <li class="col ms-2 menu_list">
            <span class="front"><font-awesome-icon icon="fa-solid fa-swatchbook"/></span>
            <RouterLink class="text-white side" to="/skills" style="font-size: 13px;">Skills</RouterLink>
          </li>
          <li class="col ms-2 menu_list">
            <span class="front"><font-awesome-icon icon="fa-solid fa-list-check"/></span>
            <RouterLink class="text-white side" to="/projects" style="font-size: 13px;">Projects</RouterLink>
          </li>
          <li class="col ms-2 menu_list">
            <span class="front"><font-awesome-icon icon="fa-solid fa-window-restore"/></span>
            <RouterLink class="text-white side" to="/templates" style="font-size: 12px;">Templates</RouterLink>
          </li>
          <li class="col ms-2 menu_list">
            <span class="front"><font-awesome-icon icon="fa-solid fa-circle-dollar-to-slot"/></span>
            <RouterLink class="text-white side" to="/donate" style="font-size: 15px;">Donate</RouterLink>
          </li>
          <li class="col ms-2 menu_list">
            <span class="front"><font-awesome-icon icon="fa-solid fa-address-book"/></span>
            <RouterLink class="text-white side" to="/contacts" style="font-size: 13px;">Contacts</RouterLink>
          </li>

        </ul>
        
      </div>
    </nav>
  </header>

  <RouterView />

   <footer class="footer-sec fixed-bottom">
    <div class="main">
      <div class="logo row">
        <div class="footer-header">
          <img src="../public/img/md_logo_footer.png" class="footer_title" alt="Mightness developers footer logo">
        </div>
      </div>
      <div>
        <div class="footer-header">
          <h4>Tecnologie usate</h4>
        </div>
        <div class="row-col fs-2 ">
         <a class="linkt" href="#"><font-awesome-icon icon="fa-brands fa-vuejs" style="padding: 10px;"/></a> 
         <a class="linkt" href="#"><font-awesome-icon icon="fa-brands fa-angular" style="padding: 10px;"/></a> 
         <a class="linkt" href="#"><font-awesome-icon icon="fa-brands fa-node-js" style="padding: 10px;"/></a> 
         <a class="linkt" href="#"><font-awesome-icon icon="fa-brands fa-linux" style="padding: 10px;"/></a> 
         <a class="linkt" href="#"><font-awesome-icon icon="fa-brands fa-ubuntu" style="padding: 10px;"/></a> 
        </div>
        <div class="row-col fs-2">
         <a class="linkt" href="#"><font-awesome-icon icon="fa-brands fa-suse" style="padding: 7px;"/></a> 
         <a class="linkt" href="#"><font-awesome-icon icon="fa-brands fa-git" style="padding: 7px;"/></a> 
         <a class="linkt" href="#"><font-awesome-icon icon="fa-brands fa-github" style="padding: 7px;"/></a> 
         <a class="linkt" href="#"><font-awesome-icon icon="fa-solid fa-server" style="padding: 7px;"/></a> 
         <a class="linkt" href="#"><font-awesome-icon icon="fa-brands fa-bootstrap" style="padding: 7px;"/></a> 
        </div>
      </div>
      <div>
        <div class="footer-header">
          <h4>I nostri link</h4>
        </div> 
        <div class="link-des-1 l-ht-2">
          <ul>  
            <li><a href="https://lotus-portfolio.netlify.app/" class="footer-links"> <font-awesome-icon icon="fa-solid fa-seedling"/> Presentazione di Maya</a></li>
            <li><a href="https://itdevportfolio.netlify.app/" class="footer-links"> <font-awesome-icon icon="fa-solid fa-seedling"/> Presentazione di Ivan</a></li>
          </ul>
        </div>
      </div>
      <div class="d-flex flex-column row">
        <div class="footer-header">
          <h4>Le nostre certificazioni</h4>
        </div>
        <div class="link-des-1">
          <ul>
            <li class="link-des l-ht-2">
              <a href="https://boolean.careers/" class="footer-links">Fullstack Web Developer</a>
            </li>
            <li class="link-des l-ht-2">
              <a href="https://www.adecco.it/academy" class="footer-links">Fullstack FrontEnd Developer</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="d-flex flex-column row">
        <div class="footer-header">
          <h4>Contatti</h4>
        </div>
        <div>
          <ul  class="link-des">
            <li><a href="https://www.linkedin.com/in/maya-bono-bba190251/"> <font-awesome-icon icon="fa-brands fa-linkedin"/> Maya</a></li>
            <li><a href="https://www.linkedin.com/in/ivan-toselli-188b39238/"> <font-awesome-icon icon="fa-brands fa-linkedin"/> Ivan</a></li>
            <li>
              E-mail: <a href="mightness.developers@gmail.com">mightness.developers@gmail.com</a> 
            </li>
            <li class="link-des">
              <RouterLink  to="/privacy">Privacy Policy</RouterLink>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
    <div class="copyright">
    <hr>
    <p>© Copyright 2023 Mightness Developers.</p>
    </div>
  </footer>
</template>

<style scoped>

</style>
