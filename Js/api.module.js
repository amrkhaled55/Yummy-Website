export class GetApiMeals{
async getAllMeals(){
    const url= await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    const response=await url.json();        
let {meals}=response;
return meals;
}
async getCatagories(){
        const url= await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");    
    const response=await url.json(); 
   let {categories}=response;

   return categories
}
async getSortCategories(id){
     const url= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`);    
    const response=await url.json(); 
let {meals}=response;
return meals;
}
async getAllAreas(){
        const url= await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    const response=await url.json();        
let {meals}=response;
return meals
}
async getAreaMeals(area){
        const url= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    const response=await url.json();            
let {meals}=response;
return meals
}
async getIngredient(){
            const url= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    const response=await url.json();            
let {meals}=response;
return meals
}
async getIntegradMeals(inti){
               const url= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inti}`);
    const response=await url.json();            
let {meals}=response;
return meals
}
async getDetailsMeal(id){
                const url= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const response=await url.json();            
let {meals}=response;
return meals
}
async getDetailSort(id){
const url= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
const response=await url.json();            
let {meals}=response;
return meals;
}
async getDetailsArea(id){
          const url= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const response=await url.json();            
let {meals}=response;
return meals;
}
async getDetailsIntegradints(id){
          const url= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const response=await url.json();            
let {meals}=response;
return meals;
}
async searchName(name){
           const url= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const response=await url.json();            
let {meals}=response;
return meals;
}
async searchLetter(name){
           const url= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${name}`);
    const response=await url.json();            
let {meals}=response;
return meals;
}
}