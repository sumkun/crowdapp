import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // title = 'Google Pay Demo';

  // paymentRequest: google.payments.api.PaymentDataRequest = {
  //   apiVersion: 2,
  //   apiVersionMinor: 0,
  //   allowedPaymentMethods: [
  //     {
  //       type: 'CARD',
  //       parameters: {
  //         allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
  //         allowedCardNetworks: ['VISA', 'MASTERCARD']
  //       },
  //       tokenizationSpecification: {
  //         type: 'PAYMENT_GATEWAY',
  //         parameters: {
  //           gateway: 'example',
  //           gatewayMerchantId: 'exampleGatewayMerchantId'
  //         }
  //       }
  //     }
  //   ],
  //   merchantInfo: {
  //     merchantId: '12345678901234567890',
  //     merchantName: 'Demo Merchant'
  //   },
  //   transactionInfo: {
  //     totalPriceStatus: 'FINAL',
  //     totalPriceLabel: 'Total',
  //     totalPrice: '10',
  //     currencyCode: 'INR',
  //     countryCode: 'IN'
  //   },
  //   callbackIntents: ['PAYMENT_AUTHORIZATION']
  // };

  // onLoadPaymentData = (
  //   event: Event
  // ): void => {
  //   const eventDetail = event as CustomEvent<google.payments.api.PaymentData>;
  //   console.log('load payment data', eventDetail.detail);
  // }

  // onPaymentDataAuthorized: google.payments.api.PaymentAuthorizedHandler = (
  //   paymentData
  //   ) => {
  //     console.log('payment authorized', paymentData);
  //     return {
  //       transactionState: 'SUCCESS'
  //     };
  //   }

  // onError = (event: ErrorEvent): void => {
  //   console.error('error', event.error);
  // }
}

