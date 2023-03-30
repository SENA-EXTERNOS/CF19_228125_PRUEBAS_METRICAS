<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Pruebas    
    .row.justify-content-center.mb-5
      .col-lg-7
        .cajon.color-acento-botones.p-3
          p Para poder entregar productos de valor y calidad, es importante realizar las pruebas de nuestras aplicaciones, dado que hoy en día son bastante importantes y solicitadas.
     
      .col-lg-5
        img(src="@/assets/curso/temas/tema3/tema3-img-01.svg")     

    separador
    h2 Automatización de pruebas
    
    .crd.clr-paleYellow
      p.p-3.mb-3 Veamos ahora la prueba automatizada, que es un método que utiliza una herramienta de prueba de automatización para escribir y ejecutar un caso de prueba o conjunto de pruebas de automatización en la aplicación de #[i software], comparando los resultados reales con el comportamiento esperado y creando informes de prueba:
      .slyderf-01.p-3.mb-3
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema3/tema3-img-02.svg' alt='AvatarTop')
            .tarjeta.color-secundario.p-4              
              p.p-4.text-center En pocas palabras, los #[i scripts] de prueba de automatización son los #[i scripts] preparados antes de ejecutar la prueba. Cuando sea necesario, estos ejecutarán los códigos de las aplicaciones web para comprobar si cumplen o no los requisitos.


          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema3/tema3-img-03.svg' alt='AvatarTop')
            .tarjeta.color-secundario.p-4            
              p.p-4.text-center Cuando se trata de pruebas automatizadas, es difícil para los testers o personas con el rol de pruebas ser buenos sin tener conocimientos de programación. Pero con el tiempo la herramienta de prueba ha madurado para simplificar el proceso de prueba. Hay muchas herramientas sin código en el mercado que proporcionan el entorno gráfico para que los probadores puedan crear fácilmente casos de prueba.

          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema3/tema3-img-04.svg' alt='AvatarTop')
            .tarjeta.color-secundario.p-4              
              p.p-4.text-center Una de estas herramientas bastante usada es Selenium. Selenium es un kit o conjunto de utilidades para facilitar el trabajo de obtener casos de pruebas en las aplicaciones web. Para ello, se pueden grabar, editar y depurar casos de prueba que podrán ser ejecutados de forma automática e iterativa posteriormente.
          
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema3/tema3-img-05.svg' alt='AvatarTop')
            .tarjeta.color-secundario.p-4              
              p.p-4.text-center Las pruebas automatizadas ayudan a eliminar tareas que consumen demasiado tiempo y son demasiado tediosas para realizarlas manualmente; además, las pruebas automatizadas se pueden ejecutar repetidamente una vez que se han creado. En otras palabras, las pruebas automatizadas ayudan a aumentar la eficacia y la eficiencia de las pruebas de #[i #[b software]].
    
    separador
    h2 Virtualización de servicios
    p La virtualización es una salida para resolver este problema de restricción son el código interno escrito por el desarrollador.
    p.mb-4 El tiempo de comercialización, los costos de desarrollo y la calidad de la aplicación, son las principales prioridades para las organizaciones que desarrollan #[i software]. Veamos:

    .slyderA-img
      SlyderA(tipo="b")(data-aos="fade-left") 
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-5.mb-md-0
            p.texto-slyder.p-3 Las restricciones siguen siendo un desafío fundamental para el desarrollo y la entrega de #[i software] oportuno, rentable y de alta calidad. Un área de enfoque para muchos equipos de desarrollo es la simulación y/o creación de apéndices del código de la aplicación para reducir las dependencias de los componentes del entorno de la aplicación.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema3/tema3-img-07.svg', alt='Texto que describa la imagen').p-3
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-5.mb-4.mb-md-0
            p.texto-slyder.p-3 Las tres opciones que se utilizan tradicionalmente para resolver este problema de restricción son el código interno escrito por el desarrollador, las herramientas propietarias o las herramientas de código abierto, incluido Mockito. Sin embargo, existe una solución mucho más elegante: la virtualización de servicios.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema3/tema3-img-08.svg', alt='Texto que describa la imagen').p-3
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-5.mb-4.mb-md-0
            p.texto-slyder.p-3 Cuando los ingenieros de #[i software], los evaluadores y los administradores de sistemas escuchan por primera vez acerca de la virtualización de servicios, pueden confundirla con la virtualización de servidores o las máquinas virtuales.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema3/tema3-img-09.svg', alt='Texto que describa la imagen').p-3
    
    separador 
    h2.mb-4 Enfoques #[i Shift Left]

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/tema3-img-10.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es un enfoque para realizar pruebas de #[i software] en el que las pruebas se realizan antes en el ciclo de vida. Las prácticas de este enfoque lo que básicamente hacen es integrar sus pruebas en su proceso de desarrollo de #[i software] y, por lo tanto, descubrir errores antes cuando es más fácil y menos costoso repararlos. No realizar un buen diseño puede implicar costos a futuro en términos de tiempo y dinero. Con este enfoque se puede minimizar los errores o defectos de producción y acortar los ciclos de prueba que pueden alargarse.     

    p.mb-3 #[i Shift Left] trata de descubrir tantos problemas lo antes posible, en el proceso de desarrollo de #[i software], de modo que el costo de solucionarlos se encuentre bajo control y también contribuya a mejorar la calidad de los productos enviados. Se concentra en hallar errores en las fases de diseño y desarrollo mucho más que en el resto, y así no tener problemas en producción. Veamos los beneficios que aporta:

    .row.justify-content-around.align-items-center.mb-3
      .col-lg-10
        .row.justify-content-center.mb-3
          .col-lg-12.position-relative
            .crd.crd--avatarHorizontal1.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img(src="@/assets/curso/temas/tema3/tema3-img-11.svg", alt="alt").img100
                .col
                  h5 Detección temprana
                  p Es importante, ya que a futuro puede ser un problema peor.
        .row.justify-content-center.mb-3                  
          .col-lg-12.position-relative
            .crd.crd--avatarHorizontal1.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img(src="@/assets/curso/temas/tema3/tema3-img-12.svg", alt="alt").img100
                .col
                  h5 Ahorro de costes
                  p Mejorar la eficiencia en los equipos de desarrollo.
        .row.justify-content-center.mb-3                  
          .col-lg-12.position-relative
            .crd.crd--avatarHorizontal1.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img(src="@/assets/curso/temas/tema3/tema3-img-13.svg", alt="alt").img100
                .col
                  h5 Fiabilidad en las pruebas
                  p Mejor comprensión del negocio, por lo que se diseñan pruebas más completas porque la participación en el control de calidad desde el principio.
        .row.justify-content-center.mb-3                                    
          .col-lg-12.position-relative
            .crd.crd--avatarHorizontal1.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img(src="@/assets/curso/temas/tema3/tema3-img-14.svg", alt="alt").img100
                .col
                  h5 Potencia el trabajo en equipo
                  p La calidad es responsabilidad de todos.
        .row.justify-content-center.mb-3                                    
          .col-lg-12.position-relative
            .crd.crd--avatarHorizontal1.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img(src="@/assets/curso/temas/tema3/tema3-img-15.svg", alt="alt").img100
                .col
                  h5 Acelera la entrega
                  p Permite probar lo antes posible en los #[i #[b pipelines]] de desarrollo.

    h5.mb-3 Implementación 
    
    .row.justify-content-center.mb-5
      .col-lg-11
        .cajon.color-acento-botones.p-3.mb-3 
          p Estimado aprendiz, lo invitamos a ver el siguiente video en el que se observa el paso a paso en la implementación de las diferentes pruebas, para aplicar con éxito el enfoque #[i Shift Left]:

    .row
      figure.mt-3
        .video
         iframe(width="560" height="315" src="https://www.youtube.com/embed/88079I6CnSo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

     
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
