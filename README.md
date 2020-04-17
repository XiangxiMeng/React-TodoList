This project builds on create-react-app framework.

## Update

Add onClick to the button in TodoForm.js

Merge TodoList and DoneList into List

Change the way state updated:

    this.setState(preState => ({
        todoItems: ...
        doneItems: ...
    }))

## Function

Type your task and enter (or click Add), your task will hang in "Scheduled".

Click a task in "Scheduled" and it will be moved to "Completed".

Click a task in "Completed" then it will be removed.

## File Structure

    TodoApp
        TodoForm 
        TodoList
            ListItem 1
            ListItem 2
            ...
        DoneList
            ListItem 3
            ListItem 4
            ...