const supertest = require("supertest");

const server = require("./api/server");
const db = require("./database//dbConfig");

beforeAll(async () => {
  await db.seed.run();
});

// afterAll(async (done) => {
//   // console.log(db.close)
//   // await db.close()
//   process.exit
//   done();
// })

describe("Auth Tests", () => {
  test("Sanity Check", async () => {
    expect(2 + 2).toBe(4);
  });

  test("Welcome Route", async () => {
    const supertestServer = supertest(server);
    await supertestServer
      .get("/")
      .expect(200)
      .expect("Content-Length", "20")
      .expect("Content-Type", /json/);
  });

  test("Login Route Returns Token", async () => {
    const supertestServer = supertest(server);
    const res = await supertestServer
      .post("/api/auth/login")
      .send({ username: "derrick1", password: "asdf" });
    expect(res.body.token).toBeTruthy();
  });

  test("Token From Login Valid", async () => {
    const supertestServer = supertest(server);
    const loginRes = await supertestServer
      .post("/api/auth/login")
      .send({ username: "derrick1", password: "asdf" });
    const token = loginRes.body.token;
    const jokeRes = await supertestServer
      .get("/api/jokes")
      .set({ authorization: token, Accept: "application/json" });
    expect(jokeRes.body).toHaveLength(20);
  });

  test("Register Returns Newly Created User", async () => {
    const username = "derrick4";
    const supertestServer = supertest(server);
    const registerRes = await supertestServer
      .post("/api/auth/register")
      .send({ username, password: "asdf" });
    expect(registerRes.body.newUser.username).toBe(username);
  });
  test("Register Throws Error When Registering non-unique username", async () => {
    const username = "derrick1";
    const supertestServer = supertest(server);
    const res = await supertestServer
      .post("/api/auth/register")
      .send({ username, password: "asdf" });
    expect(res.status).toBe(400);
    expect(res.body.err).toBeTruthy();
  });

  test("Username and Password need to be filled out", async () => {
    const supertestServer = supertest(server);
    const res = await supertestServer
      .post("/api/auth/register")
      .send({ username: "derrick1" });
    expect(res.status).toBe(400);
  });
});
