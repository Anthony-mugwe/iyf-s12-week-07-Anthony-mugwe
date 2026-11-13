// Day 4: Validate data and handle errors safely.
function parseTasks(jsonText) {
  try {
    const data = JSON.parse(jsonText);
    if (!Array.isArray(data)) throw new TypeError('Saved tasks must be an array.');
    return data;
  } catch (error) {
    console.error('Invalid task data:', error.message);
    return [];
  }
}
console.log(parseTasks('[{"id":1,"text":"Practise","completed":false}]'));
console.log(parseTasks('broken JSON'));
