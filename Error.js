function litersToGallons(liters) {
    var result = liters * 3.785
    var message = liters.toString() + " liters are " + result.toString() + " gallons.";
    console.log(message);
  }

  litersToGallons(8);