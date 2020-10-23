  <template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
      <!--<img src="../../assets/img/tabbar/home.svg" alt="">
        <div>首页</div>-->
     </div>
    </template>

    <script>
    export default {
      name: "TabBarItem",
      props: {
        path: String,
        activeColor:{
          type: String,
          default: 'red'
        }
      },
      data() {
        return{
          // isActive: true
        }
      },
      computed:{
         isActive() {
          return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle() {
           return this.isActive ? {color: this.activeColor} : {}
        }
      },
      methods: {
        itemClick(){
          // this.isActive= !this.isActive;
          this.$router.push(this.path)
        }
      },
      beforeRouteLeave(to,form,next) {
        console.log('aaa');
        this.isActive = true;
        next()
      }
    }
    </script>

    <style scoped>
    .tab-bar-item{
      flex: 1;/* 均等分 */
      text-align: center;/* 居中 */
      height: 49px;
      font-size: 13px;
    }

    .tab-bar-item img {
      width: 24px;
      height: 24px;
      vertical-align: middle;
      margin-bottom: 2px;
    }
    .active {
      color: red;
    }
    </style>
