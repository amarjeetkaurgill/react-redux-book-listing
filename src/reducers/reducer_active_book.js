/* A reducer always has its ow state. By degfault when the page will load then
 * no book will be selected. So we need to set state = null, to avoid the redux
 * error of 'undefined' state.
 * once the selected action will match then the payload object will be returned
 */
export default function (state = null, action) {
  switch (action.type) {
    case 'SELECTED_BOOK':
      return action.payload;
  }

  return state
}
