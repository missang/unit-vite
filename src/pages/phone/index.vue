<template>
  <view class="content">
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    {{phone}}
    <p>{{tel}}</p>
    <xwDial ref="delPhone" @returnPhone="returnPhone"></xwDial>
  </view>
</template>

<script setup lang="ts">
import { ref ,getCurrentInstance, onMounted} from 'vue'
import useCurrentInstance from '@/utils/useCurrentInstance'
import xwDial from '@/components/xw-dial/index.vue'

const { ctx } = getCurrentInstance() as any;
onMounted(() => {
console.log(ctx.$refs.delPhone)

})
let phone = ref('')
let tel = ref('')
function elPhone(){
  ctx.$refs.delPhone.delPhone()
        }
        //清除全部数据
        function delAll(){
          ctx.$refs.delPhone.delAll()
        }
        //返回数据
function returnPhone(data: any) {
            phone.value = data
           tel.value = data.join("")
        }
const { $api } = useCurrentInstance()
$api.login(
  {

    username: 123456,
      password: 123456,
  }
).then((res:any) => {
  console.log(res)
})
const title = ref('Hello')
</script>

<style  lang="less" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: @text-primary;
}
</style>
