<script setup></script>
<template>
  <section class="footer-section">
    <footer class="footer-box">
      <p class="info">Web designer & front-end developer based in Istanbul</p>
      <span class="copyright">© Copyright 2022. Solemensis</span>
    </footer>
  </section>
</template>

<style>
.footer-box {
  background-color: rgb(27, 27, 27);
  height: 10rem;

  position: relative;
}
.info {
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  font-size: 2.5rem;
  color: #ccc;
}
.copyright {
  position: absolute;
  right: 3rem;
  bottom: 1.5rem;
  font-size: 1.8rem;
  color: #888;
}
</style>
