   // number count for stats, using jQuery animate

import("./jquery.min.js")

   const targetElement = document.querySelector('#ImpactSection');

   const observer = new IntersectionObserver((entries) => {
 entries.forEach((entry) => {
   if (entry.isIntersecting) {
     // Run the calculateSum function when the target element is in the viewport
    console.log("first")
$('.counting').each(function() {
 var $this = $(this),
     countTo = $this.attr('data-count');
 
 $({ countNum: $this.text()}).animate({
   countNum: countTo
 },

 {

   duration: 2000,
   easing:'linear',
   step: function() {
     $this.text(Math.floor(this.countNum));
   },
   complete: function() {
     $this.text(this.countNum);
     //alert('finished');
   }

 });  
 

});

     // Stop observing once the target element is in the viewport
     observer.unobserve(entry.target);
   }
 });
});

observer.observe(targetElement);

function handleWindowResize() {
 // Check if the target element is in the viewport after the window is resized
 const isIntersecting = targetElement.getBoundingClientRect().top < window.innerHeight;
 if (isIntersecting) {
   // const result = calculateSum(3, 5);
   // targetElement.textContent = result; // Display the result within the target element
 }
}

// Attach the handleWindowResize function to the window resize event
window.addEventListener('resize', handleWindowResize);
