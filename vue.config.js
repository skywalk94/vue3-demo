module.exports = {
    publicPath: "./",
    lintOnSave: false,
    devServer: {
        proxy: {
            "/api": {
                target: "http://hplqytest.suoluomei.cn/index.php?s=/hfs/Api/", // 域名
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
};