<template>
  <div id="app">
    <h1>Mu-ui</h1>
    <div class="button">
      <h2>Button 按钮</h2>
      <div class="row">
        <h3>普通按钮</h3>
        <Mu-Button type='normal'>normal 普通</Mu-Button>
        <Mu-Button type='primary'>primary 主要</Mu-Button>
        <Mu-Button type='success'>success 成功</Mu-Button>
        <Mu-Button type='danger'>danger 危险</Mu-Button>
        <Mu-Button type='warning'>warning 警告</Mu-Button>
        <Mu-Button type='info'>info 信息</Mu-Button>
      </div>

      <div class="row">
        <h3>朴素按钮 plain</h3>
        <Mu-Button
          plain
          type='normal'
        >normal 普通</Mu-Button>
        <Mu-Button
          plain
          type='primary'
        >primary 主要</Mu-Button>
        <Mu-Button
          plain
          type='success'
        >success 成功</Mu-Button>
        <Mu-Button
          plain
          type='danger'
        >danger 危险</Mu-Button>
        <Mu-Button
          plain
          type='warning'
        >warning 警告</Mu-Button>
        <Mu-Button
          plain
          type='info'
        >info 信息</Mu-Button>
      </div>

      <div class="row">
        <h3>拟态按钮</h3>
        <Mu-Button
          mimicry
          type='normal'
        >normal 普通</Mu-Button>
        <Mu-Button
          mimicry
          type='primary'
        >primary 主要</Mu-Button>
        <Mu-Button
          mimicry
          type='success'
        >success 成功</Mu-Button>
        <Mu-Button
          mimicry
          type='danger'
        >danger 危险</Mu-Button>
        <Mu-Button
          mimicry
          type='warning'
        >warning 警告</Mu-Button>
        <Mu-Button
          mimicry
          type='info'
        >info 信息</Mu-Button>
      </div>

      <div class="row">
        <h3>圆角按钮 round</h3>
        <Mu-Button
          round
          type='normal'
        >normal 普通</Mu-Button>
        <Mu-Button
          round
          type='primary'
        >primary 主要</Mu-Button>
        <Mu-Button
          round
          type='success'
        >success 成功</Mu-Button>
        <Mu-Button
          round
          type='danger'
        >danger 危险</Mu-Button>
        <Mu-Button
          round
          type='warning'
        >warning 警告</Mu-Button>
        <Mu-Button
          round
          type='info'
        >info 信息</Mu-Button>
      </div>

      <div class="row">
        <h3>圆形按钮 circle</h3>
        <Mu-Button
          circle
          type='normal'
        >圆</Mu-Button>
        <Mu-Button
          circle
          type='primary'
        >圆</Mu-Button>
        <Mu-Button
          circle
          type='success'
        >圆</Mu-Button>
        <Mu-Button
          circle
          type='danger'
        >圆</Mu-Button>
        <Mu-Button
          circle
          type='warning'
        >圆</Mu-Button>
        <Mu-Button
          circle
          type='info'
        >圆</Mu-Button>
      </div>

      <div class="row">
        <h3>带字体图标 按钮 m-icon</h3>
        <Mu-Button
          circle
          type='normal'
          icon='m-icon-icon-test7'
        ></Mu-Button>
        <Mu-Button
          circle
          type='primary'
          icon='m-icon-icon-test8'
        ></Mu-Button>
        <Mu-Button
          circle
          type='success'
          icon='m-icon-icon-test51'
        ></Mu-Button>
        <Mu-Button
          circle
          type='danger'
          icon='m-icon-icon-test21'
        ></Mu-Button>
        <Mu-Button
          circle
          type='warning'
          icon='m-icon-icon-test40'
        ></Mu-Button>
        <Mu-Button
          circle
          type='info'
          icon='m-icon-icon-test33'
        ></Mu-Button>
        <Mu-Button
          round
          type='warning'
          icon='m-icon-icon-test40'
        >收藏</Mu-Button>
      </div>

      <div class="row">
        <h3>不同尺寸 size</h3>
        <div class="row">
          <Mu-Button size=''>普通按钮</Mu-Button>
          <Mu-Button size='medium'>中等按钮</Mu-Button>
          <Mu-Button size='small'>小型按钮</Mu-Button>
          <Mu-Button size='mini'>迷你按钮</Mu-Button>
        </div>
        <div class="row">
          <Mu-Button
            round
            size=''
          >普通按钮</Mu-Button>
          <Mu-Button
            round
            size='medium'
          >中等按钮</Mu-Button>
          <Mu-Button
            round
            size='small'
          >小型按钮</Mu-Button>
          <Mu-Button
            round
            size='mini'
          >迷你按钮</Mu-Button>
        </div>
        <div class="row">
          <Mu-Button
            circle
            size=''
          >普</Mu-Button>
          <Mu-Button
            circle
            size='medium'
          >中</Mu-Button>
          <Mu-Button
            circle
            size='small'
          >小</Mu-Button>
          <Mu-Button
            circle
            size='mini'
          >迷</Mu-Button>
        </div>
        <div class="row">
          <Mu-Button
            circle
            size=''
            icon='m-icon-icon-test7'
          ></Mu-Button>
          <Mu-Button
            circle
            size='medium'
            icon='m-icon-icon-test7'
          ></Mu-Button>
          <Mu-Button
            circle
            size='small'
            icon='m-icon-icon-test7'
          ></Mu-Button>
          <Mu-Button
            circle
            size='mini'
            icon='m-icon-icon-test7'
          ></Mu-Button>
        </div>
      </div>

      <div class="row">
        <h3>自定义按钮与字体颜色 bgColor&fontColor</h3>
        <Mu-Button
          bgColor='hotpink'
          fontColor='#fff'
        >自定义按钮与字体颜色</Mu-Button>
      </div>

      <div class="row">
        <h3>字体图标是否旋转 isRotateIcon</h3>
        <Mu-Button
          type='success'
          icon='m-icon-loading'
          isRotateIcon
        >上传到服务器</Mu-Button>
      </div>

      <div class="row">
        <h3>点击事件 click</h3>
        <Mu-Button
          type='primary'
          @click="sayHello"
        >点击事件</Mu-Button>
      </div>

      <div class="row">
        <h3>禁用按钮 disabled</h3>
        <Mu-Button
          type='primary'
          disabled
          @click="sayHello"
        >禁用按钮</Mu-Button>
      </div>
    </div>

    <div class="input">
      <h2>输入框 Input</h2>
      <h3>普通输入框</h3>
      <Mu-Input
        name='username'
        placeholder='请输入用户名'
        clearable
        v-model="username"
      ></Mu-Input>
      <h3>密码输入框</h3>
      <Mu-Input
        name='password'
        type='password'
        placeholder='请输入密码'
        showPassword
        v-model="password"
      ></Mu-Input>
      <h3>文字居中</h3>
      <Mu-Input
        name='createTime'
        center
        value='2022-09-11'
      ></Mu-Input>
      <h3>禁用输入框</h3>
      <Mu-Input
        name='createTime'
        disabled
        value='2022-09-11'
      ></Mu-Input>
      <!-- <input type="text" name="email" v-model="email"> -->
      <!-- v-model指令是一个语法糖，等价于下面 -->
      <!-- <input type="text" name="email" :value="email" @input="email = $event.target.value"> -->

      <h3>文本域</h3>
      <Mu-Input
        name='textarea'
        type='textarea'
        placeholder='请输入内容...'
        v-model="textarea"
      ></Mu-Input>
      <h3>文本域 禁用</h3>
      <Mu-Input
        type='textarea'
        disabled
        value='用户协议...'
      ></Mu-Input>

      <h3>复合型输入框</h3>
      <h4>前缀</h4>
      <Mu-Input
        type='text'
        name='domainName'
        placeholder='请输入域名'
        v-model="domainName"
      >
        <template slot="prepend">Http://</template>
      </Mu-Input>
      <h4>后缀</h4>
      <Mu-Input
        type='text'
        name='domainName'
        placeholder='请输入域名'
        v-model="domainName"
      >
        <template slot="append">.com</template>
      </Mu-Input>
      <h4>双缀</h4>
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

      <h3>计算器</h3>
      <Mu-InputNumber
        name='compute'
        v-model.number="compute"
      ></Mu-InputNumber>
      <h3>计算器 精度</h3>
      <Mu-InputNumber
        name='precision2'
        precision='2'
        v-model="precision2"
      ></Mu-InputNumber>
      <h3>计算器 禁用(禁止修改数量)</h3>
      <Mu-InputNumber
        name='disabledNum'
        disabled
        v-model.number="disabledNum"
      ></Mu-InputNumber>
      <h3>计算器 限制数量(限制最小值0；最大值5)</h3>
      <Mu-InputNumber
        name='limitNum'
        :min='0'
        :max='5'
        v-model.number="limitNum"
      ></Mu-InputNumber>
    </div>

    <div class="switch">
      <h2>开关 Switch</h2>
      默认开关：<Mu-Switch
        name="test"
        v-model="switchActive"
      ></Mu-Switch>
      <br>
      记住密码：<Mu-Switch
        name="remember"
        v-model="switchActive2"
        checkedColor='#67c23a'
        uncheckColor='#f56c6c'
      ></Mu-Switch>
    </div>

    <div class="radio">
      <h2>单选 Radio</h2>
      性别：<Mu-Radio
        name="man"
        label="1"
        color="hotpink"
        v-model="gender"
      >男</Mu-Radio>
      <Mu-Radio
        name="woman"
        label="0"
        color="hotpink"
        v-model="gender"
      >女</Mu-Radio>
    </div>

    <div class="radioGroup">
      <h2>单选组 RadioGroup</h2>
      是否追星：<Mu-RadioGroup v-model="star">
        <Mu-Radio
          name="star1"
          label="1"
          color="hotpink"
        >是</Mu-Radio>
        <Mu-Radio
          name="star0"
          label="0"
          color="hotpink"
        >否</Mu-Radio>
      </Mu-RadioGroup>
    </div>

    <div class="checkbox">
      <h2>复选框 Checkbox</h2>
      记住我：<Mu-Checkbox
        name="remember"
        color="hotpink"
        label="ok"
        v-model="remember"
      >确定</Mu-Checkbox>
    </div>

    <div class="checkboxGroup">
      <h2>复选框组 CheckboxGroup</h2>
      <Mu-CheckboxGroup v-model="hobby">
        爱好：<Mu-Checkbox
          name="movie"
          label="看电影"
        ></Mu-Checkbox>
        <Mu-Checkbox
          name="food"
          label="美食"
        ></Mu-Checkbox>
        <Mu-Checkbox
          name="game"
          label="打游戏"
        ></Mu-Checkbox>
        <Mu-Checkbox
          name="walk"
          label="散步"
        ></Mu-Checkbox>
      </Mu-CheckboxGroup>
      <p>选中的爱好：{{ hobby }}</p>
    </div>

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
      <p>选中的城市：{{ checkedItems }}</p>
    </div>

    <div class="form">
      <h2>From 组件</h2>
      <Mu-From
        :model="from"
        labelWidth="100px"
      >
        <Mu-FromItem label="用户名：">
          <Mu-Input
            name='username'
            placeholder='请输入用户名'
            clearable
            v-model="from.username"
          ></Mu-Input>
        </Mu-FromItem>

        <Mu-FromItem label="密码：">
          <Mu-Input
            name='password'
            type='password'
            placeholder='请输入密码'
            showPassword
            v-model="from.password"
          ></Mu-Input>
        </Mu-FromItem>
        <Mu-FromItem label="性别：">
          <Mu-Radio
            name="man"
            label="1"
            color="hotpink"
            v-model="from.gender"
          >男</Mu-Radio>
          <Mu-Radio
            name="woman"
            label="0"
            color="hotpink"
            v-model="from.gender"
          >女</Mu-Radio>
        </Mu-FromItem>
        <Mu-FromItem label="爱好：">
          <Mu-CheckboxGroup v-model="from.hobby">
            <Mu-Checkbox
              name="movie"
              label="看电影"
            ></Mu-Checkbox>
            <Mu-Checkbox
              name="food"
              label="美食"
            ></Mu-Checkbox>
            <Mu-Checkbox
              name="game"
              label="打游戏"
            ></Mu-Checkbox>
            <Mu-Checkbox
              name="walk"
              label="散步"
            ></Mu-Checkbox>
          </Mu-CheckboxGroup>
        </Mu-FromItem>
        <Mu-FromItem label="记住密码：">
          <Mu-Switch
            name="remember"
            v-model="from.remember"
            checkedColor='#67c23a'
            uncheckColor='#f56c6c'
          ></Mu-Switch>
        </Mu-FromItem>
        <Mu-FromItem>
          <Mu-Button type='danger'>取消</Mu-Button>
          <Mu-Button type='primary'>确定</Mu-Button>
        </Mu-FromItem>
      </Mu-From>
    </div>

    <div class="message">
      <h2>消息提示 Message</h2>
      <Mu-Button @click="showMsg">消息提示</Mu-Button>

      <h3>不自动关闭</h3>
      <Mu-Button @click="showMsgN">不自动关闭</Mu-Button>

      <h3>文字居中</h3>
      <Mu-Button @click="showMsg0">文字居中</Mu-Button>

      <h3>不同位置</h3>
      <Mu-Button @click="showMsg1">center</Mu-Button>
      <Mu-Button @click="showMsg2">leftTop</Mu-Button>
      <Mu-Button @click="showMsg3">rightTop</Mu-Button>

      <h3>不同类型</h3>
      <Mu-Button
        type='primary'
        @click="showMsgA"
      >info</Mu-Button>
      <Mu-Button
        type='success'
        @click="showMsgB"
      >success</Mu-Button>
      <Mu-Button
        type='danger'
        @click="showMsgC"
      >error</Mu-Button>
      <Mu-Button
        type='warning'
        @click="showMsgD"
      >warning</Mu-Button>
    </div>

    <div class="pop">
      <h2>气泡弹框 Pop</h2>
      <Mu-Button @click="showPop">气泡弹框</Mu-Button>
      <Mu-Button @click="showPop1">气泡弹框 错误</Mu-Button>
      <Mu-Button @click="showPop2">气泡弹框 1秒</Mu-Button>
    </div>

    <div class="messageBox">
      <h2>消息框 MessageBox</h2>
      <h3>confirm 确认对话框</h3>
      <Mu-Button @click="showMessageBox">confirm 确认对话框</Mu-Button>
      <h3>alert 警示对话框</h3>
      <Mu-Button @click="showMessageBox2">alert 警示对话框</Mu-Button>
    </div>

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
          <h3>这是一段信息...</h3>
        </template>

        <template v-slot:footer>
          <!-- <Mu-Button
            type='danger'
            @click="handleCancel"
          >取消</Mu-Button>
          <Mu-Button
            type='primary'
            @click="handleSure"
          >确定</Mu-Button> -->
        </template>
      </Mu-Dialog>
    </div>

    <div class="uploadfile">
      <h2>文件上传 UploadFile</h2>
      <h3>多文件上传 [聚合类型 - 功能齐全]</h3>
      <Mu-UploadFile
        uploadAddress='http://127.0.0.1:3000'
        fieldName='filename'
        drag
        :disabled='false'
        multiple
        accept='.png,.jpg,.jpeg,.mp4'
        :limit='5'
        :videoMaxSize='1 * 1024 * 1024 * 1024'
        :imgMaxSize='2 * 1024 * 1024'
        :sliceUploadMinFileSize='5 * 1024 * 1024'
        @successListInfo='lookSuccessListInfo'
      >
        <!-- 提示信息 -->
        <template v-slot:tipInfo>
          <span>只能上传 .mp4 格式的视频文件，大小不能超过2GB！</span>
          <span>或 .png /.jpg /.jpeg 格式的图片文件，大小不能超过2MB！</span>
          <p>禁止上传：名称不同但内容相同的文件</p>
        </template>
      </Mu-UploadFile>
    </div>

    <div class="previewImage">
      <h2>预览图片 PreviewImage</h2>
      <Mu-Button @click="previewImage">预览图片</Mu-Button>
    </div>

    <div class="clipImage">
      <h2>裁切图片 ClipImage</h2>
      <Mu-ClipImage @saveImage="saveImage"></Mu-ClipImage>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mu-ui',
  data () {
    return {
      test: '',
      isShow: false,
      isShowAlert: false,
      username: '', // 用户名
      password: '', // 密码
      textarea: '', // 文本域
      domainName: '', // 域名
      compute: 0, // 计算
      precision2: 1.00, // 计算精度
      disabledNum: 99.9, // 禁止修改数量
      limitNum: 0, // 限制数量
      switchActive: false,
      switchActive2: false,
      gender: '1', // 性别
      star: 0, // 是否追星
      remember: false, // 记住我
      hobby: ['美食'], // 爱好
      checkAll: false, // 是否全选
      options: ['上海', '北京', '广州', '深圳', '东莞'], // 全部选项
      checkedItems: ['东莞'], // 选中的选项
      isIndeterminate: true, // 用以表示 checkbox 的不确定状态，一般用于实现全选的效果
      from: {
        username: '', // 用户名
        password: '', // 密码
        gender: '1', // 性别
        remember: false, // 记住密码
        hobby: [] // 爱好
      },
      clipImgInfo: '' // 裁切图片信息
    }
  },
  methods: {
    sayHello () {
      alert('hello')
    },
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
    },

    showMsg () {
      console.log('showMsg')
      this.$message({
        msg: 'hello', // 提示信息
        time: 5000 // 显示时间
      })
    },
    showMsgN () {
      console.log('showMsg')
      this.$message({
        autoClose: false // 自动关闭
      })
    },
    showMsg0 () {
      console.log('showMsg')
      this.$message({
        center: true // 文字居中
      })
    },
    showMsg1 () {
      this.$message({
        position: 'center' // 位置
      })
    },
    showMsg2 () {
      this.$message({
        position: 'leftTop' // 位置
      })
    },
    showMsg3 () {
      this.$message({
        position: 'rightTop' // 位置
      })
    },
    showMsgA () {
      this.$message({
        type: 'info' // 类型
      })
    },
    showMsgB () {
      this.$message({
        type: 'success' // 类型
      })
    },
    showMsgC () {
      this.$message({
        type: 'error' // 类型
      })
    },
    showMsgD () {
      this.$message({
        type: 'warning' // 类型
      })
    },
    showPop () {
      this.$pop()
    },
    showPop1 () {
      this.$pop({
        msg: '我是警告！',
        type: 'shake'
      })
    },
    showPop2 () {
      this.$pop({
        time: 1000
      })
    },
    showMessageBox () {
      // confirm 确认对话框
      this.$confirm({
        sureCallback: () => {
          this.$message({
            type: 'success',
            msg: '已确认'
          })
        },
        cancelCallback: () => {
          this.$message({
            type: 'info',
            msg: '已取消'
          })
        }
      })
    },
    showMessageBox2 () {
      // alert 警示对话框
      this.$alert({
        sureCallback: () => {
          this.$message({
            type: 'success',
            msg: '已确认'
          })
        }
      })
    },
    handleSure () {
      this.isShow = false
      console.log('我点击了确定')
      this.$message({
        type: 'success',
        msg: '已确认'
      })
    },
    handleCancel () {
      this.isShow = false
      console.log('我点击了取消')
      this.$message({
        type: 'info',
        msg: '已取消'
      })
    },
    // 查看上传成功列表信息
    lookSuccessListInfo (successList) {
      console.log('上传成功列表 ==> ', successList)
    },
    // 保存裁切图片信息
    saveImage (payload) {
      this.clipImgInfo = payload
    },
    previewImage () {
      console.log('预览图片')
      this.$previewImage({
        urlList: [
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg'
        ]
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  padding: 10px;
}
.row {
  padding: 10px;
}
</style>
