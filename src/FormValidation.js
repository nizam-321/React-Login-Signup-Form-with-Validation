export function validateForm(email, password) {
  // Check if any field is empty
  if (!email || !password) {
    return "Both email and password are required.";
  }

  // Custom email format check — must end with .com
  const emailPattern = /^[^\s@]+@[^\s@]+\.(com)$/;
  if (!emailPattern.test(email)) {
    return "Please enter a valid email address.";
  }

  // Check if password has at least 6 characters
  if (password.length < 6) {
    return "Password must be at least 6 characters.";
  }

  return ""; // No errors
}
