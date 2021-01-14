

function toggleProductForm() {
    const productForm = document.getElementById("productForm")

    if(productForm.style.display === "block") {
        productForm.style.display = "none";
    } else {
      productForm.style.display = "block";
    }
}

function toggleContactForm() {
    const contactForm = document.getElementById("contactForm")

    if(contactForm.style.display === "block") {
        contactForm.style.display = "none";
    } else {
      contactForm.style.display = "block";
    }
}