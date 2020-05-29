<template>
  <div>
    <header name="one">
      <a href="" name="one"></a>
      <div class="left">
        <img class="img1" src="../assets/1.png" alt="title" />
      </div>
    </header>

    <nav class="top" v-show="showAbs">
      <div class="right">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div class="title">
          <router-link class="link" to="/" tag="div">主页</router-link>
        </div>
        <div class="title">
          <router-link class="link" to="/note" tag="div">随笔</router-link>
        </div>
        <div class="title">
          <router-link class="link" to="/note" tag="div">资源</router-link>
        </div>
        <div class="title">
          <router-link class="link" to="/about" tag="div">关于我</router-link>
        </div>
      </div>
    </nav>

    <footer-com class="content">
      <div class="top2">
        <a href="#top">Top</a>
      </div>
    </footer-com>

    <div class="href" v-show="!showAbs">
      <a href="#one"><img src="../assets/10.png" alt=""></a>
    </div>
  </div>
</template>

<script>
import footerCom from "../components/footerCom";
export default {
  name: "Home",
  data(){
    return {
      showAbs: true
    }
  },
  components: {
    footerCom
  },
  methods: {
    handleScroll() {
      console.log("scroll");
      const top = document.documentElement.scrollTop;
      if (top > 50) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
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
  min-width: 20rem;
  .left {
    display: flex;
    .img1 {
      height: 8rem;
      border-radius: 50%;
      transition: all 1s linear;
      :hover{
        transform: rotateZ(180deg);
      }
    }
  }
}
.top {
  width: 100%;
  height: 3rem;
  display: flex;
  color: #000;
  position: absolute;
  top: 4rem;
  .right {
    display: flex;
    flex: 1;
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
      .link {
        width: 6rem;
        height: 3rem;
        background-color: #ccc;
        border-radius: 2rem;
      }
    }
    .title :hover {
      background-color: #666;
    }
  }
}
.content {
  position: absolute;
  top: 6rem;
}
.href{
  position: fixed;
  right: 2rem;
  bottom: 2rem;
}
</style>
