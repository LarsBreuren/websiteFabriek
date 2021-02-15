function markers_endpoint( $request_data ) {
    $args = array(
        'post_type' => 'post',
        'posts_per_page'=>-1, 
        'numberposts'=>-1
    );
    
    $posts = get_posts($args);
    foreach ($posts as $key => $post) {
		$title = isset( $post->post_title ) ? $post->post_title : '';
        $posts[$title]->acf = get_fields($post->ID);
    }
    return  $posts;
}
    
add_action( 'rest_api_init', function () {
    register_rest_route( 'markers/v1', '/post/', array(
        'methods' => 'GET',
        'callback' => 'markers_endpoint'
    ));
});