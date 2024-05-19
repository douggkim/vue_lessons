<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="?" v-model="placeholderText"/>
    <div class="post-header" v-for="(a, i) in filteredFollower" :key="i">
      <div class="profile" :style="`background-image:url(${a.image})`"></div>
      <span class="profile-name">{{ a.name }}</span>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref, toRefs, watch } from "vue";
import axios from "axios";
import { useStore } from "vuex";

export default {
  name: "MyPage",
  props: {
    one: Number,
    two: Number,
  },
  setup(props) {
    let follower = ref([]);
    let placeholderText = ref('');
    let filteredFollower = ref([]);

    // composition API 활용법
    let test = reactive({ name: "kim" });
    test;

    let { one, two } = toRefs(props);
    console.log(one.value);
    console.log(two.value);

    watch(placeholderText, (newValue) => {
      filterFollower(newValue);
    });

    let store = useStore();
    console.log(store.state.name);

    onMounted(() => {
      axios.get("/followers.json").then((a) => {
        follower.value = a.data;
        filterFollower(placeholderText.value);
      });
    });

    // composition API 활용법
    function filterFollower(searchText) {
      filteredFollower.value = follower.value.filter(item => item.name.includes(searchText));
    }

    let followerNum = computed(() => {
      return follower.value.length;
    });


    console.log(followerNum.value);

    return { follower, placeholderText, filteredFollower, followerNum };
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>