<template>
  <div v-for="(data,i) in blogData" :key="i">
    <h5><router-link :to="{name: 'detail', params: {id: i} }">{{data.title}}</router-link></h5>
    <p>{{data.date}}</p>
  </div>
  
</template>

<script>
export default {
    name: "ListComponent",
    props: {
        blogData: Array
    }
}
</script>

<style>

</style>