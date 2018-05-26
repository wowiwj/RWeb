<template>
    <div class="app-wrapper">
        模板文件
        <app-main></app-main>
    </div>
</template>

<script>
import AppMain from './components/AppMain.vue'
export default {
  name: 'layout',
  components: {
    AppMain
  }
}

</script>
