import { NextResponse } from "next/server"
import puppeteer from "puppeteer"

export async function GET() {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    })

    const page = await browser.newPage()

    // Navigate to the resume page
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/resume`
      : "http://localhost:3000/resume"

    await page.goto(url, { waitUntil: "networkidle0" })

    // Generate PDF
    const pdf = await page.pdf({
      format: "A4",
      margin: {
        top: "0.75in",
        right: "0.75in",
        bottom: "0.75in",
        left: "0.75in",
      },
      printBackground: true,
    })

    await browser.close()

    // Return PDF for preview
    return new NextResponse(Buffer.from(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'inline; filename="Resume - Nischal Timalsina.pdf"',
      },
    })
  } catch (error) {
    console.error("PDF generation error:", error)
    return NextResponse.json(
      { message: "Failed to generate PDF" },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const { htmlContent } = await request.json()

    if (!htmlContent) {
      return NextResponse.json(
        { message: "Invalid HTML content" },
        { status: 400 }
      )
    }

    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    })

    const page = await browser.newPage()
    await page.setContent(htmlContent, { waitUntil: "networkidle0" })

    const pdf = await page.pdf({
      format: "A4",
      margin: {
        top: "0.75in",
        right: "0.75in",
        bottom: "0.75in",
        left: "0.75in",
      },
      printBackground: true,
    })

    await browser.close()

    // Return the PDF as a downloadable file
    return new NextResponse(Buffer.from(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          "attachment; filename=Resume - Nischal Timalsina.pdf",
      },
    })
  } catch (error) {
    console.error("PDF generation error:", error)
    return NextResponse.json(
      { message: "Failed to generate PDF" },
      { status: 500 }
    )
  }
}
