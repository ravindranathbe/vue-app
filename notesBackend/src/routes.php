<?php
// Routes

/*
$app->get('/[{name}]', function ($request, $response, $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);
});
*/

$app->get('/notes', function($request, $response, $args) {
	$this->logger->info("Slim-Skeleton '/notes' route");
	echo $this->db->table('notes')
		->select(['notes as text', 'is_favorite as favorite'])
		->get()
		->toJson();
});
