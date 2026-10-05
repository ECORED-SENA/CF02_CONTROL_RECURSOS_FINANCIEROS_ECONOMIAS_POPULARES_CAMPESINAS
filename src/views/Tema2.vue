<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Estados financieros básicos del negocio
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p Los estados financieros básicos organizan la información obtenida de los registros consolidados para establecer los recursos, las obligaciones, el patrimonio y los resultados de la unidad económica. En el Grupo 3, su preparación se fundamenta en el marco simplificado del Anexo 3 del Decreto 2420 de 2015 y facilita el análisis del efectivo, la liquidez y los riesgos financieros (Decreto 2420 Anexo 3, 2015).
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Marco normativo de la información financiera básica
      p.mb-5 La preparación de información financiera en Colombia se rige por la Ley 1314 de 2009 y los marcos compilados en el Decreto 2420 de 2015. Estas disposiciones buscan que los datos sean comprensibles, transparentes, comparables, pertinentes y confiables para apoyar las decisiones de propietarios, administradores, autoridades y demás usuarios (Ley 1314, 2009).
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Aplicación del marco normativo
      p No todas las economías populares o campesinas pertenecen automáticamente al Grupo 3. La aplicación de este marco depende de las condiciones de la unidad económica, su obligación de llevar contabilidad y el cumplimiento de los requisitos establecidos. Por ello, se utiliza como referente sin asumir que todas las unidades productivas tienen las mismas obligaciones contables (Decreto 1670, 2021).
      p.mb-5 Los principales referentes se organizan según su expedición y función en la preparación de la información financiera:
      .bg-5
        .px-5
          LineaTiempoE.color-acento-contenido(data-aos="zoom-in").mb-5
            .row(titulo="2009" subtitulo="Ley 1314")
              .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src="@/assets/curso/temas/t2/img2.png", alt="alt" style="max-width: 190px").m-auto
              .col-lg-6
                p.mb-0 Regula los principios y las normas de contabilidad, información financiera y aseguramiento de la información aplicables en Colombia.
            .row(titulo="2015" subtitulo="Decreto 2420")
              .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src="@/assets/curso/temas/t2/img3.png", alt="alt" style="max-width: 190px").m-auto
              .col-lg-6
                p.mb-0 Compila las normas de contabilidad, información financiera y aseguramiento aplicables a los diferentes grupos de preparadores.
            .row(titulo="2015" subtitulo="Anexo 3 del Decreto 2420")
              .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src="@/assets/curso/temas/t2/img4.png", alt="alt" style="max-width: 190px").m-auto
              .col-lg-6
                p.mb-0 Establece el marco técnico y los criterios simplificados para preparar información financiera correspondiente a las entidades del Grupo 3.
            .row(titulo="2021" subtitulo="Decreto 1670")
              .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src="@/assets/curso/temas/t2/img5.png", alt="alt" style="max-width: 190px").m-auto
              .col-lg-6
                p.mb-0 Modifica las condiciones de clasificación de los Grupos 2 y 3. Sus disposiciones son aplicables a los estados financieros de propósito general desde el 1 de enero de 2023.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Objetivo de los estados financieros
      .caja-4(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1__text
            p Los estados financieros proporcionan información sobre la situación financiera y el resultado de las operaciones, útil para tomar decisiones económicas. También permiten dar cuenta de la gestión administrativa y atender las necesidades de propietarios, entidades financieras, acreedores, autoridades y otros usuarios (Decreto 2420 Anexo 3, 2015). En una economía popular o campesina, esta información permite responder preguntas esenciales:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Cuántos recursos posee el negocio? 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Cuánto debe a terceros? 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué resultado obtuvo durante el periodo? 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué cambios se presentaron en su situación económica?
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img6.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estados financieros básicos
      p.mb-5 El marco técnico del Grupo 3 establece un conjunto básico de estados financieros, cada uno con una función específica:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Estado de situación financiera")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img7.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Estado de situación financiera
              p.mb-0 Presenta los activos, pasivos y el patrimonio en una fecha determinada. Permite identificar los recursos controlados por la unidad económica, sus obligaciones pendientes y el valor correspondiente al propietario.
        .py-3.py-md-4(titulo="Estado de resultados")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img8.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Estado de resultados
              p.mb-0 Reúne los ingresos, costos y gastos reconocidos durante un periodo. Permite determinar si la actividad económica produjo una utilidad o una pérdida.
        .py-3.py-md-4(titulo="Notas a los estados financieros")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img9.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Notas a los estados financieros
              p.mb-0 Proporcionan información explicativa y complementaria sobre los valores, las políticas contables y las situaciones relevantes incluidas en los estados financieros.
      p.mb-5 La unidad económica también puede preparar otros estados cuando sean necesarios para comprender mejor su situación financiera o el resultado de sus operaciones (Decreto 2420, 2015).
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Presentación e identificación de la información
      p.mb-5 Los estados financieros deben indicar claramente el nombre de la unidad económica, la fecha del estado de situación financiera y el periodo correspondiente al estado de resultados. Cuando corresponda, también deben incluir información comparativa del periodo anterior para identificar cambios y analizar la evolución del negocio (Decreto 2420 Anexo 3, 2015). La comparación entre periodos amplía el significado de un resultado aislado:
      .caja-4(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1__text
            h5 Ejemplo aplicado
            p.mb-0 Una utilidad de #[b $2.000.000] adquiere mayor significado al compararla con el resultado anterior y relacionarla con las variaciones en ventas, costos, gastos, activos y obligaciones.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img10.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Características de la información financiera 
      p.mb-5 La información financiera debe facilitar la interpretación de los hechos económicos y apoyar la toma de decisiones. Para cumplir esta finalidad, debe reunir las siguientes características:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img11.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Comprensibilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La información se organiza y presenta de manera clara para que los usuarios puedan interpretar la situación financiera y los resultados del negocio.
            .row(titulo="Relevancia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los datos aportan elementos útiles para evaluar la actividad económica y tomar decisiones relacionadas con el funcionamiento de la unidad productiva.
            .row(titulo="Confiabilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La información representa adecuadamente los hechos económicos y se fundamenta en registros, saldos y soportes previamente consolidados y verificados.
            .row(titulo="Comparabilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los datos permiten contrastar diferentes periodos, identificar variaciones y analizar la evolución de los recursos, las obligaciones y los resultados.
      p.mb-0 Elaborar estados financieros no consiste únicamente en trasladar valores a un formato. Requiere información registrada, consolidada y verificada, la aplicación del marco correspondiente y una presentación que facilite la interpretación de la situación financiera y los resultados de la actividad económica.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Estado de situación financiera simplificado
      p.mb-5 El estado de situación financiera presenta los activos, pasivos y patrimonio de la unidad económica en una fecha determinada. Se elabora con información registrada, consolidada y verificada, y permite establecer los recursos controlados por el negocio, las obligaciones pendientes y la participación de los propietarios (Decreto 2420 Anexo 3, 2015).
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clasificación de activos y pasivos
      p Los activos y pasivos se clasifican normalmente en corrientes y no corrientes, según el periodo previsto para su utilización, realización o pago. También pueden organizarse por su grado de liquidez cuando esta presentación proporcione información más relevante para interpretar la situación financiera (Decreto 2420 Anexo 3, 2015).
      p.mb-5 Las principales partidas se clasifican según su naturaleza y el plazo previsto para su realización o pago:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Activo corriente
                  p.mb-0 Se espera convertirlo en efectivo, venderlo o consumirlo durante el ciclo normal de operación, mantenerlo para negociación, realizarlo dentro de los doce meses siguientes o conservarlo como efectivo. Incluye cuentas por cobrar e inventarios.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Activo no corriente
                  p.mb-0 Corresponde a los demás recursos cuya utilización o recuperación supera el ciclo normal de operación o los doce meses siguientes. Incluye maquinaria, equipos y herramientas empleados durante varios periodos en la actividad económica.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Pasivo corriente
                  p.mb-0 Se espera pagarlo durante el ciclo normal de operación o dentro de los doce meses siguientes. Incluye proveedores, cuentas por pagar y cuotas de obligaciones financieras próximas a vencer.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Pasivo no corriente
                  p.mb-0 Comprende las obligaciones cuyo vencimiento supera el ciclo normal de operación o los doce meses siguientes, como los créditos y demás compromisos financieros con plazos posteriores.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img15.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Partidas básicas del estado de situación financiera
      p Para las entidades del Grupo 3, el estado de situación financiera o sus notas deben incluir partidas como efectivo y equivalentes, inversiones, cuentas por cobrar, inventarios, propiedades, planta y equipo, obligaciones financieras y laborales, pasivos por impuestos, cuentas por pagar, provisiones y patrimonio. Su presentación debe adaptarse a la naturaleza y características de las operaciones de la unidad económica (Decreto 2420 Anexo 3, 2015). 
      p.mb-5 El siguiente ejemplo reúne los saldos principales y conserva la relación entre recursos, obligaciones y patrimonio:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-6
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 7.
                span Estructura básica del estado de situación financiera
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Estado de situación financiera
                      th.texto-left Valor
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Activos corrientes
                      td.texto-left -
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Efectivo y bancos
                      td.texto-left $2.800.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cuentas por cobrar
                      td.texto-left $1.500.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Inventarios
                      td.texto-left $3.700.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Total activos corrientes
                      td.texto-left.text-weight-bold $8.000.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Activos no corrientes
                      td.texto-left -
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Maquinaria y equipos
                      td.texto-left $5.000.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Total activos no corrientes
                      td.texto-left.text-weight-bold $5.000.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Total activos
                      td.texto-left.text-weight-bold $13.000.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Pasivos corrientes
                      td.texto-left -
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Proveedores
                      td.texto-left $2.200.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Otras cuentas por pagar
                      td.texto-left $800.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Total pasivos corrientes
                      td.texto-left.text-weight-bold $3.000.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Pasivos no corrientes
                      td.texto-left -
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Obligaciones financieras
                      td.texto-left $2.500.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Total pasivos
                      td.texto-left.text-weight-bold $5.500.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Patrimonio
                      td.texto-left.text-weight-bold $7.500.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Total pasivo y patrimonio
                      td.texto-left.text-weight-bold $13.000.000
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Verificación de la ecuación contable
          p.mb-5 Una vez organizado el estado de situación financiera, debe comprobarse que los activos correspondan a la suma de los pasivos y el patrimonio:
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-xl-6
          .caja-2  
            h5.mb-0 Activo = Pasivo + Patrimonio
      p En el ejemplo anterior: $13.000.000 = $5.500.000 + $7.500.000
      p.mb-5 La igualdad confirma la coherencia matemática de la estructura, pero no garantiza que todas las cuentas estén correctamente clasificadas. Por ello, los valores deben revisarse previamente frente a los registros, soportes, inventarios y cuentas pendientes.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Interpretación básica
      p.mb-5 La información del estado permite reconocer los siguientes aspectos de la unidad económica:
      .bg-4
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-5.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img16.png', alt="" ).m-auto
                  h4.text-center Distribución de los recursos
                  .caja-5_p
                    p.mb-0.text-center Permite identificar cuánto se encuentra representado en efectivo, cuentas por cobrar, inventarios, maquinaria y equipos.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-5.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img17.png', alt="" ).m-auto
                  h4.text-center Cartera e inventarios
                  .caja-5_p
                    p.mb-0.text-center Facilita reconocer concentraciones elevadas de recursos en valores pendientes de recaudo o existencias disponibles.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-5.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img18.png', alt="" ).m-auto
                  h4.text-center Nivel de obligaciones
                  .caja-5_p
                    p.mb-0.text-center Permite establecer el valor de las deudas y diferenciar aquellas que deben pagarse en el corto plazo.
            .col-xl-3.col-md-9(data-aos="fade-left")
              .caja-5.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img19.png', alt="" ).m-auto
                  h4.text-center Participación patrimonial
                  .caja-5_p
                    p.mb-0.text-center Relaciona los recursos aportados y los resultados acumulados con la financiación total de la unidad económica.
      p.mb-0 El estado de situación financiera reúne los recursos, las obligaciones y el patrimonio existentes en una fecha determinada. Su análisis se complementa con el estado de resultados, que permite establecer cómo los ingresos, costos y gastos generaron la utilidad o pérdida del periodo.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Estado de resultados simplificado
      p.mb-5 El estado de resultados reúne los ingresos, costos y gastos reconocidos durante un periodo y permite determinar la utilidad o pérdida. A diferencia del estado de situación financiera, referido a una fecha, explica lo ocurrido durante el periodo. En las entidades del Grupo 3, debe incluir las partidas reconocidas durante el periodo informado (Decreto 2420 Anexo 3, 2015).
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estructura básica del estado de resultados
      p.mb-5 La estructura puede adaptarse a las características de la actividad económica. En las unidades comerciales o productivas, conviene separar los ingresos por ventas, las devoluciones, el costo de ventas, los demás ingresos y los gastos para establecer progresivamente el resultado. Los principales conceptos y su función dentro del estado se relacionan así:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 8.
                span Estructura básica del estado de resultados
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Concepto
                      th.texto-left Función dentro del estado
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ingresos por ventas o servicios
                      td.texto-left Representan los valores generados por la actividad económica.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Menos: devoluciones o ajustes
                      td.texto-left Permiten determinar las ventas netas cuando corresponda.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ventas o ingresos netos
                      td.texto-left Representan los ingresos después de los ajustes relacionados.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Menos: costo de ventas
                      td.texto-left Corresponde al costo asociado con los bienes o productos vendidos.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad bruta
                      td.texto-left Corresponde al resultado obtenido después de descontar el costo de ventas.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Más: otros ingresos
                      td.texto-left Incluye otros valores reconocidos como ingresos durante el periodo.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Menos: gastos
                      td.texto-left Representa los recursos consumidos para desarrollar y sostener la actividad.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Resultado del periodo
                      td.texto-left Corresponde a la utilidad o pérdida obtenida.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ingresos del periodo
          p.mb-5 Los ingresos deben corresponder al periodo informado y relacionarse con las actividades de la unidad económica. Pueden provenir de la venta de productos, la comercialización de mercancías, la prestación de servicios u otros conceptos que cumplan las condiciones para su reconocimiento. El siguiente caso permite calcular las ventas netas del periodo:
          .caja-4(data-aos="zoom-in").mb-5
            .row.align-items-center
              .col-xl.order-2.order-lg-1.caja-1__text
                h5 Ejemplo aplicado
                p.mb-0 Una unidad campesina registra ventas mensuales por #[b $7.500.000] y devoluciones por #[b $200.000]. Por tanto, las ventas netas corresponden a: #[b $7.500.000 − $200.000 = $7.300.000].
              .col-xl-auto.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/temas/t2/img20.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Costo de ventas y utilidad bruta
      p.mb-5 En actividades que manejan mercancías o productos, el costo de ventas permite identificar el valor asociado con los bienes que generaron los ingresos del periodo. Su comparación con las ventas netas permite determinar la utilidad bruta:
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-xl-6
          .caja-2  
            h5.mb-0 Utilidad bruta = Ventas netas − Costo de ventas
      p.mb-5 Esta diferencia permite analizar qué parte de los ingresos permanece después de reconocer el costo directamente relacionado con los productos vendidos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Gastos del periodo
      p Después de determinar la utilidad bruta, se incorporan los demás ingresos y se descuentan los gastos reconocidos durante el periodo. Estos pueden corresponder a arrendamientos, servicios, transporte, mantenimiento, administración u otros conceptos necesarios para el funcionamiento de la actividad.
      p Los gastos deben corresponder al periodo analizado y estar adecuadamente clasificados, debido a que una omisión o duplicidad puede modificar el resultado presentado.
      p.mb-5 Los valores consolidados se organizan para determinar la utilidad del periodo:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-6
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 9.
                span Ejemplo de estado de resultados simplificado
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Estado de resultados
                      th.texto-left Valor
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ingresos por ventas
                      td.texto-left $7.500.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Menos: devoluciones sobre ventas
                      td.texto-left $200.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ventas netas
                      td.texto-left $7.300.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Menos: costo de ventas
                      td.texto-left $4.100.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad bruta
                      td.texto-left $3.200.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Más: otros ingresos
                      td.texto-left $150.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Menos: gastos de funcionamiento
                      td.texto-left $2.100.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Resultado del periodo – utilidad
                      td.texto-left $1.250.000
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estado de resultados con pérdida
          p.mb-5 El resultado también puede ser negativo cuando los costos y gastos superan los ingresos reconocidos durante el periodo.
          .caja-1(data-aos="zoom-in").mb-5
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t2/img21.png', alt='' style="width: 500px").m-auto
              .col-xl.caja-1__texto
                h5 Ejemplo aplicado
                p.mb-0 Si una unidad económica obtiene ingresos por #[b $5.000.000] y sus costos y gastos ascienden a #[b $5.600.000], se genera una pérdida de #[b $600.000]: #[b $5.000.000 − $5.600.000 = −$600.000]
      p La pérdida no debe analizarse de manera aislada. Se deben identificar los ingresos, costos y gastos que tuvieron mayor incidencia en el resultado.
      p.mb-5 Las principales variaciones permiten formular las siguientes interpretaciones iniciales:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 10.
                span Interpretación básica del resultado
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Situación
                      th.texto-left Interpretación inicial
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Incremento de ventas y utilidad
                      td.texto-left Puede indicar una mejora en los resultados de la actividad.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Aumento de ventas y disminución de utilidad
                      td.texto-left Puede relacionarse con mayores costos o gastos.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Disminución de ventas
                      td.texto-left Requiere analizar las causas que afectaron los ingresos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Incremento del costo de ventas
                      td.texto-left Puede reducir el margen generado por los productos.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Crecimiento de gastos
                      td.texto-left Requiere identificar los conceptos que generan el aumento.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Pérdida durante el periodo
                      td.texto-left Indica que los ingresos no cubrieron los costos y gastos reconocidos.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Comparación entre periodos
          p.mb-5 El análisis comparativo permite reconocer cambios, explicar sus causas y relacionarlos con la situación financiera:
          .bg-slider.mb-0
            .px-5
              .ajuste-slider(data-aos="zoom-in")
                SlyderA(tipo="b")
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Cambios entre periodos
                      p.mb-0 La comparación con periodos anteriores permite identificar variaciones en los ingresos, costos, gastos y resultados, reconocer situaciones que requieren revisión y establecer la evolución económica de la unidad para apoyar la toma de decisiones (Decreto 2420 Anexo 3, 2015).
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t2/img22.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Causas de la variación
                      p.mb-0 Una disminución de la utilidad puede originarse en menores ventas, mayor costo de los productos, incremento de los gastos o una combinación de estos factores. Identificar la variación orienta un análisis más específico.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t2/img23.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Interpretación conjunta
                      p.mb-0 La lectura conjunta del estado de resultados y el estado de situación financiera permite relacionar la utilidad o pérdida con los cambios producidos en los recursos, las obligaciones y el patrimonio durante el periodo analizado.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t2/img24.png', alt='' style="max-width: 500px").m-auto
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Relación entre situación financiera y resultado del periodo
      p.mb-5 El estado de situación financiera reúne los activos, pasivos y patrimonio en una fecha determinada, mientras que el estado de resultados presenta los ingresos y gastos reconocidos durante un periodo. Su análisis conjunto permite relacionar la posición económica del negocio con la utilidad o pérdida generada por sus operaciones (Decreto 2420 Anexo 3, 2015).
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Relación entre resultado y patrimonio
      p.mb-5 La utilidad obtenida durante el periodo incrementa los recursos propios, mientras que una pérdida los disminuye. Sin embargo, el patrimonio también puede modificarse por aportes adicionales o retiros de los propietarios; por ello, su variación no debe atribuirse exclusivamente al resultado del periodo (Decreto 2420 Anexo 3, 2015). Las características de cada estado y la relación existente entre ambos se presentan así:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 11.
                span Relación entre los estados financieros básicos
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Aspecto
                      th.ajuste-border-tabla.texto-left Estado de situación financiera
                      th.texto-left Estado de resultados
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Momento de presentación
                      td.ajuste-border-tabla.texto-left Una fecha determinada
                      td.texto-left Un periodo determinado
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Información principal
                      td.ajuste-border-tabla.texto-left Activos, pasivos y patrimonio
                      td.texto-left Ingresos, costos y gastos
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Pregunta que permite responder
                      td.ajuste-border-tabla.texto-left ¿Qué posee y cuánto debe el negocio?
                      td.texto-left ¿Qué resultado generó la actividad?
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Resultado principal
                      td.ajuste-border-tabla.texto-left Situación financiera
                      td.texto-left Utilidad o pérdida
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Relación entre ambos
                      td.ajuste-border-tabla.texto-left El patrimonio incorpora los efectos acumulados de los resultados.
                      td.texto-left El resultado del periodo puede aumentar o disminuir el patrimonio.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Efecto de las operaciones sobre la situación financiera
          p.mb-5 Las operaciones realizadas durante el periodo pueden modificar los activos, pasivos o patrimonio y, según su naturaleza, afectar o no el resultado. Por ello, se debe diferenciar entre los movimientos que generan ingresos o gastos y aquellos que únicamente cambian la composición de la situación financiera. Los efectos de las principales operaciones se relacionan de la siguiente manera:
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 12.
                span Efecto de diferentes operaciones en los estados financieros
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Operación
                      th.ajuste-border-tabla.texto-left Efecto en la situación financiera
                      th.texto-left Efecto en el resultado
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Venta de contado
                      td.ajuste-border-tabla.texto-left Aumenta el efectivo por el valor recibido y disminuye el inventario por el costo de los bienes vendidos.
                      td.texto-left Se reconoce el ingreso de la venta y se registra el costo de ventas.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Venta a crédito de bienes
                      td.ajuste-border-tabla.texto-left Aumentan las cuentas por cobrar por el valor de la venta y disminuye el inventario por el costo de los bienes vendidos.
                      td.texto-left Se reconoce el ingreso de la venta y se registra el costo de ventas.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Pago de un gasto
                      td.ajuste-border-tabla.texto-left Disminuye el efectivo.
                      td.texto-left Aumentan los gastos.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Compra de equipo de contado
                      td.ajuste-border-tabla.texto-left Aumenta un activo y disminuye otro.
                      td.texto-left No genera por sí sola un gasto inmediato.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Préstamo recibido
                      td.ajuste-border-tabla.texto-left Aumenta el efectivo y aumenta el pasivo.
                      td.texto-left No constituye un ingreso.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Pago de una deuda
                      td.ajuste-border-tabla.texto-left Disminuyen el efectivo y el pasivo.
                      td.texto-left No genera nuevamente el gasto o costo previamente reconocido.
                      tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Aporte del propietario
                      td.ajuste-border-tabla.texto-left Aumentan el activo y el patrimonio.
                      td.texto-left No constituye un ingreso de la actividad.
      p.mb-5 El resultado no permite determinar por sí solo la composición de los recursos y las obligaciones. Dos unidades económicas pueden obtener una utilidad similar y presentar situaciones financieras diferentes, según la distribución de sus activos y pasivos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo de relación entre utilidad y patrimonio
      p.mb-5 El siguiente caso relaciona la utilidad obtenida con el cambio producido en el patrimonio:
      .row.justify-content-center.mb-5
        .col-xl-10
          .caja-3(data-aos="zoom-in")
            h5 Ejemplo aplicado
            p Una unidad económica inicia el periodo con activos por #[b $12.000.000], pasivos por #[b $5.000.000] y patrimonio por #[b $7.000.000]. Durante el periodo obtiene una utilidad de #[b $1.500.000] y no registra nuevos aportes ni retiros. Por tanto, el patrimonio al cierre asciende a #[b $8.500.000].
            .row.justify-content-center
              .col-xl-10
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Tabla 13.
                  span Efecto simplificado de la utilidad sobre el patrimonio
                .tabla-a(data-aos="zoom-in")
                  table
                    thead
                      tr
                        th.ajuste-border-tabla.texto-left Concepto
                        th.ajuste-border-tabla.texto-left Inicio del periodo
                        th.texto-left Cierre del periodo
                    tbody
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Activos
                        td.ajuste-border-tabla.texto-left $12.000.000
                        td.texto-left $13.500.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Pasivos
                        td.ajuste-border-tabla.texto-left $5.000.000
                        td.texto-left $5.000.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Patrimonio
                        td.ajuste-border-tabla.texto-left $7.000.000
                        td.texto-left $8.500.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Resultado del periodo
                        td.ajuste-border-tabla.texto-left —
                        td.texto-left $1.500.000
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Utilidad y disponibilidad de efectivo
      p.mb-5 La diferencia entre el resultado y el efectivo se reconoce mediante las siguientes situaciones:
      .bg-4
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-5.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img25.png', alt="" ).m-auto
                  h4.text-center Utilidad representada en otros activos
                  .caja-5_p
                    p.mb-0.text-center Una utilidad puede estar representada en cuentas por cobrar, inventarios, equipos u otros activos, por lo que no equivale al efectivo disponible.
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-5.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img26.png', alt="" ).m-auto
                  h4.text-center Entrada de efectivo sin utilidad
                  .caja-5_p
                    p.mb-0.text-center Un préstamo aumenta el efectivo y las obligaciones del negocio, pero no constituye un ingreso de la actividad ni genera utilidad.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-5.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img27.png', alt="" ).m-auto
                  h4.text-center Resultado positivo con dificultades de pago
                  .caja-5_p
                    p.mb-0.text-center Un negocio puede obtener utilidad y enfrentar dificultades para realizar pagos inmediatos; por ello, el resultado debe complementarse con el análisis del efectivo.
      p.mb-0 La lectura conjunta del estado de situación financiera y del estado de resultados permite establecer cómo las operaciones modifican los recursos, las obligaciones y el patrimonio. Esta relación proporciona la base para interpretar la información financiera y avanzar posteriormente hacia el análisis de la liquidez y el flujo de caja.
      Separador
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.5 Lectura e interpretación básica de los estados financieros
      p.mb-5 La interpretación de los estados financieros permite establecer la situación de la unidad económica, el resultado obtenido y los cambios presentados entre periodos. Este análisis relaciona los recursos, las obligaciones y el desempeño de la actividad para reconocer variaciones relevantes y apoyar la toma de decisiones económicas (Decreto 2420 Anexo 3, 2015). La interpretación básica puede organizarse en tres aspectos complementarios:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Lectura del estado de situación financiera
                  p.mb-0 Permite identificar dónde se concentran los recursos y cuáles obligaciones debe atender la unidad económica. Una proporción elevada de cuentas por cobrar representa recursos pendientes de recaudo, mientras que los pasivos próximos requieren prever el efectivo necesario para su pago.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img28.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Lectura del estado de resultados
                  p.mb-0 Permite establecer si los ingresos cubrieron los costos y gastos, qué conceptos influyeron en la utilidad o pérdida y cómo cambió el resultado. Una mayor utilidad puede originarse en mayores ventas, menores costos o un mejor control de los gastos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img29.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comparación entre periodos
                  p.mb-0 Permite reconocer tendencias y variaciones que no se identifican al revisar un único periodo. Si las ventas aumentan, pero las cuentas por cobrar crecen en mayor proporción, debe analizarse si ese incremento está generando entradas efectivas de dinero.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img30.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 De la información financiera al análisis de liquidez
                  p.mb-0 Una utilidad positiva no garantiza efectivo suficiente, porque los recursos pueden permanecer en cuentas por cobrar o inventarios. Por ello, los estados financieros deben complementarse con el flujo de caja para identificar problemas de liquidez y proyectar necesidades de recursos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img31.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Se invita a consultar el siguiente documento complementario para profundizar en la lectura e interpretación de los estados financieros mediante preguntas de análisis, comparaciones entre periodos y su relación con la liquidez:
      .caja-6.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t2/img32.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Anexo 1. Lectura e interpretación básica de los estados financieros
            p.mb-0 
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_01_ Interpretacion_Estados_Financieros.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

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
