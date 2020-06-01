<template>
  <div>
    <header class="pc">
      <nav class="top">
        <div class="left">
          <img src="../assets/1.png" alt="title" />
        </div>
        <div class="right">
          <div></div>
          <div></div>
          <div class="div2"></div>
          <div class="title">
            <router-link to="/" tag="div">主页</router-link>
          </div>
          <div class="title">
            <router-link class="note" to="/note" tag="div">随笔</router-link>
          </div>
           <div class="title">
            <router-link class="link" to="/resource" tag="div">资源</router-link>
          </div>
          <div class="title">
            <router-link to="/about" tag="div">关于我</router-link>
          </div>
        </div>
      </nav>
    </header>

    <header class="iphone">
      <div class="toggle-button" @click="toggleCollapse">|||</div>
      <div class="nav" v-if="isAbc">
        <ul class="ul">
          <li><router-link to="/" tag="div">主页</router-link></li>
          <li><router-link to="/note" tag="div">随笔</router-link></li>
          <li><router-link class="link" to="/resource" tag="div">资源</router-link></li>
          <li><router-link to="/about" tag="div">关于我</router-link></li>
        </ul>
      </div>
    </header>

    <!-- 瀑布流 -->
    <div class="box" v-for="item in contentList" :key="item.id">
      <div class="item">{{item.title}}</div>
      <div class="item1">
          {{item.item}}
      </div>
    </div>
  </div>
</template>

<script>
import footerCom from "../components/footerCom";
export default {
  name: "Home",
  components: {
    footerCom
  },
  data() {
    return {
      contentList: [],
      isCollapse: true,
      isAbc: true
    };
  },
  mounted() {
    this.getContent();
  },
  methods: {
    getContent() {
      this.contentList = this.$store.state.note;
      // console.log(this.contentList);
    },
    //  点击按钮切换菜单的折叠与展开
    toggleCollapse() {
      this.isAbc = !this.isAbc;
    }
  }
};
</script>

<style lang="less" scoped>
/* pc */
@media only screen and (min-width: 540px) and (max-width: 1980px) {
}
/* 移动端 */

.pc {
  @media only screen and (max-width: 540px) {
    display: none;
  }
  width: 100%;
  height: 100%;
  .top {
    width: 100%;
    height: 3rem;
    display: flex;
    background-color: #000;
    position: absolute;
    top: 0;
    .left {
      img {
        width: 7rem;
        height: 3rem;
      }
    }
    .right {
      display: flex;
      flex: 1;
      color: #fff;
      opacity: 0.7;
      @media only screen and (max-width: 540px) {
      }
      div {
        flex: 1;
        text-align: center;
        font-size: 1.2rem;
        line-height: 3rem;
        letter-spacing: 0.5rem;
        @media only screen and (max-width: 540px) {
          font-size: 1rem;
          letter-spacing: 0.1rem;
        }
        .note{
          background-color: #666;
        }
      }
      .title :hover {
        background-color: #666;
      }
    }
  }
}
.box {
  width: 60%;
  margin: 3rem auto;
  @media only screen and (max-width: 540px) {
    width: 80%;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    margin: 0 auto;
  }
  display: flex;
  z-index: 1;
  .item {
    flex: 5;
    background-color: #ccc;
    opacity: 0.5;
    letter-spacing: 0.2rem;
    text-indent: 2rem;
    margin:.8rem;
    box-shadow: 1px 1px 5px #000;
  }
  .item1 {
    flex: 5;
    background-color: #ccc;
    opacity: 0.5;
    margin: .8rem;
    letter-spacing: 0.2rem;
    text-indent: 2rem;
    box-shadow: 1px 1px 5px #000;
    @media only screen and (max-width: 540px) {
      display: none;
    }
  }
}
.iphone {
  display: none;
  @media only screen and (max-width: 540px) {
    display: block;
  }
  .toggle-button {
    height: 24px;
    background-color: #4a5064;
    font-size: 1rem;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.2rem;
  }
  .nav {
    .ul {
      display: flex;
      height: 2rem;
      background: #ccc;
      border-radius: 0rem 0rem 1rem 1rem;
    }
    li {
      flex: 1;
      list-style: none;
      text-align: center;
      line-height: 2rem;
    }
  }
}
</style>
