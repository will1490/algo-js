function spaceAge(seconds, planet) {
    const earthSeconds = 31557600; // Nombre de secondes dans une année terrestre
    const orbitalPeriods = { // Périodes orbitales en années terrestres
      Mercury: 0.2408467,
      Venus: 0.61519726,
      Earth: 1.0,
      Mars: 1.8808158,
      Jupiter: 11.862615,
    };
    
    let ageOnEarth = seconds / earthSeconds; // Âge en années terrestres
    let ageOnPlanet = ageOnEarth / orbitalPeriods[planet]; // Âge sur la planète donnée
    
    return ageOnPlanet.toFixed(2); // Arrondi à deux décimales
  }
  
  console.log(spaceAge(365.25 * 24 * 60 * 60, 'Earth'));    // 1.00
  console.log(spaceAge(1_000_000_000, 'Mercury'));          // 131.56
  console.log(spaceAge(2_000_000_000, 'Venus'));            // 53.25
  
/**
 *   La fonction utilise un objet orbitalPeriods pour stocker les périodes orbitales
 *   des différentes planètes en années terrestres.
 *   Elle calcule d'abord l'âge de la personne en années terrestres 
 *   en divisant le nombre de secondes par le nombre de secondes dans une année terrestre.
 *   Elle calcule ensuite l'âge sur la planète donnée en divisant l'âge en années terrestres
 *   par la période orbitale de la planète. Enfin, elle renvoie l'âge sur la planète donnée 
 *   arrondi à deux décimales à l'aide de la méthode toFixed() 
 *  */  