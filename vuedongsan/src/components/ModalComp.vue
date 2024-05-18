<template>
  <div
    v-if="모달창열렸니"
    class="black-bg"
    tabindex="0"
    @keyup.esc="$emit('closedModal')"
  >
    <div class="white-bg">
      <h4>{{ 원룸들[누른거].title }}</h4>
      <p>{{ 원룸들[누른거].price }}원/월</p>
      <p>{{ 원룸들[누른거].content }}</p>
      <input v-model.number="rentMonth" />
      <input type="range" min="1" max="12" v-model.number="rentMonth" />
      <p>
        {{ rentMonth }} 개월 선택함 : {{ 원룸들[누른거].price * rentMonth }} 원
      </p>
      <img :src="원룸들[누른거].image" class="room-img" />
      <button @click="$emit('closedModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComp",
  data() {
    return {
      rentMonth: 0,
    };
  },
  beforeUpdate() {
    if (this.rentMonth < 1) {
      alert("1개월 이상 선택해주세요.");
      this.rentMonth = 1;
    } else if (this.rentMonth > 12) {
      alert("12개월 이하로 선택해주세요.");
      this.rentMonth = 12;
    }
  },
  watch: {
    rentMonth(monthVal) {
      if (monthVal.length !== 0 && typeof monthVal === "string") {
        alert("숫자만 입력 가능합니다.");
        this.rentMonth = 1;
      }
    },
  },
  props: {
    모달창열렸니: Boolean,
    원룸들: Array,
    누른거: Number,
  },
};
</script>

<style>
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.white-bg {
  width: 50%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}
</style>
