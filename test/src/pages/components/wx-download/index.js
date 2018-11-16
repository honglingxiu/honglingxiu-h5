import Vue from 'vue';
import Profile from "./wx-download.vue";

const WxDownload = Vue.extend(Profile);

let instance;

export default {
    //打开组件方法
    open() {
        if (!instance) {
            instance = new WxDownload({
                el: document.createElement('div')
            });
        }
        if (instance.popupVisible) return;
        document.body.appendChild(instance.$el);

        Vue.nextTick(() => {
            instance.popupVisible = true;
        });
    },
    //关闭组件方法
    close() {
        if (instance) {
            instance.popupVisible = false;
        }
    }
};