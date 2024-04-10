export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    if (error instanceof Error) {
      queue.push(`Error: ${error.message}`);
    } else {
      queue.push(error);
    }
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
