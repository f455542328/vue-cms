<template>
    <div class="photoinfo-container">
        <h3>{{photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{ photoinfo.add_time | dateFormat }}</span>
            <span>点击：{{ photoinfo.click }}次</span>
        </p>

        <hr>

        <!-- 缩略图区域 -->
            <img class="preview-img" v-for=" (item,index) in list" :key="item.src" :src="item.src" height="100"  @click="$preview.open(index,list)">

        <!-- 图片内容区 -->

        <div class="content" v-html="photoinfo.content">

        </div>

        <!-- 评论子组件 -->
        <cmt-box :id="id"></cmt-box>

    </div>
</template>

<script>
import comment from '../subcomponents/comment.vue'
    export default {
        data() {
            return {
                id: this.$route.params.id,
                photoinfo: {},
                list: []
            }
        },
        created() {
            this.getPhotoInfo();
            this.getThumbs();
        },
        methods: {
            getPhotoInfo(){
                this.$http.get("api/getimageInfo/" + this.id).then(result => {
                    if(result.body.status === 0 ){
                        this.photoinfo = result.body.message[0];

                    }else{
                        Toast('获取详情失败，请刷新重试！')
                    }
                })
            },
            getThumbs(){
                this.$http.get("api/getthumimages/" + this.id).then(result => {
                    if(result.body.status === 0){
                        result.body.message.forEach(item => {
                            item.w = 600;
                            item.h = 400;
                        });
                        this.list = result.body.message;
                    }else{
                        Toast("获取缩略图失败，请刷新重试！")
                    }
                })
            }
        },
        components: {
            'cmt-box': comment
        }
    }
</script>

<style lang="scss" scoped>
    .photoinfo-container{
        padding: 3px;
        h3{
            color: #26a2ff;
            text-align: center;
            margin: 15px 0;
            font-size: 15px;
        }
        .subtitle{
           display:flex;
           justify-content: space-between;
           font-size: 13px; 
        }
        .content{
            font-size: 13px;
            line-height: 30px;
        }
    }
</style>