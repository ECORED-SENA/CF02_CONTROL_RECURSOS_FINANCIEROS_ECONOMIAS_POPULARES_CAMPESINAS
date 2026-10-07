<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'información financiera, liquidez y control de riesgos',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Evaluar la comprensión y aplicación de los procedimientos para interpretar estados financieros básicos, elaborar y analizar el flujo de caja, identificar problemas de liquidez, evaluar riesgos financieros y reconocer medidas preventivas y mecanismos de control de recursos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué tratamiento corresponde a un préstamo recibido al organizar los movimientos del periodo?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se registra como entrada de efectivo que genera una obligación pendiente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Se registra como ingreso del periodo que incrementa la utilidad obtenida.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Se registra como aporte propio que incrementa directamente el patrimonio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se registra como recaudo de cartera que disminuye las cuentas por cobrar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Si una unidad económica tiene activos por $15.000.000 y pasivos por $6.500.000, ¿cuál es su patrimonio?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El patrimonio corresponde a $7.500.000 según la ecuación contable básica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El patrimonio corresponde a $8.500.000 según la ecuación contable básica.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El patrimonio corresponde a $9.500.000 según la ecuación contable básica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El patrimonio corresponde a $6.500.000 según la ecuación contable básica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes operaciones corresponde a un costo y no a un gasto?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El pago del arrendamiento utilizado para apoyar el funcionamiento del negocio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El consumo de servicios públicos requerido para el funcionamiento del negocio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El valor de la mercancía comprada que corresponde a los productos ya vendidos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El uso de papelería destinado a apoyar las tareas administrativas del negocio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál afirmación explica correctamente la relación entre utilidad y disponibilidad de efectivo?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La utilidad siempre coincide con el efectivo disponible al cierre del periodo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El efectivo disponible explica por sí solo la utilidad obtenida en el periodo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un crédito recibido aumenta la utilidad porque aumenta el efectivo disponible.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Puede existir utilidad y, al mismo tiempo, presentarse dificultad de efectivo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué información presenta principalmente el estado de situación financiera simplificado?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Detalla los activos, pasivos y patrimonio existentes en una fecha determinada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Presenta ingresos, costos y gastos reconocidos durante un periodo determinado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Incluye entradas, salidas y saldos de efectivo registrados durante un periodo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Incluye riesgos, medidas y controles financieros definidos durante un periodo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué información permite determinar el estado de resultados simplificado?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permite determinar los recursos y obligaciones existentes en cierta fecha.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permite determinar la utilidad o pérdida generada durante todo un periodo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Permite determinar las entradas y salidas previstas para periodos futuros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Permite determinar los riesgos según su probabilidad e impacto financiero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cómo afecta normalmente una utilidad del periodo al patrimonio de la unidad económica?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Disminuiría el patrimonio porque representa una salida definitiva de recursos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'No cambia el patrimonio porque solo corresponde a un movimiento de los fondos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Incrementa los recursos propios generados por la actividad durante el periodo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Sustituye el valor de los pasivos pendientes al finalizar el periodo contable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Por qué es útil comparar los estados financieros con periodos anteriores?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permite reemplazar todos aquellos soportes que respaldan operaciones registradas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permite excluir la revisión de los saldos y movimientos del periodo más reciente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Permite convertir los activos registrados en recursos disponibles inmediatamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Permite identificar variaciones y analizar la evolución financiera de un negocio.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cómo se calcula el saldo final en una estructura básica de flujo de caja?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Saldo inicial más entradas de efectivo menos salidas de efectivo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Saldo inicial menos entradas de efectivo más salidas de efectivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Saldo inicial más ingresos del periodo menos pasivos del periodo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Saldo inicial menos los costos y gastos más patrimonio acumulado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Una venta se realiza a crédito y el cliente paga en el mes siguiente. ¿Cuándo se incorpora la entrada al flujo de caja?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cuando se emite el documento que respalda la venta realizada a crédito.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Cuando el cliente realiza efectivamente el pago de la cuenta pendiente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Cuando se reconoce el ingreso contable correspondiente a esa operación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Cuando se registra la cuenta por cobrar derivada de la venta realizada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué situación constituye una señal de posible problema de liquidez?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las entradas superan sostenidamente los pagos previstos durante el mismo periodo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Los recaudos llegan antes de las fechas programadas para cubrir las obligaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las salidas superan las entradas y el saldo disponible disminuye progresivamente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Los pagos se distribuyen según las fechas y los recursos previamente proyectados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿En qué información debe apoyarse principalmente una proyección del flujo de caja?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'En valores supuestos sin relación con el comportamiento real de la actividad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'En cifras escogidas solo para obtener un saldo positivo al final del periodo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'En estimaciones elaboradas solo con los gastos y costos del periodo anterior.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'En resultados previos, cobros esperados, pagos previstos y ciclos de negocio.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué diferencia existe entre un riesgo financiero y un problema financiero materializado?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El riesgo puede ocurrir y afectar a un negocio; el problema ya ocurrió y genera efectos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El riesgo siempre genera pérdidas financieras; el problema solo afecta periodos futuros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El riesgo corresponde a un hecho materializado; el problema representa un evento futuro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El riesgo se registra como un ingreso; el problema se reconoce únicamente como un gasto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Una unidad vende gran parte de su producción a crédito y varios clientes retrasan sus pagos. ¿Qué riesgo predomina?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Riesgo de mercado relacionado con cambios adversos en los precios del mercado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Riesgo de crédito asociado con demoras o incumplimientos de pagos de clientes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Riesgo de tasa de interés asociado con cambios en el costo de la financiación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Riesgo de tasa de cambio relacionado con variaciones del valor de las monedas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Según la matriz didáctica del componente, ¿qué nivel resulta de una probabilidad alta (3) y un impacto alto (3)?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un nivel bajo con resultado 1, que requiere seguimiento regular sobre el riesgo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un nivel medio con resultado 4, que requiere atención frecuente sobre el riesgo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un nivel alto con resultado 9, que demanda atención prioritaria sobre el riesgo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Un nivel medio con resultado 3, que requiere revisión ocasional sobre el riesgo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué señal financiera puede asociarse con un riesgo de liquidez?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una disminución del inventario junto con mayores ventas realizadas de contado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un aumento de aportes del propietario destinado a comprar equipos adicionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una mejora continua de la utilidad acompañada por mayores recaudos de cartera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una disminución del efectivo por entradas insuficientes para cubrir los pagos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Cómo deben formularse las medidas preventivas frente a los riesgos financieros?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'De acuerdo con los riesgos identificados, sus causas y posibles consecuencias.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'De manera idéntica para todos los negocios, sin considerar su nivel de riesgo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Solo cuando el riesgo se materialice y genere una pérdida financiera concreta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Solo con base en el tamaño del negocio, sin revisar la información financiera.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué elemento es indispensable para implementar una medida preventiva de manera verificable?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar la periodicidad para permitir que la medida se ejecute cuando sea posible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Asignar responsable, establecer periodicidad y conservar evidencia de su ejecución.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Evitar registros de seguimiento para reducir el trabajo administrativo del negocio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ejecutar la medida una sola vez y asumir que seguirá siendo efectiva con el tiempo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es uno de los objetivos principales del control de recursos en la unidad económica?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituir los registros financieros por decisiones adoptadas sin información previa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Evitar la revisión de cuentas por cobrar y pagar para simplificar la administración.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Verificar el uso del efectivo y hacer seguimiento a los recursos y las obligaciones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Eliminar los controles financieros cuando el negocio presenta resultados favorables.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué debe hacerse cuando el seguimiento evidencia que una medida preventiva no reduce el riesgo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Conservar la medida sin cambios aunque sus resultados continúen en deterioro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Cambiar únicamente el formato sin analizar las causas del resultado obtenido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Suspender el seguimiento hasta que el riesgo produzca una pérdida comprobada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ajustar la medida o frecuencia según los resultados y las condiciones reales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
