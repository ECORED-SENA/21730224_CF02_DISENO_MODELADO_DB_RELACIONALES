<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Integridad del dato y arquitectura del diccionario de datos
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p El proceso de normalización desarrollado en la unidad anterior permite optimizar la estructura de las tablas y reducir la redundancia de la información. Sin embargo, por sí solo no garantiza que los datos registrados sean válidos, consistentes y acordes con las reglas del negocio. Para ello, es necesario definir #[b restricciones de integridad], las cuales permiten preservar la calidad y confiabilidad de la información almacenada en la base de datos (Casas Roma, 2013).
          .caja-1(data-aos="fade-right")
            p.mb-0 Estas restricciones son implementadas por el #[b Sistema Gestor de Bases de Datos (SGBD)], que verifica automáticamente el cumplimiento de las reglas establecidas y evita operaciones que puedan afectar la consistencia de la información.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img1.png', alt='' style="width: 500px").m-auto
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img2.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p En esta unidad se abordan los principios fundamentales de la integridad de los datos: #[b integridad de entidad], #[b integridad de dominio] e #[b integridad referencial]. Además, se estudian mecanismos más avanzados, como las restricciones de transición y de transacción, la selección de tipos de datos adecuados y el diseño del #[b diccionario de datos], documento técnico que describe la estructura de la base de datos y facilita la comunicación entre analistas, desarrolladores y administradores de sistemas.
      p.mb-0 Al finalizar esta unidad, el aprendiz estará en capacidad de definir restricciones de integridad, documentar esquemas lógicos y elaborar un diccionario de datos conforme a las buenas prácticas del diseño de bases de datos.
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Principios fundamentales de integridad de los datos: integridad de entidad, de dominio y referencial 
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img1.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 En el modelo relacional, la integridad de los datos hace referencia a la corrección, validez y consistencia de la información almacenada en una base de datos (Marqués, 2011). Para garantizar estas características, el Sistema Gestor de Bases de Datos (SGBD) implementa mecanismos que verifican automáticamente el cumplimiento de tres principios fundamentales definidos por Edgar F. Codd. A continuación, se describen los tres principios fundamentales de la integridad de los datos.
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Integridad de entidad
                  p.mb-0 Establece que toda relación (tabla) debe contar con una #[b clave primaria (PK)] correctamente definida. Los atributos que conforman esta clave no pueden contener valores nulos (#[i Not Null]), ya que la clave primaria permite identificar de manera única cada registro. Si admitiera valores nulos, no sería posible garantizar la unicidad ni la correcta identificación de las filas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Integridad de dominio
                  p.mb-0 Define el conjunto de valores permitidos para cada atributo de la tabla. Este principio se implementa mediante tipos de datos, longitudes máximas y restricciones de validación, como la cláusula #[b CHECK] en SQL, que permite limitar los valores aceptados. Por ejemplo, puede impedir que el atributo #[b precio_unitario] almacene valores menores o iguales a cero.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Integridad referencial
                  p.mb-0 Regula las relaciones entre tablas mediante el uso de #[b claves foráneas (FK)]. Cada valor almacenado en una clave foránea debe corresponder a un valor existente en la #[b clave primaria (PK)] de la tabla relacionada o, cuando la regla de negocio lo permita, admitir un valor nulo. Este principio evita la existencia de registros sin correspondencia entre las tablas relacionadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img5.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La aplicación de estos principios garantiza la consistencia de la información durante las operaciones de inserción, actualización y eliminación. Por ejemplo, la #[b integridad referencial] impide registrar un pedido asociado a un cliente que no exista en la base de datos, evitando la generación de registros sin relación válida.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Mecanismos avanzados de integridad: restricciones de transición y de transacción 
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img20.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Además de las restricciones de integridad tradicionales, algunos sistemas requieren mecanismos adicionales para garantizar el cumplimiento de reglas de negocio más complejas. Estas validaciones permiten controlar la consistencia de los datos durante los cambios de estado de un registro o durante la ejecución de un conjunto de operaciones relacionadas. A continuación, se describen los principales mecanismos avanzados de integridad: 
      .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
        .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0.text-white
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t2/img6.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Restricciones de transición
          p.mb-0 Controlan los cambios de estado permitidos para un registro al comparar el valor actual con el nuevo valor que se pretende almacenar. Su propósito es impedir transiciones que contradigan las reglas del negocio. Por ejemplo, en un sistema logístico un despacho puede cambiar de #[b Pendiente] a #[b Enviado] y posteriormente a #[b Entregado]; sin embargo, no debería regresar de #[b Entregado] a #[b Pendiente], ya que ello afectaría la trazabilidad del proceso.
        .col-xl-6.col-md-10.tarjeta.color-primario.p-5
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t2/img15.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Restricciones de transacción
          p.mb-0 Verifican la consistencia de los datos considerando varias tablas o registros durante una misma transacción. La validación se realiza antes de confirmar los cambios mediante la operación #[b COMMIT]. Por ejemplo, en un sistema de comercio electrónico (e-commerce), el SGBD puede comprobar que la suma de los valores registrados en #[b DETALLE_PEDIDO] coincida con el valor almacenado en el atributo #[b total_pago] de la tabla #[b PEDIDO]. Si se detecta alguna diferencia, la transacción se cancela para preservar la consistencia de la información.
      p.mb-0 La implementación de estos mecanismos complementa las restricciones de integridad tradicionales y contribuye a garantizar la confiabilidad de la información en procesos que involucran múltiples operaciones y reglas de negocio.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Especificación del modelado físico: arquitectura del diccionario de datos 
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img7.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Una vez definido el modelo lógico, el siguiente paso consiste en seleccionar los tipos de datos que utilizará cada atributo en el #[b Sistema Gestor de Bases de Datos (SGBD)]. Esta decisión influye en el almacenamiento, el rendimiento de las consultas y la integridad de la información. Los principales SGBD, como #[b PostgreSQL], #[b MySQL], #[b Oracle] y #[b SQL Server], ofrecen distintos tipos de datos adaptados a las necesidades de cada aplicación.
      p.mb-5 La selección del tipo de dato debe responder a las características de la información que se almacenará y a los requisitos de precisión y desempeño del sistema. A continuación, se presentan los principales dominios de datos y los tipos más utilizados para su implementación:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t2/img8.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Alfanuméricos
                  p.mb-0 Para cadenas de longitud variable se utiliza #[b VARCHAR(N)], adecuado para nombres, direcciones o descripciones, ya que almacena únicamente los caracteres ingresados. Cuando la longitud del dato es fija, como códigos ISO, siglas o identificadores estandarizados, se recomienda utilizar #[b CHAR(N)].
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t2/img9.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Numéricos
                  p.mb-0 Los identificadores, contadores y cantidades enteras suelen almacenarse mediante #[b INT] o #[b BIGINT]. Para valores financieros o datos que requieren precisión decimal, como precios o pesos, se recomienda utilizar #[b DECIMAL] o #[b NUMERIC], ya que evitan los errores de redondeo asociados a los tipos #[b FLOAT] y #[b DOUBLE].
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t2/img10.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Fecha, hora y otros tipos temporales
                  p.mb-0 Los atributos relacionados con fechas utilizan #[b DATE]; los horarios, #[b TIME]; y los registros que requieren almacenar fecha y hora emplean #[b DATETIME] o #[b TIMESTAMP]. Estos tipos permiten realizar cálculos y comparaciones temporales de forma nativa dentro del SGBD.
      p.mb-0 La selección adecuada de los tipos de datos favorece el uso eficiente del almacenamiento, mejora el rendimiento de las consultas y contribuye a mantener la integridad de la información durante todo el ciclo de vida de la base de datos.
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Diseño, construcción y mantenimiento formal del diccionario de datos corporativo
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img11.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p El #[b diccionario de datos] es un catálogo estructurado de metadatos que reúne las características técnicas, las restricciones de integridad, los dominios y el propósito de cada tabla y atributo que conforma el sistema de información de una organización.
      p.mb-5 Su construcción constituye una práctica fundamental dentro del ciclo de vida del software, ya que reduce ambigüedades, facilita la interpretación del esquema y sirve como referente técnico durante las fases de desarrollo, implementación y mantenimiento de la base de datos. Para garantizar una documentación completa y consistente, el diccionario de datos debe incluir los siguientes elementos para cada componente del esquema: 
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 11.
            span Elementos del diccionario de datos
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Elemento
                  th.texto-left Descripción
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Nombre físico de la tabla
                  td.texto-left Identifica la tabla tal como se encuentra definida en el SGBD.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Nombre físico del atributo
                  td.texto-left Corresponde al nombre técnico de la columna dentro de la tabla.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Tipo de dato
                  td.texto-left Especifica el tipo de dato nativo asignado por el SGBD, como #[b VARCHAR], #[b INT], #[b DECIMAL] o #[b DATE].
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Longitud y precisión
                  td.texto-left Define el tamaño máximo permitido o la cantidad de dígitos y decimales admitidos.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Rol técnico
                  td.texto-left Indica si el atributo corresponde a una #[b clave primaria (PK)], una #[b clave foránea (FK)] o un campo común.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Aceptación de valores nulos
                  td.texto-left Señala si el atributo permite valores nulos mediante las opciones #[b Sí] o #[b No].
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Valor predeterminado
                  td.texto-left Registra el valor asignado automáticamente cuando no se proporciona uno durante la inserción.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Tabla y atributo de referencia
                  td.texto-left Indica la tabla y la columna relacionadas cuando el atributo cumple la función de clave foránea.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Descripción semántica
                  td.texto-left Explica el significado del atributo y la regla de negocio asociada.
      p.mb-0 La actualización del diccionario de datos debe realizarse cada vez que se modifique la estructura del esquema. De este modo, la documentación permanece alineada con la implementación y continúa siendo útil para los equipos responsables del análisis, desarrollo, administración y mantenimiento del sistema.
      Separador
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.5 Caso de uso productivo: arquitectura de integridad y diccionario de datos para #[i ecommerce]
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="fade-right").mb-3
            p.mb-0 Para aplicar los conceptos desarrollados en esta unidad, se retoma el esquema del proyecto ecommerce previamente normalizado hasta la #[b Tercera Forma Normal (3FN)]. A partir de este modelo se construye un #[b diccionario de datos] y se definen las restricciones de integridad que garantizarán la consistencia de la información durante la operación del sistema.
          p En los siguientes ejemplos se presenta un fragmento del diccionario de datos correspondiente a dos de las tablas transaccionales del sistema de ventas.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img12.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img13.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tabla física: PEDIDO
      p.mb-5 La tabla PEDIDO almacena la información general de cada orden de compra registrada en la plataforma.
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 12.
                span Diccionario de datos de la tabla PEDIDO
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Nombre del atributo
                      th.ajuste-border-tabla.texto-left Tipo de dato
                      th.ajuste-border-tabla.texto-left Longitud / precisión
                      th.ajuste-border-tabla.texto-left Rol técnico
                      th.ajuste-border-tabla.texto-left ¿Acepta nulos?
                      th.ajuste-border-tabla.texto-left Referencia (FK)
                      th.texto-left Descripción
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold id_pedido
                      td.ajuste-border-tabla.texto-left VARCHAR
                      td.ajuste-border-tabla.texto-left 15
                      td.ajuste-border-tabla.texto-left PK
                      td.ajuste-border-tabla.texto-left No
                      td.ajuste-border-tabla.texto-left -
                      td.texto-left Identificador alfanumérico único del pedido generado por el sistema.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold fecha_pedido
                      td.ajuste-border-tabla.texto-left DATETIME
                      td.ajuste-border-tabla.texto-left -
                      td.ajuste-border-tabla.texto-left Campo común
                      td.ajuste-border-tabla.texto-left No
                      td.ajuste-border-tabla.texto-left -
                      td.texto-left Fecha y hora en que se registra el pedido. Valor predeterminado: #[b CURRENT_TIMESTAMP].
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold id_cliente
                      td.ajuste-border-tabla.texto-left VARCHAR
                      td.ajuste-border-tabla.texto-left 20
                      td.ajuste-border-tabla.texto-left FK
                      td.ajuste-border-tabla.texto-left No
                      td.ajuste-border-tabla.texto-left CLIENTE.id_cliente
                      td.texto-left Relaciona el pedido con el cliente registrado mediante una restricción de integridad referencial.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img13.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tabla física: DETALLE_PEDIDO
          p.mb-5 La tabla #[b DETALLE_PEDIDO] registra los productos asociados a cada pedido y la cantidad solicitada de cada uno.
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 13.
                span Diccionario de datos de la tabla DETALLE_PEDIDO
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Nombre del atributo
                      th.ajuste-border-tabla.texto-left Tipo de dato
                      th.ajuste-border-tabla.texto-left Longitud / precisión
                      th.ajuste-border-tabla.texto-left Rol técnico
                      th.ajuste-border-tabla.texto-left ¿Acepta nulos?
                      th.ajuste-border-tabla.texto-left Referencia (FK)
                      th.texto-left Descripción
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold id_pedido
                      td.ajuste-border-tabla.texto-left VARCHAR
                      td.ajuste-border-tabla.texto-left 15
                      td.ajuste-border-tabla.texto-left PK, FK1
                      td.ajuste-border-tabla.texto-left No
                      td.ajuste-border-tabla.texto-left PEDIDO.id_pedido
                      td.texto-left Hace parte de la clave primaria compuesta y establece la relación con la tabla #[b PEDIDO]. Regla referencial: #[b ON DELETE CASCADE].
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold id_producto
                      td.ajuste-border-tabla.texto-left VARCHAR
                      td.ajuste-border-tabla.texto-left 10
                      td.ajuste-border-tabla.texto-left PK, FK2
                      td.ajuste-border-tabla.texto-left No
                      td.ajuste-border-tabla.texto-left PRODUCTO.id_producto
                      td.texto-left Hace parte de la clave primaria compuesta y establece la relación con la tabla #[b PRODUCTO]. Regla referencial: #[b ON DELETE RESTRICT].
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold cantidad_solicitada
                      td.ajuste-border-tabla.texto-left INT
                      td.ajuste-border-tabla.texto-left -
                      td.ajuste-border-tabla.texto-left Campo común
                      td.ajuste-border-tabla.texto-left No
                      td.ajuste-border-tabla.texto-left -
                      td.texto-left Cantidad de unidades solicitadas. Restricción de dominio: #[b CHECK (cantidad_solicitada > 0)].
          .row.justify-content-center.align-items-center.mb-0
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t2/img14.png', alt='' style="width: 500px").m-auto
            .col-xl
              .caja-1.color-1(data-aos="fade-left").mb-3
                p.mb-0 Este ejemplo evidencia cómo el diccionario de datos documenta la estructura física de la base de datos y las reglas asociadas a cada atributo. La #[b integridad de entidad] se garantiza mediante la definición de las claves primarias #[b (PK)]; la #[b integridad de dominio], mediante restricciones como CHECK, que impiden registrar cantidades iguales o inferiores a cero; y la #[b integridad referencial], mediante las claves foráneas (#[b FK]) y las reglas de acción referencial, como #[b ON DELETE CASCADE] y #[b ON DELETE RESTRICT], que preservan la consistencia de las relaciones entre las tablas.
              p.mb-0 La documentación de estos elementos facilita el desarrollo, el mantenimiento y la administración de la base de datos, además de contribuir a que el sistema opere de forma consistente y conforme a las reglas del negocio.

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
