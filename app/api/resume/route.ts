export async function GET() {
  // Create a simple PDF using text-based format
  const pdfContent = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 2800 >>
stream
BT
/F1 24 Tf
50 750 Td
(Junaet Hasan Miju) Tj
ET
BT
/F1 12 Tf
50 730 Td
(Junior Flutter Developer) Tj
ET
BT
/F1 10 Tf
50 715 Td
(Email: junaet.hasan.miju@gmail.com | Phone: +880 1XXXXXXXXX | Location: Bangladesh) Tj
ET
BT
/F1 10 Tf
50 695 Td
(GitHub: github.com/junaet-hasan-miju | LinkedIn: linkedin.com/in/junaet-hasan-miju) Tj
ET
BT
/F1 16 Tf
50 670 Td
(PROFESSIONAL SUMMARY) Tj
ET
BT
/F1 10 Tf
50 650 Td
(Passionate Junior Flutter Developer with strong foundation in mobile app development.) Tj
ET
BT
/F1 10 Tf
50 635 Td
(Experienced in building responsive, user-friendly applications with clean code practices.) Tj
ET
BT
/F1 10 Tf
50 620 Td
(Seeking internship opportunities to expand expertise and contribute to innovative projects.) Tj
ET
BT
/F1 16 Tf
50 595 Td
(SKILLS & EXPERTISE) Tj
ET
BT
/F1 12 Tf
50 575 Td
(Mobile Development:) Tj
ET
BT
/F1 10 Tf
50 560 Td
(Flutter, Dart, Responsive Design, UI/UX Implementation) Tj
ET
BT
/F1 12 Tf
50 540 Td
(State Management:) Tj
ET
BT
/F1 10 Tf
50 525 Td
(GetX, Provider, BLoC, Riverpod) Tj
ET
BT
/F1 12 Tf
50 505 Td
(Backend & Databases:) Tj
ET
BT
/F1 10 Tf
50 490 Td
(Firebase (Auth, Firestore, Realtime DB), REST APIs, SQLite) Tj
ET
BT
/F1 12 Tf
50 470 Td
(Development Tools:) Tj
ET
BT
/F1 10 Tf
50 455 Td
(Git, GitHub, Android Studio, Xcode, VS Code, Figma) Tj
ET
BT
/F1 12 Tf
50 435 Td
(Design:) Tj
ET
BT
/F1 10 Tf
50 420 Td
(Material Design, Cupertino Design, Responsive Layouts) Tj
ET
BT
/F1 16 Tf
50 395 Td
(PROJECTS) Tj
ET
BT
/F1 12 Tf
50 375 Td
(E-Commerce Mobile App | 2024) Tj
ET
BT
/F1 10 Tf
50 360 Td
(Full-featured e-commerce application with product listing, cart management, and checkout.) Tj
ET
BT
/F1 10 Tf
50 345 Td
(Technologies: Flutter, Dart, GetX, Firebase Authentication) Tj
ET
BT
/F1 12 Tf
50 325 Td
(Weather Forecast Application | 2024) Tj
ET
BT
/F1 10 Tf
50 310 Td
(Real-time weather app with location-based forecasting and local data caching.) Tj
ET
BT
/F1 10 Tf
50 295 Td
(Technologies: Flutter, Dart, REST APIs, SQLite) Tj
ET
BT
/F1 12 Tf
50 275 Td
(Task Management Application | 2023) Aj
ET
BT
/F1 10 Tf
50 260 Td
(Productivity app with task organization, priorities, and local storage functionality.) Tj
ET
BT
/F1 10 Tf
50 245 Td
(Technologies: Flutter, Dart, Provider, Local Storage) Tj
ET
BT
/F1 16 Tf
50 220 Td
(EXPERIENCE) Tj
ET
BT
/F1 12 Tf
50 200 Td
(Junior Flutter Developer | Learning & Building | 2024 - Present) Tj
ET
BT
/F1 10 Tf
50 185 Td
(Developing mobile applications with focus on clean code and user experience.) Tj
ET
BT
/F1 12 Tf
50 165 Td
(Flutter Development Intern | Self-Learning | 2024) Tj
ET
BT
/F1 10 Tf
50 150 Td
(Building Flutter applications and mastering state management with GetX and Firebase.) Tj
ET
BT
/F1 16 Tf
50 125 Td
(EDUCATION) Tj
ET
BT
/F1 12 Tf
50 105 Td
(Mobile App Development | Self-Learning | 2023 - Present) Tj
ET
BT
/F1 10 Tf
50 90 Td
(Completed courses on Flutter, Dart, Firebase, and UI/UX design principles.) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000229 00000 n 
0000003076 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
3153
%%EOF`;

  return new Response(pdfContent, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=Junaet_Hasan_Miju_Resume.pdf",
    },
  });
}
