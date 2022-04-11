<script setup lang="ts">
const name = $ref('')

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}
</script>

<template>
  <div>
    <div i-fa6-solid-bowl-food text-4xl inline-block />
    <p>
      非常时期囤货清单
    </p>
    <p text-sm op75 mt-10>
      疫情总是在不经意之间来袭，在家中常备一些必备的食品，就显得很有必要，本手册目的是给出一个可供选择的居家封闭情况下的食品清单。
    </p>

    <div mt-20 />

    <div>
      <button class="m-3 text-base btn" :disabled="!name" @click="go">
        查看清单
      </button>
    </div>
  </div>
</template>
