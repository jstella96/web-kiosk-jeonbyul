export class CreateOrderDto {
  foods: [
    {
      orderHistoryId: any;
      foodId: number;
      foodName: string;
      unit: 5;
      options: {
        size: string;
        temperature: string;
      };
      eachPrice: number;
    },
  ];
  payment: string;
  date: string;
}
