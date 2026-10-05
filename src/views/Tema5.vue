<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Medidas preventivas y control de recursos
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p Una vez identificados, evaluados y priorizados los riesgos financieros, es necesario establecer acciones para anticipar sus posibles efectos y proteger los recursos de la unidad económica. Las medidas preventivas y los mecanismos de control permiten actuar sobre situaciones relacionadas con la liquidez, la cartera, los costos, los inventarios y las obligaciones, así como realizar seguimiento y ajustes cuando cambian las condiciones del negocio.
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.1 Medidas preventivas: concepto e importancia
      p.mb-5 Las medidas preventivas son acciones definidas antes de que un riesgo financiero se materialice, con el propósito de disminuir su probabilidad de ocurrencia o reducir sus posibles consecuencias sobre los recursos, la liquidez, los resultados y el cumplimiento de las obligaciones. Su definición debe considerar las causas y características del riesgo previamente identificado.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Finalidad de las medidas preventivas
      p La prevención busca actuar antes de que una situación genere efectos significativos, mediante acciones como programar cobros, hacer seguimiento a la cartera y anticipar necesidades de efectivo. Aunque no elimina todos los riesgos, permite reducir la exposición, preparar alternativas y disminuir sus posibles consecuencias.
      p.mb-5 La siguiente relación permite asociar cada riesgo con su posible causa y una acción preventiva acorde con la situación:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 29.
                span Relación entre riesgo y medida preventiva
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Riesgo identificado
                      th.ajuste-border-tabla.texto-left Posible causa
                      th.texto-left Ejemplo de medida preventiva
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Retraso en recaudos
                      td.ajuste-border-tabla.texto-left Ventas a crédito sin seguimiento.
                      td.texto-left Establecer fechas de cobro y revisar periódicamente la cartera.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Falta de efectivo
                      td.ajuste-border-tabla.texto-left Pagos concentrados en determinados periodos.
                      td.texto-left Elaborar y actualizar el flujo de caja proyectado.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Incremento de costos
                      td.ajuste-border-tabla.texto-left Variación del precio de insumos.
                      td.texto-left Revisar periódicamente costos y alternativas de abastecimiento.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Exceso de inventario
                      td.ajuste-border-tabla.texto-left Compras superiores a las necesidades.
                      td.texto-left Programar compras según ventas y existencias.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Concentración de ventas
                      td.ajuste-border-tabla.texto-left Dependencia de pocos compradores.
                      td.texto-left Buscar progresivamente diferentes clientes o canales de venta.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Aumento de obligaciones
                      td.ajuste-border-tabla.texto-left Adquisición de compromisos sin revisar capacidad de pago.
                      td.texto-left Analizar previamente el flujo disponible y las fechas de vencimiento.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Características de una medida preventiva
          p Para que una medida preventiva sea útil debe responder a un riesgo concreto y permitir establecer con claridad qué debe realizarse. Expresiones generales como “administrar mejor el dinero” no permiten determinar cómo debe aplicarse ni verificar posteriormente su cumplimiento.
          p.mb-5 Las siguientes características contribuyen a que una medida preventiva pueda aplicarse y verificarse adecuadamente:
          .bg-4
            .px-5
              SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t5/img2.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Específica
                    p.mb-0.text-center Debe relacionarse directamente con el riesgo y la situación que se pretende atender.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t5/img3.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Viable
                    p.mb-0.text-center Debe poder aplicarse con los recursos y capacidades disponibles en la unidad económica.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t5/img4.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Comprensible
                    p.mb-0.text-center Debe formularse de manera clara para facilitar su aplicación por las personas responsables.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t5/img5.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Verificable
                    p.mb-0.text-center Debe permitir comprobar su ejecución mediante registros, soportes u otras evidencias.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t5/img6.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Oportuna
                    p.mb-0.text-center Debe establecer cuándo debe realizarse o con qué periodicidad debe aplicarse.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t5/img7.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Ajustable
                    p.mb-0.text-center Debe permitir modificaciones cuando cambien las condiciones del riesgo o de la actividad económica.
      p.mb-5 La definición de responsables, periodicidad y evidencias facilita comprobar posteriormente si la medida fue aplicada y contribuyó a disminuir la exposición al riesgo.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Medidas preventivas y medidas correctivas
      p.mb-5 Las medidas preventivas y correctivas responden a momentos diferentes. La prevención se establece frente a una situación que podría ocurrir, mientras que la corrección se aplica cuando el problema ya se materializó y requiere una actuación sobre sus efectos o causas. La siguiente comparación permite diferenciar las acciones preventivas de aquellas que responden a situaciones ya materializadas:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 30.
                span Diferencia entre medidas preventivas y correctivas
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Situación
                      th.ajuste-border-tabla.texto-left Medida preventiva
                      th.texto-left Medida correctiva
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Posible retraso de clientes
                      td.ajuste-border-tabla.texto-left Establecer fechas y seguimiento de cobro.
                      td.texto-left Gestionar el recaudo de cartera ya vencida.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Posible faltante de efectivo
                      td.ajuste-border-tabla.texto-left Proyectar entradas y pagos futuros.
                      td.texto-left Reorganizar compromisos frente a un faltante existente.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Posible incremento de inventarios
                      td.ajuste-border-tabla.texto-left Programar compras según necesidades.
                      td.texto-left Ajustar compras cuando ya existe exceso de existencias.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Posible aumento de costos
                      td.ajuste-border-tabla.texto-left Revisar periódicamente precios de insumos.
                      td.texto-left Ajustar decisiones después de producirse el incremento.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Posible dificultad para pagar una obligación
                      td.ajuste-border-tabla.texto-left Revisar la capacidad de pago antes de asumirla.
                      td.texto-left Gestionar una obligación que ya presenta incumplimiento.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Importancia para el manejo financiero
          p.mb-5 Las medidas preventivas permiten pasar de una administración reactiva a una gestión anticipada de los recursos. Su aplicación favorece la detección oportuna de dificultades y contribuye a proteger la continuidad de la actividad mediante decisiones sustentadas en información financiera. Su importancia se refleja en diferentes aspectos de la gestión financiera:
          .bg-4
            .px-5
              SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t5/img8.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Liquidez
                    p.mb-0.text-center Ayudan a anticipar necesidades de efectivo y posibles dificultades para atender los pagos.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t5/img9.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Cartera
                    p.mb-0.text-center Facilitan el seguimiento oportuno de las cuentas por cobrar y de los vencimientos pendientes.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t5/img10.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Obligaciones
                    p.mb-0.text-center Permiten programar los pagos y evitar concentraciones innecesarias en determinados periodos.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t5/img11.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Costos
                    p.mb-0.text-center Favorecen la identificación temprana de incrementos que pueden afectar los resultados.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t5/img12.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Inventarios
                    p.mb-0.text-center Contribuyen a evitar compras o acumulaciones superiores a las necesidades de la actividad.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t5/img13.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Endeudamiento
                    p.mb-0.text-center Facilitan analizar la capacidad de pago antes de asumir nuevos compromisos financieros.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t5/img14.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Toma de decisiones
                    p.mb-0.text-center Permiten actuar con información antes de que el riesgo financiero llegue a materializarse.
              .caja-7.mb-5(data-aos="fade-right")   
                h4.mb-0 Prevención según el nivel de riesgo
      p Las medidas preventivas deben corresponder con la evaluación realizada previamente. Un riesgo de nivel alto requiere acciones más inmediatas y seguimiento frecuente, mientras que uno de menor afectación puede mantenerse bajo controles proporcionales. La medida también debe adaptarse al tipo de actividad, tamaño, recursos disponibles y características de cada unidad económica.
      p.mb-0 Las medidas preventivas permiten anticipar posibles afectaciones y establecer acciones concretas para proteger los recursos. A partir de esta base, corresponde formular medidas específicas según los riesgos identificados y priorizados, aspecto que se desarrolla en el siguiente subtema.
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Formulación de medidas según riesgos identificados
      p.mb-5 La formulación de medidas preventivas parte de los riesgos previamente identificados, evaluados y priorizados. Cada medida debe responder a las causas y posibles consecuencias de la situación, mediante acciones concretas orientadas a disminuir su probabilidad, reducir su impacto o fortalecer la capacidad de respuesta de la unidad económica.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Relación entre riesgo, causa y medida
      p Una medida preventiva resulta más efectiva cuando actúa sobre la causa del riesgo y no solamente sobre sus consecuencias. Por ello, antes de formularla es necesario precisar qué riesgo se pretende atender, cuál es la condición que puede originarlo y qué acción concreta puede contribuir a disminuir su probabilidad o impacto.
      p.mb-5 La siguiente relación permite vincular cada riesgo con su causa principal y una medida preventiva acorde con la situación:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 31.
                span Relación entre riesgo, causa y medida preventiva
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Riesgo identificado
                      th.ajuste-border-tabla.texto-left Causa principal
                      th.texto-left Medida preventiva propuesta
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Retraso en los recaudos
                      td.ajuste-border-tabla.texto-left Seguimiento insuficiente de ventas a crédito
                      td.texto-left Llevar control de vencimientos y contactar al cliente antes de la fecha de pago.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Falta de efectivo
                      td.ajuste-border-tabla.texto-left Concentración de pagos en determinados periodos
                      td.texto-left Proyectar semanal o mensualmente las entradas y salidas.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Exceso de inventarios
                      td.ajuste-border-tabla.texto-left Compras sin considerar existencias y ventas
                      td.texto-left Revisar el inventario antes de programar nuevas compras.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Aumento de costos
                      td.ajuste-border-tabla.texto-left Variación frecuente de precios de insumos
                      td.texto-left Comparar precios y actualizar periódicamente los costos.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Dependencia de pocos clientes
                      td.ajuste-border-tabla.texto-left Alta concentración de las ventas
                      td.texto-left Ampliar progresivamente los clientes o canales de comercialización.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Dificultad para pagar obligaciones
                      td.ajuste-border-tabla.texto-left Compromisos superiores a la capacidad de pago
                      td.texto-left Revisar el flujo proyectado antes de asumir nuevas obligaciones.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Formulación de acciones concretas
          p Una medida preventiva debe expresar claramente qué se realizará. Formulaciones generales como “controlar más el dinero” o “evitar deudas” dificultan verificar su aplicación. En cambio, una acción como revisar semanalmente las cuentas por cobrar y contactar a los clientes cinco días antes de su vencimiento permite precisar la actividad y su periodicidad.
          p.mb-5 Los siguientes elementos permiten estructurar una medida que pueda aplicarse y verificarse:
          .row.align-items-center.mb-3
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t5/img15.png", alt="" style="width: 500px").m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
                .row(titulo="Riesgo").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Define la situación que se pretende prevenir y establece el punto de partida para formular la medida.
                .row(titulo="Causa").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Identifica la condición que puede originar o favorecer la materialización del riesgo.
                .row(titulo="Acción").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Precisa qué actividad debe realizarse para disminuir la probabilidad o las consecuencias del riesgo.
                .row(titulo="Responsable").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Establece quién tendrá a cargo la ejecución y el seguimiento de la acción definida.
          .row.align-items-center.mb-5
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
                .row(titulo="Periodicidad").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Determina cuándo o con qué frecuencia debe realizarse la medida preventiva.
                .row(titulo="Información requerida").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Identifica los datos, registros o documentos necesarios para aplicar y revisar la medida.
                .row(titulo="Evidencia").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Permite comprobar posteriormente que la acción preventiva fue realizada conforme a lo establecido.
            .col-xl-auto(data-aos="fade-left")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t5/img16.png", alt="" style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Medidas según el tipo de riesgo
      p.mb-5 Las medidas preventivas deben adaptarse al origen de cada exposición financiera. Una acción adecuada para un problema de liquidez no necesariamente responde a un riesgo de crédito o a una variación en los costos. Estas se detallan a continuación:
      .bg-4
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img17.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Liquidez
                p.mb-0.text-center Actualizar el flujo de caja y programar cobros y pagos permite anticipar posibles faltantes y necesidades de efectivo.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img18.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Crédito
                p.mb-0.text-center Revisar vencimientos, registrar abonos y realizar seguimiento a la cartera facilita controlar los recursos pendientes de recaudo.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img19.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Mercado
                p.mb-0.text-center Actualizar costos, comparar proveedores y revisar precios de venta permite anticipar los efectos de variaciones en precios e insumos.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img20.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Tasa de interés
                p.mb-0.text-center Revisar la tasa, las cuotas, el plazo y el flujo proyectado permite valorar las condiciones antes de asumir financiación.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img21.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Tasa de cambio
                p.mb-0.text-center Analizar compromisos vinculados con divisas permite reconocer previamente la exposición a variaciones que puedan modificar su valor.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img22.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Concentración de clientes
                p.mb-0.text-center Diversificar progresivamente clientes o canales de comercialización reduce la dependencia de pocos compradores y la concentración de los ingresos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Priorización de las medidas
      p Las medidas deben organizarse de acuerdo con la prioridad establecida en la evaluación de riesgos. Cuando los recursos son limitados, los esfuerzos deben concentrarse inicialmente en las situaciones con mayor nivel de afectación, considerando también su proximidad, el valor económico comprometido y la capacidad de respuesta de la unidad económica.
      p.mb-5 El siguiente ejemplo integra los riesgos priorizados con las acciones, responsables, periodicidad y evidencias necesarias para su seguimiento:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 32.
                span Ejemplo de plan de medidas preventivas
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Prioridad
                      th.ajuste-border-tabla.texto-left Riesgo
                      th.ajuste-border-tabla.texto-left Medida preventiva
                      th.ajuste-border-tabla.texto-left Responsable
                      th.ajuste-border-tabla.texto-left Periodicidad
                      th.texto-left Evidencia
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold 1
                      td.ajuste-border-tabla.texto-left Retraso en recaudos
                      td.ajuste-border-tabla.texto-left Revisar cartera y contactar clientes próximos a vencer.
                      td.ajuste-border-tabla.texto-left Responsable del negocio
                      td.ajuste-border-tabla.texto-left Semanal
                      td.texto-left Registro de cuentas por cobrar actualizado.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold 2
                      td.ajuste-border-tabla.texto-left Falta de efectivo
                      td.ajuste-border-tabla.texto-left Actualizar flujo de caja y revisar pagos próximos.
                      td.ajuste-border-tabla.texto-left Responsable del negocio
                      td.ajuste-border-tabla.texto-left Semanal
                      td.texto-left Flujo de caja actualizado.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold 3
                      td.ajuste-border-tabla.texto-left Incremento de costos
                      td.ajuste-border-tabla.texto-left Comparar precios de insumos y actualizar costos.
                      td.ajuste-border-tabla.texto-left Responsable de compras
                      td.ajuste-border-tabla.texto-left Mensual
                      td.texto-left Registro de costos y cotizaciones.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold 4
                      td.ajuste-border-tabla.texto-left Exceso de inventarios
                      td.ajuste-border-tabla.texto-left Revisar existencias antes de comprar.
                      td.ajuste-border-tabla.texto-left Responsable de inventario
                      td.ajuste-border-tabla.texto-left Antes de cada compra
                      td.texto-left Registro de existencias.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold 5
                      td.ajuste-border-tabla.texto-left Dependencia de pocos compradores
                      td.ajuste-border-tabla.texto-left Identificar nuevos clientes o canales.
                      td.ajuste-border-tabla.texto-left Responsable comercial
                      td.ajuste-border-tabla.texto-left Mensual
                      td.texto-left Registro de clientes y ventas.
          p Las medidas también deben ser viables según las características y recursos de cada unidad económica. Pueden utilizarse instrumentos sencillos, como formatos de cartera, registros de caja, calendarios de pagos, hojas de cálculo o aplicaciones básicas, siempre que se utilicen de forma constante y permitan realizar seguimiento.
          p.mb-0 La formulación convierte los resultados de la evaluación del riesgo en acciones concretas. Una vez definidos la medida, el responsable, la periodicidad y la evidencia de aplicación, corresponde llevarlas a la práctica, aspecto que se desarrolla en el siguiente subtema.
          Separador
          #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 5.3 Implementación de medidas preventivas
          p.mb-5 La implementación consiste en llevar a la práctica las medidas definidas para atender los riesgos financieros identificados. Para que sean efectivas, deben incorporarse a las actividades habituales de la unidad económica, contar con una persona responsable, establecer cuándo se ejecutarán y conservar evidencias que permitan verificar su cumplimiento.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Puesta en marcha de las medidas
          p.mb-5 La aplicación de una medida preventiva puede organizarse mediante acciones sencillas que permitan pasar de la formulación a su ejecución:
          .bg-1
            .px-5 
              .row.justify-content-center.mb-5
                .col-lg-10
                  PasosA.color-acento-contenido(tipo="n")
                    .row.align-items-center
                      .col-lg.mb-4.mb-lg-0
                        h3 Definir la acción
                        p.mb-0 Se establece con claridad qué actividad debe realizarse para atender el riesgo identificado y disminuir su probabilidad o sus posibles consecuencias.
                      .col-auto(data-aos="zoom-in")
                        figure
                          img(src='@/assets/curso/temas/t5/img23.png', alt='' style="width: 300px").m-auto
                    .row.align-items-center
                      .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                        figure
                          img(src='@/assets/curso/temas/t5/img24.png', alt='' style="width: 300px").m-auto
                      .col-lg.fit___pasosA-left
                        h3 Asignar un responsable
                        p.mb-0 Se determina quién estará encargado de ejecutar la medida y comprobar que se realice conforme a lo establecido.
                    .row.align-items-center
                      .col-lg.mb-4.mb-lg-0
                        h3 Establecer la periodicidad
                        p.mb-0 Se define cuándo debe ejecutarse la acción o con qué frecuencia debe repetirse según las características del riesgo.
                      .col-auto(data-aos="zoom-in")
                        figure
                          img(src='@/assets/curso/temas/t5/img25.png', alt='' style="width: 300px").m-auto
                    .row.align-items-center
                      .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                        figure
                          img(src='@/assets/curso/temas/t5/img26.png', alt='' style="width: 300px").m-auto
                      .col-lg.fit___pasosA-left
                        h3 Registrar la evidencia
                        p.mb-0 Se conserva un registro, documento o soporte que permita comprobar posteriormente que la medida preventiva fue aplicada.
      p.mb-5 La siguiente relación ejemplifica cómo incorporar las medidas preventivas al funcionamiento cotidiano de la unidad económica:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 33.
                span Implementación de medidas preventivas
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Riesgo
                      th.ajuste-border-tabla.texto-left Medida
                      th.ajuste-border-tabla.texto-left Periodicidad
                      th.texto-left Evidencia
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Retraso en recaudos
                      td.ajuste-border-tabla.texto-left Revisar cuentas por cobrar.
                      td.ajuste-border-tabla.texto-left Semanal
                      td.texto-left Registro de cartera.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Falta de efectivo
                      td.ajuste-border-tabla.texto-left Actualizar flujo de caja.
                      td.ajuste-border-tabla.texto-left Semanal
                      td.texto-left  Flujo actualizado.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Incremento de costos
                      td.ajuste-border-tabla.texto-left Revisar precios de insumos.
                      td.ajuste-border-tabla.texto-left Mensual
                      td.texto-left Registro de costos.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Exceso de inventario
                      td.ajuste-border-tabla.texto-left Verificar existencias antes de comprar.
                      td.ajuste-border-tabla.texto-left Antes de cada compra
                      td.texto-left  Control de inventarios.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Obligaciones próximas
                      td.ajuste-border-tabla.texto-left Revisar calendario de pagos.
                      td.ajuste-border-tabla.texto-left Semanal
                      td.texto-left Relación de vencimientos.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Seguimiento de la implementación
          p Implementar una medida no consiste únicamente en ejecutarla. También es necesario comprobar periódicamente si se está cumpliendo y si contribuye a disminuir el riesgo. Por ejemplo, cuando se establece una revisión semanal de la cartera, debe verificarse si los recaudos mejoran o si continúan aumentando los valores vencidos.
          p.mb-5 La revisión puede realizarse mediante los siguientes aspectos:
          .row.align-items-center.mb-3
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t5/img27.png", alt="" style="width: 300px").m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
                .row(titulo="Cumplimiento").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Permite comprobar si la medida se realizó en la fecha o con la periodicidad establecida.
                .row(titulo="Resultado").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Permite establecer si la acción aplicada contribuyó a disminuir el riesgo identificado.
                .row(titulo="Dificultades").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Identifica los problemas que pudieron afectar o impedir la correcta aplicación de la medida.
                .row(titulo="Ajuste").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Permite determinar si es necesario modificar la acción definida o cambiar su frecuencia de ejecución.
      p.mb-0 La implementación convierte las medidas preventivas en acciones concretas dentro de la gestión financiera. Su ejecución y seguimiento permiten establecer si contribuyen a reducir los riesgos identificados y proporcionan la base para definir mecanismos permanentes de control de los recursos.
      Separador
      #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.4 Mecanismos y objetivos del control de recursos
      p.mb-5 El control de recursos comprende las acciones utilizadas para verificar el manejo del efectivo, las cuentas por cobrar y pagar, los inventarios y demás recursos vinculados con la actividad económica. Su aplicación permite realizar seguimiento a los movimientos financieros, detectar diferencias oportunamente y apoyar el cumplimiento de las medidas preventivas.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Objetivos del control de recursos
      p El control debe ajustarse a las características de la unidad económica y concentrarse en los aspectos de mayor importancia financiera. Sus objetivos permiten orientar la revisión periódica de los recursos y disponer de información útil para tomar decisiones.
      p.mb-5 Los principales objetivos del control de recursos son los siguientes:
      .bg-4
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img28.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Efectivo
                p.mb-0.text-center Verificar el uso y la disponibilidad del dinero para conocer los recursos existentes y atender las necesidades de la actividad.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img29.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Cuentas pendientes
                p.mb-0.text-center Controlar los valores por cobrar y pagar para realizar seguimiento a recaudos, vencimientos y obligaciones.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img30.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Inventarios y recursos
                p.mb-0.text-center Realizar seguimiento a las existencias y demás recursos vinculados con el desarrollo de la actividad económica.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img31.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Diferencias
                p.mb-0.text-center Detectar oportunamente movimientos no previstos, inconsistencias o variaciones que requieran revisión.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img32.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Medidas preventivas
                p.mb-0.text-center Comprobar el cumplimiento de las acciones establecidas para reducir la exposición a los riesgos identificados.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img33.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Toma de decisiones
                p.mb-0.text-center Disponer de información organizada que facilite decisiones relacionadas con el manejo y protección de los recursos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Mecanismos para el control de recursos
      p Los mecanismos de control pueden ser sencillos, siempre que permitan registrar, revisar y realizar seguimiento periódico a los recursos de la unidad económica.
      p.mb-5 La siguiente relación presenta algunos mecanismos aplicables según el recurso o aspecto que se requiere controlar:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 34.
                span Mecanismos básicos para el control de recursos
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Recurso o aspecto
                      th.ajuste-border-tabla.texto-left Mecanismo de control
                      th.texto-left Finalidad
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Efectivo
                      td.ajuste-border-tabla.texto-left Registro de entradas, salidas y saldos
                      td.texto-left Conocer la disponibilidad de dinero.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cuentas por cobrar
                      td.ajuste-border-tabla.texto-left Control de clientes y vencimientos
                      td.texto-left  Realizar seguimiento a los recaudos.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cuentas por pagar
                      td.ajuste-border-tabla.texto-left Calendario de obligaciones
                      td.texto-left Programar oportunamente los pagos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Inventarios
                      td.ajuste-border-tabla.texto-left Registro de entradas, salidas y existencias
                      td.texto-left  Evitar faltantes o acumulaciones.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costos y gastos
                      td.ajuste-border-tabla.texto-left Comparación periódica de valores
                      td.texto-left Identificar incrementos significativos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Flujo de caja
                      td.ajuste-border-tabla.texto-left Comparación entre proyectado y realizado
                      td.texto-left  Detectar desviaciones y necesidades de efectivo.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Aplicación del control
          p Para que un mecanismo de control pueda aplicarse y verificarse, debe establecer con claridad qué se revisará, quién realizará la actividad, con qué frecuencia se ejecutará y qué evidencia permitirá comprobar su cumplimiento.
          p Por ejemplo, el control de cartera puede realizarse semanalmente mediante una relación de clientes, valores pendientes y fechas de vencimiento; mientras que el control del efectivo puede efectuarse comparando los registros con los valores disponibles en caja y bancos.
          p.mb-5 El siguiente ejemplo presenta los elementos básicos para organizar un mecanismo de control:
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 35.
                span Organización básica de un mecanismo de control
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Aspecto
                      th.texto-left Ejemplo
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Qué se controla
                      td.texto-left Cuentas por cobrar.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Acción
                      td.texto-left Revisar valores pendientes y vencimientos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Responsable
                      td.texto-left Persona encargada de administrar el negocio.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Periodicidad
                      td.texto-left Semanal.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Evidencia
                      td.texto-left Registro actualizado de cartera.
          p.mb-0 El control de recursos permite verificar periódicamente cómo se administran los fondos y demás elementos financieros de la unidad económica. La información obtenida mediante estos mecanismos facilita detectar desviaciones y constituye la base para realizar seguimiento, ajustes y decisiones de control, aspecto que se desarrolla en el siguiente subtema.
      Separador
      #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.5 Seguimiento, ajustes y decisiones de control
      p.mb-5 El seguimiento permite comprobar si las medidas preventivas y los mecanismos de control están funcionando según lo previsto. Para ello, se revisa periódicamente la información financiera y se comparan los resultados obtenidos con los esperados, con el fin de identificar cambios, realizar ajustes y tomar decisiones oportunas sobre el manejo de los recursos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Revisión de resultados
      p El seguimiento debe comparar lo esperado con lo realmente ocurrido. Cuando una medida no contribuye a reducir el riesgo o un mecanismo de control no permite detectar oportunamente las diferencias, es necesario analizar los resultados y determinar los ajustes requeridos.
      p.mb-5 La siguiente relación permite identificar posibles decisiones a partir de los resultados obtenidos durante el seguimiento:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 36.
                span Seguimiento de medidas y controles
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Aspecto revisado
                      th.ajuste-border-tabla.texto-left Resultado
                      th.texto-left Decisión posible
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cuentas por cobrar
                      td.ajuste-border-tabla.texto-left Aumentan los valores vencidos
                      td.texto-left Fortalecer el seguimiento a clientes
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Flujo de caja
                      td.ajuste-border-tabla.texto-left Se presentan faltantes frecuentes
                      td.texto-left  Revisar cobros, pagos y gastos
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Inventarios
                      td.ajuste-border-tabla.texto-left Existen acumulaciones innecesarias
                      td.texto-left Ajustar las compras
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costos
                      td.ajuste-border-tabla.texto-left Presentan incrementos significativos
                      td.texto-left  Revisar precios y alternativas de abastecimiento
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Obligaciones
                      td.ajuste-border-tabla.texto-left Se concentran pagos en un mismo periodo
                      td.texto-left Reorganizar la programación financiera
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Medida preventiva
                      td.ajuste-border-tabla.texto-left No genera el resultado esperado
                      td.texto-left  Modificar la acción o su periodicidad
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ajustes y decisiones de control
          p Los controles deben adaptarse cuando cambian las condiciones de la actividad económica. Una medida inicialmente suficiente puede requerir mayor frecuencia, un nuevo responsable o información adicional cuando aumenta el nivel de riesgo. Por ello, el seguimiento permite decidir si las acciones deben mantenerse, fortalecerse, modificarse o sustituirse.
          p.mb-5 La siguiente tabla relaciona los resultados del seguimiento con las decisiones de control que pueden adoptarse para mejorar el manejo de los recursos:
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 37.
                span Decisiones derivadas del seguimiento
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Situación
                      th.texto-left Decisión de control
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Los recaudos mejoran.
                      td.texto-left Mantener el mecanismo aplicado.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold El riesgo permanece igual.
                      td.texto-left Revisar la medida implementada.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold El riesgo aumenta.
                      td.texto-left Fortalecer o cambiar el control.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Aparece un nuevo riesgo.
                      td.texto-left Identificarlo, evaluarlo y definir una medida.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold El control resulta difícil de aplicar.
                      td.texto-left Simplificarlo sin perder su finalidad.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cambian las condiciones del negocio.
                      td.texto-left Actualizar la evaluación y los controles.
          p.mb-0  El seguimiento permite mantener actualizados los mecanismos de control y adaptar las medidas preventivas a las condiciones reales de la unidad económica. De esta manera, la información financiera contribuye no solo al registro de las operaciones, sino también a anticipar riesgos, proteger los recursos y sustentar decisiones oportunas.

</template>

<script>
export default {
  name: 'Tema5',
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
