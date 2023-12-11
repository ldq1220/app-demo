import { isInSSRComponentSetup, injectHook, getCurrentInstance, reactive, watch, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, Fragment, renderList, createBlock, createCommentVNode, normalizeClass, renderSlot } from "vue";
const ON_UNLOAD = "onUnload";
function formatAppLog(type, filename, ...args) {
  if (uni.__log__) {
    uni.__log__(type, filename, ...args);
  } else {
    console[type].apply(console, [...args, filename]);
  }
}
const createHook = (lifecycle) => (hook, target = getCurrentInstance()) => {
  !isInSSRComponentSetup && injectHook(lifecycle, hook, target);
};
const onUnload = /* @__PURE__ */ createHook(ON_UNLOAD);
const _style_0 = { "m-tiktok-video-iconfont": { "": { "fontFamily": "m-tiktok-play-icon" } }, "m-tiktok-video-swiper": { "": { "width": "750rpx", "height": "750rpx" } }, "m-tiktok-video-player": { "": { "width": "750rpx", "height": "750rpx" } }, "swiper-item": { ".m-tiktok-video-swiper ": { "position": "relative", "backgroundColor": "#FF0000" } }, "m-tiktok-video-poster": { ".m-tiktok-video-swiper ": { "backgroundColor": "#000000", "position": "absolute", "top": 0, "left": 0, "right": 0, "bottom": 0 } }, "m-tiktok-video-play-btn": { ".m-tiktok-video-swiper ": { "position": "absolute", "top": 0, "left": 0, "right": 0, "bottom": 0, "zIndex": 1, "display": "flex", "alignItems": "center", "justifyContent": "center" } }, "video-icon": { ".m-tiktok-video-swiper .m-tiktok-video-play-btn ": { "fontSize": 50, "color": "rgba(255,255,255,0.8)", "opacity": 0 }, ".m-tiktok-video-swiper .m-tiktok-video-play-btn .active": { "opacity": 1 } }, "@FONT-FACE": [{ "fontFamily": "m-tiktok-play-icon", "src": 'url(data:font/woff2;charset=utf-8;base64,d09GMgABAAAAAAJ0AA0AAAAABlgAAAIiAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP0ZGVE0cGh4GYACCQhEICkhaCwoAATYCJAMQBCAFhQIHLxt4BcieBXbLR4jiyygbC491Mg0vz9JsPPz/ft/2ufeMmCQP9fXfRhxvMKHjkcSsTkqWplJJqpFFfn79mr4NG5fvwujI+EPeZCbudGJcy6oVklRVp8IAdgMJUqD853ceuhm3iSafWxNoC0bbskAmUGABTlrDAgwsC+xJ3/SJf3DecLgpCpyFgDcXlRJ8uiufSVcHBjENilBVIVGQKS50UZ6U1+ApeD7+6kcvRVcl2fZub1Q8/BfJG9VHbUp9J0UAYBWhomIRgUZWYFHOKkgp+FFsyVvmRkB0E4AooAg/DwF/49FSQIJeBMbBDIAEQIzfDW+OPVHX48vXUy26fUwfJnN0+tW5bLx3+dz5fHT61rQEIBDc77r579ZI8793IDWgftfb8/q83gC9Cggqvex6gvqcDoBMGojkOvpX4wgU9OtHC2DcOwgwoYpA6LWDQNHjDgJVr8cCpF7PBOgy4JUA3Xq9BYF+29EgMGAiLlSRfVgDlgyjlmQx7JSsRgVQYkeyy7RLstuoF7Lfid+qAWtxbiWmkbDEVgmyA2hRBHx6jOEomxtSuCEvAg5k/U4c0Bh2XJIYfiwLaz88BE9oYgkrKPS0dWGtk7/X7rqFOsU+TZzFM4k9Qx9jOkEXC3iErR+f0LhcASEUC9g0CtaGY3Jrsjf6zPrqiLsTyi1RpN9z3wPOMRaa6+jQAzbblCgVWLpySeZmOVzvLw8uOfSjoLSEEiV7Yg==) format("woff2")', "fontWeight": "normal", "fontStyle": "normal", "fontDisplay": "swap" }] };
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
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
    const _this = getCurrentInstance();
    const state = reactive({
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
    watch(
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
      const _component_swiper_item = resolveComponent("swiper-item");
      const _component_swiper = resolveComponent("swiper");
      return openBlock(), createElementBlock("scroll-view", {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true",
        style: { flexDirection: "column" }
      }, [
        createElementVNode("view", { class: "swiper_box" }, [
          createVNode(_component_swiper, {
            class: "m-tiktok-video-swiper",
            circular: "",
            onChange: swiperChange,
            current: state.current,
            vertical: true,
            duration: "300"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(state.displaySwiperList, (item, index) => {
                  return openBlock(), createBlock(
                    _component_swiper_item,
                    { key: index },
                    {
                      default: withCtx(() => [
                        createElementVNode("view", {
                          class: "swiper-item",
                          onClick: handleClick
                        }, [
                          index === 0 || !state.isFirstLoad ? (openBlock(), createElementBlock("u-video", {
                            key: 0,
                            class: "m-tiktok-video-player",
                            src: item.src,
                            id: `video__${index}`,
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
                          }, null, 40, ["src", "id", "controls", "showCenterPlayBtn", "objectFit", "loop", "onLoadedmetadata"])) : createCommentVNode("v-if", true),
                          createElementVNode("u-text", null, " 123123 "),
                          !__props.controls && state.displayIndex === index ? (openBlock(), createElementBlock("cover-view", {
                            key: 1,
                            class: "m-tiktok-video-play-btn",
                            onClick: togglePlay
                          }, [
                            createElementVNode(
                              "u-text",
                              {
                                class: normalizeClass(["m-tiktok-video-iconfont video-icon", { active: !state.isPlaying }])
                              },
                              "",
                              2
                              /* CLASS */
                            )
                          ])) : createCommentVNode("v-if", true),
                          item.poster && state.displayIndex != index ? (openBlock(), createElementBlock("u-image", {
                            key: 2,
                            src: item.poster,
                            class: "m-tiktok-video-poster",
                            mode: "aspectFit"
                          }, null, 8, ["src"])) : createCommentVNode("v-if", true),
                          renderSlot(_ctx.$slots, "default", { item }),
                          createCommentVNode(' <view style="color: #fff;font-style: 20px;position: relative;left: 50%;top: 50%;">{{item.id}}</view> ')
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
const videoSwiper = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]], ["__file", "F:/demo/imitate-douyin/app-demo/components/videoSwiper/videoSwiper.nvue"]]);
const videoSwiper$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: videoSwiper
}, Symbol.toStringTag, { value: "Module" }));
export {
  _export_sfc as _,
  videoSwiper$1 as a,
  formatAppLog as f,
  videoSwiper as v
};
