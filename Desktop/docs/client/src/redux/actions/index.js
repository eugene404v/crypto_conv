export const login = (sortBy, category) => (dispatch) => {
    dispatch({
      type: 'SIGN_UP',
      payload: false,
    });
  
    axios
      .get(
        `/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
          sortBy.order
        }`,
      )
      .then(({ data }) => {
        dispatch(setPizzas(data));
      });
  };