document.addEventListener('DOMContentLoaded',()=>{
    const registerForm=document.getElementById('register-form');
    if(registerForm){
        registerForm.addEventListener('submit',(e)=>{
            e.preventDefault();
            const username=document.getElementById('username').value;
            const password=document.getElementById('password').value;
            localStorage.setItem('user',JSON.stringify({username,password}));
            alert('User successfully Registered');

        });
    }
    const loginForm=document.getElementById('login-form');
    if(loginForm){
        loginForm.addEventListener('submit',(e)=>{
            e.preventDefault();
            const username=document.getElementById('login-username').value;
            const password=document.getElementById('login-password').value;
            const user=JSON.parse(loacalStorage.getItem('user'));
            if(user && user.username===username && user.password===password){
                alert('login successfull');
            }
            else{
                alert('Invalid Details Given');
            }

        });
    }
    const uploadForm=document.getElementById('upload-form');
    if(uploadForm){
        uploadForm.addEventListener('submit',(e)=>{
            e.preventDefault();
            const fileInput=document.getElementById('file');
            if(fileInput.files.length>0){
                const file=fileInput.files[0];
                alert('Uploaded file:  ${file.name}');
            }
        });
    }
    const taskForm=document.getElementById('task-form');
    if(taskForm){
        taskForm.addEventListener('submit',(e)=>{
            e.preventDefault();
            const title=docccument.getElementById('task-title').value;
            const description=docccument.getElementById('task-description').value;
            const task={title,description};
            let tasks =JSON.parse(loacalStorage.getItem('tasks')) || [];
            tasks.push(task);
            localStorage.setItem('tasks',JSON.stringify(tasks));
            displayTasks();
        )};
    }
            function displayTasks(){
                const tasksList=document.getElementById('tasks-list');
                if(tasksList){
                    tasksList.innerHTML='';
                    const tasks=JSON.parse(localStorage.getItem('tasks')) || [];
                    tasks.forEach(task =>{
                         const taskDiv=document.createElement('div');
                         taskDiv.classList.add('task');
                         taskDiv.innerHTML='<h2>${task.title}</h2><p>${task.description}</p>';
                         tasksList.appendChild(taskDiv);
                    });
                }

            }
            if(document.getElementById('tasks-list')){
                displayTasks();
            }
});