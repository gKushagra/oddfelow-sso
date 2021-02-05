const { describe } = require("mocha");
var request = require("supertest");
var app = require("./../server");

describe("GET /test", function () {
  it("respond with welcome message", function (done) {
    // navigate to /test and check response has welcome message
    request(app)
      .get("/test")
      .expect(
        "Hi! You have reached OddFellow SSO REST API Test endpoint",
        done
      );
  });
});
