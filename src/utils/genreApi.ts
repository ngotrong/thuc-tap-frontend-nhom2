import { ApiListResponse, Query } from "@/interfaces/interface";
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

// eslint-disable-next-line import/no-anonymous-default-export
export default new Genre();
