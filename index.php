<?php include_once('home.html');

$access_token=getenv('accessToken');

?>

<script type="text/javascript">let access=<? $access_token ?></script>
<script type="text/javascript" src="portfolio.js"></script>
