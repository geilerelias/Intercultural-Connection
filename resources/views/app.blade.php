<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1">

    <title>Fundación Intercultural Connection</title>
    <meta
        name="description"
        content="SOMOS LA FUNDACIÓN INTERCULTURAL CONNECTIONS.
                Nuestro objetivo es prestar el servicio público esencial de educación, impartiendo educación formal bilingüe (Inglés- español u otros idiomas), para niños, jóvenes y adultos de ambos sexos, en colegios públicos y privados con las modalidades de preescolar, básica primaria, básica secundaria y media vocacional, o las que en el futuro las sustituyan legalmente.Facilitamos la educación no formal, prestamos servicios en áreas socio humanísticos, turísticas, culturales, medioambientales, deportivas y programas de extensión académica.
                Buscamos el desarrollo y la formación integral de los estudiantes, profesionales o personas de la sociedad civil dentro de un profundo sentido humanista y de los valores, así como de conocimientos académicos y de prácticas turísticas, culturales y deportivas, mediante la educación formal y no formal.
                Fomentamos el estudio del turismo y la cultura colombiana en el marco de la cultura universal.
                Establecemos mecanismos que proporcionen el intercambio de experiencias con personas de habla inglesa y otros idiomas.
                Ofrecemos a los estudiantes, profesionales y a toda la comunidad educativa medios o programas que contribuyan a su capacitación y actualización.
                Establecemos actividades periódicas que favorezcan el turismo, la cultura, el medio ambiente, deporte y recreación del grupo familiar de los asociados.
                Estimulamos el acercamiento cultural con los países de habla inglesa y/o países con cualquier otro tipo de idiomas."
    />
    <meta name="keywords" content="Fundacíon Intercultural Connection "/>
    <meta name="author" content="Geiler Elias Radillo Sarmiento"/>

    <meta name="copyright" content="Laravel - vue - vuetify"/>
    <meta name="robots" content="index"/>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600"
          rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}"
          rel="stylesheet">
</head>

<body>
<div id="app">
    <vue-app></vue-app>
</div>
<script src="{{ mix('js/app.js') }}"></script>

</body>

</html>
