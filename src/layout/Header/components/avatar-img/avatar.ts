const ddAvatar = (function () {
  function e(e) {
    return e.match(/^([a-zA-Z]|\s|,|\.)+$/) !== null
  }
  const t = [
    '#78c06e',
    '#f65e8d',
    '#f6bf26',
    '#f65e5e',
    '#5e97f6',
    '#9a89b9',
    '#a1887f',
    '#ff943e',
    '#5ec9f6',
    '#3bc2b5',
    '#5c6bc0',
    '#bd84cd',
    '#6bb5ce',
    '#c5cb63',
    '#ff8e6b',
    '#78919d'
  ]
  const c = t.length
  return {
    getAvatar: function (e, t) {
      t = this._getShowName(e || t)
      const c = this._getColor(t)
      return {
        name: t,
        color: c
      }
    },
    _getShowName: function (t) {
      let c = t || ''
      c = c.replace(/[()（）【】「」{}]/g, '')
      let n = []
      if (e(c)) {
        c = c.replace(/,|\./g, ' ').replace(/\s+/g, ' ')
        n = c.split(' ')
        return n.length === 1 ? c.slice(0, 2) : n[0].slice(0, 1) + n[1].slice(0, 1)
      } else {
        return c.replace(/,|\.|\s+/g, '').slice(-2)
      }
    },
    _getColor: function (e) {
      let n = 0
      for (const char in e) n += e.charCodeAt(char)
      return t[n % c]
    }
  }
})()

export default ddAvatar
