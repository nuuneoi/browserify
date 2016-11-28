import { mapGetters, mapActions } from 'vuex'

export const computed = mapGetters([
  'count',
  'recentHistory'
])

export const methods = mapActions([
  'increment'
])
