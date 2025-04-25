export const ownerTemplate = () => `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>New Contact Form Submission</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
      padding: 20px;
      margin: 0;
    }

    .email-wrapper {
      max-width: 600px;
      margin: auto;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }

    .email-header {
      background-color: #2b2b2b;
      color: #ffffff;
      padding: 20px;
      text-align: center;
    }

    .email-header h2 {
      margin: 0;
    }

    .email-body {
      padding: 20px;
      color: #333333;
    }

    .email-body p {
      font-size: 16px;
      margin-bottom: 10px;
    }

    .details-box {
      background-color: #f9f9f9;
      padding: 15px;
      border-left: 4px solid #2b2b2b;
      margin-top: 10px;
      font-size: 15px;
    }

    .email-footer {
      text-align: center;
      padding: 15px;
      font-size: 14px;
      color: #888888;
      background-color: #f4f4f4;
    }

  </style>
</head>

<body>
  <div class="email-wrapper">
    <div class="email-header">
      <h2>New Contact Form Submission</h2>
    </div>

    <div class="email-body">
      <p>Hello,</p>
      <p>You have received a new message from your website <strong>WebWeave Creations</strong>.</p>

      <div class="details-box">
        <p><strong>Name:</strong> {{name}}</p>
        <p><strong>Email:</strong> {{email}}</p>
        <p><strong>Query:</strong><br>{{query}}</p>
      </div>

      <p>Please respond as soon as possible to maintain great customer service.</p>
    </div>

    <div class="email-footer">
      <p>&copy; {{Year}} WebWeave Creations</p>
    </div>
  </div>
</body>

</html>
`;