import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { fullName, email, phone, organization, equipmentNeeded, message } = req.body

  if (!fullName || !email || !phone || !organization || !equipmentNeeded || !message) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  try {
    const data = await resend.emails.send({
      from: 'LabLinc Contact <onboarding@resend.dev>',
      to: ['lablinc.global@gmail.com'],
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Equipment Needed:</strong> ${equipmentNeeded}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return res.status(200).json({ message: 'Email sent successfully', data })
  } catch (error) {
    console.error('Error sending email:', error)
    return res.status(500).json({ message: 'Failed to send email', error: error.message })
  }
}
