<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p La información financiera permite transformar los registros de las operaciones económicas en datos organizados que facilitan comprender la situación y los resultados del negocio. A partir de la consolidación de activos, pasivos, patrimonio, ingresos, costos y gastos, es posible elaborar estados financieros básicos y disponer de una base para analizar el comportamiento de los recursos, las obligaciones y los resultados obtenidos durante un periodo.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/intro/img1.png', alt='').m-auto
              .col-xl.caja-1__texto
                p.mb-0 El análisis financiero también comprende el movimiento del efectivo mediante el flujo de caja e identifica las entradas y salidas generadas por la actividad económica. Esta información permite reconocer posibles dificultades de liquidez, anticipar necesidades de recursos y proyectar el comportamiento futuro del efectivo. La comparación entre los valores esperados y los resultados obtenidos facilita interpretar la capacidad del negocio para atender sus compromisos y mantener sus operaciones.
          p.mb-0 Con base en esta información pueden identificarse riesgos financieros que afecten la continuidad y estabilidad de la actividad económica. Examinar su origen, probabilidad e impacto permite establecer prioridades y formular medidas preventivas orientadas a reducir sus efectos. De esta manera, la información financiera, el análisis de liquidez y los mecanismos de control se integran como herramientas para fortalecer la administración de los recursos y respaldar la toma de decisiones oportunas en las economías populares y campesinas.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt='').m-auto 

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
