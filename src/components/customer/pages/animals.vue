<template>
  <div>
    <div class="animal_text">{{animal}}</div>
    <div class="tab">
      <ul class="tab_flex">
        <li :class="{'active': animal === '狗'}" @click="tabToogle('狗')">狗</li>
        <li :class="{'active': animal === '貓'}" @click="tabToogle('貓')">貓</li>
      </ul>
    </div>
    <div>
    <div class="title">TOP 10 寵物</div>
      <swiper :options="swiperOption">
        <swiper-slide
        v-for="item in dataTop10" :key="item.key" class="topten" 
        style="width:100px;height:100px;" :style="{backgroundImage:`url(${item.album_file})`, backgroundSize:'cover', backgroundPosition:'center center'}">
        </swiper-slide>
      </swiper>
    </div>
    <div class="title">全部寵物</div>
    <div class="allAnimal">
        <div v-for="item in apiData" :key="item.animal_id">
          <div class="animalCard">
            <div class="animalCard_img" 
            :style="{ backgroundImage: `url(${item.album_file})`}" 
            style="width:200px; height: 200px;">
            </div>
            <div class="animalCard_info">
              <div class="animalCard_info_content">
                {{ item.animal_sex }}
              </div>
              <div class="animalCard_info_content">
                {{ item.animal_colour }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <infinite-loading :identifier="infiniteId" @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import InfiniteLoading from 'vue-infinite-loading';

export default {
  components: {
    swiper,
    swiperSlide,
    InfiniteLoading,
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      // api網址
      apiUrl: 'https://cors-anywhere.herokuapp.com/http://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL',
      // api資料
      apiData: [],
      // 前10筆資料
      dataTop10: [],
      // 篩選的動物
      animal: '狗',
      // 頁面一次顯示筆數
      pageSize: 20,
      // 分頁頁數
      currentPage: 1,
      infiniteId: +new Date(),
    }
  },
  computed:{
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  methods: { 
    infiniteHandler($state) {
      this.getData($state)
    },
    tabToogle(animal) {
      this.animal = animal;
      this.resetData();
      this.infiniteId += 1;
    },
    resetData() {
      this.apiData = [];
      this.dataTop10 = [];
      this.currentPage = 1;
    },
    getData($state) {
      var vm = this;
      var apiUrl = this.apiUrl;
      var top = this.pageSize;
      var skip = this.currentPage === 1 ? 0 : (this.currentPage - 1) * this.pageSize;

      vm.axios.get(apiUrl, {
          params: {
              animal_kind: vm.animal,
              $top: top,
              $skip: skip,
          }
      }).then(function (response) {
          if (response.data.length) {
              if (vm.currentPage === 1) {
                  vm.apiData = response.data;
                  // 取得前10筆
                  vm.dataTop10 = vm.apiData.slice(0, 10);
              } else {
                  vm.apiData = vm.apiData.concat(response.data);
              }
              vm.currentPage++;
              $state.loaded();
          } else {
              $state.complete();
          }
      }).catch(function (error) {
          console.log(error);
      }); 
    },
  },
}
</script>

<style lang="scss">
body {
  max-width: 414px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid #ccc;
}
.header {
  padding: 20px 0;
  background-color:#FECC64;

  &_title {
    font-size: 20px;
    text-align: center;
  }
}
.tab {
  padding-top: 10px;
}
.tab_flex {
  display: flex;

  li {
    background:#fff;
    width: 65%;
    text-align: center;
    padding: 10px 0;
    border: 1px solid #ccc;

    &.active {
      background:#ccc;
    }
  }
}
.title {
  font-size: 20px;
  margin: 15px 0;
  margin-top: 50px;
}
.topten{
  border: 1px solid #ccc;

  img {
    width: auto;
    height: 100px;
  }
}
.allAnimal {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
}
.animalCard {
  max-width: 100%;
  margin-bottom: 15px;
  border-radius: 3px;
  border: 1px solid #ccc;

  &_img {
    width: 50%;
    background-size: cover;
    background-position: center center;
    background-color: rgb(245, 245, 245);
  }

  &_info {
    width: 100%;
    display: flex;
      
      &_content {
        width: 100%;
        font-size: 14px;
        border: 1px solid #ccc;
        padding: 10px 0;
        text-align: center;
      }
  }
}
.animal_text{
    padding-top: 5px;
    font-size: 18px;
    text-align: center;
  }
</style>