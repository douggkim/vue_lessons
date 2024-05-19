<template>
  <div v-if="displayedNum === 0">
    <PostComp v-for="(post, i) in postData" :key="i" :postData="post" />
  </div>
  <!-- 필터선택페이지 -->
  <div v-if="displayedNum === 1">
    <div
      :class="['upload-image', selectedFilter]"
      :style="{ backgroundImage: `url(${uploadedImage})` }"
    ></div>
    <div class="filters">
      <FilterBox
        v-for="(filterName, i) in filterList"
        :key="i"
        :uploadedImage="uploadedImage"
        :filterName="filterName"
      />
    </div>
  </div>
  <!-- 글작성페이지 -->
  <div v-if="displayedNum === 2">
    <div
      class="upload-image"
      :class="selectedFilter"
      :style="`background-image: url(${uploadedImage})`"
    ></div>
    <div class="write">
      <textarea class="write-box" @input="updateWrittenContent">
write!</textarea
      >
    </div>
  </div>

  <div v-if="displayedNum == 3">
    <MyPage :one="1" :two="2"/>
  </div>
</template>

<script>
import PostComp from "./PostComp.vue";
import FilterBox from "./FilterBox.vue";
import MyPage from "./MyPage.vue";

export default {
  name: "ContainerComp",
  data() {
    return {
      filterList: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
    };
  },
  components: {
    PostComp,
    FilterBox,
    MyPage
  },
  props: {
    postData: Array,
    displayedNum: Number,
    uploadedImage: String,
    selectedFilter: String,
  },
  methods: {
    updateWrittenContent(e) {
      let content = e.target.value;
      this.$emit("updatedWrittenContent", content);
    },
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
