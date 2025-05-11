<template>
  <h1>App</h1>
  <FirstChild/>
</template>

<script>
import FirstChild from '@/components/FirstChild.vue'
export default {
  components : {
    FirstChild
  },
  provide() { // ①
    return {
      message: this.message,
    };
  },
  data() {
    return {
      message: 'Hello from Vue JS!',
    };
  },
}

</script>

<style></style>
