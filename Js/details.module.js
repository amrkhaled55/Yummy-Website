export default class Details{
    constructor(){
    }
    displayDetails(data,detailsRow){
        let ingredientHtml=``;
        const meal=data[0];
        for(let i=1;i<9;i++){
const intg=meal[`strIngredient${i}`];
if(intg && intg.trim() !== ""){
ingredientHtml+=`<li>${intg}</li>`;
}
        }
        let containerHtml=``
containerHtml+=`<div class="col-lg-4">
                    <picture>
                        <img src="${meal.strMealThumb}" class="w-100 rounded-3" alt="${meal.strMeal}"/>
                    </picture>
                    <h2 class="mt-2">${meal.strMeal}</h2>
                </div>
                <div class="col-lg-8">
                    <div class="the-content">
                        <h3>Instructions</h3>
                        <p>${meal.strInstructions}</p>
                   <span class="h5 ms-2">Area : ${meal.strArea}</span>
                   <span class="d-block h5 ms-2">Category  : ${meal.strCategory}</span>
                    <h4 class="ms-3">Recpis:</h4>
                   <ul class="recpis d-flex flex-wrap">
                    ${ingredientHtml}
                   </ul>
                    <h4 class="ms-4 py-2 fw-light">Tags :${meal.strTags||""} </h4>
                   <ul class="tags d-flex">
                    <a target="_blank" href="${meal.strSource}"  class="btn btn-success">source</a>
                    <a target="_blank" href="${meal.strYoutube}"  class="btn btn-danger ms-2">Youtube</a>
                   </ul>
                    </div>
                </div>`
return detailsRow.innerHTML= containerHtml;
    }
    displayDetailsHome(data,detailsRow){
this.displayDetails(data,detailsRow);
    };
        displayDetailSorts(data,detailsRow){
this.displayDetails(data,detailsRow);
    };
    displayDetailsArea(data,detailsRow){
        this.displayDetails(data,detailsRow);

    };
      displayDetailsInteg(data,detailsRow){
        this.displayDetails(data,detailsRow);
    }
}