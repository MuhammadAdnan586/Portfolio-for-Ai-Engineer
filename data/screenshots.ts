export type Screenshot = { src: string; title?: string; description?: string };

export type ShotInfo = { file: string; title: string; description?: string };

// Order and captions for the project galleries.
// "file" = the image file name inside public/projects/<slug>/screens/
// Images listed here appear first, in this exact order, with their title.
// Images not listed follow at the end (numbered, no title).
export const screenshotInfo: Record<string, ShotInfo[]> = {
  "nexora-ai": [
    {
      file: "01.webp",
      title: "Storefront home",
      description: "Customer storefront with collections, smart deals and the ATLAS AI assistant.",
    },
    {
      file: "02.webp",
      title: "ATLAS shopping assistant",
      description:
        "Conversational assistant recommends a product with its price and discount and offers to add it to the cart.",
    },
    {
      file: "03.webp",
      title: "Cart and checkout",
      description: "Cart with quantity controls, order summary and a checkout button.",
    },
    {
      file: "04.webp",
      title: "Admin dashboard",
      description:
        "Command center with revenue, orders, products and customers, plus modules for inventory, analytics, intelligence and forecasting.",
    },
    {
      file: "05.webp",
      title: "RAG admin copilot",
      description: "Answers policy questions from company documents and shows the source it used.",
    },
    {
      file: "06.webp",
      title: "Voice AI: split shipment",
      description:
        "Voice assistant proposes shipping one order from several warehouses based on stock, asks for confirmation, then notifies the warehouses.",
    },
    {
      file: "07.webp",
      title: "Voice AI: bulk shipping",
      description:
        "Ships all pending orders of a given date from a single spoken command after a yes/no confirmation.",
    },
    {
      file: "08.webp",
      title: "Risk and fraud detection",
      description:
        "Flags a suspicious order with a risk score and reasons, with Clear or Block actions for the admin.",
    },
    {
      file: "09.webp",
      title: "Logistics",
      description: "Routes with driver, vehicle, stops, distance and delivery status.",
    },
    {
      file: "10.webp",
      title: "Warehouse portal",
      description:
        "Orders to prepare, low-stock alerts, notifications and live stock levels per product.",
    },
  ],
  "fertilizer-deficiency-monitor": [
    {
      file: "01.webp",
      title: "Dashboard, scan and analyze",
      description:
        "Farmer's Assistant home screen, capturing or choosing a leaf photo, then analyzing it with the model.",
    },
    {
      file: "02.webp",
      title: "Result and fertilizer plan",
      description:
        "Analysis result with crop type and confidence, then a recommended fertilizer plan with options, prices and dosage per acre.",
    },
  ],
  "automl-saas": [
    {
      file: "01.webp",
      title: "Workspace dashboard",
      description: "Overview of datasets, rows and storage, with recent datasets and platform modules.",
    },
    {
      file: "02.webp",
      title: "Preprocessing and data quality",
      description:
        "Dataset preview and an automated data-quality report with an overall score, missing cells, duplicates and outlier columns.",
    },
    {
      file: "03.webp",
      title: "Ready for training",
      description: "Cleaned, fully numeric dataset ready for training, with the pipeline progress shown on top.",
    },
    {
      file: "04.webp",
      title: "Training results",
      description:
        "Best model with its score, an accuracy comparison across all seven models, and a multi-metric radar for the top three.",
    },
    {
      file: "05.webp",
      title: "Model leaderboard",
      description:
        "All seven models ranked by accuracy, with downloads for the trained model and the feature-engineered dataset.",
    },
    {
      file: "06.webp",
      title: "AI intelligence layer",
      description: "Data quality, explainability, predictions, AI chat and report generation for the selected dataset.",
    },
    {
      file: "07.webp",
      title: "No-code API generator",
      description:
        "One-click REST API with an API key and example call, plus retraining, notifications and monitoring tabs.",
    },
  ],
  "job-search-assistant": [
    {
      file: "01.webp",
      title: "Seven-agent pipeline",
      description:
        "Input form with job title, location, filters and CV upload, showing the seven agents that run in sequence.",
    },
    {
      file: "02.webp",
      title: "Live job research",
      description: "The research agent returns real listings through SerpAPI (Google Jobs) with the filters applied.",
    },
    {
      file: "03.webp",
      title: "Market analysis",
      description:
        "The analyzer agent summarizes what employers ask for: technical skills, soft skills and experience.",
    },
    {
      file: "04.webp",
      title: "Resume before and after",
      description: "The resume agent tailors the CV to the target role and lists every change it made.",
    },
    {
      file: "05.webp",
      title: "Cover letter",
      description: "A cover letter drafted for the selected role from the CV and the job analysis.",
    },
    {
      file: "06.webp",
      title: "Interview preparation",
      description: "Likely interview questions with answer strategies using the STAR method.",
    },
    {
      file: "07.webp",
      title: "Application draft (human in the loop)",
      description:
        "Draft application package with a checkpoint: nothing is submitted automatically, the user reviews and applies.",
    },
    {
      file: "08.webp",
      title: "Final review",
      description:
        "The reviewer agent audits the whole package with strengths, improvements and a readiness assessment.",
    },
  ],
};
