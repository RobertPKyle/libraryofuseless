import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      factTitle,
      originalTeaching,
      yearTaught,
      disprovenInfo,
      yearDisproven,
      sources,
      submitterName,
      submitterEmail,
    } = body;

    // Validate required fields
    if (!factTitle || !originalTeaching || !yearTaught || !disprovenInfo || !yearDisproven || !submitterEmail) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email
    const data = await resend.emails.send({
      from: 'Library of Useless <onboarding@resend.dev>', // Will be replaced with your domain
      to: ['libraryofuselessfacts@gmail.com'],
      subject: `New Fact Submission: ${factTitle}`,
      html: `
        <h2>New Fact Submission</h2>

        <h3>Fact Details</h3>
        <p><strong>Title:</strong> ${factTitle}</p>
        <p><strong>What Was Originally Taught:</strong><br/>${originalTeaching}</p>
        <p><strong>When It Was Taught:</strong> ${yearTaught}</p>
        <p><strong>How It Was Disproven/Updated:</strong><br/>${disprovenInfo}</p>
        <p><strong>When It Was Disproven:</strong> ${yearDisproven}</p>
        ${sources ? `<p><strong>Sources:</strong><br/>${sources}</p>` : ''}

        <h3>Submitter Information</h3>
        ${submitterName ? `<p><strong>Name:</strong> ${submitterName}</p>` : ''}
        <p><strong>Email:</strong> ${submitterEmail}</p>

        <hr/>
        <p><em>Submitted from libraryofuseless.com</em></p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
