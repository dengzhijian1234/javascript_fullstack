<template>
  <div class="note-list">
    <ul>
      <li v-for="(item, index) in noteList" :key="index">
        <div class="img">
          <img :src="item.head_img" alt />
        </div>
        <p class="time">
          {{item.c_time}}
          <span class="collection">
            <van-icon name="like-o" color="#aaa" size=".4rem" />
          </span>
        </p>
        <p class="title">{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "noteList",
  data() {
    return {
      noteList: []
    };
  },
  created() {
    this.initNoteClass();
  },
  methods: {
    initNoteClass() {
      // 拿路由上面的参数
      let note_type = this.$route.query.title;
      console.log(note_type);

      this.$http({
        method: "post",
        url: "http://localhost:3000/users/findNoteListBytype",
        data: {
          note_type: note_type
        }
      }).then(res => {
        console.log(res);
        if (res.data.code === "200") {
          this.noteList = res.data.data;
        } else {
          this.$toast("查询不成功");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.note-list {
  width: 100vw;
  padding: 1.066667rem 0.666667rem 0;
  box-sizing: border-box;
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 4rem;
      margin-bottom: 0.72rem;
      overflow: hidden;
      .img {
        width: 100%;
        height: 4rem;
        img {
          width: 100%;
          height: 100%;
          border-radius: 0.266667rem;
        }
      }
      .time {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        margin-bottom: 5px;
        opacity: 0.7;
        color: rgba(16, 16, 16, 1);
        font-size: 0.373333rem;
        font-family: Arial;
        .collection {
          position: relative;
          top: -2px;
        }
      }
      .title {
        height: 1.12rem;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        color: rgba(16, 16, 16, 1);
        font-size: 0.373333rem;
        font-family: Arial;
      }
    }
  }
}
</style>
