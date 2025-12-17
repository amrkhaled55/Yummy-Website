export class Home {

    constructor(){}
    
    generateMealsGrid(data) {
    let html = "";
    for(let meal of data) {
        html += `
        <div class="col-md-6 col-lg-3">
            <div class="items position-relative overflow-hidden mt-3 rounded-2" data-id="${meal.idMeal}">
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="w-100 overflow-hidden"/>
                <div class="layer rounded-2 d-flex justify-content-center align-items-center">
                    <h4 class="h2">${meal.strMeal}</h4>
                </div>
            </div>
        </div>`;
    }
    return html;
}
displayMeals(data, container) {
    container.innerHTML = this.generateMealsGrid(data);
}
    displayCatagories(data , catagpriesRow){ 
        let containerCategory=``;
        data.map(cata=>{
            return containerCategory+=`  
            <div class="col-md-6 col-lg-3">
                <div class="items position-relative overflow-hidden mt-5 rounded-2 sorts" data-sort=${cata.strCategory}>
                    <img src="${cata.strCategoryThumb}" alt="${cata.strCategory}" class="w-100 rounded-3"/>
                    <div class="layer rounded-2 d-flex justify-content-center align-items-center flex-column p-3">
                        <h4 class="h2">${cata.strCategory}</h4>
                        <p class="fs-6 text-center">
                        ${cata.strCategoryDescription.length>30 
                        ? cata.strCategoryDescription.trim().slice(0,70) 
                        : cata.strCategoryDescription}
                        </p>
                    </div>
                </div>
            </div>`;
        })
        catagpriesRow.innerHTML=containerCategory;
    }
    displaySorts(data , sortsRow){        
        let containerSorts=``;
        for(let i=0;i<data.length;i++){
            containerSorts+=` 
            <div class="col-md-6 col-lg-3">
                <div class="items position-relative overflow-hidden mt-3 rounded-2" data-category='${data[i].idMeal}'>
                    <img src="${data[i].strMealThumb}" alt="${data[i].strMeal}" class="w-100  overflow-hidden"/>
                    <div class="layer rounded-2 d-flex justify-content-center align-items-center">
                        <h4 class="h2">${data[i].strMeal}</h4>
                    </div>
                </div>
            </div>`;
        }
        sortsRow.innerHTML=containerSorts;
    }

    displayAllAreas(data , areaRow){
        let containerAreas=``;
        for(let i=0;i<data.length;i++){
            containerAreas+=`
            <div class="col-sm-12 text-center col-md-6 col-lg-3">
                <div class="the-house ms-5 text-white the-area" data-area=${data[i].strArea}>
                    <i class="fa-solid fa-house-laptop"></i>
                    <h4 class="mt-3">${data[i].strArea}</h4>
                </div>
            </div>`;
        }
        areaRow.innerHTML=containerAreas;
    }

   displayAreaMeals(data, container) {
    container.innerHTML = this.generateMealsGrid(data);
}
    displayIntegradints(data,intgradientRow){
        let  newData= data.splice(0,20);
        let containerIntegradints=``; 
       for(let i=0;i<newData.length;i++){        
containerIntegradints+=` <div class="col-md-4 col-lg-3">   
<div class="IngredientsItems ms-4 text-center" data-integ=${newData[i].strIngredient}>
   <i class="fa-solid fa-drumstick-bite fa-2x"></i>
                        <h4 class="my-1">${newData[i].strIngredient}</h4>
                        <p>${newData[i].strDescription.trim().length>100?newData[i].strDescription.trim().slice(0,130):newData[i].strDescription}</p>
                   </div>
                        </div>`
       }
       intgradientRow.innerHTML=containerIntegradints;
     
    }
   displayIntegradintsMeals(data, container) {
    container.innerHTML = this.generateMealsGrid(data);
}
}
