import Api from "./api";

class PaymentApi {
  private baseUrl: string;
  constructor() {
    this.baseUrl = "/payment";
  }

  async handlePayment(data: any): Promise<ApiResponse<any>> {
    return Api.POST<ApiResponse<any>>(this.baseUrl, data);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new PaymentApi();
