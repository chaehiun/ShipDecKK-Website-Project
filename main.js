// Main JavaScript file for ShipDecKK website

document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const mobileMenu = document.querySelector(".mobile-menu")

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")
    })

    // Close mobile menu when clicking outside
    document.addEventListener("click", (event) => {
      if (!mobileMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
        mobileMenu.classList.remove("active")
      }
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href")

      if (href !== "#") {
        e.preventDefault()

        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          })
        }
      }
    })
  })

  // Add active class to current page in navigation
  const currentLocation = window.location.pathname
  const navLinks = document.querySelectorAll(".main-nav a, .mobile-menu a")

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href")

    // Check if the current path matches the link path
    if (currentLocation.includes(linkPath) && linkPath !== "/") {
      link.classList.add("active")
    } else if (currentLocation === "/" && (linkPath === "/" || linkPath === "/index.html")) {
      link.classList.add("active")
    }
  })

  // Newsletter form submission
  const newsletterForms = document.querySelectorAll(".newsletter-form")

  newsletterForms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault()

      const emailInput = this.querySelector('input[type="email"]')
      const email = emailInput.value.trim()

      if (isValidEmail(email)) {
        // In a real application, you would send this to your server
        alert("Thank you for subscribing to our newsletter!")
        emailInput.value = ""
      } else {
        alert("Please enter a valid email address.")
      }
    })
  })

  // Email validation helper function
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Image gallery hover effect
  const shipCards = document.querySelectorAll(".ship-card")

  shipCards.forEach((card) => {
    const image = card.querySelector(".ship-image img")

    if (image) {
      card.addEventListener("mouseenter", () => {
        image.style.transform = "scale(1.05)"
      })

      card.addEventListener("mouseleave", () => {
        image.style.transform = "scale(1)"
      })
    }
  })

  // Pagination functionality
  const paginationButtons = document.querySelectorAll(".pagination-btn")

  paginationButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (!this.classList.contains("active") && !this.classList.contains("prev") && !this.classList.contains("next")) {
        document.querySelector(".pagination-btn.active").classList.remove("active")
        this.classList.add("active")

        // In a real application, you would load the appropriate page content here
      }
    })
  })
})
