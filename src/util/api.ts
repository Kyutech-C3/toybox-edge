/**
 * OGPに必要な属性のみ型定義している
 */
export interface Work {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    id: string;
    extension: string;
    url: string;
  };
}

/**
 * OGPに必要な属性のみ型定義している
 */
export interface User {
  id: string;
  name: string;
  display_name: string;
  avatar_url?: string;
  profile?: string;
  created_at: string;
}

/**
 *
 */
export class ApiClient {
  API_ENDPOINT: string;

  constructor(API_ENDPOINT: string) {
    this.API_ENDPOINT = API_ENDPOINT;
  }

  async #get<T>(path: string): Promise<T> {
    const url = this.API_ENDPOINT + path;
    console.debug("fetch api: ", url);
    const res = await fetch(url);
    if (res.status !== 200) {
      throw Error(`Error occured ${res.statusText}`);
    }

    const body = await res.json();
    return body as T;
  }

  // public
  async getWork(id: string) {
    const work = await this.#get<Work>(`/api/v1/works/${id}`);
    return work;
  }

  // private
  async getUser(id: string) {
    const user = await this.#get<User>(`/api/v1/users/${id}`);
    return user;
  }
}
