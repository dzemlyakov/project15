# project-Mesto15
Version: v.1.0.4

## Описание
Самостоятельный учебный проект для Яндекс.Практикума сайт с карточками – Mesto.
Финальный этап реализации бэкенда: создание виртуальной машины и деплой проекта на публичный сервер.
* Сайт доступен по адресу(frontend): https://mestodzhem.tk/  
* (backend) на поддомене: https://api.mestodzhem.tk/ 
В данной работе отрабатываются навыки по взаимодействию с Node.js, Express.js, MongoDB, развертывание сервера на удалённой виртуальной машине. Также добавлен центральный обработчик ошибок и реализована валидация введёных данных с помощью celebrate и Joi.  

## Инструкция для запуска

**Локальный запуск**
1. Клонировать репозиторий
2. Установить модули npm с помощью команды:
    ```
        npm install
    ```
3. Подключиться к базе Mongo с помощью команды(предварительно требуется создать базу под именем mestodb):
    ```
        mongod
    ```
4. Локально запустить сайт по адресу http://localhost:3000 с помощью команды:
    ```
        npm run start
    ``` 
5. Запуск с hot-reload осуществляется по команде:
    ```
        npm run dev
    ```

* Запрос POST /signup создаёт пользователя (в теле запроса необходимо предавать json-объект с полями "name", "about", "avatar", "paswsword", "email");
* Запрос POST /signin вход пользователя(в теле запроса необходимо предавать json-объект с полями "email" и "password");
* Запрос на POST /cards создаёт карточку (в теле запроса необходимо предавать json-объект с полями "name" и "link");
* Запрос DELETE /cards/:id удаляет карточку по id;
  
