import hero_ids from '../hero_ids';

export default function recommendation(state = [], { type, payload }) {
  switch (type) {
    case 'RECOMMEND':
      const res = payload.data.map(id => {
        return hero_ids[`${id}`];
      });
      const totalData = { data: res, prob: payload.prob_x * 100 };
      return totalData;
    default:
      return state;
  }
}
