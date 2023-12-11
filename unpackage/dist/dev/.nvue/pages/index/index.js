import { _ as _export_sfc, v as videoSwiper, f as formatAppLog } from "../../videoSwiper.js";
import { ref, reactive, onMounted, resolveComponent, openBlock, createElementBlock, createCommentVNode, createElementVNode, Fragment, renderList, normalizeClass, toDisplayString, createVNode, withCtx, unref } from "vue";
const _style_0 = { "activite": { "": { "color": "#04c9c3" } }, "content": { "": { "marginTop": "100rpx", "height": "1000rpx", "backgroundColor": "#ff7500", "color": "#ffffff" } }, "scroll-view_H": { "": { "position": "fixed", "top": 0, "left": 0, "whiteSpace": "nowrap", "width": "750rpx", "color": "#CCCCCC", "display": "flex" } }, "video-layer": { "": { "position": "absolute", "right": "24rpx", "bottom": "240rpx", "color": "#ffffff" } }, "video-bottom-area": { "": { "position": "absolute", "left": "40rpx", "bottom": "80rpx", "zIndex": 999 } }, "shop-name": { ".video-bottom-area ": { "color": "#ffffff", "marginBottom": 6 } }, "shop-card": { ".video-bottom-area ": { "width": 160, "height": 80, "backgroundColor": "rgba(255,255,255,0.5)", "borderRadius": 4 } }, "video-side-right": { "": { "position": "absolute", "right": 12, "bottom": 120, "color": "#ffffff", "zIndex": 999 } }, "action-item": { ".video-side-right ": { "position": "relative", "marginBottom": 20, "textAlign": "center" } }, "shop-logo": { ".video-side-right .action-item ": { "width": 40, "height": 40, "borderRadius": 40, "overflow": "hidden" } }, "iconfont": { ".video-side-right .action-item ": { "fontSize": 28 }, ".video-side-right .action-item .action-btn ": { "fontSize": 16 } }, "action-item-text": { ".video-side-right .action-item ": { "fontSize": 12 } }, "action-btn": { ".video-side-right .action-item ": { "position": "absolute", "left": 50, "transform": "translateX(-50%)", "bottom": -8, "width": 20, "height": 20, "borderRadius": 50, "display": "flex", "alignItems": "center", "justifyContent": "center", "backgroundColor": "#ff6600" } }, "action-item-user": { ".video-side-right ": { "marginBottom": 40 } } };
const _sfc_main = {
  __name: "index",
  setup(__props) {
    ref(0);
    const navIndex = ref(3);
    const tabBars = ref([{
      name: "同城",
      id: "equipment"
    }, {
      name: "商店",
      id: "expert"
    }, {
      name: "关注",
      id: "fault"
    }, {
      name: "推荐视频",
      id: "defect"
    }]);
    const checkIndex = (index2) => {
      navIndex.value = index2;
    };
    const tabChange = (e) => {
      navIndex.value = e.detail.current;
    };
    const mTikTokRef = ref();
    const state = reactive({
      videoList: [
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
      ]
    });
    const loadMore = () => {
      formatAppLog("log", "at pages/index/index.nvue:173", "加载更多");
    };
    const change = (e) => {
      formatAppLog("log", "at pages/index/index.nvue:177", "🚀 ~ file: index.vue:53 ~ change ~ data:", e);
    };
    onMounted(() => {
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
        createCommentVNode(' <view class="container">\r\n		<videoSwiper ref="mTikTokRef" :video-list="state.videoList" @loadMore="loadMore" @change="change">\r\n			<template v-slot="data">\r\n				<view class="video-side-right">\r\n					<view class="action-item action-item-user">\r\n						<image class="shop-logo"\r\n							src="https://examples-1251000004.cos.ap-shanghai.myqcloud.com/sample.jpeg?imageMogr2/crop/180x180/gravity/center" />\r\n						<view class="action-btn">\r\n							<text class="iconfont">+</text>\r\n						</view>\r\n						<text class="action-item-text"></text>\r\n					</view>\r\n					<view class="action-item">\r\n						<text class="iconfont icon-star11beifen">❤</text>\r\n						<text class="action-item-text">{{ data.item.id }}</text>\r\n					</view>\r\n					<view class="action-item">\r\n						<text class="iconfont icon-share">☝</text>\r\n						<text class="action-item-text">分享</text>\r\n					</view>\r\n				</view>\r\n				<view class="video-bottom-area">\r\n					<view class="shop-name"> @{{ data.item.name }} </view>\r\n					<view class="shop-card">{{ data.item.desc }}</view>\r\n				</view>\r\n			</template>\r\n		</videoSwiper>\r\n	</view> '),
        createElementVNode("view", null, [
          createCommentVNode("顶部导航栏"),
          createElementVNode(
            "scroll-view",
            {
              class: "scroll-view_H",
              scrollX: "true",
              onScroll: _cache[0] || (_cache[0] = (...args) => _ctx.scroll && _ctx.scroll(...args))
            },
            [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(tabBars.value, (tab, index2) => {
                  return openBlock(), createElementBlock("u-text", {
                    class: normalizeClass(["scroll-view-item_H", navIndex.value == index2 ? "activite" : ""]),
                    key: tab.id,
                    id: tab.id,
                    onClick: ($event) => checkIndex(index2)
                  }, toDisplayString(tab.name), 11, ["id", "onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ],
            32
            /* HYDRATE_EVENTS */
          ),
          createCommentVNode(" 内容 "),
          createVNode(_component_swiper, {
            current: navIndex.value,
            onChange: tabChange,
            class: "content"
          }, {
            default: withCtx(() => [
              createVNode(_component_swiper_item, { class: "swiper_item" }, {
                default: withCtx(() => [
                  createElementVNode("u-text", null, " 同城 ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_swiper_item, { class: "swiper_item" }, {
                default: withCtx(() => [
                  createElementVNode("u-text", null, " 商店 ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_swiper_item, { class: "swiper_item" }, {
                default: withCtx(() => [
                  createElementVNode("u-text", null, " 关注 ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_swiper_item, { class: "swiper_item" }, {
                default: withCtx(() => [
                  createVNode(unref(videoSwiper), {
                    ref_key: "mTikTokRef",
                    ref: mTikTokRef,
                    "video-list": state.videoList,
                    onLoadMore: loadMore,
                    onChange: change
                  }, {
                    default: withCtx((data) => [
                      createElementVNode("view", { class: "video-side-right" }, [
                        createElementVNode("view", { class: "action-item action-item-user" }, [
                          createElementVNode("u-image", {
                            class: "shop-logo",
                            src: "https://examples-1251000004.cos.ap-shanghai.myqcloud.com/sample.jpeg?imageMogr2/crop/180x180/gravity/center"
                          }),
                          createElementVNode("view", { class: "action-btn" }, [
                            createElementVNode("u-text", { class: "iconfont" }, "+")
                          ]),
                          createElementVNode("u-text", { class: "action-item-text" })
                        ]),
                        createElementVNode("view", { class: "action-item" }, [
                          createElementVNode("u-text", { class: "iconfont icon-star11beifen" }, "❤"),
                          createElementVNode(
                            "u-text",
                            { class: "action-item-text" },
                            toDisplayString(data.item.id),
                            1
                            /* TEXT */
                          )
                        ]),
                        createElementVNode("view", { class: "action-item" }, [
                          createElementVNode("u-text", { class: "iconfont icon-share" }, "☝"),
                          createElementVNode("u-text", { class: "action-item-text" }, "分享")
                        ])
                      ]),
                      createElementVNode("view", { class: "video-bottom-area" }, [
                        createElementVNode("view", { class: "shop-name" }, [
                          createElementVNode(
                            "u-text",
                            null,
                            " @" + toDisplayString(data.item.name),
                            1
                            /* TEXT */
                          )
                        ]),
                        createElementVNode("view", { class: "shop-card" }, [
                          createElementVNode(
                            "u-text",
                            null,
                            toDisplayString(data.item.desc),
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
              createVNode(_component_swiper_item, { class: "swiper_item" }, {
                default: withCtx(() => [
                  createElementVNode("u-text", null, " 主页详情信息 ")
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]], ["__file", "F:/demo/imitate-douyin/app-demo/pages/index/index.nvue"]]);
export {
  index as default
};
