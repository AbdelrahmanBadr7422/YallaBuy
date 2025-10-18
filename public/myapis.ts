export class UrlsApi {
  // products
  prds = 'https://fakestoreapi.com/products';

  // Carts
  carts = 'https://fakestoreapi.com/carts';

  // Users
  user = 'https://fakestoreapi.com/users';

  // Auth
  login = 'https://fakestoreapi.com/auth/login';
}

export interface Product {
  // GET (all & single), POST, PUT
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string; //url
}

export interface Cart {
  // GET, POST, PUT
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string; //url
}

export interface User {
  // GET, POST, PUT
  id: string;
  username: string;
  email: string;
  password: string;
}

export interface Login {
  username: string;
  password: string;
}
