<template>
  <div class="card-item">
    <div class="top">
      <!-- <div class="left"> -->
      <!-- <img src="https://alchemypay.org/img/logo2-r.444f8365.png" alt=""> -->
      <!-- </div> -->
      <div class="right">
        <div class="info">
          <div class="name">{{ title }}</div>
          <!-- <div class="position">CEO NEAR</div> -->
        </div>
      </div>
    </div>
    <div class="bottom">{{ desc }}</div>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  props: {
    title: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    }
  }
}
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.card-item {
  margin: 0 0;

  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 578px;
  background: rgba(255,255, 255,0.9);
  padding: 32px;
  box-sizing: border-box;
  padding-top: 0px;
  box-sizing: border-box;
  position: relative;
  z-index: 4;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  overflow: hidden;
  border-radius: 24px;
  @media (max-width: 767px) {
      width:  80%;
      padding: 12px;
  }
  .top {
    .left {
      position: absolute;
      top: 5px;
      left: 32.5px;
      width: 75px;
      height: 75px;

      img {
        width: 100%;
        height: 76px;
      }
    }

    .right {
      margin-top: 53px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .info {
        .name {
          font-family: Bold;
          font-style: normal;
          font-weight: 700;
          font-size: 22px;
          line-height: 120%;
          color: #13151a;
          margin-bottom: 4px;
        }

        .position {
          font-family: Regular;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          color: #525868;
        }
      }

      img {
        height: 40px;
      }
    }
  }

  .bottom {
    font-family: Regular;
    font-style: normal;
    // font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    color: #13151a;
    margin-top: 12px;
    min-height: 100px;
  }
}
</style>
