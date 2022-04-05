export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Lap HP',
    price: 79000,
    description: 'High Speed Capacity,Nvida graphic card available, '
  },
  {
    id: 2,
    name: 'Lap DELL',
    price: 64000,
    description: '128 gb Ram,WiFi std supports'
  },
  {
    id: 3,
    name: 'Lap Acer ',
    price: 100000,
    description: 'High Storage,Memory'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/