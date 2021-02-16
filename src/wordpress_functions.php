
<?php

function acf_to_rest_api($response, $post, $request) {
    if (!function_exists('get_fields')) return $response;

    if (isset($post)) {
        $acf = get_fields($post->id);
        $response->data['acf'] = $acf;
    }
    return $response;
}
    
add_action( 'rest_api_init', function () {
    register_rest_route( 'markers/v1', '/post/', array(
        'methods' => 'GET',
        'callback' => 'act_to_rest_api'
    ));
});
?>