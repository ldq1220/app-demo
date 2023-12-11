<template>
	<!-- 1.轮播图布局-->
	<swiper class="swiper" circular="true" :autoplay="autoplay" :interval="interval" indicator-dots="true"
		indicator-color='#c1e6f6' indicator-active-color='#62c9f4'>
		<!-- 轮播图1-->
		<swiper-item @touchmove.stop="stopTouchMove">
			<video src="https://xjc.demo.hongcd.com/uploads/20230214/84e165388f5bfdb1550522f50f5a57bb.mp4"
				:show-center-play-btn="false" :controls="controls" @play="playVideo()" @pause="endVideo(false)"
				@ended="endVideo()"></video>

			<cover-view v-show="isShow"
				style="z-index:99;position:fixed;width:100%;height:396rpx;border-radius: 10rpx;top:0;left:0;display:flex; justify-content:center; align-items:center;background-color: rgba(0, 0, 0, 0.5);">
				<image @click="plays()" src="../../static/imgs/bofang.png" style="width: 30px;height: 30px;"></image>
			</cover-view>

			<view class="infos">
				<view class="desc">在门房住了四年的母子，希望为热心邻居送点补给品</view>
				<view class="btn" @click="helpThemFun()">认领心愿</view>
			</view>
		</swiper-item>

		<!-- 轮播图2-->
		<swiper-item @touchmove.stop="stopTouchMove">
			<video src="https://xjc.demo.hongcd.com/uploads/20230214/3f26d950ac286eecedba49f5295f0819.mp4"
				:show-center-play-btn="false" :controls="controls" @play="playVideo()" @pause="endVideo(false)"
				@ended="endVideo()"></video>

			<cover-view v-show="isShow"
				style="z-index:99;position:fixed;width:100%;height:396rpx;border-radius: 10rpx;top:0;left:0;display:flex; justify-content:center; align-items:center;background-color: rgba(0, 0, 0, 0.5);">
				<image @click="plays()" src="../../static/imgs/bofang.png" style="width: 30px;height: 30px;"></image>
			</cover-view>

			<view class="infos">
				<view class="desc">在门房住了四年的母子，希望为热心邻居送点补给品</view>
				<view class="btn" @click="helpThemFun()">认领心愿</view>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		data() {
			return {
				//2.轮播图数据
				autoplay: true,
				interval: 3000,
				controls: false,
				isShow: true,
			}
		},

		methods: {
			//3.轮播图事件
			plays() {
				this.controls = true
				this.isShow = false
				this.stopTouchMove = true
				// this.VideoContext.play()
			},
			//video播放时，隐藏覆盖层，不能滑动，不能轮播
			playVideo() {
				this.isShow = false
				this.stopTouchMove = true
				this.autoplay = false
			},

			endVideo() {
				this.controls = false
				this.isShow = true
				this.stopTouchMove = false
				this.autoplay = true
			},

			//轮播禁止手动滑动
			stopTouchMove() {
				return false;
			},

		}
	}
</script>