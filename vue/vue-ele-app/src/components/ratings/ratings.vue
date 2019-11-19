<template>
  <div>
    <div class="retings">
      <div class="ratings-content">
        <div class="overview">
          <div class="overview-left">
            <h1 class="score">4.2</h1>
            <div class="title">综合评分</div>
            <div class="rank">高于周边商家69.2%</div>
          </div>
          <div class="overview-right"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style>
.retings{
  position: absolute;
  top: 174px;
  bottom: 0;
  left: 0;
  width: 100px;
  overflow: hidden;
}
.overview{
  display: flex;
  padding: 18px 0;
}
.overview-left{
  width: 137px;
  text-align: center;
  border-right: 1px solid rgba(7, 17, 27, .1)
}
</style>