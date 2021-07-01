<template>
  <button @click="getList">点击</button>
</template>

<script>
import { defineComponent } from 'vue';
import { getListAPI } from '../src/api/goods';

export default defineComponent({
  setup() {
    function getList() {
      getListAPI().then((res) => {
        console.log(res);
      });
      setTimeout(() => {
        getListAPI().then((res) => {
          console.log(res);
        });
      }, 200);
      setTimeout(() => {
        getListAPI().then((res) => {
          console.log(res);
        });
      }, 400);
    }

    return {
      getList
    };
  }
});
</script>

<style></style>
