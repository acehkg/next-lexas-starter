export const submitContact = async (newContact) => {
  const SibApiV3Sdk = require('sib-api-v3-sdk');
  const defaultClient = SibApiV3Sdk.ApiClient.instance;

  // Configure API key authorization: api-key
  const apiKey = defaultClient.authentications['api-key'];
  apiKey.apiKey = process.env.SENDINBLUE_API;

  const apiInstance = new SibApiV3Sdk.ContactsApi();
  let createContact = new SibApiV3Sdk.CreateContact(); // CreateContact | Values to create a contact
  createContact.email = newContact.email;
  createContact.attributes = { name: newContact.name };

  await apiInstance.createContact(createContact).then(
    function (data) {
      console.log('API called successfully. Returned data: ' + data);
    },
    function (error) {
      console.error(error);
    }
  );
};
