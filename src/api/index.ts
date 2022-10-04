
/**
 * 引入所有api
 */
const modules = import.meta.globEager('./modules/*.ts')
let apiModules = {}
Object.keys(modules).forEach((key) => {
  apiModules = { ...apiModules, ...modules[key].default }
})
export default {
  ...apiModules,
}
