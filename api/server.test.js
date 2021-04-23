const request = require("supertest");
const server = require("./server.js");

describe("server", () => {
  describe("[GET] /api/data", () => {
    it("responds with 200 ok", async () => {
      const res = await request(server).get("/api/data");
      expect(res.status).toBe(200);
    });
    it("returns dummy with name of Deavy", async () => {
      let res;
      res = await request(server).get("/api/data");
      expect(res.body.name).toEqual("Deavy");
    });
  });
  describe("[POST] /api/skills", () => {
    it("resopnds with added skill", async () => {
      let res;
      res = await request(server).post("/api/skills").send({ skill: "React" });
      expect(res.body).toEqual("React");
    });
  });
});
