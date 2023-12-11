"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "my",
  setup(__props) {
    const viderUrl = common_vendor.ref("");
    const recordVideo = () => {
      console.log(123123);
      common_vendor.index.chooseVideo({
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
          console.log("选择视频成功", res);
          viderUrl.value = res.tempFilePath;
        },
        fail: (err) => {
          console.error("选择视频失败", err);
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(recordVideo),
        b: common_vendor.t(viderUrl.value)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2f1ef635"], ["__file", "F:/demo/imitate-douyin/app-demo/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
