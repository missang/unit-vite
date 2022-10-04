<template>
  <view class="content">
    <view class="text-area" @click="open">
      <text class="title">测试点击打开拨号</text>
    </view>

    <u-popup :show="show"
             @close="close"
             mode="bottom"
             @open="open">
      <xwDial ref="delPhone"
              @returnPhone="returnPhone"></xwDial>
    </u-popup>
  </view>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance, onMounted } from 'vue'
import useCurrentInstance from '@/utils/useCurrentInstance'
import xwDial from './components/xw-dial/index.vue'

const { ctx } = getCurrentInstance() as any
onMounted(() => {
  console.log(ctx.$refs.delPhone)
})
let phone = ref('')
let tel = ref('')
let show = ref(false)
function open() {
          // console.log('open');
          show.value = true
        }
        function  close() {
          show.value = false
          // console.log('close');
        }
function elPhone() {
  ctx.$refs.delPhone.delPhone()
}
//清除全部数据
function delAll() {
  ctx.$refs.delPhone.delAll()
}
//返回数据
function returnPhone(data: any) {
  phone.value = data
  tel.value = data.join('')
  console.log(data.length)
}
const { $api } = useCurrentInstance()
$api
  .login({
    username: 123456,
    password: 123456
  })
  .then((res: any) => {
    console.log(res)
  })
</script>

<style  lang="less" scoped>

.text-area {
  display: flex;
  justify-content: center;
}

</style>
