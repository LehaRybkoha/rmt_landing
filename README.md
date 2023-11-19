# Инструкция по работе с проектом

## Окружение

Для работы с проектом рекомендуется использовать актуальную LTS версию [Node.js](https://nodejs.org/en). На текущий момент `18.16.0`.

В качестве пакетного менеджера используется [pnpm](https://pnpm.io/) версии `8.6.6`.  
[Статья](https://fruntend.com/posts/pochemu-stoit-ispolzovat-pnpm) с обзором и основными командами.

В качестве основного фреймворка используется [Nuxt](https://nuxt.com/).  
Перед началом работ рекомендуется ознакомиться с [основными концепциями](https://nuxt.com/docs/guide/concepts/auto-imports) и [отличиями](https://nuxt.com/docs/migration/overview) от 2 версии.

В качестве библиотки управления состояниями используется [Pinia](https://pinia.vuejs.org/).

В качестве инструмента для создания историй исользуется [Histoire](https://histoire.dev/).  
Перед началом работ рекомендуется ознакомиться с [видео](https://www.youtube.com/watch?v=fWcuLqIhrrA).

В качестве утилитарного CSS-фреймворка используется [Tailwind CSS](https://tailwindcss.com/).  
[Документация](https://tailwindcss.ru/) на русском.


## Установка

Перед началом работы с проектом установите зависимости
```bash
pnpm install
```


## Development

Запуск сервера разработки (http://localhost:3000)

```bash
pnpm dev
```

Запуск сервера разработки для историй (http://localhost:6006)

```bash
pnpm story:dev
```


## Production

**Сборка приложения**

```bash
pnpm build
```

Локальный предпросмотр production сборки

```bash
pnpm preview
```

Для более подробной информации по развертыванию, смотреть [документацию](https://nuxt.com/docs/getting-started/deployment).

**Сборка историй**

```bash
pnpm story:build
```

Локальный предпросмотр production сборки историй

```bash
pnpm story:preview
```


## Linting

На проекте используется eslint. Подробности о конфигурации можно посмотреть [здесь](https://github.com/antfu/eslint-config/blob/main/README.md).  
Проверка осуществляется при запуске сборки и перед коммитом. Также есть команды для ручного запуска.

Запуск линтера

```bash
pnpm lint
```

Запуск линтера с исправлением форматирования

```bash
pnpm lint:fix
```


## Модули и плагины

[Nuxt Tailwind](https://tailwindcss.nuxtjs.org/) - модуль для работы с Tailwind CSS  
[Nuxt Swiper](https://github.com/cpreston321/nuxt-swiper) - модуль для подключение слайдера [Swiper.js](https://swiperjs.com/) в виде компонентов Vue  
[VueUse](https://vueuse.org/) - набор различных утилит основаных на Composition API  
[VeeValidate](https://vee-validate.logaretm.com/v4/) - плагин для валидации форм  
[Vue Final Modal](https://vue-final-modal.org/) - плагин для создания модальных окон  
[VueTippy](https://vue-tippy.netlify.app/) - плагин для вывода всплывающих подсказок

## Работа с svg иконками
Для работы с svg иконками используется [vite-svg-loader](https://github.com/jpkleemans/vite-svg-loader).  
Содержимое svg файлов автоматически оптимизируется, цвета для `fill` и `stroke` заменяются на `currentColor` для возможности удобного изменения через `color` в стилях.  
Для удобства использования реализован компонент `Icon`, который в занчении атрибута `name` принимает название или путь до иконки в директроии `~/assetes/icons/`.

```vue
<Icon name="icon-name" />
```
или в случае с вложенной директорией
```vue
<Icon name="folder/icon-name" />
```

При необходимости использования svg в качестве `src` для `img` используется `?url` суффикс.  
Подобные изображения хранить вне директории `icons`, если они используется только в качестве `url`.

```vue
<script setup>
import iconUrl from '~/assets/icon-name.svg?url'
</script>

<img :src="iconUrl" alt="" />
```
или
```vue
<img src="~/assets/icon-name.svg?url" alt="" />
```

## Работа с изображениями

При необходимости конвертиции и оптимизации статичных изображений использовать [vite-imagetools](https://www.npmjs.com/package/vite-imagetools).


## Ресурсы

[Mastering Nuxt](https://masteringnuxt.com/blog)  
[Vue Mastery](https://www.vuemastery.com/vue-cheat-sheet/)

В блогах достаточно хорошие статьи с примерами и описанием реализаций различного функционала. Если не удалось найти нужных примеров в документации, рекомендую посмотреть здесь.
