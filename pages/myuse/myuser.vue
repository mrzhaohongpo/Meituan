<template>
	<view class="set">
		<view class="tops">
			<view class="tops1" @click="todoinfo">
				<image style="width: 150upx;height: 150upx;margin: 10upx" src="../../static/images/logo.png"></image>
				<text>Hi,您未登录</text>
			</view>
			<span class="iconfont" @click="todoinfo">&#xe663;</span>
		</view>
		<view class="head">
			<p v-for="(item,index) in lists" :key="item.id">
				<view :key="index" class="headleft">
					<rich-text name="i" :nodes="item.icon" class="iconfont icons"></rich-text>
					<text>{{item.text}}</text>
				</view>
				<i class="iconfont">&#xe663;</i>
			</p>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			lists: [
				{id: '12', icon: '&#xe708;',text: '收藏图片'},
				{id: '13', icon: '&#xe6c3;',text: '收藏图集'},
				{id: '125', icon: '&#xe642;',text: '管理图片'},
				{id: '16', icon: '&#xe68a;',text: '上传图片'},
				{id: '134', icon: '&#xe75d;',text: '关于'},
				{id: '153', icon: '&#xe615;',text: '账号管理'}
			]
		}
	},
	methods: {
		todoinfo() {
			uni.navigateTo({
				url: '/pages/myuse/login'
			})
		}
	}
	
}
</script>

<style>
	.tops {
		color: #fff;
		font-size: 36upx;
		background: skyblue;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.tops1 {
		display: flex;
		align-items: center;
	}
	.head {
		margin-top: 12upx;
	}
	.head p {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #fff;
		height: 89upx;
		line-height: 89upx;
	}
	.head p:nth-child(even){
		margin-bottom: 12upx;
	}
	.head p:nth-child(odd) {
		border-bottom:2upx solid #ccc;
	}
	.head .icons {
		display: inline-block;
		font-size: 50upx;
		margin:0upx 10upx;
		color: #F77412;
	}
	.head .headleft {
		display: flex;
		align-items: center;
	}
</style>
