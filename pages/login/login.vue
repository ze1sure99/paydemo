<template>
	<view>
		<button open-type="getUserInfo" @tap="login">登陆系统</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
              login:function(){
				  let me = this;
				  let code;
				  uni.login({
				  			success: function(res) {
				  			 me.code = res.code;
				  			},
							
				  	});
				  uni.getUserProfile({
					//code为小程序的临时登陆凭证
				  	desc:'获取用户信息',
					success:function(res){
						let nickname = res.userInfo.nickName;
						let avatarUrl = res.userInfo.avatarUrl;
						uni.request({
							url: me.url.wxLogin,
								method: "POST",
								data: {
							   "code": me.code,
							   "nickname": nickname,
							   "photo": avatarUrl
							},
							success: function(res) {
							   // console.log(res);
							   //令牌
							   let token = res.data.token;
							   //过期时间
							   let expire = res.data.expire;
							   uni.setStorageSync("token",token);
							   uni.setStorageSync("expire",expire);
							   uni.switchTab({
							   	 url:"../index/index"
							})
							}
						})
						// console.log(res);
					}
					
				  });
				}
			}
		}
</script>

<style>

</style>
