<template>
    <div v-show="popupVisible" class='tips-wrap' @click="popupVisible=!popupVisible">
        <img src="./img/guide.png" alt="请用手机浏览器打开该页面" class="tips-img">
    </div>
</template>

<script>
/**
 * 使用方法：
 * this.$wxDownload.open()
 * this.$wxDownload.close()
 */
export default {
    name: "wx-download",
    data() {
        return {
            popupVisible: false
        };
    }
};
</script>
<style scoped>
.tips-wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    z-index: 9999;
    background: #000;
    text-align: center;
}
.tips-img {
    width: 80%;
    margin-top: 10%;
}
</style>
