<template>
  <div id="detail-comment-info" v-if="Object.keys(commentInfo).length != 0">
    <div class="commentInfo-title">
      <div class="commentInfo-name">用户评价</div>
      <div class="commentInfo-more">更多</div>
    </div>
    <div class="commentInfo-info">
      <div class="user-info">
        <img :src="commentInfo.user.avatar" alt="">
        <span>{{commentInfo.user.uname}}</span>
      </div>
    </div>
    <div class="commentInfo-content">
      <div class="content-text">{{ commentInfo.content }}</div>
      <p class="content-info">
        {{ commentInfo.created | dateShow }} {{ commentInfo.style }}
      </p>
    </div>
    <div class="shop-reply" v-if="commentInfo.explain != null">
      {{ commentInfo.explain }}
    </div>
    <div class="commentInfo-img" v-if="commentInfo.images != null">
      <img
        :src="item"
        alt=""
        v-for="(item, index) in commentInfo.images"
        :key="index"
      />
    </div>
  </div>

</template>

<script>
import {formatDate} from '../../../common/utils'

export default {
  name:"DetailCommentInfo", 
  props: {
    commentInfo: {
      type:Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    dateShow(value) {
      let date = new Date(value*1000);
      return formatDate(date, "yyyy-MM-dd mm:hh:ss")
    }
  }
}
</script>

<style>
  #detail-comment-info {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .commentInfo-title {
    font-size: 16px;
    position: relative;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .commentInfo-more {
    position: absolute;
    right: 5px;
    top: 0px;
    font-size: 14px;
  }
  .commentInfo-more::after {
  content: "";
  background: url("../../../assets/img/detail/right_arrow.svg") 0 0/1.06rem 1.06rem;
  display: inline-block;
  position: relative;
  top: 0.26rem;
  width: 1.06rem;
  height: 1.06rem;
}
.commentInfo-info {
  padding: 10px 0;
}
.user-info {
  display: flex;
  align-items: center;
}
.user-info img {
  height: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid rgba(125, 125, 125, .3);
}
.user-info span {
  margin-left: 8px;
}
.content-text {
  line-height: 22px;
  color: #666;
}
.content-info {
  font-size: 12px;
  color: #999;
}

.shop_reply {
  border-top: 0.04rem solid rgba(128, 128, 128, 0.4);
  padding: 0.5rem 0;
  color: gray;
  line-height: 0.8rem;
}

.commentInfo_img img {
  margin-right: 0.21rem;
  width: auto;
  height: 4.26rem;
}
</style>
