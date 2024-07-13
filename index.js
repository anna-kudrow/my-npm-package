function bodyMassInd(height, weight) {
  const res = weight / Math.pow(height / 100, 2);
  if (res <= 16) console.log("Severe underweight");
  else if (res <= 18.5) console.log("Insufficient (deficit) body weight");
  else if (res <= 25) console.log("Norm");
  else if (res <= 30) console.log("Excess body weight (pre-obesity)");
  else if (res <= 35) console.log("Obesity 1st degree");
  else if (res <= 40) console.log("Obesity 2st degree");
  else if (res > 40) console.log("Obesity 3st degree");
}

module.exports = { bodyMassInd };
