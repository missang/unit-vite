export default {
  set(name, data) {
    try {
      uni.setStorageSync(name, data)
    } catch (err) {
      console.log(err)
    }
  },
  get(name) {
    let data
    try {
      data = uni.getStorageSync(name)
    } catch (err) {
      console.log(err)
    }
    return data
  },
  remove(name) {
    try {
      uni.removeStorageSync(name)
    } catch (err) {
      console.log(err)
    }
  },
  has(name) {
    let val
    try {
      const res = uni.getStorageInfoSync()
      val = res.keys.includes(name)
    } catch (e) {
      console.log(e)
    }
    return val
  },

  clear(name) {
    try {
      uni.clearStorageSync()
    } catch (err) {
      console.log(err)
    }
  }
}
