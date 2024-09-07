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

    const mailOptions = {
      from: '"DAOplomats" <info@daoplomats.org>',
      to: "ashragautam25@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      //   html: `
      //   <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px;">

      //     <div style="text-align: center; padding-bottom: 20px;">
      //       <img src="https://your-logo-url.com/logo.png" alt="DAOplomats Logo" style="max-width: 150px;" />
      //     </div>

      //     <div style="background-color: #f7f7f7; padding: 20px; border-radius: 8px;">
      //       <h1 style="text-align: center; color: #444;">New Contact Form Submission</h1>
      //       <p style="text-align: center; font-size: 16px; color: #555;">
      //         You&apos;ve received a new inquiry from the contact form on your website. Below are the details:
      //       </p>

      //       <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
      //         <tr>
      //           <td style="padding: 10px; background-color: #eee; font-weight: bold;">Name:</td>
      //           <td style="padding: 10px; background-color: #fff;">${name}</td>
      //         </tr>
      //         <tr>
      //           <td style="padding: 10px; background-color: #eee; font-weight: bold;">Email:</td>
      //           <td style="padding: 10px; background-color: #fff;">${email}</td>
      //         </tr>
      //         <tr>
      //           <td style="padding: 10px; background-color: #eee; font-weight: bold;">Service Interested In:</td>
      //           <td style="padding: 10px; background-color: #fff;">${service}</td>
      //         </tr>
      //         <tr>
      //           <td style="padding: 10px; background-color: #eee; font-weight: bold;">Message:</td>
      //           <td style="padding: 10px; background-color: #fff;">${message}</td>
      //         </tr>
      //       </table>
      //     </div>

      //     <div style="text-align: center; margin-top: 20px;">
      //       <p style="color: #777;">You can respond directly to this inquiry by replying to the email or using the contact information provided above.</p>
      //       <p style="font-size: 12px; color: #bbb;">&copy; ${new Date().getFullYear()} DAOplomats. All rights reserved.</p>
      //     </div>
      //   </div>
      // `,
      html: `
        <div style="font-family: Arial, sans-serif; color: #FCFBEB; padding: 20px; max-width: 600px; margin: 0 auto; background-color: #242424; border: 1px solid #333333; border-radius: 8px;">
          
          <!-- Logo Section -->
          <div style="text-align: center; padding-bottom: 20px;">
            <img src="https://your-logo-url.com/logo.png" alt="DAOplomats Logo" style="max-width: 150px;" />
          </div>
          
          <!-- Main content -->
          <div style="background-color: #333333; padding: 20px; border-radius: 8px;">
            <h1 style="text-align: center; color: #DFE225;">New Contact Form Submission</h1>
            <p style="text-align: center; font-size: 16px; color: #FCFBEB;">
              You’ve received a new inquiry from the contact form on your website. Below are the details:
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
          <div style="text-align: center; margin-top: 20px;">
            <p style="color: #D3D3D3;">You can respond directly to this inquiry by replying to the email or using the contact information provided above.</p>
            <p style="font-size: 12px; color: #D3D3D3;">&copy; ${new Date().getFullYear()} DAOplomats. All rights reserved.</p>
          </div>
        </div>
      `,
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
