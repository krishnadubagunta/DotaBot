import heros from '../heros';

export const getHeroes = () => async dispatch => {
  dispatch({
    type: 'HEROES',
    payload: heros
  });
};

export const addHero = hero => async dispatch => {
  dispatch({
    type: 'ADD_HERO',
    payload: hero
  });
  dispatch({
    type: 'REMOVE_HERO_FROM_LIST',
    payload: hero
  });
};

export const addEnemy = hero => async dispatch => {
  dispatch({
    type: 'ADD_ENEMY',
    payload: hero
  });
  dispatch({
    type: 'REMOVE_HERO_FROM_LIST',
    payload: hero
  });
};

export const removeHero = hero => async dispatch => {
  dispatch({
    type: 'REMOVE',
    payload: { success: true }
  });
  dispatch({
    type: 'ADD_HERO_TO_LIST',
    payload: hero
  });
};
