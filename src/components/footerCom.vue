<template>
  <div class="content">
    <div class="left">
      <div
        class="left_top"
        @mouseover="handleOpen"
        @mouseout="handleClose"
        v-for="item in content"
        :key="item.id"
      >
        <div class="center">
          <div class="title">{{item.title}}</div>
          <div class="item_content">{{item.item}}</div>
          <div class="about">
            {{item.author}}
            {{item.dataTime}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerCom",
  data() {
    return {
      content: [
        {
          id: 1,
          title: "Vue生命周期",
          item: ` vue每个组件都是独立的，每个组件都有一个属于它的生命周期，从一个组件创建、数据初始化、挂载、更新、销毁，这就是一个组件所谓的生命周期。
                  共8个钩子函数		beforeCreate
                  created、
                  beforeMount、
                  mounted、
                  beforeUpdate、
                  updated、
                  beforeDestroy、
                  destroyed
                  ，data props computed watch methods之间的生成顺序props ->methods ->data -> computed -> watch
                `,
          author: "CL",
          dataTime: "2020-3-24"
        },
        {
          id: 2,
          title: "MVVM",
          item: `MVVM 是 Model-View-ViewModel 的缩写。
                  Model代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑。
                  View 代表UI 组件，它负责将数据模型转化成UI 展现出来。
                  ViewModel 监听模型数据的改变和控制视图行为、处理用户交互,
                  在MVVM架构下，View 和 Model 之间并没有直接的联系，而是通过ViewModel进行交互，Model 和 ViewModel 之间的交互是双向的， 
                  因此View 数据的变化会同步到Model中，而Model 数据的变化也会立即反应到View 上。
                  ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来。	
                `,
          author: "CL",
          dataTime: "2020-3-24"
        },
        {
          id: 3,
          title: "Vue中的计算属性与帧听器",
          item: `计算属性是依赖的值改变会重新执行函数，计算属性是取返回值作为最新结果，所以里面不能异步的返回结果。不能写异步逻辑。
                  侦听属性是侦听的值改变会重新执行函数，将一个值重新赋值作为最新结果，所以赋值的时候可以进行一些异步操作。 	
                `,
          author: "CL",
          dataTime: "2020-3-24"
        },
        {
          id: 4,
          title: "Vue中的计算属性与帧听器",
          item: `计算属性是依赖的值改变会重新执行函数，计算属性是取返回值作为最新结果，所以里面不能异步的返回结果。不能写异步逻辑。
                  侦听属性是侦听的值改变会重新执行函数，将一个值重新赋值作为最新结果，所以赋值的时候可以进行一些异步操作。 	
                `,
          author: "CL",
          dataTime: "2020-3-24"
        },
        {
          id: 5,
          title: "async与await",
          item: `async
                  async的用法，它作为一个关键字放到函数前面，用于表示函数是一个异步函数，因为async就是异步的意思， 异步函数也就意味着该函数的执行不会阻塞后面代码的执行，async 函数返回的是一个promise 对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。
                  await
                  await的含义为等待。意思就是代码需要等待await后面的函数运行完并且有了返回结果之后，才继续执行下面的代码。这正是同步的效果。
              `,
          author: "CL",
          dataTime: "2020-3-24"
        }
      ]
    };
  },
  methods: {
    handleOpen(e) {
      e.path[0].style.backgroundColor = "darkgray";
      e.path[0].style.color = "white";
    },
    handleClose(e) {
      e.path[0].style.backgroundColor = "white";
      e.path[0].style.color = "darkgray";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.content {
  width: 100%;
  display: flex;
  .left {
    width: 90%;
    margin: 2rem auto;
    background-color: #fff;
    background: #eee;

    :hover {
      transition: all 1.5s linear;
      transform: scaleX(1.05);
      color: #ccc;
      transform-origin: center;
    }
    @media only screen and (max-width: 540px) {
      width: 90%;
    }
    @media only screen and (min-width: 1080px) {
      width: 50%;
    }
    .left_top {
      height: 20rem;
      margin: 1rem;
      padding: 20px;
      box-shadow: 1px 1px 10px #000;
      margin-bottom: 10px;
      border-radius: 1rem;
      overflow: hidden;

      :hover {
        transition: all 1.5s linear;
        transform: scaleX(0.9);
        color: #ccc;
        transform-origin: center;
      }
      .center {
        display: flex;
        flex-direction: column;

        .title {
          font-size: 2rem;
          text-shadow: 1px 1px 5px #ccc;
          font-weight: 600;
          color: #666;
          @media only screen and (max-width: 540px) {
            font-size: 1.5rem;
          }
        }
        .item_content {
          width: 100%;
          flex: 6;
          overflow: hidden;
          flex-wrap: wrap;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 9;
          display: flex;
          flex-direction: column;
          font-size: 1.3rem;
          color: #333;
          letter-spacing: 0.1rem;
          text-indent: 2em;
          @media only screen and (max-width: 540px) {
            font-size: 1rem;
          }
        }
        .about {
          flex: 1;
          text-align: right;
        }
      }
    }
  }
}
</style>
