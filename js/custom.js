   $(function () {
       $("#select__btn").click(function () {
           $(".select__option").toggle();
       });
   });

   function myFunction() {
       var dots = document.getElementById("dots");
       var moreText = document.getElementById("more");
       var btnText = document.getElementById("show");



       if (dots.style.display == "none") {
           dots.style.display = "inline";
           btnText.innerHTML = "Show more";
           moreText.style.display = "none";

       } else {
           dots.style.display = "none";
           btnText.innerHTML = "Show less";
           moreText.style.display = "inline";

       }
   }

   var index = 1;
   showdiv(index);

   function getdiv(n) {
       showdiv(index += n);
   }

   function showdiv(n) {
       var i;
       var a = document.getElementsByClassName("testimony-item");
       if (n > a.length) {
           index = 1;
       }
       if (n < 1) {
           index = a.length;
       }
       for (i = 0; i < a.length; i++) {
           a[i].style.display = "none";
       }
       a[index - 1].style.display = "block";
   }