export default {
  info(msg) {
    uni.showToast({
      title: msg,
      position: 'center',
      icon: 'none',
      duration: 1500
    })
  },
  success(msg) {
    uni.showToast({
      title: msg,
      position: 'center',
      icon: 'success',
      duration: 1500
    })
  },
  error(msg,time) {
    uni.showToast({
      title: msg,
      position: 'center',
      icon: 'none',
      duration: time || 1500 
    })
  },
  loading(msg) {
    uni.showLoading({
      title: msg,
      mask: true
    })
  },
  hideloading() {
    uni.hideLoading()
  },
  hide() {
    uni.hideToast()
  }
}
