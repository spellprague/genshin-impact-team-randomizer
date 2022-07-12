import { createStore } from 'solid-js/store';
import { GenshinCharacter } from '../types/types';

const preselectedCharacters: GenshinCharacter['id'][] = [
  4, 5, 18, 25, 41, 39, 28,
];

const [state, setState] = createStore('selectedCharacters', {
  selectedCharacters: preselectedCharacters,
});

export { state, setState };
