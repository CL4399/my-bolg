<template>
  <div>
    <header>
      <nav class="top">
        <div class="left">
          <img src="../assets/1.png" alt="title" />
        </div>
        <div class="right">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div class="div2"></div>
          <div class="title">
            <router-link to="/" tag="div">主页</router-link>
          </div>
          <div class="title">
            <router-link to="/note" tag="div">随笔</router-link>
          </div>
          <div class="title">
            <router-link to="/about" tag="div">关于我</router-link>
          </div>
        </div>
      </nav>
    </header>
    <footer-com>
      <div class="top2">
        <a href="#top">Top</a>
      </div>
    </footer-com>
  </div>
</template>

<script>
import footerCom from "../components/footerCom";
export default {
  name: "Home",
  components: {
    footerCom
  }
};
</script>

<style lang="less" scoped>
/* pc */
@media only screen and (min-width: 540px) and (max-width: 1980px) {
}
/* 移动端 */

header {
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
      }
      .title :hover {
        background-color: #666;
      }
    }
  }
}
</style>
