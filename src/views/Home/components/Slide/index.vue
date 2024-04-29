<template>
  <div class="advantage-wrap">
    <swiper v-if="swiperVisible" ref="mySwiper" class="swiper" :options="swiperOption" @slideChange="onSlideChange">
      <swiper-slide v-for="(item,index) in gList" :key="'item'+index" class="swiper-slide">
        <Movie :title="item.title" :desc="item.desc" />
      </swiper-slide>
    </swiper>
    <div slot="button-prev" class="swiper-button-prev" />
    <div slot="button-next" class="swiper-button-next" />
    <!--
    <Movie />
    <Movie /> -->
    <!-- <Movie /> -->
  </div>
</template>

<script>

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Movie from './Movie.vue'
import { zhList, enList } from './data'
// import 'swiper/swiper-bundle.css';

export default {
  name: 'HomePage',
  components: {
    Movie,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperVisible: true,
      swiperOption: {
        autoplay: {
          delay: 5000
        },
        slidesPerView: 2,
        spaceBetween: 0,
        loop: true,
        speed: 400,
        // autoplayTimeLeft: 4000,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      gList: enList
    }
  },
  watch: {
    '$i18n.locale': function x() {
      this.updateSwiper()
    }
  },
  mounted() {
    this.updateSwiper()
  },

  methods: {
    updateSwiper() {
      if (this.$i18n.locale === 'zh') {
        this.gList = zhList
      }
      if (this.$i18n.locale === 'en') {
        this.gList = enList
      }
    },
    onSlideChange() {
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
.advantage-wrap {
  padding-left: 40px;
  padding-right: 40px;
  width: 70%;
  width: 1300px;
  /* background: green; */
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    position: relative;
    transform: scale(0.4);
      width:  20px;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
  }
}

@media (max-width: 1378px) {
      .advantage-wrap {
        display: none;
      }
}
</style>
