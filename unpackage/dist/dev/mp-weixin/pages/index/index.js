"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_videoSwiper2 = common_vendor.resolveComponent("videoSwiper");
  _easycom_videoSwiper2();
}
const _easycom_videoSwiper = () => "../../components/videoSwiper/videoSwiper2.js";
if (!Math) {
  _easycom_videoSwiper();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.ref(3);
    const navIndex = common_vendor.ref(3);
    const tabBars = common_vendor.ref([{
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
    const checkIndex = (index) => {
      navIndex.value = index;
    };
    const tabChange = (e) => {
      navIndex.value = e.detail.current;
    };
    const mTikTokRef = common_vendor.ref();
    const state = common_vendor.reactive({
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
      console.log("加载更多");
    };
    const change = (e) => {
      console.log("🚀 ~ file: index.vue:53 ~ change ~ data:", e);
    };
    common_vendor.onMounted(() => {
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(tabBars.value, (tab, index, i0) => {
          return {
            a: common_vendor.t(tab.name),
            b: tab.id,
            c: tab.id,
            d: common_vendor.n(navIndex.value == index ? "activite" : ""),
            e: common_vendor.o(($event) => checkIndex(index), tab.id)
          };
        }),
        b: common_vendor.o((...args) => _ctx.scroll && _ctx.scroll(...args)),
        c: common_vendor.w((data, s0, i0) => {
          return {
            a: common_vendor.t(data.item.id),
            b: common_vendor.t(data.item.name),
            c: common_vendor.t(data.item.desc),
            d: i0,
            e: s0
          };
        }, {
          name: "d",
          path: "c",
          vueId: "01432da8-0"
        }),
        d: common_vendor.sr(mTikTokRef, "01432da8-0", {
          "k": "mTikTokRef"
        }),
        e: common_vendor.o(loadMore),
        f: common_vendor.o(change),
        g: common_vendor.p({
          ["video-list"]: state.videoList
        }),
        h: navIndex.value,
        i: common_vendor.o(tabChange)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/demo/imitate-douyin/app-demo/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
