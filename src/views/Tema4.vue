<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Rational Test

    .row.justify-content-center.mb-5
      .col-lg-7
        .cajon.color-acento-botones.p-3
          p En la web oficial de IBM (2022) se encuentran las características de estas tecnologías, como se resume a continuación.     
      .col-lg-5
        img(src="@/assets/curso/temas/tema4/tema4-img-01.svg")  

    separador

    #t_4_1.titulo-segundo.color-acento-contenido.mt-5
      h2 4.1 #[i Rational Test Virtualization Server]

    p.mb-3 Permite pruebas tempranas y frecuentes en el ciclo de vida del desarrollo. Elimina las dependencias al virtualizar parte o la totalidad de una aplicación o base de datos, por lo que los equipos de prueba de #[i software] no tienen que esperar a que comience la disponibilidad de esos recursos.
    p.mb-3 Menciona, según el proveedor, los beneficios y características: 

    .row.mb-3
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p.text-center Reduce el costo. Costo “reducido” para implementar y configurar entornos de aplicaciones complejos, según IBM.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/tema4-img-02.svg')})`}")                      
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p.text-center Gana velocidad y calidad. Ofrecen agilidad y previsibilidad con pruebas de integración continuas al principio del ciclo de vida del desarrollo.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/tema4-img-03.svg')})`}")                      
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p.text-center Reduce riesgos. Permite integrar con #[b IBM #[i Collaborative Lifecycle Management]], que proporciona pruebas colaborativas.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/tema4-img-04.svg')})`}")                      
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p.text-center Virtualización de servicios, #[i software]  y aplicaciones.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/tema4-img-05.svg')})`}")                      
    
    .row.mb-3
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p.text-center Actualización, reutilización y compartir entornos virtualizados.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/tema4-img-06.svg')})`}")                      
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p.text-center Soporte para tecnologías de #[i middleware]. Admite un amplio conjunto de tecnologías de #[i middleware] y mensajería y proveedores de integración en varias industrias. 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/tema4-img-07.svg')})`}")                      
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p.text-center Integración con otras herramientas. Ofrece todas las características de #[b IBM #[i Rational Performance Test Server]] (otra herramienta de IBM) para ayudar a validar el rendimiento y la escalabilidad de las aplicaciones.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/tema4-img-08.svg')})`}")                      
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p.text-center Precios e implementación flexibles. Según IBM, #[b IBM #[i Cloud DevOps for Hybrid Deployment]] ofrece un modelo de consumo basado en FlexPoints adquiribles. Estos se pueden asignar a través de aplicaciones en el paquete.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/tema4-img-09.svg')})`}")                      
    
    separador

    #t_4_2.titulo-segundo.color-acento-contenido.mt-5
      h2 4.2 #[i Rational Test Workbench]
    
    .crd.clr-paleGray
      .row.mb-3
        .col-lg-5
          img(src="@/assets/curso/temas/tema4/tema4-img-10.svg")       
        .col-lg-7  
          .crd.color-secundario.mb-3
            p.p-3.mb-3 Esta solución proporciona pruebas de API, pruebas de interfaz de usuario funcional, pruebas de rendimiento y virtualización de servicios. Según IBM, presentan sus informes bastante completos, al igual que una buena interfaz gráfica. Proporciona herramientas para realizar pruebas de #[i software]  que admiten un enfoque de DevOps, como pruebas de API, pruebas funcionales de interfaz de usuario, pruebas de rendimiento y virtualización de servicios. Automatice y ejecute pruebas antes y con más frecuencia para identificar errores cuando su corrección sea menos costosa. Incluso IBM menciona algunos beneficios, que se pueden encontrar en su web oficial, como:   
          ul.lista-ul--color
            li 
              i.fas.fa-play
              | Reducción de pruebas manuales. Se pueden automatizar todas las pruebas, como la regresión/funcional tradicional o la tecnología de integración y móvil, entre otras.
            li
              i.fas.fa-play
              | Simplicidad de la experiencia de usuario. Se ofrece un entorno de creación completamente integrado para ofrecer una experiencia del usuario coherente en diversos dominios.
            li
              i.fas.fa-play
              | Hallar defectos de las aplicaciones anticipadamente. Se puede realizar la creación de componentes virtuales e iniciar las pruebas. No es necesario esperar a que todo esté disponible para iniciar las pruebas.
            li
              i.fas.fa-play
              | Trabajo con herramientas actuales. Permite realizar integración con otras herramientas para crear escenarios de pruebas, incluyendo aplicaciones de escritorio tradicionales, web y móviles.
            li
              i.fas.fa-play
              | Mejoramiento en la calidad. Permite realizar la integración con otra herramienta de IBM, llamada IBM Rational Quality Manager para mejorar el rendimiento de las tareas de realización de pruebas. 

    p.mb-3 Mencionemos también algunas de sus características:

    .crd.clr-paleBlue
      .slyderf-02.p-3.mb-5
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/tema4-img-11.svg' alt='AvatarTop')
            .tarjeta.color-secundario.p-4              
              p.text-center Creación sin código. Permite utilizar pruebas de guion gráfico (#[i story-board]) para simplificar la creación de pruebas funcionales y de regresión que combinan texto para pruebas en lenguaje natural con edición visual.

          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/tema4-img-12.svg' alt='AvatarTop')
            .tarjeta.color-secundario.p-4            
              p.text-center Modelos de carga de trabajo y pruebas de rendimiento visual sin #[i script]. Permite “acelerar” la entrega de conjuntos de pruebas de rendimiento a gran escala con la gestión automática de respuestas de servidor dinámico.

          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/tema4-img-13.svg' alt='AvatarTop')
            .tarjeta.color-secundario.p-4              
              p.text-center Pruebas de integración continuas. Para desarrollar pruebas de nivel de servicio mediante la grabación del comportamiento del sistema actual, utilizando modelos de lenguaje de ejecución de procesos de negocio o el diseñador de pruebas visual.
          
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/tema4-img-14.svg' alt='AvatarTop')
            .tarjeta.color-secundario.p-4              
              p.text-center Emulación de cargas de trabajo precisa. Para “simplificar” el modelado de diferentes grupos de usuarios y condiciones de carga con el planificador gráfico de cargas de trabajo.

          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/tema4-img-15.svg' alt='AvatarTop')
            .tarjeta.color-secundario.p-4              
              p.text-center Extensibilidad para estándares y protocolos. Adaptación de los servicios actuales o personalizados con funciones de extensibilidad, incluyendo la inserción de código Java o las transformaciones de datos personalizadas, entre otras.

          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/tema4-img-16.svg' alt='AvatarTop')
            .tarjeta.color-secundario.p-4              
              p.text-center Establecimiento de precios y despliegue flexibles. Se da la opción de ganar IBM #[i FlexPoints] de agilidad, que se pueden adquirir y asignar de acuerdo con las necesidades exclusivas de su negocio.

    p.mb-3 La virtualización de servicios suele confundirse con el Mockeo (#[i Mocking] o imitación) y la creación de #[i stubs] de simulación, pero no son lo mismo.

    .row.justify-content-center.align-items-center.mb-3
      .col-12
        img(src="@/assets/curso/temas/tema4/tema4-img-17.png") 
    
    .row.justify-content-center.align-items-center.mb-4
      .col-11
        p Mockeo (Mocking) vs. Virtualización de servicios

    .row.justify-content-center
      .col-lg-8
        .cajon.color-primario.p-3
          p Estimado aprendiz, recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.       

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
