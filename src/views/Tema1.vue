<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Trazar la ruta de desarrollo de <i>software</i>

    img(src="@/assets/curso/temas/tema1/tema1-img-decorativa-01.svg").tema1-decorativa-01

    p.index-dos.mb-2 Para empezar, hay que aclarar que el proceso de desarrollo de #[em software] está asociado a una serie de tareas informáticas orientadas a la creación, diseño, ejecución y compatibilidad de #[em software]. En otras palabras, el #[em software] implica un conjunto de instrucciones o programas que le indican a un computador qué es lo que debe hacer. Además, funciona de manera independiente del #[em hardware] y esto permite que las computadoras puedan ser programables.
    p.index-dos.mb-5 Veamos, a continuación, el siguiente esquema que ilustra el proceso clásico de desarrollo de #[em software]:

    .row.justify-content-center.align-items-center.mb-5
      .col-12
        .titulo-sexto.color-acento-contenido.mb-2
          h5.mb-0 Figura 1. 
          p.mb-0 #[em Proceso de desarrollo de software]
        img(src="@/assets/curso/temas/tema1/tema1-img-01.png")(data-aos="fade-left")         

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .bloque-texto-1
            .bloque-texto-1__texto      
              p En este orden de ideas, es importante entender que la ruta de desarrollo de #[em software] va desde el análisis, el diseño, la implementación, las pruebas, hasta el mantenimiento. Antes de seguir abordando esta secuencia temática, es importante hacer una claridad acerca del concepto de calidad, que, de hecho, no es algo sencillo de definir y que ha tenido una evolución a través de los años. Echeverry (2008) define calidad como: “Totalidad de propiedades y características de un producto, proceso o servicio que le confiere su aptitud para satisfacer unas necesidades expresadas o implícitas”, definición tomada de la ISO 8402. Por otro lado, en Significados (2022), se da otro concepto sobre calidad: “Capacidad que posee un objeto para satisfacer necesidades implícitas o explícitas, según un parámetro, un cumplimiento de requisitos de calidad”. Según la IEEE, se entiende como: “el grado con el que un sistema, componente o proceso, cumple los requerimientos especificados y las necesidades o expectativas del cliente o usuario”.
      .col-lg-5
        img(src="@/assets/curso/temas/tema1/tema1-img-02.svg")  

    p.mb-3.mt-3 Para cualquier persona, un producto o servicio puede ser considerado de “buena” calidad, mientras que, para otros, de “mala” calidad. El #[em software] se puede considerar como un servicio o producto y la calidad se puede aplicar también a nuestros productos #[em software]. En el desarrollo de #[em software], los atributos de calidad se dan a partir de los requisitos No funcionales del sistema, que, como su nombre lo dice, son aquellos que el #[em software] no hace “directamente”. Por otro lado, una definición “formal” de requisitos No funcionales puede encontrarse en un sinnúmero de textos sobre ingeniería de software; sin embargo, aquí lo vamos a entender como “la manera en que los requisitos funcionales necesitan ser alcanzados”.
    p.mb-5 Veamos algunos de los requisitos No funcionales, según Tsu (2022):        

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src="@/assets/curso/temas/tema1/tema1-img-03.svg")      
      .col-lg-7
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-play
            | Requisitos de performance o rendimiento: se refiere a la efectividad con que una aplicación ejecuta una tarea, el tiempo que tarda en realizarla.
          li 
            i.fas.fa-play
            p.mb-0 Requisitos en tiempo real (#[em real-time]): cuando un programa necesita funcionar en tiempo real, lo que significa que debe completar el procesamiento dentro de un período de tiempo determinado, el rendimiento es un problema.
          li 
            i.fas.fa-play
            p.mb-0 Requisitos de modificabilidad: una aplicación bien diseñada debería contar con un fácil mantenimiento y modificabilidad si en alguna de las fases del desarrollo de #[em software] se pretende cambiar algo en su funcionalidad. 
          li 
            i.fas.fa-play
            | Requisitos de seguridad: las aplicaciones construidas deben ser seguras, no solo seguridad se refiere a que alguien pueda penetrar en ella y hacer daños o acceder a información privada, sino que sea tolerable a errores, se puedan controlar dichos errores, registre errores y transacciones u operaciones realizadas, incluso su código o estructura sea mantenible. 
          li 
            i.fas.fa-play
            | Requisitos de usabilidad: los usuarios finales deben poder manipular el producto final de manera “fácil”, debe ser una aplicación amigable en su manejo e incluso interfaz gráfica de usuario. En una aplicación web, por ejemplo, el menú de navegación sea cómodo de manejar, además se pueda visualizar en distintos dispositivos como tabletas, móviles, etc. Incluso para el caso de aplicaciones web está relacionado con la accesibilidad web.                                                

    .row.justify-content-around.align-items-center.mb-4
      .col-lg-10
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-img
              img(src="@/assets/curso/temas/tema1/tema1-img-04.svg")
            .col-9
              p.text-small #[b Nota:] algunos mencionan que un requisito es lo mismo que un #[b requerimiento]. En teoría podrían ser iguales, pero más exactamente, un requerimiento es lo que el cliente solicita, mientras un requisito es lo que debe cumplir el #[em software].

    p.mb-4 Entre algunos atributos de calidad de #[em software] que se pueden mencionar, según la ISO 9126, están:


    .row.mb-5
      .col-lg-5
        img(src="@/assets/curso/temas/tema1/tema1-img-05.svg")      
      .col-lg-7
        .Acordion-01
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
            .row(titulo="Funcionalidad")
              .col-md-12.mb-4.mb-md-0
                p Es el grado en que el #[em software] satisface las necesidades indicadas.
            .row(titulo="Confiabilidad")
              .col-md-12.mb-4.mb-md-0
                p Cantidad de tiempo que el #[em software] está disponible para su uso.
            .row(titulo="Usabilidad")
              .col-md-12.mb-4.mb-md-0
                p Grado en que el #[em software] es fácil de usar.
            .row(titulo="Eficiencia")
              .col-md-12.mb-4.mb-md-0
                p Grado en que el #[em software] hace óptimo el uso de los recursos del sistema.
            .row(titulo="Facilidad de mantenimiento")
              .col-md-12.mb-4.mb-md-0
                p La facilidad con que una modificación puede ser realizada.
            .row(titulo="Portabilidad")
              .col-md-12.mb-4.mb-md-0
                p La facilidad con que el #[em software] puede ser llevado de un entorno a otro.

    p.mb-3 Los factores que afectan la calidad se pueden categorizar en dos (2) grandes grupos, tales como: factores que se pueden medir directamente y factores que se pueden medir sólo indirectamente. En todos los casos debería aparecer la medición, se debe comparar el #[em software] con una referencia y llegar a una conclusión sobre su calidad. La propuesta de McCal en Pressman (2006) sobre los factores que afectan la calidad del #[em software] están enfocados en tres aspectos importantes como lo son: sus características operativas, su capacidad de cambios, y su adaptabilidad a nuevos entornos.
    p.mb-4 Estos factores fueron propuestos en los años 70, sin embargo, hoy en día, siguen siendo válidos, incluso para aplicaciones modernas de #[em software]:

    .row.justify-content-center.align-items-center.mb-5
      .col-12
        .titulo-sexto.color-acento-contenido.mb-2
          h5.mb-0 Figura 2. 
          p.mb-0 #[em Factores que evalúan la calidad de un software]
        img(src="@/assets/curso/temas/tema1/tema1-img-06.png")  

    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.col-img
              img(src="@/assets/curso/temas/tema1/tema1-img-07.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  b.text-small Para una mayor claridad de este tema, veamos la siguiente tabla en la que se ilustra la relación entre los factores y métricas de calidad:
                .col-sm-auto
                  a.boton.color-acento-botones2(:href="obtenerLink('/downloads/factor-de-calidad.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .row.justify-content-center.align-items-center
      .col-lg-7
        p.mb-0 Antes de referirnos al término de #[b métrica], lea esta definición:
        hr.color-linea.mb-0
        .bloque-texto-b.color-secundario.p-4.mb-3
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-3 …La medición es el proceso por el que se asignan números o símbolos a los atributos de las entidades en el mundo real, de tal manera que las definan de acuerdo con unas reglas claramente definidas…<br/>
            p.pos-texto.mb-0 #[b Ramírez, J. (2022). Métricas y técnicas, sitio web.]
            i.fas.fa-quote-right
        p.mb-3 Cuando se habla de métricas, como su nombre lo dice, es algo que puede ser medible, por ejemplo: la longitud, el tiempo, la masa, el volumen, etc. Pero ocurre que, en el contexto de #[em software], estas medidas no son absolutas. Las métricas del #[em software] son medidas indirectas que van a proporcionar una representación de la calidad del este; las métricas ayudan a los ingenieros de #[em software] o informáticos a profundizar en el diseño y la construcción de las aplicaciones #[em software] que realizan y así obtener un producto de calidad. Las métricas se deben tener en cuenta en cada una de las fases del desarrollo de #[em software]. No obstante, muchos autores afirman que el #[em software] no puede ser medible.
        .row.justify-content-around.align-items-center.mb-4
          .col-lg-12
            .tarjeta.color-secundario.p-3.mb-5
              .row.justify-content-around.align-items-center
                .col-2
                  img(src="@/assets/curso/temas/tema1/tema1-img-09.svg")
                .col-9
                  p.text-small.mb-0 #[b Nota:] Para el desarrollo de productos #[em software] de calidad existen un sinnúmero de modelos y #[em frameworks] que dependen de los autores. Al igual que los requisitos funcionales y atributos de calidad también pueden variar, pero muchos de ellos mencionados anteriormente son en común de manera universal.

      .col-lg-5
        img(src="@/assets/curso/temas/tema1/tema1-img-08.svg") 

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
