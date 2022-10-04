const prompt = require('prompt-sync')({sigint: true});

let user_input = Number(prompt('Welcome to the To-Do List Manager Application \n~ Select an action ~\n[1] Create a to-do item\n[2] Complete a to-do item\n[3] Exit\n'))

console.log(user_input)

let done = false

let to_do_array = []

function show_to_do_list(){
    for(let x in to_do_array){
        console.log(Number(x)+1 + '. ' + to_do_array[x])
    }
}

while(!done){   
    if(user_input === 1){
        let user_to_do = prompt('What is this to-do item called?\n')
        to_do_array.push('[incomplete] ' + user_to_do)
        console.log(`You have ${to_do_array.length} item(s)`)
        show_to_do_list()
        user_input = Number(prompt('~ Select an action ~\n[1] Create a to-do item\n[2] Complete a to-do item\n[3] Exit\n'))
    }   else if(user_input === 2){
        let user_completed_item = Number(prompt('What item would you like to complete?\n'))
        if (user_completed_item <= to_do_array.length){
            option = to_do_array[user_completed_item -1]
            option = option.split(' ')
            option[0] = '[complete]'
            option = option.join(' ')
            to_do_array[user_completed_item -1] = option
            
            show_to_do_list()
            user_input = Number(prompt('~ Select an action ~\n[1] Create a to-do item\n[2] Complete a to-do item\n[3] Exit\n'))
        }   else {
            console.log('Error: Incorrect input.')
            show_to_do_list()
            user_input = Number(prompt('~ Select an action ~\n[1] Create a to-do item\n[2] Complete a to-do item\n[3] Exit\n'))
        }
    }   else if (user_input === 3){
        done = true
    }   else {
        console.log('Error: Incorrect input.')
        show_to_do_list()
        user_input = Number(prompt('~ Select an action ~\n[1] Create a to-do item\n[2] Complete a to-do item\n[3] Exit\n'))
    }

}