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
      tema: 'Optimización, consistencia y documentación técnica de bases de datos',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> el objetivo de esta actividad es evaluar de manera integral el nivel de apropiación y la capacidad analítica del aprendiz respecto a los teoremas de normalización relacional (1FN, 2FN y 3FN), la definición y selección de tipos de datos nativos junto a restricciones de integridad avanzadas, y la correcta aplicación de técnicas de evaluación estática y consolidación del informe final de diseño.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'Un diseñador de datos identifica que una tabla relacional contiene una celda donde se almacenan tres números telefónicos separados por comas. Para que esta estructura cumpla con la Primera Forma Normal (1FN), la acción técnica es:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Modificar el motor relacional a una estructura de tipo orientada a objetos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Aplicar la atomicidad extrayendo los valores hacia filas independientes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Implementar una restricción CHECK de tipo transaccional global.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Cambiar de forma inmediata el tipo de dato de la columna a FLOAT.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Si un subconjunto de atributos Y depende de la totalidad de una clave primaria compuesta X, y bajo ninguna circunstancia de una fracción o parte propia de dicha clave, se afirma que existe una:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dependencia funcional completa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Restricción de disyunción unaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Dependencia funcional transitiva.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Anomalía transaccional de borrado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Bajo qué condiciones específicas se afirma que una tabla relacional de la organización ha alcanzado formalmente la Segunda Forma Normal (2FN)?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cuando no posee llaves foráneas y carece de atributos de tipo VARCHAR.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Al fragmentar el repositorio eliminando únicamente las restricciones de dominio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Al implementar un script DDL que unifique las superclases con valores nulos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Cuando está en 1FN y todos sus atributos no clave tienen dependencia funcional completa de la PK.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Cuando en una relación o tabla se detecta una estructura de dependencias de la forma A➙B➙C, donde A representa la clave primaria y tanto B como C son campos comunes no clave, se está ante una:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Integridad referencial en cascada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Dependencia funcional transitiva.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Anomalía de inserción atómica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cohesión de esquema enmarañado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'El principio de Integridad de Entidad dentro del paradigma relacional establece de forma estricta que:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los atributos de la clave primaria no pueden aceptar jamás valores nulos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Toda tabla del negocio debe contar con al menos tres llaves foráneas activas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El acoplamiento de las vistas lógicas externas debe ser igual a cero.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las columnas financieras deben configurarse bajo el dominio de coma flotante.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'Al definir la infraestructura física en un SGBD para una entidad comercial colombiana, se requiere almacenar el precio de venta de los artículos con precisión matemática exacta. El tipo de dato nativo mandatorio por buenas prácticas es:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'DOUBLE.', esCorrecta: false },
            { id: 'b', texto: 'FLOAT.', esCorrecta: false },
            { id: 'c', texto: 'DECIMAL.', esCorrecta: true },
            { id: 'd', texto: 'VARCHAR.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué es conceptualmente el "Diccionario de Datos" en el ciclo de vida del desarrollo de software?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El manual de usuario final donde se explican las interfaces gráficas del sistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un catálogo estructurado de metadatos que describe las características técnicas de las tablas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El script DDL definitivo encargado de compilar los logs de auditoría transaccional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una matriz estática que mide la ruta crítica del cronograma de actividades didácticas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'Durante una sesión de Revisión Técnica Formal (RTF) de base de datos, ¿cuál es el rol del participante denominado Registrador?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Tomar la palabra para defender rigurosamente las decisiones arquitectónicas del modelo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Dirigir el encuentro garantizando el apego estricto a las agendas institucionales del QA.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Documentar formalmente cada hallazgo, defecto o inconformidad detectada en los planos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Validar la integración del software leyendo el diccionario de datos de forma inversa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'La métrica de diseño que evalúa el grado de afinidad semántica y enfoque funcional de los atributos contenidos dentro de una misma tabla se denomina:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Acoplamiento.', esCorrecta: false },
            { id: 'b', texto: 'Cohesión.', esCorrecta: true },
            { id: 'c', texto: 'Trazabilidad.', esCorrecta: false },
            { id: 'd', texto: 'Transitividad.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la función primordial de una matriz de trazabilidad de datos en un proceso de auditoría de software?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Generar scripts automáticos de marcas de tiempo en el servidor web.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Mapear los requisitos del negocio frente a los elementos del esquema lógico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reducir el tamaño físico del diccionario de metadatos del SGBD destino.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Calcular el porcentaje de dependencias parciales en tablas en 3FN.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Un estándar internacional que regula y provee directrices de ingeniería para la gestión de la configuración y documentación de software en el ciclo de vida de TI es:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'IEEE 830 / ISO/IEC 12207.', esCorrecta: true },
            { id: 'b', texto: 'ANSI-SPARC Nivel Físico.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Algoritmo ACID Transaccional.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Regla de Codd Número Ocho.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'En las propiedades relacionales puras, la restricción de integridad de dominio se encarga de controlar de forma directa:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que las llaves foráneas apunten a registros existentes de la superclase.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La fragmentación técnica de tablas con claves primarias simples.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El número máximo de tuplas que un moderador puede auditar por par.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Los valores permisibles y formatos válidos para un atributo específico.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué mecanismo avanzado de integridad se encarga de evaluar la consistencia analítica analizando múltiples tablas en bloque antes del Commit definitivo?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Restricciones de Dominio Simple.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Restricciones de Transición.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Restricciones de Transacción.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Restricciones de Disyunción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Al configurar una llave foránea (FK) en el motor relacional, la acción referencial ON DELETE RESTRICT tiene como consecuencia técnica:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Borrar automáticamente los registros hijos si se elimina el registro maestro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Bloquear la eliminación del registro maestro si existen filas dependientes vinculadas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Reemplazar por valores nulos todas las claves primarias de la base de datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Duplicar la tupla en una tabla intermedia optimizada en tercera forma normal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Una tabla relacional que se encuentra previamente validada en la Segunda Forma Normal (2FN) alcanzará de forma estricta la Tercera Forma Normal (3FN) cuando:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incorpore marcas de tiempo de auditoría mediante tipos de datos TIMESTAMP nativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se elimine cualquier tipo de dependencia funcional transitiva entre sus atributos comunes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Se unifiquen todas las columnas alfanuméricas bajo la longitud fija del tipo CHAR.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se complete la transferencia de metadatos al informe técnico de diseño del cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            'Un aprendiz audita el esquema lógico de una agencia de vuelos. Encuentra la tabla RESERVA con los atributos: id_reserva (PK), fecha_viaje, id_pasajero, nombre_pasajero y nacionalidad_pasajero. El aprendiz argumenta que como la clave primaria es simple (id_reserva), la tabla se encuentra automáticamente optimizada tanto en 2FN como en 3FN, por lo que procede a generar el script físico de base de datos. Evaluación analítica: Evaluando la acción del aprendiz bajo la teoría de normalización, el diseño es deficiente porque:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una clave primaria de tipo alfanumérica impide la inserción de restricciones referenciales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Las bases de datos de turismo exigen de forma mandataria aplicar el acoplamiento en cascada unario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ignoró que existe una dependencia transitiva donde el nombre y nacionalidad dependen del pasajero, violando la 3FN.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Olvidó transformar los atributos descriptivos compuestos en arreglos multivaluados de 1FN.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            'En un sistema logístico no normalizado, la tabla INVENTARIO fusiona los datos de los productos con los nombres y ubicaciones de las bodegas físicas de la organización. Durante una reestructuración operativa, la empresa decide dar de baja y eliminar el registro del producto "Tornillo de Titanio" debido a que ya no se comercializará. Al ejecutar el borrado de esa única fila, el sistema elimina por completo de la base de datos la dirección real de la "Bodega Norte", la cual era la única que almacenaba dicho tornillo. Evaluación analítica: ¿Qué defecto arquitectónico del diseño lógico relacional se acaba de materializar en este escenario empresarial?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Violación de la restricción avanzada de transacción atómica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Dependencia funcional completa sobre un determinante no clave.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Anomalía de borrado por falta de fragmentación y normalización.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Inconsistencia por asignación incorrecta de tipos de datos nativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            "Las reglas del negocio bancario estipulan de forma estricta: \"Un crédito aprobado solo puede cambiar su estado operativo de la siguiente manera: de 'Vigente' a 'Al Día', o de 'Vigente' a 'En Mora'. Queda prohibido que un crédito en estado 'En Mora' pase directamente a estado 'Cancelado' sin registrar primero un abono en la tabla de pagos\". El equipo de desarrollo necesita garantizar el cumplimiento de esta política dentro del propio motor relacional del SGBD. Evaluación analítica: Para solucionar técnicamente este requerimiento de la organización, el arquitecto de datos debe implementar:",
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una restricción de integridad de dominio basada en campos de coma flotante.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una revisión técnica estática por pares dirigida por un registrador calificado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una restricción de transición para validar el cambio de estado en el tiempo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Una clave primaria compuesta libre de dependencias funcionales parciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'Durante una inspección por pares (Peer Review), los revisores analizan una base de datos médica y detectan una tabla con un alto acoplamiento (enlazada mediante decenas de llaves foráneas cruzadas a múltiples procesos independientes) y una baja cohesión (mezcla registros clínicos de pacientes con nóminas de médicos en el mismo archivo). El diseñador de la base de datos afirma que el modelo es óptimo porque el script DDL compila sin errores en el SGBD PostgreSQL. Evaluación analítica: aplicando las buenas prácticas de la ingeniería de software relacional, el comité de calidad debe dictaminar que:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El diseño es correcto ya que la compilación exitosa del DDL certifica la calidad del producto final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La base de datos debe ser rechazada; su estructura enmarañada y de baja cohesión provocará cuellos de botella y anomalías en cascada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El modelo debe ser aprobado de forma parcial siempre que se añada una matriz de trazabilidad de hardware.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las métricas de cohesión y acoplamiento solo aplican en la 1FN y pierden validez al alcanzar la 3FN.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            'Un programador en fase de pruebas hereda una base de datos relacional donde la columna monto_factura fue definida nativamente con el tipo de dato FLOAT. Tras procesar un lote masivo de dos millones de ventas en el fin de mes de la organización, el departamento contable emite una alerta crítica: la sumatoria de los reportes lógicos del software presenta un desfase de centavos de dólar frente al dinero real depositado en las cuentas bancarias de la empresa. Evaluación analítica: Desde el análisis técnico de la especificación del modelado físico, ¿cuál fue la causa del fallo informativo evidenciado en el sector productivo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El tipo de dato FLOAT maneja coma flotante binaria y genera imprecisiones por redondeo; debió usarse DECIMAL.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La base de datos sufrió una anomalía de actualización derivada del incumplimiento de la 2FN.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La herramienta CASE aplicó ingeniería hacia adelante borrando los valores nulos del script.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El SGBD rechazó la integridad referencial al no encontrar una clave primaria de tipo alfanumérica.',
              esCorrecta: false,
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
