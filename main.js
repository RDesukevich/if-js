const studentsData = [
    {
        firstName: 'Василий',
        lastName: 'Петров',
        admissionYear: 2019,
        courseName: 'Java',
    },
    {
        firstName: 'Иван',
        lastName: 'Иванов',
        admissionYear: 2018,
        courseName: 'JavaScript',
    },
    {
        firstName: 'Александр',
        lastName: 'Федоров',
        admissionYear: 2017,
        courseName: 'Python',
    },
    {
        firstName: 'Николай',
        lastName: 'Петров',
        admissionYear: 2019,
        courseName: 'Android',
    }
];

class User {
    constructor(firstName, lastName, fullName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
}

class Student extends User {
    constructor(firstName, lastName, fullName, admissionYear, courseName, course) {
        super(firstName, lastName, fullName);
        this.admissionYear = admissionYear;
        this.courseName = courseName;
        this.course = new Date().getFullYear() + ' - ' + admissionYear;
    }
}

function Students(students) {
    students = new Student();
}

const data = new Date().getFullYear();
Students.prototype.getInfo = function () {
    const allCountry = studentsData.reduce((acc, item) => {
        return `${item.firstName} ${item.lastName} - ${item.courseName}, ${data - item.admissionYear} курс`
    });
    return allCountry;
}
studentsData.sort();
const students = new Students(studentsData);
console.log(students.getInfo());