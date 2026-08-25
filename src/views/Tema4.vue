<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Consolidación documental e informes técnicos de diseño de bases de datos
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p Una vez finalizado el diseño de la base de datos, es necesario consolidar la documentación técnica que respalda el proyecto. Esta documentación facilita la implementación, el mantenimiento y la evolución del sistema, además de servir como medio de comunicación entre los diferentes integrantes del equipo de desarrollo.
          .caja-1(data-aos="fade-right")
            p.mb-0 Uno de los documentos más importantes de esta etapa es el #[b Informe final de diseño de la base de datos], en el que se reúnen los principales artefactos generados durante el proceso de análisis y diseño. Su elaboración permite documentar la estructura de la base de datos y dejar evidencia de las decisiones técnicas adoptadas.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img1.png', alt='' style="width: 500px").m-auto
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img2.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p En esta unidad se estudian la estructura y las características que debe cumplir un informe técnico, así como los principales estándares relacionados con la documentación de proyectos de #[i software]. También se aborda la integración de los diferentes artefactos para facilitar la transferencia de la solución al entorno de producción. Al finalizar la unidad, el aprendiz estará en capacidad de elaborar un informe técnico que documente el diseño de una base de datos y facilite su implementación, mantenimiento y administración.
      Separador
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 El informe de diseño en el ciclo de vida del #[i software]: conceptos, estructura y características de calidad
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img1.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Dentro del ciclo de vida del desarrollo de #[i software] #[b (#[i Software Development Life Cycle] - SDLC)], el #[b Informe de Diseño de Base de Datos] reúne la información necesaria para describir la arquitectura lógica y física del sistema. Este documento facilita la comprensión del modelo por parte de analistas, desarrolladores y administradores de bases de datos #[b (DBA)], además de servir como referencia durante las fases de implementación y mantenimiento. Para cumplir su propósito, el informe debe reunir las siguientes características: 
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img3.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Precisión").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La información documentada debe corresponder con la implementación de la base de datos, incluyendo tablas, atributos, tipos de datos y restricciones de integridad.
            .row(titulo="Completitud y trazabilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Debe incorporar los elementos necesarios para relacionar los requisitos del sistema con el diseño de la base de datos, facilitando el seguimiento de cada componente durante el desarrollo.
            .row(titulo="Organización").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Debe presentar una estructura clara que incluya, entre otros elementos, la introducción, los objetivos, los modelos conceptual y lógico, el diccionario de datos y las políticas de respaldo y seguridad de la información.
      p.mb-0 Un informe elaborado con estas características facilita la comprensión del diseño y constituye un referente técnico durante todo el ciclo de vida de la base de datos.
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Normatividad vigente y estándares internacionales de documentación técnica de TI
      p.mb-5 La documentación técnica de proyectos de #[i software] se apoya en estándares internacionales que orientan la organización de los entregables y la gestión de los procesos de desarrollo. A continuación, se presentan algunos de los estándares más utilizados:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-7.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t4/img4.jpg', alt="" ).m-auto
              h4.text-center IEEE 830 / ISO/IEC/IEEE 29148
              .caja-7_p
                p.mb-0 Proporciona lineamientos para la especificación y documentación de requisitos de #[i software], así como para la trazabilidad entre los requisitos del negocio y los componentes del sistema (Universidad de Cantabria, ISTR - Ingeniería #[i Software] y Tiempo Real, 2007).
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-7.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t4/img5.jpg', alt="" ).m-auto
              h4.text-center ISO/IEC 12207
              .caja-7_p
                p.mb-0 Define los procesos, actividades y tareas que hacen parte del ciclo de vida del #[i software], incluyendo la documentación requerida durante las fases de análisis, diseño, desarrollo y mantenimiento (Moncayo Gutiérrez, Alarcón Josué, Suárez Colín, Barrientos e Isaí, 2021).
      p.mb-0 La aplicación de estos estándares favorece la organización de la documentación y facilita la comunicación entre los diferentes actores que participan en el desarrollo del #[i software].
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Integración de artefactos para la transferencia al entorno de producción
      p.mb-5 Antes de implementar una base de datos en un entorno de producción, es necesario verificar que todos los artefactos elaborados durante el proyecto mantengan coherencia entre sí. Esta integración facilita la transferencia de la solución hacia los equipos responsables del desarrollo, la administración y el mantenimiento del sistema. El proceso de integración relaciona los principales documentos generados durante el diseño.
      .bg-carrusel
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 5.
                span Secuencia de integración de los artefactos del proyecto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/t4/img6.png', alt='Diagrama de flujo con cinco etapas del proceso de diseño de una base de datos relacional: cronograma base, modelo conceptual (MER/MERE), modelo lógico relacional (3FN), diccionario de datos y script DDL, conectadas mediante flechas en secuencia. ').m-auto
          p.mb-5 Cada uno de estos elementos cumple una función específica dentro del proceso:
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t4/img7.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img8.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Cronograma base
                  p.mb-0.text-center Organiza las actividades y etapas del proyecto.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img9.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Modelo conceptual (MER/MERE)
                  p.mb-0.text-center Representa las entidades, atributos y relaciones identificadas durante el análisis del negocio.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img10.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Modelo lógico relacional (3FN)
                  p.mb-0.text-center Traduce el modelo conceptual en una estructura optimizada mediante el proceso de normalización.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img11.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Diccionario de datos
                  p.mb-0.text-center Documenta las características técnicas de cada tabla y atributo de la base de datos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img12.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Script DDL
                  p.mb-0.text-center Contiene las instrucciones SQL necesarias para crear la estructura física de la base de datos en el SGBD.
          p.mb-0 La integración de estos artefactos permite mantener la trazabilidad del proyecto desde la identificación de los requisitos hasta la implementación física de la base de datos, además de facilitar las actividades de mantenimiento y futuras actualizaciones del sistema.

</template>

<script>
export default {
  name: 'Tema4',
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
