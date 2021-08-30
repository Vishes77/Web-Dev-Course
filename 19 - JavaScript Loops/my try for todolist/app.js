let command = prompt("Enter a Value");
let todos = ["abc","efg"];
while(command !== "quit"){
    if(command == "list"){
        console.log("Currently List has :");
        for(let i of todos){
            console.log(i);
        }
        console.log("**************");
    }
    else if(command === "new"){
        let newtodo = prompt("Enter What you want to Add");
        todos.push(newtodo);
    }
    else if(command === "delete"){
        todos.pop();
    }
    command = prompt("Enter a Value");
}