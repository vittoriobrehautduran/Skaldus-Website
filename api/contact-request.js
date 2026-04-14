import { sendSesEmail } from './_ses.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, club, email, phone, message } = req.body || {};

  if (!name || !club || !email || !phone) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const body = [
    'New contact request from skaldus.com.',
    '',
    `Name: ${name}`,
    `Club: ${club}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Message: ${message || '-'}`,
    `Submitted at: ${new Date().toISOString()}`,
  ].join('\n');

  try {
    await sendSesEmail({
      subject: 'Skaldus contact request',
      textBody: body,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ error: 'Unable to send email' });
  }
}
