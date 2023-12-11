<template>
	<view class="video">
		<button @tap="recordVideo">拍摄视频</button>
		<view class="">
			{{ viderUrl }}
		</view>
	</view>
</template>

<script lang="ts" setup>
	import { ref } from 'vue'

	const viderUrl = ref('')

	const recordVideo = () => {
		console.log(123123)
		uni.chooseVideo({
			count: 1,//只录制一个视频
			sourceType: ['album', 'camera'],//开启视频相机
			maxDuration: 5,//时长30s
			mediaType: ['video'],//类型为视频
			quality: 'high',
			compressed: false,
			success: res => {
				console.log('选择视频成功', res);
				viderUrl.value = res.tempFilePath
			},
			fail: err => {
				console.error('选择视频失败', err);
			}
		})
	}
</script>

<style scoped>
	.video {
		margin-top: 500rpx;
	}
</style>