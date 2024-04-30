<template>
  <div class="app-dark-bg">
    <div id="rightTwoCharts">
      <div class="top-banner">
        <div class="title">{{ $t("map.title") }}</div>
        <!-- <div class="info">{{ $t("map.desc") }}</div> -->
      </div>
      <div id="demoMap" ref="demoMap" />
      <numberAnimate />
    </div>
  </div>
</template>
<script>
import * as echarts from 'echarts'
import bank1 from '@/assets/images/bank1.png'
import bank2 from '@/assets/images/bank2.png'
import worldJson from './worldMap.json'
import { selectedWorldData } from './worldData'
import numberAnimate from '../numberAnimate/index.vue'

export default {
  name: 'Demo',
  components: {
    numberAnimate
  },
  data() {
    return {
      insertHeight: ''
    }
  },
  mounted() {
    // this.$refs.demoMap.style.height = `${window.innerHeight - 200}px`;
    this.map()
  },
  beforeDestroy() {
    window.removeEventListener('resize', () => {
      this.resize()
    })
  },

  methods: {
    resize() {
      this.myChart.resize()
    },
    //  全球地图生成方法
    map() {
      const chartDom = document.getElementById('demoMap')
      const myChart = echarts.init(chartDom, null, {
        renderer: 'svg'
      })

      this.myChart = myChart
      window.addEventListener('resize', () => {
        this.resize()
      })
      let option = {}
      echarts.registerMap('WORLD', worldJson, {})
      option = {
        tooltip: {},
        dataRange: {
          show: false, //  调色板显示与否
          min: 0,
          max: 1,
          text: ['Low', 'High'],
          realtime: false,
          calculable: false,
          // color: ['#72a0e3', '#ebeef4'], //  生成地图颜色以及发散点颜色
          color: ['#72a0e3', '#ebeef4'] //  生成地图颜色以及发散点颜色
        },
        geo: {
          show: false,
          type: 'map',
          aspectScale: 1, // 横向拉伸
          // roam: true, // 地图操作 开启缩放或者平移，可以设置成 'scale' 或者 'move'。
          map: 'WORLD',
          mapType: 'world'
        },
        series: [
          {
            type: 'map',
            mapType: 'WORLD',
            zoom: 1.25,
            nameProperty: 'name',
            tooltip: {
              trigger: 'item',
              formatter(params) {
                if (!params.data || !params.data.selected) {
                  return ''
                }
                const imgLogo = params?.data?.logo
                  ? ` <img   class="flag" src='${params?.data?.logo}'>`
                  : ''
                return [
                  `<div style="" class="bank-box" >  

                    <div class="name">
                     ${imgLogo}
                      
                      <div  class="text">${params.name}</div>  
                    </div>
                    <div class="pay"> 

                                     
                  </div>
                    </div>`
                ].join('<br>')
              },
              borderWidth: 0.5,
              borderColor: '#ffffff',
              backgroundColor: '#ffffff',
              extraCssText: 'box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.14)',
              borderRadius: 16,
              textStyle: {
                color: '#13151A',
                fontSize: 12
              }
            },
            selectedMode: false,
            label: {
              show: false,
              normal: {
                show: false, // 默认地图文字字号和字体颜色
                fontSize: 10,
                color: '#ffffff'
              },
              emphasis: {
                show: false,
                fontSize: 10, // 选中地图文字字号和字体颜色
                color: '#CFCFCF'
              }
            },
            itemStyle: {
              normal: {
                areaColor: '#ebeef4', // 地图本身的颜色
                borderColor: '#fff', // 省份边框颜色
                borderWidth: 1, // 省份边框宽度
                opacity: 1 // 图形透明度
              },
              emphasis: {
                areaColor: '#0b48e6', // 高亮时候地图显示的颜色
                borderWidth: 1 // 高亮时的边框宽度
              },
              select: {
                areaColor: '#72a0e3', // 高亮时候地图显示的颜色
                borderWidth: 1 // 2
              }
            },
            // mapLocation: {
            //   y: 100
            // },
            // itemStyle: {
            //   emphasis: {label: {show: true}}
            // },
            // 对应生成地图颜色板块数据
            textFixed: {
              Alaska: [20, -20]
            },
            select: {
              itemStyle: {
                areaColor: '#72a0e3'
              },
              label: false
            },
            data: selectedWorldData
          }
        ]
      }
      myChart.setOption(option)
    }
  }
}
</script>

<style lang="scss">
#rightTwoCharts {
  @media screen and (max-width: 500px) {
    padding-top: 60px;
    padding-bottom: 0px;
  }
  padding-top: 200px;
  // padding-bottom: 200px;
  width: 100%;
  position: relative;
  padding-bottom: 40px;
  box-sizing: border-box;
  max-width: 1226px;

  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .top-banner {
    font-style: normal;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      font-family: Bold;
      font-weight: 700;
      font-size: 44px;
      line-height: 53px;
      text-align: center;
      color: #13151a;
      margin-bottom: 84px;
      @media screen and (max-width: 500px) {
        margin-bottom: 0px;
      }
    }

    .info {
      font-family: Regular;
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
      text-align: center;
      color: #13151a;
      margin-bottom: 28px;
      max-width: 1000px;
    }
  }
}

#demoMap {
  width: 1350px;
  height: 590px;
  // width: 1350px;
  // height: 590px;
  margin-top: 24px;
  margin-bottom: 24px;
  // transform: scale(1.5);
  background: transparent;
  /* width: 100%; */
  /* background: #f7f9fc; */
}

@media (max-width: 1350px) {
  #demoMap {
    width: 80%;
  }
}
@media (max-width: 500px) {
  #demoMap {
    width: 80%;
    height: 450px;
    margin-top: -120px;
  }
}
.bank-box {
  font-family: "Medium";
  font-style: normal;
  font-weight: 600;
  padding: 18px 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .name {
    display: flex;
    align-items: center;
    justify-content: center;

    .flag {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      margin-right: 10px;
    }

    .text {
      font-family: "Medium";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #13151a;
    }
  }
}

.pay {
  display: flex;
  margin-top: 16px;
  width: 100%;

  .bank {
    display: flex;
    align-items: center;
    background: #faf7f7;
    border-radius: 10px;
    padding: 4px;
    margin-right: 10px;

    .bank1 {
      width: 62px;
      // height: 32px;
      margin: 0 14px;
    }

    .bank2 {
      width: 62px;
      // height: 32px;
      margin: 0 14px;
    }
  }
}
</style>
