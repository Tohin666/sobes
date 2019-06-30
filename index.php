<?php
$db = new PDO("mysql:host=localhost;dbname=sobes", "root");
$query = $db->query("SELECT * FROM `orders` ORDER BY price DESC LIMIT 1;");
$result = $query->fetchAll(PDO::FETCH_ASSOC);
var_dump($result);

//1. Как получить в виде результата все поля из таблицы my_table?
// SELECT * FROM `my_table`;

//2. Как получить в виде результата только поля name_first, name_last, salary из таблицы employee?
// SELECT name_first, name_last, salary FROM `employee`;

//3. Задать таблице my_table псевдоним t и вывести всех, у кого salary выше 3800.
// SELECT t.name_first, t.name_last, t.salary FROM `my_table` t WHERE t.salary > 3800;

//4. Так выбрать страны, из которых поставляют продукцию производители, чтобы страны не повторялись по 2 и более раз.
// SELECT DISTINCT 'country' FROM 'suppliers';

//5. Вывести все автобусы в порядке уменьшения количества мест.
// SELECT * FROM `bus` ORDER BY `place_count` DESC;

//6. Перечислить известные агрегирующие функции в MySQL.
// COUNT, SUM, AVG, MAX, MIN

//7. Есть таблица с полями name и id. Нужно вывести имя с наибольшим id, не используя при этом команду MAX. Как это можно сделать?
// SELECT `name` FROM `users` ORDER BY `id` DESC LIMIT 1;

//8. Обязательно ли писать команды прописными буквами? Сработает ли запрос, если его написать строчными буквами?
// Не обязательно. Сработает.

//9. Что такое SQL-инъекции и как их избегать?
// Внедрение в запрос вредоносного SQL-кода. Нужно предварительно обрабатывать запрос.