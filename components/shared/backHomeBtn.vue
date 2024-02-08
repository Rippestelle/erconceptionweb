<template>
  <div class="bg">
    <router-link to="/" class="back-home-btn"><span>Accueil</span></router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
$baseColour: #fff;
$gradient1: rgb(88, 44, 145);
$gradient2: rgb(46, 128, 200);
$gradient3: #22d49e;

.bg {
  display: flex;
  justify-content: center;
}

.back-home-btn {
  display: block;
  width: 150px;
  background: linear-gradient(
    90deg,
    $baseColour 3%,
    $baseColour 47%,
    $gradient1 53%,
    $gradient2 72%,
    $gradient3 97%
  );
  text-align: center;
  padding: 13px 20px;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0.001);
  transition: 256ms all;
  position: relative;
  cursor: pointer;
  background-size: 200% 100%;
  background-position: left center;
}

.back-home-btn:before {
  content: "";
  position: absolute;
  top: -1px;
  bottom: -1px;
  left: -1px;
  right: -1px;
  background: linear-gradient(
    90deg,
    $baseColour 3%,
    $baseColour 47%,
    $gradient1 53%,
    $gradient2 72%,
    $gradient3 97%
  );
  transition: 256ms all;
  z-index: -1;
  background-size: 200% 100%;
  background-position: left center;
}

.back-home-btn:after {
  background: rgb(24, 24, 24);
  content: "";
  position: absolute;
  top: 1px;
  bottom: 0px;
  left: 1px;
  right: 1px;
  z-index: -1;
}

.back-home-btn:hover,
.back-home-btn:hover:before {
  background-position: right center;
}
</style>
