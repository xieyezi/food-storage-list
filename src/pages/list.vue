<script setup lang="ts">
import { foods, foodsLong, medicines, prevtatins, waters } from '../data'

</script>

<template>
  <div mt-18>
    <!-- 注意事项 -->
    <Card>
      <div inline-flex gap-1>
        <p i-icon-park-outline-thinking-problem text-lg />
        <p text-lg font-medium>
          注意事项
        </p>
      </div>
      <div px-2 mt-2>
        <p text-sm italic leading-relaxed>
          此清单参考自《中国居民平衡膳食宝塔(2016》版本，标准为单个成人30天所需物资，按照每日摄入量计算。
        </p>
      </div>
    </Card>

    <!-- 食物 -->
    <Card>
      <div inline-flex gap-1>
        <p i-icon-park-outline-rice />
        <p text-base font-bold>
          食物
        </p>
      </div>
      <div v-for="food in foods" :key="food.name" h-10 mr-2 ml-2 flex justify-between items-center>
        <div class="w-2/5">
          {{ food.name }}
        </div>
        <div class="w-1/5">
          {{ food.count }}
        </div>
        <div class="w-2/5 text-right">
          {{ food.desc }}
        </div>
      </div>
    </Card>

    <!-- 耐储食物 -->
    <Card>
      <div inline-flex gap-1>
        <p i-icon-park-outline-loading />
        <p text-base font-bold>
          耐储食物
        </p>
      </div>
      <div v-for="food in foodsLong" :key="food.name" h-10 mr-2 ml-2 flex justify-between items-center>
        <div class="w-2/5">
          {{ food.name }}
        </div>
        <div class="w-1/5">
          {{ food.count }}
        </div>
        <div class="w-2/5 text-right">
          {{ food.desc }}
        </div>
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
        <p>{{ water.desc }}</p>
      </div>
    </Card>

    <!-- 防疫 -->
    <Card>
      <div inline-flex gap-1>
        <p i-icon-park-outline-mask />
        <p text-base font-bold>
          防疫
        </p>
      </div>
      <div v-for="prevtatin in prevtatins" :key="prevtatin.name" h-10 mr-2 ml-2 flex justify-between items-center>
        <p>{{ prevtatin.name }}</p>
        <p>{{ prevtatin.count }}</p>
      </div>
    </Card>

    <!-- 医药 -->
    <Card>
      <div inline-flex gap-1>
        <p i-icon-park-outline-medicine-bottle />
        <p text-base font-bold>
          医药
        </p>
      </div>
      <div v-for="medicine in medicines" :key="medicine.name" h-10 mr-2 ml-2 flex justify-between items-center>
        <p>{{ medicine.name }}</p>
        <p>{{ medicine.count }}</p>
      </div>
    </Card>
  </div>
</template>
