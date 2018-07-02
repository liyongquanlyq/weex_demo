<template>
    <div class="wrapper">
        <home-header></home-header>
        <!-- <top-channel></top-channel> -->
        <scroller :class="['main-list', isIpx&&isIpx()?'ml-ipx':'']" 
        offset-accuracy="300" loadmoreoffset="300" @loadmore="onloadmore">
            <refresher @loadingDown="loadingDown"></refresher>
            <div class="cell-button" @click="jumpWeb('https://wm.okooo.com/jingcai/bet')">
                <yx-slider :imageList="YXBanners" ></yx-slider>
            </div>
            
            <div class="fbs">
                <div class="s-box cell-button">
                    <div class="box-line">
                        <div class="i-box-l">
                            <text class="i-box-icon iconfont">&#xe673;</text>
                            <text class="i-box-tlt">比赛直播</text>
                        </div>
                        <div class="i-box-l">
                            <text class="i-box-icon iconfont">&#xe675;</text>
                            <text class="i-box-tlt">最新资讯</text>
                        </div>
                        <div class="i-box-l">
                            <text class="i-box-icon iconfont">&#xe671;</text>
                            <text class="i-box-tlt">俱乐部</text>
                        </div>
                        <div class="i-box-l">
                            <text class="i-box-icon iconfont">&#xe672;</text>
                            <text class="i-box-tlt">专家高手</text>
                        </div>
                    </div>
                </div>
                <div class="s-box cell-button">
                    <div class="box-line line-serve border-bottom" @click="jumpWeb('https://wm.okooo.com/jingcai/bet')">
                        <div class="i-box-l"><text class="i-box-icon iconfont i-c-orange">&#xe658;</text><text class="i-box-tlt">竞彩足球</text></div>
                        <div class="i-box-l"><text class="i-box-icon iconfont i-c-yellow">&#xe61d;</text><text class="i-box-tlt">竞彩篮球</text></div>
                        <div class="i-box-l"><text class="i-box-icon iconfont i-c-orange">&#xef12;</text><text class="i-box-tlt">单场</text></div>
                        <div class="i-box-l"><text class="i-box-icon iconfont i-c-yellow">&#xe615;</text><text class="i-box-tlt">传统足彩</text></div>
                    </div>
                    <div class="box-line line-serve border-bottom" @click="jumpWeb('https://wm.okooo.com/jingcai/bet')">
                        <div class="i-box-l"><text class="i-box-icon iconfont i-c-orange">&#xe67d;</text><text class="i-box-tlt">大乐透</text></div>
                        <div class="i-box-l"><text class="i-box-icon iconfont i-c-yellow">&#xe777;</text><text class="i-box-tlt">双色球</text></div>
                        <div class="i-box-l"><text class="i-box-icon iconfont i-c-orange">&#xe69d;</text><text class="i-box-tlt">3D</text></div>
                        <div class="i-box-l"><text class="i-box-icon iconfont i-c-yellow">&#xe64c;</text><text class="i-box-tlt">排列3</text></div>
                    </div>
                    <div class="box-tlt border-bottom"><text class="box-txt">彩票开奖大厅</text></div>
                </div>
            </div>
            <text v-for="(item,key) in goodsList" :key="key">{{key}}: {{item.entity.title}}</text>
            <!-- <loading class="loading" @loading="onloading" :display="showLoading">
                <text class="indicator">...</text>
            </loading> -->
        </scroller>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue';
    import util from '../../util';
    import refresher from '@/components/refresh.vue';
    import YXSlider from '@/components/YXSlider.vue';
    var modal = weex.requireModule('modal')
    var navigator = weex.requireModule('navigator')
    export default {
        components: {
            'home-header': Header,
            'refresher': refresher,
            'yx-slider': YXSlider
        },
        data () {
            return {
                YXBanners: [],
                goodsList: [],
                goodsListBackup: [],
                showLoading: 'hide'
            }
        },
        created () {
            this.fnInitData()
        },
        methods: {
            fnInitData () {
                util.GET('system/common/ad/getcarousel', res => {
                    this.YXBanners = res.data.data;
                });
                util.GET('information/news/news/getrecommend?limit=20&page=1', res => {
                    this.goodsList = res.data.data
                    this.goodsListBackup = [...this.goodsList]
                })
            },
            jumpWeb (_url) {
                const url = weex.config.bundleUrl;
                modal.toast({ message: util.setBundleUrl(url, 'pages/webview/index.js'), duration: 10 })
                navigator.push({
                    url: util.setBundleUrl(url, 'pages/webview/index.js?weburl='+_url) ,
                    animated: "true"
                }, event => {
                    modal.toast({ message: 'callback: ' + JSON.stringify(event) })
                });
            },
            // http://cdn.zwwill.com/justdo8/jsbundles/index.js
            jumpNative (_url) {
                navigator.push({
                    url: _url ,
                    animated: "true"
                });
            },
            onloading () {
                modal.toast({ message: 'loading', duration: 0.3 })
                this.showLoading = 'show';
                setTimeout(() => {
                    this.goodsList.push(...this.recommend.goods1);
                    this.showLoading = 'hide'
                }, 300)
            },
            onloadmore () {
                modal.toast({ message: 'loading', duration: 0.3 })
                setTimeout(() => {
                    this.goodsList.push(...this.goodsListBackup);
                }, 100)
            },
            loadingDown(){
                this.fnInitData()
            },
            isIpx () {
                return util.isIpx()
            }
        }
    }
</script>


<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
    }
    .main-list{
        position: fixed;
        top: 114px;
        bottom: 90px;
        left: 0;
        right: 0;
        /*margin-top: 167px;*/
        /*margin-bottom: 90px;*/
    }
    .ml-ipx{
        top: 208px;
        bottom:140px;
    }

    .cell-button{
        padding-bottom: 18px;
    }
    .slogan{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        background-color: #fff;
    }
    .i-slg{
        height: 66px;
        font-size: 26px;
        padding-top: 16px;
        flex: 1;
        text-align: center;
        color: #b4282d;
    }

    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        background-color: #f4f4f4;
    }
    .fbs{
        background-color: #f4f4f4;
        padding-bottom: 1000px;
        margin-bottom: -1000px;
    }
    .scroller{
        margin-bottom: 90px;
    }
    .ml-ipx{
        margin-bottom: 140px;
    }
    .cell-button{
        margin-bottom: 18px;
    }
    .header{
        height: 380px;
    }
    .h-ipx{
        height: 420px;
    }
    .header-bg{
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        height: 500px;
        width: 750px;
    }
    .bg2{
        top:500px;
    }
    .bg3{
        top:1000px;
    }
    .i-photo{
        position: absolute;
        bottom:60px;
        left: 30px;
        height: 130px;
        width: 130px;
        border-radius: 130px;
    }
    .i-name{
        position: absolute;
        bottom:120px;
        left: 190px;
        height: 50px;
        width: 300px;
        font-size: 38px;
        color:#fff;
    }
    .b-tlt{
        position: absolute;
        bottom: 70px;
        left: 190px;
        height: 40px;
        width: 350px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .i-tag{
        width: 30px;
        height: 30px;
        font-size: 24px;
        padding-top: 2px;
        margin-right: 6px;
        border-radius: 4px;
    }
    .tag-e{
        width: 32px;
        height: 32px;
    }
    .tag-v8{
        color:#fff;
        background-color: #b29e75;
        text-align: center;
    }
    .txt-tag{
        color:#b4a078;
        flex: 1;
        height: 40px;
        font-size: 28px;
        overflow: hidden;
        lines:1;
        text-overflow: ellipsis;
    }
    .b-qrcode{
        position: absolute;
        bottom:80px;
        right: 40px;
        height: 80px;
        width: 80px;
        border-radius: 70px;
        text-align: center;
        font-size: 40px;
        padding-top: 18px;
        color:#fff;
        background-color: rgba(255,255,255,.3);
    }
    .s-box{
        padding-left: 26px;
        background-color: #fff;
    }
    .box-tlt{
        height: 94px;
    }
    .box-txt{
        text-align: center;
        font-size: 26px;
        padding-top: 34px;
        color:#333;
    }
    .i-box-in{
        position: absolute;
        top:34px;
        right: 30px;
        color:#333;
    }
    .box-line{
        height: 132px;
        display: flex;
        padding-right: 30px;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-between;
    }
    .i-box-l{
        width: 130px;
        height: 132px;
    }
    .i-box-icon{
        font-size: 50px;
        text-align: center;
        padding-top: 15px;
        height:79px;
        padding-bottom: 10px;
        color:#666;
    }
    .i-box-tlt{
        font-size: 26px;
        text-align: center;
        color:#666;
    }
    .line-serve{
        padding-top: 20px;
        height: 150px;
    }
    .border-bottom{
        border-bottom-width: 1px;
        border-bottom-color: rgba(0,0,0,.15) ;
    }
    .i-c-orange{
        color:#ff744d;
    }
    .i-c-yellow{
        color:#f6a121;
    }
    .i-c-blue{
        color:#689de5;
    }
</style>
