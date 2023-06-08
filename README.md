# Universe Nasa Project

## Требования к проекту

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
