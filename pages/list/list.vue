<template>
	<view>
		<scroll-view scroll-x="true" class="navs scroll-view_H">
			<view v-for="(item,index) in navs" :key="item.id" @click="navClik(index)" :id="item.id" class="scroll-view-item_H"
			 :class="item.actions" >
				{{item.name}}
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
import {friendlyDate } from '@/common/util.js';
export default {
	data() {
		return {
			navs: [
				{name: "最新",id: '123',actions: 'off'},
				{name: "大公司",id: '115',actions: 'off'},
				{name: "内容",id: '451',actions: 'off'},
				{name: "消费",id: '789',actions: 'off'},
				{name: "娱乐",id: '12',actions: 'off'},
				{name: "区块链",id: '14',actions: 'off'}
			],
			newlist: [],
			tabIndex: 0
			
		}
	},
	onLoad: function() {
		
	},
	methods: {
		navClik(index) {
			for(let i in this.navs) {
				if(index === parseInt(i)) {
					this.navs[i].actions = 'lists';
				} else {
					this.navs[i].actions = 'off';
				}
			}
		},
		
	}
}
</script>

<style>
	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}
	.scroll-view-item_H {
		display: inline-block;
		width: 20%;
		height: 90upx;
		margin: 0upx 4upx;
		line-height: 100upx;
		text-align: center;
		font-size: 36upx;
	}
	.navs {
		border-bottom: 1upx solid #87CEEB;
	}
	.lists {
		background: #87CEEB;
		color: #fff;
	}
</style>
