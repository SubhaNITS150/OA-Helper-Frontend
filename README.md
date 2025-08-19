# OA Helper
OA Helper is a full-stack platform designed to simulate a **real Online Assessment (OA) environment**, allowing users to practice under authentic test conditions.  
The platform includes **strict proctoring features** (camera monitoring, anomaly detection, and environment checks) to minimize cheating and ensure a realistic assessment experience.


## 🚀 Features
- **Realistic OA Environment** — Users can attempt practice tests that mimic actual online assessments.  
- **Strict Proctoring** — Integrated AI-based proctoring (face detection, tab-switch monitoring, and environment checks) to reduce cheating.  
- **Analytics Dashboard** — Get insights into performance, accuracy, time spent per section, and strengths/weaknesses.  
- **Challenge Mode** — Compete with friends in a proctored test environment.  
- **Visitor Growth** — Reached **50+ users in the first month** after launch. 


## 🛠️ Tech Stack
**Frontend**
- [Next.js](https://nextjs.org/) (with TypeScript & Turbo mode)  
- [React 18](https://react.dev/)  
- [Tailwind CSS](https://tailwindcss.com/) + [Aceternity UI](https://ui.aceternity.com/) + [shadcn/ui](https://ui.shadcn.com/)  
- [Framer Motion](https://www.framer.com/motion/) for animations  
- [Swiper](https://swiperjs.com/) for carousels  

**Backend**
- [Node.js](https://nodejs.org/) with [Express](https://expressjs.com/)  
- [PostgreSQL](https://www.postgresql.org/) for database  
- [Zod](https://zod.dev/) for schema validation  

**Proctoring**
- [OpenCV](https://opencv.org/) (Python) for face & eye tracking  
- Browser-based monitoring (tab switch detection, multiple window prevention)  

**Tooling**
- [Biome](https://biomejs.dev/) for linting & formatting  
- [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/okonet/lint-staged) for pre-commit hooks  
- [pnpm](https://pnpm.io/) for package management  
