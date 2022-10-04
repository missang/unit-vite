<template>
  <view class="">
  <input class="phone-inp" disabled type="text" v-model="tel" placeholder="请输入电话号码">
  <view class="flex-box-x">

    <view class="dial">
      <view class="dial_list flex-xy-center"
            @click="addPhone(item)"
            v-for="(item,i) in list"
            :key="i">

        <template v-if="!isNaN(item.id)">
          {{item.name}}
        </template>

        <template v-if="item.id == 'left'">
          <view class="flex-box-y dial_list_b">
            <view class="dial_list_b">{{item.name}}</view>
            <view class="dial_list_txt">个人设置</view>
          </view>
        </template>

        <template v-if="item.id == 'right'">

          <view class="flex-box-y dial_list_b">
            <view class="dial_list_b">{{item.name}}</view>
            <view class="dial_list_txt">粘贴</view>
          </view>
        </template>

        <template v-if="item.id == 'close'">
          <text class="iconfont icon-xiala dial_list_icon"></text>
        </template>

        <template v-if="item.id == 'phone'">
          <image class="phone"
                 src="@/static/phone/phone.png"></image>
        </template>
        <template v-if="item.id == 'del'">
          <text class="iconfont icon-backspace dial_list_icon"></text>

        </template>
      </view>
    </view>
  </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [{
        id: "1",
        name: "1",
      },
      {
        id: "2",
        name: "2",
      },
      {
        id: "3",
        name: "3",
      },
      {
        id: "4",
        name: "4",
      },
      {
        id: "5",
        name: "5",
      },
      {
        id: "6",
        name: "6",
      },
      {
        id: "7",
        name: "7",
      },
      {
        id: "8",
        name: "8",
      },
      {
        id: "9",
        name: "9",
      },
      {
        id: "left",
        name: "*",
      },
      {
        id: "0",
        name: "0",
      },
      {
        id: "right",
        name: "#",
      },
      {
        id: "close",
        name: "",
      },
      {
        id: "phone",
        name: "",
      },
      {
        id: "del",
        name: "",
      }
      ],
      tel:'',
      phone: [],
    }
  },
  onLoad() {

  },
  methods: {
    //点击数字键
    addPhone(item) {
      if (!isNaN(item.id)) {
        this.phone.push(item.name)
        this.tel +=item.id
      } else {
        switch (item.id) {
          case 'left':
            break;
          case 'right':
            break;

          case 'close':
            break;

          case 'phone':

            if (this.phone.length == 11) {
              let that = this;
              uni.makePhoneCall({
                phoneNumber: that.phone.join(""),
                success: function(res) {
                  console.log("makePhoneCall success");
                },
                fail: function(res) {
                  uni.showToast({
                    icon: "none",
                    title: res
                  });
                },
                complete: function(res) {
                }
              });
            }
            break;

          case 'del':
            this.delPhone()
            break;
        }
        // this.phone.push(parseInt(item.name))
      }
      this.returnPhone()
      // console.log(this.phone)
    },
    //删除键
    delPhone() {
      this.phone.pop()
      this.tel= this.tel.substr(0, this.tel.length - 1);
      this.returnPhone()
    },
    //清除全部
    delAll() {
      this.phone = []
      this.returnPhone()
    },
    //返回数据
    returnPhone() {
      this.$emit("returnPhone", this.phone)
    }
  },
}
</script>

<style lang="less" scoped>
.dial {
  display: grid;
  grid-template-columns: 139rpx 139rpx 139rpx;
  grid-template-rows: 139rpx 139rpx 139rpx 139rpx;
  grid-gap: 29rpx 89rpx;
  margin: 0 auto;
  background: #ffffff;

  .dial_list {
    width: 116rpx;
    height: 116rpx;
    font-size: 50rpx;
    color: #333333;
    // line-height: 139rpx;
    text-align: center;
    background: #f6f6f6;
    border-radius: 50%;
    overflow: hidden;
    font-weight: bold;
  }

  .dial_list:active {
    color: #2c7ffb;
    background: #2c7ffb;
    background: rgba(44, 127, 251, 0.1);
  }
}
.dial_list_b {
  font-size: 40rpx;
}
.dial_list_txt {
  font-size: 24rpx;
  font-weight: 400;
}
.phone {
  width: 100%;
  height: 100%;
}
.dial_list_icon {
  font-size: 28px;
}
.phone-inp{
  font-size: 44rpx;
  margin: 32rpx auto 46rpx;
  text-align: center;
}
</style>
