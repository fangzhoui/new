<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="footer">
      <a href="javascript:;">
        <router-link  to="/{linkTo}">
          <input class="btn" type="button" value="下一步">
        </router-link>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
