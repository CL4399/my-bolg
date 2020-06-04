import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  content: [{
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
    },
    {
      id: "6",
      title: "Cookie和Session",
      item: `1、cookie的数据存放在客户的浏览器上，session存放在服务器里面。
      2、cookie不是很安全，别人可以分析存放在本地的COOKIE进行COOKIE欺骗。
      3、session会在一定时间内保存在服务器上，当访问增多会比较占用服务器性能。
      4、单个cookie保存数据不能超过4k，很多浏览器限制一个站点最多保存20个cookie。`,
      author: "CL",
      dataTime: "2020-3-24"
    },
    {
      id: "7",
      title: "浏览器输入网址到页面渲染",
      item: `1、服务器查找域名IP地址，查找顺序：浏览器缓存=>系统缓存=>路由器缓存。
              2、域名解析（DNS解析）。
              3、浏览器向服务器发起TCP请求，与浏览器建立三次握手。
              4、握手成功后，浏览器向服务器发送http请求。
              5、服务器收到请求并处理，然后返回到浏览器。
              6、浏览器收到HTTP响应，读取页面内容，浏览器渲染，解析html源码。
              7、生成DOM树、解析css样式、js交互。
              8、客户端和服务器交互。`,
      author: "CL",
      dataTime: "2020-3-24"
    },
    {
      id: "8",
      title: "闭包",
      item: `定义：当一个嵌套的内部函数引用了嵌套外部函数的变量，就产生了闭包。特性：1、函数嵌套函数。
      2、函数内部可以引用外部的参数和变量。
      3、参数和变量不会被垃圾回收机制回收。
      优点：1、保护函数内的变量安全，实现封装，防止变量流入其他环境发生命名冲突。2、在内存中维持一个变量，可以做缓存。3、匿名执行函数可以减少内存消耗。
      缺点：1、增大了内存消耗，滥用闭包会造成内存泄漏。
      使用方法：1将函数作为另一个函数的返回值。2、将函数作为一个实参传递给另一个函数。`,
      author: "CL",
      dataTime: "2020-3-24"
    },
    {
      id: "9",
      title: "web性能优化",
      item: `1、降低请求量：合并资源、减少HTTP请求数、minify/gzip 压缩、webP、lazyLoad。
            2、加快请求速度：预解析DNS、减少域名数、并行加载、CDN分发。
            3、缓存：HTTP协议缓存请求、离线缓存manifest、离线数据缓存localStorage。
            4、渲染：Js/Css优化、加载顺序、服务端渲染。`,
      author: "CL",
      dataTime: "2020-3-24"
    },
    {
      id: "10",
      title: "post/get",
      item: `1、GET - 从指定的资源请求数据。
      2、POST - 向指定的资源提交要被处理的数据。
      3、GET：不同的浏览器和服务器不同，一般限制在2~8k之间，更常见的是1k以内。
      4、GET和POST的底层也是TCP/IP，GET/POST都是TCP链接。
      5、GET产生一个TCP数据包，POST产生两个TCP数据包。
      6、GET请求，浏览器会把http header和data一并发送出去，服务器响应200。
      7、POST请求，浏览器会先发送header，服务器响应100 continue，浏览器再发送data。服务器响应200`,
      author: "CL",
      dataTime: "2020-3-24"
    }
  ],
  note: [{
    id: 1,
    item: `蓦然回首，夜色阑珊，似乎可以听到时光远去的声音。周而复始的平淡，也许，总是在喧嚣过后，才懂得躲在角落里怀念那些曾经的 心情 ，不舍的时光。许多的记忆，已悄然消失。却总是有些零零落落的断章，安静的存在着。 `
  }, {
    id: 2,
    item: `蓦然回首，才发现昨日的繁华，犹如今夜的雨，那些曾经有过的以往，那些心潮澎湃的时刻，那些让心灵震撼的柔情，那些让人不堪回首的失意，都只属于逝去的年华，随着时光的流逝，被冲刷得七零八落，再也无法拼凑成生命的华彩乐章。`
  }, {
    id: 3,
    item: `当明天变成了今天成为了昨天，最后成为记忆里不再重要的某一天，。`
  }, {
    id: 4,
    item: `我们突然发现自己在不知不觉中已被时间推着向前走，这不是静止火车里，与相邻列车交错时，仿佛自己在前进的错觉，而是我们真实的在成长，在这件事里成了另一个自己。`
  }, {
    id: 5,
    item: `我们从虚空中来，每个人都怀抱着善与恶，有人升入天堂，有人堕入地狱，在无边的业火之中，我想起你，想起从前 我们曾经，离的那么近 `
  }, {
    id: 6,
    item: `终有一天你回过头，只见红尘万丈，来路无踪，吾从何来，为何到此，你已忘了自己最初的样子 `
  }, {
    id: 7,
    item: `你    有没有见过我 我走了很远 才来到这里 涉过黑山白水 历经百劫千难 在我每一次的人生中 找到你`
  }, {
    id: 8,
    item: `你可会记得 友人的笑容 蕴藏着世上所有的温柔 你可会记得 鸽子飞过蓝天 少女脚步轻盈 像清风吹过麦田 你可会记得 在黑暗中有光亮起 你孤冷人生中唯一的璀璨  那是 你的家  `
  }, {
    id: 9,
    item: `人们啊，终究会离散于时间的尽头，但是啊，我不会忘记，在这段路上你曾温暖过 我的岁月`
  }, {
    id: 10,
    item: ` 人的一生，有许多事情，是需要放在心里慢慢回味的，过去的就莫要追悔，一切向前看吧 任何打击都不足以成为你堕落的借口，即使你改变不了这个世界，你却依然可以改变自己，选择条正确的路永远走下去。`
  }, {
    id: 11,

    item: `书籍是人类进步的阶梯，它可以引导我们奋力前进，更进一步。多读好书，会使我们脱离庸俗，脱离无知，走到那里仿佛都有一种属于书的清香伴随着我们，书香弥漫。有文化底韵的人，都会给人一种清新的感觉，一种高贵的气质。书籍，它教导我们要脚踏实地，问心无愧地迈向成功。`
  }],
  verse: [{
    id: "12",
    title: '山有木兮木有枝，心悦君兮君不知。一一佚名《越人歌》',
    item: "今夕何夕兮搴洲中流，今日何日兮得与王子同舟。蒙羞被好兮不訾诟耻， 心几烦而不绝兮得知王子。山有木兮木有枝， 心说君兮君不知。 "
  }, {
    id: "13",
    title: '人生若只如初见，何事秋风悲画扇。一一纳兰性德《木兰词·拟古决绝词柬友》',
    item: `人生若只如初见，何事秋风悲画扇。等闲变却故人心，却道故人心易变。骊山语罢清宵半，泪雨霖铃终不怨。何如薄幸锦衣郎，比翼连枝当日愿。`
  }, {
    id: "14",
    title: '十年生死两茫茫，不思量，自难忘。一一苏轼《江城子·乙卯正月二十日夜记梦》',
    item: `十年生死两茫茫，不思量，自难忘。千里孤坟，无处话凄凉。纵使相逢应不识，尘满面，鬓如霜。
          夜来幽梦忽还乡，小轩窗，正梳妆。相顾无言，惟有泪千行。料得年年肠断处，明月夜，短松冈。`
  }, {
    id: "15",
    title: '曾经沧海难为水，除却巫山不是云。一一元稹《离思五首·其四》',
    item: `曾经沧海难为水，除却巫山不是云。
          取次花丛懒回顾，半缘修道半缘君。`
  }, {
    id: "16",
    title: '玲珑骰子安红豆，入骨相思知不知。一一温庭筠《南歌子词二首 / 新添声杨柳枝词》',
    item: `一尺深红胜曲尘，天生旧物不如新。
        合欢桃核终堪恨，里许元来别有人。
        井底点灯深烛伊，共郎长行莫围棋。
        玲珑骰子安红豆，入骨相思知不知。`
  }, {
    id: "17",
    title: '只愿君心似我心，定不负相思意。一一李之仪《卜算子·我住长江头》',
    item: `我住长江头，君住长江尾。日日思君不见君，共饮长江水。
          此水几时休，此恨何时已。只愿君心似我心，定不负相思意。`
  }, {
    id: "18",
    title: '平生不会相思，才会相思，便害相思。一一徐再思《折桂令·春情》',
    item: `平生不会相思，才会相思，便害相思。身似浮云，心如飞絮，气若游丝，空一缕馀香在此，盼千金游子何之。证候来时，正是何时？灯半昏时，月半明时。`
  }, {
    id: "19",
    title: '愿得一心人，白头不相离。一一卓文君《白头吟》',
    item: `皑如山上雪，皎若云间月。
            闻君有两意，故来相决绝。
            今日斗酒会，明旦沟水头。
            躞蹀御沟上，沟水东西流。
            凄凄复凄凄，嫁娶不须啼。
            愿得一心人，白头不相离。
            竹竿何袅袅，鱼尾何簁簁！
            男儿重意气，何用钱刀为！`
  }, {
    id: "20",
    title: '山无陵，江水为竭。冬雷震震，夏雨雪。天地合，乃敢与君绝。一一佚名《上邪》',
    item: `上邪！我欲与君相知，长命无绝衰。
    山无陵，江水为竭，冬雷震震，夏雨雪，天地合，乃敢与君绝。`
  }, {
    id: "21",
    title: '入我相思门，知我相思苦。一一李白《三五七言 / 秋风词》',
    item: `秋风清，秋月明，
            落叶聚还散，寒鸦栖复惊。
            相思相见知何日？此时此夜难为情！
            入我相思门，知我相思苦，
            长相思兮长相忆，短相思兮无穷极，
            早知如此绊人心，何如当初莫相识。`
  }, {
    id: "22",
    title: '桃之夭夭，灼灼其华。一一佚名《桃夭》',
    item: `桃之夭夭，灼灼其华。之子于归，宜其室家。桃之夭夭，有蕡其实。之子于归，宜其家室。桃之夭夭，其叶蓁蓁。之子于归，宜其家人。`
  }],
  resource: [{
    id: "1",
    title: "My-GitHub",
    item: "https://github.com/CL4399"
  }, {
    id: "2",
    title: "jQ插件库",
    item: "http://www.jq22.com/"
  }, {
    id: "3",
    title: "pexels",
    item: "https://www.pexels.com/zh-cn/"
  }, {
    id: "4",
    title: "蓝湖",
    item: "https://lanhuapp.com/web/#/item"
  }, {
    id: "5",
    title: "土豆图床",
    item: "https://images.ac.cn/simple.html"
  }, {
    id: "6",
    title: "FontAwesome",
    item: "https://fontawesome.dashgame.com/"
  }, {
    id: "7",
    title: "CSS参考手册",
    item: "http://css.cuishifeng.cn/"
  }, {
    id: "8",
    title: "饿了么",
    item: "https://element.eleme.cn/#/zh-CN/component/input"
  }, {
    id: "9",
    title: "bootstrap",
    item: "https://www.bootcss.com/"
  }, {
    id: "10",
    title: "Vant",
    item: "https://youzan.github.io/vant-weapp/#/quickstart"
  }],
  about: [{
    id: "1",
    item: "熟练掌握HTML+CSS+Javascript 三大前端基础"
  }, {
    id: "2",
    item: "能使用HTML+CSS制作符合W3C规范页面，熟练使用CSS预处理器Stylus或者LESS进行项目样式单元的开发"
  }, {
    id: "3",
    item: "熟悉flex弹性布局和响应式布局"
  }, {
    id: "4",
    item: "熟练掌握原生JavaScript、原型、闭包、作用域等"
  }, {
    id: "5",
    item: "熟悉ES6新特性并使用ES6进行开发、熟悉jQuery"
  }, {
    id: "6",
    item: "熟练使用vue、使用vue全家桶( vue-router、vuex、axios、vue-cli )"
  }, {
    id: "7",
    item: "了解微信小程序"
  }, {
    id: "8",
    item: "了解 webpack打包工具、熟练使用git命令，熟练使用node包管理工具npm "
  }, {
    id: "9",
    item: "熟悉element ui ，vant等ui框架，有相关项目经验"
  }, {
    id: "10",
    item: "熟练使用Photoshop切图软件、熟练使用VSCode、Postman等工具进行项目开发。"
  }],
  project: [{
    id: "1",
    title: "后台管理系统",
    title1: "项目描述:",
    title2: "技术栈",
    title3: "项目难点",
    describe1: `
    整个项目的主要模块分为：通过后台管理系统实现商品按照分类上架下架和修改商品信息,查看订单进度以及管理人员账号的权限分配`,
    describe2: "Vue Vue-router  Vue-cli Vue-lodash Axios ES6 Webpack Element Ui  Echarts Vue-table-with-tree-grid",
    describe3: `使用Element UI进行页面布局
    使用axios来请求接口，前后端分离 实现商品的增删改查
    使用vue-cli3.0脚手架搭建项目
    使用vue-router来做路由，实现单页面跳转 多层路由嵌套，导航守卫实现登陆拦截,
    使用Echarts.js来实现图表效果
    使用ES6语法来开发项目
    使用本地sessionStorage保存token来实现管理登录状态保持`,
    describe4:`1、路由导航守卫
                  通过router.beforeEach挂载导航守卫，先判断用户是否在登录页面，是就直接放行，然后获取存储在本地sessionStorage中的token，判断token是否存在，如果不存在就跳转回登录页面（目的是为了防止用户直接通过路由访问页面）
              2、接口文档的授权API
                  文档要求必须在请求头中使用Authorization 字段提供 token 令牌
                通过axios的请求拦截器添加token，保证拥有获取数据的权限`,
    author: "CL",
    dataTime: "2020-3-24",
  }, {
    id: "2",
    title: "去哪旅游网移动端页面",
    title1: "项目描述:",
    title2: "技术栈",
    title3: "项目难点",
    describe1: `
                  整个项目的主要模块分为： 首页旅游地展示 选择城市 详情页面 天气查询 ,主页划 5 个组件
                  即 header icon swiper recommend weekend`,
    describe2: "Vue Vue-router  Vuex Vue-cli Axios ES6 Webpack Element Ui Vue-awesome-swiper",
    describe3: `首页轮播图 组件主要使用vue-awesome-swiper插件。
                图标区域页面 每页展示8个，超过时进行分页，可以滚动。
                天气查询组件 输入城市查询当前天气信息。
                城市选择页面 主要功能展示城市列表 也可以搜索自己所在的城市 可以点击字母找城市。
                滑动的功能主要使用betterScroll。
                创建一个公用组件 Gallary.vue 使用 vue-awesome-swiper 完成图片滚动。
                Banner.vue 定义变量   showGallary 负责照片墙的显示 点击banner显示照片墙 点击黑暗处关闭。`,
    describe4: "1、因为点击字母的执行频率非常高,所以需要进行函数节流使用this.timer=setTimeout(()=>{执行代码}, 16) 这样能控制代码最快只能16毫秒执行一次 ",
    author: "CL",
    dataTime: "2020-3-24"
  }, {
    id: "3",
    title: "个人博客",
    title1: "项目描述:",
    title2: "技术栈",
    describe1: `
                整个项目的主要模块分为：登录页面 主页 随笔 关于 添加博客页面  随笔查看 用户查看
                共划分6个组件，即home、land、login、note、blogger、aboutMe`,
    describe2: "Vue Vue-router  Vue-cli  ES6 Webpack 	Vuex",
    describe3: `登录与注册页面使用vue-router实现简单的页面跳转，并进行了简单的表单验证
              主页显示当前时间，拥有轮播图和博客总览。轮播图主要使用vue-awesome-swiper插件，博客	总览主要使用element ui的Collapse 折叠面板组件。
              随笔页面主要使用了Vant的日历组件和Vue的axios实现随笔的添加与查看
              关于我页面简单的CSS动画
              添加博客页面 使用vue的axios实现博客的上传
              关于随笔查看和用户查看  主要使用element ui的Collapse 折叠面板组件实现查看后台数据`,
    author: "CL",
    dataTime: "2020-3-24"
  }]
}
const store = new Vuex.Store({
  state,
  mutations: {},
  actions: {},
  modules: {}
});
export default store;