<template>
	<view id="login">
		<view class="login1">
			<view class="login_wid">账号</view>
			<input type="text" placeholder="请输入人账号">
		</view>
		<view  class="login2">
			<view class="login_wid">密码</view>
			<input type="text" :password="ispassword" placeholder="请输入密码">
			<rich-text class="iconlogo iconfont" name="i" @click="iconlogo" :nodes="icon" :class="iconSe"></rich-text>
		</view>
		<button type="primary" hover-class="hovebtn" class="loginto">登陆</button>
		<button type="warn" class="loginout">注销</button>
	</view>
</template>

<script>
export default {
	name: 'login',
	data() {
		return {
			ispassword: true,
			icon: '&#xe77d;',
			iconSe: 'null'
		}
	},
	methods: {
		iconlogo() {
			//密码 --眼睛切换
			if(this.icon === '&#xe77d;') {
				this.icon = '&#xe67d;';
				this.iconSe = 'iconSe';
				this.ispassword = false;
			} else if(this.icon === '&#xe67d;') {
				this.icon = '&#xe77d;';
				this.iconSe = null;
				this.ispassword = true;
			}
			console.log(this.icon);
		}
	}
}
</script>

<style>
	.login1,.login2 {
		display: flex;
		align-items: center;
		height: 100upx;
		background: #FFFFFF;
		font-size: 36upx;
		margin: 20upx 0upx;
		padding-left: 10upx;
		padding-right: 10upx;
	}
	.login2 {
		justify-content: space-between;
	}
	#login .login2 {
		margin-bottom: 80upx;
	}
	#login .login1 {
		margin-top: 80upx;
	}
	.login1 input,.login2 input {
		flex: 1;
	}
	.iconSe {
		color: #F56514;
	}
	.iconlogo {
		display: inline-block;
		font-size: 45upx;
		padding-left: 10upx;
		padding-right: 10upx;
	}
	.login_wid {
		width: 80upx;
		padding: 10upx;
	}
	#login .hovebtn {
		background: #F56514;
	}
	.loginto {
		margin-bottom: 20upx;
	}
</style>
