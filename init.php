<?php

/*
  Plugin Name: Vative Homepage Shortcode
  Description: A simple shortcode for a design integrated in the homepage from the old site.
  Version: 2.0.1
  Author: Gegejosper Ceniza
  Author URI: http://azway.ph
 */
// Silence is golden.

add_shortcode( 'hm_sc', 'homepage_func');
function homepage_func( $atts ) {

    // $output = '
    //     <div class="box-interactive">
    //     <div class="box-interactive__body">
    //     <div class="box-interactive__item is-interactive is-show">
    //         <div class="image-block area-limit">
    //         <div class="container">
    //             <h2 class="image-block__title section-title text--squash text--center">Vative 5 Step Continuous Improvement</h2>      
    //             <h4 class="image-block__text text--center hidden-on-desktop">STRATEGIC DEPLOYMENT</h4>      
    //             <h4 class="image-block__text text--center hidden-from-desktop">STRATEGIC DEPLOYMENT</h4>    
    //             <div class="image-block__wrap">
    //             <div class="image-block__list text--squash">
    //                 <div class="image-block__item bg--brownish-grey">
    //                 <h5 class="image-block__item__title">Continuous Improvement Culture</h5>
    //                 </div>
    //                 <div class="image-block__item bg--squash content-left js-add-content">
    //                 <div class="image-block__content js-get-content" data-position="leftside">
    //                     <h3>Strategy &amp; Alignment</h3>
    //                     <p><strong>Executive Alignment</strong><br>
    //                     Key leadership engagement to align continuous improvement values and behaviours that drives organisational culture towards a true north.</p>
    //                     <p><strong>Strategic Planning</strong><br>
    //                     Known as Hoshin Kanri, cascades organisational strategy into tactical actions to eliminate wasted efforts through inconsistent direction and poor communication.</p>
    //                     <p><strong>Communication Plan</strong><br>
    //                     A standardised communication plan to incorporate components of the organisation’s Continuous Improvement strategy and vision to ensure all levels of an organisation are aligned and informed of the journey.</p>
    //                 </div>
    //                 <a href="https://vative.com.au/services/strategy-and-alignment/">            
    //                     <div class="image-block__icon icon-leadershipculture">icon</div>
    //                 </a>            
    //                 <h5 class="image-block__item__title text--bold"><a href="https://vative.com.au/services/strategy-and-alignment/">1. Strategy &amp; Alignment</a></h5>
    //                 </div>
    //                 <div class="image-block__item bg--squash content-left js-add-content">
    //                 <div class="image-block__content js-get-content" data-position="">
    //                     <h3>Current &amp; Desired Future State</h3>
    //                     <p><strong>Value Stream Mapping<br>
    //                     </strong>Detailed analysis on the current state of the organisation’s product/service value stream in order to detect wastes and improve the flow of processes to achieve a desired future state.</p>
    //                     <p><strong>Kaizen Cost Benefit Analysis</strong><br>
    //                     Improvements to the value stream prioritised based on a cost, benefit and difficulty whereby the pareto principle arranges focus on projects delivering the greatest impact.</p>
    //                     <p><strong>Lean Business Diagnostic</strong><br>
    //                     A Lean business health check outlining the maturity against six key pillars of continuous improvement:&nbsp; Process Orientation, Standardisation, Perfect Quality, Transparency, Flexibility and Pull Systems.</p>
    //                 </div>
    //                 <a href="https://vative.com.au/services/current-and-desired-future-state/">            
    //                     <div class="image-block__icon icon-analysisalignment">icon</div>
    //                 </a>            
    //                 <h5 class="image-block__item__title text--bold">
    //                     <a href="https://vative.com.au/services/current-and-desired-future-state/">2. Current &amp; Desired Future State</a></h5>
    //                 </div>
    //                 <div class="image-block__item bg--squash content-left js-add-content">
    //                 <div class="image-block__content js-get-content" data-position="">
    //                     <h3>Capability &amp; Development</h3>
    //                     <p><strong>Nationally Accredited Programs<br>
    //                     </strong>Delivery of nationally recognised training across a wide range of Competitive Systems and Practices qualifications starting from Certificate II through to Graduate Diploma which also includes accessible Government funding.</p>
    //                     <p><strong>Lean &amp; Six Sigma Programs<br>
    //                     </strong>Internally certified training programs in Lean Six Sigma Yellow Belt, Green Belt, Black Belt and Master Black Belt levels, also available are Lean Practitioner through to Expert and Master levels. All programs offer online training options.</p>
    //                     <p><strong>Customised Continuous Improvement Workshops</strong><br>
    //                     Bespoke workshops tailored to suit any workplace skill needs, workshops are interactively delivered both live online or in the workplace across all continuous improvement methodologies: Lean, Six Sigma and Agile.</p>
    //                 </div>
    //                 <a href="https://vative.com.au/services/capability-and-development/">            
    //                     <div class="image-block__icon icon-capabilitycoaching">icon</div>
    //                 </a>            
    //                 <h5 class="image-block__item__title text--bold"><a href="https://vative.com.au/services/capability-and-development/">3. Capability &amp; Development</a></h5>
    //                 </div>
    //                 <div class="image-block__item bg--squash content-left js-add-content">
    //                 <div class="image-block__content js-get-content" data-position="leftside">
    //                     <h3>Project Management</h3>
    //                     <p><strong>Lean Six Sigma Project Consulting</strong><br>
    //                     Specialisation in process engineering, layout planning and cell design including effective measurement of equipment and capital resources.</p>
    //                     <p><strong>Project Management Facilitation and Training<br>
    //                     </strong>Training and coaching project teams in the use of proven project management methodologies such as DMAIC, PDCA and Agile to deploy workplace improvement projects from strategy to execution.</p>
    //                     <p><strong>Performance Monitoring Technology Systems<br>
    //                     </strong>With use of IoT devices together with custom built software that is cloud based with mobile application capability to provide real-time performance of overall effectiveness of machine or movement of product. The measurement of asset availability and performance and with customised quality providing Overall Equipment Effectiveness (OEE).</p>
    //                 </div>
    //                 <a href="https://vative.com.au/professional-services/project-management/">            
    //                     <div class="image-block__icon icon-projectimplementation">icon</div>
    //                 </a>            
    //                 <h5 class="image-block__item__title text--bold"><a href="https://vative.com.au/professional-services/project-management/">4. Project Management</a></h5>
    //                 </div>
    //                 <div class="image-block__item bg--squash content-left js-add-content">
    //                 <div class="image-block__content js-get-content" data-position="leftside">
    //                     <h3>Results &amp; Certification</h3>
    //                     <p><strong>Executive Summary<br>
    //                     </strong>Summarised overview on overall engagement highlighting critical factors on successful outcomes, results on savings, areas of concern and risk to sustain outcomes and recommendations on strategies to propagate a continuous improvement culture transformation.</p>
    //                     <p><strong>Return on Investment (ROI) Reporting<br>
    //                     </strong>Engagements with project teams yield a ROI in measurements of monetary value and time. Reports prior to project execution indicate a projected ROI and post-implementation measured again for its effectiveness against ROI.</p>
    //                     <p><strong>Certificate Presentations<br>
    //                     </strong>All team members are acknowledged for their efforts with a certificate towards their credentials, from participation certificates to Australian recognised qualifications and international certification across all programs and courses are presented to recognise, reward and celebrate success.</p>
    //                 </div>
    //                 <a href="https://vative.com.au/services/results-and-certification/">            
    //                     <div class="image-block__icon icon-certification">icon</div>
    //                 </a>            
    //                 <h5 class="image-block__item__title text--bold"><a href="https://vative.com.au/services/results-and-certification/">5. Results &amp; Certification</a></h5>
    //                 </div> 
    //             </div>
    //             <div class="image-block__body is-affect">
    //                 <div class="container is-add-content text--squash"></div>
    //                 <span class="image-block__close js-show">
    //                 <span class="image-block__row-left"></span>
    //                 <span class="image-block__row-right"></span>
    //                 </span>
    //             </div>
    //             </div>
    //         </div>
    //         </div>
    //     </div>
    //     </div>
    // </div>';
    //return $output;
    return $atts['content'];
}

function hc_style_script() {
    wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js');
    wp_enqueue_script( 'jquery');
    wp_enqueue_style( 'hc-custom-style', plugin_dir_url(__FILE__). 'includes/custom.css', array());
    wp_enqueue_style( 'hc-style', plugin_dir_url(__FILE__). 'includes/styles.css', array());
    wp_enqueue_script( 'custom-js', plugins_url( '/includes/custom.js' , __FILE__ ), array( 'jquery' ), true );
}
add_action( 'wp_enqueue_scripts', 'hc_style_script' );