/* eslint-disable no-undef */
import { Resend } from "resend";

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, subject, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["angelxcrema@gmail.com"],
      subject: subject,
      html: `
      <html>
      <style>
        body{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 100%;
          height: 100dvh;
          flex-direction: column;
          gap: 20px;
          outline: 1px solid #0F0;
          background-color: #333;
          color: white;
          position: relative;
        }
        h3{
          color:orangered
        }
        span{
          color: purple; 
          position: absolute; 
          bottom: 20px;
          left: 20px
        }
      </styles>
      <body>
      <h3>
            <i>Subject: </i>${subject}
          </h3>
          <p>
            <strong>
              <i>Message from: </i>
              ${name}
            </strong><br/>
            ${message}
          </p>
          <span>
            <strong>
              <i>From:</i>
            </strong>
            ${email}
          </span>
        </body>
        </html>  
      `
    });

    console.log(data);

    if (error) return new Response(error);
    return new Response(JSON.stringify(data));
  } catch (error) {
    return new Response("Error processing the request", {
      status: 500
    });
  }
}
