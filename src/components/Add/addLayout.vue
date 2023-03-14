<!--
 * @Author: yujingbo
 * @Date: 2022-11
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-02
 * @Description: 新增数据 layout
-->
<template>
  <div class="flx-content-center">
    <div class="main">
      <div>
        <p>
          <slot name="first_title"></slot>
        </p>
        <div>
          <slot name="first_content"></slot>
        </div>
      </div>
      <div>
        <p>
          <slot name="second_title"></slot>
        </p>
        <div>
          <slot name="second_content"></slot>
        </div>
      </div>
      <div>
        <p>
          <slot name="third_title"></slot>
        </p>
        <div>
          <slot name="third_content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/form.scss';

.main {
  min-width: 686px;
  margin-left: -100px;
  > div {
    > p {
      margin-bottom: 24px;
      font-size: 16px;
      font-weight: 600;
      line-height: 22px;
      color: rgba(0, 0, 0, 0.85);
    }
    > div {
      margin-left: 90px;
    }
  }
  > div:not(:nth-child(1)) {
    margin-top: 44px;
  }
}
</style>
