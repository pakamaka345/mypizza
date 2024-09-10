import { Resend } from "resend";

export const SendEmail = async (
  to: string,
  subject: string,
  template: React.ReactNode
) => {
  const resend = new Resend(process.env.EMAIL_API_KEY);

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to,
    subject,
    react: template,
  });

  if (error) {
    throw error;
  }

  return data;
};
