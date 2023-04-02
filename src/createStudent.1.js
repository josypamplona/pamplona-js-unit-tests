function createStudent(estudante) {
  const feedback = 'Eita pessoa boa!';
  return {
    name: estudante,
    feedback: () => feedback,
  };
}
exports.createStudent = createStudent;
