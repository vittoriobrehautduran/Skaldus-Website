import { sendSesEmail } from './_ses.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { organization, clubType, phone, email, notes } = req.body || {};

  if (!organization || !clubType || !phone || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const body = [
    'New Skaldus Tennis demo request.',
    '',
    `Organization: ${organization}`,
    `Club type: ${clubType}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Notes: ${notes || '-'}`,
    `Submitted at: ${new Date().toISOString()}`,
  ].join('\n');

  try {
    await sendSesEmail({
      subject: 'Skaldus Tennis demo request',
      textBody: body,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ error: 'Unable to send email' });
  }
}
