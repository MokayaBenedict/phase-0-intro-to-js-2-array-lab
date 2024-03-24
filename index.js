const cats = ["Milo", "Otis","Garfield",];// Write your solution here!
function destructivelyAppendCat(name){
cats.push(name)}
function destructivelyAppendCat(name){
cats.unshift(name);}
function destructivelyRemoveLastCat(){
cats.shift()}
function appendCat(name){
 return[...cats,name]}
function prependCat(name){
return ["Arnold", ...cats]}
function removeLastCat(name){
return cats.slice(0,2);}
function removeFirstCat(name){
return cats.slice(1,3);}

