<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <vue-status>
     <h2 slot="offline">You are offline</h2>
     <h2 slot="online">You are online (Now go to network tab and go offline)</h2>
 </vue-status>
  </div>
</template>

<script>
import VueStatus from "vue-status";
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome!'
    }
  }, components : {
    VueStatus
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
