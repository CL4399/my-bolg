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
            <router-link to="/note" tag="div">随笔</router-link>
          </div>
          <div class="title">
            <router-link class="link" to="/resource" tag="div">资源</router-link>
          </div>
          <div class="title">
            <router-link class="about" to="/about" tag="div">关于我</router-link>
          </div>
        </div>
      </nav>
    </header>

    <header class="iphone">
      <div class="toggle-button" @click="toggleCollapse">|||</div>
      <div class="nav" v-if="isAbc">
        <ul class="ul">
          <li>
            <router-link to="/" tag="div">主页</router-link>
          </li>
          <li>
            <router-link to="/Note" tag="div">随笔</router-link>
          </li>
          <li>
            <router-link class="link" to="/note" tag="div">资源</router-link>
          </li>
          <li>
            <router-link to="/about" tag="div">关于我</router-link>
          </li>
        </ul>
      </div>
    </header>

    <footer>
      <!-- pc -->
      <div class="content">
        <div class="content_about">
          <div class="left">
            <img class="img1" src="../assets/11.jpg" alt />
            <img class="img2" src="../assets//11.png" />
          </div>
          <div class="right">
            <h3>一个自学前端的小萌新</h3>
            <h4>
              每个人的选择都是在自己力所能及的范围内做出的最优的选择，
              大部分人都是安全感的奴隶，当你觉得生活轻而易举，成就感爆棚时，
              很有可能你只是选择了基础难度，而在你的圈子外，
              还有很多很多比你厉害几倍甚至几十倍的人，
              从一开始就是最高难度且现在比你财富多几十倍，
              甚至上百倍。你所谓的成功，也许只是他们眼中短暂歇脚的驿站。
              不要做温水里的青蛙，只有走出自己的心灵舒适区，你的人生才真正开始!
            </h4>
            <h4>不知不觉，自学前端已断断续续接近一年，有过迷茫，有过失落，可是我还是走到了今天，没有什么能够阻挡我的路，一起挫折不过是垫脚石罢了！</h4>
          </div>
        </div>
      </div>
      <!-- 移动端 -->
      <div class="content_iphone">
        <div class="content_about">
          <div class="left">
            <img class="img1" src="../assets/12.png" alt />
          </div>
          <div class="right">
            <h3>一个自学前端的小萌新</h3>
            <h4>
              每个人的选择都是在自己力所能及的范围内做出的最优的选择，
              大部分人都是安全感的奴隶，当你觉得生活轻而易举，成就感爆棚时，
              很有可能你只是选择了基础难度，而在你的圈子外，
              还有很多很多比你厉害几倍甚至几十倍的人，
              从一开始就是最高难度且现在比你财富多几十倍，
              甚至上百倍。你所谓的成功，也许只是他们眼中短暂歇脚的驿站。
              不要做温水里的青蛙，只有走出自己的心灵舒适区，你的人生才真正开始!
            </h4>
            <h4>不知不觉，自学前端已断断续续接近一年，有过迷茫，有过失落，可是我还是走到了今天，没有什么能够阻挡我的路，一起挫折不过是垫脚石罢了！</h4>
          </div>
        </div>
        <div>
          <img class="img2" src="../assets//11.png" />
        </div>
      </div>

      <div class="footer">
        <ul>
          <li>
            <a href="https://github.com/CL4399">GitHub</a>
          </li>
          <li>
            <a href="http://www.jq22.com/">jQuery插件库</a>
          </li>
          <li>
            <a href="https://www.pexels.com/zh-cn/">pexels</a>
          </li>
          <li>
            <a href="https://lanhuapp.com/web/#/item">蓝湖</a>
          </li>
          <li>
            <a href="https://images.ac.cn/simple.html">土豆图床</a>
          </li>
          <li>
            <a href="https://fontawesome.dashgame.com/">FontAwesome</a>
          </li>
          <li>
            <a href="http://css.cuishifeng.cn/">CSS参考手册</a>
          </li>
          <li>
            <a href="https://element.eleme.cn/#/zh-CN/component/input">饿了么</a>
          </li>
          <li>
            <a href="https://www.bootcss.com/">bootstrap</a>
          </li>
          <li>
            <a href="https://youzan.github.io/vant-weapp/#/quickstart">Vant</a>
          </li>
        </ul>
      </div>

      <div class="footer_iphone">
        <ul>
          <li>
            <a href="https://github.com/CL4399">GitHub</a>
          </li>
          <li>
            <a href="http://www.jq22.com/">jQuery插件库</a>
          </li>
          <li>
            <a href="https://www.pexels.com/zh-cn/">pexels</a>
          </li>
          <li>
            <a href="https://lanhuapp.com/web/#/item">蓝湖</a>
          </li>
          <li>
            <a href="https://images.ac.cn/simple.html">土豆图床</a>
          </li>
          <li>
            <a href="https://fontawesome.dashgame.com/">FontAwesome</a>
          </li>
          <li>
            <a href="http://css.cuishifeng.cn/">CSS参考手册</a>
          </li>
          <li>
            <a href="https://element.eleme.cn/#/zh-CN/component/input">饿了么</a>
          </li>
          <li>
            <a href="https://www.bootcss.com/">bootstrap</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
import footerCom from "../components/footerCom";
export default {
  name: "about",
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
  methods: {
    //  点击按钮切换菜单的折叠与展开
    toggleCollapse() {
      this.isAbc = !this.isAbc;
    }
  }
};
</script>

<style lang="less" scoped>
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
        .about{
          background-color: #666;
        }
      }
      .title :hover {
        background-color: #666;
      }
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

.content {
  width: 60%;
  height: 35rem;
  background-color: #f0f8ff;
  position: relative;
  top: 10rem;
  left: 22%;
  box-shadow: 2px 2px 10px #000;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 700px) {
    display: none;
  }
  .content_about {
    width: 100%;
    background-color: aliceblue;
    display: flex;
    .left {
      display: flex;
      flex-direction: column;
      .img1 {
        flex: 2;
        width: 15rem;
        height: 20rem;
        @media only screen and (min-width: 700px)and (max-width: 1000px) {
          width: 15rem;
          height: 10rem;
        }
      }
      .img2 {
        flex: 2;
        width: 15rem;
        height: 10rem;
        @media only screen and (min-width: 700px)and (max-width: 1000px) {
          width: 15rem;
        }
      }
    }
    .right {
      flex: 5;
      h3 {
        margin: 10px;
      }
      h4 {
        padding-top: 2rem;
        margin: 10px;
      }
    }
  }
}

.content_iphone {
  position: absolute;
  left: 3%;
  top: 5rem;
  margin-top: 1rem;
  padding: 0.5rem;
  width: 90%;
  height: 35rem;
  background: #ccc;
  display: none;
  @media only screen and (max-width: 700px) {
    display: block;
  }
  div {
    .img2 {
      margin-left: 1.3rem;
    }
  }
  .content_about {
    display: flex;
    .left {
      flex: 1;
      .img1 {
        margin-right: 1rem;
      }
    }
    .right {
      color: #666;
      text-shadow: 1px 1px 1px #99ffff;
    }
  }
}

.footer {
  width: 90%;
  height: 15rem;
  background-color: #ccc;
  position: absolute;
  top: 56rem;
  left: 5%;
  @media only screen and (max-width: 540px) {
    display: none;
  }
  ul {
    li {
      list-style: none;
      float: left;
      a {
        display: block;
        text-decoration: none;
        margin: 1rem;
        border: 1px solid #fff;
        color: #fff;
        width: 5.63rem;
        height: 3rem;
        background-color: #666;
        text-align: center;
        line-height: 3rem;
        font-size: 0.5rem;
      }
    }
  }
}

.footer_iphone {
  width: 90%;
  height: 15rem;
  background-color: #ccc;
  position: absolute;
  top: 43rem;
  left: 5%;
  display: none;
  @media only screen and (max-width: 700px) {
    display: block;
  }
  ul {
    li {
      list-style: none;
      float: left;
      a {
        display: block;
        text-decoration: none;
        margin: 1rem;
        border: 1px solid #fff;
        color: #fff;
        width: 5.63rem;
        height: 3rem;
        background-color: #666;
        text-align: center;
        line-height: 3rem;
        font-size: 0.5rem;
      }
    }
  }
}
</style>
