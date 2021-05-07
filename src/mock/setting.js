import Mock from "mockjs";
import Code from "@/image/code.jpg";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4162829540,5058883&fm=26&gp=0.jpg",
    siteTitle: "小Ci的个人空间",
    github: "https://github.com/xiaoCi-g",
    qq: "1403817070",
    qqQrCode:Code,
    weixin: "Xds-X1964",
    weixinQrCode:Code,
    mail: "1403817070@qq.com",
    icp: "甘ICP备17001719号",
    githubName: "xiaoCi-g",
    favicon: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4162829540,5058883&fm=26&gp=0.jpg",
  },
});
