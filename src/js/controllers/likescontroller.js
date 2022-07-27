import APICall from '../core/APICall.js';

export default class LikesControllers {
  #appid = 'ER4ZcRTbIpVq3LDi1zRK';

  #notionUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

  constructor() {
    this.getLikes();
  }

  sendLike = (movieID) => {
    const apiCall = new APICall(this.#notionUrl);
    return apiCall
      .postRequest(
        {
          item_id: movieID,
        },
        `apps/${this.#appid}/likes/`,
      )
      .then((outcome) => outcome)
      .catch((error) => error);
  };

  getLikes = () => {
    const apiCall = new APICall(this.#notionUrl);
    return apiCall
      .getRequestNoCors(`/apps/${this.#appid}/likes`)
      .then((res) => {
        this.likesArray = res;
        return res;
      })
      .catch((err) => err);
  };
}