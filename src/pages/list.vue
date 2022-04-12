<script setup lang="ts">
import { foods, payTations, waters } from '../data'

</script>

<template>
  <div mt-15>
    <Card>
      <div inline-flex gap-1>
        <p text-lg font-bold>
          食品类
        </p>
      </div>
      <!-- 干粮 & 干货 -->
      <div>
        <div mt-4 inline-flex gap-1>
          <p i-icon-park-outline-noodles />
          <p text-base font-bold>
            干粮 & 干货
          </p>
        </div>
        <div v-for="food in foods" :key="food.name" h-10 mr-2 ml-2 flex justify-between items-center>
          <p>{{ food.name }}</p>
          <p>{{ food.count }}</p>
        </div>
      </div>
      <!-- 饮用水 -->
      <div>
        <div mt-2 inline-flex gap-1>
          <p i-icon-park-outline-water-level />
          <p text-base font-bold>
            饮用水
          </p>
        </div>
        <div v-for="water in waters" :key="water.name" h-10 mr-2 ml-2 flex justify-between items-center>
          <p>{{ water.name }}</p>
          <p>{{ water.count }}</p>
        </div>
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
