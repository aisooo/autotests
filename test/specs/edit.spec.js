describe("Edit client functionality", () => {
  it("should edit a client successfully", () => {
    browser.url("http://167.114.201.175:5000/clients");

    // Find the first client in the list and click the Edit button
    const firstClientEditBtn = $(".edit-client-btn");
    firstClientEditBtn.click();

    // Wait for the Edit Client modal to appear
    const editClientModal = $("#edit-client-modal");
    editClientModal.waitForExist();

    // Update the client information
    const clientNameField = $("#client-name");
    clientNameField.clearValue();
    clientNameField.setValue("Updated Client Name");

    const clientEmailField = $("#client-email");
    clientEmailField.clearValue();
    clientEmailField.setValue("updatedclientemail@test.com");

    const clientPhoneField = $("#client-phone");
    clientPhoneField.clearValue();
    clientPhoneField.setValue("1234567890");

    // Submit the updated client information
    const saveClientBtn = $("#save-client-btn");
    saveClientBtn.click();

    // Wait for the success message to appear
    const successMsg = $(".alert-success");
    successMsg.waitForExist();

    // Assert that the success message contains the updated client name
    const successMsgText = successMsg.getText();
    expect(successMsgText).toContain("Updated Client Name");
  });
});
