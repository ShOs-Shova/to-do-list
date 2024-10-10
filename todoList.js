const todoList=[
  {name: 'string',
    dueDate: '2024-09-08'
  },
  {name: 'string',
    dueDate: '2024-09-08'
  },
  
];
renderTodoList();
  function renderTodoList(){
    let todoListHTML='';
    todoList.forEach((todoObject,index)=>{
      // const todoObject=todoList[i];
      const {name,dueDate}=todoObject;
      
      const html=`<div>  ${name} </div>
        <div>    ${dueDate}  </div>
        <button class="delete-button js-delete-button">Delete</button>
      `;
      todoListHTML+=html;
    })
    // for(let i=0;i<todoList.length;i++){

    //   const todoObject=todoList[i];
    //   const {name,dueDate}=todoObject;
      
    //   const html=`<div>  ${name} </div>
    //     <div>    ${dueDate}  </div>
    
    //     <button onclick="
    //     todoList.splice(${i},1);
    //     renderTodoList();
    //   " class="delete-button"
    //   >Delete</button>
    //   `;
    //   todoListHTML+=html;
    // }

  document.querySelector('.js-todo-list').innerHTML=todoListHTML;
  document.querySelectorAll('.js-delete-button').forEach((deletebtn,index)=>{
    deletebtn.addEventListener('click',()=>{
      todoList.splice(index,1);
      renderTodoList();
    });
  });
  }
    
  

  document.querySelector('.js-add-button').addEventListener('click',()=>{
    addTodo();
  });

  function addTodo(){
    const inputElement=document.querySelector('.js-name-input');
    const name=inputElement.value;
    const dateInput=document.querySelector('.js-due-date-input');
    const dueDate=dateInput.value;
    todoList.push({
      name,
      dueDate
    }
    );

    inputElement.value='';
    renderTodoList();

  

  }
