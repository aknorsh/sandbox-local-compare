const sample = [
  'a b c d e f g aa bb cc dd ee',
  'あ い う え お ア イ ウ エ オ ゥ',
  '1 2 10 100 １ ２ １０ １００',
  '一 二 三 四 五 六 七 八 九 十 百 千 万 億 兆 京 垓',
  'α β γ η Α Β Γ Η',
  '衣 安 亜 印 愛',
  'a あ ｱ ア 1 １ α 亜',
  '℃ C °',
  '【 】 「 」 （ ） ( ) 『 』 [ ] ［ ］ “ ” " 〈 〉 < > « »',
  '㌣ ¢ ㌵ ₣ ㌦ ＄ $ €',
	'0 1 00 01 10 11１ ０ ００ ０１ １０ １１ ! ！ _ ＿ A a á B b Ａ ａ Ｂ ｂ あ ぁ い ぃ ア ァ イ ィ ｱ ｧ ｲ ｨ 亜 阿 愛 安 衣 印 🐤 🍆 🍅',
]
new Vue({
  el: '#main',
  data: function () {
    return {
      arr: 'a b c A B C 1 2 3',
      origin: [],
      sorted: [],
      LC: [],
      LCja: [],
      LCen: [],
      sample: sample
    }
  },
  methods: {
    submit: function () {
      this.origin = this.arr.split(' ')
      this.sorted = this.origin.slice().sort()
      this.LC = this.origin.slice().sort((a, b) => a.localeCompare(b))
      this.LCja = this.origin.slice().sort((a, b) => a.localeCompare(b, 'ja'))
      this.LCen = this.origin.slice().sort((a, b) => a.localeCompare(b, 'en'))
    },
    trySample: function (idx) {
      this.arr = this.sample[idx]
      this.submit()
    }
  },
  created: function () {
    this.submit()
  }
})
