<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

interface Item {
  id: number
  label: string
  purchased: boolean
  highPriority: boolean
}

const { t, locale } = useI18n()

const header = computed(() => t('shoppingList.header'))

const editing = ref(false)

const items = ref<Item[]>([
  {
    id: 1,
    label: '10 party hats',
    purchased: true,
    highPriority: false,
  },
  {
    id: 2,
    label: '2 board games',
    purchased: true,
    highPriority: false,
  },
  {
    id: 3,
    label: '20 cups',
    purchased: false,
    highPriority: true,
  },
])

const newItem = ref('')

const newItemHighPriority = ref(false)

const saveItem = () => {
  items.value.push({
    id: items.value.length + 1,
    label: newItem.value,
    purchased: false,
    highPriority: newItemHighPriority.value,
  })
  newItem.value = ''
  newItemHighPriority.value = false
}

const doEdit = (e: boolean) => {
  editing.value = e
  newItem.value = ''
  newItemHighPriority.value = false
}

const togglePurchased = (item: Item) => {
  item.purchased = !item.purchased
}

const reversedItems = computed(() => [...items.value].reverse())

const localeMap: Record<string, string> = {
  en: 'English',
  ja: '日本語',
}

const minItemLength = computed(() => (locale.value === 'ja' ? 2 : 5))
</script>

<template>
  <select v-model="$i18n.locale" class="locale-changer">
    <option
      v-for="locale in $i18n.availableLocales"
      :key="`locale-${locale}`"
      :value="locale"
    >
      {{ localeMap[locale] }}
    </option>
  </select>

  <div class="header">
    <h1>{{ header }}</h1>
    <button v-if="editing" class="btn" @click="doEdit(false)">
      {{ $t('shoppingList.cancel') }}
    </button>
    <button v-else class="btn btn-primary" @click="doEdit(true)">
      {{ $t('shoppingList.addItem') }}
    </button>
  </div>

  <form class="add-item-form" v-if="editing" @submit.prevent="saveItem">
    <input
      v-model.trim="newItem"
      type="text"
      :placeholder="$t('shoppingList.addItemPlaceholder')"
    />
    <label class="checkbox-label">
      <input type="checkbox" v-model="newItemHighPriority" />
      {{ $t('shoppingList.highPriority') }}
    </label>
    <button :disabled="newItem.length < minItemLength" class="btn btn-primary">
      {{ $t('shoppingList.saveItem') }}
    </button>
  </form>

  <ul>
    <li
      v-for="item in reversedItems"
      @click="togglePurchased(item)"
      :key="item.id"
      class="static-class"
      :class="{
        strikeout: item.purchased,
        priority: item.highPriority,
      }"
    >
      {{ item.label }}
    </li>
  </ul>
  <p v-if="!items.length">{{ $t('shoppingList.emptyList') }}</p>
</template>
