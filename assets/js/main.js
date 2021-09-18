$(document).ready(function(){
  $(".forgot-password").click(function(e){
    e.stopPropagation()
    $(this).closest('.screen-one').slideUp();
    /* $('.sun-up').slideUp(0); */
    $('.forget').slideDown(500);
    
  });
  $(".send-Id").click(function(e){
    e.stopPropagation()
    $(this).closest('.forget').slideUp(500);
    $('.change-password').slideDown(500);
    
  });
  $(".icon-filter ").click(function(){
    $('.aside-box').slideToggle(500);
  });

  $(".save-change").click(function(e){
    e.stopPropagation()
    $(this).closest('.change-password').slideUp(500);
    $('.screen-one').slideDown(500);
    
  });
  function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function() {
    readURL(this);
});
$(".imgAdd").click(function(){
  $(this).closest(".row").find('.imgAdd').before('<div class="col-lg-3 col-md-6 col-sm-12 imgUp"><div class="imagePreview"></div><label class="btn btn-primary">Upload<input type="file" class="uploadFile img" value="Upload Photo" style="width:0px;height:0px;overflow:hidden;"></label><i class="fa fa-times del"></i></div>');
});
$(document).on("click", "i.del" , function() {
// 	to remove card
  $(this).parent().remove();
// to clear image
  // $(this).parent().find('.imagePreview').css("background-image","url('')");
});
$(function() {
    $(document).on("change",".uploadFile", function()
    {
    		var uploadFile = $(this);
        var files = !!this.files ? this.files : [];
        if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support
 
        if (/^image/.test( files[0].type)){ // only image file
            var reader = new FileReader(); // instance of the FileReader
            reader.readAsDataURL(files[0]); // read the local file
 
            reader.onloadend = function(){ // set image data as background of div
                //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url("+this.result+")");
            }
        }
      
    });
});
});