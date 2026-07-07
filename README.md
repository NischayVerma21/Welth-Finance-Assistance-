

**Welth – AI-Powered Personal Finance Management Platform**

Welth is a full-stack personal finance management platform designed to help individuals and small businesses efficiently manage, track, and analyze their finances. The platform enables users to create multiple accounts (such as Personal, Business, or Savings), record transactions, and monitor income and expenses through a personalized dashboard.

Users can set monthly budgets, and the platform continuously tracks spending against those budgets. When spending reaches 75% of the allocated budget, an automated email notification is triggered to help users avoid overspending. At the end of every month, users receive personalized financial reports summarizing their expenditure, savings, and overall financial performance.

To simplify expense tracking, Welth integrates **Google Gemini AI** to scan and analyze bill receipts. The AI extracts transaction details, categorizes expenses, automatically registers them under the appropriate account, and generates personalized insights into monthly spending patterns, helping users better understand their financial habits and make informed financial decisions.

The platform provides comprehensive financial analytics through interactive line charts, bar graphs, and pie charts, enabling users to visualize income trends, expense distribution, budget utilization, and account-wise financial performance.

On the backend, Welth leverages **Inngest** to execute asynchronous workflows such as budget alert notifications and monthly financial summary emails, ensuring reliable background task processing. **Arcjet** strengthens application security by protecting against common web attacks and abuse, while **Clerk** provides secure user authentication, session management, and request validation. **Supabase (PostgreSQL)** serves as the primary database, with **Prisma ORM** managing the database schema and queries.

**Tech Stack:** Next.js, React.js, Tailwind CSS, shadcn/ui, Clerk Authentication, Prisma ORM, Supabase (PostgreSQL), Inngest, Arcjet, Google Gemini AI.


Arcjet
inngest
supabase
prisma  
