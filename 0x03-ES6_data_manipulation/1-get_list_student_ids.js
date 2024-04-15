export default function getListStudentIds(std) {
  if (!Array.isArray(std)) {
    return [];
  }

  return std.map((student) => student.id);
}
