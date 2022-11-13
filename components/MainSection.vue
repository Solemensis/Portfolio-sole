<script setup>
let rotate1 = ref(false);
let rotate2 = ref(false);

function runRotate1() {
  rotate1.value = !rotate1.value;
}
function runRotate2() {
  rotate2.value = !rotate2.value;
}
</script>

<template>
  <section class="main-section">
    <img src="@/assets/images/shape-bg.webp" alt="" class="shape-bg" />
    <header data-aos="zoom-down" data-aos-duration="1600" class="main-flex">
      <div class="main-text">
        <h2>i'd like to keep it short and clean.</h2>
        <h1>I'm developing <span class="span-color-1">Websites</span></h1>
        <p>
          <span class="span-color-2">Hey.</span> I love to create user friendly,
          responsive, enjoyable, aesthetically pleasing, simple yet powerful,
          lightning fast & functional websites/webapps. You can locate to some
          of my projects to see if my possibilities can fit your needs.
        </p>
      </div>
      <div class="main-hero-image-box">
        <img
          :class="{
            'rotate-on1': rotate1,
          }"
          class="main-image-1"
          src="@/assets/images/sword-2.webp"
        />

        <img
          :class="{
            'rotate-on2': rotate2,
          }"
          class="main-image-2"
          src="@/assets/images/sword-1.webp"
        />
      </div>
      <div class="main-buttons">
        <a href="#my-projects"
          ><button
            @mouseenter="runRotate1()"
            @mouseleave="runRotate1()"
            class="main-button-1"
          >
            My Projects ↓
          </button></a
        >
        <a href="#contact">
          <button
            @mouseenter="runRotate2()"
            @mouseleave="runRotate2()"
            class="main-button-2"
          >
            <!-- This button does nothing but i wanted a second one to animate the second
        sword -->Contact
          </button></a
        >
      </div>
    </header>
    <p id="my-projects" class="ghost-p">ghost-p</p>
    <div
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-easing="ease-out-back"
      data-aos-delay="600"
      class="fixed-contact"
    >
      <span class="line"></span>
      <a href="mailto:solewaits@outlook.com"
        ><img
          class="contact-ico mail-ico"
          src="@/assets/images/mail.svg"
          alt=""
      /></a>
      <a target="_blank" href="#"
        ><img
          class="contact-ico fiverr-ico"
          src="@/assets/images/fiverr.svg"
          alt=""
      /></a>
      <a target="_blank" href="https://instagram.com/ulassacli"
        ><img
          class="contact-ico insta-ico"
          src="@/assets/images/insta.svg"
          alt=""
      /></a>
    </div>
  </section>
</template>

<style scoped>
/* ******** parts ********* */
.main-flex {
  width: 80vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-text {
  width: 40%;
  color: white;
  text-align: center;
}
.main-text h2 {
  font-size: 3rem;
  margin-bottom: -0.3rem;
  background: -webkit-linear-gradient(right, #991cca, #9d50bb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.main-text h1 {
  font-size: 5.6rem;
  margin-bottom: 2rem;
  color: #eee;
}
.span-color-1 {
  color: #63ff63e0;
}
.span-color-2 {
  color: #ff77afe0;
}

.main-text p {
  font-size: 2.3rem;
  color: #aaa;
}

/* ******** images ********* */

.main-hero-image-box {
  width: 40%;
  height: 100vh;
  position: relative;
}
.main-image-1,
.main-image-2 {
  position: absolute;
  left: 50%;
  top: 50%;
  opacity: 0.2;
  transition: 0.3s;
  filter: blur(4px);
}
.main-image-1 {
  width: 45rem;
  transform: translate(-50%, -48.4%) rotate(-53deg) rotate(-180deg);
}
.main-image-2 {
  width: 29.7rem;
  transform: translate(-50%, -50%) rotate(3deg) rotate(-175deg);
}

.rotate-on1 {
  transform: translate(-50%, -50%) scale(1.02) rotate(-225deg);
  opacity: 1;
  z-index: 5;
  filter: blur(0);
}
.rotate-on2 {
  transform: translate(-50%, -51%) scale(1.02) rotate(-180deg);
  opacity: 1;
  z-index: 5;
  filter: blur(0);
}

.shape-bg {
  position: fixed;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  mix-blend-mode: soft-light;
  opacity: 0.3;
  z-index: -100;
}

/* ******** buttons ********* */
.main-buttons {
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 10;
}

.main-button-1,
.main-button-2 {
  border: none;
  background-color: transparent;
  color: white;
  font-size: 1.5rem;
  align-self: center;
  border-radius: 0.5rem;
  font-weight: 500;
  width: 100%;
  transition: 0.2s;
}

.main-button-1 {
  padding: 1.5rem 4.5rem;
  background-color: transparent;
  border: 2px solid #63ff639b;
  color: #63ff639b;
  font-size: 2.5rem;
}
.main-button-2 {
  /* padding: 1.5rem 2rem; */
  /* text-align: center; */
  padding: 1.5rem 4.5rem;
  background-color: transparent;
  border: 2px solid #991ccad0;
  color: #991ccad0;
  font-size: 2.5rem;
}

@media (hover: hover) {
  .main-button-1:hover,
  .main-button-2:hover {
    transform: translateY(-0.3rem);
  }
  .main-button-1:hover {
    color: #63ff63ba;
    border: 2px solid #63ff63ba;
  }
  .main-button-2:hover {
    color: #991ccaea;
    border: 2px solid #991ccaea;
  }
}

/* .main-button-1:active,
.main-button-2:active {
} */

.main-section {
  margin-bottom: 3rem;
}

/* ******** fixed-contact ********* */
.fixed-contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: fixed;
  left: 2rem;
  top: 20%;
}
.line {
  width: 2px;
  height: 33vh;
  background-color: rgb(162, 162, 162);
  margin-bottom: 0.5rem;
}

.contact-ico {
  width: 3rem;
  cursor: pointer;
  transition: 0.2s;
}

@media (hover: hover) {
  .mail-ico:hover {
    filter: invert(99%) sepia(1%) saturate(1083%) hue-rotate(181deg)
      brightness(114%) contrast(100%);
    transform: translateY(-0.2rem);
  }
  .fiverr-ico:hover {
    filter: brightness(1);
    transform: translateY(-0.2rem);
  }
  .insta-ico:hover {
    filter: brightness(1.3);
    transform: translateY(-0.2rem);
  }
}

/* ******** scroll-elements ********* */
.ghost-p {
  margin-top: 5rem;
  visibility: hidden;
}
</style>
<style>
.mail-ico {
  filter: invert(100%) sepia(9%) saturate(487%) hue-rotate(318deg)
    brightness(118%) contrast(73%);
}
.fiverr-ico {
  filter: brightness(0.9);
}
.insta-ico {
  filter: brightness(1.1);
}
</style>
