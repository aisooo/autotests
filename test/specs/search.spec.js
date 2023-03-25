const assert = require("chai").assert;

describe("Client search", function () {
  it("should display matching clients when a search term is entered", async function () {
    await browser.url("/clients");
    const searchInput = await $('input[type="search"]');
    await searchInput.setValue("John");
    const searchButton = await $('button[type="submit"]');
    await searchButton.click();
    const clientList = await $("ul.client-list");
    const clients = await clientList.$$("li");
    for (let i = 0; i < clients.length; i++) {
      const clientName = await clients[i].$("h3");
      assert.include(await clientName.getText(), "John");
    }
  });

  it("should display all clients when the search term is cleared", async function () {
    await browser.url("/clients");
    const searchInput = await $('input[type="search"]');
    await searchInput.setValue("John");
    const searchButton = await $('button[type="submit"]');
    await searchButton.click();
    const clearButton = await $('button[type="reset"]');
    await clearButton.click();
    const clientList = await $("ul.client-list");
    const clients = await clientList.$$("li");
    assert.isTrue(clients.length > 0);
  });
});
