const puppeteer = require('puppeteer');

async function testYaRu(){
    console.log('Запуск браузера');
    const browser = await puppeteer.launch();
    // todo: создай константу browser и присвой ей результат асинхронного вызова метода launch объекта puppeteer

    console.log('Создание новой вкладки в браузере');
    const page = await browser.newPage();
    // todo: создай константу page и присвоей ей результат асинхронного вызова метода newPage объекта browser

    console.log('Переход на страницу ya.ru');
    await page.goto('https://ya.ru/');
    // todo: напиши команду перехода на страницу 'https://ya.ru/'

    console.log('Ввод текста "Автоматизация тестирования" в поисковую строку');
    const searchField = await page.$('#text'); 
    // todo: создай константу searchField и присвоей ей результат поиска элемента текстового поля
    await searchField.type('Автоматизация тестирования');
    // todo: напиши команду ввода в поле текст 'Автоматизация тестирования'

    console.log('Клик в кнопку "Найти"');
    const searchButton = await page.$('.button[type=submit]');
    // todo: создай константу searchButton и присвоей ей результат поиска элемента кнопки "Найти"
    await searchButton.click();
    // todo: напиши команду клика в кнопку поиска

    console.log('Ожидание перехода в страницу поисковых результатов');    
    // todo: напиши команду ожидания загрузки результата
    await page.waitForNavigation();

    console.log('Получение элементов результата поиска');
    // todo: создай переменную result и положи в неё элемент поисковой выдачи
    let result = await page.$('.serp-item');

    console.log('Сравнение ОР и ФР');
    // todo:
    // напиши конструкцию if-else:
    // если результат null, выведи в консоль "Результаты поиска не найдены"
    // иначе, выведи в консоль "Результаты поиска отобразились" 
    if (result == null) {
        console.log('Результаты поиска не найдены')        
    } else {
        console.log('Результаты поиска отобразились')
    }

    console.log('Закрытие браузера');
    await browser.close();
    // todo: напиши команду асинхронного закрытия браузера
}

testYaRu();