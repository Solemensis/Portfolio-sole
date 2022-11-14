<script setup></script>

<template>
  <section class="contact-section">
    <p id="contact" class="ghost-p">ghost-p</p>
    <h2 class="contact-main-heading">
      Contact <span class="heading-emoji">↯</span>
    </h2>
    <div class="contact-flex">
      <div
        data-aos="fade-left"
        data-aos-duration="2200"
        data-aos-easing="ease-out-back"
        data-aos-delay="250"
        class="contact-text"
      >
        <div class="contact-text-flex">
          <img
            class="contact-ico mail-ico"
            src="@/assets/images/mail.svg"
            alt=""
          />
          <a target="_blank" href="mailto:solewaits@outlook.com"
            >solewaits@outlook.com</a
          >
        </div>
        <div class="contact-text-flex">
          <img
            class="contact-ico fiverr-ico"
            src="@/assets/images/fiverr.svg"
            alt=""
          />
          <a target="_blank" href="https://www.fiverr.com/solemensis"
            >/solemensis</a
          >
        </div>
        <div class="contact-text-flex">
          <img
            class="contact-ico insta-ico"
            src="@/assets/images/insta.svg"
            alt=""
          />
          <a target="_blank" href="https://instagram.com/ulassacli"
            >/ulassacli</a
          >
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="2200"
        data-aos-easing="ease-out-back"
      >
        <img
          class="contact-image"
          src="@/assets/images/moonlight.webp"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-main-heading {
  font-size: 6rem;
  width: 100%;
  text-align: center;
  margin-bottom: 8rem;
  color: #ddd;
}
.heading-emoji {
  background: -webkit-linear-gradient(top, yellow, orange);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.contact-flex {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80vw;
  margin: 0 auto;
}
.contact-text {
  color: #ddd;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;
}
a {
  color: #ffb62e;
  transition: 0.3s;
  font-size: 3rem;
}
a:hover {
  cursor: pointer;
  color: #c98200;
}
.contact-text p {
  font-size: 2.5rem;
}
.contact-ico {
  width: 5rem;
}
.contact-text-flex {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
.contact-image {
  width: 40rem;
  opacity: 0.5;
  animation: flicker 6s alternate infinite ease-in-out;
}
@keyframes flicker {
  0% {
    filter: brightness(0.4);
  }

  100% {
    filter: brightness(0.9);
  }
}

.contact-section {
  margin-bottom: 18rem;
}
.ghost-p {
  visibility: hidden;
  margin-bottom: 5rem;
}

@media (orientation: portrait) {
  .contact-flex {
    justify-content: space-evenly !important;
    width: 85vw !important;
  }
  .contact-image {
    width: 26rem !important;
  }
}
</style>
