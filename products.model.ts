import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable()
export class ProductsModel {
  public data: any = [
    {
      p_id: '1',
      product_name: 'BMW 7 SERIES',
      product_price: '9900000',
      product_image:
        'https://www.vehiclehistory.com/evox_compressed/bmw/7-series/2020/13725/bmw-7-series-2020-159-13725-768.jpg',
    },
    {
      p_id: '2',
      product_name: 'AUDI Q7',
      product_price: '7000000',
      product_image:
        'https://imgd.aeplcdn.com/1200x900/cw/ec/26521/Audi-Q7-Right-Front-Three-Quarter-165498.jpg?wm=0&q=85',
    },
    {
      p_id: '3',
      product_name: 'LAND ROVER',
      product_price: '8900000',
      product_image:
        'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/a8/8b/97.jpg',
    },
  ];
}
