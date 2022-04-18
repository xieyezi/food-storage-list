<script setup lang="ts">

const router = useRouter()
const go = () => router.push('/list')
</script>

<template>
  <div font-sans p="x-4 y-30" text="center">
    <div i-fa6-solid-bowl-food text-4xl inline-block />
    <p>
      非常时期囤货清单
    </p>
    <p text-sm op75 mt-10>
      疫情总是在不经意之间来袭，在家中常备一些必备的物品，就显得很有必要，本手册目的是给出一个可供选择的居家封闭情况下的物品清单。
    </p>

    <div mt-20 />

    <div>
      <button class="m-3 text-base btn" @click="go">
        查看清单
      </button>
    </div>
  </div>
</template>
