/**
 * 整个包的入口
 */
import Vue from 'vue'
import '../src/assets/css/reset.css'
// 全局引入字体图标
import '../src/assets/fonts/iconfont.css'
// 引入组件
import Button from '../src/components/Button.vue'
import Checkbox from '../src/components/Checkbox.vue'
import CheckboxAll from '../src/components/CheckboxAll.vue'
import CheckboxGroup from '../src/components/CheckboxGroup.vue'
import ClipImage from '../src/components/ClipImage.vue'
import Dialog from '../src/components/dialog/Dialog.vue'
// import Dialog from '../src/components/dialog/index'
import From from '../src/components/From.vue'
import FromItem from '../src/components/FromItem.vue'
import Input from '../src/components/Input.vue'
import InputNumber from '../src/components/InputNumber.vue'
// import Message from '../src/components/message/Message.vue'
import Message from '../src/components/message/index'
import MessageBox from '../src/components/messageBox/index'
import Pop from '../src/components/pop/index'
import PreviewImage from '../src/components/previewImage/index'
import Radio from '../src/components/Radio.vue'
import RadioGroup from '../src/components/RadioGroup.vue'
import Switch from '../src/components/Switch.vue'
// import UploadFile from '../src/components/uploadFile/index'
import UploadFile from '../src/components/uploadFile/UploadFile.vue'

// 组件列表
const components = [
  Button,
  Checkbox,
  CheckboxGroup,
  CheckboxAll,
  Dialog,
  From,
  FromItem,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  Switch,
  UploadFile,
  ClipImage
]

Vue.use(Message).use(MessageBox).use(Pop).use(PreviewImage)

const install = function (Vue) {
  // 全局注册所有组件
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}

// 判断是否是直接引入文件。如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  Button,
  Checkbox,
  CheckboxGroup,
  CheckboxAll,
  Dialog,
  From,
  FromItem,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  Switch,
  UploadFile,
  ClipImage
}

export default {
  install
}
