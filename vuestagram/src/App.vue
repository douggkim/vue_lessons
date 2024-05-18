<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="displayedNum===1" @click="displayedNum=2">Next</li>
      <li v-if="displayedNum===2" @click="publish">Publish</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <ContainerComp :postData="postData" :displayedNum="displayedNum" :uploadedImage="uploadedImage" @updatedWrittenContent="updateContent"/>
  <button @click="getPost">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <!-- @change: input 데이터가 change 됐을 때 -->
      <input @change="uploadFile" accept="image/*" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>


</template>

<script>
import ContainerComp from "./components/ContainerComp.vue";
import PostData from "../public/data.js";
import axios from "axios";

export default {
  name: "App",
  components: {
    ContainerComp,
  },
  data() {
    return {
      postData: PostData,
      displayedNum: 0, 
      uploadedImage: null, 
      writtenContent:"", 
    };
  },
  methods: {
    getPost() {
      axios
        .get("https://codingapple1.github.io/vue/more1.json")
        .then((result) => {
          this.postData.push(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    uploadFile(e) {
      let files = e.target.files; 
      this.displayedNum = 1;
      // file.type 으로 확장자 검사 가능
      let fileUrl= URL.createObjectURL(files[0]); 
      this.uploadedImage = fileUrl; 
    },
    publish(){ 
      var myPost = {
      name: "Me",
      userImage: "https://picsum.photos/100?random=3",
      postImage: this.uploadedImage,
      likes: 0,
      date: "May 15",
      liked: false,
      content: this.writtenContent,
      filter: "perpetua"
    };
      this.postData.unshift(myPost);
      this.displayedNum = 0;
    },
    updateContent(content){
      this.writtenContent = content; 
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
