<script setup lang="ts">
import {PropType} from "@vue/runtime-core";
type Coffee = {
  name: string;
  selected: boolean;
}
const props = defineProps({
  coffee: {
    type: Object as PropType<Coffee>
  }
})
const emit = defineEmits(['select'])

const css = computed(() => {
  let css = 'coffee'
  if (props.coffee?.selected) {
    css += ' selected'
  }
  return css.trim()
})

const onClick = () => {
  emit('select', props.coffee)
}
</script>
<template>
  <article>
    <header>Coffee: </header>
    <ul>
      <li :class="css" @click="onClick">
        <div class="selected-indicator">*</div>
        <div class="name">{{ coffee.coffee.name }}</div>
      </li>
    </ul>
  </article>
</template>
<style lang="scss">
li.item {
  padding: 0;
  outline: solid 1px #eee;
  display: grid;
  grid-template-columns: 1.7em auto;
  cursor: pointer;
  transition: background-color 0.3s ease;
  .name {
    padding: 5px;
    text-align: left;
  }
  .selected-indicator {
    padding: 5px;
    font-size: 3em;
    line-height: 0.5em;
    padding: 5px;
    color: lightgray;
  }
  &.selected {
    .selected-indicator {
      color: skyblue;
    }
  }
  &:hover {
    background-color: #eee;
  }
}
</style>