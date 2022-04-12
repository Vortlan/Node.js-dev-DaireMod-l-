function circleCircumference(r) {
  cevre = Math.PI * (2 * r);
  alan = Math.PI * (r * r);
  console.log(`Yarıçapı ${r} olan dairenin cevresi = ${cevre}`);
  console.log(`Yarıçapı ${r} olan dairenin alani = ${alan}`);
}

module.exports = circleCircumference;
