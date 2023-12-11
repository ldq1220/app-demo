if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const ON_UNLOAD = "onUnload";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onUnload = /* @__PURE__ */ createHook(ON_UNLOAD);
  const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
    __name: "my",
    setup(__props) {
      const viderUrl = vue.ref("");
      const recordVideo = () => {
        formatAppLog("log", "at pages/my/my.vue:16", 123123);
        uni.chooseVideo({
          count: 1,
          //只录制一个视频
          sourceType: ["album", "camera"],
          //开启视频相机
          maxDuration: 5,
          //时长30s
          mediaType: ["video"],
          //类型为视频
          quality: "high",
          compressed: false,
          success: (res) => {
            formatAppLog("log", "at pages/my/my.vue:25", "选择视频成功", res);
            viderUrl.value = res.tempFilePath;
          },
          fail: (err) => {
            formatAppLog("error", "at pages/my/my.vue:29", "选择视频失败", err);
          }
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "video" }, [
          vue.createElementVNode("button", { onClick: recordVideo }, "拍摄视频"),
          vue.createElementVNode(
            "view",
            { class: "" },
            vue.toDisplayString(viderUrl.value),
            1
            /* TEXT */
          )
        ]);
      };
    }
  });
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2f1ef635"], ["__file", "F:/demo/imitate-douyin/app-demo/pages/my/my.vue"]]);
  const _sfc_main$2 = {
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
      const _this = vue.getCurrentInstance();
      const state = vue.reactive({
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
          uni.createVideoContext("video__0", _this),
          uni.createVideoContext("video__1", _this),
          uni.createVideoContext("video__2", _this)
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
            uni.createVideoContext(`video__${state.displayIndex}`, _this).play();
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
        const video = uni.createVideoContext(`video__${state.displayIndex}`, _this);
        if (state.isPlaying) {
          video.pause();
          state.isPlaying = false;
        } else {
          video.play();
          state.isPlaying = true;
        }
      };
      const playSeeked = (value) => {
        const video = uni.createVideoContext(`video__${state.displayIndex}`, _this);
        video.seek(value);
      };
      vue.watch(
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
      onUnload(() => {
        clearTimeout(loadTimer);
      });
      expose({
        initSwiperData,
        togglePlay,
        playSeeked
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createElementVNode("swiper", {
            class: "m-tiktok-video-swiper",
            circular: "",
            onChange: swiperChange,
            current: state.current,
            vertical: true,
            duration: "300"
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(state.displaySwiperList, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("swiper-item", { key: index }, [
                  vue.createElementVNode("view", {
                    class: "swiper-item",
                    onClick: handleClick
                  }, [
                    index === 0 || !state.isFirstLoad ? (vue.openBlock(), vue.createElementBlock("video", {
                      key: 0,
                      class: "m-tiktok-video-player",
                      src: item.src,
                      id: `video__${index}`,
                      controls: __props.controls,
                      "show-center-play-btn": __props.controls,
                      "object-fit": item.objectFit,
                      autoplay: false,
                      loop: __props.loop,
                      "custom-cache": false,
                      onEnded: ended,
                      onControlstoggle: controlstoggle,
                      onPlay,
                      onError: _cache[0] || (_cache[0] = ($event) => emits("error")),
                      onLoadedmetadata: ($event) => loadVideoData($event, item)
                    }, null, 40, ["src", "id", "controls", "show-center-play-btn", "object-fit", "loop", "onLoadedmetadata"])) : vue.createCommentVNode("v-if", true),
                    !__props.controls && state.displayIndex === index ? (vue.openBlock(), vue.createElementBlock("cover-view", {
                      key: 1,
                      class: "m-tiktok-video-play-btn",
                      onClick: togglePlay
                    }, [
                      vue.createElementVNode(
                        "text",
                        {
                          class: vue.normalizeClass(["m-tiktok-video-iconfont video-icon", { active: !state.isPlaying }])
                        },
                        "",
                        2
                        /* CLASS */
                      )
                    ])) : vue.createCommentVNode("v-if", true),
                    item.poster && state.displayIndex != index ? (vue.openBlock(), vue.createElementBlock("image", {
                      key: 2,
                      src: item.poster,
                      class: "m-tiktok-video-poster",
                      mode: "aspectFit"
                    }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true),
                    vue.renderSlot(_ctx.$slots, "default", { item }),
                    vue.createCommentVNode(' <view style="color: #fff;font-style: 20px;position: relative;left: 50%;top: 50%;">{{item.id}}</view>\r\n					<img src="https://pic35.photophoto.cn/20150511/0034034892281415_b.jpg" alt=""\r\n						style="width: 200px;height: 200px;" /> ')
                  ])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ], 40, ["current"])
        ]);
      };
    }
  };
  const videoPlayer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "F:/demo/imitate-douyin/app-demo/components/videoSwiper/videoSwiper.vue"]]);
  var time = null;
  const _sfc_main$1 = {
    props: ["myList"],
    components: {
      videoPlayer
    },
    name: "video-list",
    data() {
      return {
        list: [
          {
            src: "https://xjc.demo.hongcd.com/uploads/20230214/84e165388f5bfdb1550522f50f5a57bb.mp4",
            id: "1",
            name: "开玩笑的鸡毛",
            desc: "这里是简介内容"
          },
          {
            src: "https://xjc.demo.hongcd.com/uploads/20230214/3f26d950ac286eecedba49f5295f0819.mp4",
            id: "2",
            name: "开玩笑的鸡毛",
            desc: "这里是简介内容"
          },
          {
            src: "https://xjc.demo.hongcd.com/uploads/20230215/8b5ac0420fe61e2f9660d7b8af998f7b.mp4",
            id: "3",
            name: "开玩笑的鸡毛",
            desc: "这里是简介内容"
          },
          {
            src: "https://xjc.demo.hongcd.com/uploads/20210128/d932b2d78cebb0a8cb8f9a6216790dfb.mp4",
            id: "4",
            name: "开玩笑的鸡毛",
            desc: "这里是简介内容"
          },
          {
            src: "https://xjc.demo.hongcd.com/uploads/20210128/0c64cbeea28b10c06eee8728c762449e.mp4",
            id: "5",
            name: "开玩笑的鸡毛",
            desc: "这里是简介内容"
          },
          {
            src: "https://xjc.demo.hongcd.com/uploads/20210327/1b72e1b6153cd29df07f5449991e8083.mp4",
            id: "6",
            name: "开玩笑的鸡毛",
            desc: "这里是简介内容"
          },
          {
            src: "https://xjc.demo.hongcd.com/uploads/20230214/7e1a0baaebc4e656bbbfbc44d7a55a60.mp4",
            id: "7",
            name: "开玩笑的鸡毛",
            desc: "这里是简介内容"
          }
        ],
        pageStartY: 0,
        pageEndY: 0,
        screenHeight: 0
      };
    },
    mounted() {
      uni.getSystemInfo({
        success: (res) => {
          formatAppLog("log", "at pages/video/video.vue:75", "首页获取到的页面高度:windowHeight", res.windowHeight);
          this.screenHeight = res.windowHeight;
          formatAppLog("log", "at pages/video/video.vue:77", "this.screenHeight--------", this.screenHeight);
        }
      });
    },
    methods: {
      change(res) {
        clearTimeout(time);
        this.page = res.detail.current;
        time = setTimeout(() => {
          if (this.pageStartY > this.pageEndY) {
            formatAppLog("log", "at pages/video/video.vue:87", "向上滑动" + this.page);
            this.$refs.player[this.page].playVideo();
            this.$refs.player[this.page - 1].pauseVideo();
            this.pageStartY = 0;
            this.pageEndY = 0;
          } else {
            formatAppLog("log", "at pages/video/video.vue:93", "向下滑动" + this.page);
            this.$refs.player[this.page].playVideo();
            this.$refs.player[this.page + 1].pauseVideo();
            this.pageStartY = 0;
            this.pageEndY = 0;
          }
        }, 1);
      },
      touchStart(res) {
        this.pageStartY = res.changedTouches[0].pageY;
        formatAppLog("log", "at pages/video/video.vue:103", this.pageStartY);
      },
      touchEnd(res) {
        this.pageEndY = res.changedTouches[0].pageY;
        formatAppLog("log", "at pages/video/video.vue:107", this.pageEndY);
      }
    },
    watch: {
      myList() {
        this.list = this.myList;
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "swiper",
      {
        class: "swiper",
        style: vue.normalizeStyle({ height: $data.screenHeight + "px" }),
        vertical: true,
        onChange: _cache[0] || (_cache[0] = (...args) => $options.change && $options.change(...args)),
        onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchStart && $options.touchStart(...args)),
        onTouchend: _cache[2] || (_cache[2] = (...args) => $options.touchEnd && $options.touchEnd(...args))
      },
      [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.list, (item) => {
            return vue.openBlock(), vue.createElementBlock(
              "swiper-item",
              {
                style: vue.normalizeStyle({ height: $data.screenHeight + "px" }),
                key: item.id,
                class: "swiper-item"
              },
              [
                vue.createCommentVNode(' <videoPlayer :video="item" :screenHeight="screenHeight" ref="player"></videoPlayer> '),
                vue.createCommentVNode(" {{item.id}} "),
                vue.createElementVNode("video", {
                  src: item.src,
                  autoplay: true,
                  style: { "width": "100%", "height": "100vh" }
                }, null, 8, ["src"])
              ],
              4
              /* STYLE */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      36
      /* STYLE, HYDRATE_EVENTS */
    );
  }
  const PagesVideoVideo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "F:/demo/imitate-douyin/app-demo/pages/video/video.vue"]]);
  __definePage("pages/my/my", PagesMyMy);
  __definePage("pages/video/video", PagesVideoVideo);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("warn", "at App.vue:4", "当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！");
      formatAppLog("log", "at App.vue:5", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:8", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:11", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "F:/demo/imitate-douyin/app-demo/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
