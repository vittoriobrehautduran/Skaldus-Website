import { sendSesEmail } from './_ses.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body || {};

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const body = [
    'New Skaldus Booking subscription request.',
    '',
    `Email: ${email}`,
    `Submitted at: ${new Date().toISOString()}`,
  ].join('\n');

  try {
    await sendSesEmail({
      subject: 'Skaldus Booking subscription request',
      textBody: body,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ error: 'Unable to send email' });
  }
}
