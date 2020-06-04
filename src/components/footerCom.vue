<template>
  <div class="content">
    <div class="left">
      <el-collapse
        change="true"
        accordion
        v-model="activeName"
        v-for="item in content"
        :key="item.id"
      >
        <el-collapse-item :title="item.title" :name="item.id">
          <div>{{item.item}}</div>
          <div class="author">作者:{{item.author}}</div>
          <div class="time">时间:{{item.dataTime}}</div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="center"></div>
    <div class="right">
      <el-calendar v-model="value"></el-calendar>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerCom",
  data() {
    return {
      content: [],
      activeName: "1",
      value: new Date()
    };
  },
  mounted() {
    this.getContent();
  },
  methods: {
    getContent() {
      this.content = this.$store.state.content;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.content {
  width: 90%;
  margin: 3rem;
  padding: 1rem;
  position: relative;
  top: 10%;
  left: 2%;
  box-shadow: 3px 3px 10px #333;
  border-radius: 2rem;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    margin: 4.5rem;
  }
  display: flex;
  @media only screen and (max-width: 540px) {
    width: 80%;
    margin: 2rem;
    flex-direction: column;
    position: relative;
    top: 10%;
    left: -1%;
  }
  .left {
    flex: 2;
    .el-collapse {
      width: 100%;
      background-color: #eee;
      border-radius: 0.5rem;
      margin-top: 1rem;
      .el-collapse-item {
        position: relative;
        margin-top: 1.7rem;
        border-bottom: 1px solid aqua;
        @media only screen and (max-width: 540px) {
          border-bottom: 1px solid #000;
          letter-spacing: 0.3rem;
          text-indent: 2rem;
        }
        /deep/.el-collapse-item__header {
          background-color: #eee;
          opacity: 0.7;
        }
        /deep/.el-collapse-item__content {
          background-color: #eee;
        }

        .author{
          
        }
      }
    }
  }
  .center {
    flex: 0.2;
    @media only screen and (max-width: 540px) {
      display: none;
    }
  }
  .right {
    flex: 1;
    margin: 2rem;
    @media only screen and (max-width: 540px) {
      margin: 1rem 0rem 0rem 0rem;
    }
    .el-calendar {
      background-color: #eee;
      @media only screen and (max-width: 540px) {
        background-color: #eee;
      }
    }
  }
}
</style>
