<script setup></script>

<template>
  <section class="projects-section">
    <h2 class="projects-main-heading">
      <span class="symbol-span">⫷</span>
      My Projects
      <span class="symbol-span">⫸</span>
    </h2>
    <div class="projects-grid">
      <a class="photo-anchor" target="_blank" href="https://emaria.vercel.app/">
        <img
          data-aos="fade-right"
          data-aos-duration="1800"
          data-aos-easing="ease-out-back"
          class="projects-img"
          src="@/assets/images/1.jpg"
          alt=""
        />
      </a>
      <div
        data-aos="fade-right"
        data-aos-duration="1800"
        data-aos-easing="ease-out-back"
        data-aos-delay="300"
        class="projects-text-box projects-text-box-3"
      >
        <h3 class="projects-heading">Emaria</h3>
        <ul>
          <li>Fully functional responsive general e-commerce website.</li>
          <li>Fresh & simple ui/ux design.</li>
          <li>Building blocks: Nuxt3, Pinia, Supabase, Directus</li>
          <!-- <li>
            Create account, add products to your cart. (buyouts not implemented,
            i don't want to create money transaction system for a reference
            website)
          </li> -->
        </ul>
        <div class="visit-box">
          <a target="_blank" href="https://emaria.vercel.app/"
            ><button class="visit">Visit</button></a
          >
        </div>
      </div>

      <a
        class="photo-anchor"
        target="_blank"
        href="https://solemensis.github.io/Cloud-gaming-services/"
      >
        <img
          data-aos="fade-right"
          data-aos-duration="1800"
          data-aos-easing="ease-out-back"
          class="projects-img"
          src="@/assets/images/2.jpg"
      /></a>
      <div
        data-aos="fade-right"
        data-aos-duration="1800"
        data-aos-easing="ease-out-back"
        data-aos-delay="300"
        class="projects-text-box projects-text-box-2"
      >
        <h3 class="projects-heading">Cloud Gaming Services</h3>
        <ul>
          <li>Responsive landing page of a digital product.</li>
          <li>Building blocks: Html, Css, Javascript</li>
        </ul>
        <div class="visit-box">
          <a
            target="_blank"
            href="https://solemensis.github.io/Cloud-gaming-services/"
          >
            <button class="visit">Visit</button></a
          >
        </div>
      </div>
      <a
        class="photo-anchor"
        target="_blank"
        href="https://unique-bublanina-f4b6de.netlify.app/"
      >
        <img
          data-aos="fade-right"
          data-aos-duration="1800"
          data-aos-easing="ease-out-back"
          class="projects-img"
          src="@/assets/images/3.jpg"
          alt=""
      /></a>
      <div
        data-aos="fade-right"
        data-aos-duration="1800"
        data-aos-easing="ease-out-back"
        data-aos-delay="300"
        class="projects-text-box projects-text-box-1"
      >
        <h3 class="projects-heading">Drink e-commerce</h3>
        <ul>
          <li>Responsive drink e-commerce website.</li>
          <li>Fresh & simple ui/ux design.</li>
          <li>Building blocks: Vue3, Pinia, Firebase</li>
        </ul>
        <div class="visit-box">
          <a target="_blank" href="https://unique-bublanina-f4b6de.netlify.app/"
            ><button class="visit">Visit</button></a
          >
        </div>
      </div>
      <a
        class="photo-anchor"
        target="_blank"
        href="https://solemensis.github.io/Woodhelm/"
        ><img
          data-aos="fade-right"
          data-aos-duration="1800"
          data-aos-easing="ease-out-back"
          class="projects-img"
          src="@/assets/images/4.jpg"
      /></a>
      <div
        data-aos="fade-right"
        data-aos-duration="1800"
        data-aos-easing="ease-out-back"
        data-aos-delay="300"
        class="projects-text-box projects-text-box-4"
      >
        <h3 class="projects-heading">Woodhelm</h3>
        <ul>
          <li>Auditory/Visual ambiance mixer webapp.</li>
          <li>Building blocks: Html, Css, Javascript</li>
        </ul>
        <div class="visit-box">
          <a target="_blank" href="https://solemensis.github.io/Woodhelm/"
            ><button class="visit">Visit</button></a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-main-heading {
  font-size: 6rem;
  width: 100%;
  text-align: center;
  margin-bottom: 10rem;
  color: #ddd;
}
.symbol-span {
  /* color: rgb(160, 88, 255); */
  color: #ff77b0b7;
}
.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  width: 80vw;
  margin: 0 auto;
  grid-row-gap: 5rem;
  position: relative;
}
.photo-anchor {
  width: 90%;
  display: flex;
  justify-content: center;
}
.projects-img {
  width: 85%;
  border-radius: 1rem;
  transition: 0.3s;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  filter: brightness(0.8);
}

@media (hover: hover) {
  .projects-img:hover {
    transform: translateY(-0.4rem);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
    filter: brightness(1);
  }
}

.projects-text-box {
  width: 85%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
}

.projects-heading {
  margin-bottom: 1rem;
  font-size: 4rem;
  /* color: rgb(114, 135, 255); */
  color: #ffb62ecd;
}
ul li {
  color: #bbb;
  font-size: 2.5rem;
  line-height: 1.1;
  margin-bottom: 0.6rem;
}
ul li::marker {
  content: "➜  ";
  font-size: 2rem;
  color: #ff77afe0;
}
.visit-box {
  margin-top: 1.6rem;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 0;
  bottom: 1rem;
}

.visit {
  background-color: transparent;
  /* border: #db65ff 1px solid;
  color: #db65ff; */
  border: #ff77afe0 1px solid;
  color: #ff77afe0;
  padding: 0.3rem 1.5rem;

  font-size: 1.8rem;
  border-radius: 0.4rem;
  transition: 0.2s;
}

@media (hover: hover) {
  .visit:hover {
    transform: translateY(-0.2rem);
  }
}
.projects-section {
  margin-bottom: 13rem;
}

@media (orientation: portrait) {
  .projects-grid {
    width: 95vw !important;
  }
  .projects-heading {
    font-size: 2.8rem !important;
  }
  .visit-box {
    bottom: 0 !important;
  }
  .visit {
    padding: 0 1rem !important;
  }
}
</style>
