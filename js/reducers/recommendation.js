import hero_ids from '../hero_ids';

export default function recommendation(state = [], { type, payload }) {
  switch (type) {
    case 'RECOMMEND':
      const res = payload.data.map(id => {
        return hero_ids[`${id}`];
      });
      return res;
    default:
      return state;
  }
}
