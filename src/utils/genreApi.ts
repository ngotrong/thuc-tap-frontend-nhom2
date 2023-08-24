import Api from "./api";

class Genre {
  private baseUrl: string;
  constructor() {
    this.baseUrl = "/genre";
  }

  async getListGenre(query: Query): Promise<ApiListResponse<any>> {
    return Api.GET<ApiListResponse<any>>(this.baseUrl);
  }
}

export default new Genre();
