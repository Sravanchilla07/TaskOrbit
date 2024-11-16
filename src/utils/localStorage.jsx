const employees = [
  {
    "id": 1,
    "email": "e@e.com",
    "password": "123",
    "firstName": "Arjun",
    "tasks": [
      {
        "taskTitle": "Complete report",
        "taskDescription": "Finish the monthly financial report",
        "taskDate": "2024-11-10",
        "category": "Finance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Team meeting",
        "taskDescription": "Discuss project updates and blockers",
        "taskDate": "2024-11-11",
        "category": "Meeting",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "firstName": "Lakshmi",
    "tasks": [
      {
        "taskTitle": "Client feedback",
        "taskDescription": "Review client feedback on recent project",
        "taskDate": "2024-11-10",
        "category": "Feedback",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Presentation",
        "taskDescription": "Prepare slides for next week's presentation",
        "taskDate": "2024-11-12",
        "category": "Planning",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "firstName": "Ravi",
    "tasks": [
      {
        "taskTitle": "Inventory check",
        "taskDescription": "Verify stock levels in warehouse",
        "taskDate": "2024-11-10",
        "category": "Logistics",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Training session",
        "taskDescription": "Conduct training for new hires",
        "taskDate": "2024-11-13",
        "category": "HR",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "firstName": "Meera",
    "tasks": [
      {
        "taskTitle": "System audit",
        "taskDescription": "Perform an internal audit on IT systems",
        "taskDate": "2024-11-11",
        "category": "IT",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Documentation",
        "taskDescription": "Update internal documentation",
        "taskDate": "2024-11-14",
        "category": "Documentation",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    }
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "firstName": "Vikram",
    "tasks": [
      {
        "taskTitle": "Product testing",
        "taskDescription": "Test the new product for QA",
        "taskDate": "2024-11-10",
        "category": "Quality Assurance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Market research",
        "taskDescription": "Analyze market trends",
        "taskDate": "2024-11-15",
        "category": "Research",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    }
  } 
];

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];



 
  


  export const setLocalStorage=()=>{
        localStorage.setItem('employees',JSON.stringify(employees))
        localStorage.setItem('admin',JSON.stringify(admin))
  }

  export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    
    return {employees,admin}
  }