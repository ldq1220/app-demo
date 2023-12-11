"use strict";
const common_vendor = require("./common/vendor.js");
const _sfc_main = {
  __name: "videoSwiper",
  props: {
    /**
     * 视频列表
     */
    videoList: {
      type: Array,
      default: () => []
    },
    /**
     * 是否循环播放一个视频
     */
    loop: {
      type: Boolean,
      default: true
    },
    /**
     * 显示原生控制栏
     */
    controls: {
      type: Boolean,
      default: false
    },
    /**
     * 是否自动播放
     */
    autoplay: {
      type: Boolean,
      default: true
    },
    /**
     * 是否自动滚动播放
     */
    autoChange: {
      type: Boolean,
      default: false
    },
    /**
     * 滚动加载阈值（即播放到剩余多少个之后触发加载更多
     */
    loadMoreOffsetCount: {
      type: Number,
      default: 2
    },
    /**
     * 视频自动自适应平铺模式
     * 竖屏cover，横屏自适应
     */
    autoObjectFit: {
      type: Boolean,
      default: true
    }
  },
  emits: [
    "play",
    "error",
    "loadMore",
    "change",
    "controlstoggle",
    "click",
    "ended"
  ],
  setup(__props, { expose, emit: emits }) {
    const props = __props;
    const _this = common_vendor.getCurrentInstance();
    const state = common_vendor.reactive({
      originList: [],
      // 源数据
      displaySwiperList: [],
      // swiper需要的数据
      displayIndex: 0,
      // 用于显示swiper的真正的下标数值只有：0，1，2。
      originIndex: 0,
      // 记录源数据的下标
      current: 0,
      oid: 0,
      videoContexts: [],
      isFirstLoad: true,
      isPlaying: false
    });
    const initVideoContexts = () => {
      state.videoContexts = [
        common_vendor.index.createVideoContext("video__0", _this),
        common_vendor.index.createVideoContext("video__1", _this),
        common_vendor.index.createVideoContext("video__2", _this)
      ];
    };
    const onPlay = (e) => {
      state.isPlaying = true;
      initFirstLoad();
      emits("play", e);
    };
    function handleClick(e) {
      emits("click", e);
    }
    function ended() {
      if (props.autoChange) {
        if (state.displayIndex < 2) {
          state.current = state.displayIndex + 1;
        } else {
          state.current = 0;
        }
      }
      emits("ended");
    }
    function initSwiperData(originIndex = state.originIndex) {
      const originListLength = state.originList.length;
      const displayList = [];
      displayList[state.displayIndex] = state.originList[originIndex];
      displayList[state.displayIndex - 1 == -1 ? 2 : state.displayIndex - 1] = state.originList[originIndex - 1 == -1 ? originListLength - 1 : originIndex - 1];
      displayList[state.displayIndex + 1 == 3 ? 0 : state.displayIndex + 1] = state.originList[originIndex + 1 == originListLength ? 0 : originIndex + 1];
      state.displaySwiperList = displayList;
      if (state.oid >= state.originList.length) {
        state.oid = 0;
      }
      if (state.oid < 0) {
        state.oid = state.originList.length - 1;
      }
      state.videoContexts.map((item) => item == null ? void 0 : item.stop());
      setTimeout(() => {
        if (props.autoplay) {
          common_vendor.index.createVideoContext(`video__${state.displayIndex}`, _this).play();
        }
      }, 500);
      emits("change", {
        index: originIndex,
        detail: state.originList[originIndex]
      });
      var pCount = state.originList.length - props.loadMoreOffsetCount;
      if (originIndex == pCount) {
        emits("loadMore");
      }
    }
    function swiperChange(event) {
      const {
        current
      } = event.detail;
      state.isFirstLoad = false;
      const originListLength = state.originList.length;
      if (state.displayIndex - current == 2 || state.displayIndex - current == -1) {
        state.originIndex = state.originIndex + 1 == originListLength ? 0 : state.originIndex + 1;
        state.displayIndex = state.displayIndex + 1 == 3 ? 0 : state.displayIndex + 1;
        state.oid = state.originIndex - 1;
        initSwiperData(state.originIndex);
      } else if (state.displayIndex - current == -2 || state.displayIndex - current == 1) {
        state.originIndex = state.originIndex - 1 == -1 ? originListLength - 1 : state.originIndex - 1;
        state.displayIndex = state.displayIndex - 1 == -1 ? 2 : state.displayIndex - 1;
        state.oid = state.originIndex + 1;
        initSwiperData(state.originIndex);
      }
    }
    function controlstoggle(e) {
      emits("controlstoggle", e);
    }
    const togglePlay = () => {
      const video = common_vendor.index.createVideoContext(`video__${state.displayIndex}`, _this);
      if (state.isPlaying) {
        video.pause();
        state.isPlaying = false;
      } else {
        video.play();
        state.isPlaying = true;
      }
    };
    const playSeeked = (value) => {
      const video = common_vendor.index.createVideoContext(`video__${state.displayIndex}`, _this);
      video.seek(value);
    };
    common_vendor.watch(
      () => props.videoList,
      () => {
        var _a, _b;
        if ((_a = props.videoList) == null ? void 0 : _a.length) {
          state.originList = props.videoList;
          if (state.isFirstLoad || !((_b = state.videoContexts) == null ? void 0 : _b.length)) {
            initSwiperData();
            initVideoContexts();
          }
        }
      },
      {
        immediate: true
      }
    );
    let loadTimer = null;
    const initFirstLoad = () => {
      if (state.isFirstLoad) {
        loadTimer = setTimeout(() => {
          state.isFirstLoad = false;
          clearTimeout(loadTimer);
        }, 5e3);
      }
    };
    const loadVideoData = ($event, item) => {
      if (item.objectFit) {
        return;
      }
      if (!props.autoObjectFit) {
        return;
      }
      if ($event.detail.width < $event.detail.height) {
        item.objectFit = "cover";
      } else {
        item.objectFit = "contain";
      }
    };
    common_vendor.onUnload(() => {
      clearTimeout(loadTimer);
    });
    expose({
      initSwiperData,
      togglePlay,
      playSeeked
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(state.displaySwiperList, (item, index, i0) => {
          return common_vendor.e({
            a: index === 0 || !state.isFirstLoad
          }, index === 0 || !state.isFirstLoad ? {
            b: item.src,
            c: `video__${index}`,
            d: __props.controls,
            e: __props.controls,
            f: item.objectFit,
            g: __props.loop,
            h: common_vendor.o(ended, index),
            i: common_vendor.o(controlstoggle, index),
            j: common_vendor.o(onPlay, index),
            k: common_vendor.o(($event) => emits("error"), index),
            l: common_vendor.o(($event) => loadVideoData($event, item), index)
          } : {}, {
            m: !__props.controls && state.displayIndex === index
          }, !__props.controls && state.displayIndex === index ? {
            n: !state.isPlaying ? 1 : "",
            o: common_vendor.o(togglePlay, index)
          } : {}, {
            p: item.poster && state.displayIndex != index
          }, item.poster && state.displayIndex != index ? {
            q: item.poster
          } : {}, {
            r: "d-" + i0,
            s: common_vendor.r("d", {
              item
            }, i0),
            t: common_vendor.o(handleClick, index),
            v: index
          });
        }),
        b: common_vendor.o(swiperChange),
        c: state.current
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/demo/imitate-douyin/app-demo/components/videoSwiper/videoSwiper.vue"]]);
exports.MiniProgramPage = MiniProgramPage;
