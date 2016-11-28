export const increment = state => {
  state.count++
  state.history.push('increment')
}
