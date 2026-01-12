function getInitials(fullName) {
  const part = fullName.split(" ");
  const nameInitial = part[0].charAt(0);
  const surnameInitial = part[1].charAt(0);
  return nameInitial + surnameInitial;
}

module.exports = getInitials
