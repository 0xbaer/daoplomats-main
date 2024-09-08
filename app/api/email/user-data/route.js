import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, service, message } = await req.json();

    if (!name || !email || !service || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
        }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const userEmailHtml = `
    <div style="font-family: Arial, sans-serif; color: #FCFBEB; padding: 20px; max-width: 600px; margin: 0 auto; background-color: #242424; border: 1px solid #333333; border-radius: 8px;">
        
        <!-- Logo Section -->
        <div style="text-align: center; padding-bottom: 20px;">
        <img src="https://your-logo-url.com/logo.png" alt="DAOplomats Logo" style="max-width: 150px;" />
        </div>
        
        <!-- Main content -->
        <div style="background-color: #333333; padding: 20px; border-radius: 8px;">
        <h1 style="text-align: center; color: #DFE225;">Thank You for Reaching Out!</h1>
        <p style="text-align: center; font-size: 16px; color: #FCFBEB;">
            Hello ${name},<br><br>
            We have received your message and appreciate your interest in our services. We will get in touch with you shortly to discuss how we can assist with your request.<br><br>
            Here’s a summary of your submission:
        </p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px; color: #FCFBEB;">
            <tr>
            <td style="padding: 10px; background-color: #242424; font-weight: bold;">Name:</td>
            <td style="padding: 10px; background-color: #333333;">${name}</td>
            </tr>
            <tr>
            <td style="padding: 10px; background-color: #242424; font-weight: bold;">Email:</td>
            <td style="padding: 10px; background-color: #333333;">${email}</td>
            </tr>
            <tr>
            <td style="padding: 10px; background-color: #242424; font-weight: bold;">Service Interested In:</td>
            <td style="padding: 10px; background-color: #333333;">${service}</td>
            </tr>
            <tr>
            <td style="padding: 10px; background-color: #242424; font-weight: bold;">Message:</td>
            <td style="padding: 10px; background-color: #333333;">${message}</td>
            </tr>
        </table>
        </div>

        <!-- Footer -->
        <div style="text-align: center; margin-top: 20px; background-color: #242424; padding: 20px; border-radius: 8px;">
        <p style="color: #D3D3D3;">We look forward to helping you with your project!</p>
        <p style="font-size: 14px; color: #D3D3D3;">Follow us on social media to stay updated:</p>
        
        <!-- Social Links -->
        <div style="text-align: center; margin-top: 10px;">
            <a href="https://x.com/DAOplomats" style="text-decoration: none; color: #DFE225; margin-right: 10px;">X(Twitter)</a> |
            <a href="https://hey.xyz/u/daoplomats" style="text-decoration: none; color: #DFE225; margin-left: 10px;">Hey</a> |
            <a href="https://boardroom.io/voter/daoplomats.eth" style="text-decoration: none; color: #DFE225; margin-left: 10px;">Boardroom</a>
        </div>
        
        <p style="font-size: 12px; color: #D3D3D3; margin-top: 20px;">&copy; ${new Date().getFullYear()} DAOplomats. All rights reserved.</p>
        </div>
    </div>
    `;

    const mailOptions = {
      from: '"DAOplomats" <ops@daoplomats.org>',
      to: email,
      subject: `Thank You for Your Submission, ${name}!`,
      html: userEmailHtml,
    };

    const info = await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Message sent successfully", info }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    return new Response(JSON.stringify({ error: "Failed to send message" }), {
      status: 500,
    });
  }
}
