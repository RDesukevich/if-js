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
    constructor({firstName, lastName, fullName, admissionYear, courseName, course}) {
        super(firstName, lastName, fullName);
        this.admissionYear = admissionYear;
        this.courseName = courseName;
        this.course = new Date().getFullYear() + -  + admissionYear;
    }
}


class Students {
    constructor(studentsArray){
        this.students = studentsArray.map(
            (student)=>{
                return new Student ({
                    firstName:student.firstName,
                    lastName: student.lastName,
                    admissionYear: student.admissionYear,
                    courseName: student.courseName
                })
            })
    }

    getInfo() {
        this.students.sort((a, b) => a.course - b.course);
        console.log(
            this.students.map(
                (item) => `${item.fullName} -  ${item.courseName}, ${item.course} курс `
            )
        );
    }
}

const students = new Students(studentsData);
students.getInfo();