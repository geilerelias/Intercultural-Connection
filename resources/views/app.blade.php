<!doctype html>
<html lang="{{ app()->getLocale() }}">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible"
              content="IE=edge">
        <meta name="viewport"
              content="width=device-width, initial-scale=1">
        <meta name="csrf-token"
              content="{{ csrf_token() }}">
        <meta charset="utf-8">
        <meta name="viewport"
              content="width=device-width, initial-scale=1">
        <link rel="shortcut icon"
              type="image/png"
              href="{{ asset('/favicon.ico') }}">

        <!-- CSRF Token -->
        <meta name="csrf-token"
              content="{{ csrf_token() }}">

        <title>{{ config('app.name') }}</title>
        <!-- Fonts -->
        <link rel="dns-prefetch"
              href="//fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css?family=Nunito"
              rel="stylesheet">

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}"
              rel="stylesheet">

        {{-- <style>
            ::-webkit-scrollbar {
                display: none;
            }

        </style> --}}
    </head>

    <body style="overflow-x:hidden !important">
        <div id="app"
             style="overflow-x:hidden !important">
            <vue-app style="overflow-x:hidden !important"></vue-app>
        </div>

        <script src="{{ asset('js/app.js') }}"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
    </body>

</html>
