// Narration scripts: first person, about 20-40 seconds each.
// Edit freely. Each script is split into sentences automatically by the voice system.

export const introNarration =
  "Hi, I'm Muhammad Adnan, an AI engineer from Rawalpindi, Pakistan. I build agentic AI systems, retrieval augmented generation pipelines, and LLM powered applications that turn messy business processes into automated workflows. Right now I'm an AI and machine learning intern at XICTEK Systems, and I've already shipped multi agent platforms, computer vision apps, and full stack AI products. Scroll down to explore my work, or just sit back and let me walk you through it.";

export const aboutNarration =
  "A little more about me. I graduated in Computer Science, and over the last year I've focused on one question: how do we make AI actually useful in real work? That led me to LangChain, LangGraph, and CrewAI for multi agent systems, vector databases for retrieval, and FastAPI and Next.js to ship everything end to end. I like projects where AI connects to real APIs, databases, and users. I care about reliability, so I spend time on prompt design, structured outputs, and evaluation, not just demos.";

export const projectNarration: Record<string, string> = {
  "nexora-ai":
    "Nexora AI is my agentic commerce intelligence platform. E-commerce teams often have sales, inventory, pricing, and support data scattered everywhere, which slows down decisions. So I used LangGraph to orchestrate multiple specialized agents that analyze the business and recommend actions. On top of that sits a retrieval powered copilot for demand forecasting, inventory, pricing, promotions, logistics, and customer support. I also added a voice AI agent, so customers can talk to the system instead of only typing.",
  "fertilizer-deficiency-monitor":
    "This was my final year project. Farmers often cannot tell quickly which nutrient their crop is missing, so they use the wrong fertilizer and lose yield. I built a mobile app that detects nitrogen, phosphorus, and potassium deficiency from a photo of a rice or maize leaf. A MobileNetV2 based model reaches ninety six point three percent classification accuracy. The full pipeline runs from image capture, to model inference, to a Django API, to a clear fertilizer recommendation the farmer can act on.",
  "automl-saas":
    "The AutoML platform is a full stack SaaS for people who are not machine learning experts. You upload a dataset, and the system automatically trains and benchmarks seven models, then ranks them on a live leaderboard. It includes a dataset aware chatbot, a retrieval based documentation assistant built with ChromaDB and Gemini, data quality analysis, SHAP explainability, report generation, and a no code API generator. It's containerized with Docker and deployed on Railway with role based access control.",
  "job-search-assistant":
    "Job hunting means searching, filtering, and matching across endless listings, so I automated it. This Job Search Assistant is a seven agent CrewAI pipeline powered by Gemini. The agents handle discovery, matching, and summarization, and the results appear in a dark Streamlit interface with search filters. The most valuable part was debugging the SerpAPI integration and reducing agent hallucinations, which taught me a lot about making multi agent systems reliable.",
};
export const skillsNarration =
  "Here is the stack I work with every day. On the AI side, I build with LangChain, LangGraph, and CrewAI, and I connect models from OpenAI, Anthropic, and Google Gemini. For retrieval, I use vector embeddings and ChromaDB, so answers stay grounded in real data. In computer vision, I train convolutional networks with TensorFlow and Keras, and use OpenCV for image pipelines. To ship everything, I use Python, FastAPI, Next.js, and Docker, and I connect it all through REST APIs, webhooks, and tool calling.";

export const experienceNarration =
  "Now my experience. Currently, I'm an AI and machine learning intern at XICTEK Systems, where I build LLM powered applications with Python, FastAPI, and the Gemini API, including a chatbot with a working demo. Before that, I completed the DevSynt Rise Summer Internship in full stack web development, working with Next.js, React, FastAPI, and MySQL. And before both, I founded an e-commerce startup called Scroll'n Ecom, where I learned to make decisions with data, from pricing to marketing spend, and to work directly with customers.";
