export default function validateInfo(userInfo) {
  let errors = {};
  let phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  if (!userInfo.username.trim()) {
    errors.username = "Username Required";
  } else if (userInfo.username.length < 3) {
    errors.username = "Username must be 3 or more characters";
  }

  if (!userInfo.password) {
    errors.password = "Password Required";
  } else if (userInfo.password.length < 5) {
    errors.password = "Password must be 5 or more characters";
  }

  if (!userInfo.confirmPassword) {
    errors.confirmPassword = "Password Confirmation Required";
  } else if (userInfo.confirmPassword !== userInfo.password) {
    errors.confirmPassword = "Passwords do not match";
  }

  if (!userInfo.firstName) {
    errors.firstName = "First Name Required";
  } else if (userInfo.firstName < 1) {
    errors.firstName = "Name entry is invalid";
  }

  if (!userInfo.lastName) {
    errors.lastName = "Last Name Required";
  } else if (userInfo.lastName < 1) {
    errors.lastName = "Last name entry is invalid";
  }

  if (!userInfo.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userInfo.email)) {
    errors.email = "Email is invalid";
  }

  if (!userInfo.phoneNumber) {
    errors.phoneNumber = "Phone Number Required";
  } else if (userInfo.phoneNumber.match(phoneRegex)) {
    return true;
  } else {
    errors.phoneNumber = "Phone Number is invalid";
  }

  return errors;
}
