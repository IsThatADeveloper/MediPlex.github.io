<!DOCTYPE html>
<html>
<head>
	<title>Form Submission Result</title>
</head>
<body>
	<?php
		if(isset($_POST["search-input"])) {
			// Read the input value from the submitted form data
			$inputValue = $_POST["search-input"];

			// Generate the output using the input value
			$output = "The drug name you searched for is: " . $inputValue;
		} else {
			// If search input is not set, set the output to a default message
			$output = "Please enter a drug name in the search field.";
		}
	?>
	<div style="text-align:center; background-color:#ffffff;">
		<div class="output" style="text-align:left; width: 600px; overflow-x: auto;">
			<h1><?php echo $output; ?></h1>
		</div>
	</div>
	<form method="post">
		<label for="search-input">Search for a drug:</label>
		<input type="text" name="search-input" id="search-input">
		<input type="submit" value="Search">
	</form>
</body>
</html>
