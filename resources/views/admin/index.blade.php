<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Проверка уникальности</title>

    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
</head>
<body>
<div id="app">
    <app></app>
</div>


<script src="{{ mix('js/vendor.js','assets/admin') }}"></script>
<script src="{{ mix('js/manifest.js','assets/admin') }}"></script>
<script src="{{ mix('js/app.js','assets/admin') }}"></script>
</body>
</html>
