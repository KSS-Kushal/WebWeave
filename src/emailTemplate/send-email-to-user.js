export const userTemplate = () => `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting WebWeave Creations</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 20px;
    }

    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }

    .email-header {
      background-color: #2b2b2b;
      color: #ffffff;
      padding: 20px;
      text-align: center;
    }

    .email-header h1 {
      margin: 0;
      font-size: 24px;
    }

    .email-body {
      padding: 20px;
    }

    .email-body p {
      font-size: 16px;
      color: #333333;
      line-height: 1.6;
      margin: 10px 0;
    }

    .email-body a {
      color: #1e90ff;
      text-decoration: none;
    }

    .email-footer {
      background-color: #f4f4f4;
      text-align: center;
      padding: 15px;
      font-size: 14px;
      color: #777777;
    }

    .whatsapp-link {
      display: inline-block;
      margin-top: 15px;
      background-color: #25D366;
      color: white;
      padding: 10px 15px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: bold;
    }
  </style>
</head>

<body>
  <div class="email-container">
    <div class="email-header">
      <h1>Thank You for Reaching Out!</h1>
    </div>
    <div class="email-body">
      <p>Hi <strong>{{name}}</strong>,</p>

      <p>Thank you for contacting <strong>WebWeave Creations</strong>! We have received your query and our team will get back to you shortly.</p>

      <p>Here are the details you submitted:</p>
      <ul>
        <li><strong>Name:</strong> {{name}}</li>
        <li><strong>Email:</strong> {{email}}</li>
        <li><strong>Query:</strong> {{query}}</li>
      </ul>

      <p>If you have any additional questions, feel free to reply to this email, visit our website, or message us directly on WhatsApp:</p>

      <p>
        <a href="https://wa.me/918145248275" class="whatsapp-link" target="_blank">Message us on WhatsApp</a>
      </p>

      <p>Best Regards,<br>WebWeave Creations Team</p>

      <p>
        <a href="https://webweavecreations.in" target="_blank">Visit our Website</a>
      </p>
    </div>
    <div class="email-footer">
      <p>&copy; {{Year}} WebWeave Creations. All rights reserved.</p>
    </div>
  </div>
</body>

</html>
`;