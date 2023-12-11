"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // F:/demo/imitate-douyin/app-demo/unpackage/dist/dev/.nvue/videoSwiper.js
  var import_vue = __toESM(require_vue());
  var ON_UNLOAD = "onUnload";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  var createHook = (lifecycle) => (hook, target = (0, import_vue.getCurrentInstance)()) => {
    !import_vue.isInSSRComponentSetup && (0, import_vue.injectHook)(lifecycle, hook, target);
  };
  var onUnload = /* @__PURE__ */ createHook(ON_UNLOAD);
  var _style_0 = { "m-tiktok-video-iconfont": { "": { "fontFamily": "m-tiktok-play-icon" } }, "m-tiktok-video-swiper": { "": { "width": "750rpx", "height": "750rpx" } }, "m-tiktok-video-player": { "": { "width": "750rpx", "height": "750rpx" } }, "swiper-item": { ".m-tiktok-video-swiper ": { "position": "relative", "backgroundColor": "#FF0000" } }, "m-tiktok-video-poster": { ".m-tiktok-video-swiper ": { "backgroundColor": "#000000", "position": "absolute", "top": 0, "left": 0, "right": 0, "bottom": 0 } }, "m-tiktok-video-play-btn": { ".m-tiktok-video-swiper ": { "position": "absolute", "top": 0, "left": 0, "right": 0, "bottom": 0, "zIndex": 1, "display": "flex", "alignItems": "center", "justifyContent": "center" } }, "video-icon": { ".m-tiktok-video-swiper .m-tiktok-video-play-btn ": { "fontSize": 50, "color": "rgba(255,255,255,0.8)", "opacity": 0 }, ".m-tiktok-video-swiper .m-tiktok-video-play-btn .active": { "opacity": 1 } }, "@FONT-FACE": [{ "fontFamily": "m-tiktok-play-icon", "src": 'url(data:font/woff2;charset=utf-8;base64,d09GMgABAAAAAAJ0AA0AAAAABlgAAAIiAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP0ZGVE0cGh4GYACCQhEICkhaCwoAATYCJAMQBCAFhQIHLxt4BcieBXbLR4jiyygbC491Mg0vz9JsPPz/ft/2ufeMmCQP9fXfRhxvMKHjkcSsTkqWplJJqpFFfn79mr4NG5fvwujI+EPeZCbudGJcy6oVklRVp8IAdgMJUqD853ceuhm3iSafWxNoC0bbskAmUGABTlrDAgwsC+xJ3/SJf3DecLgpCpyFgDcXlRJ8uiufSVcHBjENilBVIVGQKS50UZ6U1+ApeD7+6kcvRVcl2fZub1Q8/BfJG9VHbUp9J0UAYBWhomIRgUZWYFHOKkgp+FFsyVvmRkB0E4AooAg/DwF/49FSQIJeBMbBDIAEQIzfDW+OPVHX48vXUy26fUwfJnN0+tW5bLx3+dz5fHT61rQEIBDc77r579ZI8793IDWgftfb8/q83gC9Cggqvex6gvqcDoBMGojkOvpX4wgU9OtHC2DcOwgwoYpA6LWDQNHjDgJVr8cCpF7PBOgy4JUA3Xq9BYF+29EgMGAiLlSRfVgDlgyjlmQx7JSsRgVQYkeyy7RLstuoF7Lfid+qAWtxbiWmkbDEVgmyA2hRBHx6jOEomxtSuCEvAg5k/U4c0Bh2XJIYfiwLaz88BE9oYgkrKPS0dWGtk7/X7rqFOsU+TZzFM4k9Qx9jOkEXC3iErR+f0LhcASEUC9g0CtaGY3Jrsjf6zPrqiLsTyi1RpN9z3wPOMRaa6+jQAzbblCgVWLpySeZmOVzvLw8uOfSjoLSEEiV7Yg==) format("woff2")', "fontWeight": "normal", "fontStyle": "normal", "fontDisplay": "swap" }] };
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  var _sfc_main = {
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
      const _this = (0, import_vue.getCurrentInstance)();
      const state = (0, import_vue.reactive)({
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
      (0, import_vue.watch)(
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
        const _component_swiper_item = (0, import_vue.resolveComponent)("swiper-item");
        const _component_swiper = (0, import_vue.resolveComponent)("swiper");
        return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("scroll-view", {
          scrollY: true,
          showScrollbar: true,
          enableBackToTop: true,
          bubble: "true",
          style: { flexDirection: "column" }
        }, [
          (0, import_vue.createElementVNode)("view", { class: "swiper_box" }, [
            (0, import_vue.createVNode)(_component_swiper, {
              class: "m-tiktok-video-swiper",
              circular: "",
              onChange: swiperChange,
              current: state.current,
              vertical: true,
              duration: "300"
            }, {
              default: (0, import_vue.withCtx)(() => [
                ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
                  import_vue.Fragment,
                  null,
                  (0, import_vue.renderList)(state.displaySwiperList, (item, index2) => {
                    return (0, import_vue.openBlock)(), (0, import_vue.createBlock)(
                      _component_swiper_item,
                      { key: index2 },
                      {
                        default: (0, import_vue.withCtx)(() => [
                          (0, import_vue.createElementVNode)("view", {
                            class: "swiper-item",
                            onClick: handleClick
                          }, [
                            index2 === 0 || !state.isFirstLoad ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-video", {
                              key: 0,
                              class: "m-tiktok-video-player",
                              src: item.src,
                              id: `video__${index2}`,
                              controls: __props.controls,
                              showCenterPlayBtn: __props.controls,
                              objectFit: item.objectFit,
                              autoplay: false,
                              loop: __props.loop,
                              customCache: false,
                              onEnded: ended,
                              onControlstoggle: controlstoggle,
                              onPlay,
                              onError: _cache[0] || (_cache[0] = ($event) => emits("error")),
                              onLoadedmetadata: ($event) => loadVideoData($event, item)
                            }, null, 40, ["src", "id", "controls", "showCenterPlayBtn", "objectFit", "loop", "onLoadedmetadata"])) : (0, import_vue.createCommentVNode)("v-if", true),
                            (0, import_vue.createElementVNode)("u-text", null, " 123123 "),
                            !__props.controls && state.displayIndex === index2 ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("cover-view", {
                              key: 1,
                              class: "m-tiktok-video-play-btn",
                              onClick: togglePlay
                            }, [
                              (0, import_vue.createElementVNode)(
                                "u-text",
                                {
                                  class: (0, import_vue.normalizeClass)(["m-tiktok-video-iconfont video-icon", { active: !state.isPlaying }])
                                },
                                "\uE607",
                                2
                                /* CLASS */
                              )
                            ])) : (0, import_vue.createCommentVNode)("v-if", true),
                            item.poster && state.displayIndex != index2 ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-image", {
                              key: 2,
                              src: item.poster,
                              class: "m-tiktok-video-poster",
                              mode: "aspectFit"
                            }, null, 8, ["src"])) : (0, import_vue.createCommentVNode)("v-if", true),
                            (0, import_vue.renderSlot)(_ctx.$slots, "default", { item }),
                            (0, import_vue.createCommentVNode)(' <view style="color: #fff;font-style: 20px;position: relative;left: 50%;top: 50%;">{{item.id}}</view> ')
                          ])
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["current"])
          ])
        ]);
      };
    }
  };
  var videoSwiper = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]], ["__file", "F:/demo/imitate-douyin/app-demo/components/videoSwiper/videoSwiper.nvue"]]);

  // F:/demo/imitate-douyin/app-demo/unpackage/dist/dev/.nvue/pages/index/index.js
  var import_vue2 = __toESM(require_vue());
  var _style_02 = { "activite": { "": { "color": "#04c9c3" } }, "content": { "": { "marginTop": "100rpx", "height": "1000rpx", "backgroundColor": "#ff7500", "color": "#ffffff" } }, "scroll-view_H": { "": { "position": "fixed", "top": 0, "left": 0, "whiteSpace": "nowrap", "width": "750rpx", "color": "#CCCCCC", "display": "flex" } }, "video-layer": { "": { "position": "absolute", "right": "24rpx", "bottom": "240rpx", "color": "#ffffff" } }, "video-bottom-area": { "": { "position": "absolute", "left": "40rpx", "bottom": "80rpx", "zIndex": 999 } }, "shop-name": { ".video-bottom-area ": { "color": "#ffffff", "marginBottom": 6 } }, "shop-card": { ".video-bottom-area ": { "width": 160, "height": 80, "backgroundColor": "rgba(255,255,255,0.5)", "borderRadius": 4 } }, "video-side-right": { "": { "position": "absolute", "right": 12, "bottom": 120, "color": "#ffffff", "zIndex": 999 } }, "action-item": { ".video-side-right ": { "position": "relative", "marginBottom": 20, "textAlign": "center" } }, "shop-logo": { ".video-side-right .action-item ": { "width": 40, "height": 40, "borderRadius": 40, "overflow": "hidden" } }, "iconfont": { ".video-side-right .action-item ": { "fontSize": 28 }, ".video-side-right .action-item .action-btn ": { "fontSize": 16 } }, "action-item-text": { ".video-side-right .action-item ": { "fontSize": 12 } }, "action-btn": { ".video-side-right .action-item ": { "position": "absolute", "left": 50, "transform": "translateX(-50%)", "bottom": -8, "width": 20, "height": 20, "borderRadius": 50, "display": "flex", "alignItems": "center", "justifyContent": "center", "backgroundColor": "#ff6600" } }, "action-item-user": { ".video-side-right ": { "marginBottom": 40 } } };
  var _sfc_main2 = {
    __name: "index",
    setup(__props) {
      (0, import_vue2.ref)(0);
      const navIndex = (0, import_vue2.ref)(3);
      const tabBars = (0, import_vue2.ref)([{
        name: "\u540C\u57CE",
        id: "equipment"
      }, {
        name: "\u5546\u5E97",
        id: "expert"
      }, {
        name: "\u5173\u6CE8",
        id: "fault"
      }, {
        name: "\u63A8\u8350\u89C6\u9891",
        id: "defect"
      }]);
      const checkIndex = (index2) => {
        navIndex.value = index2;
      };
      const tabChange = (e) => {
        navIndex.value = e.detail.current;
      };
      const mTikTokRef = (0, import_vue2.ref)();
      const state = (0, import_vue2.reactive)({
        videoList: [
          {
            src: "https://xjc.demo.hongcd.com/uploads/20230214/84e165388f5bfdb1550522f50f5a57bb.mp4",
            id: "1",
            name: "\u5F00\u73A9\u7B11\u7684\u9E21\u6BDB",
            desc: "\u8FD9\u91CC\u662F\u7B80\u4ECB\u5185\u5BB9"
          },
          {
            src: "https://xjc.demo.hongcd.com/uploads/20230214/3f26d950ac286eecedba49f5295f0819.mp4",
            id: "2",
            name: "\u5F00\u73A9\u7B11\u7684\u9E21\u6BDB",
            desc: "\u8FD9\u91CC\u662F\u7B80\u4ECB\u5185\u5BB9"
          },
          {
            src: "https://xjc.demo.hongcd.com/uploads/20230215/8b5ac0420fe61e2f9660d7b8af998f7b.mp4",
            id: "3",
            name: "\u5F00\u73A9\u7B11\u7684\u9E21\u6BDB",
            desc: "\u8FD9\u91CC\u662F\u7B80\u4ECB\u5185\u5BB9"
          },
          {
            src: "https://xjc.demo.hongcd.com/uploads/20210128/d932b2d78cebb0a8cb8f9a6216790dfb.mp4",
            id: "4",
            name: "\u5F00\u73A9\u7B11\u7684\u9E21\u6BDB",
            desc: "\u8FD9\u91CC\u662F\u7B80\u4ECB\u5185\u5BB9"
          },
          {
            src: "https://xjc.demo.hongcd.com/uploads/20210128/0c64cbeea28b10c06eee8728c762449e.mp4",
            id: "5",
            name: "\u5F00\u73A9\u7B11\u7684\u9E21\u6BDB",
            desc: "\u8FD9\u91CC\u662F\u7B80\u4ECB\u5185\u5BB9"
          },
          {
            src: "https://xjc.demo.hongcd.com/uploads/20210327/1b72e1b6153cd29df07f5449991e8083.mp4",
            id: "6",
            name: "\u5F00\u73A9\u7B11\u7684\u9E21\u6BDB",
            desc: "\u8FD9\u91CC\u662F\u7B80\u4ECB\u5185\u5BB9"
          },
          {
            src: "https://xjc.demo.hongcd.com/uploads/20230214/7e1a0baaebc4e656bbbfbc44d7a55a60.mp4",
            id: "7",
            name: "\u5F00\u73A9\u7B11\u7684\u9E21\u6BDB",
            desc: "\u8FD9\u91CC\u662F\u7B80\u4ECB\u5185\u5BB9"
          }
        ]
      });
      const loadMore = () => {
        formatAppLog("log", "at pages/index/index.nvue:173", "\u52A0\u8F7D\u66F4\u591A");
      };
      const change = (e) => {
        formatAppLog("log", "at pages/index/index.nvue:177", "\u{1F680} ~ file: index.vue:53 ~ change ~ data:", e);
      };
      (0, import_vue2.onMounted)(() => {
      });
      return (_ctx, _cache) => {
        const _component_swiper_item = (0, import_vue2.resolveComponent)("swiper-item");
        const _component_swiper = (0, import_vue2.resolveComponent)("swiper");
        return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
          scrollY: true,
          showScrollbar: true,
          enableBackToTop: true,
          bubble: "true",
          style: { flexDirection: "column" }
        }, [
          (0, import_vue2.createCommentVNode)(' <view class="container">\r\n		<videoSwiper ref="mTikTokRef" :video-list="state.videoList" @loadMore="loadMore" @change="change">\r\n			<template v-slot="data">\r\n				<view class="video-side-right">\r\n					<view class="action-item action-item-user">\r\n						<image class="shop-logo"\r\n							src="https://examples-1251000004.cos.ap-shanghai.myqcloud.com/sample.jpeg?imageMogr2/crop/180x180/gravity/center" />\r\n						<view class="action-btn">\r\n							<text class="iconfont">+</text>\r\n						</view>\r\n						<text class="action-item-text"></text>\r\n					</view>\r\n					<view class="action-item">\r\n						<text class="iconfont icon-star11beifen">\u2764</text>\r\n						<text class="action-item-text">{{ data.item.id }}</text>\r\n					</view>\r\n					<view class="action-item">\r\n						<text class="iconfont icon-share">\u261D</text>\r\n						<text class="action-item-text">\u5206\u4EAB</text>\r\n					</view>\r\n				</view>\r\n				<view class="video-bottom-area">\r\n					<view class="shop-name"> @{{ data.item.name }} </view>\r\n					<view class="shop-card">{{ data.item.desc }}</view>\r\n				</view>\r\n			</template>\r\n		</videoSwiper>\r\n	</view> '),
          (0, import_vue2.createElementVNode)("view", null, [
            (0, import_vue2.createCommentVNode)("\u9876\u90E8\u5BFC\u822A\u680F"),
            (0, import_vue2.createElementVNode)(
              "scroll-view",
              {
                class: "scroll-view_H",
                scrollX: "true",
                onScroll: _cache[0] || (_cache[0] = (...args) => _ctx.scroll && _ctx.scroll(...args))
              },
              [
                ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
                  import_vue2.Fragment,
                  null,
                  (0, import_vue2.renderList)(tabBars.value, (tab, index2) => {
                    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("u-text", {
                      class: (0, import_vue2.normalizeClass)(["scroll-view-item_H", navIndex.value == index2 ? "activite" : ""]),
                      key: tab.id,
                      id: tab.id,
                      onClick: ($event) => checkIndex(index2)
                    }, (0, import_vue2.toDisplayString)(tab.name), 11, ["id", "onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ],
              32
              /* HYDRATE_EVENTS */
            ),
            (0, import_vue2.createCommentVNode)(" \u5185\u5BB9 "),
            (0, import_vue2.createVNode)(_component_swiper, {
              current: navIndex.value,
              onChange: tabChange,
              class: "content"
            }, {
              default: (0, import_vue2.withCtx)(() => [
                (0, import_vue2.createVNode)(_component_swiper_item, { class: "swiper_item" }, {
                  default: (0, import_vue2.withCtx)(() => [
                    (0, import_vue2.createElementVNode)("u-text", null, " \u540C\u57CE ")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                (0, import_vue2.createVNode)(_component_swiper_item, { class: "swiper_item" }, {
                  default: (0, import_vue2.withCtx)(() => [
                    (0, import_vue2.createElementVNode)("u-text", null, " \u5546\u5E97 ")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                (0, import_vue2.createVNode)(_component_swiper_item, { class: "swiper_item" }, {
                  default: (0, import_vue2.withCtx)(() => [
                    (0, import_vue2.createElementVNode)("u-text", null, " \u5173\u6CE8 ")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                (0, import_vue2.createVNode)(_component_swiper_item, { class: "swiper_item" }, {
                  default: (0, import_vue2.withCtx)(() => [
                    (0, import_vue2.createVNode)((0, import_vue2.unref)(videoSwiper), {
                      ref_key: "mTikTokRef",
                      ref: mTikTokRef,
                      "video-list": state.videoList,
                      onLoadMore: loadMore,
                      onChange: change
                    }, {
                      default: (0, import_vue2.withCtx)((data) => [
                        (0, import_vue2.createElementVNode)("view", { class: "video-side-right" }, [
                          (0, import_vue2.createElementVNode)("view", { class: "action-item action-item-user" }, [
                            (0, import_vue2.createElementVNode)("u-image", {
                              class: "shop-logo",
                              src: "https://examples-1251000004.cos.ap-shanghai.myqcloud.com/sample.jpeg?imageMogr2/crop/180x180/gravity/center"
                            }),
                            (0, import_vue2.createElementVNode)("view", { class: "action-btn" }, [
                              (0, import_vue2.createElementVNode)("u-text", { class: "iconfont" }, "+")
                            ]),
                            (0, import_vue2.createElementVNode)("u-text", { class: "action-item-text" })
                          ]),
                          (0, import_vue2.createElementVNode)("view", { class: "action-item" }, [
                            (0, import_vue2.createElementVNode)("u-text", { class: "iconfont icon-star11beifen" }, "\u2764"),
                            (0, import_vue2.createElementVNode)(
                              "u-text",
                              { class: "action-item-text" },
                              (0, import_vue2.toDisplayString)(data.item.id),
                              1
                              /* TEXT */
                            )
                          ]),
                          (0, import_vue2.createElementVNode)("view", { class: "action-item" }, [
                            (0, import_vue2.createElementVNode)("u-text", { class: "iconfont icon-share" }, "\u261D"),
                            (0, import_vue2.createElementVNode)("u-text", { class: "action-item-text" }, "\u5206\u4EAB")
                          ])
                        ]),
                        (0, import_vue2.createElementVNode)("view", { class: "video-bottom-area" }, [
                          (0, import_vue2.createElementVNode)("view", { class: "shop-name" }, [
                            (0, import_vue2.createElementVNode)(
                              "u-text",
                              null,
                              " @" + (0, import_vue2.toDisplayString)(data.item.name),
                              1
                              /* TEXT */
                            )
                          ]),
                          (0, import_vue2.createElementVNode)("view", { class: "shop-card" }, [
                            (0, import_vue2.createElementVNode)(
                              "u-text",
                              null,
                              (0, import_vue2.toDisplayString)(data.item.desc),
                              1
                              /* TEXT */
                            )
                          ])
                        ])
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["video-list"])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                (0, import_vue2.createVNode)(_component_swiper_item, { class: "swiper_item" }, {
                  default: (0, import_vue2.withCtx)(() => [
                    (0, import_vue2.createElementVNode)("u-text", null, " \u4E3B\u9875\u8BE6\u60C5\u4FE1\u606F ")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["current"])
          ])
        ]);
      };
    }
  };
  var index = /* @__PURE__ */ _export_sfc(_sfc_main2, [["styles", [_style_02]], ["__file", "F:/demo/imitate-douyin/app-demo/pages/index/index.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/index/index";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    index.mpType = "page";
    const app = Vue.createPageApp(index, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...index.styles || []]));
    app.mount("#root");
  }
})();
