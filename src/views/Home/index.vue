<template>
  <div class="page">


    <div class="bridging-news">
      <!-- <LogoWall></LogoWall> -->
      <div class="bridging">
        <Header />
      </div>

      <div class="home-bg isLoaded">
        <HomeBg />
        <TopContent />
        <Slide />
      </div>
    </div>

    <WorldMap />
    <TMP1 />
    <TMP2 />
    <TMP3 />
    <Crypto />

    <RegisterStep v-if="false" />
    <LearnMore />
    <div
      :style="{
        marginTop: '100px',
      }"
    >
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'
import HomeBg from '@/components/HomeBg/index.vue'
import TopContent from './TopContent.vue'
import LearnMore from './components/LearnMore/index.vue'
import WorldMap from './components/worldMap/index.vue'
import RegisterStep from './components/RegisterStep/index.vue'
import Crypto from './components/Crypto.vue'
import Slide from './components/Slide/index.vue'
// import LogoWall from './components/LogoWall/index.vue';
import TMP1 from './components/TMP1/index.vue'
import TMP2 from './components/TMP2/index.vue'
import TMP3 from './components/TMP3/index.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    WorldMap,
    HomeBg,
    TopContent,
    LearnMore,
    RegisterStep,
    Crypto,
    Slide,
    TMP1,
    TMP2,
    TMP3
  },
  data() {
    return {
      drawerVisible: false,
      worldChartData: {
        namemap: {}, // 自定义地区的名称映射,从官方world.json中获取
        dataArr: [] // 地图系列中的数据内容数组,从后台返回数据
      }
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  // background: black;
}

// .wrapper {
// background: #ffffff;
// }

.bridging-news {
  position: relative;

  // overflow: hidden;
  .home-bg {
    width: 100vw;
    height: 100%;

    // &:after {
    //   content: "";
    //   display: block;
    //   position: relative;
    //   top: 130px;
    //   width: 100vw;
    //   height: 10px;
    //   background: #f7f9fc;
    // }
  }
}
</style>
