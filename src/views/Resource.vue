<template>
  <div>
    <header name="one">
      <a href name="one"></a>
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
          <router-link class="link resource" to="/resource" tag="div">资源</router-link>
        </div>
        <div class="title">
          <router-link class="link" to="/about" tag="div">关于我</router-link>
        </div>
      </div>
    </nav>

    <div class="ani">
      <div class="bb">
        <p>{{contents}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Resource",
  data() {
    return {
      contents: "不在沉默中爆发，就在沉默中灭亡",
      showAbs: true
    };
  }
};
</script>

<style lang='less' scoped>
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
      @media only screen and (max-width: 540px) {
        height: 5rem;
      }
      :hover {
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
  z-index: 1;
  @media only screen and (max-width: 540px) {
    position: absolute;
    top: 5rem;
  }
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
        @media only screen and (max-width: 920px) {
          width: 6rem;
        }
        width: 12rem;
        height: 3rem;
        background-color: #ccc;
        border-radius: 2rem;
      }
      .resource{
        background-color: #666;
      }
    }
    .title :hover {
      background-color: #666;
    }
  }
}
.bb,
.bb::before,
.bb::after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 1.5rem;
  text-align: center;
  line-height: 4.5rem;
}

.ani {
  background: #000;
  opacity: 0.8;
  height: 16rem;
  border-radius: 2rem;
  position: absolute;
  top: 10rem;
  bottom: 0;
  left: 0;
  right: 0;
  @media only screen and (max-width: 540px) {
    position: absolute;
    top: 10rem;
    left: 1rem;
    width: 92.5%;
  }
}

.bb {
  width: 12rem;
  height: 12rem;
  margin: auto;
  background: url("https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4005610539,1460288450&fm=26&gp=0.jpg");
  color: #ccffff;
  box-shadow: 0.1rem 0.1rem 3rem #fff;
  @media only screen and (max-width: 1024px) {
    
  }
}

.bb::before,
.bb::after {
  content: "";
  z-index: 1;
  margin: -5%;
  box-shadow: inset 0 0 0 0.2rem;
  animation: clipMe 8s linear infinite;
}

.bb::before {
  animation-delay: -4s;
}

@keyframes clipMe {
  0%,
  100% {
    clip: rect(0px, 13.26rem, 0.1rem, 0px);
  }

  25% {
    clip: rect(0px, 0.1rem, 13.26rem, 0px);
  }

  50% {
    clip: rect(12rem, 13.26rem, 13.26rem, 0px);
  }

  75% {
    clip: rect(0px, 13.26rem, 13.26rem, 12rem);
  }
}
</style>
