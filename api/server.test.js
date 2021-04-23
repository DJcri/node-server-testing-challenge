const request = require("supertest");
const server = require("./server.js");

describe("server", () => {
  describe("[GET] /api/data", () => {
    it("responds with 200 ok", async () => {
      const res = await request(server).get("/api/data");
      expect(res.status).toBe(200);
    });
    it("returns dummy", async () => {
      let res;
      res = await request(server).get("/api/data");
      expect(res.body).toHaveLength(1);
    });
  });
  describe("[POST] /api/skills", () => {
    it("resopnds with added skill", async () => {
      let res;
      res = await request(server).post("/api/skills").send("React");
      expect(res.body).toEqual("React");
    });
  });
});
