<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-botones(data-aos='flip-up')
      .titulo-principal__numero
        span
          i.fas.fa-sitemap
      h1 Síntesis
    figure.mb-5
      img(src="@/assets/curso/t0-s1.svg", alt="sintesis")

    a.boton.color-acento-botones(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank" type="application/pdf")
      span Descargar
      i.fas.fa-file-download



</template>

<script>
export default {
  name: 'Sintesis',
}
</script>

<style lang="sass"></style>
