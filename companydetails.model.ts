import { Injectable } from '@angular/core';

@Injectable()
export class CompanyDetailsModel {
  public companyInfo: any = {
    name: 'AUTOMOBLIE MANAGEMENT SYSTEM',
    address: 'No: 12,OMR Road',
    city: 'Chennai',
    pincode: '600045',
    email: 'customer.care@automoblie.com',
    phone: '6300633054',
  };
}
