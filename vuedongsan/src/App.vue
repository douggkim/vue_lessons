<template>
  <!-- <div class="start" :class="{end: 모달창열렸니}">
    <ModalComp
      @closedModal="모달창열렸니 = false"
      :원룸들="원룸들"
      :누른거="누른거"
      :모달창열렸니="모달창열렸니"
    />
  </div> -->

  <transition name="fade">
    <ModalComp
      @closedModal="모달창열렸니 = false"
      :원룸들="원룸들"
      :누른거="누른거"
      :모달창열렸니="모달창열렸니"
    />
  </transition>

  <div class="menu">
    <a v-for="(a, i) in 메뉴들" :key="i">{{ a }}</a>
  </div>
  

  <DiscountComp></DiscountComp>
  <button @click="priceSort">가격순 정렬</button>
  <button @click="sortBack">되돌리기</button>

  <ProductCard
    @openedModal="openModal"
    v-for="(room, i) in 원룸들"
    :key="i"
    :room="room"
    :roomNumber="i"
    :신고수="신고수"
  />
</template>

<script>
import roomInfo from "./data/roominfo.js";
import DiscountComp from "./components/DiscountComp.vue";
import ModalComp from "./components/ModalComp.vue";
import ProductCard from "./components/ProductCard.vue";

export default {
  name: "App",
  data() {
    return {
      prices: [60, 70, 80],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      discountRate: 30,
      스타일: "color: blue",
      메뉴들: ["Home", "Products", "About"],
      신고수: [0, 0, 0],
      모달창열렸니: false,
      원룸들: roomInfo,
      원룸들오리지널: [...roomInfo],
      누른거: null,
    };
  },
  methods: {
    increase(i) {
      this.신고수[i] += 1;
    },
    openModal(message) {
      this.모달창열렸니 = true;
      this.누른거 = message;
    },
    priceSort(){
      this.원룸들.sort(function(a,b){
        return a.price - b.price
      })
    },
    sortBack(){
      this.원룸들 = [...this.원룸들오리지널]; 
    }
  },
  components: {
    DiscountComp,
    ModalComp,
    ProductCard,
  },
};
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

.start {
  opacity: 0;
  transition: all 1s;
}

.end {
  opacity: 1;
}

.fade-enter-from {
  transform: translateY(-1000px);
} 
/* 시작 시 스타일 */
.fade-enter-active {
  transition: all 0.6s;
}
/* 끝날 때 스타일 */
.fade-enter-to {
  transform: translateY(0px);
}


.fade-leave-from {
  opacity: 1;
} 
/* 시작 시 스타일 */
.fade-leave-active {
  transition: all 0.3s;
}
/* 끝날 때 스타일 */
.fade-leave-to {
  opacity:0;
}
</style>
