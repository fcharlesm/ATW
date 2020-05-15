<?php
/*
	Template Name: Index
 */
get_header(); ?>

</div>

	<section class="slider">
		<?php get_template_part( 'partes/index', 'slider' ); ?>
	</section> <!-- Slider  -->

	<div class="wrapper">
        <section class="tours clear">     
            <?php get_template_part( 'partes/index', 'tours' ); ?>
        </section> <!-- Tours -->

        <section class="consejos-testimoniales clear">
            <?php get_template_part( 'partes/index', 'consejos' ); ?>
            <?php get_template_part('partes/index', 'testimoniales'); ?>
        </section> <!-- Consejos-Testimoniales -->

<?php get_footer(); ?>
