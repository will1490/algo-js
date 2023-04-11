let tvSerie = {
    name: "The boys",
    productionYear: 2019,
    nameOfTheCastMembers: [
        {
            firstname: "Karl",
            lastname:"Urban",
            character:"William Butcher"
        },
        {
            firstname: "Jack",
            lastname:"Quaid",
            character:"Hugh Campbell",
        },    
        {
            firstname: "Laz",
            lastname:"Alonso",
            character:"La Crème",
        },    
        {
            firstname: "Tomer",
            lastname:"Kapon",
            character:"Frenchie"
        },    
        {
            firstname: "Karen",
            lastname:"Fukuhara",
            character:"Kimiko",
        },    
        {
            firstname: "Antony",
            lastname:"Starr",
            character:"Homelander",
        },
        {
            firstname: "Chace",
            lastname:"Crawford",
            character:"The Deep",
        },    
        {
            firstname: "Dominique",
            lastname:"McElligott",
            character:"Queen Maeve",
        },                
    ],
};

function randomizeCast(tvSerie) {
    let newSerieName = prompt("What is the name of the new serie ? "); // Ask for the name of the new serie
    let cast = tvSerie.nameOfTheCastMembers.slice(); // Create a copy of the original cast
    let randomizedCast = [];
  
    while (cast.length > 0) {
      let randomIndex = Math.floor(Math.random() * cast.length);
      let castMember = cast.splice(randomIndex, 1)[0];
      randomizedCast.push(castMember);
    }
    
    console.log(`The new cast for "${newSerieName}" is:`);
    console.log(randomizedCast);
  
    return randomizedCast;
}

randomizeCast(tvSerie); 
