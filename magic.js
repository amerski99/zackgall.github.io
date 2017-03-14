<script type="text/javascript">
function school_info(){
var school=document.info.school.value;
var hours=document.info.hours.value;
var date=document.info.date.value;
var location=document.info.location.value;
  document.getElementById("school").innerHTML = school+" Blood Drive Hall Pass";
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("date").innerHTML = "Date: "+date;
  document.getElementById("location").innerHTML = "Location: "+location;
  document.getElementById("hallpass").style.display="block"
  document.getElementById("name").innerHTML = "Name: "+table[1][1];
}

$(window).load(function(){
jQuery('#pastebox').on('change keyup', function(e) {
    var data = jQuery(this).val();
    var prev = jQuery(this).data('previous-data');

    var table = interpret_table( data );
});
// Converts a (user-pasted) string to a 2d array, utilizing line breaks and tabs.
function interpret_table( data ) {
    console.log('Unformatted data:');
    console.log(data);

    table = data.split("\n");

    for (i in table) {
        table[i] = table[i].split("\t");
    }

    console.log('Formatted table:');
    console.log(table); // check console for array strcuture

    return table;
}

});
</script>
