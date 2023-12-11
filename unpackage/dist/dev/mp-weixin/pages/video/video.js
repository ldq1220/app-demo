"use strict";
const common_vendor = require("../../common/vendor.js");
const videoPlayer = () => "../../components/videoSwiper/videoSwiper2.js";
var time = null;
const _sfc_main = {
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
    common_vendor.index.getSystemInfo({
      success: (res) => {
        console.log("首页获取到的页面高度:windowHeight", res.windowHeight);
        this.screenHeight = res.windowHeight;
        console.log("this.screenHeight--------", this.screenHeight);
      }
    });
  },
  methods: {
    change(res) {
      clearTimeout(time);
      this.page = res.detail.current;
      time = setTimeout(() => {
        if (this.pageStartY > this.pageEndY) {
          console.log("向上滑动" + this.page);
          this.$refs.player[this.page].playVideo();
          this.$refs.player[this.page - 1].pauseVideo();
          this.pageStartY = 0;
          this.pageEndY = 0;
        } else {
          console.log("向下滑动" + this.page);
          this.$refs.player[this.page].playVideo();
          this.$refs.player[this.page + 1].pauseVideo();
          this.pageStartY = 0;
          this.pageEndY = 0;
        }
      }, 1);
    },
    touchStart(res) {
      this.pageStartY = res.changedTouches[0].pageY;
      console.log(this.pageStartY);
    },
    touchEnd(res) {
      this.pageEndY = res.changedTouches[0].pageY;
      console.log(this.pageEndY);
    }
  },
  watch: {
    myList() {
      this.list = this.myList;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, k0, i0) => {
      return {
        a: item.src,
        b: item.id
      };
    }),
    b: $data.screenHeight + "px",
    c: $data.screenHeight + "px",
    d: common_vendor.o((...args) => $options.change && $options.change(...args)),
    e: common_vendor.o((...args) => $options.touchStart && $options.touchStart(...args)),
    f: common_vendor.o((...args) => $options.touchEnd && $options.touchEnd(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/demo/imitate-douyin/app-demo/pages/video/video.vue"]]);
wx.createPage(MiniProgramPage);
