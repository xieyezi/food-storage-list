<script setup lang="ts">
import { ref } from 'vue'

const list = ref([
  {
    name: '大米',
    count: '5kg x 10',
  },
  {
    name: '各色杂粮',
    count: '0.5kg x 1',
  },
  {
    name: '压缩饼干',
    count: '10包',
  },
  {
    name: '苏打饼干',
    count: '1kg x 3',
  },
  {
    name: '挂面/快速面饼',
    count: '5kg x 10',
  },
  {
    name: '面条',
    count: '20kg',
  },
  {
    name: '各种麦片',
    count: '2.5kg',
  },
  {
    name: '粉丝、粉条、干米线',
    count: '2.5kg',
  },
  {
    name: '脱水水果、干果',
    count: '5kg x 10',
  },
  {
    name: '罐头（肉类、果蔬、豆类）',
    count: '20份',
  },
  {
    name: '面粉',
    count: '25kg',
  },
])

</script>

<template>
  <div mt-15>
    <Card>
      <div inline-flex gap-1>
        <p i-twemoji-canned-food text-lg />
        <p text-lg font-medium>
          食品类
        </p>
      </div>
      <div v-for="item in list" :key="item.name" h-10 flex justify-between items-center>
        <p>{{ item.name }}</p>
        <p>{{ item.count }}</p>
      </div>
    </Card>
  </div>
</template>
