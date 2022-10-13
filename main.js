const prompt = require('prompt-sync')({signint: true});

console.log("~~Select an Action~~");
console.log("[1] Create a to-do list ");
console.log("[2] Complete a to-do item ");
console.log("[3] Remove Items from List ");
console.log("[4] Exit To-Do List Application ");


let option = Number(prompt("> "));
let toDoList = [];
let status = [];

while(option !== 4)
{
    if(option ==1){
        console.log("\nCreate a to-do list ");
        console.log("What do you need to do?")
        
        let addItem = prompt("> ");
        
        while(addItem.length === 0){
            console.log("Add items to list")
            addItem = prompt(">")
        }
        toDoList.push(addItem);
        status.push(false);
        
        displayList();

        selectOption();
    
    } else if (option === 2){
        console.log("Complete TO-DO Item");
        console.log("");
        console.log(" Which item would you like to modify");
        displayList();

        let newStatus = Number(prompt("> "));

        while(isNaN(newStatus) || newStatus > status.length || newStatus < 1) 
        {
            console.log("Please input a number that corresponds with an item in the list:  ");
            newStatus = Number(prompt("> "));
        }
        
        if (status[newStatus-1] === true){
            status[newStatus-1] = false;
        } else {
            status[newStatus-1]= true}
        
        displayList()
        selectOption();

        }

        else if (option === 3)

        {
            console.log("~Completing To-Do Item~");
            console.log("");
            console.log(" which item would you like to remove? ");
            
            displayList();
            
            let shortList = Number(prompt('> '));

            while(isNaN(shortList) || shortList < 0)
   
            {
   
                console.log("Please input a number that corresponds with an item in the list: ");
   
                shortList = Number(prompt('> '));
   
            }
            
            if (shortList > 0)
            
            {
            
                toDoList.splice(shortList-1, 1);
            
            }
            displayList()
        

            selectOption();
        
        } else
        
        { 
            console.log("invalid operation")
            
            selectOption();
        
        
        
        console.log('~ Exiting To-do List Application ~');
        }
        function selectOption()
        {
           console.log("~~Select an Action~~");
           console.log("[1] Create a to-do list ");
           console.log("[2] Complete a to-do item ");
           console.log("[3] Remove Items from List ");
           console.log("[4] Exit To-Do List Application ");
           option = Number(prompt('> '));
        }
         
        function displayList()
        {
            if(toDoList.length === 0)
            {
                console.log("Your to-do list is empty.");
                selectOption()
                
            } else 
            {
                console.log(`You have ${toDoList.length} to-do item(s)`);

            for(let i = 0; i < toDoList.length; i++)
        
            {
        
                let statusValue = "";
        
                if (status[i] === false)
        
                {
            
                    statusValue = "[INCOMPLETE]";
            
        
                } else if ( status[i] === true)
        
                {
            statusValue = "[COMPLETE]";
        
        }
        
    console.log(` ${i+1}. ${statusValue} ${toDoList[i]}`); 
    
    }

}
}
}