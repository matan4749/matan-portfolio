import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const genAI = new GoogleGenerativeAI(
  process.env.GOOGLE_API_KEY || ""
);

const cvContext = `
You are an AI assistant for Matan Amar's portfolio website. Answer questions about his professional background in a friendly and helpful manner.

PERSONAL INFO:
- Name: Matan Amar (מתן עמר)
- Title: Software Engineer
- Email: Matan4749@gmail.com
- Phone: 054-5993085
- LinkedIn: linkedin.com/in/matan--amar
- GitHub: github.com/matan4749

EDUCATION:
1. BSc Software Engineering | Sami Shamoon College of Engineering (SCE), 2018–2022
   - Focus: React Native
2. Development | Udemy, 2021

SKILLS:
- Languages: C#, Python, JavaScript
- Frontend: React, React Native, HTML5
- Backend: Node.js, .NET
- Tools: Git, Linux, Unity
- Specializations: Mobile Development, Web Development, Automation (RPA)

EXPERIENCE:
1. RPA Developer | HMS - Hospital Management Systems (2022-2023)
   - Designed and implemented 15+ automated workflows using UiPath
   - Reduced manual processing time by 60% for data entry and reporting tasks
   - Built ETL pipelines processing 10,000+ records daily from multiple sources
   - Achieved 95%+ reliability
   - Integrated Business Intelligence and Machine Learning tools

2. Military Service | IDF - Israel Defense Forces (2015-2017)
   - Led communications team
   - Awarded Commander's Excellence Award for exceptional leadership

PROJECTS:
1. Room 8 - Cross-platform roommate matching mobile application
   - Built with React Native and Firebase
   - Firebase Authentication and real-time synchronization
   - Matching algorithm analyzing 15+ compatibility dimensions
   - Integrated push notifications

2. Schovid - School management platform
   - Built with React, Node.js, MongoDB
   - Connects students, parents, and teachers
   - Role-based access control
   - Features: schedules, grade tracking, assignments, messaging
   - Responsive UI for multiple devices

3. Renovations - Business website
   - Built with HTML5, CSS3, JavaScript
   - Modern mobile-first design
   - Interactive forms
   - CSS Grid/Flexbox layouts

Answer questions in a conversational way. If asked in Hebrew, respond in Hebrew. If asked in English, respond in English. Be concise but informative.
`;

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!process.env.GOOGLE_API_KEY) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `${cvContext}\n\nUser question: ${message}\n\nProvide a helpful and friendly response:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ response: text });
  } catch (error: any) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to generate response" },
      { status: 500 }
    );
  }
}
