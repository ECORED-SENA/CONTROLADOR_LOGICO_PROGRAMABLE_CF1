<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones(data-aos='flip-left')
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5  Estimado estudiante bienvenido al componente formativo “El cerebro de las máquinas”, para iniciar consulte el siguiente video para conocer  más sobre el tema.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/i9PnyMhUCPI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    




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
