// Code goes here

$(function () {
    $(".slider").each(function () {
        var begin = $(this).data("begin"),
            end = $(this).data("end");
        $(this).slider({
            range: "min",
            min: begin,
            max: end,
            animate: true,
            slide: function (event, ui) {
                //update text box quantity
                var slideramount = ("#" + $(this).attr("id") + "_amount");
                $(slideramount).val(ui.value);
            }
        });
        //initialise text box quantity
        var slideramount = ("#" + $(this).attr("id") + "_amount");
        $(slideramount).val($(this).slider("value"));
 
    });
    //When radio buttons are changed, update slider 
    $('[name="[temperature]"]').change(function () {
          var value = this.value;
          $('#temperature').slider("value", value);
    });

});