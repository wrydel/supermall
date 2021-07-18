<template>
  <div class="param" v-if="Object.keys(paramInfo).length !== 0">
    <div class="param-infos">
      <table>
        <tr v-for="infoItem in paramInfo.infos">
          <td class="param-key">{{infoItem.key}}</td>
          <td class="param-value">{{infoItem.value}}</td>
        </tr>
      </table>
    </div>
    <div class="param-sizes">
      <table v-for="table in paramInfo.sizes">
        <tr v-for="tr in table">
          <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name:"DetailParamInfo", 
  props: {
    paramInfo: {
      type:Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
  .param {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .param table {
    width: 100%;
    border-collapse: collapse;
  }
  .param table tr {
    height: 42px;
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
.param-value{
  color: #eb4868
}
.param-key {
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
  width: 95px;
}
.param-sizes {
  border-top: 2px solid rgba(0,0,0,.1);
}
  .info-img img {
  width: 100%;
}
</style>
