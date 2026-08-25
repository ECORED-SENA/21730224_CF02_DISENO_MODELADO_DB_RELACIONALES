<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/intro/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Una vez estructurados los modelos lógicos de una base de datos relacional, el proceso de desarrollo de software exige someterlos a una fase rigurosa de validación y optimización técnica. Aunque un diseño pueda parecer correcto desde el punto de vista estructural, es posible que presente inconsistencias que generen redundancia de datos, anomalías de actualización o problemas de integridad durante la operación del sistema. En este material de formación, el aprendiz desarrollará las competencias necesarias para analizar, depurar y validar la consistencia del modelo lógico, garantizando una base de datos robusta, eficiente y alineada con las buenas prácticas del diseño relacional.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt='' style="width: 500px").m-auto
        .col-xl
          p A lo largo del proceso formativo, el aprendiz aplicará los principios de la normalización mediante las tres primeras formas normales (1FN, 2FN y 3FN), así como las reglas de integridad de dominio, de entidad y referencial, fundamentales para preservar la calidad y confiabilidad de la información almacenada. Estos conocimientos permitirán identificar y corregir posibles deficiencias del modelo antes de su implementación, fortaleciendo la calidad técnica del diseño de la base de datos.
          .caja-1(data-aos="fade-left")
            p.mb-0 Como resultado del proceso, el aprendiz elaborará un diccionario de datos que documentará de manera estructurada las tablas, atributos, tipos de datos, restricciones y relaciones del modelo. Finalmente, consolidará toda la documentación técnica en un informe final de diseño, elaborado conforme a los lineamientos institucionales, generando un entregable profesional que facilite la implementación, el mantenimiento y la transferencia de la base de datos a los entornos de producción.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
