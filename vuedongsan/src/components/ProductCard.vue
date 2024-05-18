<template>
  <div>
    <img :src="room.image" class="room-img" />
    <h4 @click="$emit('openedModal',room.id)">
      {{ room.title }}
    </h4>
    <p>{{ room.price }} 원</p>
    <button>허위매물신고</button>
    <span> 신고 수 : {{ 신고수[roomNumber] }}</span>
  </div>
</template>

<script>
export default {
    name: "ProductCard", 
    props:{
        room: Object,
        roomNumber: Number, 
        신고수: Array, 
    }
};
</script>

<style>
.room-img {
  width: 100%;
  margin-top: 40px;
}
</style>
