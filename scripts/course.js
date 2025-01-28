/*One of the things I'm learning from this is to separate the functions
Here we have a function that takes in charge of filtering and another for rendering */

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.head-nav');
const headerTitle = document.querySelector('.header-h1');

// Hamburger menu logic
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    headerTitle.classList.toggle('hide'); // Hide the title when the hamburger is open
});

// Courses array
const courses = [
    
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];

const courseContent = document.querySelector('.course-content');
const viewAll = document.querySelector('#view-all');
const onlyCse = document.querySelector('#only-cse');
const onlyWdd = document.querySelector('#only-wdd');

// Helper function to render courses
function renderCourses(filteredCourses) {
    courseContent.innerHTML = ''; // Clear previous content
    filteredCourses.forEach(course => {
        const classAttribute = course.completed ? 'completed' : 'uncompleted';
        if (course.completed){
            completedSymbol = '✔';
        }
        else {
            completedSymbol = '';
        }
        
        const courseInfo = `
            <p class="${classAttribute}"> ${completedSymbol} ${course.subject}${course.number}: ${course.title}</p>`;
        courseContent.innerHTML += courseInfo; // Append content
    });
}

// View all courses
viewAll.addEventListener('click', () => {
    renderCourses(courses);
});
// View only CSE courses
onlyCse.addEventListener('click', () => {
    const filteredCourses = courses.filter(course => course.subject === 'CSE');
    renderCourses(filteredCourses);
});

// View only WDD courses
onlyWdd.addEventListener('click', () => {
    const filteredCourses = courses.filter(course => course.subject === 'WDD');
    renderCourses(filteredCourses);
});

//setting all to default
renderCourses(courses);
