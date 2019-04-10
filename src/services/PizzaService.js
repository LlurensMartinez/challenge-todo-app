import axios from 'axios';

class PizzaService {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:4000/api/v1',
    });
  }

  getAll() {
    return this.api.get('/api/v1/todos')
      .then(({data}) => data)
  }

  createPizza(body) {
    return this.api.post('/api/v1/todos', body)
      .then(({data}) => data)
  }

  // deleteTortilla(id) {
  //   return this.api.delete(`/${id}`)
  //     .then(({data}) => data)
  // }

  updatePizza(id) {
    return this.api.put(`/${id}/edit`)
      .then(({data}) => data)
  }

  getPost(id) {
    return axios({
      method: 'get',
      url: 'http://localhost:4000/api/v1',
      params: {id}
    })
  }

}



const pizzaService = new PizzaService();
export default pizzaService;