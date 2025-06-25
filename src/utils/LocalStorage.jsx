const employees = [
    {
      id: 1,
      firstName: "Ahmed",
      email: "employee1@example.com",
      password: "123",
      taskStats: {
        active: 1,
        newTask: 1,
        completed: 1,
        failed: 1
      },
      tasks: [
        {
          title: "Create Login Page",
          description: "Build a responsive login form using Tailwind CSS.",
          date: "2025-06-24",
          category: "Frontend",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Fix Navbar Bug",
          description: "Resolve dropdown issue in mobile navbar.",
          date: "2025-06-23",
          category: "Bug Fix",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Optimize Images",
          description: "Compress all assets in /public/images for faster loading.",
          date: "2025-06-21",
          category: "Performance",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ]
    },
    {
      id: 2,
      firstName: "Zainab",
      email: "employee2@example.com",
      password: "123",
      taskStats: {
        active: 1,
        newTask: 1,
        completed: 2,
        failed: 1
      },
      tasks: [
        {
          title: "Implement Dark Mode",
          description: "Add dark mode toggle using Tailwind's dark variant.",
          date: "2025-06-24",
          category: "UI Enhancement",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "404 Page Design",
          description: "Design and implement a custom 404 page.",
          date: "2025-06-22",
          category: "Design",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Update Footer Links",
          description: "Make sure all external links open in new tabs.",
          date: "2025-06-20",
          category: "Content",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Unit Test Signup Page",
          description: "Write tests using Jest for all form edge cases.",
          date: "2025-06-19",
          category: "Testing",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ]
    },
    {
      id: 3,
      firstName: "Hassan",
      email: "employee3@example.com",
      password: "123",
      taskStats: {
        active: 1,
        newTask: 1,
        completed: 1,
        failed: 1
      },
      tasks: [
        {
          title: "Refactor Sidebar",
          description: "Use reusable components for all sidebar items.",
          date: "2025-06-24",
          category: "Code Cleanup",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Add Lottie Animations",
          description: "Use Lottie for engaging empty state visuals.",
          date: "2025-06-22",
          category: "UI/UX",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Scroll Restoration",
          description: "Ensure scroll position is maintained after routing.",
          date: "2025-06-20",
          category: "UX",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ]
    },
    {
      id: 4,
      firstName: "Fatima",
      email: "employee4@example.com",
      password: "123",
      taskStats: {
        active: 1,
        newTask: 1,
        completed: 2,
        failed: 1
      },
      tasks: [
        {
          title: "Setup Tailwind Config",
          description: "Add custom colors and font family in tailwind.config.js.",
          date: "2025-06-24",
          category: "Setup",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Deploy to Vercel",
          description: "Host app using Vercel CI/CD pipeline.",
          date: "2025-06-21",
          category: "Deployment",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Fix Image Loader Bug",
          description: "Images not loading in Safari, investigate.",
          date: "2025-06-19",
          category: "Bug",
          active: false,
          newTask: false,
          completed: false,
         failed: true
        },
        {
          title: "Write Readme",
          description: "Document project setup and contribution guide.",
          date: "2025-06-18",
          category: "Documentation",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    },
    {
      id: 5,
      firstName: "Yusuf",
      email: "employee5@example.com",
      password: "123",
      taskStats: {
        active: 1,
        newTask: 1,
        completed: 1,
        failed: 1
      },
      tasks: [
        {
          title: "Build Contact Form",
          description: "Create a contact form with form validation.",
          date: "2025-06-24",
          category: "Forms",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "SEO Meta Tags",
          description: "Add title, description, and OG tags to all pages.",
          date: "2025-06-22",
          category: "SEO",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Convert CSS to Tailwind",
          description: "Replace old custom CSS with Tailwind utilities.",
          date: "2025-06-20",
          category: "Refactor",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ]
    }
  ];
  
  const admin = [ {
    id: 1,
    firstName: "Ali",
    email: "admin1@example.com",
    password: "123"
  },
  {
    id: 2,
    firstName: "Faizan",
    email: "admin2@example.com",
    password: "123"
  }];
  
  
export const setLocalStorage = ()=>{
    localStorage.setItem('Employees' , JSON.stringify(employees))
    localStorage.setItem('Admin' , JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('Employees'));
    const admin = JSON.parse(localStorage.getItem('Admin'));
    return {employees , admin}
}