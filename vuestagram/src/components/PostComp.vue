<template>
  <div class="post">
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">{{postData.name}}</span>
    </div>
    <div class="post-body" :class="postData.filter" :style="{backgroundImage: `url(${postData.postImage})`}" @click="changeLike"></div>
    <div class="post-content">
      <p>{{$store.state.likes}} Likes</p>
      <p><strong>{{postData.name}}</strong> {{postData.content}}</p>
      <p class="date">{{postData.date}}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: "PostComp",
    props: {
        postData: Object
    },
    data() {
      return{
       
      }
    },
    methods: {
      changeLike(){
        if (!this.$store.postLiked) {
          this.$store.commit('increaseLike')
          this.$store.postLiked = true;
         } else{
          this.$store.commit('decreaseLike') 
          this.$store.postLiked = false;
         } 

      }
    }
};
</script>

<style>
.post {
  width: 100%;
}
.profile {
  background-image: url("https://picsum.photos/100?random=0");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>
