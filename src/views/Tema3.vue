<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Flujo de caja y análisis de liquidez
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p El flujo de caja organiza las entradas y salidas de efectivo de una actividad económica durante un periodo. Permite establecer el dinero recibido, los pagos realizados y el saldo disponible. En las economías populares y campesinas, facilita anticipar faltantes y proyectar necesidades; la liquidez expresa la disponibilidad de fondos para atender pagos o convertir recursos en medios de pago.
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Flujo de caja: concepto, importancia y clases
      p.mb-5 El flujo de caja registra el movimiento real del dinero y determina el saldo disponible después de sumar los recursos recibidos y descontar los pagos efectuados. A diferencia del estado de resultados, solo incorpora operaciones cuando se produce la entrada o salida efectiva de dinero. A continuación, se presenta un ejemplo:
      .caja-4(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1__text
            h5 Ejemplo aplicado
            p.mb-0 Una venta a crédito se reconoce como ingreso en el estado de resultados, pero solo constituye una entrada de efectivo cuando el cliente realiza el pago. Por ello, una unidad económica puede obtener utilidad y no disponer de dinero suficiente para cumplir sus obligaciones inmediatas.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img2.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estructura básica del flujo de caja
      p.mb-5 La estructura básica parte del efectivo disponible al comienzo del periodo, incorpora las entradas recibidas y descuenta las salidas pagadas. Esta relación permite establecer el saldo final:
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-xl-6
          .caja-2  
            h5.mb-0 Saldo final de caja = Saldo inicial + Entradas de efectivo − Salidas de efectivo
      p.mb-5 La fórmula puede aplicarse al siguiente caso:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t3/img3.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1__texto
            h5 Ejemplo aplicado
            p.mb-0 Si una unidad económica inicia el mes con $1.000.000, recibe $4.500.000 y realiza pagos por $4.000.000, el saldo final disponible será de $1.500.000.
      p.mb-5 Cada componente cumple una función específica:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 14.
                span Elementos básicos del flujo de caja
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Elemento
                      th.ajuste-border-tabla.texto-left Descripción
                      th.texto-left Ejemplo
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Saldo inicial
                      td.ajuste-border-tabla.texto-left Dinero disponible al comienzo del periodo
                      td.texto-left Efectivo existente en caja y bancos
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Entradas de efectivo
                      td.ajuste-border-tabla.texto-left Recursos efectivamente recibidos
                      td.texto-left Ventas de contado, recaudo de cartera o aportes
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Salidas de efectivo
                      td.ajuste-border-tabla.texto-left Recursos efectivamente pagados
                      td.texto-left Compras, servicios, proveedores o cuotas de préstamos
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Saldo final
                      td.ajuste-border-tabla.texto-left Dinero disponible después de las entradas y salidas
                      td.texto-left Recursos que permanecen al finalizar el periodo
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Importancia del flujo de caja
          p.mb-5 El flujo de caja permite anticipar la disponibilidad de recursos, programar pagos, organizar recaudos y ajustar compras o gastos. Su análisis facilita establecer la liquidez de la unidad económica y su capacidad inmediata para cumplir las obligaciones en las fechas previstas. Las principales aplicaciones del flujo de caja en la gestión del negocio son:
          .bg-slider.mb-5
            .px-5
              .ajuste-slider(data-aos="zoom-in")
                SlyderA(tipo="b")
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Control y programación
                      p.mb-0 Permite establecer cuánto dinero entra, sale y permanece disponible, además de organizar las obligaciones según sus fechas de vencimiento y los recursos requeridos para pagarlas. Esta información ayuda a evitar que varios compromisos coincidan sin fondos suficientes durante el periodo.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t3/img4.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Compras y cobros
                      p.mb-0 Permite valorar si existen recursos antes de adquirir insumos o mercancías e identificar las ventas pendientes de recaudo. De esta manera, las compras pueden programarse sin comprometer los pagos y los cobros pueden gestionarse oportunamente para mantener la continuidad de la actividad.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t3/img5.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Faltantes y necesidades
                      p.mb-0 Facilita reconocer periodos en los que las salidas pueden superar las entradas y anticipar los recursos requeridos para periodos futuros. Esta revisión permite tomar medidas antes de que la falta de efectivo afecte el funcionamiento habitual de la actividad económica.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t3/img6.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Apoyo a las decisiones
                      p.mb-0 Proporciona información para ajustar gastos, compras, cobros y compromisos de acuerdo con la disponibilidad real o proyectada. También permite analizar alternativas y definir prioridades cuando los recursos no son suficientes para atender simultáneamente todas las necesidades de la unidad económica.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t3/img7.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clases de flujo de caja
      p.mb-5 El flujo de caja puede analizarse como realizado o proyectado. El primero registra las entradas y salidas ocurridas, mientras que el segundo estima movimientos futuros a partir de ventas, cobros, compras, gastos y obligaciones esperadas para anticipar excedentes o faltantes. Las diferencias entre ambas clases se presentan de manera comparativa:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 15.
                span Diferencias entre flujo realizado y proyectado
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Aspecto
                      th.ajuste-border-tabla.texto-left Flujo de caja realizado
                      th.texto-left Flujo de caja proyectado
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Momento del análisis
                      td.ajuste-border-tabla.texto-left Periodos que ya ocurrieron.
                      td.texto-left Periodos futuros.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Información utilizada
                      td.ajuste-border-tabla.texto-left Cobros y pagos efectivamente realizados.
                      td.texto-left Cobros y pagos estimados.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Finalidad principal
                      td.ajuste-border-tabla.texto-left Establecer qué ocurrió con el efectivo.
                      td.texto-left Anticipar qué puede ocurrir con el efectivo.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad
                      td.ajuste-border-tabla.texto-left Evaluar el comportamiento real de los recursos.
                      td.texto-left Prever faltantes o excedentes.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Aplicación
                      td.ajuste-border-tabla.texto-left Seguimiento y control.
                      td.texto-left Planeación y toma de decisiones.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Periodicidad del flujo de caja
          p.mb-5 La periodicidad debe definirse según la frecuencia de los movimientos y las características de la actividad:
          TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
            .py-3.py-md-4(titulo="Diaria o semanal")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t3/img8.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Diaria o semanal
                  p.mb-0 Se utiliza cuando existen movimientos continuos y se requiere controlar con mayor frecuencia las entradas, las salidas y el saldo disponible.
            .py-3.py-md-4(titulo="Mensual")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t3/img9.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Mensual
                  p.mb-0 Resulta adecuada cuando los movimientos son menos frecuentes y pueden consolidarse para establecer el comportamiento del efectivo durante cada mes.
            .py-3.py-md-4(titulo="Estacional")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t3/img10.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Estacional
                  p.mb-0 Se aplica en actividades con cosechas, producción o ventas concentradas, para anticipar meses con mayores ingresos o gastos previos al recaudo.
      p.mb-0 El conocimiento de la estructura, la importancia, las clases y la periodicidad permite organizar el flujo de caja. Para elaborarlo, primero deben identificarse las operaciones que generan entradas y salidas reales de efectivo.
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Entradas y salidas de efectivo
      p.mb-5 Para elaborar un flujo de caja deben identificarse las operaciones que producen movimientos reales de dinero. Las entradas corresponden a recursos efectivamente recibidos y las salidas a pagos realizados. La clasificación se efectúa según la fecha del movimiento y excluye las operaciones que todavía no han sido cobradas o pagadas.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clasificación de los movimientos de efectivo
      p.mb-5 Según el sentido del movimiento, las operaciones se clasifican de la siguiente manera:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Entradas de efectivo")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img11.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Entradas de efectivo
              p.mb-0 Corresponden a los recursos recibidos por ventas de contado, recaudos de cuentas por cobrar, aportes de los propietarios o préstamos desembolsados. Deben registrarse en la fecha en que ingresa el dinero. No toda entrada representa un ingreso: los aportes y préstamos aumentan el efectivo, pero reciben un tratamiento diferente frente a las ventas o la prestación de servicios.
        .py-3.py-md-4(titulo="Salidas de efectivo")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img12.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Salidas de efectivo
              p.mb-0 Corresponden a los pagos realizados para desarrollar la actividad o atender compromisos, como compras de contado, pagos a proveedores, servicios, arrendamientos, transporte, mantenimiento, obligaciones financieras, equipos o retiros del propietario. Se registran en la fecha del desembolso. No toda salida constituye un gasto: pagar una obligación, comprar un equipo o devolver un préstamo reduce el efectivo, pero recibe un tratamiento diferente.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Operaciones que no generan movimiento inmediato de efectivo
      p.mb-5 Algunas operaciones modifican la información financiera sin producir una entrada o salida de dinero en el momento de su reconocimiento. Por ello, deben incorporarse al flujo de caja únicamente cuando ocurre el cobro, el desembolso o el pago correspondiente. El momento de registro se diferencia en los siguientes casos:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ventas y recaudos
                  p.mb-0 Una venta de contado genera una entrada inmediata de efectivo. Una venta a crédito aumenta las cuentas por cobrar, pero no produce movimiento de dinero hasta que el cliente realiza el pago; en ese momento, el recaudo se incorpora al flujo de caja.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Compras y pagos
                  p.mb-0 Una compra de contado y el pago de una cuota pendiente generan una salida cuando se entrega el dinero. Una compra a crédito no afecta inmediatamente el efectivo y se registra cuando se cancela la obligación al proveedor.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Préstamos y bienes financiados
                  p.mb-0 Un préstamo desembolsado genera una entrada cuando se reciben los recursos; si solo está aprobado, no produce movimiento. La compra financiada de un equipo sin pago inicial se incorpora al flujo conforme se realizan las cuotas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img15.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Organización de los movimientos
      p Cada entrada y salida debe registrarse de manera cronológica, indicando la fecha, el concepto, el valor y el medio utilizado para recibir o efectuar el pago. También conviene identificar si corresponde a una operación habitual, al recaudo o pago de una obligación pendiente o a una fuente de financiación.
      p.mb-5 El siguiente registro organiza los movimientos y actualiza el saldo disponible después de cada operación:
      .row.justify-content-center.mb-5
        .col-xl-10
          .caja-3(data-aos="zoom-in")
            h5 Ejemplo aplicado
            p El registro cronológico permite organizar la información que posteriormente será utilizada para elaborar el flujo de caja del periodo.
            .row.justify-content-center
              .col-xl-10
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Tabla 16.
                  span Registro básico de movimientos de efectivo
                .tabla-a(data-aos="zoom-in")
                  table
                    thead
                      tr
                        th.ajuste-border-tabla.texto-left Fecha
                        th.ajuste-border-tabla.texto-left Concepto
                        th.ajuste-border-tabla.texto-left Entrada
                        th.ajuste-border-tabla.texto-left Salida
                        th.texto-left Saldo
                    tbody
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Saldo inicial
                        td.ajuste-border-tabla.texto-left Recursos disponibles
                        td.ajuste-border-tabla.texto-left —
                        td.ajuste-border-tabla.texto-left —
                        td.texto-left $1.200.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold 03/05
                        td.ajuste-border-tabla.texto-left Venta de contado
                        td.ajuste-border-tabla.texto-left $800.000
                        td.ajuste-border-tabla.texto-left —
                        td.texto-left $2.000.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold 06/05
                        td.ajuste-border-tabla.texto-left Compra de insumos
                        td.ajuste-border-tabla.texto-left —
                        td.ajuste-border-tabla.texto-left $650.000
                        td.texto-left $1.350.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold 10/05
                        td.ajuste-border-tabla.texto-left Recaudo de cliente
                        td.ajuste-border-tabla.texto-left $500.000
                        td.ajuste-border-tabla.texto-left —
                        td.texto-left $1.850.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold 15/05
                        td.ajuste-border-tabla.texto-left Pago de servicios
                        td.ajuste-border-tabla.texto-left —
                        td.ajuste-border-tabla.texto-left $300.000
                        td.texto-left $1.550.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold 20/05
                        td.ajuste-border-tabla.texto-left Pago a proveedor
                        td.ajuste-border-tabla.texto-left —
                        td.ajuste-border-tabla.texto-left $700.000
                        td.texto-left $850.000
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Revisión de las entradas y salidas
      .caja-1(data-aos="zoom-in").mb-0
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t3/img16.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1__texto
            p Antes de consolidar el flujo de caja, los registros deben compararse con los soportes y movimientos disponibles para comprobar que representan cobros y pagos efectivamente realizados. Los movimientos deben verificarse mediante los siguientes criterios:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                |  Recurso: lista de verificación
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                |  Periodo: confirmar que cada entrada o salida corresponda al intervalo analizado. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                |  Duplicados: comprobar que ningún movimiento haya sido registrado más de una vez. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                |  Origen o destino: identificar de dónde provino el dinero o en qué fue utilizado. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                |  Soportes: contrastar los valores con recibos, facturas, comprobantes o extractos bancarios. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                |  Cuentas pendientes: revisar los valores por cobrar y pagar que todavía no generaron movimientos de efectivo. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                |  Saldo: comprobar que cada operación actualice correctamente el dinero disponible. 
            p.mb-0 Una correcta identificación de las entradas y salidas permite establecer cuánto efectivo estuvo disponible y cómo fue utilizado. Con esta información organizada, los movimientos pueden integrarse para elaborar y analizar el flujo de caja del periodo.
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3  Elaboración del flujo de caja
      p.mb-5 La elaboración del flujo de caja organiza, para un periodo determinado, el saldo inicial, las entradas recibidas y las salidas pagadas, con el fin de establecer el efectivo disponible al cierre. Los valores deben registrarse cuando ocurre el movimiento del dinero para que el resultado represente la disponibilidad real de recursos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Pasos para elaborar el flujo de caja
      p.mb-5 La elaboración puede desarrollarse mediante la siguiente secuencia:
      .bg-1
        .px-5 
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Definir el periodo y el saldo inicial
                    p.mb-0 Definir el periodo que se analizará —diario, semanal, mensual u otro— de acuerdo con la actividad. Después, determinar el saldo inicial disponible en caja y bancos, el cual corresponde normalmente al saldo final obtenido en el periodo anterior.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img17.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img18.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Registrar las entradas
                    p.mb-0 Identificar las entradas efectivamente recibidas durante el periodo, clasificarlas según su origen y sumar sus valores. Deben incluirse las ventas de contado, los recaudos, los aportes, los préstamos desembolsados y cualquier otra entrada real de dinero.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Registrar las salidas
                    p.mb-0 Identificar las salidas efectivamente pagadas, organizarlas por concepto y sumar sus valores. Pueden corresponder a compras, proveedores, servicios, arrendamientos, transporte, obligaciones financieras, adquisición de equipos u otros pagos realizados para atender la actividad.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img19.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img20.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Calcular el movimiento neto
                    p.mb-0 Restar el total de las salidas al total de las entradas para calcular el movimiento neto. Un resultado positivo indica que las entradas superaron las salidas; uno negativo señala que los pagos fueron superiores a los recursos recibidos.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Determinar y revisar el saldo final
                    p.mb-0 Sumar el movimiento neto al saldo inicial para determinar el saldo final disponible. Después, comprobar las operaciones, los totales y la continuidad de los saldos, e identificar si el periodo presenta un faltante o un excedente de efectivo.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img21.png', alt='' style="width: 300px").m-auto
      p.mb-5 Las relaciones utilizadas para calcular los resultados son:
      .row.justify-content-center.mb-3(data-aos="zoom-in")
        .col-xl-6
          .caja-2  
            h5.mb-0 Movimiento neto = Total de entradas − Total de salidas
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-xl-5
          .caja-2  
            h5.mb-0 Saldo final = Saldo inicial + Movimiento neto
      p.mb-5 El saldo final obtenido constituye normalmente el saldo inicial del periodo siguiente, lo que permite mantener la continuidad en el seguimiento del efectivo.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Registro de las entradas y salidas
      p.mb-5 Las entradas y salidas deben organizarse según su origen o finalidad:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Entradas de efectivo")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img22.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Entradas de efectivo
              p.mb-0 Se agrupan según su origen: ventas de contado, recaudos de cuentas por cobrar, otros cobros de la actividad, aportes, préstamos desembolsados y demás entradas. Esta separación permite establecer qué parte del efectivo procede de la operación y cuál corresponde a financiación o recursos de los propietarios, evitando considerar los aportes o préstamos como ventas generadas por la actividad.
        .py-3.py-md-4(titulo="Salidas de efectivo")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img23.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Salidas de efectivo
              p.mb-0 Se organizan según los compromisos de pago: compras de contado, pagos a proveedores, gastos de funcionamiento, transporte, servicios, obligaciones financieras, adquisición de equipos y otras erogaciones. Esta clasificación permite identificar qué conceptos concentran una mayor cantidad de recursos y cuáles pueden generar presión sobre la disponibilidad de efectivo durante el periodo.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elaboración mensual del flujo de caja
      p.mb-5 El siguiente ejemplo integra el saldo inicial, las entradas y las salidas del periodo:
      .row.justify-content-center.mb-5
        .col-xl-10
          .caja-3(data-aos="zoom-in")
            h5 Ejemplo aplicado
            .row.justify-content-center.mb-3
              .col-xl-10
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Tabla 17.
                  span Flujo de caja
                .tabla-a(data-aos="zoom-in")
                  table
                    thead
                      tr
                        th.ajuste-border-tabla.texto-left Concepto
                        th.texto-left Valor
                    tbody
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Saldo inicial de efectivo
                        td.texto-left $1.200.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Entradas de efectivo
                        td.texto-left 
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Ventas de contado
                        td.texto-left $3.800.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Recaudo de cuentas por cobrar
                        td.texto-left $1.200.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Otros ingresos de efectivo
                        td.texto-left $700.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Total entradas
                        td.texto-left.text-weight-bold  $5.700.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Efectivo disponible
                        td.texto-left.text-weight-bold $6.900.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Salidas de efectivo
                        td.texto-left.text-weight-bold 
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Compra de insumos
                        td.texto-left $2.000.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Pago a proveedores
                        td.texto-left $1.000.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Servicios y arrendamiento
                        td.texto-left $900.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Transporte y otros pagos
                        td.texto-left $500.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Cuota de obligación financiera
                        td.texto-left $700.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Total salidas
                        td.texto-left.text-weight-bold  $5.100.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Saldo final de efectivo
                        td.texto-left.text-weight-bold  $1.800.000
            p.mb-0 Las entradas superan las salidas en $600.000. Al adicionar este movimiento neto al saldo inicial de $1.200.000, se obtiene un saldo final disponible de $1.800.000.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elaboración por varios periodos
      p.mb-5 El flujo de caja adquiere mayor utilidad cuando se organiza para periodos consecutivos. Esta presentación permite establecer los cambios en la disponibilidad de efectivo y reconocer con anticipación los meses o semanas en los que pueden presentarse dificultades. La comparación permite establecer la continuidad del saldo y los cambios en la disponibilidad:
      .row.justify-content-center.mb-5
        .col-xl-10
          .caja-3(data-aos="zoom-in")
            h5 Ejemplo aplicado
            p La presentación comparativa permite identificar la evolución del efectivo y reconocer periodos con mayor o menor disponibilidad.
            .row.justify-content-center.mb-3
              .col-xl-10
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Tabla 18.
                  span Flujo de caja por periodos consecutivos
                .tabla-a(data-aos="zoom-in")
                  table
                    thead
                      tr
                        th.ajuste-border-tabla.texto-left Concepto
                        th.ajuste-border-tabla.texto-left Mes 1
                        th.ajuste-border-tabla.texto-left Mes 2
                        th.texto-left Mes 3
                    tbody
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Saldo inicial
                        td.ajuste-border-tabla.texto-left $1.200.000
                        td.ajuste-border-tabla.texto-left $1.800.000
                        td.texto-left $1.300.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Entradas
                        td.ajuste-border-tabla.texto-left $5.700.000
                        td.ajuste-border-tabla.texto-left $4.600.000
                        td.texto-left $6.200.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Efectivo disponible
                        td.ajuste-border-tabla.texto-left $6.900.000
                        td.ajuste-border-tabla.texto-left $6.400.000
                        td.texto-left $7.500.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Salidas
                        td.ajuste-border-tabla.texto-left $5.100.000
                        td.ajuste-border-tabla.texto-left $5.100.000
                        td.texto-left $5.800.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Saldo final
                        td.ajuste-border-tabla.texto-left $1.800.000
                        td.ajuste-border-tabla.texto-left $1.300.000
                        td.texto-left $1.700.000
            p.mb-0 Durante el segundo mes, las salidas superan las entradas en $500.000 y reducen el efectivo disponible, aunque el saldo acumulado continúa siendo positivo. Este comportamiento debe analizarse para establecer si corresponde a una situación temporal o a una tendencia que pueda afectar la capacidad de pago.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Verificación del flujo elaborado
      p.mb-5 Antes de analizar los resultados, deben comprobarse las entradas, las salidas, las fechas, los totales y la continuidad de los saldos. Esta revisión permite detectar errores que podrían modificar la interpretación de la disponibilidad de efectivo. Las verificaciones se agrupan en los siguientes aspectos:
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Saldos inicial y final").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El saldo inicial debe corresponder al saldo final del periodo anterior. Al concluir el cálculo, debe comprobarse que el saldo final resulte de adicionar el movimiento neto al saldo inicial y que pueda trasladarse correctamente al periodo siguiente.
            .row(titulo="Entradas y salidas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Debe confirmarse que las entradas correspondan a dinero efectivamente recibido y que las salidas representen pagos realizados. Las operaciones pendientes de cobro o pago no deben incorporarse hasta que produzcan un movimiento real de efectivo.
            .row(titulo="Fechas y duplicidades").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las fechas deben corresponder al periodo analizado y cada operación debe registrarse una sola vez. Esta comprobación evita trasladar movimientos a periodos incorrectos o alterar los resultados mediante valores duplicados.
            .row(titulo="Totales y soportes").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las sumas de las entradas y salidas deben comprobarse con los registros de caja, los movimientos bancarios y los soportes disponibles. También deben revisarse los recaudos pendientes y las fechas previstas para atender las obligaciones.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img24.png", alt="" style="width: 320px").m-auto
      p.mb-0 El flujo de caja permite establecer cómo se movilizó el efectivo y cuánto permaneció disponible al finalizar cada periodo. Estos resultados facilitan identificar momentos en los que los recursos pueden resultar insuficientes para cubrir los compromisos de la unidad económica.
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4  Identificación de problemas de liquidez
      p.mb-5 Identificar problemas de liquidez exige analizar si la unidad económica dispone de efectivo suficiente para cumplir sus obligaciones en las fechas previstas. El análisis debe considerar los saldos disponibles, el momento de los cobros y pagos y la repetición de los faltantes, con el fin de establecer sus posibles causas y anticipar decisiones financieras.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Identificación de faltantes de efectivo
      p.mb-5 Un faltante se presenta cuando las salidas superan las entradas y el saldo inicial no cubre la diferencia. Esta situación puede impedir el pago oportuno de proveedores, servicios, cuotas de préstamos u otros compromisos. Para identificarla, se calcula el flujo neto del periodo:
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-xl-6
          .caja-2  
            h5.mb-0 Flujo neto = Entradas de efectivo − Salidas de efectivo
      p Cuando el flujo neto es negativo, las salidas fueron superiores a las entradas. Sin embargo, el resultado debe relacionarse con el saldo inicial, porque los recursos acumulados pueden cubrir temporalmente la diferencia.
      p.mb-5 Además del flujo neto, existen situaciones que pueden advertir dificultades en la disponibilidad de efectivo. Las principales señales son las siguientes:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img25.png", alt="" style="width: 500px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Salidas superiores a las entradas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La situación reduce el efectivo disponible durante el periodo y puede generar un faltante si el saldo inicial no permite cubrir la diferencia.
            .row(titulo="Saldo final insuficiente").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Un saldo disponible menor que los pagos próximos puede generar dificultades para atender oportunamente proveedores, servicios, créditos u otras obligaciones.
            .row(titulo="Ventas elevadas con poco recaudo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Aunque se registren ventas, una parte importante de los recursos puede permanecer en cuentas por cobrar y no estar disponible para realizar pagos.
            .row(titulo="Compras elevadas de inventario").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El aumento de las compras puede concentrar recursos en mercancías, materiales o productos y reducir temporalmente el efectivo disponible.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Concentración de pagos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La coincidencia de varias obligaciones en una misma fecha incrementa la presión sobre el efectivo y puede ocasionar insuficiencia de recursos.
            .row(titulo="Retraso frecuente de clientes").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los recaudos tardíos dificultan convertir las ventas realizadas a crédito en efectivo disponible para atender los compromisos del negocio.
            .row(titulo="Dependencia constante de préstamos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La necesidad recurrente de financiación externa puede indicar que el efectivo generado por la actividad no resulta suficiente para cubrir sus necesidades habituales.
            .row(titulo="Disminución continua del saldo de caja").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La reducción progresiva del efectivo durante varios periodos puede advertir un deterioro de la liquidez que requiere analizar sus causas.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img26.png", alt="" style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Diferencia entre falta temporal y problema recurrente
      p Una disminución del efectivo puede ser temporal cuando los pagos se realizan antes de recibir los ingresos, como ocurre en algunas actividades agrícolas. Sin embargo, si los faltantes se repiten, el saldo disminuye progresivamente o se depende de financiación frecuente, es necesario identificar las causas del desequilibrio. 
      p.mb-5 La siguiente comparación permite diferenciar una disminución temporal del efectivo de una dificultad que se mantiene durante varios periodos:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 19.
                span Diferencias entre una situación temporal y una dificultad recurrente
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Aspecto
                      th.ajuste-border-tabla.texto-left Situación temporal
                      th.texto-left Dificultad recurrente
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Duración
                      td.ajuste-border-tabla.texto-left Se presenta durante uno o pocos periodos.
                      td.texto-left Se mantiene durante varios periodos.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Causa
                      td.ajuste-border-tabla.texto-left Puede relacionarse con fechas de cobro y pago.
                      td.texto-left Puede originarse en problemas estructurales del negocio.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Recuperación
                      td.ajuste-border-tabla.texto-left El flujo posterior permite recuperar el saldo.
                      td.texto-left Los periodos siguientes continúan mostrando insuficiencia.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Financiación
                      td.ajuste-border-tabla.texto-left Puede requerirse de manera ocasional.
                      td.texto-left Existe dependencia frecuente de recursos externos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Acción requerida
                      td.ajuste-border-tabla.texto-left Programar y anticipar el faltante.
                      td.texto-left Revisar ingresos, cobros, costos, gastos y obligaciones.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Análisis de las causas
          p Una vez identificada una baja disponibilidad de efectivo, deben revisarse las entradas y salidas para determinar sus causas, como menores ventas, retrasos en los recaudos, aumento de compras o gastos, obligaciones simultáneas o adquisición de activos. Este análisis permite establecer si la situación es ocasional o recurrente.
          p.mb-5 La siguiente relación permite identificar qué aspectos deben revisarse ante situaciones que pueden afectar la disponibilidad de efectivo:
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 20.
                span Análisis básico de causas de un faltante de efectivo
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Situación
                      th.ajuste-border-tabla.texto-left Aspecto por revisar
                      th.texto-left Posible acción de análisis
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Pocas entradas por ventas
                      td.ajuste-border-tabla.texto-left Comportamiento de ventas de contado
                      td.texto-left Comparar con periodos anteriores.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Recaudos inferiores a lo esperado
                      td.ajuste-border-tabla.texto-left Cuentas por cobrar
                      td.texto-left Revisar fechas y cumplimiento de clientes.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Compras elevadas
                      td.ajuste-border-tabla.texto-left Inventarios y proveedores
                      td.texto-left Analizar cantidades adquiridas y fechas de pago.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gastos crecientes
                      td.ajuste-border-tabla.texto-left Gastos de funcionamiento
                      td.texto-left Identificar conceptos con mayores aumentos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Varias obligaciones próximas
                      td.ajuste-border-tabla.texto-left Calendario de pagos
                      td.texto-left Ordenar compromisos según vencimiento.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cuotas financieras elevadas
                      td.ajuste-border-tabla.texto-left Obligaciones financieras
                      td.texto-left Revisar el peso de los pagos dentro del flujo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Saldo final continuamente menor
                      td.ajuste-border-tabla.texto-left Evolución de varios periodos
                      td.texto-left Determinar si existe una tendencia negativa.
      p.mb-5 El siguiente ejemplo permite identificar un faltante a partir de las entradas, salidas y recursos disponibles:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t3/img27.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1__texto
            h5 Ejemplo aplicado
            p Una unidad económica inicia el mes con #[b $700.000], espera recibir #[b $3.500.000] y debe realizar pagos por #[b $4.800.000].
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                |  #[b Flujo neto:] $3.500.000 − $4.800.000 = −$1.300.000
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                |  #[b Saldo final:] $700.000 − $1.300.000 = −$600.000
            p.mb-0 El resultado indica que los recursos disponibles no son suficientes para cubrir los pagos previstos y se genera un faltante de #[b $600.000]. Esta información permite identificar anticipadamente la dificultad y analizar los cobros pendientes, la programación de pagos y los gastos que requieren revisión.
      p.mb-0 El análisis periódico de la liquidez permite identificar tendencias, momentos de mayor presión sobre el efectivo y efectos de las decisiones adoptadas. Reconocer los faltantes, sus causas y los compromisos próximos facilita anticipar necesidades de efectivo y proyectar las entradas y salidas futuras, aspecto que se desarrolla en el siguiente subtema.
      Separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.5  Proyección del flujo de caja
      p La proyección del flujo de caja permite estimar las entradas y salidas de efectivo de periodos futuros para anticipar la disponibilidad de recursos y posibles faltantes. Para elaborarla se consideran los resultados anteriores, las ventas previstas, los recaudos esperados, los compromisos de pago y otros movimientos que puedan afectar el efectivo.
      p.mb-5 Se invita a reproducir el siguiente video para profundizar en la proyección del flujo de caja mediante la estimación de entradas, salidas y saldos futuros a partir de la información disponible:
      figure(data-aos="zoom-in").mb-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Proyección del flujo de caja: anticipación de entradas, salidas y faltantes

</template>

<script>
export default {
  name: 'Tema3',
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
