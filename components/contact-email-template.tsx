interface ContactEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function ContactEmailTemplate({ name, email, message }: ContactEmailTemplateProps): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333; margin-bottom: 20px;">New Contact Form Submission</h1>

        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
          <p style="margin: 5px 0;"><strong>From:</strong> ${name}</p>
          <p style="margin: 5px 0;">
            <strong>Email:</strong> <a href="mailto:${email}" style="color: #0066cc;">${email}</a>
          </p>
        </div>

        <div>
          <h2 style="color: #333; font-size: 18px; margin-bottom: 10px;">Message:</h2>
          <p style="line-height: 1.6; color: #555;">${message}</p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #888; font-size: 12px;">
          <p>You can reply directly to this email to respond to ${name}.</p>
        </div>
      </body>
    </html>
  `;
}
