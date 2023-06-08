function getNumericFrom(roman) {
  const romanNumerals = {
    I: 1,
    II: 2,
    III: 3,
    IV: 4,
    V: 5,
  };

  return romanNumerals[roman];
}

exports.getNumericFrom = getNumericFrom;
