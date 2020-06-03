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
      <el-button @click="drawer = true" type="primary">|||</el-button>
      <el-drawer :visible.sync="drawer" :direction="direction">
        <el-row style="width: 15rem">
          <el-col :span="12">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              router
            >
              <el-menu-item index="1" route="/">
                <i class="el-icon-menu"></i>
                <span route slot="title">首页</span>
              </el-menu-item>
              <el-menu-item index="2" route="/note">
                <i class="el-icon-menu"></i>
                <span route slot="title">随笔</span>
              </el-menu-item>
              <el-menu-item index="3" route="/resource">
                <i class="el-icon-menu"></i>
                <span route slot="title">资源</span>
              </el-menu-item>
              <el-menu-item index="4" route="/about">
                <i class="el-icon-menu"></i>
                <span route slot="title">关于我</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-drawer>
    </header>

    <!-- 瀑布流 -->
    <div class="box">
      <div class="left" v-for="item in noteList" :key="item.id">
        <!-- <div class="item">{{item.title}}</div>
        <div class="item1">{{item.item}}</div>-->
        <div class="left_box">
          <el-card class="box-card1">
            <div v-for="o in 1" :key="o" class="text item">{{item.item}}</div>
          </el-card>
        </div>
      </div>
      <div class="right" v-for="item in verseList" :key="item.id">
        <!-- <div class="item">{{item.title}}</div>
        <div class="item1">{{item.item}}</div>-->
        <div class="right_box">
          <el-card class="box-card2">
            <span>{{item.title}}</span>
            <el-divider></el-divider>
            <div v-for="o in 1" :key="o" class="text item">{{item.item}}</div>
          </el-card>
        </div>
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
      noteList: [],
      verseList: [],
      isCollapse: true,
      isAbc: true,
      drawer: false,
      direction: "ltr"
    };
  },
  mounted() {
    this.getContent();
  },
  methods: {
    getContent() {
      this.noteList = this.$store.state.note;
      this.verseList = this.$store.state.verse;
      // console.log(this.verseList);
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
        .note {
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
  display: flex;
  flex-direction: column;
  margin: 3rem 1rem 1rem 1rem;
  padding: 1rem;
  min-width: 20rem;
  @media only screen and (min-width: 1024px) {
    width: 60%;
    position: absolute;
    left: 20%;
}
  .left {
    flex: 1;
    margin: .5rem;
  }
  .right {
    flex: 1;
    margin: 0.5rem;
  }
}
.iphone {
  display: none;
  @media only screen and (max-width: 540px) {
    display: block;
  }
  .el-button {
    width: 96%;
    height: 2rem;
    line-height: 0.5rem;
    margin: 0.5rem;
    background-color: #545c64;
    box-shadow: 1px 1px 5px #545c64;
    border: 1px solid #545c64;
  }
  .el-drawer {
    width: 40%;
  }
  .el-menu-item {
    height: 5rem;
    margin: 0.5rem;
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
