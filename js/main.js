

/*send.addEventListener('click', (event)=>{
        data.forEach((element) => {
            list.insertAdjacentHTML('beforeend', `
                <div class="card">
                    <img src='pictures/medecins.jpg'>
                    <p id="firstname">${element.prenom}</p>
                    <p id="Secondname">${element.nom}</p>
                    <p id="localisation">${element.adresse}</p>
                    <p id="job">${element.specialite}</p>
                </div>
            `);
        })
    }); */


    let search = document.querySelector('#app-search');
    const cd = document.querySelector('#location');
    const list = document.querySelector('#list');

    //nom//
   /* search.addEventListener('keyup',(elementsn) => {
        elementsn.preventDefault();
    
        const searchn = elementsn.target.value.toLowerCase();
    
        const filtern= data.filter((praticienn) => {
          return ( praticienn.nom.toLowerCase().includes(searchn) );
        })
        afficherPraticien(filtern);
    });*/
    search.addEventListener('keyup',(elements) => {
        elements.preventDefault();

        const search = elements.target.value.toLowerCase();
  
        const filter= data.filter((praticien) => {
          return (praticien.nom.toLowerCase().includes(search));
        });
        afficherPraticien(filter);
    });
    

    
    //Prenom//
   /*  search.addEventListener('keyup',(elements) => {
        elements.preventDefault();

        const search = elements.target.value.toLowerCase();
  
        const filter= data.filter((praticien) => {
          return ( praticien.prenom.toLowerCase().includes(search) );
        })
        afficherPraticien(filter);
    });
    */


    //localisation//
    cd.addEventListener('keyup', (datalocation) => {
      const lsearch = datalocation.target.value.toLowerCase();

      const filterlocation = data.filter((praticienlocation) => {

        return ( praticienlocation.adresse.toLowerCase().includes(lsearch) );
        
      })
      afficherPraticien(filterlocation)
    });
    
    
    const afficherPraticien = ((element) => {
      const htmlString = element.map((usearch) => {
        console.log(usearch,'usearch')
        return `
        <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="card">
          <img src="pictures/medecins.jpg" class="card-img-top" alt="...">
          <li class="card-body">
            <h5 class="card-title">
                ${usearch.prenom}
                ${usearch.nom} 
                </h5>
            <p class="card-text">
            ${usearch.adresse}</p>
            <small class="text-muted">
            ${usearch.specialite}</small>
          </div>
         </div>
        `;
      })

      list.innerHTML = htmlString
    });























/*
const cleanupWord = word => {
    return word;
}

const filterData = word =>{
    return data.filter(item =>
        item.toLowerCase().includes
        (word));
}

const render = (word="") =>{
    list.innerHTML= "6
    ";


    word = cleanupWord(word);
    const filtered = filterData(word);



filtered.forEach(item => {
    list.instertAdjacentHTML("beforeend",`
   <li>${item.prenom}</li>
     <li>${item.nom}</li>
     <li>${item.specialite}</li>
     <li>${item.adresse}</li>

    `)
    
    
});


search.addEventListener("input",() => {
    render(search.value);
});

}

*/