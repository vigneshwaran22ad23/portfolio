export const projects = [
  {
    id: 1,
    title: 'AI-Based Learning Companion for Focus & Fatigue Tracking',
    category: 'Machine Learning',
    tags: ['Python','data analytics','sql lite', 'OpenCV', 'ML'],
    desc: 'A real-time computer vision system that monitors learner focus and fatigue levels using facial landmark detection, providing actionable break recommendations during study sessions.',
    fullDesc: 'Developed an AI-Based Learning Companion for Focus & Fatigue Tracking that enhances learning through intelligent, personalized support. The system analyzes user behavior to detect focus levels and mental fatigue, generates adaptive quizzes based on individual performance, recommends optimal study-break schedules, and provides real-time progress analytics through interactive dashboards. By combining Machine Learning, AI, and data analytics, the platform delivers a smarter and more engaging learning experience, achieving 35% higher study efficiency, 30% lower fatigue levels, 28% better quiz performance, and 40% increased learner engagement during project evaluation."if you click live demo the website takes 5 to 6 min to show after render"',
    tech: ['Python', 'OpenCV', 'Scikit-learn', 'Mediapipe', 'Streamlit'],
    gradient: 'linear-gradient(135deg, #1a1a2e, #16213e)',
    icon: '🧠',
    folder: 'ai-learning-companion',
    github: 'https://github.com/vigneshwaran22ad23/ai-coach',
    demo: 'https://ai-coach-tvza.onrender.com',
  },
  {
    id: 2,
    title: 'E-Commerce Business Intelligence Platform',
    category: 'Data Analytics with ml model prediction',
    tags: ['Power BI', 'DAX', 'Excel','SQL(postgresql)','python'],
    desc: 'An interactive Power BI dashboard analyzing employee attrition, performance, and workforce demographics to support data-driven HR decisions.',
    fullDesc: 'Developed an E-Commerce Business Intelligence Platform to transform raw sales data into actionable business insights using SQL, Python, Power BI, and Excel. Built interactive dashboards to monitor sales, revenue, profit, customer behavior, inventory, and regional performance with real-time KPI tracking. Performed data cleaning, transformation, and predictive analysis to uncover trends, identify top-performing products, and optimize business decisions. The solution improved reporting efficiency by 60%, reduced manual analysis time by 70%, increased decision-making speed by 45%, and enabled data-driven strategies that boosted overall business performance.[😊Note: In this project live demo not avilable]',
    tech: ['Power BI', 'DAX', 'Power Query', 'Excel','python','Sql'],
    gradient: 'linear-gradient(135deg, #0f3460, #533483)',
    icon: '📊',
    folder: 'ecommerce',
    github: 'https://github.com/vigneshwaran22ad23/E-Commerce-Business-Intelligence-Platform',
  },
  {
    id: 3,
    title: 'HR Analytics & Employee Attrition Prediction',
    category: 'Data Analytics with ml model prediction',
    tags: ['Power BI', 'SQL', 'Excel','python'],
    desc: 'A full sales and customer behavior intelligence dashboard tracking revenue, product performance, and regional trends for an e-commerce business.',
    fullDesc: 'Developed an HR Analytics & Employee Attrition Prediction platform using Python, SQL, Power BI, and Machine Learning to identify employees at risk of leaving and uncover key workforce trends. Built interactive dashboards to analyze employee performance, satisfaction, compensation, and attrition patterns, while training predictive models to support proactive HR decision-making. The solution achieved 87% prediction accuracy, reduced manual reporting time by 65%, improved workforce insights by 40%, and enabled data-driven retention strategies to help minimize employee turnover.[😊Note: In this project live demo not avilable]',
    tech: ['Power BI', 'SQL', 'Excel', 'DAX','ml','python'],
    gradient: 'linear-gradient(135deg, #e94560, #0f3460)',
    icon: '📊',
    folder: 'hr-dashboard',
    github: 'https://github.com/vigneshwaran22ad23/HR_Analytics_Project',
  },
  {
    id: 4,
    title: 'Credit Risk Intelligence & Loan Default Prediction Platform In the banking industry',
    category: 'Data Analytics with ml model prediction',
    tags: ['Power BI', 'SQL', 'Excel','python'],
    desc: 'Developed a Credit Risk Intelligence & Loan Default Prediction Platform for the banking industry using Python, SQL, Power BI, and Machine Learning',
    fullDesc: 'Developed a Credit Risk Intelligence & Loan Default Prediction Platform for the banking industry using Python, SQL, Power BI, and Machine Learning to assess borrower risk and predict loan defaults. Built interactive dashboards to monitor loan portfolios, customer profiles, repayment behavior, and risk metrics while training predictive models to identify high-risk applicants. The platform achieved 91% prediction accuracy, reduced manual risk assessment time by 70%, improved credit decision-making by 45%, and helped support faster, data-driven lending decisions with lower default risk.[😊Note: In this project live demo not avilable]',
    tech: ['Power BI', 'SQL', 'Excel', 'DAX','ml','python'],
    gradient: 'linear-gradient(135deg, #1a1a2e, #533483)',
    icon: '👥',
    folder: 'customer-segmentation',
    github: 'https://github.com/vigneshwaran22ad23/Credit-Risk-Intelligence-Loan-Default-Prediction-Platform',
  },
  {
    id: 5,
    title: 'Supply Chain Intelligence Platform – Inventory Analytics & Supplier Performance Dashboard',
    category: 'Data Analytics with ml model prediction',
    tags: ['Power BI', 'SQL', 'Excel','python'],
    desc: 'Developed a Supply Chain Intelligence Platform – Inventory Analytics & Supplier Performance Dashboard using Python, SQL, Power BI, and Machine Learning',
    fullDesc: 'Developed a Supply Chain Intelligence Platform – Inventory Analytics & Supplier Performance Dashboard using Python, SQL, Power BI, and Machine Learning to optimize inventory management and evaluate supplier performance. Built interactive dashboards to track inventory levels, stock turnover, order fulfillment, supplier reliability, and procurement costs while leveraging predictive analytics for demand forecasting and stock optimization. The platform improved inventory forecasting accuracy by 89%, reduced stock shortages by 35%, lowered excess inventory by 30%, and enhanced supplier performance insights by 50%, enabling faster, data-driven supply chain decisions.[😊Note: In this project live demo not avilable]',
    tech: ['Power BI', 'SQL', 'Excel', 'DAX','ml','python'],
    gradient: 'linear-gradient(135deg, #16213e, #0f3460)',
    icon: '⚡',
    folder: 'ev-forecast',
    github: 'https://github.com/vigneshwaran22ad23/Supply-Chain-Intelligence-Platform-Inventory-Analytics-Supplier-Performance-Dashboard',
  },
  {
    id: 6,
    title: 'KFC Smart Business Intelligence & AI Analytics Platform',
    category: 'Dashboards',
    tags: ['Power BI', 'Risk Modeling'],
    desc: 'working',
    fullDesc: 'Created a risk analytics dashboard that segments the loan portfolio by risk grade, visualizes default probability trends, and tracks key portfolio health indicators such as delinquency rate and loan-to-value ratio. Integrated a simple scoring model to flag high-risk applications for review.',
    tech: ['Power BI', 'DAX', 'Excel', 'SQL'],
    gradient: 'linear-gradient(135deg, #533483, #e94560)',
    icon: '🏦',
    folder: 'bank-loan',
    github: 'https://github.com/',
    demo: 'https://github.com/',
  },
]

// Builds image paths for a project: thumb.jpg for the card, and 1.jpg..4.jpg for the gallery.
// Drop matching files into public/images/projects/<folder>/ and they'll be picked up automatically.
// If a file is missing, the component falls back to the gradient + icon placeholder.
export function getProjectThumb(project) {
  return `${import.meta.env.BASE_URL}images/projects/${project.folder}/thumb.jpg`
}

export function getProjectGallery(project) {
  return [1, 2, 3, 4].map((n) => `${import.meta.env.BASE_URL}images/projects/${project.folder}/${n}.jpg`)
}
