/* eslint-disable */
export default function updateStudentGradeByCity(students, city, newGrades) {
    return students.filter((student) => student.location === city).map((student) => {
        const grade = newGrades.filter((newGrade) => newGrade.studentId === student.id)[0];
        if (grade) {
            student.grade = grade.grade;
        } else {
            student.grade = 'N/A';
        }
        return student;
    }
    );
}