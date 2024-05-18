<template>
  <div class="discount">
    <h4>지금 결제 시 {{discountRate}}% 할인</h4>
  </div>
</template>

<script>

export default {
  name: "DiscountComp",
  data() {
    return {
      discountRate:10,
      intervalId: null
    }
  },
  mounted(){
    this.intervalId = setInterval(()=>{
      if (this.discountRate > 0){
        this.discountRate -= 1;
      } else {
        clearInterval(this.intervalId);
      }
    },1000);
  },
  methods: {
  },
  components: {},
};
</script>

<style>
.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>
