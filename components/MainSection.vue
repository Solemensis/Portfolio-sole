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
        <img
          :class="{
            'rotate-on3': rotate1,
          }"
          class="main-image-3"
          src="@/assets/images/sword-2.webp"
        />

        <img
          :class="{
            'rotate-on4': rotate2,
          }"
          class="main-image-4"
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
      <!-- <img src="@/assets/images/mobile-hero.png" alt="" class="mobile-hero" /> -->
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
      <a
        target="_blank"
        href="https://www.fiverr.com/solemensis/create-lightning-fast-functional-aesthetically-pleasing-websites-and-webapps"
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
    <div data-aos="zoom-down" data-aos-duration="1600" class="fixed-blobs">
      <div class="blob blob-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440.7 428.7">
          <path
            fill="#692dbd"
            d="M410.6 78.8c36 52.5 36.1 126 19.2 194C412.9 340.7 379 403 330 421.9c-49 19-113.1-5.3-178.6-34C85.8 359.2 18.7 326.1 3.5 276.4-11.7 226.7 25 160.3 71.7 105.3 118.3 50.3 174.8 6.8 239 .7c64.1-6 135.7 25.5 171.6 78.1z"
          ></path>
        </svg>
      </div>

      <div class="blob blob-2" style="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 317.5 353.7">
          <path
            fill="#00786d"
            d="M291.8 55.3c30.4 39.9 30.7 102 17 160.4-13.8 58.3-41.6 112.9-84 130.9s-99.3-.6-137-30C50.2 287.1 32 246.9 17 200.5 2.1 154.1-9.6 101.4 11.5 63.6 32.6 25.8 86.6 2.8 143.8.2c57.2-2.6 117.6 15.2 148 55.1z"
          ></path>
        </svg>
      </div>
      <div class="blob blob-3" style="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 428.4 394.6">
          <path
            fill="#FFBA49"
            d="M369.4 109.2c43.2 55.3 71.5 121.4 53.4 167.3-18.2 45.8-82.8 71.4-140.5 91.7-57.8 20.4-108.7 35.4-152.9 20.3C85.1 373.4 47.6 328.3 23.2 267c-24.5-61.2-35.8-138.6-2.5-191.7C54.1 22.2 132-6.6 200 1.3c68 7.9 126.1 52.5 169.4 107.9z"
          ></path>
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ******** fixed-blobs ********* */
.fixed-blobs {
  position: fixed;
  /* left: 50%;
  top: 54%; */
  left: 47%;
  top: 44%;
  transform: translate(-50%, -50%) rotate(10deg) !important;
  width: 85vw;
  height: 65vh;
  z-index: -9999;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
}
.blob {
  /* width: 25rem;
  filter: blur(90px);
  opacity: 0.23; */
  width: 19rem;
  filter: blur(20px);
  opacity: 0.15;
  animation: blob-move 8s infinite alternate ease-out;
}

.blob-1 {
  animation-delay: 3000ms;
  opacity: 0.09;
}
.blob-2 {
  grid-column-start: 2;
  grid-row-start: 3;
}
.blob-3 {
  grid-column-start: 3;
  animation-delay: 1500ms;
}

@keyframes blob-move {
  0% {
    transform: scale(1) translate(0);
  }
  50% {
    transform: scale(1.2) translate(30%, 30%);
  }
  100% {
    transform: scale(1.4) translate(0%, 45%);
  }
}
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
  color: #ff77afe0;
  font-weight: 300;
}

.main-text h1 {
  font-size: 5.6rem;
  margin-bottom: 2rem;
  color: #eee;
  line-height: 1.1;
}
.span-color-1 {
  color: #63ff63e0;
}
.span-color-2 {
  color: #ff77afe0;
}

.main-text p {
  font-size: 2.3rem;
  color: #bbb;
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
  filter: blur(3px);
}
.main-image-3,
.main-image-4 {
  position: absolute;
  left: 50%;
  top: 50%;
  opacity: 0;
  transition: 0.3s;
  /* filter: blur(4px); */
}
.main-image-1,
.main-image-3 {
  width: 45rem;
  transform: translate(-50%, -48.4%) rotate(-53deg) rotate(-180deg);
}
.main-image-2,
.main-image-4 {
  width: 29.7rem;
  transform: translate(-50%, -50%) rotate(3deg) rotate(-175deg);
}

.rotate-on1 {
  transform: translate(-50%, -50%) scale(1.02) rotate(-225deg);
  opacity: 0;
  z-index: 5;
}
.rotate-on2 {
  transform: translate(-50%, -51%) scale(1.02) rotate(-180deg);
  opacity: 0;
  z-index: 5;
}
.rotate-on3 {
  transform: translate(-50%, -50%) scale(1.02) rotate(-225deg);
  opacity: 1;
  z-index: 5;
}
.rotate-on4 {
  transform: translate(-50%, -51%) scale(1.02) rotate(-180deg);
  opacity: 1;
  z-index: 5;
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
  padding: 1.5rem 1.5rem;
  background-color: transparent;
  border: 2px solid #63ff639b;
  color: #63ff639b;
  font-size: 2.5rem;
}
.main-button-2 {
  /* padding: 1.5rem 2rem; */
  /* text-align: center; */
  padding: 1.5rem 1.5rem;
  background-color: transparent;
  border: 2px solid #ff77afe0;
  color: #ff77afe0;

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
    border: 2px solid #ff77afe0;
    color: #ff77afe0;

    /* color: #991ccaea;
    border: 2px solid #991ccaea; */
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
  top: 25%;
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

/* ******** scroll-elements ********* */
.mobile-hero {
  display: none;
}
@media (orientation: portrait) {
  .fixed-blobs {
    left: 37% !important;
    top: 38% !important;
  }

  .blob {
    opacity: 0.2 !important;
    width: 20rem !important;
  }
  .blob-3 {
    opacity: 0.16 !important;
  }

  .shape-bg {
    height: 150vh !important;
  }
  .main-flex {
    flex-direction: column;
  }
  .main-text {
    width: 100% !important;
  }
  .main-text h2 {
    font-size: 3.8rem !important;
  }
  .main-text h1 {
    font-size: clamp(2rem, 9vw, 8.5rem) !important;
    /* font-size: 7rem !important; */
  }
  .main-text p {
    font-size: 2.8rem !important;
    /* margin: 0 3rem; */
    margin: 0 clamp(0.5rem, 2vw, 15rem) !important;
    margin-bottom: 5rem !important;
  }
  .main-buttons {
    width: initial !important;
    flex-direction: row !important;
  }
  .main-buttons button {
    width: 20rem !important;
    height: 7rem !important;
    font-size: 2.7rem !important;
  }
  .main-button-1 {
    border: 1px solid #63ff639b !important;
  }
  .main-button-2 {
    border: 1px solid #ff77afe0 !important;
  }
  .main-hero-image-box {
    /* display: none !important; */
    position: absolute !important;
  }

  .rotate-on1 {
    transform: translate(-50%, -48.4%) rotate(-53deg) rotate(-180deg) !important;
    opacity: 0.2 !important;
    z-index: -50 !important;
    filter: blur(4px) !important;
  }
  .rotate-on2 {
    transform: translate(-50%, -50%) rotate(3deg) rotate(-175deg) !important;
    opacity: 0.2 !important;
    z-index: -50 !important;
    filter: blur(4px) !important;
  }
  .main-image-1 {
    opacity: 0.2 !important;
    width: 60rem !important;
  }
  .main-image-2 {
    opacity: 0.2 !important;
    width: 40.3rem !important;
  }
  .main-image-3,
  .main-image-4 {
    display: none !important;
  }

  .mobile-hero {
    display: block !important;
    width: 45rem;
    margin-top: 20rem;
  }
  .fixed-contact {
    display: none !important;
  }
}
</style>
