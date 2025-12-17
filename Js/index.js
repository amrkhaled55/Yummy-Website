import { GetApiMeals } from "./api.module.js";
import { Home } from "./ui.module.js";
import Details from "./details.module.js";
// !!Html Elements
const closeIcon=document.getElementById("close");
const barIcon=document.getElementById("bar");
const sideLeft=document.querySelector(".side-left");
const catagoryNav=document.getElementById("catagory");
const homePage=document.querySelector(".home");
const categoryPage=document.querySelector(".categories");
const sortsPage=document.querySelector(".sortOfCatagorious");
const areaNav=document.getElementById("area");
const areaPage=document.querySelector(".area");
const catagpriesRow=document.querySelector(".all-categories");
const mealsRow=document.querySelector(".all-meals");
const sortsRow=document.querySelector(".all-sorts");
const areaRow=document.querySelector(".all-areas");
const areamealsRow=document.querySelector(".all-areaMeals");
const areaSortPage=document.querySelector(".areaMeals");
const ingredientsNav=document.getElementById("Ingredients");
const ingredientsPage=document.querySelector(".Ingredients");
const intgradientRow=document.querySelector(".Ingredients .row");
const integradientMealPage=document.querySelector(".integrediensMeals");
const integradMealRow=document.querySelector(".integrediensMeals .row");
const detailsPage=document.querySelector(".details");
const detailsRow=document.querySelector(".details .row");
const searchNav=document.getElementById("search")
const theSearchPage=document.querySelector(".inputs");
const searchName=document.getElementById("searchName");
const searchLetter=document.getElementById("searchLetter");
const spinner=document.querySelector(".loader");
const logo=document.querySelector(".logo");
// ^^^the objects^^^^^
let apiMeals=new GetApiMeals();
const homeMeals=new Home();
const allDetails=new Details()
// ????functions??????
function showSideBar(){
    sideLeft.classList.add("open");
    sideLeft.classList.remove("close");
    barIcon.classList.add("d-none");
    closeIcon.classList.remove("d-none");
}
function hideSidBar(){
    sideLeft.classList.add("close");
    sideLeft.classList.remove("open");
    barIcon.classList.remove("d-none");
    closeIcon.classList.add("d-none");
}
function hideAllPages(){
    homePage.classList.add("d-none");
    categoryPage.classList.add("d-none");
    areaPage.classList.add("d-none");
    sortsPage.classList.add("d-none");
    areaSortPage.classList.add("d-none");
    ingredientsPage.classList.add("d-none");
    integradientMealPage.classList.add("d-none");
    detailsPage.classList.add("d-none");
    theSearchPage.classList.add("d-none")
}
function hideSpinner(){
    spinner.classList.add("d-none");
}
function showSpinner(){
    spinner.classList.remove("d-none");
}
// todo Events
window.addEventListener("load",async ()=>{
    showSpinner();
    const data= await apiMeals.getAllMeals();
    hideSpinner();
    homeMeals.displayMeals(data , mealsRow);
})

barIcon.addEventListener("click",showSideBar);
closeIcon.addEventListener("click",hideSidBar);

catagoryNav.addEventListener("click",async()=>{
    hideSidBar();
    hideAllPages();
    categoryPage.classList.remove("d-none");
    showSpinner();
    const dataCatagory= await apiMeals.getCatagories();
    hideSpinner();
    homeMeals.displayCatagories(dataCatagory , catagpriesRow);
})

catagpriesRow.addEventListener("click",async (e)=>{   
    if(e.target.closest(".sorts")){
        const nameSort=e.target.closest(".sorts").dataset.sort;
        hideAllPages();
        sortsPage.classList.remove("d-none")
        showSpinner();
        const dataSorts=await apiMeals.getSortCategories(nameSort);
        hideSpinner();
        homeMeals.displaySorts(dataSorts , sortsRow);
    }
})

areaNav.addEventListener("click",async ()=>{
    hideSidBar();
    hideAllPages();
    areaPage.classList.remove("d-none")
     showSpinner();
    const dataAreas=await apiMeals.getAllAreas();
      hideSpinner();
    homeMeals.displayAllAreas(dataAreas , areaRow);
})

areaRow.addEventListener("click", async(e)=>{   
    if(e.target.closest(".the-area")){
        const areaSet=e.target.closest(".the-area").dataset.area;
        hideAllPages();
        areaSortPage.classList.remove("d-none")
         showSpinner();
        const dataAres= await apiMeals.getAreaMeals(areaSet);
          hideSpinner();
        homeMeals.displayAreaMeals(dataAres , areamealsRow);
    }
})
ingredientsNav.addEventListener("click",async()=>{
    hideSidBar();
    hideAllPages();
    ingredientsPage.classList.remove("d-none");
     showSpinner();
    const dataInteg=await apiMeals.getIngredient();
      hideSpinner();
    homeMeals.displayIntegradints(dataInteg,intgradientRow);
})
intgradientRow.addEventListener("click",async (e)=>{
if(e.target.closest(".IngredientsItems")){
    hideAllPages();
    integradientMealPage.classList.remove("d-none")
const ingredient= e.target.closest(".IngredientsItems").dataset.integ;
 showSpinner();
homeMeals.displayIntegradintsMeals(await apiMeals.getIntegradMeals(ingredient),integradMealRow);
  hideSpinner();
}
})
mealsRow.addEventListener("click",async(e)=>{
if(e.target.closest(".items")){
    hideAllPages();
    detailsPage.classList.remove("d-none")
const mealId=e.target.closest(".items").dataset.id;
showSpinner();
allDetails.displayDetailsHome(await apiMeals.getDetailsMeal(mealId),detailsRow);
hideSpinner();
}
});
sortsRow.addEventListener("click",async(e)=>{
    if(e.target.closest(".items")){
    hideAllPages();
    detailsPage.classList.remove("d-none");
const mealId=e.target.closest(".items").dataset.category;
showSpinner();
allDetails.displayDetailSorts(await apiMeals.getDetailSort(mealId),detailsRow);
hideSpinner();
}
});
areamealsRow.addEventListener("click",async(e)=>{
      if(e.target.closest(".items")){
    hideAllPages();
    detailsPage.classList.remove("d-none");
    const areaId=e.target.closest(".items").dataset.id ;
    console.log(areaId);
    
    showSpinner();
    allDetails.displayDetailsArea( await apiMeals.getDetailsArea(areaId),detailsRow);
    hideSpinner();
}});
integradMealRow.addEventListener("click", async(e)=>{
        if(e.target.closest(".items")){
    hideAllPages();
    detailsPage.classList.remove("d-none");
    const areaId=e.target.closest(".items").dataset.id ;
    showSpinner();
     allDetails.displayDetailsInteg( await apiMeals.getDetailsArea(areaId),detailsRow);
     hideSpinner();
}});
searchNav.addEventListener("click",()=>{
    hideSidBar();
    hideAllPages();
    theSearchPage.classList.remove("d-none");
});
searchName.addEventListener("input", async (e) => {
    const term = searchName.value.trim(); 
    showSpinner(); 
    const data = await apiMeals.searchName(term);
    hideSpinner();
   if(data){
    homeMeals.displayMeals(data, mealsRow);
    homePage.classList.remove("d-none");
   }
    if(term==""){
    mealsRow.innerHTML="";
        homePage.classList.add("d-none");

  }
});
searchLetter.addEventListener("beforeinput", async (e) => {
    if (e.inputType === "deleteContentBackward") {
        return;
    }   
     if (searchLetter.value.length >= 1) {
                e.preventDefault();
    
    }
});
searchLetter.addEventListener("input", async()=>{
        const term=searchLetter.value;
        showSpinner();
            const data = await apiMeals.searchName(term);
            hideSpinner();
 if(data){
    homeMeals.displayMeals(data, mealsRow);
    homePage.classList.remove("d-none");
   }

    })

logo.addEventListener("click",()=>{
    window.location = "./home.html";
})