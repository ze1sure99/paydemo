import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
let baseUrl = "http://localhost:8080/renren-fast"
//prototype可以给vue对象添加属性和行为
Vue.prototype.url={
     "wxLogin": baseUrl+"/app/wx/login",
	 "searchUserOrderList":baseUrl + "/app/order/searchUserOrderList",
	 "microAppPayOrder":baseUrl+"/app/wx/microAppPayOrder"
}
// #endif
