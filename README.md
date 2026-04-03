# to-do list app

so this is my to-do list project for the assignment. its a REST API built with Node.js, Express and MongoDB. basically no frontend, you test it using Postman.

## what it does

- create tasks with a title and description
- view all tasks
- edit a task
- mark a task as completed (cant mark it again if already done)
- delete a task
- gives error messages if something is wrong like empty title or task not found

## how to run

first clone it

```bash
git clone https://github.com/Prabh0608/to-do.git
cd to-do
```

then install stuff

```bash
npm install
```

create a `config.env` file in the root and add your mongodb connection string

```
DATABASE=your_connection_string
PORT=8000
```

then just run

```bash
npm start
```

you should see "DB connection successful!" in the terminal if it works

## endpoints

base url is `http://localhost:8000/api/v1/task`

- POST `/` — create a task
- GET `/` — get all tasks
- PATCH `/:id` — edit a task
- PATCH `/:id/complete` — mark as completed
- DELETE `/:id` — delete a task

thats it basically. lmk if something doesnt work :)
