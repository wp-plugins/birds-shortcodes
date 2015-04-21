<?php
/*
Plugin Name:    Birds Shortcodes
Plugin URI:     http://www.tenbirdsflying.com/theme/birds-shortcodes/
Description:    Shortcodes for themes based on Foundation 5 framework by Zurb
Author:         Frédéric Serva
Version:        1.0.3
Author URI:     http://www.tenbirdsflying.com/
License:        GNU General Public License v2.0
License URI:    http://www.gnu.org/licenses/gpl-2.0.html
*/

/**
 * Cleanup Shortcodes
 */
if (!function_exists('birds_clean_shortcodes'))
{
    function birds_clean_shortcodes($content)
    {
        $array   = array(
            '<p>[' => '[',
            ']</p>' => ']',
            ']<br />' => ']'
        );
        $content = strtr($content, $array);
        return $content;
    }
    add_filter('the_content', 'birds_clean_shortcodes');
    add_filter('widget_text', 'birds_clean_shortcodes');
}

/**
 * Make them work in widgets
 */
add_filter('widget_text', 'do_shortcode');

/**
 * Styles & Scripts
 */
add_action('admin_enqueue_scripts', 'birds_stylesheet_to_tinymce');
add_action('wp_enqueue_scripts', 'birds_shortcodes_scripts');

function birds_stylesheet_to_tinymce()
{
    wp_enqueue_style('custom-mce-style', plugins_url('assets/css/shrt.css', __FILE__));
}

function birds_shortcodes_scripts()
{
    wp_enqueue_script('birds_googlemap', plugins_url('assets/js/googlemap.js', __FILE__), array(
        'jquery'
    ), '1.0', false);
    wp_enqueue_style('fa-style-front', plugins_url('assets/css/fonts/font-awesome.min.css', __FILE__));
    wp_enqueue_style('custom-mce-style', plugins_url('assets/css/shrt.css', __FILE__));
}

/**
 * Multilingual support for TinyMCE
 */
load_plugin_textdomain( 'birds-shortcodes', false, dirname( plugin_basename( __FILE__ ) ) . '/assets/i18n' );

function birds_add_my_tc_button_lang($locales) {
    $locales['birds_tc_button'] = plugin_dir_path ( __FILE__ ) . 'assets/i18n/translations.php';
    return $locales;
}
add_filter( 'mce_external_languages', 'birds_add_my_tc_button_lang');

/**
 * TinyMCE Button
 */
add_action('admin_head', 'birds_tinymce_button');

function birds_tinymce_button()
{
    global $typenow;
    // check user permissions
    if (!current_user_can('edit_posts') && !current_user_can('edit_pages'))
    {
        return;
    }
    // Don't verify the post type anymore (to make the plugin works in Custom Post Types)
    /*
    if (!in_array($typenow, array(
        'post',
        'page'
    )))
        return;
    */
    // check if WYSIWYG is enabled
    if (get_user_option('rich_editing') == 'true')
    {
        add_filter('mce_external_plugins', 'birds_add_tinymce_plugin');
        add_filter('mce_buttons', 'birds_register_my_tc_button');
    }
}

function birds_add_tinymce_plugin($plugin_array)
{
    $plugin_array['birds_tc_button'] = plugins_url('assets/js/editor.js', __FILE__);
    return $plugin_array;
}

function birds_register_my_tc_button($buttons)
{
    array_push($buttons, 'birds_tc_button');
    return $buttons;
}

/**
 * Grid
 */

/* Row
-------------------------------------------------------------- */
function birds_row($atts, $content = null)
{

    // Output
    ob_start();

    echo '<div class="row">' . "\n";
    echo do_shortcode($content) . "\n";
    echo '</div>' . "\n";

    return ob_get_clean();
}
add_shortcode('row', 'birds_row');

/* Columns
-------------------------------------------------------------- */
// 2 Columns
function birds_grid_2($atts, $content = null) {
    $html_output = '<div class="small-6 columns">'.do_shortcode($content).'</div>';
      return $html_output;
}
add_shortcode('col_2', 'birds_grid_2');

// 3 Columns
function birds_grid_3($atts, $content = null) {
    $html_output = '<div class="small-4 columns">'.do_shortcode($content).'</div>';
      return $html_output;
}
add_shortcode('col_3', 'birds_grid_3');

// 4 Columns
function birds_grid_4($atts, $content = null) {
    $html_output = '<div class="small-3 columns">'.do_shortcode($content).'</div>';
      return $html_output;
}
add_shortcode('col_4', 'birds_grid_4');

// 6 Columns
function birds_grid_6($atts, $content = null) {
    $html_output = '<div class="small-2 columns">'.do_shortcode($content).'</div>';
      return $html_output;
}
add_shortcode('col_6', 'birds_grid_6');

/**
 * UI
 */

/* Button
-------------------------------------------------------------- */
function birds_button($atts, $content = null)
{

    // Attributes
    extract(shortcode_atts(array(
        'link' => '#',
        'size' => '', // [tiny small large expand]
        'type' => '', // [radius round]
        'style' => '' // [secondary success alert]
    ), $atts));

    ob_start();

    // Output
    echo '<a href="' . esc_attr($link) . '" class="button ' . esc_attr($size) . ' ' . esc_attr($type) . ' ' . esc_attr($style) . '">' . "\n";
    echo do_shortcode($content) . "\n";
    echo "</a>" . "\n";

    return ob_get_clean();
}
add_shortcode('button', 'birds_button');

/* Blockquotes
-------------------------------------------------------------- */
function birds_blockquote($atts, $content = null)
{

    // Attributes
    extract(shortcode_atts(array(
        'cite' => ''
    ), $atts));

    ob_start();

    // Output
    echo '<blockquote>';
    echo do_shortcode($content) . "\n";
    echo '<cite>' . esc_attr($cite) . '</cite>';
    echo '</blockquote>';

    return ob_get_clean();
}
add_shortcode('blockquote', 'birds_blockquote');

/* Panel
-------------------------------------------------------------- */
function birds_panel($atts, $content = null)
{

    // Attributes
    extract(shortcode_atts(array(
        'type' => '', // [radius]
        'style' => '' // [callout]
    ), $atts));

    ob_start();

    // Output
    echo '<div class="panel ' . esc_attr($type) . ' ' . esc_attr($style) . '">' . "\n";
    echo do_shortcode($content) . "\n";
    echo '</div>' . "\n";

    return ob_get_clean();
}
add_shortcode('panel', 'birds_panel');

/* Alert
-------------------------------------------------------------- */
function birds_alert($atts, $content = null)
{

    // Attributes
    extract(shortcode_atts(array(
        'type' => '', // [radius round]
        'style' => '' // [secondary success alert]
    ), $atts));

    ob_start();

    // Output
    echo '<div data-alert class="alert-box ' . esc_attr($type) . ' ' . esc_attr($style) . '">' . "\n";
    echo do_shortcode($content) . "\n";
    echo '<a href="#" class="close">&times;</a>' . "\n";
    echo '</div>' . "\n";

    return ob_get_clean();
}
add_shortcode('alert', 'birds_alert');

/* Reveal Modal
-------------------------------------------------------------- */
function birds_modal($atts, $content = null)
{

    // Attributes
    extract(shortcode_atts(array(
        'id'        => '1',
        'visible'   => 'Click here'
    ), $atts));

    ob_start();

    // Output
    echo '<a href="#" data-reveal-id="modal-' . esc_attr($id) . '">' . esc_attr($visible) . '</a>' . "\n";
    echo '<div id="modal-' . esc_attr($id) . '" class="reveal-modal" data-reveal>' . "\n";
    echo do_shortcode($content) . "\n";
    echo '</div>' . "\n";

    return ob_get_clean();
}
add_shortcode('modal', 'birds_modal');

/* Tooltip
-------------------------------------------------------------- */
function birds_tooltip($atts, $content = null)
{

    // Attributes
    extract(shortcode_atts(array(
        'tip' => '',
        'position' => '', // [tip-top tip-bottom tip-left tip-right]
        'type' => '' // [radius round]
    ), $atts));

    ob_start();

    // Code
    echo '<span data-tooltip class="has-tip ' . esc_attr($position) . ' ' . esc_attr($type) . '" title="' . esc_attr($tip) . '">' . do_shortcode($content) . '</span>' . "\n";

    return ob_get_clean();
}
add_shortcode('tooltip', 'birds_tooltip');

/* Progress Bar
-------------------------------------------------------------- */
function birds_progress_bar($atts)
{

    // Attributes
    extract(shortcode_atts(array(
        'span' => '12',
        'type' => '',
        'style' => '',
        'progress' => '100'
    ), $atts));

    ob_start();

    // Output
    echo '<div class="progress small-' . esc_attr($span) . ' ' . esc_attr($style) . ' ' . esc_attr($type) . '">' . "\n";
    echo '<span class="meter" style="width:' . esc_attr($progress) . '%"></span>' . "\n";
    echo '</div>' . "\n";

    return ob_get_clean();
}
add_shortcode('progress-bar', 'birds_progress_bar');

/* Label
-------------------------------------------------------------- */
function birds_label($atts, $content = null)
{

    // Attributes
    extract(shortcode_atts(array(
        'type' => '', // [round radius]
        'style' => '' // [success alert secondary]
    ), $atts));

    ob_start();

    // Output
    echo '<span class="label ' . esc_attr($type) . ' ' . esc_attr($style) . '">' . do_shortcode($content) . '</span>' . "\n";

    return ob_get_clean();
}
add_shortcode('label', 'birds_label');

/* Flex Video
-------------------------------------------------------------- */
function birds_flex_video($atts, $content = null)
{

    // Attributes
    extract(shortcode_atts(array(
        'type' => '',
        'size' => ''
    ), $atts));

    ob_start();

    // Output
    echo '<div class="flex-video ' . esc_attr($type) . ' ' . esc_attr($size) . '">' . "\n";
    echo do_shortcode($content) . "\n" . "\n";
    echo '</div>' . "\n";

    return ob_get_clean();
}
add_shortcode('flex-video', 'birds_flex_video');

/**
 * Font-Awesome Icons
 */
function birds_awesome_codes($atts)
{
    extract(shortcode_atts(array(
        'class' => '',
        'size' => ''
    ), $atts));

    if ($class == "")
    {
        $class = "fa-info-circle";
    }

    if ($size == "default")
    {
        $size = "";
    }

    $awesome = '<i class="fa ' . $class . ' ' . $size . '"></i>';
    return $awesome;

}
add_shortcode('icons', 'birds_awesome_codes');

/**
 * Google Maps
 */
function birds_shortcode_googlemaps($atts, $content = null)
{

    extract(shortcode_atts(array(
        'title' => '',
        'location' => '',
        'width' => '',
        'height' => '300',
        'zoom' => 8,
        'align' => '',
        'class' => '',
        'visibility' => 'all'
    ), $atts));

    $output = '<h4>' . $title . '</h4><div id="map_canvas_' . rand(1, 100) . '" class="googlemap ' . $class . '' . $visibility . '" style="height:' . $height . 'px;width:100%">';
    $output .= (!empty($title)) ? '<input class="title" type="hidden" value="' . $title . '" />' : '';
    $output .= '<input class="location" type="hidden" value="' . $location . '" />';
    $output .= '<input class="zoom" type="hidden" value="' . $zoom . '" />';
    $output .= '<div class="map_canvas"></div>';
    $output .= '</div>';
    $output .= '<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>';

    return $output;
}
add_shortcode("birds_googlemap", "birds_shortcode_googlemaps");

/**
 * SoundCloud
 */
function responsive_soundcloud_track($atts, $content = null)
{
    // Attributes
    extract(shortcode_atts(array(
        'title' => ''
    ), $atts));

    ob_start();

    // Output
    echo '<h4>' . $title . '</h4>' . "\n";
    echo '<div class="trackwrapper">' . "\n";
    echo do_shortcode($content) . "\n" . "\n";
    echo '</div>' . "\n";

    return ob_get_clean();
}
add_shortcode('scloud', 'responsive_soundcloud_track');

/**
 * Tabs (Horizontal)
 */
function birds_tabs_thead($params, $content = null){
    extract(shortcode_atts(array(
        'title1' => '',
        'title2' => '',
        'title3' => '',
        'title4' => '',
        'title5' => ''
         ), $params));
    $output = '<div class="row"><dl class="tabs" data-tab><br />';
    $output .= '<dd class="active"><a href="#panel1">'.esc_attr($title1).'</a></dd>';
    if (esc_attr($title2) != '') {
    $output .= '<dd><a href="#panel2">'.esc_attr($title2).'</a></dd>';
    }
    if (esc_attr($title3) != '') {
    $output .= '<dd><a href="#panel3">'.esc_attr($title3).'</a></dd>';
    }
    if (esc_attr($title4) != '') {
    $output .= '<dd><a href="#panel4">'.esc_attr($title4).'</a></dd>';
    }
    if (esc_attr($title5) != '') {
    $output .= '<dd><a href="#panel5">'.esc_attr($title5).'</a></dd>';
    }
    $output .= '</dl>';
    $output .= '<div class="tabs-content">';
    $output .= do_shortcode( $content );
    $output .= '</div></div>';
    return force_balance_tags( $output );
}
add_shortcode('tabs', 'birds_tabs_thead');

function birds_tabs_content1($params, $content = null){
    $output = '<div class="content active" id="panel1"> ';
    $output .= do_shortcode( $content );
    $output .= '</div>';

    return force_balance_tags( $output );
}
add_shortcode('tab-content1', 'birds_tabs_content1');

function birds_tabs_content2($params, $content = null){
    $output = '<div class="content" id="panel2"> ';
    $output .= do_shortcode( $content );
    $output .= '</div>';

    return force_balance_tags( $output );
}
add_shortcode('tab-content2', 'birds_tabs_content2');

function birds_tabs_content3($params, $content = null){
    $output = '<div class="content" id="panel3"> ';
    $output .= do_shortcode( $content );
    $output .= '</div>';

    return force_balance_tags( $output );
}
add_shortcode('tab-content3', 'birds_tabs_content3');

function birds_tabs_content4($params, $content = null){
    $output = '<div class="content" id="panel4"> ';
    $output .= do_shortcode( $content );
    $output .= '</div>';

    return force_balance_tags( $output );
}
add_shortcode('tab-content4', 'birds_tabs_content4');

function birds_tabs_content5($params, $content = null){
    $output = '<div class="content" id="panel5"> ';
    $output .= do_shortcode( $content );
    $output .= '</div>';

    return force_balance_tags( $output );
}
add_shortcode('tab-content5', 'birds_tabs_content5');

/**
 * Tabs (Vertical)
 */
function birds_vert_tabs_thead($params, $content = null){
    extract(shortcode_atts(array(
        'title1' => '',
        'title2' => '',
        'title3' => '',
        'title4' => '',
        'title5' => ''
         ), $params));
    $output = '<div class="row"><dl class="tabs vertical" data-tab><br />';
    $output .= '<dd class="active"><a href="#panel1">'.esc_attr($title1).'</a></dd>';
    if (esc_attr($title2) != '') {
    $output .= '<dd><a href="#panel2">'.esc_attr($title2).'</a></dd>';
    }
    if (esc_attr($title3) != '') {
    $output .= '<dd><a href="#panel3">'.esc_attr($title3).'</a></dd>';
    }
    if (esc_attr($title4) != '') {
    $output .= '<dd><a href="#panel4">'.esc_attr($title4).'</a></dd>';
    }
    if (esc_attr($title5) != '') {
    $output .= '<dd><a href="#panel5">'.esc_attr($title5).'</a></dd>';
    }
    $output .= '</dl>';
    $output .= '<div class="tabs-content vertical">';
    $output .= do_shortcode( $content );
    $output .= '</div></div>';
    return force_balance_tags( $output );
}
add_shortcode('tabs_vert', 'birds_vert_tabs_thead');
