RESTful API – Refactor & Follow Standards
 Improved API design and RESTful route structure for task manager

 i created task manager backend app and followed the restful standards
 << Routes

>> User Routes

post("/register", validate, regValidate);  for registerartion or sign up

post("/login", loginValidate);  for sign in or login

get("/profile", profile ) for viewing profile or account after sign in

>> Task Routes  these routes are only for logged in usera
 
post("/task", auth, postTask )  for creating task

get("/task", auth, getTask )    for viewing task

get("/task/:id", auth, getTaskId )  for viewing task by id

put("/task/:id", auth, putTask )    for updating or task

patch("/task/:id", auth, putTask )  for modifying task

delete("/task/:id", auth, delTask)  for deleting task


