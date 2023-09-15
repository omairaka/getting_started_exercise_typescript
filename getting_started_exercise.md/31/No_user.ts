var users:string[]=["Omair ","Shahzain","Rahul","Admin","Afsar"];
for (var i=0;i<5;i++){
    users.splice(i);
}
if (users.length==0){
console.log("list is empty we need to find some users")}
else 
console.log("list is not empty");
