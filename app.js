<!DOCTYPE html>
<title>My Example</title>


<p id="msg"></p>

<script>
  var citiesAU =  ["Sydney", "Melbourne", "Brisbane", "Perth"],
      citiesUS =  ["New York", "Miami", "San Fransisco", "Los Angeles"],
      cities = citiesAU.concat(citiesUS);
  document.getElementById("msg").innerHTML = cities;
</script>