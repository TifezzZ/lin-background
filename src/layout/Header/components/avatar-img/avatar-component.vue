<!--
 * @Description: 生成用户头像
 -->
<template>
  <div
    class="avatar-wrap"
    :style="sizeStyle"
  >
    <img
      v-if="imgUrl && !imgUrl.includes('default.jpg')"
      :alt="alt"
      class="avatar-img"
      :src="imgUrl"
    />
    <span
      v-else-if="alt"
      class="avatar-text"
      :style="textAvatarStyle"
    >
      {{ avatarObj.name }}
    </span>
    <img
      v-else
      class="avatar-img"
      src="@/assets/images/user-default.png"
    />
  </div>
</template>

<script>
import ddAvatar from './avatar.ts'

export default {
  props: {
    // 头像尺寸，默认40px
    size: {
      type: Number,
      default: 30
    },
    // 头像图片路径
    src: {
      type: [String, Array],
      default: ''
    },
    // 如果图片不存在，则通过alt来生成默认头像
    alt: {
      type: String,
      default: ''
    },
    radius: {
      type: Number,
      default: 0
    }
  },

  computed: {
    // 使用js生成钉钉头像
    avatarObj() {
      return ddAvatar.getAvatar(this.alt)
    },

    // 尺寸样式
    sizeStyle() {
      return {
        width: this.size + 'px',
        height: this.size + 'px',
        'border-radius': this.radius === 1 ? '4px' : '50%'
      }
    },

    imgUrl() {
      let url = ''
      if (typeof this.src === 'string') {
        url = this.src
      } else if (typeof this.src === 'object' && this.src[0]) {
        url = this.src[0]
      }
      // return xbb.thumbnail(url, this.size * 2)

      return url
    },

    /*
     * 文字头像样式
     */
    textAvatarStyle() {
      return {
        lineHeight: this.size + 'px',
        fontSize: this.size / 3 + 'px', // 字体大小为头像宽度的1/3刚好合适
        backgroundColor: this.avatarObj.color
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar-wrap {
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
  border-radius: 50%;
  .avatar-img {
    width: 100%;
    height: 100%;
    vertical-align: top;
  }
  .avatar-text {
    display: inline-block;
    width: 100%;
    color: #fff;
    text-align: center;
    vertical-align: top;
  }
}
</style>
