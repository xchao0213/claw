let util = {
    aspectRatio: 1, // 宽高比
    widthRatio: 1, // 宽比率
    screenWidth: 375, // 实际屏幕宽度
    screenHeight: 812, // 实际屏幕高度
    init() {
        this.screenWidth = window.screen.availWidth;
        this.screenHeight = window.screen.availHeight;
        this.aspectRatio = window.screen.aspectRatio;
        this.widthRatio = this.screenWidth / 375;
        // this.aspectRatio = this.screenHeight / this.screenWidth;
    },
    getScreesWidth() {
        return this.screenWidth * 2;
    },
    getScreesHeight() {
        return this.screenHeight * 2;
    },
    getWidth(width) {
        return this.widthRatio > 2 ? width * this.widthRatio * 0.75 : this.widthRatio * width;
    },
    getHeight(height) {
        return this.widthRatio > 2 ? height * this.widthRatio * 0.75 : this.widthRatio * height;
    }
};

export default util;