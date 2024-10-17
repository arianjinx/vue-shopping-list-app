import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

const i18n = createI18n({
  locale: 'ja',
  fallbackLocale: 'en',
  messages: {
    en: {
      shoppingList: {
        header: 'Shopping List App',
        cancel: 'Cancel',
        addItem: 'Add Item',
        addItemPlaceholder: 'Add an item',
        highPriority: 'High Priority',
        saveItem: 'Save Item',
        emptyList: 'Nothing to see here',
      },
    },
    ja: {
      shoppingList: {
        header: 'ショッピングリストアプリ',
        cancel: 'キャンセル',
        addItem: 'アイテムを追加',
        addItemPlaceholder: 'アイテムを追加',
        highPriority: '高優先度',
        saveItem: 'アイテムを保存',
        emptyList: '表示するものがありません',
      },
    },
  },
})

createApp(App).use(i18n).mount('#app')
