export default {
  getFoodCategories: () => ({
    path: '/v1/1/categories.php',
    method: 'GET'
  }),
  getFoodsByCategory: () => ({
    path: '/v1/1/filter.php',
    method: 'GET'
  }),
  getFoodDetail: () => ({
    path: '/v1/1/lookup.php',
    method: 'GET'
  }),
  getMovieList: () => ({
    path: '/movie/now_playing',
    method: 'GET'
  }),
};