<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poor+Story&display=swap');
/* @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand+SC&display=swap'); */

/* @font-face {
  font-family: 'MagicSchool';
  src: url('~/assets/fonts/MagicSchoolOne.ttf');
}
@font-face {
  font-family: 'MagicSchool2';
  src: url('~/assets/fonts/MagicSchoolTwo.ttf');
}
@font-face {
  font-family: 'EpicChristmass';
  src: url('~/assets/fonts/EpicChristmass.ttf');
}
@font-face {
  font-family: 'Variety';
  src: url('~/assets/fonts/Variety.ttf');
}
@font-face {
  font-family: 'WonderNight';
  src: url('~/assets/fonts/WonderNight.ttf');
}
@font-face {
  font-family: 'Terano1';
  src: url('~/assets/fonts/Terano1.ttf');
}
@font-face {
  font-family: 'Terano2';
  src: url('~/assets/fonts/Terano2.ttf');
} */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poor Story';
  user-select: none;
  outline: none;
}
html {
  font-size: 62.5%;
  overflow-x: hidden !important;
  scroll-behavior: smooth;
}
a {
  text-decoration: none;
  cursor: default;
}
body {
  background-color: rgb(40, 44, 51);
}
@keyframes button-pop {
  0% {
    transform: scale(0.94);
  }
  40% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
}

::-webkit-scrollbar {
  width: 1rem;
  /* border-radius: 0.5rem; */
  background-color: hsl(0, 0%, 77%);
  /* position: absolute; */
}
::-webkit-scrollbar-thumb {
  /* border-radius: 0.5rem; */
  background-color: hsl(0, 0%, 46%);
}
::-webkit-scrollbar-thumb:active {
  background-color: hsl(0, 0%, 33%);
}
</style>
