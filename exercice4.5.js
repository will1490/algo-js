/**
 * Créez une fonction nommée calcDistancequi prend les coordonnées de deux points différents Aet Bdans un espace 2D. 
 * Cette fonction doit renvoyer la distance entre ces deux points. 
 */

function calcDistance(pointA, pointB) {

    let distance = Math.sqrt(Math.pow(pointB[0] - pointA[0], 2) + Math.pow(pointB[1] - pointA[1], 2));
    result = distance.toFixed(2);
    console.log(result);
    return;
    }

 /**
  * Formula =  a−b = √ (b[0] − a[0] )2 + (b[1] − a[1] )2 
  * Calcule la distance entre deux points différents A et B dans un espace 2D.
  * Args:
  *    pointA (Array): Les coordonnées du point A sous la forme d'un tableau [x, y].
  *    pointB (Array): Les coordonnées du point B sous la forme d'un tableau [x, y].
  *  Returns:
  *    number: La distance entre les points A et B arrondie à deux décimales(toFixed) 
  */
 calcDistance([2,5],[7,8]);

