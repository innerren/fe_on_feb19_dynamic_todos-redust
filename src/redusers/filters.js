import { SET_FILTERS, APPLY_FILTER } from "../actions/pageActions";

const initialState = {
  filters: [],
  filtred: [],
};

export function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTERS:
      return {
        ...state,
        filters: action.filters.map((filter, index) => {
          return { name: filter, id: index, reversed: 0 };
        }),
      };

    case APPLY_FILTER:
      if (!action.filter) {
        return {
          ...state,
          filtred: [...action.arr],
        };
      }
      const tmp = [...state.filters];
      tmp[action.filter.id] = {
        ...tmp[action.filter.id],
        reversed: action.filter.reversed + 1,
      };
      const arrtmp = [...action.arr];

      const filtr = action.filter
        ? arrtmp.sort((a, b) => {
            a = String(a[action.filter.name]);
            b = String(b[action.filter.name]);
            return a.localeCompare(b);
          })
        : arrtmp;

      if (action.filter.reversed % 2) {
        return {
          ...state,
          filtred: filtr.reverse(),
          filters: [...tmp],
        };
      } else {
        return {
          ...state,
          filtred: [...filtr],
          filters: [...tmp],
        };
      }

    default:
      return state;
  }
}
