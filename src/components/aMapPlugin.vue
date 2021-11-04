<template>
  <div class="amap_wrap">
    <div class="amap_search_bar">
      <input v-model="keyword" class="amap_search_input" />
      <button class="amap_search_btn" @click="placeSearch(keyword)">
        搜索
      </button>
      <p>{{ currentLocationInfo.formattedAddress }}</p>
    </div>
    <div class="amap_canvas" id="ampaWrap"></div>
  </div>
</template>
<script type="text/ecmascript-6">
import AMapLoader from '@amap/amap-jsapi-loader'
var AMapIns = null
var AMapService = {}
export default {
  components: {},
  mounted () {
    AMapLoader.load({
      key: '5c91a4313d4ffeb0d844c226edc37cbe'
      //   plugin: ['AMap.PlaceSearch']
    }).then((AMap) => {
      AMapIns = new AMap.Map('ampaWrap', {
        // center: [121.498586, 31.239637],
        zoom: 14,
        mapStyle: 'amap://styles/whitesmoke'
      })

      AMapIns.on('moveend', this.getMapCenter)
      AMap.plugin(['AMap.Geocoder', 'AMap.PlaceSearch'], () => {
        AMapService.PlaceSearch = new AMap.PlaceSearch({
          city: '厦门'
        })
        AMapService.Geocoder = new AMap.Geocoder({
          city: '厦门'
        })
        // 进入默认获取当前定位信息
        this.getMapCenter()
      })
    })
  },
  methods: {
    placeSearch (keyword) {
      AMapService.PlaceSearch.search(keyword, (status, result) => {
        const {
          poiList: {
            pois: [target]
          }
        } = result
        const { location } = target
        this.setMapCenter(location)
      })
    },
    setMapCenter ({ lng, lat }) {
      AMapIns.setCenter([lng, lat])
      AMapIns.setZoom(14)
    },
    getMapCenter () {
      const center = AMapIns.getCenter()
      this.getAddress(center)
    },
    getAddress ({ lng, lat }) {
      AMapService.Geocoder.getAddress([lng, lat], (status, result) => {
        const { regeocode } = result
        this.currentLocationInfo = regeocode
      })
    }
  },
  data () {
    return {
      keyword: '',
      currentLocationInfo: {}
    }
  }
}
</script>
<style scoped lang="less">
@font-face {
  font-family: "iconfont";
  src: url("./iconfont.ttf?t=1636031131270") format("truetype");
}
.amap_wrap {
  width: 100%;
  height: 100%;
  .amap_search_bar {
    height: 50px;
    p {
      margin: 0;
    }
  }
  .amap_canvas {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ~"calc(100% - 50px)";
    &::after {
      font-family: "iconfont";
      content: "\e617";
      position: absolute;
      color: #0f71cc;
      font-size: 36px;
      font-weight: 400;
    }
  }
}
</style>
