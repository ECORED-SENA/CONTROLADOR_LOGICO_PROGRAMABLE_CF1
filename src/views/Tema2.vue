<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-botones(data-aos='flip-left')
      .titulo-principal__numero
        span 2
      h1 Automatización
    .row.mb-4
      .col-lg-7.slideInUp
        .cajon-b.color-acento-contenido.BotR.p-3.mb-5
          p.mb-3  Surge con la necesidad de mejorar y acelerar los procesos productivos en la industria, en ella se implementan elementos y/o combinaciones de estos para formar sistemas computarizados, electrónicos, mecánicos, neumáticos, hidráulicos, que son operados de manera controlada mediante una CPU. <b>La implementación de estos sistemas ayuda a la reducción de errores, brinda seguridad para el personal operativo y para la empresa, mejora la capacidad de trabajo de los seres humanos para que ejecuten labores de mayor valor.</b>
          p.mb-3  Con la implementación de la automatización en la industria se ha logrado la transferencia de las tareas de producción realizadas por humanos a elementos o equipos tecnológicos, permitiendo que haya mayor seguridad para los operarios, ya que los trabajos que involucran algún riesgo lo hagan las máquinas, <b>además permite que el talento humano se dedique a hacer tareas que generan mayores valores agregados para la empresa.</b>
          p.mb-0  Los sistemas autorizados se forman de dos componentes principales:
      
      .col-lg-5.slideInLeft
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t2-i1.jpg' alt='imagen decorativa')
    
    .row.mb-5.justify-content-center
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t2-f1.svg')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-5.text-center
              br
              .h3 Sección de direccionamiento
              p (mando)
              br
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t2-f2.svg')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-5.text-center
              br
              .h3 Sección de ejecución
              p (operativa)
              br



    .row.mb-5.justify-content-center
      .col-lg-8
        .cajon.color-acento-contenido.p-4(data-aos='flip-left')
          .row
            .col-1
              figure
                img.nW(src='@/assets/curso/t2-ic1.svg' alt='imagen decorativa')
            .col-11
              p.mb-0.text-bold  Las cuales deben estar a cargo de personal capacitado para operarlos o programarlos.
    .row.mb-5
      .col-lg-7(data-aos='slide-left')
        p.mb-3  En distintas áreas y en diferentes empresas se pueden encontrar esta clase de sistemas, lo único que los hace diferentes es la aplicación o función para desarrollar.
        p.mb-3  La implementación de equipos programados <b>optimiza la productividad en las industrias, aumenta la calidad, reduce los costos de producción,</b> esto se logra con la transferencia del trabajo de riesgo a las máquinas, logrando elevar la seguridad de los trabajadores y aumentando la producción al poder funcionar de manera continua y sin cansancio, lo cual reduce costos de mantenimiento y la producción no se detiene.
      .col-lg-5(data-aos='slide-right')
        figure
          img.nW(src='@/assets/curso/t2-i2.svg' alt='imagen decorativa')


    
    #t_2_1.titulo-segundo.color-acento-botones
      h2 2.1. Operación
    
    .row.mb-5.justify-content-center.slideInUp
      .col-lg-10
        .bloque-texto-g.color-primario.custom-cardBlock.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t2-i3.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-0 La operación de la máquina es la sección encargada de la ejecución de las tareas a desarrollar, en esta etapa se encuentran todos los elementos que se encargan de actuar para cumplir con un objetivo, entre los elementos están los motores, compresores, fotodiodos y transductores. Estos elementos son capaces de realizar funciones debidas a la transformación de las magnitudes físicas, al control de movimiento o conversión de fuerzas, por medio de circuitos electrónicos.  En la siguiente imagen se aprecia un brazo robotizado que opera desplazando las cajas.

    h3.titulo-tercero 
      i.fas.fa-angle-right
      | &nbsp;Detectores y captadores
    p.mb-5  Todos los sistemas automatizados requieren elementos para adquirir la información que debe llegar al cerebro de la máquina, estos pueden ser:
    
    TabsB.color-primario.mb-5
      .py-4.py-md-5(titulo="Los transductores" :icono="require('@/assets/curso/t2-ict1.svg')")
        .row
          .col-md-5
            figure.slideInLeft
              img(src='@/assets/curso/t2-i4.jpg', alt='Ejemplo de transductor')
          .col-md-7.mb-4.mb-md-0
            h4 Los transductores
            p Son los que detectan las variaciones de distintas variables o el estado físico de los mismos, ya que se encargan de convertir esta magnitud física en otra de tipo eléctrica. Estos pueden ser transductores tipo todo o nada, es decir, tipo binaria (0 o 1), sí o no; hay transductores numéricos y son aquellos que envían combinaciones binarias, generando un número que se puede transformar a otro sistema numérico; y los transductores analógicos se encargan de entregar señales continuas.       
          
      .py-4.py-md-5(titulo="Los sensores" :icono="require('@/assets/curso/t2-ict2.svg')")
        .row
          .col-md-5
            figure.slideInLeft
              img(src='@/assets/curso/t2-i5.jpg', alt='Ejemplo de sensor')
          .col-md-7.mb-4.mb-md-0
            h4 Los sensores
            p Permiten detectar presencia, posición, materiales, color, marcas, movimientos, presiones. También hay los que permiten medir de manera analógica la presión posición distancia; estos pueden ser sensores de finales de carrera, detectores inductivos, detectores capacitivos, detectores ultrasónicos, fotoeléctricos, detectores de presión.       

    h3.titulo-tercero 
      i.fas.fa-angle-right
      | &nbsp;Accionadores y preaccionadores
    p.mb-5  Son actuadores que se encargan de recibir la señal impartida por la etapa de mando, de allí que esta sea la última etapa del control, y se ejecuta al final del proceso.

    .row.mb-5.justify-content-center
      .col-sm-6.col-xl-4
        .tarjeta.tarjeta-slide.izquierda.color-acento-botones(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/t2-card1.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5.text-center
              .h4 Los accionadores
              p Se encargan de recibir la señal eléctrica enviada por el cerebro de la máquina y convertirla en una ejecución neumática, eléctrica o hidráulica, por ejemplo, el pistón, motor, cilindros, etc.
            .indicador--click(v-if="mostrarIndicador")
      .col-sm-6.col-xl-4
        .tarjeta.tarjeta-slide.izquierda.color-acento-botones(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/t2-card2.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5.text-center
              .h4 Los preaccionadores
              p Se encargan de hacer procesos de conmutación entre las etapas eléctricas, hidráulicas o neumáticas, esta permite la conducción del mando entre el cerebro y los accionadores a través del circuito de potencia.







    
    Separador
    br
    br       
    #t_2_2.titulo-segundo.color-acento-botones
      h2 2.2. Mando
    .row.mb-5
      .col-lg-7
        p.mb-4 <b>En la etapa de mando se utiliza la programación para impartir las instrucciones de las funciones que debe ejecutar el equipo,</b> aquí está ubicado el cerebro de la máquina, también se le puede encontrar como autómata programable y/o unidad central de procesamiento. En los inicios de la tecnología de mando se utilizó relevos (relés o relevadores) electromecánicos, luego las tarjetas electrónicas y módulos lógicos neumáticos, conocida como tecnología cableada.
        figure
          img(src='@/assets/curso/t2-i7.svg', alt='secuencia de funciones')
      .col-lg-5
        figure
          img(src='@/assets/curso/t2-i6.jpg', alt='Ejemplo de tablero de mando')
    
    p.mb-5  A la hora de explicar los automatismos se deben distinguir dos tipos o sistemas diferentes, los automatismos eléctricos de lógica cableada y los automatismos eléctricos de lógica programada. A continuación, se va a explicar detalladamente cada uno de ellos: 

    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones.p-4(titulo="Tecnologías cableadas")
        h4 Tecnologías cableadas
        p Esta tecnología incorpora la dirección de los mandos por medio de cables, todos los elementos están integrados por medio de conexiones entre sus elementos, el principio de la automatización industrial se presentó con este tipo de configuración, estos autómatas incorporan en sus sistemas los relevadores electromecánicos, contadores, válvulas neumáticas, oleo-hidráulicas y entre otros, dependiendo de las necesidades que deba cumplir el circuito a ser cableado.
        .row.justify-content-center
          .col-lg-8
            figure
              img(src='@/assets/curso/t2-e1.jpg', alt='Ejemplo de tecnologias cableadas')    
            figcaption  Ingeniería ISA. (2009). Lógica cableada.     
      .tarjeta.color-acento-botones.p-4(titulo="Tecnologías programadas")
        h4 Tecnologías programadas
        p Con la incorporación de los <b>microprocesadores</b> y sus avances en la industria se ha podido tener un alto impacto y avance en la incursión de los sistemas automatizados. Para la realización de esta clase de equipos se utilizan las computadoras (CPU) o autómatas programables (PLC). Constantemente la evolución de la tecnología trata de hacer que los equipos sean más pequeños, versátiles y  resistentes. Los primeros equipos eran muy grandes, robustos y con pocas funcionalidades en sus programaciones. A diferencia de la tecnología cableada, en la programada se reemplaza contactos auxiliares de relés electromecánicos, contactores de potencia, relés temporizados, relés contadores y demás por PLC, los cuales obedecen a los mandos acorde a la programación asignada.
        .row.justify-content-center
          .col-lg-6
            figure
              img(src='@/assets/curso/t2-e2.jpg', alt='Ejemplo de tecnologias programadas')    
            figcaption  Ingeniería ISA. (2009). Lógica cableada.  

    .row.mb-5.justify-content-center
      .col-lg-10
        .tarjeta.color-primario.p-4.mb-5(data-aos='flip-left')
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              figure
                img.nW(src="@/assets/curso/t1-d1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Actividad didáctica
                  p.mb-0 Póngase a prueba, es hora de responder la siguiente actividad ¡adelante!
                .col-sm-auto
                  a.boton.boton--b(:href="obtenerLink('/actividades/a2/story.html')" target="_blank")
                    span Realizar
                    i.fas.fa-puzzle-piece




























</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
    indicadorImagenZoom: true,
    indicadorTarjetaFlip: true,
    indicadorTarjetaSlide: true,
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
