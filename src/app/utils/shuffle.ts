export default function shuffle<T>(arr: T[]): T[] {
  if (!arr.length) return [];

  const res = [...arr];
  let currentIndex = res.length;
  let randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [res[currentIndex], res[randomIndex]] = [
      res[randomIndex], res[currentIndex]];
  }

  return res;
}

