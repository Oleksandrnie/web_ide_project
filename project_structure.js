/*
/web_ide_project
├── public/                    - Статические файлы
├── docs/                      - Документация кода
├── src/                       - Исходный код приложения
│   ├── Assets/                - Статические файлы внутри src
│   ├── Components/            - Компоненты интерфейса
│   │   ├── CodeEditor/        - Компонент редактора кода
│   │   │   ├── CodeEditor.jsx      - Основной компонент редактора
│   │   │   └── styles.css     - Стили для редактора
│   │   ├── LanguageSelector/  - Компонент выбора языка
│   │   │   ├── LanguageSelector.jsx      - Компонент выбора языка
│   │   │   └── styles.css     - Стили для выбора языка
│   │   ├── OutputDisplay/     - Компонент вывода результатов
│   │   │   ├── OutputDisplay.jsx      - Компонент вывода
│   │   │   └── styles.css     - Стили для вывода
│   ├── Services/              - Логика взаимодействия с API
│   │   ├── apiClient.ts       - Клиент для работы с моковым сервером
│   │   ├── errorHandler.ts    - Функция обработки ошибок
│   │   └── languages.ts       - Поддерживаемые языки и их конфигурация
│   ├── Utils/                 - Утилитарные функции
│   │   └── syntaxHighlighter.ts - Настройки подсветки синтаксиса
│   ├── App.jsx                - Главный компонент приложения
│   ├── main.jsx               - Точка входа в приложение
│   ├── index.css              - Глобальные стили
│   └── Config/                - Конфигурационные файлы
│       └── eslint.js          - Конфигурация ESLint
├── .gitignore                 - Список игнорируемых файлов и папок
├── README.md                  - Документация по запуску и проекту
├── package.json               - Зависимости и скрипты
├── tsconfig.json              - Конфигурация TypeScript
├── vite.Config.js             - Конфигурация Vite
├── eslint.Config.js           - Конфигурация ESLint
└── .env                       - Переменные окружения
├── index.html                 - Главная HTML страница
 */