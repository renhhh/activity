import router from './router'

router.beforeEach(async (to, from, next) => {
  let hasToken = sessionStorage.getItem('mobile')
  if (!hasToken &&  to.path !== '/') {
    next('/')
  } else {
    next()
  }
})
