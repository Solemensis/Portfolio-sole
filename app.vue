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

@media (min-width: 2500px) {
  html {
    font-size: 110%;
  }
}

@media (max-width: 2499px) {
  html {
    font-size: 100%;
  }
}

@media (max-width: 2300px) {
  html {
    font-size: 95%;
  }
}

@media (max-width: 2100px) {
  html {
    font-size: 85%;
  }
}

@media (max-width: 1920px) {
  html {
    font-size: 77%;
  }
}

@media (max-width: 1820px) {
  html {
    font-size: 70%;
  }
}

@media (max-width: 1720px) {
  html {
    font-size: 66%;
  }
}

@media (max-width: 1580px) {
  html {
    font-size: 60%;
  }
}

@media (max-width: 1280px) {
  html {
    font-size: 50%;
  }
}

@media (max-width: 1024px) {
  html {
    font-size: 40%;
  }
}
@media (max-width: 800px) {
  html {
    font-size: 32%;
  }
}
@media (orientation: portrait) {
  html {
    font-size: 30%;
  }
}
</style>
