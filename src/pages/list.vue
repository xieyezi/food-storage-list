<script setup lang="ts">
import { bottles, foods, payTations, vegtablesLittleLong, vegtablesLong, vegtablesMiddle, vegtablesShort, waters } from '../data'

</script>

<template>
  <div mt-18>
    <!-- 干粮 & 干货 -->
    <Card>
      <div inline-flex gap-1>
        <p i-icon-park-outline-noodles />
        <p text-base font-bold>
          干粮 & 干货
        </p>
      </div>
      <div v-for="food in foods" :key="food.name" h-10 mr-2 ml-2 flex justify-between items-center>
        <p>{{ food.name }}</p>
        <p>{{ food.count }}</p>
      </div>
    </Card>
    <!-- 蔬菜类 -->
    <Card>
      <div inline-flex gap-1>
        <p i-carbon-tree />
        <p text-base font-bold>
          蔬菜类
        </p>
      </div>
      <div mt-1>
        <p text-base italic>
          储存时间较短（3-4天）
        </p>
      </div>
      <div v-for="vegtable in vegtablesShort" :key="vegtable.name" h-10 mr-2 ml-2 flex justify-between items-center>
        <p>{{ vegtable.name }}</p>
        <p>{{ vegtable.count }}</p>
      </div>
      <div mt-1>
        <p text-base italic>
          储存时间中等（5-7天）
        </p>
      </div>
      <div v-for="vegtable in vegtablesMiddle" :key="vegtable.name" h-10 mr-2 ml-2 flex justify-between items-center>
        <p>{{ vegtable.name }}</p>
        <p>{{ vegtable.count }}</p>
      </div>
      <div mt-1>
        <p text-base italic>
          存储时间较长（8-14天）
        </p>
      </div>
      <div v-for="vegtable in vegtablesLittleLong" :key="vegtable.name" h-10 mr-2 ml-2 flex justify-between
        items-center>
        <p>{{ vegtable.name }}</p>
        <p>{{ vegtable.count }}</p>
      </div>
      <div mt-1>
        <p text-base italic>
          脱水蔬菜长期储存
        </p>
      </div>
      <div v-for="vegtable in vegtablesLong" :key="vegtable.name" h-10 mr-2 ml-2 flex justify-between items-center>
        <p>{{ vegtable.name }}</p>
        <p>{{ vegtable.count }}</p>
      </div>
    </Card>
    <!-- 调味料 -->
    <Card>
      <div inline-flex gap-1>
        <p i-icon-park-outline-bottle-two />
        <p text-base font-bold>
          调味料
        </p>
      </div>
      <div v-for="bottle in bottles" :key="bottle.name" h-10 mr-2 ml-2 flex justify-between items-center>
        <p>{{ bottle.name }}</p>
        <p>{{ bottle.count }}</p>
      </div>
    </Card>
    <!-- 饮用水 -->
    <Card>
      <div inline-flex gap-1>
        <p i-icon-park-outline-water-level />
        <p text-base font-bold>
          饮用水
        </p>
      </div>
      <div v-for="water in waters" :key="water.name" h-10 mr-2 ml-2 flex justify-between items-center>
        <p>{{ water.name }}</p>
        <p>{{ water.count }}</p>
      </div>
    </Card>
    <!-- 注意事项 -->
    <Card>
      <div inline-flex gap-1>
        <p i-icon-park-outline-thinking-problem text-lg />
        <p text-lg font-medium>
          食物注意事项
        </p>
      </div>
      <div px-2 mt-2>
        <p text-sm italic leading-relaxed>
          记录采购日期和过期时间，依照先进先出和安全库存原则，优先消耗保质期短采购时间较长的食品，及时替换库存，阴凉避光通风干燥是储存基本条件。
        </p>
      </div>
      <div mt-3>
        <p text-base font-bold>
          数据来源
        </p>
      </div>
      <div v-for="(tation, index) in payTations" :key="tation" h-auto mr-2 ml-2 py-2 flex justify-start items-center>
        <p>{{ index + 1 }}- {{ tation }}</p>
      </div>
    </Card>
  </div>
</template>
