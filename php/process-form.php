<!DOCTYPE html>
<html>
<head>
	<title>Form Submission Result</title>
</head>
<body>
	<?php
		// Read the input value from the submitted form data
		$inputValue = $_POST["search-input"];

		// Generate the output using the input value
		$output = "The drug name you searched for is: " . $inputValue;
	?>
	<div style="text-align:center; background-color:#ffffff;">
		<div class="output" style="text-align:left; width: 600px; overflow-x: auto;">
			<h1><?php echo $output; ?></h1>
		</div>
	</div>
</body>
</html>
