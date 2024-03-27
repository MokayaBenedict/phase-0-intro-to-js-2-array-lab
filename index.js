
const cats = ["Milo", "Otis","Garfield",];// Write your solution here!
function destructivelyAppendCat(){
cats.push("Ralph");
}
function destructivelyPrependCat(){
cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
cats.pop();}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(){
const NewCats =[...cats,"Broom"];
return NewCats;
}
function prependCat(){
const NewCats =["Arnold",...cats];
return NewCats;}
function removeLastCat(){
return cats .slice (0,2);}
function removeFirstCat(){
return cats .slice(1,3);
}








