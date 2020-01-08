<template>
<div style="width: 100%">
  <div class="article clearfix">
    <div class="article-left fl">
        <div class="header">
          <h1 class="title">
            文章标题
            </h1>
             <div class="author">
            <div class="avatar">
              <img class="auth-logo"
                   src="http://www.gdbylm.com/yangwei/09/young.jpg"
                   alt="图像">
             </div>
              <div class="info">
                <span class="name">
                <span>作者Young</span>
              </span>
        <div class="meta">
                <span class="publish-time">
                  时间2019-01-01
                  <!-- {{articleDetail.create_time? formatTime(articleDetail.create_time): ''}} -->
                </span>
                <span class="wordage">
                  字数 100
                  <!-- {{articleDetail.numbers}} -->
                </span>
                <span class="views-count">
                  阅读 100
                  <!-- {{articleDetail.meta.views}} -->
                </span>
                <span class="comments-count">
                  评论 100
                  <!-- {{articleDetail.meta.comments}} -->
                </span>
                <span class="likes-count">
                  喜欢 100
                  <!-- {{articleDetail.meta.likes}} -->
                </span>
              </div>
             </div>
               <div class="tags "
                 title="标签">
                  <!-- v-for="tag in articleDetail.tags"
                      :key="tag._id" -->
              <el-tag size="mini"
                      class="tag"
                      type="success">标签</el-tag>
            </div>
            <span class="clearfix" />    
        </div>
        </div>
        <div class="content">
          <div id="content"
               class="article-detail"
               >
               <!-- v-html="articleDetail.content" -->
                文章主体
          </div>
        </div>
        <div class="heart">
          <el-button type="danger"
                     size="large"
                     icon="heart"
                     >
                     <!-- :loading="isLoading"
                     @click="likeArticle" -->
            点赞
          </el-button>
        </div>
        <div class="comment">
<el-input placeholder="文明社会，理性评论"
                    type="textarea"
                   > 
                   <!-- v-model="content" -->
                   </el-input>
          <el-button style="margin-top: 15px"
                     type="primary"
                     >发 送
                     <!-- :loading="btnLoading"
                     @click="handleAddComment" -->
                     </el-button>
        </div>
 <!--评论组件 <CommentList v-if="!isLoading"
                     :numbers="articleDetail.meta.comments"
                     :list="articleDetail.comments"
                     :article_id="articleDetail._id"
                     @refreshArticle="refreshArticle" /> -->

        </div>
         <!--右侧导航 <div v-if="!isMobileOrPc"
           style="width: 23%"
           class="article-right fr anchor"
           v-html="articleDetail.toc"></div>
      <LoadingCustom v-if="isLoading"></LoadingCustom>
    -->
</div>
</div>
</template>
<script>
export default {
data() {
//这里存放数据
return {
    };
  },
methods: {
},   
}
  
</script>

   <style lang="less" scoped>
.anchor {
  display: block;
  position: sticky;
  top: 213px;
  margin-top: 213px;
  border-left: 1px solid #eee;
  .anchor-ul {
    position: relative;
    top: 0;
    max-width: 250px;
    border: none;
    -moz-box-shadow: 0 0px 0px #fff;
    -webkit-box-shadow: 0 0px 0px #fff;
    box-shadow: 0 0px 0px #fff;

    li.active {
      color: #009a61;
    }
  }
  a {
    color: #333;
  }
}
.article {
  width: 100%;
  .header {
    .title {
      margin: 20px 0 0;
      text-align: center;
      font-size: 34px;
      font-weight: bold;
    }
    .author {
      position: relative;
      margin: 30px 0 40px;
      padding-left: 50px;
      .avatar {
        position: absolute;
        left: 0;
        top: 0;
        width: 48px;
        height: 48px;
        vertical-align: middle;
        display: inline-block;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .info {
        float: left;
        vertical-align: middle;
        // display: inline-block;
        margin-left: 8px;
        a {
          color: #333;
        }
      }
      .name {
        margin-right: 3px;
        font-size: 16px;
        vertical-align: middle;
      }
      .meta {
        margin-top: 5px;
        font-size: 12px;
        color: #969696;
        span {
          padding-right: 5px;
        }
      }
      .tags {
        float: right;
        padding-top: 15px;
        // padding-right: 20px;
        .tag {
          // padding: 0 10px;
          margin-left: 5px;
          border-right: 2px solid #eee;
        }
      }
    }
  }
  .content {
    min-height: 300px;
  }
}
.heart {
  height: 60px;
  text-align: center;
  margin: 50px;
}
.loader {
  color: rgb(226, 44, 44);
  text-align: center;
  padding: 50px;
  font-size: 16px;
}
.clearfix {
  clear: both;
}
</style>

