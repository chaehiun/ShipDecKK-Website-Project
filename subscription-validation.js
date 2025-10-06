// Form validation for the subscription page
document.addEventListener("DOMContentLoaded", () => {
  const subscriptionForm = document.getElementById("subscription-form")

  if (subscriptionForm) {
    // Password strength indicator
    const passwordInput = document.getElementById("password")
    const passwordStrength = document.getElementById("password-strength")
    const passwordFeedback = document.getElementById("password-feedback")
    const strengthBars = passwordStrength.querySelectorAll(".strength-bar")

    passwordInput.addEventListener("input", function () {
      const password = this.value
      let strength = 0
      let feedback = ""

      // Update strength bars
      if (password.length > 0) {
        // Length check
        if (password.length >= 8) {
          strength++
        }

        // Uppercase check
        if (/[A-Z]/.test(password)) {
          strength++
        }

        // Number check
        if (/[0-9]/.test(password)) {
          strength++
        }

        // Special character check
        if (/[^A-Za-z0-9]/.test(password)) {
          strength++
        }

        // Update visual indicator
        for (let i = 0; i < strengthBars.length; i++) {
          if (i < strength) {
            strengthBars[i].style.backgroundColor =
              strength === 1
                ? "#f44336"
                : // Red
                  strength === 2
                  ? "#ff9800"
                  : // Orange
                    strength === 3
                    ? "#ffeb3b"
                    : // Yellow
                      "#4caf50" // Green
          } else {
            strengthBars[i].style.backgroundColor = "#dee2e6"
          }
        }

        // Update feedback text
        feedback =
          strength === 0
            ? "Very weak"
            : strength === 1
              ? "Weak"
              : strength === 2
                ? "Fair"
                : strength === 3
                  ? "Good"
                  : "Strong"
      } else {
        // Reset if empty
        for (let i = 0; i < strengthBars.length; i++) {
          strengthBars[i].style.backgroundColor = "#dee2e6"
        }
        feedback = "Enter a password"
      }

      passwordFeedback.textContent = "Password strength: " + feedback
    })

    // Form submission validation
    subscriptionForm.addEventListener("submit", function (e) {
      e.preventDefault()
      let isValid = true

      // Name validation
      const nameInput = document.getElementById("fullName")
      const nameError = document.getElementById("name-error")
      if (!nameInput.value.trim() || nameInput.value.length < 3) {
        nameError.style.display = "block"
        isValid = false
      } else {
        nameError.style.display = "none"
      }

      // Email validation
      const emailInput = document.getElementById("email")
      const emailError = document.getElementById("email-error")
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailPattern.test(emailInput.value)) {
        emailError.style.display = "block"
        isValid = false
      } else {
        emailError.style.display = "none"
      }

      // Password validation
      const passwordInput = document.getElementById("password")
      const passwordError = document.getElementById("password-error")
      if (passwordInput.value.length < 8) {
        passwordError.style.display = "block"
        isValid = false
      } else {
        passwordError.style.display = "none"
      }

      // Age validation
      const ageInput = document.getElementById("age")
      const ageError = document.getElementById("age-error")
      if (!ageInput.value || Number.parseInt(ageInput.value) < 18) {
        ageError.style.display = "block"
        isValid = false
      } else {
        ageError.style.display = "none"
      }

      // Interests validation
      const interestsError = document.getElementById("interests-error")
      const luxuryYachts = document.getElementById("luxury-yachts")
      const cargoShips = document.getElementById("cargo-ships")
      const luxuryLiners = document.getElementById("luxury-liners")
      const maintenance = document.getElementById("maintenance")

      if (!luxuryYachts.checked && !cargoShips.checked && !luxuryLiners.checked && !maintenance.checked) {
        interestsError.style.display = "block"
        isValid = false
      } else {
        interestsError.style.display = "none"
      }

      // Terms validation
      const termsCheckbox = document.getElementById("terms")
      const termsError = document.getElementById("terms-error")
      if (!termsCheckbox.checked) {
        termsError.style.display = "block"
        isValid = false
      } else {
        termsError.style.display = "none"
      }

      // If all validations pass
      if (isValid) {
        // Show success message
        alert("Thank you for subscribing to ShipDecKK updates!")
        this.reset()
      }
    })
  }
})
