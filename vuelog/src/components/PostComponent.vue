<template>
  <div>
    <h2>{{blogData[id].title}}</h2>
    <h4>{{blogData[id].date}}</h4>
    <p>{{blogData[id].content}}</p>
    <router-view></router-view>
  </div>
  
</template>

<script>
export default {
    name: "postComponent",
    props: {
        blogData: Array,
        id: Number 
    }
}
</script>

<style>

</style>