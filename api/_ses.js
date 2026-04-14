import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2';

const region = process.env.AWS_REGION || process.env.SES_REGION || 'eu-north-1';
const accessKeyId = process.env.AWS_SES_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SES_SEECRET_ACCESS_KEY;

const credentials =
  accessKeyId && secretAccessKey
    ? {
        accessKeyId,
        secretAccessKey,
      }
    : undefined;

const sesClient = new SESv2Client({
  region,
  credentials,
});

const FROM_EMAIL = 'subscription@skaldus.com';
const TO_EMAIL = 'contact@brehautconsulting.com';

export async function sendSesEmail({ subject, textBody }) {
  const command = new SendEmailCommand({
    FromEmailAddress: FROM_EMAIL,
    Destination: {
      ToAddresses: [TO_EMAIL],
    },
    Content: {
      Simple: {
        Subject: {
          Data: subject,
          Charset: 'UTF-8',
        },
        Body: {
          Text: {
            Data: textBody,
            Charset: 'UTF-8',
          },
        },
      },
    },
  });

  return sesClient.send(command);
}
