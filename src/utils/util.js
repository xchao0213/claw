let util = {
    aspectRatio: 1, // 宽高比
    widthRatio: 1, // 宽度比
    screenWidth: 375, // 实际屏幕宽度
    screenHeight: 812, // 实际屏幕高度
    init() {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.aspectRatio = this.screenHeight / this.screenWidth;
        this.widthRatio = this.screenWidth / 375;
    },
    isIphoneX () {
        if (typeof window !== undefined && window) {
            return /iphone/gi.test(window.navigator.userAgent) && window.screen.height >= 812;
        }
        return false;
    },
    getScreesWidth() {
        return this.screenWidth * 2;
    },
    getScreesHeight() {
        return this.screenHeight * 2;
    },
    getWidth(width) {
        return this.getLength(width);
    },
    getHeight(height) {
        return this.getLength(height);
    },
    getLength(length) {
        return this.widthRatio > 2 ? length * this.widthRatio * 0.75 : this.widthRatio * length;
    }
};

export default util;