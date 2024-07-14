import {IArmyMap} from "../types/types";

const ArmiesMap = new Map<number, IArmyMap>([
  [1, { name: 'Войска Колдуна', squad_ids: [11, 12, 16, 17, 18, 23, 26, 27, 28, 29, 32, 35, 36, 37] }], // lion
  [2, { name: 'Легионеры Некроманта', squad_ids: [4, 5, 7, 13, 14, 15, 19, 20, 21, 30, 31, 33, 38, 44, 48, 49] }], // bet
  [3, { name: 'Гвардия Чародея', squad_ids: [1, 3, 6, 10, 22, 34, 39, 45, 46, 47] }], // fire
  [4, { name: 'Гильдия Вольных Стрелков', squad_ids: [2, 8, 9, 24, 25, 40, 41, 42, 43] }], // arrow
])

export default ArmiesMap;
