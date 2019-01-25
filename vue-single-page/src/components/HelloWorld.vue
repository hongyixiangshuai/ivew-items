<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <i-icon type="md-add" />
     <i-button type="error">Error</i-button>
     <i-steps :current="1">
        <i-step title="已完成" content="这里是该步骤的描述信息"></i-step>
        <i-step title="进行中" content="这里是该步骤的描述信息"></i-step>
        <i-step title="待进行" content="这里是该步骤的描述信息"></i-step>
        <i-step title="待进行" content="这里是该步骤的描述信息"></i-step>
    </i-steps>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
  color: #42b983;
}
</style>
