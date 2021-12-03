<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-botones(data-aos='flip-left')
      .titulo-principal__numero
        span 1
      h1 Seguridad y salud en el trabajo

    .row.mb-5.justify-content-center.slideInUp
      .col-lg-10
        .bloque-texto-g.color-primario.custom-cardBlock.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t1-i1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-0 Es de suma importancia conocer los aspectos que pueden generar situaciones de riesgo en la integridad de las personas en su contexto laboral y así prevenir accidentes que puedan causar pérdidas en la salud o incluso la muerte. 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Kd1y2umYOyQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    #t_1_1.titulo-segundo.color-acento-botones
      h2 1.1. Higiene y seguridad industrial
    
    .row.mb-5
      .col-lg-7(data-aos='slide-left')
        .cajon-b.color-acento-contenido.BotR.p-3.mb-5
          p.mb-0  La higiene industrial es la disciplina preventiva que estudia las condiciones del medio ambiente del trabajo, identificando, evaluando y controlando los contaminantes de origen laboral, para evitar que se produzca un daño en la salud. Puede definirse como la técnica no médica de prevención de enfermedades profesionales; para efectuar una labor evitando los riesgos laborales se debe hacer la identificación e implementación de puntos de control, a fin de contribuir en espacios de trabajo seguros, partiendo de las actividades críticas que se desarrollan en las empresas. <b>Es importante saber los elementos, sus características y espacios requeridos para llevar de manera adecuada la actividad laboral.</b>
      
      .col-lg-5
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t1-i2.jpg' alt='imagen decorativa')

    h3.titulo-tercero 
      i.fas.fa-angle-right
      | &nbsp;Componentes clave de la higiene industrial
    p.mb-5  La higiene industrial abarca una amplia gama de preocupaciones de salud y seguridad en el lugar de trabajo. Estos son algunos conceptos clave de la higiene industrial.

    .neg-margin-x.bg-curved
      .row.justify-content-center
        .col-lg-10
          ImagenInfograficaB.color-primario.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/t1-info1.png', alt='imagen decorativa')

            div(x="12%" y="86%" tooltip="Ver más" numero="+")
              .tarjeta.tarjeta-blanca.p-4.d-flex.align-items-center
                .row
                  .col-lg-2
                    figure
                      img.nW(src='@/assets/curso/t1-b1.svg', alt='icono decorativa')
                  .col-lg-10
                    h5 Ruido
                    p La exposición prolongada al ruido, tanto al sonido deseado como al no deseado puede provocar la pérdida de audición de los trabajadores. Los problemas de ruido se pueden abordar de varias maneras, incluido el diseño de una instalación para minimizar el ruido, la separación de los trabajadores de la maquinaria ruidosa tanto como sea posible y el uso de dispositivos como orejeras o tapones para los oídos, para proteger a los trabajadores.

            div(x="6%" y="54%" tooltip="Ver más" numero="+")
              .tarjeta.tarjeta-blanca.p-4
                .row
                  .col-lg-2
                    figure
                      img.nW(src='@/assets/curso/t1-b2.svg', alt='icono decorativa')
                  .col-lg-10
                    h5 Temperatura
                    p Tanto las temperaturas altas como las bajas pueden causar problemas a los trabajadores. Si las temperaturas son demasiado altas los trabajadores son vulnerables a la insolación o al agotamiento por calor; el golpe de calor es una emergencia médica que requiere atención inmediata. Se debe permitir que los trabajadores se adapten lentamente al calor (aclimatación) y beber pequeñas cantidades de agua con frecuencia, y el aire debe enfriarse siempre que sea posible. La exposición prolongada a bajas temperaturas puede provocar hipotermia o congelación, se debe permitir que los trabajadores usen ropa abrigada y que tomen descansos en temperaturas más cálidas cuando sea posible.

            div(x="13%" y="28%" tooltip="Ver más" numero="+")
              .tarjeta.tarjeta-blanca.p-4
                .row
                  .col-lg-2
                    figure
                      img.nW(src='@/assets/curso/t1-b3.svg', alt='icono decorativa')
                  .col-lg-10
                    h5 Calidad del aire interior
                    p La calidad del aire interior puede verse afectada por muchos factores, incluida la contaminación de las máquinas o herramientas dentro del edificio, la contaminación de las carreteras fuera del edificio, el polvo de los procesos mecánicos o los gases. La mala calidad del aire puede causar problemas que van desde tos crónica hasta náuseas y dolores de cabeza intensos. La ventilación adecuada es importante para garantizar que entre aire fresco en el área de trabajo.

            div(x="60%" y="3%" tooltip="Ver más" numero="+")
              .tarjeta.tarjeta-blanca.p-4
                .row
                  .col-lg-2
                    figure
                      img.nW(src='@/assets/curso/t1-b4.svg', alt='icono decorativa')
                  .col-lg-10
                    h5 Exposición química
                    p Los peligros químicos pueden tomar muchas formas, desde líquidos hasta humos y polvos, y pueden ser absorbidos, inhalados o ingeridos en el sistema de un trabajador. Algunos productos químicos comunes que pueden ser potencialmente peligrosos son los productos de limpieza, la gasolina y los pesticidas. Muchos químicos pueden ser inofensivos en pequeñas dosis, pero incluso algunos químicos comunes pueden causar síntomas en personas particularmente sensibles, y la mayoría de los químicos pueden causar efectos adversos en grandes dosis o cuando no se toman las precauciones de seguridad adecuadas. Estas precauciones incluyen ventilación e higiene personal, como lavarse las manos, que pueden reducir la cantidad de productos químicos absorbidos por la piel, y mantenimiento del equipo para evitar fugas y averías.

            div(x="85%" y="28.5%" tooltip="Ver más" numero="+")
              .tarjeta.tarjeta-blanca.p-4
                .row
                  .col-lg-2
                    figure
                      img.nW(src='@/assets/curso/t1-b5.svg', alt='icono decorativa')
                  .col-lg-10
                    h5 Radiación
                    p Hay dos tipos, radiación no ionizante y radiación ionizante. La radiación ultravioleta (UV) y la radiación láser son los tipos de radiación no ionizante con mayor probabilidad de causar problemas de seguridad, generalmente quemaduras en los trabajadores. La radiación ionizante puede causar riesgos de salud más considerables para los trabajadores y se puede encontrar en entornos que van desde instalaciones de atención médica hasta reactores nucleares y sus instalaciones de apoyo. Este tipo de radiación daña las células y los posibles efectos a largo plazo incluyen cáncer y esterilidad. La exposición a la radiación ionizante debería limitarse tanto como sea posible y los trabajadores deberían protegerse de la radiación con materiales como el plomo o el hormigón.

            div(x="95%" y="54%" tooltip="Ver más" numero="+")
              .tarjeta.tarjeta-blanca.p-4
                .row
                  .col-lg-2
                    figure
                      img.nW(src='@/assets/curso/t1-b6.svg', alt='icono decorativa')
                  .col-lg-10
                    h5 Peligros biológicos
                    p Organismos vivos como hongos, virus y bacterias pueden ingresar al cuerpo y causar infecciones agudas y crónicas. Los trabajadores que trabajan con plantas o animales y los trabajadores de laboratorio o médicos están particularmente en riesgo de peligros biológicos, pero todos los trabajadores pueden estar en riesgo de peligro como el moho y las bacterias que causan la enfermedad del legionario. La higiene adecuada como el lavado de manos, la ventilación, el equipo de protección personal como guantes o respiradores y, en ciertos casos, el aislamiento del peligro, pueden ayudar a minimizar los riesgos asociados con los peligros biológicos.

            div(x="97%" y="86%" tooltip="Ver más" numero="+")
              .tarjeta.tarjeta-blanca.p-4
                .row
                  .col-lg-2
                    figure
                      img.nW(src='@/assets/curso/t1-b7.svg', alt='icono decorativa')
                  .col-lg-10
                    h5 Eliminación o control de peligros
                    p Una vez que se han identificado las condiciones peligrosas existe un enfoque sistemático para eliminar o minimizar el peligro potencial. Esto comienza con el diseño del peligro fuera del proceso u operación, proporcionando ventilación de extracción local, estableciendo prácticas de trabajo adecuadas, proporcionando el equipo de protección personal adecuado y las medidas administrativas aplicables.





    
    Separador
    br
    br    
    #t_1_2.titulo-segundo.color-acento-botones
      h2 1.2. Riesgo laboral y normatividad en salud y seguridad en el trabajo

    .row.mb-5
      .col-lg-2
        figure(data-aos='flip-up')
          img.nW(src='@/assets/curso/t1-ic1.svg', alt='icono decorativo')
      .col-lg-10
        p.mb-0(data-aos='slide-left')  Es la posibilidad que tiene un trabajador de sufrir un determinado daño derivado de su trabajo, se debe identificar los riesgos que pueden ocurrir en el lugar de trabajo, hacer la valoración de peligros asociados a las áreas críticas y definir los controles operacionales que permiten prevenir, mitigar, transmitir y evitar los riesgos laborales.
    
    .tarjeta.bg-sliders.p-5
      SlyderA
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Riesgo laboral
            p La electricidad es uno de los riesgos críticos en las áreas de trabajo, cuando el riesgo es extremo se debe suspender actividades. Se debe tener en cuenta la indumentaria adecuada para el trabajo, evitar el uso de elementos o accesorios que sean conductores de electricidad. Las herramientas deben contener material dieléctrico, debe validar si requiere usar gafas, casco, guantes, botas o equipo especial para desempeñar el trabajo. Es importante tener en cuenta las pausas activas y determinar los tiempos adecuados de ejecución.
        
          .col-md-6
            figure
              img(src='@/assets/curso/t1-s1.png', alt='imagen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Riesgo laboral
            p Para las labores que involucran equipos electrónicos es importante tener en cuenta que siempre está involucrado el riesgo por choque eléctrico, donde la corriente que circula por un elemento energizado al hacer contacto con el ser humano puede causar incluso la muerte, por ejemplo, manipular una toma de corriente sin tener en cuenta las precauciones necesarias, un cable sin aislamiento, un aparato en corto circuito, entre otros factores que puedan generar una descarga eléctrica. 
        
          .col-md-6
            figure
              img(src='@/assets/curso/t1-s2.png', alt='imagen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Riesgo laboral
            p El umbral de percepción de la corriente eléctrica en el cuerpo humano está entre 500 microamperios (μA) y 1 miliamperio (mA); hasta los 6mA es aceptable la descarga, pero hasta los 100mA hay pérdida de movimiento corporal; a partir de 1A se presenta desfibrilación ventricular; hasta 10A se presenta la contracción sostenida del músculo cardiaco y adelante quemaduras y otras lesiones.
        
          .col-md-6
            figure
              img(src='@/assets/curso/t1-s3.png', alt='imagen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Requisitos legales
            p Cada país tiene su legislación con respecto a la seguridad en el trabajo. Colombia se ampara bajo la Resolución 2400 de 1979, expedida por el Ministerio de Trabajo y Seguridad Social, esta surge en el mes de mayo de 1979 y por la cual se establecen disposiciones sobre vivienda, higiene y seguridad industrial en los establecimientos de trabajo.
        
          .col-md-6
            figure
              img(src='@/assets/curso/t1-s4.png', alt='imagen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Requisitos legales
            p La identificación de los requisitos de obligatorio cumplimiento para una entidad determinada depende de su contexto y actividades que desarrolla; el campo de aplicación se define en el Artículo 1º. “Las disposiciones sobre vivienda, higiene y seguridad reglamentadas en la presente resolución se aplican a todos los establecimientos de trabajo, sin perjuicio de las reglamentaciones especiales que se dicten para cada centro de trabajo en particular, con el fin de preservar y mantener la salud física y mental, prevenir accidentes y enfermedades profesionales, para lograr las mejores condiciones de higiene y bienestar de los trabajadores en sus diferentes actividades”.
        
          .col-md-6
            figure
              img(src='@/assets/curso/t1-s5.png', alt='imagen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Estándares mínimos
            p La Resolución 0312 de 2019 del 13 de febrero establece los estándares mínimos del Sistema de Gestión de SST y deroga la Resolución 1111 de 2017. Esta se define mediante el Artículo 1 “establecer los estándares mínimos del Sistema de Gestión de Seguridad y Salud en el Trabajo SG-SST para las personas naturales y jurídicas señaladas en el Artículo 2° de este acto administrativo”.
        
          .col-md-6
            figure
              img(src='@/assets/curso/t1-s6.png', alt='imagen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Estándares mínimos
            p Los presentes estándares mínimos corresponden al conjunto de normas, requisitos y procedimientos de obligatorio cumplimiento de los empleadores y contratantes, mediante los cuales se establecen, verifican y controlan las condiciones básicas de capacidad técnico-administrativa y de suficiencia patrimonial y financiera,  indispensables para el funcionamiento, ejercicio y desarrollo de actividades en el Sistema de Gestión de SST.
        
          .col-md-6
            figure
              img(src='@/assets/curso/t1-s7.png', alt='imagen decorativa')



    Separador
    br
    br
    #t_1_3.titulo-segundo.color-acento-botones
      h2 1.3. Medio ambiente

    .row.mb-5
      .col-lg-2
        figure(data-aos='flip-left')
          img.nW(src='@/assets/curso/t1-ic2.svg', alt='icono decorativo')
      .col-lg-10
        p.mb-0(data-aos='slide-right')  Cumple un factor fundamental en el desarrollo de la vida y en el campo empresarial, es muy importante cumplir con aspectos que permitan mejorar el sistema ambiental, por ello, es importante la identificación de aspectos que puedan afectar la seguridad de los trabajadores y el medio ambiente, en este caso se asocia el control de sustancias químicas e inspecciones planeadas.

    .row.justify-content-center.mb-5
      .col-lg-6
        ImagenInfograficaB.color-primario.mb-5
          template(v-slot:imagen)
            figure
              img.nW(src='@/assets/curso/t1-info2.png', alt='imagen decorativa')

          div(x="92%" y="52%" tooltip="Ver más" numero="+")
            .tarjeta.tarjeta-blanca.p-4
              .row
                .col-lg-2
                  figure
                    img.nW(src='@/assets/curso/t1-c1.svg', alt='icono decorativa')
                .col-lg-10
                  h5 Inspección planeada
                  p Se debe estar presto a colaborar, brindando información al personal encargado de hacer los recorridos de manera programada y verificar el cumplimiento de condiciones seguras en las áreas de trabajo, teniendo presentes los protocolos, las operaciones y los lineamientos de seguridad definidos por la empresa. 
    
          div(x="75%" y="84%" tooltip="Ver más" numero="+")
            .tarjeta.tarjeta-blanca.p-4
              .row
                .col-lg-2
                  figure
                    img.nW(src='@/assets/curso/t1-c2.svg', alt='icono decorativa')
                .col-lg-10
                  h5 Sustancias químicas
                  p Es importante conocer qué elementos o sustancias que se utilizan pueden hacer daño con sus componentes químicos, por eso el control y uso adecuado de estas sustancias, por ejemplo, en la fabricación de los circuitos eléctricos se utiliza el cloruro de hierro (FeCl3), comúnmente llamado percloruro férrico, percloruro de hierro o ácido, se utiliza para reducir el hierro sobrante en las placas de cobre. Se debe tener precauciones en su uso, ya que es toxico y causa daños en los seres humanos y objetos. 
    
    
    
    
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
                  a.boton.boton--b(:href="obtenerLink('/actividades/a1/story.html')" target="_blank")
                    span Realizar
                    i.fas.fa-puzzle-piece













  
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
