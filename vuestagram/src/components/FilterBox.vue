<template>
  <div class="filter-container" @click="sendSelectedFilter">
    <p class="filter-name">{{ filterName }}</p>
    <div
      :class="['filter-item', filterName]"
      :style="`background-image:url(${uploadedImage})`"
    ></div>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  data() {
    return {};
  },
  props: {
    uploadedImage: String,
    filterName: String,
  },
  methods: {
    sendSelectedFilter() { 
        this.emitter.emit('filterSelected',this.filterName)
    }
  }
};
</script>

<style>
.filter-container {
  display: inline-block;
  text-align: center;
  margin: 10px;
}

.filter-item {
  width: 100px;
  height: 100px;
  display: block;
  color: white;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
}

.filter-name {
  margin: 0;
  font-size: 14px;
}
</style>