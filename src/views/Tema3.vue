<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Aseguramiento de la calidad del diseño mediante técnicas de evaluación
      p.mb-3 El diseño de una base de datos relacional no finaliza con la aplicación de las formas normales ni con la elaboración del diccionario de datos. Antes de implementar el modelo en un #[b Sistema Gestor de Bases de Datos (SGBD)], es necesario verificar que la estructura cumpla con los requisitos del negocio y que no presente inconsistencias que puedan afectar su funcionamiento.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img1.png', alt='' style="width: 500px").m-auto
        .col-xl
          .caja-1.color-1(data-aos="fade-left").mb-3
            p.mb-0 Para ello, se aplican técnicas de evaluación que permiten revisar el diseño antes de desarrollar la base de datos física. Estas actividades facilitan la detección temprana de errores, reducen los costos de corrección y contribuyen a obtener modelos más estables y fáciles de mantener (Casas Roma, 2013).
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img12.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 En esta unidad se estudian las metodologías de revisión técnica e inspección por pares, así como las métricas de cohesión y acoplamiento aplicadas a esquemas relacionales. Estas herramientas permiten evaluar la calidad del diseño y verificar que la estructura responda adecuadamente a las necesidades de la organización.
      Separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Técnicas de evaluación estática de modelos: metodologías de inspección y revisión técnica de artefactos
      .caja-2.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p.mb-0 Las #[b técnicas de evaluación estática] permiten revisar la calidad de los artefactos de diseño sin necesidad de implementar la base de datos. Entre estos artefactos se encuentran los diagramas #[b MER/MERE], los modelos relacionales y los diccionarios de datos. La principal ventaja de estas técnicas consiste en identificar errores durante las primeras etapas del desarrollo, cuando su corrección resulta menos compleja y menos costosa que una vez implementado el sistema.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img2.png', alt='' style="width: 500px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img20.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Una de las metodologías más utilizadas es la #[b Revisión Técnica Formal (RTF)], en la que un grupo de especialistas analiza el diseño mediante criterios previamente definidos. En los procesos de formación, esta metodología suele desarrollarse mediante #[b inspecciones por pares], donde cada participante desempeña una función específica.
      .row.align-items-center.mb-5
        .col-xl-4(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/t3/img3.png', alt='' style="max-width: 400px").m-auto
        .col-xl-8(data-aos="fade-left")
          SlyderF(columnas="col-lg-6 col-xl-6")
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t3/img4.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Moderador
              p.mb-0.text-center Coordina la revisión, organiza la sesión y garantiza el cumplimiento de la metodología.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t3/img5.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Diseñador o autor
              p.mb-0.text-center Presenta el modelo de datos y explica las decisiones adoptadas durante el diseño.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t3/img6.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Inspector o revisor
              p.mb-0.text-center Examina el modelo para identificar inconsistencias, errores de diseño o incumplimiento de las reglas de negocio y de las formas normales.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t3/img7.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Registrador (#[i scribe])
              p.mb-0.text-center Documenta los hallazgos, observaciones y acciones de mejora identificadas durante la revisión.
      p.mb-0 La aplicación de estas revisiones favorece la detección temprana de inconsistencias y contribuye a mejorar la calidad del diseño antes de su implementación.
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Buenas prácticas en ingeniería de bases de datos: métricas de acoplamiento y cohesión aplicadas a esquemas de datos
      p.mb-5 La evaluación de un modelo relacional también puede realizarse mediante métricas que permiten analizar su organización y grado de dependencia entre las tablas. Entre las más utilizadas se encuentran la #[b cohesión] y el #[b acoplamiento]. A continuación, se describen estas métricas y su aplicación en el diseño de bases de datos:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-7.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img8.jpg', alt="" ).m-auto
              h4.text-center Alta cohesión
              .caja-7_p
                p.mb-0 Indica que los atributos de una tabla representan una única entidad del negocio y mantienen una relación directa entre sí. Una alta cohesión facilita el mantenimiento del modelo y reduce la redundancia de la información.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-7.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img9.jpg', alt="" ).m-auto
              h4.text-center Bajo acoplamiento
              .caja-7_p
                p.mb-0 Indica que las relaciones entre las tablas se limitan a las necesarias para cumplir las reglas del negocio. Un bajo acoplamiento facilita la evolución del sistema y reduce el impacto de los cambios sobre otras estructuras relacionadas.
      p.mb-5 Un diseño con alta cohesión y bajo acoplamiento favorece la modularidad del modelo, simplifica el mantenimiento y mejora el desempeño general de la base de datos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img13.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Caso de uso: matriz de trazabilidad y auditoría estática para #[i e-commerce]
      p.mb-5 Como aplicación práctica, se realiza una revisión técnica del modelo relacional del proyecto <i>e-commerce</i>, previamente normalizado hasta la #[b Tercera Forma Normal (3FN)]. Durante la revisión, el aprendiz participa junto con el instructor y el equipo de aseguramiento de la calidad #[b (QA)] en la verificación de los requisitos del sistema. Como resultado, se elabora una matriz de trazabilidad que relaciona cada requerimiento con la estructura de la base de datos y los mecanismos de validación implementados.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 14.
            span Matriz de trazabilidad de requisitos y consistencia relacional.
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left ID
                  th.ajuste-border-tabla.texto-left Requisito
                  th.ajuste-border-tabla.texto-left Tabla
                  th.ajuste-border-tabla.texto-left Atributos o restricciones
                  th.ajuste-border-tabla.texto-left Mecanismo de validación
                  th.texto-left Resultado
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold REQ-01
                  td.ajuste-border-tabla.texto-left Gestionar clientes con información de ciudad.
                  td.ajuste-border-tabla.texto-left CLIENTE
                  td.ajuste-border-tabla.texto-left id_cliente (PK), nombre_cliente, ciudad_cliente
                  td.ajuste-border-tabla.texto-left PRIMARY KEY y NOT NULL
                  td.texto-left Cumple. La tabla representa una única entidad del negocio.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold REQ-02
                  td.ajuste-border-tabla.texto-left Asociar cada pedido a un cliente registrado.
                  td.ajuste-border-tabla.texto-left PEDIDO
                  td.ajuste-border-tabla.texto-left id_pedido (PK), fecha_pedido, id_cliente (FK)
                  td.ajuste-border-tabla.texto-left Clave foránea con #[b ON DELETE RESTRICT]
                  td.texto-left Cumple. Se garantiza la integridad referencial.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold REQ-03
                  td.ajuste-border-tabla.texto-left Registrar los productos incluidos en cada pedido.
                  td.ajuste-border-tabla.texto-left DETALLE_PEDIDO
                  td.ajuste-border-tabla.texto-left id_pedido (PK, FK1), id_producto (PK, FK2), cantidad_solicitada
                  td.ajuste-border-tabla.texto-left Clave primaria compuesta y #[b CHECK (cantidad_solicitada > 0)]
                  td.texto-left Cumple. Se garantiza la integridad del dominio.
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img10.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La matriz de trazabilidad permite verificar que cada requisito del negocio tenga correspondencia con los elementos del modelo de datos y con las restricciones implementadas en el SGBD. Asimismo, facilita las actividades de revisión, mantenimiento y evolución de la base de datos al documentar la relación entre los requerimientos y la solución técnica adoptada.

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
