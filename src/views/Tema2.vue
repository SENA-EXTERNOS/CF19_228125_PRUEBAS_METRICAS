<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Técnicas de prueba

    p.mb-4 Los productos #[em software] deben ser probados para medir su calidad y que cumplan con las especificaciones planteadas iniciales o los cambios que se puedan realizar durante su proceso de desarrollo; las pruebas hacen parte del ciclo de desarrollo del #[em software]. A continuación, se abordan conceptos sobre las diferentes técnicas de pruebas:

    .Acordion-02
      AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--blanca")(data-aos="fade-left") 
        .row(titulo="Basadas en la especificación")
          .col-md-12.mb-4.mb-md-0
            p.mb-2 Estas técnicas usan la especificación del sistema a probar para generar, usando algún tipo de algoritmo, casos de prueba, sin conocer la estructura interna de dicho sistema a probar. También llamadas pruebas de caja negra. La prueba de caja negra se refiere a un método o técnica de prueba en el que se le considera al #[em software] como una caja negra, sin preocuparse por los detalles de implementación, el conocimiento de la ruta interna y la estructura del código interno del #[em software]. Esta técnica de prueba se basa completamente en las especificaciones y requisitos del #[em software]. El enfoque de la prueba de caja negra está en la salida y las entradas del sistema de #[em software] en lugar del conocimiento interno del programa. 
            p.mb-2 El sistema que se somete a este tipo de pruebas es el que se considera como la “caja negra”, que puede ser cualquier #[em software] como una base de datos, un sitio web o un sistema operativo, etc. Las pruebas de caja negra se centran en probar la funcionalidad completa del sistema, así como el comportamiento de este. 
            p.mb-2 Esta técnica es fundamental durante las etapas del ciclo de vida de las pruebas de #[em software], como las pruebas de regresión, la aceptación, la unidad, el sistema, la integración y el desarrollo de #[em software].
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-7
                .crd-paleBlue.mb-3
                  p.p-3 Las técnicas de prueba de caja negra son beneficiosas para los usuarios finales que desean realizar la verificación del #[em software]. Las técnicas más destacadas dentro de estas son:
                ul.lista-ul--color
                  li 
                    i.fas.fa-play
                    | BVA o análisis de valor límite.
                  li
                    i.fas.fa-play
                    | Partición de clases de equivalencia.
                  li
                    i.fas.fa-play
                    | Pruebas de transición de estado.
                  li
                    i.fas.fa-play
                    | Prueba de tabla de decisiones.
                  li
                    i.fas.fa-play
                    | Prueba basada en grafos.
                  li
                    i.fas.fa-play
                    | Técnica de adivinación de errores.              

              .col-lg-5      
                img(src='@/assets/curso/temas/tema2/tema2-img-01.svg', alt='Texto que describa la imagen')
            p Los tipos de prueba de caja negra pueden ser: funcional, de regresión y no funcional.    

        .row(titulo="Basadas en el código")
          .col-md-7.mb-4.mb-md-0
            p.mb-2 Estas técnicas se encargan de generar casos de prueba en función de un criterio de cobertura del código, que indicará cómo generar los casos de prueba, así como el criterio de parada, es decir, cuándo se debe parar de generar casos de prueba porque ya se ha alcanzado el nivel de cobertura del código esperado. Entre los criterios de cobertura existentes se encuentran:
            ul.lista-ul--color
              li 
                i.fas.fa-play
                | Criterios basados en el flujo de control: los casos de prueba se generan basándose en el conocimiento de la estructura de control del programa a probar. A su vez, existen diferentes criterios de cobertura como son la cobertura de sentencias, la cobertura de ramas o decisiones, la cobertura de caminos, la cobertura de condiciones, la cobertura de condiciones/decisiones, o el criterio de cobertura de condición/decisión modificada, entre otros.
              li 
                i.fas.fa-play
                | Criterios basados en el flujo de datos: los casos de prueba se generan basándose en el conocimiento de las operaciones que se realizan sobre las variables en el programa a probar. La idea principal es cubrir caminos del programa a probar en los que aparezca una determinada variable o variables. Para ello, se atiende a diferentes criterios basados en la definición de una variable, su uso, y el camino desde que se define una variable hasta que se usa.           

          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-02.svg', alt='Texto que describa la imagen')
        .row(titulo="Basadas en errores")
          .col-md-7.mb-4.mb-md-0
            p.mb-2 Este tipo de técnicas de pruebas son basadas en el uso de casos de prueba especialmente diseñados para revelar fallos probables o predefinidos. Entre los que se encuentran:
            ul.lista-ul--color
              li 
                i.fas.fa-play
                | Predicción de error: los casos de prueba se diseñan con la intención de “averiguar” qué defectos podrían estar presentes en el componente a probar, basándose únicamente en la experiencia de la persona que esté realizando las pruebas, por ejemplo, como resultado de los errores cometidos anteriormente o la historia de fallos descubiertos en proyectos anteriores.
              li 
                i.fas.fa-play
                | Pruebas de mutación: un mutante es una versión ligeramente modificada (en tiempo de compilación o en tiempo de ejecución) del programa a probar, que difiere en un pequeño cambio sintáctico del programa original. Cada caso de prueba se ejecuta tanto con el código original como con cada uno de los mutantes generados, de tal forma que, si un caso de prueba funciona con el programa original, pero no con un mutante, identificando, por tanto, la diferencia entre ellos, dicho mutante se dice que ha sido “matado”.
              li 
                i.fas.fa-play
                | Pruebas de inyección de fallos: la inyección de fallos es una técnica de pruebas que simula fallos en ciertas partes del código de un programa, con el objetivo de determinar si el sistema, con dicho fallo, se comporta de la manera adecuada al ser ejecutado.
              li 
                i.fas.fa-play
                p.mb-0 #[em Fuzzing]: son un tipo de técnicas de inyección de fallos, que consisten en usar datos inválidos, inesperados y aleatorios (llamados #[em fuzz]) como entrada a un sistema con el objetivo de forzar la ocurrencia de fallos. Hay dos aproximaciones principales para crear los casos de prueba: por mutaciones de muestras de datos existentes, o generando nuevos datos de entrada basados en modelos de la entrada del sistema.

          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-03.svg', alt='Texto que describa la imagen')

        .row(titulo="Basadas en el uso")
          .col-md-7.mb-4.mb-md-0
            p Las técnicas de pruebas basadas en el uso tratan de evaluar la fiabilidad del #[em software] cuando es utilizado de la misma forma que lo usan los usuarios finales en el entorno de producción, con la finalidad de que los defectos puedan aparecer antes de que sea usado por usuarios reales. La fiabilidad del #[em software] se define como la probabilidad de que un sistema #[em software] funcione correctamente sin que se produzca ningún fallo durante un intervalo de tiempo, bajo una serie de condiciones.
        
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-04.svg', alt='Texto que describa la imagen')
        .row(titulo="Basadas en la naturaleza de la aplicación")
          .col-md-7.mb-4.mb-md-0
            p.mb-2 Las técnicas de pruebas explicadas anteriormente pueden ser aplicadas a cualquier tipo de #[em software]. Sin embargo, existen técnicas de pruebas más específicas para realizar las pruebas de forma más eficiente y eficaz para algunos tipos de aplicaciones. Por ejemplo, es posible encontrar técnicas de pruebas específicas para los siguientes tipos de aplicaciones:
            ul.lista-ul--color
              li 
                i.fas.fa-play
                | Aplicaciones orientadas a objetos: en las que se debe tratar con las características de este tipo de aplicaciones, como son la existencia de clases y objetos, abstracción, encapsulación, herencia o polimorfismo.
              li 
                i.fas.fa-play
                | Interfaces gráficas de usuario (GUI): ya sea aplicaciones de escritorio o interfaces web. En este caso, se debe evaluar si la interfaz funciona de la manera esperada, teniendo en cuenta los elementos gráficos que se muestran y cómo éstos reaccionan ante las interacciones con los usuarios.
              li 
                i.fas.fa-play
                | Aplicaciones web: en las que se deben evaluar diferentes criterios como son la funcionalidad, usabilidad, interfaz, rendimiento, seguridad, o accesibilidad de estas.
              li 
                i.fas.fa-play
                | Programas concurrentes: los cuales suelen ser más difíciles de probar que los programas secuenciales, puesto que, al igual que ellos, las pruebas también deben ser ejecutadas concurrentemente, causando en muchos casos que los fallos encontrados no puedan ser reproducidos de manera determinista.
              li 
                i.fas.fa-play
                | Sistemas en tiempo real: los cuales están sujetos a restricciones estrictas de tiempo, es decir, las operaciones deben producir una respuesta en un tiempo determinado.
              li 
                i.fas.fa-play
                p.mb-0 Sistemas de seguridad críticos: esto es, sistemas #[em software] cuyo fallo o mal funcionamiento puede perjudicar gravemente la vida, el medio ambiente o algún tipo de equipamiento.

          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-05.svg', alt='Texto que describa la imagen')
        .row(titulo="Basadas en la finalidad de las mismas")
          .col-md-7.mb-4.mb-md-0
            p.mb-2 Las pruebas del #[em software] se llevan a cabo con la finalidad de realizar algún tipo de comprobación. Por un lado, los casos de prueba pueden ser diseñados para comprobar que las especificaciones funcionales se han implementado correctamente, pero también se pueden utilizar para comprobar otro tipo de aspectos más específicos, dando lugar a otros tipos de pruebas según su finalidad. Algunos ejemplos son los siguientes:
            ul.lista-ul--color
              li 
                i.fas.fa-play
                p.mb-0 Instalación: comprueban que el #[em software] puede ser instalado en el entorno objetivo.
              li 
                i.fas.fa-play
                p.mb-0 Pruebas de compatibilidad: comprueban que el #[em software] sigue funcionando con otras aplicaciones, sistemas operativos o entornos diferente al original.
              li 
                i.fas.fa-play
                p.mb-0 Alpha o Beta #[em Tester]: el objetivo es que un grupo representativo de usuarios utilice el sistema antes de realizar su paso a la etapa en producción.
              li 
                i.fas.fa-play
                p.mb-0 De rendimiento: pruebas de carga, las pruebas de estrés o las pruebas de resistencia que evalúan la capacidad del sistema y los tiempos de respuesta ante una carga determinada o más allá de los límites para los que ha sido diseñado.
              li 
                i.fas.fa-play
                p.mb-0 De recuperación: comprueban el comportamiento del sistema cuando se produce algún tipo de “desastre”.
              li 
                i.fas.fa-play
                p.mb-0 Usabilidad: evalúan cómo de fácil es para los usuarios finales usar y aprender a usar el #[em software].
              li 
                i.fas.fa-play
                p.mb-0 Accesibilidad: comprueban que el #[em software] es accesible, por ejemplo, para personas con visión reducida, audición reducida o movilidad reducida, entre otros aspectos.
              li 
                i.fas.fa-play
                p.mb-0 Seguridad: comprueban la seguridad del sistema, por ejemplo, para protegerlo contra el acceso de usuarios no autorizados o el abuso de usuarios autorizados.
              li 
                i.fas.fa-play
                p.mb-0 Regresión: comprueban que las modificaciones realizadas en el sistema no causen comportamientos indeseados en otras partes del #[em software].

          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-06.svg', alt='Texto que describa la imagen')                                                               

</template>

<script>
export default {
  name: 'Tema2',
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
