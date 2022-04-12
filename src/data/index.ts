const foods = [
  {
    name: '大米',
    count: '10 x 5kg',
  },
  {
    name: '杂粮(红豆、小米、玉米等)',
    count: '各1kg',
  },
  {
    name: '压缩饼干',
    count: '10包',
  },
  {
    name: '苏打饼干',
    count: '3 x 1kg',
  },
  {
    name: '挂面/快速面饼',
    count: '1 x 10kg ',
  },
  {
    name: '面条(荞麦面、魔芋面)',
    count: '20包',
  },
  {
    name: '各种麦片',
    count: '2.5kg',
  },
  {
    name: '粉丝/粉条/干米线',
    count: '2.5kg',
  },
  {
    name: '面粉',
    count: '25kg',
  },
  {
    name: '意大利面',
    count: '1kg',
  },
  {
    name: '巧克力、自加热盒饭、代餐粉',
    count: '1kg',
  },
]

const vegtablesShort = [
  {
    name: '小白菜',
    count: '10 x 5kg',
  },
  {
    name: '奶白菜',
    count: '各1kg',
  },
  {
    name: '乌塌菜',
    count: '10包',
  },
  {
    name: '油菜',
    count: '3 x 1kg',
  },
  {
    name: '油菜心',
    count: '1 x 10kg ',
  },
  {
    name: '油麦菜',
    count: '10包',
  },
  {
    name: '空心菜',
    count: '3 x 1kg',
  },
  {
    name: '芹菜',
    count: '1 x 10kg ',
  },
]

const vegtablesMiddle = [
  {
    name: '茄子',
    count: '10 x 5kg',
  },
  {
    name: '番茄',
    count: '各1kg',
  },
  {
    name: '辣椒',
    count: '10包',
  },
  {
    name: '莴笋',
    count: '3 x 1kg',
  },
  {
    name: '西兰花',
    count: '1 x 10kg ',
  },
  {
    name: '紫甘蓝',
    count: '10包',
  },
  {
    name: '莲藕',
    count: '3 x 1kg',
  },
  {
    name: '秋葵',
    count: '1 x 10kg ',
  },
]

const vegtablesLittleLong = [
  {
    name: '萝卜/胡萝卜',
    count: '10 x 5kg',
  },
  {
    name: '冬笋',
    count: '各1kg',
  },
  {
    name: '大白菜',
    count: '10包',
  },
  {
    name: '南瓜',
    count: '3 x 1kg',
  },
  {
    name: '土豆',
    count: '1 x 10kg ',
  },
  {
    name: '红薯',
    count: '10包',
  },
  {
    name: '芋头',
    count: '3 x 1kg',
  },
  {
    name: '洋葱',
    count: '1 x 10kg ',
  },
]

const vegtablesLong = [
  {
    name: '脱水萝卜干',
    count: '10 x 5kg',
  },
  {
    name: '紫菜',
    count: '各1kg',
  },
  {
    name: '黄花菜',
    count: '10包',
  },
  {
    name: '干香菇',
    count: '3 x 1kg',
  },
  {
    name: '干豆角',
    count: '1 x 10kg ',
  },
  {
    name: '盐渍海带',
    count: '10包',
  },
  {
    name: '笋干',
    count: '3 x 1kg',
  },
  {
    name: '腐竹',
    count: '1 x 10kg ',
  },
]

const waters = [
  {
    name: '空瓶装满自來水',
    count: '5L * 8',
  },
  {
    name: '各种饮料',
    count: '适量',
  },
  {
    name: '野外净水片',
    count: '1瓶',
  },
  {
    name: '滤水壶',
    count: '1个',
  },
  {
    name: '可折叠容水器',
    count: '1个',
  },
]

const bottles = [
  {
    name: '盐（重要）',
    count: '3包',
  },
  {
    name: '植物油',
    count: '5L',
  },
  {
    name: '椰子油',
    count: '250g',
  },
  {
    name: '黄油',
    count: '0.5kg',
  },
  {
    name: '菜籽油',
    count: '1桶',
  },
  {
    name: '料酒',
    count: '1瓶',
  },
  {
    name: '生抽',
    count: '1瓶',
  },
  {
    name: '蚝油',
    count: '1瓶',
  },
  {
    name: '醋',
    count: '1瓶',
  },
  {
    name: '白糖',
    count: '1袋',
  },
  {
    name: '冰糖',
    count: '1袋',
  },
  {
    name: '香油',
    count: '1瓶',
  },
  {
    name: '榨菜',
    count: '5包',
  },
  {
    name: '老干妈',
    count: '1罐',
  },
  {
    name: '豆瓣酱',
    count: '1罐',
  },
  {
    name: '番茄酱',
    count: '1罐',
  },
  // ///
  {
    name: '黄豆酱',
    count: '1罐',
  },
  {
    name: '蒜蓉酱',
    count: '1罐',
  },
  {
    name: '五香粉',
    count: '1罐',
  },
  {
    name: '十三香',
    count: '1包',
  },
  {
    name: '辣椒面',
    count: '1罐',
  },
  {
    name: '黑白胡椒',
    count: '1罐',
  },
  {
    name: '八角',
    count: '适量',
  },
  {
    name: '花椒',
    count: '适量',
  },
  {
    name: '小块的火锅底料',
    count: '1包',
  },
  {
    name: '蒜',
    count: '适量',
  },
  {
    name: '姜',
    count: '适量',
  },

]

const payTations = [
  '水果、蔬菜、豆类、坚果和全谷物',
  '400g水果和蔬菜/人/天，不包括土豆、红薯、木薯和其他淀粉根',
  '不到 10% 的总能量摄入来自游离糖（食品饮料中所有糖，及存在于蜂蜜、糖浆、果汁和浓缩果汁中的糖）',
  '少于 30% 的总能量摄入来自脂肪',
  '每天少于 5 克盐（相当于约一茶匙）。盐应该加碘。',
]

export {
  foods,
  waters,
  bottles,
  vegtablesShort,
  vegtablesMiddle,
  vegtablesLong,
  vegtablesLittleLong,
  payTations,
}
