<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-around.align-items-center
      .col-lg-8
        p.mb-3 Apreciado aprendiz, bienvenido a este componente formativo, donde se abordarán las temáticas referentes a las pruebas de #[i software], algunos #[i frameworks] y librerías para programación, ruta de desarrollo de #[i software] de calidad, algunas técnicas de pruebas y el tema de #[i rational test.]
        p.mb-3 Después de haber codificado sus productos, deben ser probados para medir la calidad de estos, usando los diferentes tipos de pruebas que también servirán para controlar y encontrar defectos o errores que puedan tener en su codificación.
        p.mb-0 Le invitamos a ver el siguiente video donde se abordarán, de forma general, las temáticas que se estudiarán a lo largo del presente componente formativo:
        
      .col-lg-4
        img(src='@/assets/curso/intro/intro-img-01.svg', alt='Texto que describa la imagen')

    .row
      figure.mb-5.mt-3
        .video
         iframe(width="560" height="315" src="https://www.youtube.com/embed/ljXbHtIxFBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
