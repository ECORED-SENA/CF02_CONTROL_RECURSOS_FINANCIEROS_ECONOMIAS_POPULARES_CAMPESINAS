<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Identificación y evaluación de riesgos financieros
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p Los riesgos financieros corresponden a situaciones que pueden afectar los recursos, los resultados y la capacidad de una unidad económica para cumplir sus obligaciones. Su análisis permite reconocer posibles afectaciones, clasificarlas y valorar su probabilidad e impacto, con el propósito de establecer prioridades y orientar posteriormente medidas preventivas y mecanismos de control.
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Riesgo financiero: concepto y características
      p.mb-5 El riesgo financiero se relaciona con la posibilidad de que una situación futura afecte desfavorablemente los recursos, los resultados o la capacidad de pago de una unidad económica. Surge en condiciones de incertidumbre, debido a que los ingresos, recaudos, costos, gastos y demás variables financieras pueden comportarse de manera diferente a lo previsto.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Riesgo, incertidumbre y problema financiero
      p.mb-5 La incertidumbre hace parte de la actividad económica y puede generar situaciones que afecten los recursos o resultados del negocio. Los siguientes aspectos permiten comprender cuándo esa incertidumbre constituye un riesgo y cuándo se convierte en un problema financiero:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Incertidumbre en la actividad económica
                  p.mb-0 Toda actividad económica enfrenta situaciones cuyo resultado no puede conocerse completamente con anticipación. Una unidad productiva puede proyectar determinadas ventas, estimar la recuperación de cuentas por cobrar o programar pagos; sin embargo, los resultados reales pueden diferir de lo esperado.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aparición del riesgo financiero
                  p.mb-0 El riesgo aparece cuando la incertidumbre puede generar una afectación financiera. Una disminución de las ventas puede reducir las entradas de efectivo; el incumplimiento de un cliente puede afectar el recaudo, y el aumento de los costos puede disminuir los resultados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Del riesgo al problema financiero
                  p.mb-0 El riesgo corresponde a una situación que puede ocurrir y afectar al negocio, mientras que el problema financiero surge cuando el hecho ya ocurrió y sus consecuencias comienzan a reflejarse en los resultados o en la disponibilidad de recursos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img4.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La siguiente comparación permite diferenciar una situación de riesgo de un problema financiero que ya se ha materializado:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 21.
                span Diferencia entre riesgo y situación materializada
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Situación
                      th.ajuste-border-tabla.texto-left Condición
                      th.texto-left Interpretación
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Existe posibilidad de retraso en el pago de un cliente.
                      td.ajuste-border-tabla.texto-left Riesgo
                      td.texto-left Puede afectar futuras entradas de efectivo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold El cliente venció el plazo y no realizó el pago.
                      td.ajuste-border-tabla.texto-left Problema financiero
                      td.texto-left La cuenta por cobrar presenta incumplimiento.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Se prevé un aumento importante en el precio de un insumo.
                      td.ajuste-border-tabla.texto-left Riesgo
                      td.texto-left Puede elevar los costos futuros.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold El precio del insumo ya aumentó.
                      td.ajuste-border-tabla.texto-left Problema financiero
                      td.texto-left El costo de producción o comercialización se incrementó.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold El flujo proyectado expone posible falta de efectivo.
                      td.ajuste-border-tabla.texto-left Riesgo
                      td.texto-left Puede existir dificultad para atender pagos futuros.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold No existe efectivo suficiente para pagar una obligación vencida.
                      td.ajuste-border-tabla.texto-left Problema financiero
                      td.texto-left Se presenta una dificultad actual de liquidez.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elementos básicos para reconocer un riesgo financiero
          p.mb-5 Para reconocer un riesgo es necesario precisar qué podría ocurrir, cuál puede ser su causa y qué consecuencia produciría. También resulta importante identificar el recurso afectado y considerar posteriormente la probabilidad y el impacto de la situación. Los siguientes elementos permiten estructurar la identificación inicial de una situación de riesgo:
          .row.align-items-center.mb-3
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t4/img5.png", alt="" style="width: 400px").m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
                .row(titulo="Situación de riesgo").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Responde a la pregunta #[b ¿qué podría ocurrir?] Por ejemplo, puede presentarse un retraso en el pago de clientes.
                .row(titulo="Causa").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Permite establecer #[b por qué podría ocurrir] la situación. Por ejemplo, ventas a crédito sin seguimiento suficiente.
                .row(titulo="Consecuencia").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Identifica #[b qué efecto produciría] la materialización del riesgo, como una menor disponibilidad de efectivo.
          .row.align-items-center.mb-5
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
                .row(titulo="Recurso afectado").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Determina #[b qué parte del negocio podría verse comprometida], por ejemplo, la caja o la capacidad de pago.
                .row(titulo="Probabilidad").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Establece #[b qué tan posible es que ocurra] la situación y puede valorarse posteriormente como baja, media o alta.
                .row(titulo="Impacto").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Permite determinar #[b qué tan significativa sería la afectación], que posteriormente puede clasificarse como baja, media o alta.
            .col-xl-auto(data-aos="fade-left")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t4/img6.png", alt="" style="width: 400px").m-auto
      p.mb-5 El siguiente ejemplo integra la situación, su posible causa y la consecuencia financiera asociada:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t4/img7.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1__texto
            h5 Ejemplo aplicado
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                |  #[b Situación de riesgo:] retraso en los pagos de clientes.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                |  #[b Causa posible:] concentración de ventas a crédito.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                |  #[b Consecuencia:] disminución de las entradas de efectivo y dificultad para pagar proveedores.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Características de los riesgos financieros
      p Los riesgos financieros varían de acuerdo con la actividad económica y las condiciones de cada unidad productiva. No todos presentan la misma probabilidad ni generan el mismo nivel de afectación; además, pueden modificarse con el tiempo y relacionarse entre sí.
      p.mb-5 Entre las principales características de los riesgos financieros se encuentran las siguientes:
      .bg-4
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t4/img8.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Origen
                p.mb-0.text-center Pueden surgir de situaciones internas o externas a la unidad económica.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t4/img9.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Afectación
                p.mb-0.text-center Pueden comprometer ingresos, costos, efectivo, obligaciones o patrimonio.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t4/img10.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Variabilidad
                p.mb-0.text-center La probabilidad y el impacto pueden cambiar según la actividad y las condiciones del negocio.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t4/img11.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Interrelación
                p.mb-0.text-center Un riesgo puede presentarse de manera independiente o relacionarse con otras situaciones financieras.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t4/img12.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Identificación
                p.mb-0.text-center Pueden reconocerse mediante el análisis de la información financiera y del comportamiento de la actividad.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t4/img13.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Prevención
                p.mb-0.text-center Su reconocimiento oportuno facilita establecer posteriormente medidas preventivas y mecanismos de control.
          .caja-7.mb-5(data-aos="fade-right")   
            h4.mb-0 Identificación a partir de la información del negocio
      p Los estados financieros y el flujo de caja permiten reconocer señales como disminución reiterada de la utilidad, aumento de las cuentas por cobrar u obligaciones, reducción del efectivo o saldos proyectados negativos. Estas señales no evidencian por sí solas una situación crítica; deben analizarse según sus causas, frecuencia y posible afectación antes de identificar un riesgo específico.
      p.mb-0 El reconocimiento del concepto, las características y los elementos básicos del riesgo permite organizar las situaciones que pueden afectar a la unidad económica. A partir de esta base, corresponde clasificar los riesgos financieros según su naturaleza, aspecto que se desarrolla en el siguiente subtema.
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2  Clasificación de riesgos financieros
      p La clasificación de los riesgos financieros permite organizar las situaciones que pueden afectar los recursos, la disponibilidad de efectivo, el cumplimiento de obligaciones y los resultados del negocio. Reconocer su naturaleza facilita diferenciar las posibles fuentes de afectación y comprender cómo cada tipo de riesgo puede incidir en la actividad económica.
      p.mb-5 Se invita a reproducir el siguiente pódcast para profundizar en la clasificación de los riesgos financieros mediante situaciones relacionadas con la liquidez, el crédito, el mercado y otras condiciones de la actividad económica:
      .row.align-items-center.m-0.mb-0
        .col-xl
          .row.align-items-center.justify-content-center.caja-8(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t4/img14.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="Riesgos financieros: reconocer su origen para anticipar sus efectos"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t4/img15.png" style="max-width: 510px").m-auto
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Identificación de riesgos a partir de resultados del negocio
      p.mb-5 La identificación de riesgos financieros parte de la información sobre el comportamiento de la unidad económica. Los estados financieros, el flujo de caja, las cuentas por cobrar y pagar, los inventarios y los resultados permiten reconocer señales que requieren análisis para determinar sus causas y las posibles consecuencias sobre los recursos o el cumplimiento de las obligaciones.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Información financiera para identificar riesgos
      p Los resultados del negocio deben analizarse de manera conjunta, ya que una cifra aislada no siempre permite determinar la existencia de un riesgo. La información disponible facilita reconocer cambios, concentraciones o comportamientos que pueden requerir un análisis más detallado.
      p.mb-5 Las siguientes fuentes permiten relacionar la información financiera con situaciones que pueden requerir análisis:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 22.
                span Fuentes de información para identificar riesgos financieros
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Información analizada
                      th.ajuste-border-tabla.texto-left Aspecto por identificar
                      th.texto-left Riesgo que puede requerir análisis
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Efectivo y bancos
                      td.ajuste-border-tabla.texto-left Disminución continua del saldo disponible.
                      td.texto-left Liquidez.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cuentas por cobrar
                      td.ajuste-border-tabla.texto-left Aumento de saldos vencidos o retrasos frecuentes.
                      td.texto-left Crédito.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Inventarios
                      td.ajuste-border-tabla.texto-left Crecimiento sin aumento correspondiente de ventas.
                      td.texto-left Liquidez o exposición a cambios de mercado.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cuentas por pagar
                      td.ajuste-border-tabla.texto-left Incremento de obligaciones próximas a vencer.
                      td.texto-left Liquidez.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Obligaciones financieras
                      td.ajuste-border-tabla.texto-left Aumento de cuotas o compromisos financieros.
                      td.texto-left Liquidez o tasa de interés.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ingresos
                      td.ajuste-border-tabla.texto-left Disminución sostenida de ventas.
                      td.texto-left Mercado y capacidad de generación de recursos.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costos
                      td.ajuste-border-tabla.texto-left Incrementos superiores al crecimiento de los ingresos.
                      td.texto-left Mercado.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gastos
                      td.ajuste-border-tabla.texto-left Crecimiento significativo o recurrente.
                      td.texto-left Deterioro del resultado y presión sobre el efectivo.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Resultado del periodo
                      td.ajuste-border-tabla.texto-left Reducción continua de la utilidad o presencia de pérdidas.
                      td.texto-left Riesgo sobre la sostenibilidad financiera.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Flujo de caja
                      td.ajuste-border-tabla.texto-left Saldos bajos o negativos en varios periodos.
                      td.texto-left Liquidez.
          p La revisión conjunta de estas fuentes permite reconocer señales que no siempre resultan evidentes al analizar una sola cifra.
          p.mb-5 Las principales fuentes permiten profundizar en diferentes señales relacionadas con la situación y los resultados del negocio:
          TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
            .py-3.py-md-4(titulo="Identificación desde el estado de situación financiera")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t4/img16.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Identificación desde el estado de situación financiera
                  p.mb-0 Permite reconocer variaciones en el efectivo, las cuentas por cobrar, los inventarios y las obligaciones. Una cartera creciente, mayores pasivos de corto plazo o una reducción del efectivo constituyen señales que requieren análisis antes de determinar la existencia de un riesgo.
            .py-3.py-md-4(titulo="Identificación desde el estado de resultados")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t4/img17.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Identificación desde el estado de resultados
                  p.mb-0   Permite reconocer cambios en ingresos, costos y gastos que pueden afectar progresivamente el desempeño financiero. Si las ventas permanecen estables y los costos aumentan durante varios periodos, la utilidad puede disminuir y limitar la generación de recursos.
            .py-3.py-md-4(titulo="Identificación desde el flujo de caja")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t4/img18.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Identificación desde el flujo de caja
                  p.mb-0    Permite reconocer posibles dificultades de efectivo. Saldos reducidos, salidas superiores a las entradas o proyecciones negativas requieren análisis, especialmente cuando estas situaciones se repiten o la disponibilidad de recursos disminuye progresivamente.
      p.mb-5 Estas señales pueden relacionarse con sus posibles causas para orientar la identificación del riesgo correspondiente:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 23.
                span Señales financieras y posibles riesgos asociados
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Señal
                      th.ajuste-border-tabla.texto-left Posible causa
                      th.texto-left Riesgo por analizar
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Aumento de cartera vencida
                      td.ajuste-border-tabla.texto-left Retrasos o incumplimientos de clientes.
                      td.texto-left Crédito.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Reducción continua del efectivo
                      td.ajuste-border-tabla.texto-left Entradas insuficientes frente a los pagos.
                      td.texto-left Liquidez.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ventas crecientes pero poco efectivo disponible
                      td.ajuste-border-tabla.texto-left Alta proporción de ventas a crédito.
                      td.texto-left Crédito y liquidez.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Incremento de obligaciones de corto plazo
                      td.ajuste-border-tabla.texto-left Mayor utilización de financiación o compras a crédito.
                      td.texto-left Liquidez.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costos creciendo más que las ventas
                      td.ajuste-border-tabla.texto-left Aumento de insumos o condiciones desfavorables de mercado.
                      td.texto-left Mercado.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Disminución progresiva de la utilidad
                      td.ajuste-border-tabla.texto-left Menores ingresos o mayores costos y gastos.
                      td.texto-left Deterioro financiero.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cuotas financieras cada vez mayores
                      td.ajuste-border-tabla.texto-left Cambios en condiciones de financiación.
                      td.texto-left Tasa de interés.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Flujo proyectado negativo
                      td.ajuste-border-tabla.texto-left Pagos previstos superiores a los recursos disponibles.
                      td.texto-left Liquidez.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Dependencia de uno o pocos clientes
                      td.ajuste-border-tabla.texto-left Concentración de ventas y recaudos.
                      td.texto-left Crédito.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Variación del costo de operaciones ligadas a divisas
                      td.ajuste-border-tabla.texto-left Cambios en la tasa de cambio.
                      td.texto-left Tasa de cambio.
          p.mb-5 Una señal requiere análisis adicional antes de establecer el nivel real de afectación, considerando su frecuencia, magnitud y relación con las condiciones de la actividad económica.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Análisis de tendencias y comparaciones
          p La identificación mejora cuando los resultados se comparan entre diferentes periodos. Conocer únicamente una cifra puede limitar la interpretación, mientras que revisar su comportamiento permite reconocer tendencias. Por ejemplo, una cuenta por cobrar de $3.000.000 puede no representar por sí sola una situación preocupante; sin embargo, si la cartera era de $1.000.000 tres meses atrás y continúa aumentando mientras disminuyen los recaudos, existe una señal que requiere mayor atención.
          p.mb-5 El mismo principio puede aplicarse a los gastos, las obligaciones, el efectivo y los resultados. La comparación facilita reconocer cambios sostenidos y diferenciar situaciones ocasionales de comportamientos que podrían afectar progresivamente al negocio.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Procedimiento para identificar un riesgo
          p.mb-5 La identificación puede organizarse mediante una secuencia que permita pasar de los resultados financieros a una descripción concreta del riesgo:
      .bg-1
        .px-5 
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Revisar los resultados y registros
                    p.mb-0 Se examina la información financiera disponible para identificar cambios, concentraciones o situaciones que se aparten del comportamiento habitual de la unidad económica.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img19.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img20.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Determinar la situación y sus causas
                    p.mb-0 Se precisa qué situación podría generar una afectación y se identifican las posibles causas que pueden originarla o favorecer su ocurrencia.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Establecer la posible afectación
                    p.mb-0 Se identifica qué recurso, obligación o resultado podría verse comprometido y se determina el tipo de riesgo relacionado con la situación encontrada.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img21.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img22.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Registrar la situación
                    p.mb-0 El riesgo identificado se documenta de manera clara para conservar la información necesaria y facilitar posteriormente su evaluación y seguimiento.
      p.mb-5 El siguiente ejemplo relaciona los resultados presentados con las situaciones de riesgo que pueden derivarse de ellos:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 24.
                span Ejemplo de identificación de riesgos a partir de resultados
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Resultado
                      th.ajuste-border-tabla.texto-left Situación de riesgo identificada
                      th.ajuste-border-tabla.texto-left Posible consecuencia
                      th.texto-left Tipo de riesgo
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cartera vencida aumentó de $800.000 a $2.000.000.
                      td.ajuste-border-tabla.texto-left Los clientes pueden continuar retrasando los pagos.
                      td.ajuste-border-tabla.texto-left Menores recaudos disponibles.
                      td.texto-left Crédito.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Saldo de caja disminuyó durante tres meses.
                      td.ajuste-border-tabla.texto-left El efectivo puede resultar insuficiente para pagos próximos.
                      td.ajuste-border-tabla.texto-left Incumplimiento de obligaciones.
                      td.texto-left Liquidez.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costo de materias primas aumentó significativamente.
                      td.ajuste-border-tabla.texto-left Los costos pueden continuar reduciendo el margen.
                      td.ajuste-border-tabla.texto-left Disminución de la utilidad.
                      td.texto-left Mercado.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Varias obligaciones vencen durante el mismo mes.
                      td.ajuste-border-tabla.texto-left Los pagos pueden superar los recursos disponibles.
                      td.ajuste-border-tabla.texto-left Faltante temporal de efectivo.
                      td.texto-left Liquidez.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Una alta proporción de ventas depende de un comprador.
                      td.ajuste-border-tabla.texto-left Un incumplimiento podría afectar gran parte de los recaudos.
                      td.ajuste-border-tabla.texto-left Reducción importante del efectivo esperado.
                      td.texto-left Crédito.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Registro de los riesgos identificados
          p.mb-5 Una vez reconocido el riesgo, conviene documentarlo de forma clara y evitar expresiones generales como “falta de dinero” o “ventas malas”. La descripción debe precisar qué podría ocurrir, cuál es su posible causa y qué efecto produciría sobre la unidad económica. El siguiente ejemplo integra estos elementos en una formulación concreta:
          .caja-1(data-aos="zoom-in").mb-5
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t4/img23.png', alt='' style="width: 500px").m-auto
              .col-xl.caja-1__texto
                h5 Ejemplo
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    |  #[b Riesgo identificado:] retraso en el recaudo de ventas a crédito debido al incremento de clientes con pagos vencidos, lo que podría reducir el efectivo disponible para atender proveedores.
                p.mb-0 Esta formulación facilita la evaluación posterior porque define la situación, su origen y la consecuencia esperada.
      p.mb-0 La identificación basada en resultados permite pasar de la revisión de cifras al reconocimiento de situaciones que pueden afectar financieramente a la unidad económica. Una vez identificados y clasificados los riesgos, corresponde valorar su probabilidad e impacto para establecer el nivel de afectación.
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.4 Probabilidad, impacto y nivel de afectación
      p.mb-5 Una vez identificados y clasificados los riesgos financieros, es necesario valorar qué tan posible es que ocurran y qué consecuencias podrían generar. El análisis de la probabilidad y el impacto permite establecer el nivel de afectación de cada riesgo y proporciona información para determinar posteriormente cuáles situaciones requieren mayor atención.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Probabilidad de ocurrencia
      p La probabilidad indica qué tan posible es que un riesgo ocurra y puede estimarse a partir de antecedentes, frecuencia y comportamiento reciente de la actividad. Por ejemplo, si varios clientes han incumplido repetidamente sus fechas de pago, aumenta la posibilidad de que se presenten nuevos retrasos.
      p.mb-5 La siguiente escala permite estimar la probabilidad de ocurrencia a partir de la información y los antecedentes disponibles:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 25.
                span Valoración cualitativa de la probabilidad
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Nivel
                      th.ajuste-border-tabla.texto-left Valor
                      th.texto-left Criterio orientador
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Baja
                      td.ajuste-border-tabla.texto-left 1
                      td.texto-left La situación se presenta pocas veces o existen pocos antecedentes de ocurrencia.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Media
                      td.ajuste-border-tabla.texto-left 2
                      td.texto-left La situación se ha presentado ocasionalmente y podría repetirse.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Alta
                      td.ajuste-border-tabla.texto-left 3
                      td.texto-left La situación ocurre con frecuencia o existen condiciones que favorecen su repetición.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Impacto del riesgo
          p El impacto corresponde a la magnitud de las consecuencias que puede generar un riesgo y se valora según los recursos, resultados, obligaciones o funcionamiento que podrían verse afectados. Debe analizarse junto con la probabilidad, ya que una situación poco frecuente puede ser relevante si sus consecuencias son significativas, mientras que un evento de menor impacto puede adquirir importancia si se presenta repetidamente.
          p.mb-5 La siguiente escala orienta la valoración de las posibles consecuencias financieras:
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 26.
                span Valoración cualitativa del impacto
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Nivel
                      th.ajuste-border-tabla.texto-left Valor
                      th.texto-left Criterio orientador
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Bajo
                      td.ajuste-border-tabla.texto-left 1
                      td.texto-left La afectación puede ser atendida con los recursos habituales y no compromete significativamente la operación.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Medio
                      td.ajuste-border-tabla.texto-left 2
                      td.texto-left La situación puede reducir recursos, resultados o capacidad de pago y requiere acciones de manejo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Alto
                      td.ajuste-border-tabla.texto-left 3
                      td.texto-left La afectación puede comprometer significativamente el efectivo, los resultados o el cumplimiento de obligaciones.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Determinación del nivel de afectación
      p.mb-5 Después de valorar la probabilidad y el impacto, ambas variables pueden combinarse para establecer el nivel de afectación. Para efectos didácticos se utiliza una escala de tres niveles, en la que cada valoración recibe un valor de 1 a 3.
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-xl-6
          .caja-2  
            h5.mb-0 Nivel de afectación = Probabilidad × Impacto
      p.mb-5 La siguiente matriz permite relacionar ambas variables y obtener una valoración básica del riesgo:
      .row.justify-content-center.mb-5
        .col-xl-8
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 27.
            span Matriz didáctica de nivel de afectación
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Probabilidad / Impacto
                  th.ajuste-border-tabla.texto-left Bajo (1)
                  th.ajuste-border-tabla.texto-left Medio (2)
                  th.texto-left Alto (3)
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Baja (1)
                  td.ajuste-border-tabla.texto-left 1 – Bajo
                  td.ajuste-border-tabla.texto-left 2 – Bajo
                  td.texto-left 3 – Medio
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Media (2)
                  td.ajuste-border-tabla.texto-left 2 – Bajo
                  td.ajuste-border-tabla.texto-left 4 – Medio
                  td.texto-left 6 – Alto
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Alta (3)
                  td.ajuste-border-tabla.texto-left 3 – Medio
                  td.ajuste-border-tabla.texto-left 6 – Alto
                  td.texto-left 9 – Alto
      p.mb-5 La valoración obtenida permite interpretar el grado de atención que requiere cada riesgo:
      .bg-4
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-5.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img24.png', alt="" ).m-auto
                  h4.text-center Bajo
                  .caja-5_p
                    p.mb-0.text-center El riesgo requiere seguimiento, pero su probabilidad o sus consecuencias son relativamente limitadas frente a las condiciones de la unidad económica.
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-5.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img25.png', alt="" ).m-auto
                  h4.text-center Medio
                  .caja-5_p
                    p.mb-0.text-center El riesgo requiere mayor atención y el análisis de acciones que permitan reducir su posibilidad de ocurrencia o sus consecuencias.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-5.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img26.png', alt="" ).m-auto
                  h4.text-center Alto
                  .caja-5_p
                    p.mb-0.text-center El riesgo puede comprometer significativamente los recursos o resultados de la unidad económica y requiere atención prioritaria.
          p La valoración debe considerar las condiciones reales del negocio. Una cuenta por cobrar de #[b $1.000.000] puede representar un impacto reducido para una unidad con ventas mensuales de #[b $50.000.000], pero ser considerable para un negocio cuyas ventas mensuales ascienden a #[b $2.000.000]. Por ello, el impacto no depende únicamente del valor monetario, sino de su importancia frente a la capacidad financiera de cada unidad.
          p.mb-5 El siguiente ejemplo refleja cómo los riesgos identificados pueden valorarse mediante la probabilidad, el impacto y el nivel de afectación:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 28.
                span Ejemplo de evaluación de riesgos financieros
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Riesgo identificado
                      th.ajuste-border-tabla.texto-left Probabilidad
                      th.ajuste-border-tabla.texto-left Impacto
                      th.ajuste-border-tabla.texto-left Resultado
                      th.texto-left Nivel de afectación
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Retraso frecuente en pagos de clientes
                      td.ajuste-border-tabla.texto-left Alta (3)
                      td.ajuste-border-tabla.texto-left Alto (3)
                      td.ajuste-border-tabla.texto-left 9
                      td.texto-left Alto
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Insuficiencia de efectivo para pagos próximos
                      td.ajuste-border-tabla.texto-left Media (2)
                      td.ajuste-border-tabla.texto-left Alto (3)
                      td.ajuste-border-tabla.texto-left 6
                      td.texto-left Alto
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Incremento ocasional de costos de insumos
                      td.ajuste-border-tabla.texto-left Media (2)
                      td.ajuste-border-tabla.texto-left Media (2)
                      td.ajuste-border-tabla.texto-left 4
                      td.texto-left Medio
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Aumento poco frecuente de un gasto menor
                      td.ajuste-border-tabla.texto-left Baja (1)
                      td.ajuste-border-tabla.texto-left Baja (1)
                      td.ajuste-border-tabla.texto-left 1
                      td.texto-left Bajo
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Concentración de ventas en un solo comprador
                      td.ajuste-border-tabla.texto-left Media (2)
                      td.ajuste-border-tabla.texto-left Alto (3)
                      td.ajuste-border-tabla.texto-left 6
                      td.texto-left Alto
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Evaluación sustentada en información
          p.mb-5 La valoración no debe asignarse de manera arbitraria. La probabilidad puede sustentarse en antecedentes, frecuencia de los eventos y comportamiento de recaudos, ventas o pagos; mientras que el impacto puede establecerse considerando los valores comprometidos, la disponibilidad de efectivo, los resultados y la capacidad para cumplir las obligaciones. A continuación se presenta un ejemplo:
          .caja-4(data-aos="zoom-in").mb-5
            .row.align-items-center
              .col-xl.order-2.order-lg-1.caja-1__text
                h5 Ejemplo aplicado
                p.mb-0 Si durante seis meses un comprador se retrasó en cuatro oportunidades, existe información que permite sustentar una probabilidad significativa de repetición. Si además ese comprador representa una proporción importante de los recaudos previstos, el impacto de un nuevo incumplimiento podría ser elevado.
              .col-xl-auto.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/temas/t4/img27.png', alt='' style="width: 500px").m-auto     
      p.mb-0 Con esta valoración se obtiene una base para comparar los riesgos identificados y establecer posteriormente cuáles requieren mayor atención, aspecto que se desarrolla en el siguiente subtema.
      Separador
      #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.5 Evaluación y priorización de riesgos
      p La evaluación y priorización de riesgos permite establecer cuáles situaciones requieren mayor atención. Para ello, se integran los resultados obtenidos al identificar y valorar cada riesgo, considerando sus causas, consecuencias y nivel de afectación, con el fin de definir un orden de intervención acorde con las condiciones de la unidad económica.
      p.mb-5 Los siguientes aspectos permiten comprender cómo se organizan los resultados de la evaluación para establecer prioridades:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Integración de los resultados de la evaluación
                  p.mb-0 La evaluación reúne el riesgo identificado, sus posibles causas y consecuencias, la categoría, la probabilidad, el impacto y el nivel de afectación. Integrar esta información evita tomar decisiones basadas únicamente en una percepción general de la situación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img28.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Priorización de los riesgos
                  p.mb-0 Priorizar consiste en establecer un orden de atención según el nivel de afectación. Los riesgos altos requieren mayor atención, los medios necesitan acciones y seguimiento, y los bajos pueden mantenerse bajo revisión según las condiciones del negocio.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img29.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Criterios complementarios para establecer prioridades
                  p.mb-0 Cuando varios riesgos presentan niveles similares, pueden considerarse la magnitud económica, proximidad, frecuencia, concentración, capacidad de pago, continuidad de la actividad y capacidad de respuesta para determinar cuál requiere atención primero.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img30.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Análisis de causas y consecuencias
                  p.mb-0 La priorización también debe considerar las causas y consecuencias de cada riesgo. Identificar estas relaciones facilita orientar las decisiones hacia el origen de la situación y no únicamente hacia sus efectos financieros.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img31.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Registro priorizado de riesgos
                  p.mb-0 Los riesgos pueden organizarse en un registro que incluya su prioridad, causa principal, consecuencia posible, nivel de afectación y aspecto que requiere atención. Este recurso facilita su seguimiento y la posterior formulación de medidas preventivas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img32.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Revisión periódica de la evaluación
                  p.mb-0 La valoración debe actualizarse cuando cambien las ventas, los recaudos, los costos, las obligaciones, el flujo de caja u otras condiciones de la actividad. Un riesgo puede aumentar o disminuir según la evolución del negocio y las medidas adoptadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img33.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Se invita a consultar el siguiente documento complementario para profundizar en la evaluación y priorización de riesgos financieros mediante la integración de resultados, criterios de prioridad y registro de las situaciones identificadas:
      .caja-6.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t2/img32.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Anexo 2. Evaluación y priorización de riesgos financieros
            p.mb-0 
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_02_Ealuacion_Riesgos_Financieros.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

</template>

<script>
import audio1 from '@/assets/curso/temas/t4/audios/audio-ej.mp3'
export default {
  name: 'Tema4',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
