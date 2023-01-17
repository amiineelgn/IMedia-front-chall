import puppeteer from "puppeteer";

describe("index.tsx", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("contains pokemons list", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector(".main-list");
    const list = await page.$eval(".main-list", (e) => e);
    expect(list).toContain(<PokemonList />);
  });

  afterAll(() => browser.close());
});