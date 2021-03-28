import { submitContact } from '../../utils/sendinblue';

export default async function handler(req, res) {
  const { name, email } = req.body;
  const newContact = { email: email, name: name };
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Method not allowed' });
  }
  try {
    const submittedContact = await submitContact(newContact);
    return res.status(200).json(submittedContact);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Something went wrong.' });
  }
}
