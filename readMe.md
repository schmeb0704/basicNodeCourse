# NOTES

## Event Loop

This is what allows Node.js to perform non-blocking I/O operations by offloading operations to the system kernel whenever possible

## JavaScript is Synchronous and Single Threaded

It means JS reads everything line by line

## Node.JS Event Loop

registers the task to ther back-end, not executing right away, and only executes the task once the operation is done. Node is doing this so that the tasks are simultaneously done. Async codes technically goes to the last place of Node's to-do list and only gets executed once all immediate code are executed

Check 11-fsAsyncModule for example
