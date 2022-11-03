<?php

/*
  Plugin Name: Vative Homepage Shortcode
  Description: A simple shortcode for a design integrated in the homepage from the old site.
  Version: 3.5.11
  Author: Gegejosper Ceniza
  Author URI: http://azway.ph
 */
// Silence is golden.




class FooterPlugin
{
   public function __construct()
   {
      // hook into wp_footer
      add_action('wp_footer', [$this, 'addFooter']);
      add_shortcode( 'hm_sc', [$this, 'homepage_func']);
      add_action( 'wp_enqueue_scripts', [$this, 'hc_style_script']);
   }
   
    public function homepage_func( $atts ) {
        // New Design
        if(isset($atts['content'])){
            return $atts['content'];
        }
        else {
            return null;
        }
        
    }
    public function addFooter(){
        echo '
            <div class="quick-contact area-limit-outside area-limit is-affect is-affect-outside">
            <div class="quick-contact__body js-clickOutside">
            <h5 class="quick-contact__title js-show">CONTACT US</h5>
            <div class="quick-contact__wrap ">
                <div class="quick-contact__form">
                <h2>Get in touch</h2>
                <span class="quick-contact__close js-show">
                    <!-- <span class="quick-contact__row-left"></span> -->
                    <span>X</span>
                </span>
                <div class="quick-contact__form--content">
                '.do_shortcode('[elementor-template id="5799"]' ).'
                </div>
            </div>
            </div>
            </div>
            
            <div class="lean-six-sigma-shortcuts-tab">
            <div class="shortcut-tab-items">
            <div class="shortcut-tab-item">
                <span class="shortcut-tab-pill shortcut-tab-pill--yellow"></span><a class="shortcut-tab-item-label" href="https://vative.com.au/programs/yellow-belt/">Yellow Belt</a>
            </div>
            <div class="shortcut-tab-item">
                <span class="shortcut-tab-pill shortcut-tab-pill--green"></span><a class="shortcut-tab-item-label" href="https://vative.com.au/programs/green-belt/">Green Belt</a>
            </div>
            <div class="shortcut-tab-item">
                <span class="shortcut-tab-pill shortcut-tab-pill--black"></span><a class="shortcut-tab-item-label" href="https://vative.com.au/programs/black-belt/">Black Belt</a>
            </div>
            <div class="shortcut-tab-item">
                <span class="shortcut-tab-pill shortcut-tab-pill--blue"></span><a class="shortcut-tab-item-label" href="https://vative.com.au/programs/lean-practitioner/">Lean Practitioner</a>
            </div>
            </div>
            <div class="shortcut-tab-label">Book Now</div>
            </div>

            <script type="text/javascript" id="contact-form-7-js-extra">
            /* <![CDATA[ */
            var wpcf7 = {"api":{"root":"https:\/\/vative.com.au\/wp-json\/","namespace":"contact-form-7\/v1"}};
            /* ]]> */
            </script>
        ';
    }
    public function hc_style_script() {
        wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js');
        wp_enqueue_script( 'jquery');
        wp_enqueue_style( 'hc-style', plugin_dir_url(__FILE__). 'includes/styles.css', array());
        wp_enqueue_style( 'hc-custom-style', plugin_dir_url(__FILE__). 'includes/custom.css', array());
        wp_enqueue_style( 'button-style', plugin_dir_url(__FILE__). 'includes/button-style.css', array());
        wp_enqueue_script( 'custom-js', plugins_url( '/includes/custom.js' , __FILE__ ), array( 'jquery' ), true );
        wp_enqueue_script('quick_contact-js', plugins_url( '/includes/quick_contact.js' , __FILE__ ), array(), false, true);
    }
}

// initialize the plugin when everything is loaded
add_action('plugins_loaded', function () {
   new FooterPlugin();
});



