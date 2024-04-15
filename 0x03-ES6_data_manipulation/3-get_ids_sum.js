export default function getStudentIdsSum(std) {
  return std.reduce((sum, student) => sum + student.id, 0);
}
