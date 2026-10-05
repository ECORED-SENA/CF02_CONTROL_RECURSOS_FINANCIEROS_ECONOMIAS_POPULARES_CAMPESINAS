<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p A continuación, se presenta a manera de síntesis, un esquema que articula los elementos principales abordados en el desarrollo del componente formativo.
      .row.justify-content-center
        .col-lg-10.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual del componente Información financiera, liquidez y control de riesgos, estructurado en cinco temas. El primero aborda la consolidación de la información financiera mediante la organización de ingresos y egresos, la consolidación de activos, pasivos, patrimonio, ingresos, costos y gastos, la determinación de utilidad o pérdida y la verificación de la información. El segundo desarrolla los estados financieros básicos del negocio, incluidos su marco normativo, el estado de situación financiera, el estado de resultados, la relación entre ambos y su lectura e interpretación. El tercero comprende el flujo de caja y el análisis de liquidez a partir de sus conceptos, entradas y salidas de efectivo, elaboración, identificación de problemas y proyección. El cuarto trata la identificación y evaluación de riesgos financieros mediante su clasificación, reconocimiento a partir de los resultados del negocio y análisis de probabilidad, impacto, nivel de afectación y priorización. Finalmente, el quinto desarrolla las medidas preventivas y el control de recursos mediante su formulación e implementación, los mecanismos y objetivos de control y el seguimiento, los ajustes y las decisiones de control. ")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
