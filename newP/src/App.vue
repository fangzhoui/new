<template>
  <div>
    <div class="header">
      
    </div>
    <div class="wrap">
      <ul>
        <li>
          <v-welcome></v-welcome>
        </li>
        <li>
          <v-pic></v-pic>
        </li>
      </ul>
    </div>
    <div class="footer">
      <a href="javascript:;">
        <input class="btn" type="button" value="下一步">
      </a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import welcome from './components/welcome/welcome'
  import pic from './components/pic/pic'
  export default{
    data () {
      return {}
    },
    components: {
      'v-welcome': welcome,
      'v-pic': pic
    }
  }
</script>

<style>
.wrap{

}
</style>
