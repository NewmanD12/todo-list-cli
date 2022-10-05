const prompt = require('prompt-sync')({sigint: true});

function show_to_do_list(){
    console.log(`You have ${to_do_array.length} item(s)`)
    for(let x in to_do_array){
        console.log(Number(x)+1 + '. ' + to_do_array[x])
    }
}

function flip_status(string_){
    string_ = string_.split(' ')
    if(string_[0].length === 10){
        string_[0] = '[incomplete]'
    } else if(string_[0].length === 12){
        string_[0] = '[complete]'
    }
    string_ = string_.join(' ')
    return string_
}

function show_prompt(){
    user_prompt = Number(prompt('~ Select an action ~\n[1] Create a to-do item\n[2] Switch status of a to-do item\n[3] Edit a to-do item\n[4] Delete a to-do item\n[5] Exit\n> '))
    
    return user_prompt
}

function edit_item(string_){
    res = ''
    user_edit = prompt('What would you like your new to-do to say?\n> ')
    res += string_.split(' ')[0]
    res += ' ' + user_edit
    return res
}

function delete_item(num1){
    to_do_array.splice(num1,1)
    return to_do_array
}

let user_input = show_prompt()

let done = false

let to_do_array = []

while(!done){   
    if(user_input === 1){
        let user_to_do = prompt('What is this to-do item called?\n> ')
        to_do_array.push('[incomplete] ' + user_to_do)        
        show_to_do_list()
        user_input = show_prompt()
    }   else if(user_input === 2){
            let user_completed_item = Number(prompt('What item would you like to complete?\n> '))
            if (user_completed_item <= to_do_array.length){
                to_do_array[user_completed_item -1] = flip_status(to_do_array[user_completed_item -1])            
                show_to_do_list()
                user_input = show_prompt()
            }   else {
                console.log('Error: Incorrect input.')
                show_to_do_list()
                user_input = show_prompt()
            }
    }   else if(user_input === 3){
            let item_to_edit = Number(prompt('Which item would you like to edit?\n> '))
            if (item_to_edit <= to_do_array.length){
                to_do_array[item_to_edit -1] = edit_item(to_do_array[item_to_edit - 1])
                show_to_do_list()
                user_input = show_prompt()
            }   else {
                console.log('Error: Incorrect input.')
                show_to_do_list()
                user_input = show_prompt()
            }
    }   else if(user_input === 4){
            let item_to_delete = Number(prompt('Which item would you like to delete?\n> '))
            if (item_to_delete <= to_do_array.length){
                to_do_array = delete_item(item_to_delete -1)
                show_to_do_list()
                user_input = show_prompt()

            }   else{
                console.log('Error: Incorrect input.')
                show_to_do_list()
                user_input = show_prompt()
            }


    }   else if (user_input === 5){
            done = true
    }   else {
            console.log('Error: Incorrect input.')
            show_to_do_list()
            user_input = show_prompt()
    }

}

console.log('Thank you for using the To-Do List Manager App!')