# mu-ui-vue2

## 建立项目
```sh
npm install
```

### 编译和开发热加载
```sh
npm run serve
```

### 针对生产环境进行编译
```sh
npm run build
```

### 检查和修复文件
```sh
npm run lint
```

### 打包为库
```sh
npm run lib
```

## 简介

- 基于vue2.x的 Vue UI 组件库

## 使用

1. 安装

```sh
npm i npm i mu-ui-vue2
```

2. 导入样式

```js
import 'mu-ui-vue2/dist/mu-ui-vue2.css'
```

3. 全局注册

```js
// src/main.js
// import MuUI from '../packages/index'
import MuUI from 'mu-ui-vue2'

// 全局注册组件
Vue.use(MuUI)
```

3. 按需导入

```js
// src/main.js
// 按需导入
// import { Button } from '../packages/index'
import { Button } from 'mu-ui-vue2'
Vue.component(Button.name, Button)
```


## 字体图标
- 导入 font-awesome 字体图标

```js
// 全局引入字体图标
import './assets/fonts/iconfont.css'
```

- 预览图标
  - `src\assets\fonts\demo_index.html`
  - 查看`font-class`选项

### 开发者字体配置
- 定制私有前缀
  - 打开阿里图标
  - 修改项目设置
    - mu-ui-vue2：前缀m-icon-；默认字体mui-iconfont；
  - 下载到本地，修改`src\assets\fonts\iconfont.css`
```css
/* .mui-iconfont 默认 */
/* 修改为属性选择器 class类名包含 m-icon- 的就应用这个字体  */
[class*='m-icon-'] {
  font-family: "mui-iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

---

## 组件

### 按钮(Button)

#### 参数

| 属性     | 值               | 描述                                                                 |
| -------- | ---------------- | -------------------------------------------------------------------- |
| type     | String           | 按钮类型：primary,info,success,warning,danger                        |
| plain    | Boolean          | 是否为朴素按钮，默认为 false                                         |
| mimicry  | Boolean          | 是否为拟态按钮，和 plain 不能同时设置，会被 plain 覆盖。默认为 false |
| disabled | Boolean          | 是否禁用按钮，默认为 false                                           |
| round    | Boolean          | 是否为圆角按钮，默认为 false                                         |
| circle   | Boolean          | 是否为圆形按钮，默认为 false                                         |
| icon     | Array 或 Boolean | font-awesome 字体数组，默认为 false                                  |

#### 事件

| 事件  | 值       | 描述     |
| ----- | -------- | -------- |
| click | Function | 点击事件 |



---

### 消息提示 Message

| 属性      | 值                                    | 描述                         |
| --------- | ------------------------------------- | ---------------------------- |
| msg       | String                                | 提示信息，默认我是提示信息！ |
| type      | 'info', 'success', 'error', 'warning' | 类型，默认为'info'           |
| position  | 'center', 'leftTop', 'rightTop'       | 位置，默认为'center'         |
| center    | Boolean                               | 文字居中，默认false          |
| autoClose | Boolean                               | 自动关闭，默认为true         |
| time      | Number                                | 显示时间，默认为3000         |

```vue
<template>
  <div class="message">
    <Mu-Button @click="showMsg">消息提示</Mu-Button>
  </div>
</template>

<script>
export default {
  name: 'Mu-ui',
  methods: {
    showMsg () {
      // 调用
      this.$message({
        type: 'success', // 类型
        msg: 'hello', // 提示信息
        time: 5000, // 显示时间
        autoClose: false, // 自动关闭
        center: true, // 文字居中
        position: 'leftTop' // 位置
      })
    },
  }
}
</script>
```

### 气泡弹框 Pop

| 属性      | 值                                    | 描述                         |
| --------- | ------------------------------------- | ---------------------------- |
| msg       | String                                | 提示信息，默认我是提示信息！ |
| type      | ' ', 'shake'                          | 类型，默认为' '           |
| time      | Number                                | 显示时间，默认为3000         |

```vue
<template>
  <div class="pop">
    <Mu-Button @click="showPop">气泡弹框</Mu-Button>
  </div>
</template>

<script>
export default {
  name: 'Mu-ui',
  methods: {
    showMsg () {
      // 调用
      showPop1 () {
        console.log('2')
        this.$pop({
          msg: '我是警告！',
          type: 'shake',
          time: 1000
        })
      },
    },
  }
}
</script>
```

### 对话框(Dialog)

| 属性     | 值      | 描述                               |
| -------- | ------- | ---------------------------------- |
| title    | String  | 对话框头部提示，默认为"提示"       |
| width    | String  | 对话框宽度，默认为 50%             |
| top      | String  | 对话框距离顶部位置，默认为 15vh    |
| hasFoolt | Boolean | 底部按钮可见状态，默认为 true       |
| isShow   | Boolean | 对话框可见状态，默认为 false       |
| sureCallback   | Function | 确定回调，默认为 关闭对话框       |
| cancelCallback   | Function | 取消回调，默认为 关闭对话框       |



| 插槽   | 描述                    |
| ------ | ----------------------- |
| title  | Dialog 标题区的内容     |
| body  | Dialog 内容区的内容     |
| footer | Dialog 按钮操作区的内容 |

#### 最简单用法

```vue
<template>
  <div class="dialog">
    <h2>对话框 Dialog</h2>
    <Mu-Button
      type='primary'
      @click="isShow = true"
    >显示 Dialog 对话框</Mu-Button>
    <!-- <Mu-Dialog title="温馨提示"></Mu-Dialog> -->

    <!-- <Mu-Dialog :isShow='isShow' @update:isShow='isShow = false'> -->
    <!-- .sync语法糖 相当于上面的简写形式 -->
    <Mu-Dialog
      width='60%'
      top='20vh'
      :isShow.sync='isShow'
    >
      <template v-slot:title>
        <!-- <h2>温馨提示：</h2> -->
        <span>温馨提示：</span>
      </template>

      <template v-slot:body>
        <h2>这是一段信息...</h2>
      </template>

      <template v-slot:footer>
      </template>
    </Mu-Dialog>
  </div>
</template>

<script>
export default {
  name: 'Mu-ui',
  data () {
    return {
      isShow: false
    }
  }
}
</script>
```

#### 自定义 确认与取消 回调函数

```vue
<template>
  <div class="dialog">
    <h2>对话框 Dialog</h2>
    <Mu-Button
      type='primary'
      @click="isShow = true"
    >显示 Dialog 对话框</Mu-Button>
    <!-- <Mu-Dialog title="温馨提示"></Mu-Dialog> -->

    <!-- <Mu-Dialog :isShow='isShow' @update:isShow='isShow = false'> -->
    <!-- .sync语法糖 相当于上面的简写形式 -->
    <Mu-Dialog
      width='60%'
      top='20vh'
      :isShow.sync='isShow'
      :sureCallback='handleSure'
      :cancelCallback='handleCancel'
    >
      <template v-slot:title>
        <!-- <h2>温馨提示：</h2> -->
        <span>温馨提示：</span>
      </template>

      <template v-slot:body>
        <span>这是一段信息...</span>
      </template>

      <template v-slot:footer>
      </template>
    </Mu-Dialog>
  </div>
</template>

<script>
export default {
  name: 'Mu-ui',
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    handleSure () {
      this.isShow = false
      console.log('我点击了确定')
    },
    handleCancel () {
      this.isShow = false
      console.log('我点击了取消')
    }
  }
}
</script>
```

#### 自定义底部按钮

- 可不传递 确认与取消 回调函数
- 但要本地定义，并手动设置对话框的显示与隐藏

```vue
<template>
  <div class="dialog">
    <h2>对话框 Dialog</h2>
    <Mu-Button
      type='primary'
      @click="isShow = true"
    >显示 Dialog 对话框</Mu-Button>
    <!-- <Mu-Dialog title="温馨提示"></Mu-Dialog> -->

    <!-- <Mu-Dialog :isShow='isShow' @update:isShow='isShow = false'> -->
    <!-- .sync语法糖 相当于上面的简写形式 -->
    <Mu-Dialog
      width='60%'
      top='20vh'
      :isShow.sync='isShow'
    >
      <template v-slot:title>
        <!-- <h2>温馨提示：</h2> -->
        <span>温馨提示：</span>
      </template>

      <template v-slot:body>
        <span>这是一段信息...</span>
      </template>

      <template v-slot:footer>
        <!-- 通过具名插槽自定义底部按钮，可不传递 确认与取消 回调函数 -->
        <Mu-Button
          type='danger'
          @click="handleCancel"
        >取消</Mu-Button>
        <Mu-Button
          type='primary'
          @click="handleSure"
        >确定</Mu-Button>
      </template>
    </Mu-Dialog>
  </div>
</template>

<script>
export default {
  name: 'Mu-ui',
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    handleSure () {
      // 手动设置对话框的显示与隐藏
      this.isShow = false
      console.log('我点击了确定')
    },
    handleCancel () {
      this.isShow = false
      console.log('我点击了取消')
    }
  }
}
</script>
```

### 输入框(Input)

| 属性         | 值      | 描述                               |
| ------------ | ------- | ---------------------------------- |
| type         | 'text', 'password', 'textarea'  | 表单类型，默认为'text' |
| name         | String  | 表单命名，默认为空                 |
| value        | String  | 表单值，默认为空字符串             |
| width        | String  | 输入框宽度，默认为180px             |
| rows        | Number  | 文本域高度，默认为2             |
| placeholder  | String  | 占位符，默认为空字符串             |
| disabled     | Boolean | 是否禁用，默认为 false             |
| clearable    | Boolean | 是否可清空，默认为 false           |
| showPassword | Boolean | 是否显示密码可见，默认为 false     |

#### 复合型输入框
- 通过具名插槽，可使用复合型输入框
```vue
<Mu-Input
  type='text'
  name='domainName'
  placeholder='请输入域名'
  v-model="domainName"
>
  <!-- 前缀 -->
  <template slot="prepend">Http://</template>
  <!-- 后缀 -->
  <template slot="append">.com</template>
</Mu-Input>
```

### 计数器(InputNumber)

| 属性      | 值               | 描述                              |
| --------- | ---------------- | --------------------------------- |
| name      | String           | 表单命名，默认为空                |
| value     | [Number, String] | 表单值，默认为空字符串            |
| step      | Number           | 步长，每次变化数值，默认为1       |
| min       | Number           | 最小值，默认为 -Infinity 负无穷大 |
| max       | Number           | 最大值，默认为 +Infinity 正无穷大 |
| precision | [Number, String] | 小数点精度，默认为0整数           |
| disabled  | Boolean          | 是否禁用，默认为 false            |

### 切换(Switch)

| 属性          | 值      | 描述                               |
| ------------- | ------- | ---------------------------------- |
| name          | String  | 表单命名，默认为空                 |
| value         | String  | 表单值，默认为空字符串             |
| checkedColor   | String  | 选中状态颜色，默认为 #409eff        |
| uncheckColor | String  | 未选中状态颜色，默认为 #dcdfe6      |



| 事件   | 值       | 描述                               |
| ------ | -------- | ---------------------------------- |
| change | Function | 状态修改触发事件，返回修改后的状态 |

---

### 单选框(Radio)

| 属性    | 值                        | 描述                               |
| ------- | ------------------------- | ---------------------------------- |
| label   | [String, Number, Boolean] | 单选框 label 值，默认为空字符串    |
| name    | String                    | 表单命名，默认为空                 |
| value   | String                    | 表单值，默认为空字符串             |
| color   | String                    | 单选框选择时的颜色，默认为#409eff  |

### 单选框组(RadioGroup)

用于包裹 radio，通过 v-model 指定组内所有的 radio 的 v-model

---

### 复选框(Checkbox)

| 属性          | 值                        | 描述                                                         |
| ------------- | ------------------------- | ------------------------------------------------------------ |
| label         | [String, Number, Boolean] | 复选框 label 值，默认为空字符串                              |
| name          | String                    | 表单命名，默认为空                                           |
| value         | Boolean                   | 表单选中状态，默认为false                                    |
| color         | String                    | 复选框选择时的颜色，默认为#409eff                            |
| indeterminate | Boolean                   | 用以表示 checkbox 的不确定状态，一般用于实现全选的效果，默认为false |

### 复选框组(CheckboxGroup)

| 属性  | 值     | 描述                              |
| ----- | ------ | --------------------------------- |
| label | String | 复选框 label 值，默认为空字符串   |
| name  | String | 表单命名，默认为空                |
| value | Array  | 选中的复选框，默认为null          |
| color | String | 复选框选择时的颜色，默认为#409eff |

用于包裹多个 checkbox，通过 v-model 指定组内所有的 checkout 的 v-model

---

###  复选框全选 (CheckboxAll)

| 插槽   | 描述                    |
| ------ | ----------------------- |
| checkAll  | 全选按钮的内容     |
| options  | 选项的内容     |

```vue
<template>
  <div class="CheckboxAll">
    <h2>复选框全选 CheckboxAll</h2>
    <Mu-CheckboxAll>
      <!-- 全选按钮 -->
      <template v-slot:checkAll>
        全选：<Mu-Checkbox
          name="checkAll"
          :indeterminate='isIndeterminate'
          v-model="checkAll"
          @change="handleCheckAllChange"
        ></Mu-Checkbox>
      </template>

      <!-- 选项 -->
      <template v-slot:options>
        <Mu-CheckboxGroup
          v-model="checkedItems"
          @change="handleCheckedOptionsChange"
        >
          <template v-for="item in options">
            <Mu-Checkbox
              :key="item"
              :name="item"
              :label="item"
            ></Mu-Checkbox>
          </template>
        </Mu-CheckboxGroup>
      </template>
    </Mu-CheckboxAll>
  </div>
</template>

<script>
export default {
  name: 'Mu-ui',
  data () {
    return {
      checkAll: false, // 是否全选
      options: ['上海', '北京', '广州', '深圳', '东莞'], // 全部选项
      checkedItems: ['东莞'], // 选中的选项
      isIndeterminate: true, // 用以表示 checkbox 的不确定状态，一般用于实现全选的效果
    }
  },
  methods: {
    // 改变全选按钮状态
    handleCheckAllChange (val) {
      console.log('CheckAll val ==>', val) // Boolean
      // 如果val存在，即全选；如果val不存在，即取消全选
      this.checkedItems = val ? this.options : []
      // 是否选择了，都没有全选
      this.isIndeterminate = false
    },
    // 改变单个选项状态
    handleCheckedOptionsChange (val) {
      console.log('CheckedOptions val ==>', val)
      // 全选的数量
      const checkedCount = val.length
      // 控制全选按钮是否选中
      this.checkAll = checkedCount === this.options.length
      // 是否选择了，都没有全选
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.options.length
    }
  }
}
</script>
```

### 表单(Form)

| 属性        | 值     | 描述                 |
| ----------- | ------ | -------------------- |
| model       | Object | 表单对象，必填       |
| label-width | String | 标签宽度，默认"80px" |

---

### 表单项(Form-item)

| 属性  | 值     | 描述                            |
| ----- | ------ | ------------------------------- |
| label | String | 单选框 label 值，默认为空字符串 |

