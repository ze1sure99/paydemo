<template>
	<view class="page" >
		<view class="order" v-for="one in list" :key="one">
			<view class="line-1">
				<text>订单号：{{one.code}}</text>
				<text>{{one.status}}</text>
			</view>
			<view class="line-2">
				<text>假设这里是商品简要信息</text>
			</view>
			<view class="line-3">
				<text>金额：{{one.amount}}</text>
				<button class="pay-btn" type="primary" v-if="one.status=='未付款'">付款</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			}
		},
		methods: {
			
		},
		onShow:function(){
			let me = this;
			uni.request({
				url: me.url.searchUserOrderList,
				method:"POST",
				header:{
					"token":uni.getStorageSync("token")
				},
				data:{
					"page":1,
					"length":20
				},
				success:function(res){
					// console.log(res);
					let list = res.data.list;
					for(let one of list){
						if(one.status== 1){
							one.status="未付款"
						}
						else if(one.status== 2){
							one.status="已付款"
						}
						else if(one.status== 3){
							one.status="已发货"
						}
						else if(one.status== 4){
							one.status="已签收"
						}
					}
					me.list=list
				}
			})
		}
	}
</script>

<style>
    .page{
		padding: 10px;
	}
	.order{
		padding: 10px;
		border-bottom: solid 1px #e0e0e0;
		font-size: 16px;
	}
	.line-1{
		display: flex;
		justify-content: space-between;
		padding-bottom: 5px;
	}
	.line-2{
		padding-bottom: 5px;
	}
	.line-3{
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}
	.pay-btn{
		margin: 0;
		font-size: 14px;
		line-height: 2;
	}
</style>
