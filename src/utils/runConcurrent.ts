export async function runConcurrent<T>(
  tasks: Array<() => Promise<T>>,
  concurrency: number,
  onCompleted?: (completed: number, total: number) => void
): Promise<T[]> {
  const results: T[] = new Array(tasks.length);

  let index = 0;
  let completed = 0;

  async function worker() {
    while (true) {
      const current = index++;

      if (current >= tasks.length) {
        return;
      }

      results[current] = await tasks[current]();

      completed++;
      onCompleted?.(completed, tasks.length);
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, tasks.length) }, worker));

  return results;
}
