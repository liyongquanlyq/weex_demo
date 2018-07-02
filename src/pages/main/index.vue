<template>
    <div class="app-wrapper">
        <LiveHome v-if="currentType=='home'"></LiveHome>
        <LiveScore v-if="currentType=='score'"></LiveScore>
        <LiveClub v-if="currentType=='club'"></LiveClub>
        <LiveFind v-if="currentType=='find'"></LiveFind>
        <LiveAccount v-if="currentType=='my'"></LiveAccount>
        <tab-bar @tabTo="onTabTo"></tab-bar>
    </div>
</template>
<style>
    body{
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
        color:#333;
    }
</style>
<style scoped>
    .app-wrapper{
        background-color: #f4f4f4;
    }
    .r-box{
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
    }

</style>

<script>
    var modal = weex.requireModule('modal');
    import LiveHome from '@/pages/main/home'
    import LiveScore from '@/pages/main/score'
    import LiveClub from '@/pages/main/club'
    import LiveFind from '@/pages/main/find'
    import LiveAccount from '@/pages/main/my'
    import util from '../../util';
    import tabBar from '../../components/tabBar.vue';
    export default {
        data () {
            return {
                currentType: 'home'
            }
        },
        components: {
            'tab-bar': tabBar, LiveHome, LiveClub, LiveAccount, LiveFind, LiveScore
        },
        created () {
            util.initIconFont();
        },
        methods: {
            onTabTo(_result){
                this.currentType = _result.data.key || 'home';
            }
        }
    }
</script>