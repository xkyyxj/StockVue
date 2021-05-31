<template>
  <a-tabs v-model:activeKey="activeKey" tab-position="bottom" class="main-tab">
    <!-- 第一个页签 -- 展示活动窗口 -->
    <a-tab-pane key="1">
      <template #tab>
        <span>
          <apple-outlined />
          <div class="stock-tab-item">Tab 1</div>
        </span>
      </template>
      <div class="stock-tab-item">
        <a-divider class="divider-style">Calculate</a-divider>
        <div class="item-list">
          <AnalyzeItem title="" color='#FFCC99'/>
        </div>
        <a-divider class="divider-style">Analyze</a-divider>
        <div class="item-list">
          <AnalyzeItem title="haha" color='#FFCC99'/>
        </div>
        <a-divider class="divider-style">In time</a-divider>
      </div>
    </a-tab-pane>
    <!-- 第二个页签 -- 展示主界面 -->
    <a-tab-pane key="2">
      <template #tab>
        <span>
          <android-outlined />
          Tab 2
        </span>
      </template>
      <div class="stock-tab-item">

      </div>
    </a-tab-pane>
    <!-- 第三个页签 -- 展示常用应用列表 -->
    <a-tab-pane key="3">
      <template #tab>
        <span>
          <apple-outlined />
          Tab 3
        </span>
      </template>
      <div class="stock-tab-item">
        <a-divider class="divider-style">Calculate</a-divider>
        <div class="item-list">
          <AnalyzeItem title="" color='#FFCC99'/>
        </div>
        <a-divider class="divider-style">Analyze</a-divider>
        <div class="item-list">
          <AnalyzeItem title="haha" color='#FFCC99'/>
        </div>
        <a-divider class="divider-style">In time</a-divider>
      </div>
    </a-tab-pane>
  </a-tabs>
</template>
<script>
  import AnalyzeItem from "./AnalyzeItem";
  export default {
    components: {
      AnalyzeItem
    }
  }
</script>
<style>
  .divider-style {
    padding-left: 100px;
    padding-right: 100px;
  }

  .item-list {
    margin: 10px 20px;
    display: flex;
    flex-direction: row;
  }

  .main-tab {
    width: 100%;
    height: 100%;
  }
  .main-tab .ant-tabs-bar {
    height: 10%;
  }

  .main-tab .ant-tabs-content {
    height: 90%;
  }

  .stock-tab-item {
    width: 100%;
    height: 100%;
  }
</style>


