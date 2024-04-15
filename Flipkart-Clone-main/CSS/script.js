document.addEventListener("DOMContentLoaded", function() {
  const flexDiv = document.querySelector(".flex");
  const container = document.querySelector(".flex a:last-child");

  // Add scroll functionality for the second link
  const secondLink = flexDiv.querySelector("a:last-child");
  secondLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default behavior of the link

    // Scroll the container to reveal the hidden pictures
    container.scrollBy({ left: 200, behavior: 'smooth' }); // Adjust 'left' value as per your requirement
  });
});


document.addEventListener("DOMContentLoaded", function() {
    // Add event listener for the search input field
    const searchInput = document.querySelector(".SearchInput input[type='text']");
    searchInput.addEventListener("focus", function() {
      this.value = ""; // Clear the input field when focused
      this.style.color = "black"; // Change text color to black when focused
    });
    
    searchInput.addEventListener("blur", function() {
      if (this.value === "") {
        this.value = "Search for products, brands and more"; // Restore default text if input is empty
        this.style.color = "grey"; // Change text color back to grey
      }
    });
    
   
    
    // Add event listener for "View All" link in the Top Offers section
    const viewAllLink = document.querySelector(".Info .link a");
    viewAllLink.addEventListener("click", function(event) {
      event.preventDefault(); 
      alert("This is a placeholder for viewing all products.");
      
      window.location.href = "products.html"; 
    });
    
    // Add hover effect for slider images
    const sliderImages = document.querySelectorAll(".slider img");
    sliderImages.forEach(function(image) {
      image.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.1)"; // Scale up the image on hover
      });
      
      image.addEventListener("mouseout", function() {
        this.style.transform = "scale(1)"; // Reset the scale on mouseout
      });
    });
  });
  