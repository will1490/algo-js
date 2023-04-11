function computeChange(price, moneyHanded) {
    // Vérification des entrées
    if (typeof price !== 'number' || typeof moneyHanded !== 'number' || price < 0 || moneyHanded < 0 || moneyHanded < price) {
      return [];
    }
    
    const availableNotes = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    let change = [];
    let remainingAmount = (moneyHanded - price) * 100; // Conversion en centimes pour éviter les problèmes d'arrondi avec les nombres décimaux
    
    for (let i = 0; i < availableNotes.length && remainingAmount > 0; i++) {
      const noteValue = availableNotes[i] * 100; // Conversion en centimes
      const noteCount = Math.floor(remainingAmount / noteValue);
      
      if (noteCount > 0) {
        for (let j = 0; j < noteCount; j++) {
          change.push(availableNotes[i]);
        }
        remainingAmount -= noteCount * noteValue;
      }
    }
    console.log(change);
    return change;
  }
  computeChange(27.56, 50);

  /**
   * La fonction computeChange() vérifie d'abord que les entrées sont valides (nombres positifs),
   *  puis crée un tableau des coupures et pièces disponibles,
   *  en centimes pour éviter les problèmes d'arrondi avec les nombres décimaux.
   *  Ensuite, la fonction parcourt ce tableau en partant des coupures les plus élevées
   *  et en ajoutant les coupures nécessaires jusqu'à ce que le montant restant soit 
   * nul ou inférieur à la plus petite coupure disponible.
   *  Le tableau des coupures utilisées est retourné à la fin.
   *  Notez que cette implémentation ne prend pas en compte
   *  les coupures de 7 euros ou les pièces de 8 euros,
   *  car elles n'existent pas dans la monnaie en euros.
   */