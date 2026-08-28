<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Optimización de estructuras mediante teoría de normalización
      p.mb-5 A continuación, se presenta un recurso educativo sobre la optimización de estructuras mediante la teoría de la normalización, un proceso fundamental en el diseño de bases de datos relacionales que permite organizar la información de manera eficiente, reducir la redundancia y fortalecer la integridad de los datos en los sistemas de información: 
      figure(data-aos="zoom-in").mb-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/cOlldUN1f-Y?si=Sy1khQc0delO473k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption.fit___figcaption-video Video. Optimización de estructuras mediante la teoría de la normalización
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Fundamentos de la normalización de datos y el problema de las anomalías de actualización 
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img1.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 La normalización de bases de datos es un proceso de transformación que analiza los esquemas lógicos de las relaciones (tablas) y sus atributos con el propósito de minimizar la redundancia de datos y eliminar los defectos estructurales del diseño. Cuando una base de datos no se encuentra normalizada, la información suele concentrarse en tablas con múltiples dependencias y datos repetidos, situación que favorece la aparición de anomalías transaccionales. Estas anomalías afectan la calidad de la información y el correcto funcionamiento de los procesos organizacionales (Camps Paré et al., 2024). Las principales anomalías que pueden presentarse se resumen: 
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Anomalía de inserción (#[i Insert])
                  p.mb-0 Ocurre cuando no es posible registrar un nuevo dato porque el esquema exige previamente la existencia de otra información relacionada. Por ejemplo, en una tabla que combina datos de centros y cursos, no puede registrarse un nuevo #[b centro de formación] si aún no tiene un curso asociado, debido a que la clave primaria requiere ambos valores.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Anomalía de actualización (#[i Update])
                  p.mb-0 Se presenta cuando un mismo dato está repetido en varias filas y su modificación debe realizarse en cada una de ellas. Si alguna actualización no se completa, la base de datos queda con información inconsistente. Por ejemplo, el cambio del número telefónico de un proveedor puede requerir la modificación de múltiples registros.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Anomalía de borrado (#[i Delete])
                  p.mb-0 Se produce cuando la eliminación de un registro ocasiona también la pérdida de otra información necesaria para la organización. Por ejemplo, si se elimina el último registro que relaciona un #[b aprendiz] con una determinada #[b competencia], también podría perderse la información descriptiva de dicha competencia si esta solo existía en ese registro.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img4.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 Estas anomalías evidencian la necesidad de aplicar la teoría de la normalización como mecanismo para organizar adecuadamente la información, reducir la redundancia y garantizar la consistencia de los datos durante las operaciones de inserción, actualización y eliminación.
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Dependencias funcionales y transitivas 
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img5.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La teoría de la normalización se fundamenta en el análisis de las relaciones existentes entre los atributos de una tabla, conocidas como #[b dependencias funcionales]. Sean #[b X] e #[b Y] dos subconjuntos de atributos pertenecientes a una misma relación #[b R]. Se dice que #[b Y] depende funcionalmente de #[b X] cuando cada valor de #[b X] determina un único valor de #[b Y] dentro de una instancia de la base de datos. En esta relación, #[b X] corresponde al determinante y #[b Y] al atributo dependiente.
      p.mb-5 El análisis de las dependencias funcionales permite identificar problemas de redundancia y establecer las transformaciones necesarias para alcanzar las diferentes formas normales. A continuación, se presentan los principales tipos de dependencias funcionales:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img6.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Dependencia funcional completa").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se presenta cuando un atributo #[b Y] depende de la totalidad de una clave primaria compuesta #[b X], y no de ninguno de sus subconjuntos. Esta condición es necesaria para cumplir la #[b Segunda Forma Normal (2FN)].
            .row(titulo="Dependencia funcional parcial").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Ocurre cuando un atributo descriptivo depende únicamente de una parte de una clave primaria compuesta. Esta situación indica que la tabla contiene información correspondiente a diferentes entidades y genera redundancia de datos.
            .row(titulo="Dependencia funcional transitiva").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se presenta cuando un atributo C depende funcionalmente de un atributo #[b B], y este, a su vez, depende de la clave primaria #[b A]. En este caso, existe una dependencia indirecta entre #[b A] y #[b C] a través de un atributo que no forma parte de la clave. Las dependencias transitivas constituyen una de las principales causas de redundancia en los esquemas relacionales y deben eliminarse para alcanzar la #[b Tercera Forma Normal (3FN)].
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img7.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 El reconocimiento de estos tipos de dependencias constituye la base para aplicar correctamente el proceso de normalización, reducir la redundancia y mejorar la consistencia de las bases de datos relacionales.
      .row.justify-content-center.mb-0
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 1.
            span Ejemplo de aplicación de dependencias funcionales y transitivas (No normalizada)
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t1/img8.png', alt='Diagrama de una tabla de conductores y vehículos con flechas que representan dependencias funcionales y dependencias transitivas entre el código del conductor, la placa del vehículo, la marca y el modelo. ').m-auto
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Primera Forma Normal (1FN): eliminación de grupos repetitivos y atomicidad 
      .caja-2.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p.mb-0 La #[b Primera Forma Normal (1FN)] constituye el primer nivel del proceso de normalización propuesto por #[b Edgar F. Codd]. Para que una tabla relacional cumpla con esta forma normal, todos sus atributos deben contener valores #[b atómicos], es decir, cada celda debe almacenar un único valor correspondiente al dominio del negocio. En consecuencia, no se permite almacenar listas, conjuntos, arreglos ni grupos repetitivos dentro de un mismo atributo ([CEPETEL], 2023).
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t1/img9.png', alt='' style="width: 500px").m-auto
      p.mb-5 La siguiente figura presenta un ejemplo de una tabla que incumple la Primera Forma Normal al contener múltiples valores en una misma celda: 
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 2.
            span Tabla desnormalizada en la 1FN
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t1/img10.png', alt='Tabla de clientes con identificador, nombre y teléfonos, donde algunas celdas contienen varios números telefónicos, resaltando el incumplimiento de la Primera Forma Normal por falta de atomicidad. ').m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t1/img11.png', alt='' style="width: 500px").m-auto
        .col-xl
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img12.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 Cuando, durante el análisis de un esquema, se identifica que un atributo almacena varios datos en una misma celda, como varios correos electrónicos o números telefónicos separados por comas, es necesario transformar la estructura para cumplir con la #[b Primera Forma Normal (1FN)]. Esta transformación consiste en separar cada valor en un registro independiente, de modo que cada celda contenga un único dato.
          .caja-1.color-1(data-aos="fade-left")
            p.mb-0 Como resultado, aumenta el número de filas de la tabla, mientras que se eliminan los grupos repetitivos y se preserva la consistencia de la información. En estos casos, la #[b clave primaria (PK)] suele redefinirse mediante la combinación del identificador original con el atributo que generaba la repetición, con el fin de garantizar la unicidad de cada registro.
      p.mb-0 La aplicación de la #[b Primera Forma Normal (1FN)] constituye el punto de partida del proceso de normalización, ya que facilita la identificación de las dependencias funcionales y prepara la estructura para avanzar hacia la #[b Segunda Forma Normal (2FN)].
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Segunda Forma Normal (2FN): dependencia funcional completa y fragmentación 
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img13.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Una tabla relacional cumple con la Segunda Forma Normal (2FN) cuando satisface dos condiciones fundamentales. En primer lugar, debe encontrarse previamente en la Primera Forma Normal (1FN). En segundo lugar, todos los atributos que no hacen parte de la clave primaria deben depender funcionalmente de la totalidad de dicha clave y no de una parte de ella.
      p.mb-5 La siguiente figura presenta un ejemplo de una tabla que incumple la Segunda Forma Normal debido a la existencia de dependencias funcionales parciales.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 3.
            span Tabla desnormalizada en la 2FN
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t1/img14.png', alt='Diagrama de una tabla de inscripción de estudiantes a cursos con clave primaria compuesta y flechas que indican dependencias funcionales parciales entre el identificador del curso, el nombre del curso y la duración. ').m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t1/img15.png', alt='' style="width: 500px").m-auto
        .col-xl
          p La #[b Segunda Forma Normal (2FN)] se aplica principalmente a las tablas que poseen #[b claves primarias compuestas], es decir, aquellas conformadas por dos o más atributos. Cuando un atributo que no pertenece a la clave primaria depende únicamente de una parte de esta, se presenta una #[b dependencia funcional parcial], lo que genera redundancia de datos y posibles anomalías de actualización.
          .caja-1.color-1(data-aos="fade-left").mb-3
            p.mb-0 Para corregir esta situación, es necesario descomponer la tabla en nuevas relaciones. Este proceso consiste en trasladar el atributo que presenta la dependencia parcial junto con la porción de la clave de la que depende, creando una tabla independiente. De esta manera, se reduce la redundancia, se mejora la organización de la información y se preserva la consistencia de la base de datos.
          p.mb-0 La aplicación de la #[b Segunda Forma Normal (2FN)] prepara la estructura para identificar y eliminar las dependencias transitivas, requisito indispensable para avanzar hacia la #[b Tercera Forma Normal (3FN)].
      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.5 Tercera Forma Normal (3FN): dependencias transitivas y evaluación de la redundancia 
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="fade-right").mb-3
            p.mb-0 La #[b Tercera Forma Normal (3FN)] constituye el siguiente nivel del proceso de normalización y tiene como propósito eliminar las #[b dependencias funcionales transitivas] que aún puedan existir en una tabla. Para que una relación cumpla con esta forma normal, debe encontrarse previamente en la #[b Segunda Forma Normal (2FN)] y garantizar que todos los atributos que no forman parte de la clave primaria dependan únicamente de ella.
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img1.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 En otras palabras, los atributos que no forman parte de la clave primaria deben depender directamente de ella y no de otros atributos descriptivos. Cuando un atributo #[b C] depende funcionalmente de un atributo #[b B], y este, a su vez, depende de la clave primaria #[b A], el atributo #[b C] presenta una dependencia indirecta respecto de la clave primaria a través de #[b B]. Esta situación genera redundancia y puede ocasionar inconsistencias durante las operaciones de actualización.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img16.png', alt='' style="width: 500px").m-auto
      p.mb-5 La siguiente figura presenta un ejemplo de una tabla que incumple la Tercera Forma Normal (3FN) debido a la existencia de dependencias transitivas.
      .row.justify-content-center.mb-0
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 4.
            span Tabla desnormalizada en la 3FN
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t1/img17.png', alt='Diagrama de una tabla de empleados con identificador, departamento, ciudad y código postal, acompañado de flechas que ilustran dependencias transitivas entre el departamento y los datos de ubicación de la oficina. ').m-auto
      Separador
      #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.6 Caso de uso: proceso completo de normalización para #[i ecommerce] 
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img18.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Para comprender la aplicación de las tres primeras formas normales en un contexto real, se presenta el caso de una plataforma de comercio electrónico (ecommerce). Durante la revisión de la base de datos de ventas se identifica una tabla denominada #[b REPORTE_VENTAS_NO_NORMALIZADO], cuya estructura concentra información de diferentes entidades y presenta redundancia de datos, lo que favorece la aparición de anomalías durante las operaciones de inserción, actualización y eliminación. En las siguientes etapas se describe el proceso de normalización que transforma la estructura inicial hasta alcanzar la #[b Tercera Forma Normal (3FN)].
      .row.justify-content-center.mb-5.text-center
        .col-xl-6
          .caja-3(data-aos="zoom-in")  
            h5.mb-0 Estado inicial: tabla REPORTE_VENTAS_NO_NORMALIZADO
      p.mb-5 La tabla inicial reúne la información de pedidos, clientes y productos en una única estructura.
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 1.
                span Esquema de la tabla de ventas no normalizada.
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Esquema
                      th.texto-left Atributos
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold REPORTE_VENTAS_NO_NORMALIZADO
                      td.texto-left id_pedido, fecha_pedido, id_cliente, nombre_cliente, ciudad_cliente, id_producto, nombre_producto, cantidad_solicitada, precio_unitario, telefonos_cliente
          p.mb-5 La siguiente tabla corresponde a la estructura inicial antes del proceso de normalización.
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 2.
            span Reporte de ventas no normalizado
          .tabla-a(data-aos="zoom-in").mb-5
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left id_pedido
                  th.ajuste-border-tabla.texto-left fecha_ pedido
                  th.ajuste-border-tabla.texto-left id_ cliente
                  th.ajuste-border-tabla.texto-left nombre_ cliente
                  th.ajuste-border-tabla.texto-left ciudad_ cliente
                  th.ajuste-border-tabla.texto-left id_ producto
                  th.ajuste-border-tabla.texto-left nombre_ producto
                  th.ajuste-border-tabla.texto-left cantidad_ solicitada
                  th.ajuste-border-tabla.texto-left precio_ unidad
                  th.texto-left telefonos_ cliente
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold 1001
                  td.ajuste-border-tabla.texto-left 05/08/2026
                  td.ajuste-border-tabla.texto-left C001
                  td.ajuste-border-tabla.texto-left Ana Gómez
                  td.ajuste-border-tabla.texto-left Bogotá
                  td.ajuste-border-tabla.texto-left P101
                  td.ajuste-border-tabla.texto-left Teclado
                  td.ajuste-border-tabla.texto-left 2
                  td.ajuste-border-tabla.texto-left 85.000
                  td.texto-left 3001234567, 3019876543
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold 1001
                  td.ajuste-border-tabla.texto-left 05/08/2026
                  td.ajuste-border-tabla.texto-left C001
                  td.ajuste-border-tabla.texto-left Ana Gómez
                  td.ajuste-border-tabla.texto-left Bogotá
                  td.ajuste-border-tabla.texto-left P205
                  td.ajuste-border-tabla.texto-left Mouse
                  td.ajuste-border-tabla.texto-left 1
                  td.ajuste-border-tabla.texto-left 45.000
                  td.texto-left 3001234567, 3019876543
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold 1002
                  td.ajuste-border-tabla.texto-left 06/08/2026
                  td.ajuste-border-tabla.texto-left C002
                  td.ajuste-border-tabla.texto-left Carlos Pérez
                  td.ajuste-border-tabla.texto-left Medellín
                  td.ajuste-border-tabla.texto-left P101
                  td.ajuste-border-tabla.texto-left Teclado
                  td.ajuste-border-tabla.texto-left 1
                  td.ajuste-border-tabla.texto-left 85.000
                  td.texto-left 3105551111
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold 1003
                  td.ajuste-border-tabla.texto-left 06/08/2026
                  td.ajuste-border-tabla.texto-left C003
                  td.ajuste-border-tabla.texto-left Laura Martínez
                  td.ajuste-border-tabla.texto-left Cali
                  td.ajuste-border-tabla.texto-left P330
                  td.ajuste-border-tabla.texto-left Monitor
                  td.ajuste-border-tabla.texto-left 2
                  td.ajuste-border-tabla.texto-left 720.000
                  td.texto-left 3152223333, 3154445555
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold 1004
                  td.ajuste-border-tabla.texto-left 07/08/2026
                  td.ajuste-border-tabla.texto-left C002
                  td.ajuste-border-tabla.texto-left Carlos Pérez
                  td.ajuste-border-tabla.texto-left Medellín
                  td.ajuste-border-tabla.texto-left P410
                  td.ajuste-border-tabla.texto-left Impresora
                  td.ajuste-border-tabla.texto-left 1
                  td.ajuste-border-tabla.texto-left 560.000
                  td.texto-left 3105551111
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img19.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p El principal problema de esta estructura se encuentra en el atributo #[b telefonos_cliente], que almacena varios números telefónicos en un mismo campo separados por barras. Esta situación incumple el principio de atomicidad exigido por la #[b Primera Forma Normal (1FN)].
      .caja-4.mb-5(data-aos="fade-right")   
        h4.mb-0 Paso 1. Aplicación de la Primera Forma Normal (1FN)
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img20.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Para cumplir con la #[b Primera Forma Normal (1FN)], cada número telefónico se registra en una fila independiente, garantizando que cada atributo almacene un único valor. Como resultado, la clave primaria se redefine mediante la combinación de los atributos #[b id_pedido], #[b id_producto] y #[b telefono_cliente]. La estructura obtenida se resume en la siguiente tabla:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 3.
                span Estructura de la tabla VENTAS_1FN
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Esquema en 1FN
                      th.texto-left Atributos
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold VENTAS_1FN
                      td.texto-left id_pedido, id_producto, telefono_cliente, fecha_pedido, id_cliente, nombre_cliente, ciudad_cliente, nombre_producto, cantidad_solicitada, precio_unitario
          p.mb-5 La siguiente tabla presenta la estructura obtenida después de aplicar la #[b Primera Forma Normal (1FN)].
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 4.
            span Tabla VENTAS en 1FN
          .tabla-a(data-aos="zoom-in").mb-5
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left id_ pedido (PK)
                  th.ajuste-border-tabla.texto-left id_ producto (PK)
                  th.ajuste-border-tabla.texto-left telefono_ cliente
                  th.ajuste-border-tabla.texto-left fecha_ pedido
                  th.ajuste-border-tabla.texto-left id_ cliente
                  th.ajuste-border-tabla.texto-left nom_ cliente
                  th.ajuste-border-tabla.texto-left ciudad_ cliente
                  th.ajuste-border-tabla.texto-left nom_ producto
                  th.ajuste-border-tabla.texto-left cantidad_ solicitada
                  th.texto-left precio_ unidad
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold P001
                  td.ajuste-border-tabla.texto-left PR101
                  td.ajuste-border-tabla.texto-left 3001234567, 3019876543
                  td.ajuste-border-tabla.texto-left 05/08/2026
                  td.ajuste-border-tabla.texto-left C001
                  td.ajuste-border-tabla.texto-left Ana Gómez
                  td.ajuste-border-tabla.texto-left Bogotá
                  td.ajuste-border-tabla.texto-left Teclado Mecánico
                  td.ajuste-border-tabla.texto-left 2
                  td.texto-left 85.000
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold P001
                  td.ajuste-border-tabla.texto-left PR205
                  td.ajuste-border-tabla.texto-left 3001234567, 3019876543
                  td.ajuste-border-tabla.texto-left 05/08/2026
                  td.ajuste-border-tabla.texto-left C001
                  td.ajuste-border-tabla.texto-left Ana Gómez
                  td.ajuste-border-tabla.texto-left Bogotá
                  td.ajuste-border-tabla.texto-left Mouse Inalámbrico
                  td.ajuste-border-tabla.texto-left 1
                  td.texto-left 45.000
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold P002
                  td.ajuste-border-tabla.texto-left PR101
                  td.ajuste-border-tabla.texto-left 3105551111
                  td.ajuste-border-tabla.texto-left 06/08/2026
                  td.ajuste-border-tabla.texto-left C002
                  td.ajuste-border-tabla.texto-left Carlos Pérez
                  td.ajuste-border-tabla.texto-left Medellín
                  td.ajuste-border-tabla.texto-left Teclado Mecánico
                  td.ajuste-border-tabla.texto-left 1
                  td.texto-left 85.000
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold P003
                  td.ajuste-border-tabla.texto-left PR330
                  td.ajuste-border-tabla.texto-left 3152223333, 3154445555
                  td.ajuste-border-tabla.texto-left 06/08/2026
                  td.ajuste-border-tabla.texto-left C003
                  td.ajuste-border-tabla.texto-left Laura Martínez
                  td.ajuste-border-tabla.texto-left Cali
                  td.ajuste-border-tabla.texto-left Monitor 24"
                  td.ajuste-border-tabla.texto-left 2
                  td.texto-left 720.000
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold P003
                  td.ajuste-border-tabla.texto-left PR205
                  td.ajuste-border-tabla.texto-left 3152223333, 3154445555
                  td.ajuste-border-tabla.texto-left 06/08/2026
                  td.ajuste-border-tabla.texto-left C003
                  td.ajuste-border-tabla.texto-left Laura Martínez
                  td.ajuste-border-tabla.texto-left Cali
                  td.ajuste-border-tabla.texto-left Mouse Inalámbrico
                  td.ajuste-border-tabla.texto-left 1
                  td.texto-left 45.000
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold P004
                  td.ajuste-border-tabla.texto-left PR410
                  td.ajuste-border-tabla.texto-left 3208889999
                  td.ajuste-border-tabla.texto-left 07/08/2026
                  td.ajuste-border-tabla.texto-left C004
                  td.ajuste-border-tabla.texto-left Miguel Torres
                  td.ajuste-border-tabla.texto-left Barranquilla
                  td.ajuste-border-tabla.texto-left Impresora Láser
                  td.ajuste-border-tabla.texto-left 1
                  td.texto-left 560.000
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-1(data-aos="fade-right").mb-3
            p Al analizar esta nueva estructura se identifican las siguientes dependencias funcionales parciales:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-database
                | #[b id_producto → (nombre_producto, precio_unitario). ]
              li.mb-0
                span.fa-li
                  i.fas.fa-database
                | #[b id_pedido → (fecha_pedido, id_cliente, nombre_cliente, ciudad_cliente).]
          .caja-5(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/t1/img12.svg', alt='' style="width: 85px").m-auto
              .col-xl.col-md-10
                p.mb-0 Estas dependencias indican que algunos atributos dependen únicamente de una parte de la clave primaria compuesta, por lo que la tabla aún no cumple con la #[b Segunda Forma Normal (2FN)].
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img21.png', alt='' style="width: 500px").m-auto
      .caja-4.mb-5(data-aos="fade-right")   
        h4.mb-0 Paso 2. Aplicación de la Segunda Forma Normal (2FN)
      p.mb-5 Para eliminar las dependencias funcionales parciales, la información se distribuye en nuevas tablas, cada una correspondiente a una entidad específica.
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 5.
                span Esquema relacional normalizado
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Tabla
                      th.texto-left Esquema
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold PRODUCTO
                      td.texto-left id_producto [PK], nombre_producto, precio_unitario
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold PEDIDO
                      td.texto-left id_pedido [PK], fecha_pedido, id_cliente, nombre_cliente, ciudad_cliente
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold DETALLE_PEDIDO
                      td.texto-left id_pedido [PK, FK1], id_producto [PK, FK2], cantidad_solicitada
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold TEL_CLIENTE
                      td.texto-left id_cliente [PK, FK], telefono [PK]
          p.mb-5 La tabla #[b TEL_CLIENTE] permite almacenar cada número telefónico de forma independiente, eliminando el atributo multivaluado de la estructura original. La siguiente figura presenta las tablas obtenidas después de aplicar la #[b Segunda Forma Normal (2FN).]
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t1/img22.png', alt='' style="width: 500px").m-auto
            .col-xl
              .row.align-items-center.mb-3
                .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/t1/img7.svg', alt='' style="width: 80px").m-auto
                .col-xl
                  p.mb-0 Aunque esta reorganización elimina las dependencias parciales, aún persiste una dependencia transitiva en la tabla #[b PEDIDO]:
              .caja-1(data-aos="fade-left").mb-3.text-center
                h5.mb-0 id_pedido → id_cliente → (nombre_cliente, ciudad_cliente)
              p.mb-0 En este caso, los datos del cliente dependen de #[b id_cliente] y no directamente del número de pedido, por lo que la estructura todavía incumple la #[b Tercera Forma Normal (3FN)].
      .caja-4.mb-5(data-aos="fade-right")   
        h4.mb-0 Paso 3. Aplicación de la Tercera Forma Normal (3FN)
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img7.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Para eliminar la dependencia transitiva, la información del cliente se separa en una tabla independiente. De esta manera, cada entidad almacena únicamente los atributos que dependen directamente de su clave primaria. El esquema final queda conformado por las siguientes tablas.
      .row.justify-content-center.mb-5
        .col-xl-8
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 6.
            span Esquema relacional en tercera forma normal
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Tabla
                  th.texto-left Esquema
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold CLIENTE
                  td.texto-left id_cliente [PK], nombre_cliente, ciudad_cliente
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold PEDIDO
                  td.texto-left id_pedido [PK], fecha_pedido, id_cliente [FK]
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold PRODUCTO
                  td.texto-left id_producto [PK], nombre_producto, precio_unitario
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold DETALLE_PEDIDO
                  td.texto-left id_pedido [PK, FK1], id_producto [PK, FK2], cantidad_solicitada
      .row.justify-content-center.mb-5
        .col-xl-10
          .caja-6.mb-5(data-aos="zoom-in")
            .row.justify-content-center.mb-5.text-center
              .col-xl-10
                .caja-3.color-2(data-aos="zoom-in")  
                  p.mb-0 Las siguientes tablas corresponde al esquema resultante después de aplicar la #[b Tercera Forma Normal (3FN)].
            .row.justify-content-center.mb-5
              .col-xl-8
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Tabla 7.
                  span Producto
                .tabla-a(data-aos="zoom-in")
                  table
                    thead
                      tr
                        th.ajuste-border-tabla.texto-left id_producto (PK)
                        th.ajuste-border-tabla.texto-left nom_producto
                        th.texto-left precio_unidad
                    tbody
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold PR101
                        td.ajuste-border-tabla.texto-left Teclado Mecánico
                        td.texto-left 85.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold PR205
                        td.ajuste-border-tabla.texto-left Mouse Inalámbrico
                        td.texto-left 45.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold PR330
                        td.ajuste-border-tabla.texto-left Monitor 24"
                        td.texto-left 720.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold PR410
                        td.ajuste-border-tabla.texto-left Impresora Láser
                        td.texto-left 560.000
            .row.justify-content-center.mb-5
              .col-xl-11
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Tabla 8.
                  span Pedido
                .tabla-a(data-aos="zoom-in")
                  table
                    thead
                      tr
                        th.ajuste-border-tabla.texto-left id_pedido (PK)
                        th.ajuste-border-tabla.texto-left fecha_pedido
                        th.ajuste-border-tabla.texto-left id_cliente
                        th.ajuste-border-tabla.texto-left nom_cliente
                        th.texto-left ciudad_cliente
                    tbody
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold P001
                        td.ajuste-border-tabla.texto-left 05/08/2026
                        td.ajuste-border-tabla.texto-left C001
                        td.ajuste-border-tabla.texto-left Ana Gómez
                        td.texto-left Bogotá
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold P002
                        td.ajuste-border-tabla.texto-left 06/08/2026
                        td.ajuste-border-tabla.texto-left C002
                        td.ajuste-border-tabla.texto-left Carlos Pérez
                        td.texto-left Medellín
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold P003
                        td.ajuste-border-tabla.texto-left 06/08/2026
                        td.ajuste-border-tabla.texto-left C003
                        td.ajuste-border-tabla.texto-left Laura Martínez
                        td.texto-left Cali
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold P004
                        td.ajuste-border-tabla.texto-left 07/08/2026
                        td.ajuste-border-tabla.texto-left C004
                        td.ajuste-border-tabla.texto-left Miguel Torres
                        td.texto-left Barranquilla
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold P005
                        td.ajuste-border-tabla.texto-left 08/08/2026
                        td.ajuste-border-tabla.texto-left C001
                        td.ajuste-border-tabla.texto-left Ana Gómez
                        td.texto-left Bogotá
            .row.justify-content-center.mb-5
              .col-xl-8
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Tabla 9.
                  span Detalle_Pedido
                .tabla-a(data-aos="zoom-in")
                  table
                    thead
                      tr
                        th.ajuste-border-tabla.texto-left id_pedido (PK, FK1)
                        th.ajuste-border-tabla.texto-left id_producto (PK, FK2)
                        th.texto-left cantidad_solicitada
                    tbody
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold P001
                        td.ajuste-border-tabla.texto-left PR101
                        td.texto-left 2
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold P001
                        td.ajuste-border-tabla.texto-left PR205
                        td.texto-left 1
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold P002
                        td.ajuste-border-tabla.texto-left PR101
                        td.texto-left 1
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold P003
                        td.ajuste-border-tabla.texto-left PR330
                        td.texto-left 2
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold P003
                        td.ajuste-border-tabla.texto-left PR205
                        td.texto-left 1
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold P004
                        td.ajuste-border-tabla.texto-left PR410
                        td.texto-left 1
            .row.justify-content-center.mb-0
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Tabla 10.
                  span Cliente_Telefono
                .tabla-a(data-aos="zoom-in")
                  table
                    thead
                      tr
                        th.ajuste-border-tabla.texto-left id_cliente (PK, FK)
                        th.texto-left telefono (PK)
                    tbody
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold C001
                        td.texto-left 3001234567
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold C001
                        td.texto-left 3019876543
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold C002
                        td.texto-left 3105551111
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold C003
                        td.texto-left 3152223333
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold C003
                        td.texto-left 3154445555
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold C004
                        td.texto-left 3208889999
      .caja-2.mb-0(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p.mb-0 Con esta organización, cada dato se almacena en un único lugar y las relaciones entre las tablas se mantienen mediante claves primarias (#[b PK]) y claves foráneas (#[b FK]). Por ejemplo, si cambia la ciudad de un cliente, la actualización se realiza únicamente en la tabla #[b CLIENTE], evitando la duplicación de información y reduciendo el riesgo de inconsistencias. Como resultado, la base de datos mejora su integridad, facilita el mantenimiento y optimiza el procesamiento de las consultas.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t1/img23.png', alt='' style="width: 500px").m-auto

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
