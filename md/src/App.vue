<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <header class="sticky-top box-shadow0">
      <nav class="navbar bg-c-navbar justify-content-between ">
      <div class="container-fluid">
        <div class="d-flex justify-content-center text-center  rounded-circle" >
          <RouterLink class="navbar-brand" to="/">
            <img src="../public/img/md_logo_nav.png" alt="logo mightness developers" style="width: 50px; height: 50px;" class="box-shadow1 b-r-10">
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
      <div class="office row">
        <div class="footer-header">
          <h3>Office</h3>
        </div>
        <div class="office-des">
          
        </div>
      </div>
      <div class="link row">
        <div class="footer-header">
          <h3>Links</h3>
        </div> 
        <div class="link-des">
          <a href="#" class="footer-links">Maya Site</a>
          <a href="#" class="footer-links">Ivan Site</a>
        </div>
      </div>
      <div class="newsletter row">
        <div class="footer-header">
          <h3>Newsletter</h3>
        </div>
        <div class="newsletter-des">
          <div class="subcribe"><i class="sub-icon ri-mail-check-fill"></i>
            <input type="mail" placeholder = "Enter Email ID" required>
            <i class="sub-icon ri-arrow-right-line"></i>
          </div>
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
