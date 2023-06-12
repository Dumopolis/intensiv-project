# 👉 [**Nasa Universe**](https://dumopolis.github.io/intensiv-project/#/) 👈
![Screnshot Home Page](https://s758sas.storage.yandex.net/rdisk/78e8838a44dea6e7bb5ce4319283cddd79563f99b6341df7743c93c25b7b45af/648716d7/LPLS9D5sRU7ubdnZrAvu0iPMIdOGpIjVsDyRd54noygv9Ae0tQbTc_bOVYkEW_K-mjwhQjj_i4dceAfgbnvqJg==?uid=0&filename=2023-06-12_11-59-50.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&fsize=628915&hid=f16650b89159d8dda8b1e0a599025795&media_type=image&tknv=v2&etag=42cdb281cf9c98886ac83372fa10bf6d&rtoken=h5C94eUfZ675&force_default=no&ycrid=na-6268bddc77f3cf174751ebc7bcdf3fbf-downloader19h&ts=5fdee4c4223c0&s=ed5a558f5cfbe0cd62d7e23816c8b3e6e5d06009a64cbf6e0242bd99ae0ede76&pb=U2FsdGVkX1_UuegUGcGHfoXd6CNoHFt6C0m2AfEVJGeZBzgLHDQB4gQ6w3PBEWW_A6q-qSR_QpMtlg3o-kLQQYMcF2xyMN_pbz_eyRaYzBg)


### React

- Проект написан с использованием функциональных компонентов в приоритете над классовыми  ☑️ 
- Есть четкое разделение на умные и глупые компоненты  ☑️  Пример [**глупого**](https://github.com/Dumopolis/intensiv-project/blob/main/src/components/Footer/Footer.jsx) и [**умного**](https://github.com/Dumopolis/intensiv-project/blob/main/src/components/Favorites/Favorites.jsx) компонента
- Есть рендеринг списков ☑️  [**Карточки новостей**](https://github.com/Dumopolis/intensiv-project/blob/main/src/components/Cards/Cards.jsx)
- Реализована хотя бы одна форма ☑️ [**Форма авторизации**](https://github.com/Dumopolis/intensiv-project/blob/main/src/components/Form/Form.jsx)
- Есть применение Контекст API ☑️ [**Контекст**](https://github.com/Dumopolis/intensiv-project/blob/main/src/context/context.js)
- Есть применение предохранителя ☑️ [**Предохранитель**](https://github.com/Dumopolis/intensiv-project/blob/main/src/components/ErrorBoundary/ErrorBoundary.jsx) [**его использование**](https://github.com/Dumopolis/intensiv-project/blob/main/src/components/Layout/Layout.jsx#L51)
- Есть хотя бы один кастомный хук ☑️ [**useDebounce**](https://github.com/Dumopolis/intensiv-project/blob/main/src/hooks/useDebounce.js)
- Хотя бы несколько компонентов используют PropTypes ☑️ [**Пример использования**](https://github.com/Dumopolis/intensiv-project/blob/main/src/components/Cards/Cards.jsx#L40)
- Поиск не должен триггерить много запросов к серверу ☑️ Реализовао с помощью кастомного хука [**useDebounce**](https://github.com/Dumopolis/intensiv-project/blob/main/src/hooks/useDebounce.js) - [**Пример использования**](https://github.com/Dumopolis/intensiv-project/blob/main/src/components/SearchBar/SearchBar.jsx#L26)
- Есть применение lazy + Suspense ☑️ [**Роуты обернуты в Suspense**](https://github.com/Dumopolis/intensiv-project/blob/main/src/components/App/App.jsx)

### Redux

- Используется Modern Redux with Redux Toolkit ☑️ 
- Используются слайсы ☑️ [**Слайсы**](https://github.com/Dumopolis/intensiv-project/tree/main/src/store/slices)
- Есть кастомная мидлвара ☑️ [**Мидлвара**](https://github.com/Dumopolis/intensiv-project/blob/main/src/store/middleware/searchMiddleware.js)
- Используется RTK Query ☑️ [**RTK Query**](https://github.com/Dumopolis/intensiv-project/blob/main/src/store/slices/nasaApi.js#L5)
- Используется Transforming Responses ☑️ [**Transforming Responses**](https://github.com/Dumopolis/intensiv-project/blob/main/src/store/slices/nasaApi.js#L20)

## Дополнительно
- Реализована фича “Поделиться в телеграм”, закрытая под фича флагом ☑️ 
[**Сервер**](https://github.com/Dumopolis/intensiv-project/blob/main/server/db.json)
[**Контекст**](https://github.com/Dumopolis/intensiv-project/blob/main/src/context/context.js)
[**Использование**](https://github.com/Dumopolis/intensiv-project/blob/main/src/components/CardOpened/CardOpened.jsx#L76)
- Подключен storybook и созданы несколько сторисов ☑️ [**Footer**](https://github.com/Dumopolis/intensiv-project/blob/main/src/components/Footer/Footer.stories.jsx) [**Form**](https://github.com/Dumopolis/intensiv-project/blob/main/src/components/Form/Form.stories.jsx)
