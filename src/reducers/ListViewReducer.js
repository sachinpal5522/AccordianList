function reducer(state, action) {
  const { type, payload } = action;
  let newState = { ...state };
  switch (type) {
    case "accordian-clicked":
      newState.opendAccordian =
        state.opendAccordian == payload.id ? null : payload.id;
      break;
    case "delete":
      let newList = state.allCelebrities.filter((celeb) => {
        return celeb.id != payload.id;
      });
      newState.allCelebrities = newState.searchedCelebrities = newList;
      break;
    case "search":
      let filteredList = state.allCelebrities.filter((celeb) => {
        return (
          `${celeb.first} ${celeb.last}`
            .toLowerCase()
            .indexOf(payload.value.toLowerCase()) > -1
        );
      });
      newState.searchedCelebrities = filteredList;
      break;
    case "save":
      let updatedList = state.allCelebrities.map((celeb) => {
        if (celeb.id == payload.id) {
          celeb = { ...celeb, ...payload };
        }
        return celeb;
      });
      newState.allCelebrities = newState.searchedCelebrities = updatedList;
      break;
    default:
      break;
  }
  return newState;
}

export default reducer;
