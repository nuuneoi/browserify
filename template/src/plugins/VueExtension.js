import config from 'src/config'

exports.install = function(Vue, options) {
  Vue.prototype.$configs = function(configType) {
    return config[configType]
  }

  Vue.prototype.$config = function(configType, key) {
    return config[configType][key]
  }
}
