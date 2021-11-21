<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Seguridad y salud en el trabajo

    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t1-i1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Es de suma importancia conocer los aspectos que pueden generar situaciones de riesgo en la integridad de las personas en su contexto laboral y así prevenir accidentes que puedan causar pérdidas en la salud o incluso la muerte. 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    #t_1_1.titulo-segundo.color-acento-botones
      h2 1.1. Higiene y seguridad industrial
    
    .row.mb-5
      .col-lg-7
        .cajon-b.color-acento-contenido.p-3.mb-5
          p.mb-0  La higiene industrial es la disciplina preventiva que estudia las condiciones del medio ambiente del trabajo, identificando, evaluando y controlando los contaminantes de origen laboral, para evitar que se produzca un daño en la salud. Puede definirse como la técnica no médica de prevención de enfermedades profesionales; para efectuar una labor evitando los riesgos laborales se debe hacer la identificación e implementación de puntos de control, a fin de contribuir en espacios de trabajo seguros, partiendo de las actividades críticas que se desarrollan en las empresas. <b>Es importante saber los elementos, sus características y espacios requeridos para llevar de manera adecuada la actividad laboral.</b>
      
      .col-lg-5
        figure
          img(src='@/assets/curso/t1-i2.jpg' alt='imagen decorativa')

    h3.titulo-tercero Componentes clave de la higiene industrial
    p.mb-5  La higiene industrial abarca una amplia gama de preocupaciones de salud y seguridad en el lugar de trabajo. Estos son algunos conceptos clave de la higiene industrial.

    








    
    Separador
    br
    br    
    #t_1_2.titulo-segundo.color-acento-botones
      h2 1.2. Riesgo laboral y normatividad en salud y seguridad en el trabajo



    Separador
    br
    br
    #t_1_3.titulo-segundo.color-acento-botones
      h2 1.3. Medio ambiente

































    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    Muestras
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
