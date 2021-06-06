export function state() {
  return {
    retroMode: false
  };
};

export const mutations = {
  setRetroMode(state, value) {
    state.retroMode = value;
  }
};
