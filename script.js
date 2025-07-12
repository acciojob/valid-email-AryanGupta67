function validEmail(str) {
  // Edge case: Empty string
  if (!str) return false;

  // Regular expression for validating email
  const emailRegex = /^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

  return emailRegex.test(str);
}

