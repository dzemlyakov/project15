# project-Mesto14
Version: v.1.0.1

## Описание
Самостоятельный учебный проект для Яндекс.Практикума сайт с карточками – Mesto.
Следущий этап реализации бэкенда: аутентификации пользователей.
Теперь функциональность проекта подразумевает: 
*  создание пользователя 
*  пользователь может создавать и удалять свои карточки 
*  пользователь не может удалить карточку другого пользователя.

В данной работе отрабатываются навыки по взаимодействию с Node.js, Express.js, Mongo.

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
  
