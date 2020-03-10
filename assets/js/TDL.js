$("ul").on("click" ,"li",function(){
    $(this).toggleClass("complete");
})
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").on("keypress",function(event){
   if(event.which==13){
       var s=$(this).val();
       $(this).val("");
       $("ul").append("<li><span><i class='fa fa-trash'></i></span> " +s+"</li>");
   }
});

