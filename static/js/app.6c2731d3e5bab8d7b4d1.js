webpackJsonp([1],{NHnr:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=i("7+uW"),n=i("mtWM"),s=i.n(n),r=i("Rf8U"),o=i.n(r),l={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var c=i("VU/8")({name:"App"},l,!1,function(t){i("ZoIs")},null,null).exports,p=i("/ocq"),u=i("7QTg"),d=i.n(u),f=i("qK+J"),v=i.n(f),m={components:{swiper:u.swiper,swiperSlide:u.swiperSlide,InfiniteLoading:v.a},data:function(){return{defaultImgUrl:"https://www.northeastanimalshelter.org/wp-content/uploads/2014/02/dog-coming-soon-2.jpg",swiperOption:{slidesPerView:4,spaceBetween:0,pagination:{el:".swiper-pagination",clickable:!0}},delay:1e3,endVal:1e3,options:{useEasing:!0,useGrouping:!0,separator:",",decimal:".",prefix:"",suffix:""},apiUrl:"https://cors-anywhere.herokuapp.com/http://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL",apiData:[],dataTop10:[],animal:"狗",pageSize:20,currentPage:1,infiniteId:+new Date}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},methods:{infiniteHandler:function(t){this.getData(t)},tabToogle:function(t){this.animal=t,this.resetData(),this.infiniteId+=1},resetData:function(){this.apiData=[],this.dataTop10=[],this.currentPage=1},getData:function(t){var a=this,i=this.apiUrl,e=this.pageSize,n=1===this.currentPage?0:(this.currentPage-1)*this.pageSize;a.axios.get(i,{params:{animal_kind:a.animal,$top:e,$skip:n}}).then(function(i){i.data.length?(1===a.currentPage?(a.apiData=i.data,a.dataTop10=a.apiData.slice(0,10)):a.apiData=a.apiData.concat(i.data),a.currentPage++,t.loaded()):t.complete()}).catch(function(t){console.log(t)})}},created:function(){}},g={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"tab"},[i("ul",{staticClass:"tab_flex"},[i("li",{class:{active:"狗"===t.animal},on:{click:function(a){return t.tabToogle("狗")}}},[t._v("狗")]),t._v(" "),i("li",{class:{active:"貓"===t.animal},on:{click:function(a){return t.tabToogle("貓")}}},[t._v("貓")])])]),t._v(" "),i("div",[i("div",{staticClass:"title"},[t._v("TOP 10 寵物")]),t._v(" "),i("swiper",{attrs:{options:t.swiperOption}},t._l(t.dataTop10,function(t){return i("swiper-slide",{key:t.key,staticClass:"topten",staticStyle:{width:"100px",height:"100px"},style:{backgroundImage:"url("+t.album_file+")",backgroundSize:"cover",backgroundPosition:"center center"}})}),1)],1),t._v(" "),i("div",{staticClass:"title"},[t._v("全部寵物")]),t._v(" "),i("div",{staticClass:"allAnimal"},t._l(t.apiData,function(a){return i("div",{key:a.animal_id},[i("div",{staticClass:"animalCard"},[i("div",{staticClass:"animalCard_img",staticStyle:{width:"200px",height:"200px"},style:{backgroundImage:"url("+a.album_file+")"}}),t._v(" "),i("div",{staticClass:"animalCard_info"},[i("div",{staticClass:"animalCard_info_content"},[t._v("\n              "+t._s(a.animal_sex)+"\n            ")]),t._v(" "),i("div",{staticClass:"animalCard_info_content"},[t._v("\n              "+t._s(a.animal_colour)+"\n            ")])])])])}),0),t._v(" "),i("infinite-loading",{attrs:{identifier:t.infiniteId},on:{infinite:t.infiniteHandler}})],1)},staticRenderFns:[]};var _={components:{animalHome:i("VU/8")(m,g,!1,function(t){i("m/yf")},null,null).exports},data:function(){return{}}},h={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("animalHome"),this._v(" "),a("router-view")],1)},staticRenderFns:[]},w=i("VU/8")(_,h,!1,null,null,null).exports;e.a.use(p.a);var C=new p.a({routes:[{path:"/",component:w}]});i("v2ns");e.a.config.productionTip=!1,e.a.use(o.a,s.a),e.a.use(d.a),e.a.use(v.a),new e.a({el:"#app",components:{App:c},template:"<App/>",router:C})},ZoIs:function(t,a){},"m/yf":function(t,a){},v2ns:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.6c2731d3e5bab8d7b4d1.js.map