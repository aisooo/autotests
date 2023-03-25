describe("View client functionality", () => {
  it("should display client information when a client is clicked", () => {
    browser.url("http://167.114.201.175:5000/clients");

    // Find the first client in the list and click it
    const firstClient = $(".client-card");
    firstClient.click();

    // Wait for the Client Details page to load
    const clientDetailsPage = $("#client-details-page");
    clientDetailsPage.waitForExist();

    // Assert that the client name is displayed on the page
    const clientName = $("#client-name");
    const clientNameText = clientName.getText();
    expect(clientNameText).not.toBe("");

    // Assert that the client email is displayed on the page
    const clientEmail = $("#client-email");
    const clientEmailText = clientEmail.getText();
    expect(clientEmailText).not.toBe("");

    // Assert that the client phone number is displayed on the page
    const clientPhone = $("#client-phone");
    const clientPhoneText = clientPhone.getText();
    expect(clientPhoneText).not.toBe("");
  });
});
