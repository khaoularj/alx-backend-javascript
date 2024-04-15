export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.map((student) => {
    if (student.location !== city) {
      return student;
    }
    const matchedGrade = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: matchedGrade ? matchedGrade.grade : 'N/A',
    };
  });
}
