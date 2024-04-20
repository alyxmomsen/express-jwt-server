class MyResponse {
  /**
   *
   * @param {*} payload
   */

  // use(payload) {
  //   this.payloads.push(payload);
  // }

  /**
   *
   * @param {boolean} status
   * @param {string} message
   * @param {MyPayload|null} payload
   */

  constructor(status, message, payload) {
    this.status = status;
    this.message = message;
    this.payload = payload;
  }
}

class MyPayload {
  /**
   * @description this is description
   *
   * @param {string} descriptor this descriptor explains the meaning of this data
   * @param {any} body any content
   */

  constructor(descriptor, body) {
    this.descriptor = descriptor;
    this.body = body;
  }
}

module.exports = {
  MyPayload,
  MyResponse,
};
