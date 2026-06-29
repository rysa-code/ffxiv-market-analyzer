export type WorkerPoolOptions = {
  concurrency?: number;
  onTaskCompleted?: (completed: number, total: number) => void;
};

export class WorkerPool {
  static async execute<T>(
    tasks: Array<() => Promise<T>>,
    options: WorkerPoolOptions = {}
  ): Promise<T[]> {
    const concurrency = options.concurrency ?? 8;
    const total = tasks.length;

    const results = new Array<T>(total);

    let nextIndex = 0;
    let completed = 0;

    async function worker() {
      while (true) {
        const currentIndex = nextIndex++;

        if (currentIndex >= total) {
          return;
        }

        const result = await tasks[currentIndex]();

        results[currentIndex] = result;

        completed++;

        options.onTaskCompleted?.(completed, total);
      }
    }

    const workers = Array.from({ length: Math.min(concurrency, total) }, () => worker());

    await Promise.all(workers);

    return results;
  }
}
