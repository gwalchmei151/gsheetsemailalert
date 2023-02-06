function CheckLicense() {
  // Fetch the monthly sales
  var LicensesRemainingRange = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName('Sheet1')
    .getRange('C5');
  var LicensesRemaining = LicensesRemainingRange.getValue();
  var ui = SpreadsheetApp.getUi();
  // Check totals sales
  if (LicensesRemaining < 50) {
    // Fetch the email address
    var emailRange = SpreadsheetApp.getActiveSpreadsheet()
      .getSheetByName('Sheet2')
      .getRange('B2:B3');
    var emailAddress = emailRange.getValues();
    console.log(emailAddress);
    // Send Alert Email.
    var message = 'You have less than 50 Cyberium Arena Licenses left!'; // Second column
    var subject = 'License Depletion Alert';
    //MailApp.sendEmail(emailAddress, subject, message);
    for (var i = 0; i < emailAddress.length; i++) {
      Logger.log(emailAddress[i]);
      MailApp.sendEmail({
        to: emailAddress[i][0],
        subject: subject,
        body: message,
      });
    }
  }
}
