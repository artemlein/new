<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>hi</title>
</head>
<body>
	<?php echo "hello world"; ?>
	<script type="text/javascript" src="https://vk.com/js/api/openapi.js?160"></script>
<script type="text/javascript">
  VK.init({apiId: API_ID});
</script>

<!-- VK Widget -->
<div id="vk_auth"></div>
<script type="text/javascript">
  VK.Widgets.Auth("vk_auth", {"authUrl":"/dev/Login"});
</script>
</body>
</html>