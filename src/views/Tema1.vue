<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Consolidación de la información financiera
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p Consolidar la información financiera consiste en reunir, clasificar y verificar los datos de las operaciones registradas durante un periodo. Este proceso permite establecer los saldos de activos, pasivos, patrimonio, ingresos, costos y gastos, y proporciona una base confiable para elaborar estados financieros y analizar los resultados del negocio (Decreto 2420 Anexo 3, 2015).
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Organización de ingresos y egresos del periodo
      p Organizar los ingresos y egresos exige reunir los movimientos del periodo e identificar la fecha, el concepto, el tercero, el valor, la forma de pago y el soporte. Cada operación debe analizarse según su naturaleza, porque no toda entrada de efectivo constituye un ingreso ni toda salida representa un gasto (Decreto 2420 Anexo 3, 2015).
      p.mb-5 Para organizar los registros, primero debe diferenciarse el movimiento del efectivo de su reconocimiento como ingreso o gasto:
      .row.justify-content-center.mb-5
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t1/img2.png", alt="")
            .crd_hover_txt--body
              h4.mb-3 Movimiento de efectivo
              p.mb-0 Registra toda entrada o salida de dinero originada por ventas, recaudos, préstamos, aportes, compras, pagos de obligaciones o retiros del propietario.
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t1/img3.png", alt="")
            .crd_hover_txt--body
              h4.mb-3 Ingreso o gasto contable
              p.mb-0 Reconoce la naturaleza económica de la operación, aunque el dinero no se reciba o pague. No toda entrada es ingreso ni toda salida es gasto.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clasificación inicial de los movimientos
      p.mb-5 La consolidación puede comenzar agrupando las operaciones según su origen y efecto. Esta clasificación permite identificar cuáles movimientos corresponden a la actividad habitual del negocio y cuáles se relacionan con financiación, aportes, pagos de obligaciones u otras situaciones. A continuación, se presentan algunos ejemplos:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Venta de contado
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Ejemplo:] venta de productos por $500.000.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Tratamiento inicial:] entrada de efectivo asociada con un ingreso.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Recaudo de cartera
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Ejemplo:] cliente paga $300.000 pendientes.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Tratamiento inicial:] entrada de efectivo que disminuye una cuenta por cobrar.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Préstamo recibido
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Ejemplo:] crédito por $2.000.000.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Tratamiento inicial:] entrada de efectivo que genera una obligación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Compra de insumos
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Ejemplo:] pago de materiales por $400.000.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Tratamiento inicial:] salida asociada con la actividad productiva.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Pago a proveedor
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Ejemplo:] abono de $250.000.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Tratamiento inicial:] salida de efectivo que disminuye una cuenta por pagar.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img9.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Pago de servicios
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Ejemplo:] servicios públicos por $180.000.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Tratamiento inicial:] salida relacionada con un gasto.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img10.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aporte del propietario
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Ejemplo:] ingreso de $1.000.000 al negocio.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Tratamiento inicial:] entrada que incrementa los recursos y el patrimonio.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Retiro del propietario
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Ejemplo:] retiro de $200.000 para uso personal.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Tratamiento inicial:] salida que debe diferenciarse de los gastos del negocio.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img12.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Consolidación por periodo
      p.mb-5 Una vez clasificadas las operaciones, los valores pueden agruparse por día, semana o mes según las necesidades de la unidad económica. La consolidación consiste en reunir los registros individuales y obtener totales que permitan concoer el comportamiento de los recursos durante el periodo, sin perder la posibilidad de relacionar cada valor con su respectivo soporte. El siguiente ejemplo corresponde a una consolidación mensual de movimientos:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-6
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 1.
                span Ejemplo de consolidación mensual de movimientos
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Concepto
                      th.ajuste-border-tabla.texto-left Entradas
                      th.texto-left Salidas
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ventas de contado
                      td.ajuste-border-tabla.texto-left $3.500.000
                      td.texto-left —
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Recaudo de cuentas por cobrar
                      td.ajuste-border-tabla.texto-left $800.000
                      td.texto-left —
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Aportes del propietario
                      td.ajuste-border-tabla.texto-left $500.000
                      td.texto-left —
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Compras pagadas de contado
                      td.ajuste-border-tabla.texto-left —
                      td.texto-left $1.600.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Pagos a proveedores
                      td.ajuste-border-tabla.texto-left —
                      td.texto-left $700.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gastos de funcionamiento
                      td.ajuste-border-tabla.texto-left —
                      td.texto-left $900.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Total
                      td.ajuste-border-tabla.texto-left $4.800.000
                      td.texto-left $3.200.000
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Verificación de la información
          p Antes de usar los valores consolidados, se debe comprobar que los movimientos estén completos, sin duplicidades y respaldados por soportes, y conciliar caja y bancos para detectar omisiones, errores o clasificaciones incorrectas.
          p.mb-5 Los siguientes controles permiten comprobar la integridad y coherencia de la información antes de preparar los informes financieros:
          .row.justify-content-center.mb-5
            .col-xl-6
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 2.
                span Controles para consolidar ingresos y egresos
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Aspecto
                      th.texto-left Verificación
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Periodo
                      td.texto-left Confirmar que todas las operaciones correspondan al periodo analizado.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Soportes
                      td.texto-left Verificar que los movimientos cuenten con documentos relacionados.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Duplicados
                      td.texto-left Identificar registros incorporados más de una vez.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Valores
                      td.texto-left Comparar los importes registrados con los soportes.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Clasificación
                      td.texto-left Confirmar el origen y naturaleza de cada movimiento.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Caja
                      td.texto-left Comparar el saldo registrado con el efectivo disponible.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Bancos
                      td.texto-left Contrastar los registros con los movimientos bancarios.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cuentas pendientes
                      td.texto-left Revisar valores por cobrar y pagar que no implicaron movimiento inmediato de efectivo.
      p.mb-0 La organización de ingresos y egresos convierte los registros individuales en información verificable y permite consolidar los movimientos del periodo con los saldos de activos, pasivos y patrimonio.
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Consolidación de activos, pasivos y patrimonio
      p Consolidar activos, pasivos y patrimonio consiste en reunir los saldos que representan la situación financiera de la unidad económica en una fecha determinada. Esta etapa retoma los registros del periodo, sin redefinir cada elemento contable, para verificar sus movimientos y establecer los valores finales del estado de situación financiera (Decreto 2420 Anexo 3, 2015).
      p.mb-5 Los saldos iniciales se modifican con las operaciones del periodo, como se relaciona en los siguientes casos:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Compras")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img13.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Compras
              p.mb-0 Pueden aumentar los inventarios y, cuando se realizan a crédito, también incrementan las cuentas por pagar.
        .py-3.py-md-4(titulo="Recaudos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img14.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Recaudos
              p.mb-0 Disminuyen las cuentas por cobrar y aumentan el efectivo disponible en caja o en las cuentas bancarias.
        .py-3.py-md-4(titulo="Pagos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img15.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Pagos
              p.mb-0 Reducen el efectivo y disminuyen las obligaciones pendientes cuando corresponden a deudas previamente registradas.
        .py-3.py-md-4(titulo="Adquisición de equipos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img16.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Adquisición de equipos
              p.mb-0 Incrementa los recursos utilizados para desarrollar la actividad y modifica el saldo de propiedades y equipos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Determinación de los saldos
      p Los saldos se establecen a partir de los registros efectuados en cada cuenta y deben corresponder con su naturaleza y con los movimientos acumulados hasta la fecha de corte. Su verificación requiere relacionarlos con soportes, registros auxiliares, inventarios físicos, movimientos bancarios y obligaciones pendientes.
      p.mb-5 La información y las verificaciones básicas para cada grupo de cuentas se organizan de la siguiente manera:
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Efectivo, bancos y cuentas por cobrar").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se consolidan el dinero disponible en caja y bancos, junto con los valores pendientes de recibir. Los primeros se comparan con conteos y movimientos bancarios; las cuentas por cobrar, con saldos, abonos y valores pendientes.
            .row(titulo="Inventarios, propiedades y equipos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se reúnen los valores de mercancías, materiales, productos y bienes utilizados en la actividad. Los inventarios se comparan con las existencias físicas, mientras que las propiedades y los equipos se verifican mediante su existencia y los registros de adquisición.
            .row(titulo="Obligaciones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se integran los saldos de proveedores, otras cuentas por pagar y obligaciones financieras. Su verificación comprende facturas, pagos, documentos, fechas de vencimiento y saldos reportados de los préstamos o créditos pendientes.
            .row(titulo="Patrimonio").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se consolidan los aportes y resultados acumulados que representan los recursos propios. Para establecer su saldo, se verifican los movimientos del periodo que hayan producido aumentos o disminuciones en el patrimonio.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img17.png", alt="" style="width: 320px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Relación entre activos, pasivos y patrimonio
      p.mb-5 Una vez determinados los saldos, debe verificarse que exista correspondencia entre los recursos de la unidad económica y las fuentes que permitieron financiarlos. Esta relación se representa mediante la ecuación contable básica:
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-xl-4
          .caja-2  
            h5.mb-0 Activo = Pasivo + Patrimonio
      p La igualdad indica que los recursos controlados por la unidad económica tienen como origen obligaciones con terceros o recursos propios.
      p.mb-5 El siguiente ejemplo reúne los saldos y comprueba su correspondencia mediante la ecuación contable:
      .row.justify-content-center.mb-5
        .col-xl-10
          .caja-3(data-aos="zoom-in")
            h5 Ejemplo aplicado
            p El siguiente ejemplo presenta cómo los saldos individuales pueden agruparse para establecer los recursos, obligaciones y patrimonio del negocio.
            .row.justify-content-center
              .col-xl-10
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Tabla 3.
                  span Ejemplo de consolidación de la situación financiera
                .tabla-a(data-aos="zoom-in")
                  table
                    thead
                      tr
                        th.ajuste-border-tabla.texto-left Concepto
                        th.texto-left Valor
                    tbody
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Efectivo y bancos
                        td.texto-left $2.500.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Cuentas por cobrar
                        td.texto-left $1.800.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Inventarios
                        td.texto-left $4.200.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Equipos y herramientas
                        td.texto-left $6.500.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Total activos
                        td.texto-left $15.000.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Proveedores
                        td.texto-left $2.700.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Obligaciones financieras
                        td.texto-left $3.800.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Total pasivos
                        td.texto-left $6.500.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Patrimonio
                        td.texto-left $8.500.000
      p.mb-5 Los activos totalizan $15.000.000 y corresponden a la suma de los pasivos por $6.500.000 y el patrimonio por $8.500.000: #[b $15.000.000 = $6.500.000 + $8.500.000].
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Revisión de los saldos consolidados
      p.mb-5 Antes de utilizar los valores consolidados para elaborar un informe financiero, es necesario comprobar que los saldos sean razonables y se relacionen con la información disponible. La revisión de los saldos consolidados comprende los siguientes controles:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Inventarios
                  p.mb-0 El saldo de inventarios debe corresponder con las existencias verificadas y los registros disponibles. Cualquier diferencia puede indicar cantidades omitidas, movimientos pendientes de incorporación o valores que requieren revisión antes de preparar el informe financiero.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cuentas por cobrar y obligaciones
                  p.mb-0 Las cuentas por cobrar deben identificar los clientes y valores pendientes, mientras que las obligaciones deben incluir los compromisos aún no cancelados. Esta revisión permite relacionar cada saldo con la información y los soportes correspondientes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Operaciones sin registrar
                  p.mb-0 Una compra recibida a crédito, un pago pendiente de incorporar o una cuenta por cobrar omitida pueden modificar la situación financiera. Por ello, estas operaciones deben identificarse mediante la revisión de los soportes y movimientos del periodo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img20.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La adecuada consolidación de activos, pasivos y patrimonio permite establecer una visión ordenada de los recursos y obligaciones de la unidad económica en una fecha determinada. Esta información se complementa con la consolidación de ingresos, costos y gastos, necesaria para determinar el resultado obtenido durante el periodo.
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Consolidación de ingresos, costos y gastos
      p La consolidación de ingresos, costos y gastos reúne las operaciones reconocidas durante un periodo para preparar la determinación del resultado económico. A diferencia del control de entradas y salidas de efectivo, incorpora los conceptos contables aunque algunos valores se cobren o paguen en una fecha diferente (Decreto 2420 Anexo 3, 2015).
      p Clasificar los valores como ingresos, costos o gastos permite identificar los recursos generados y cuánto se destinó a producir, adquirir, administrar y sostener la actividad.
      p.mb-5 Estas categorías se diferencian por su origen y función dentro de la actividad económica:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Ingresos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img21.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Ingresos
              p.mb-0 Corresponden a los valores generados por la actividad económica y se agrupan según su origen. Incluyen la venta de productos agrícolas, como hortalizas; la prestación de servicios, como una reparación; y la venta de mercancías comercializadas en una tienda. También deben considerarse las devoluciones o los ajustes que disminuyan su valor.
        .py-3.py-md-4(titulo="Costos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img22.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Costos
              p.mb-0 Se relacionan directamente con los bienes producidos, adquiridos o vendidos. Incluyen el valor de adquisición de las mercancías vendidas y las materias primas incorporadas al producto elaborado. Cuando existen inventarios, el costo de los productos vendidos debe relacionarse con los ingresos generados durante el mismo periodo (Decreto 2420 Anexo 3, 2015).
        .py-3.py-md-4(titulo="Gastos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img23.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Gastos
              p.mb-0 Corresponden principalmente a los recursos utilizados para administrar y sostener el funcionamiento de la actividad. Comprenden conceptos como el arrendamiento del local, los servicios públicos y la papelería. Aunque apoyan el desarrollo del negocio, no se relacionan directamente con la producción o adquisición de los bienes vendidos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Consolidación de los valores del periodo 
      p Después de clasificar las operaciones, se reúnen los registros correspondientes al periodo y se establecen los valores totales de ingresos, costos y gastos. El proceso debe conservar la relación entre cada concepto, su registro y el soporte que acredita la operación.
      p.mb-5 La consolidación puede organizarse mediante los siguientes pasos:
      .bg-1
        .px-5 
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Reunir los registros
                    p.mb-0 Se recopilan las operaciones reconocidas durante el periodo, incluidos los ingresos por ventas o servicios, los costos asociados con los bienes producidos o vendidos y los gastos relacionados con el funcionamiento del negocio.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img24.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img25.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Clasificar los valores
                    p.mb-0 Cada operación se agrupa como ingreso, costo o gasto según su naturaleza económica. Esta clasificación permite diferenciar los recursos generados por la actividad de los valores utilizados para producir, comercializar, administrar o sostener su funcionamiento.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Incorporar devoluciones y ajustes
                    p.mb-0 Se identifican las devoluciones, correcciones u otros ajustes que modifiquen los valores registrados. Cuando existen inventarios, también se relaciona el costo de los productos vendidos con los ingresos reconocidos durante el mismo periodo.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img26.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img27.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Establecer los totales
                    p.mb-0 Se suman por separado los ingresos, costos y gastos consolidados. Estos totales constituyen la base para calcular posteriormente la utilidad bruta y el resultado del periodo, sin confundirlos con las entradas y salidas de efectivo.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Determinación del resultado
      p.mb-5 Una vez consolidados los valores, puede establecerse el resultado de la actividad económica. De manera simplificada, la relación puede expresarse así:
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-xl-6
          .caja-2  
            h5.mb-0 Resultado del periodo = Ingresos − Costos − Gastos
      p.mb-5 Cuando el resultado es positivo, los ingresos fueron superiores a los costos y gastos, por lo que se obtiene una utilidad. Si es negativo, los costos y gastos superaron los ingresos generados y se presenta una pérdida. El estado de resultados presenta el resultado de las operaciones realizadas durante un periodo determinado (Decreto 2420 Anexo 3, 2015). Los valores consolidados constituyen la base para calcular la utilidad bruta y establecer el resultado final del periodo.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Verificación de los valores consolidados
      p Antes de utilizar los totales, se debe comprobar que las operaciones correspondan al periodo analizado, estén correctamente clasificadas y puedan relacionarse con sus registros y soportes. También deben identificarse los ajustes pendientes y las operaciones duplicadas u omitidas.
      p.mb-5 Los valores consolidados deben cumplir las siguientes condiciones:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t1/img28.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1__texto
            h5 Lista de verificación
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                |  Periodo: corresponden al intervalo que se pretende informar. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                |  Clasificación: están registrados como ingresos, costos o gastos según su naturaleza. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                |  Soportes: pueden relacionarse con los documentos que respaldan cada operación. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                |  Ajustes: incorporan las devoluciones y correcciones aplicables. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                |  Integridad: no presentan operaciones duplicadas, omitidas o registradas en categorías incorrectas.
      p.mb-0 La consolidación de ingresos, costos y gastos permite organizar los resultados generados por la actividad económica. Los valores verificados proporcionan la base para determinar la utilidad o pérdida del periodo y analizar los factores que influyeron en el desempeño financiero del negocio.
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Determinación de utilidad o pérdida
      p.mb-5 Determinar la utilidad o pérdida permite establecer el resultado económico obtenido por la unidad durante un periodo. Para ello, se comparan los ingresos reconocidos con los costos y gastos relacionados con la actividad. El estado de resultados debe incluir estas partidas y presentar el resultado de las operaciones realizadas (Decreto 2420 Anexo 3, 2015). El resultado económico y el efectivo disponible corresponden a conceptos diferentes:
      .row.justify-content-center.mb-5
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t1/img29.png", alt="")
            .crd_hover_txt--body
              h4.mb-3 Resultado económico
              p.mb-0 Surge al comparar ingresos, costos y gastos. Puede existir utilidad aunque parte de las ventas todavía se encuentre pendiente de cobro.
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t1/img30.png", alt="")
            .crd_hover_txt--body
              h4.mb-3 Disponibilidad de efectivo
              p.mb-0 Corresponde al dinero disponible en caja y bancos. Puede incluir préstamos o aportes que aumentan el efectivo, pero no constituyen utilidad.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Cálculo de la utilidad bruta y del resultado del periodo
      p.mb-5 La utilidad bruta representa el resultado inicial generado por la comercialización de bienes o productos. Se obtiene al comparar las ventas netas con el costo de los bienes vendidos, de acuerdo con la siguiente relación (Decreto 2420 Anexo 3, 2015):
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-xl-6
          .caja-2  
            h5.mb-0 Utilidad bruta = Ventas netas − Costo de ventas
      p.mb-5 Después de establecer la utilidad bruta, se incorporan los demás ingresos y se descuentan los gastos correspondientes al funcionamiento del negocio. De manera simplificada:
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-xl-6
          .caja-2  
            h5.mb-0 Resultado del periodo = Ingresos − Costos − Gastos
      p.mb-5 El siguiente ejemplo integra ambas relaciones y presenta el cálculo progresivo del resultado del periodo:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-6
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 4.
                span Determinación de la utilidad bruta y del resultado del periodo
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Concepto
                      th.texto-left Valor
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ventas del periodo
                      td.texto-left $10.000.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Menos: devoluciones y ajustes sobre ventas
                      td.texto-left $200.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ventas netas
                      td.texto-left.text-weight-bold $9.800.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Menos: costo de ventas
                      td.texto-left $6.000.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad bruta
                      td.texto-left.text-weight-bold $3.800.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Más: otros ingresos
                      td.texto-left $200.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Menos: gastos de funcionamiento
                      td.texto-left $2.500.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Resultado del periodo
                      td.texto-left.text-weight-bold $1.500.000
          p.mb-5 Las ventas netas corresponden a $9.800.000 después de descontar las devoluciones. Al restar el costo de ventas se obtiene una utilidad bruta de $3.800.000. Finalmente, al sumar otros ingresos y descontar los gastos de funcionamiento, el resultado del periodo corresponde a una utilidad de $1.500.000.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Interpretación de la utilidad o pérdida
          p.mb-5 El resultado debe interpretarse considerando la relación entre los ingresos generados y los recursos utilizados durante el periodo. Estas son las situaciones que pueden presentarse:
          .bg-4
            .px-5
              .row.justify-content-center.mb-5
                .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
                  .tarjeta--boton.p-5.h-100
                    .row.justify-content-center.mb-3
                      .col-7
                        figure(data-aos="fade-right")
                          img(src='@/assets/curso/temas/t1/img31.svg', alt="" style="max-width: 90px").m-auto
                    h3.text-center Utilidad
                    p.mb-0.text-center Se presenta cuando los ingresos reconocidos son suficientes para cubrir los costos y gastos y generar un resultado positivo. Sin embargo, la utilidad no garantiza que exista efectivo suficiente para atender las obligaciones, especialmente cuando parte de las ventas permanece pendiente de cobro.
                .col-lg-4.col-md-9(data-aos="zoom-in")
                  .tarjeta--boton.p-5.h-100
                    .row.justify-content-center.mb-3
                      .col-7
                        figure(data-aos="fade-left")
                          img(src='@/assets/curso/temas/t1/img32.svg', alt="" style="max-width: 90px").m-auto
                    h3.text-center Pérdida
                    p.mb-0.text-center Se produce cuando los ingresos no alcanzan a cubrir los costos y gastos reconocidos. En este caso, se deben identificar los conceptos con mayor incidencia, como la disminución de ventas, el aumento del costo de los productos, los mayores gastos o las situaciones extraordinarias.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Análisis comparativo del resultado
      p.mb-5 La utilidad o pérdida adquiere mayor sentido cuando se compara entre periodos. Una disminución progresiva puede indicar cambios en las ventas, costos o gastos que requieren revisión, mientras que un incremento puede relacionarse con una mejora en los resultados de la actividad (Decreto 2420 Anexo 3, 2015). El siguiente caso evidencia por qué un resultado positivo también debe compararse:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t1/img33.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1__texto
            h5 Ejemplo aplicado
            p.mb-0 Una unidad económica obtuvo una utilidad de $2.000.000 en un periodo y de $1.200.000 en el siguiente. Aunque ambos resultados son positivos, la disminución de $800.000 exige establecer si se originó en menores ventas, mayores costos, incremento de gastos u otros factores.
      p.mb-0 Determinar correctamente la utilidad o pérdida permite conocer el resultado generado por la actividad y constituye un paso previo para preparar los estados financieros básicos. Antes de utilizar esta información, es necesario verificar que los saldos consolidados sean completos, coherentes y estén relacionados con los registros y soportes correspondientes.
      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.5 Verificación de información para informes financieros
      p.mb-5 Antes de elaborar los estados financieros básicos, se debe comprobar que la información consolidada sea completa, coherente y corresponda al periodo informado. Esta revisión comprende los saldos de activos, pasivos y patrimonio, junto con los ingresos, costos y gastos utilizados para determinar el resultado (Decreto 2420 Anexo 3, 2015).
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Revisión de los saldos consolidados
      p.mb-5 Los saldos consolidados deben verificarse con los registros, soportes, movimientos bancarios, terceros y existencias de inventario. Además, se debe confirmar la clasificación de las operaciones para evitar reconocer préstamos o aportes como ingresos y pagos de obligaciones como nuevos gastos. Los siguientes aspectos orientan la revisión antes de elaborar los informes financieros:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 5.
                span Verificación de información antes de elaborar los informes financieros
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Aspecto
                      th.texto-left Verificación
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Periodo
                      td.texto-left Confirmar que las operaciones correspondan a la fecha o periodo que se pretende informar.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Efectivo y bancos
                      td.texto-left Comparar los saldos registrados con el dinero disponible y los movimientos bancarios.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cuentas por cobrar
                      td.texto-left Verificar los clientes, valores, recaudos realizados y saldos pendientes.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Inventarios
                      td.texto-left Comparar los registros con las existencias disponibles.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Activos utilizados en el negocio
                      td.texto-left Verificar su existencia, forma de adquisición y valor registrado.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cuentas por pagar
                      td.texto-left Confirmar los terceros, pagos realizados y valores pendientes.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ingresos
                      td.texto-left Revisar que correspondan a operaciones reconocidas durante el periodo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costos y gastos
                      td.texto-left Comprobar su clasificación, valor y relación con la actividad económica.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Soportes
                      td.texto-left Confirmar que las operaciones puedan relacionarse con sus respectivos documentos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Resultado
                      td.texto-left Verificar que corresponda a los ingresos, costos y gastos consolidados.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Coherencia entre los registros
          p La información debe conservar una relación coherente entre sus componentes. Los activos deben corresponder a la suma de los pasivos y el patrimonio, mientras que el resultado del periodo debe coincidir con los ingresos, costos y gastos consolidados (Decreto 2420 Anexo 3, 2015).
          p.mb-5 El siguiente caso presenta una diferencia que debe investigarse antes de preparar el informe:
          .caja-1(data-aos="zoom-in").mb-5
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t1/img34.png', alt='' style="width: 500px").m-auto
              .col-xl.caja-1__texto
                h5 Ejemplo aplicado
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    |  Activos registrados: #[b $20.000.000] 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    |  Pasivos registrados: #[b $8.000.000] 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    |  Patrimonio registrado: #[b $11.000.000] 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    |  Pasivos más patrimonio: #[b $19.000.000] 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    |  Diferencia identificada: #[b $1.000.000]
      p.mb-5 La diferencia no debe corregirse modificando arbitrariamente los valores. Primero se debe determinar si existe una operación omitida, duplicada o clasificada incorrectamente.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Identificación de inconsistencias
      p Las diferencias pueden originarse en registros omitidos o duplicados, errores de valor, clasificaciones incorrectas o movimientos incorporados en un periodo diferente. Su identificación permite establecer la revisión necesaria antes de utilizar los saldos consolidados.
      p.mb-5 Las inconsistencias más frecuentes y sus respectivas acciones de revisión se presentan a continuación:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 6.
                span Inconsistencias frecuentes y acciones de revisión
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Inconsistencia
                      th.ajuste-border-tabla.texto-left Posible causa
                      th.texto-left Acción de revisión
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Diferencia en efectivo
                      td.ajuste-border-tabla.texto-left Movimiento no registrado
                      td.texto-left Comparar los registros con el dinero en caja y los movimientos bancarios.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cuenta por cobrar sin tercero identificado
                      td.ajuste-border-tabla.texto-left Registro incompleto
                      td.texto-left Revisar la venta y su respectivo soporte.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Inventario diferente de las existencias verificadas
                      td.ajuste-border-tabla.texto-left Entrada o salida omitida
                      td.texto-left Revisar los movimientos de inventario y sus soportes.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Obligación pagada que continúa pendiente
                      td.ajuste-border-tabla.texto-left Pago no aplicado
                      td.texto-left Verificar el comprobante y el registro del pago.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ingreso registrado más de una vez
                      td.ajuste-border-tabla.texto-left Duplicidad
                      td.texto-left Comparar los registros con los soportes de venta.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gasto clasificado como activo
                      td.ajuste-border-tabla.texto-left Clasificación incorrecta
                      td.texto-left Analizar la naturaleza de la operación.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Resultado diferente del esperado
                      td.ajuste-border-tabla.texto-left Omisión o clasificación incorrecta
                      td.texto-left Revisar los ingresos, costos y gastos consolidados.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ecuación contable sin equilibrio
                      td.ajuste-border-tabla.texto-left Registro incompleto o incorrecto
                      td.texto-left Revisar los movimientos y los saldos de las cuentas.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Preparación de la información verificada
          p.mb-5 Una vez revisadas y corregidas las diferencias, los saldos pueden organizarse según el estado financiero en el que serán utilizados. El marco técnico para microempresas establece requerimientos simplificados para la preparación de esta información (Decreto 2420, 2015). La información verificada se organiza según la finalidad que cumple en la preparación de los estados financieros:
          .row.justify-content-center.mb-5
            .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt(data-aos="flip-left")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/temas/t1/img35.png", alt="")
                .crd_hover_txt--body
                  h4.mb-3 Situación financiera
                  p.mb-0 Los activos, pasivos y el patrimonio permiten establecer la situación financiera de la unidad económica.
            .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt(data-aos="flip-left")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/temas/t1/img36.png", alt="")
                .crd_hover_txt--body
                  h4.mb-3 Resultado del periodo
                  p.mb-0 Los ingresos, costos y gastos permiten determinar la utilidad o pérdida generada durante el periodo.
      p.mb-0 La revisión de soportes, registros y saldos consolidados proporciona información organizada y verificable para comparar periodos, analizar la liquidez, las obligaciones y el desempeño económico, y preparar los estados financieros básicos con la situación financiera y el resultado del periodo.

</template>

<script>
export default {
  name: 'Tema1',
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
