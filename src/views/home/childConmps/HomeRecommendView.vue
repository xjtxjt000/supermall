<template>
  <div class="rescommend">
    <div class="rescommend-item" v-for="item in rescommends">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
name: "HomeRecommendView",
  props: {
    rescommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .rescommend {
    display: flex;
    width: 100%;
    text-align: center;/* 整体居中 */
    font-size: 12px;  /* 设置文字大小 */

    padding: 10px 0 20px; /* 上下边距 */
    border-bottom: 10px solid #eee;/* 中间横杠 */
  }

  .rescommend-item {
    flex: 1;
  }

  .recommend-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>
