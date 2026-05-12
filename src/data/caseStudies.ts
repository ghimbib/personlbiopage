export type CaseStudy = {
  slug: string;
  title: string;
  company: string;
  role: string;
  period: string;
  teaser: string;
  summary: string;
  tags: string[];
  challenge: string;
  responsibilities: string[];
  outcomes: string[];
  whyItMattered: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'orbex-product-systems-growth',
    title: 'Orbex Group: product, CRM, campaigns, and the connective tissue in between',
    company: 'Orbex Group',
    role: 'Product, GTM & Marketing Operations',
    period: 'Oct 2023 - Mar 2026',
    teaser: 'Connecting industrial product work, CRM/reporting, analytics, campaign ops, trade shows, ABM, and GTM into a clearer operating rhythm.',
    summary: 'Orbex needed stronger connective tissue between product strategy, business priorities, marketing execution, and the systems that supported commercial work. The work cut across industrial hardware, CRM and workflow design, analytics, trade shows, ABM, budget allocation, and go-to-market decisions.',
    tags: ['Industrial Systems', 'CRM / Workflow', 'GTM', 'Marketing Ops'],
    challenge: 'The challenge was not one isolated feature. Multiple product lines, campaign channels, commercial goals, and internal workflows needed a tighter roadmap, better lead-quality discipline, and clearer operating standards.',
    responsibilities: [
      'Owned product strategy across industrial hardware, marketing operations, CRM, and supporting internal systems.',
      'Reallocated spend from low-quality Google Ads into ABM and trade show channels with stronger lead quality.',
      'Defined audience segmentation by industry, job title, and geography, then partnered with vendors to source contacts and execute campaigns.',
      'Served as final approver for campaign copy, landing pages, ads, trade show collateral, product claims, specs, and brand messaging.',
      'Designed CRM requirements, follow-up rules, dashboards, lead-source workflows, and standard process documentation.'
    ],
    outcomes: [
      'Created a clearer roadmap across hardware, systems, and commercial priorities.',
      'Converted roughly 20 low-quality Google Ads leads per month into roughly 20 high-quality ABM leads in the first month.',
      'Improved lead quality and funnel discipline through better systems, targeting, and campaign review.',
      'Helped secure funding by making the product and growth story easier to understand and back.'
    ],
    whyItMattered: 'This is the kind of work that disappears in tidy resumes. It was product, analytics, marketing, CRM, and program execution at the same time. The useful part was making the system clearer so people could act.'
  },
  {
    slug: 'viessmann-connected-products-platforms',
    title: 'Viessmann: keeping a broad connected-product portfolio pointed somewhere useful',
    company: 'Viessmann',
    role: 'Portfolio, Program & GTM Leadership',
    period: 'Jan 2021 - Aug 2023',
    teaser: 'Managing apps, portals, tools, connected products, launches, regional programs, and market feedback without treating each surface like a separate universe.',
    summary: 'At Viessmann, the work spanned multiple product surfaces, including apps, portals, design tools, connected products, collateral standards, and sales programs. The job was to improve focus, launches, and customer experience across a portfolio instead of treating each product in isolation.',
    tags: ['Climate Tech', 'Connected Products', 'Portfolio Management', 'Program Execution'],
    challenge: 'The portfolio had real breadth. That created opportunity, but it also meant prioritization, launch coordination, product experience, collateral quality, and regional sales execution had to be managed across multiple teams and product types at once.',
    responsibilities: [
      'Led portfolio-level product work across apps, portals, design tools, and connected products.',
      'Drove prioritization and roadmap decisions across multiple product surfaces.',
      'Created launch plans, stakeholder updates, early-adopter feedback loops, UAT plans, and release-readiness workflows.',
      'Defined US and Canada collateral standards, trade show product selection, and channel sales programs.',
      'Used user feedback and US/Canada program variants to iterate copy, workflows, launch readiness, and market execution.'
    ],
    outcomes: [
      'Improved coordination across a multi-product portfolio.',
      'Supported launches and growth across digital and connected product surfaces, including five products and $5M in incremental revenue.',
      'Helped create a more coherent customer experience across the portfolio.',
      'Drove enough demand through channel programs that supply constraints became a downstream issue.'
    ],
    whyItMattered: 'This was portfolio and program work in a technical business where hardware, software, channel realities, and customer experience all touched each other.'
  },
  {
    slug: 'baker-engineer-focused-sales-enablement',
    title: 'Baker Hughes: making technical product data easier to use',
    company: 'Baker Hughes',
    role: 'Product, Program & Sales Enablement',
    period: 'Jun 2012 - Sep 2020',
    teaser: 'Turning product data, field insight, landing pages, trade show learning, and regional case studies into assets engineers and sales teams could actually use.',
    summary: 'At Baker Hughes, the work combined product management, engineering context, digital sales enablement, and field intelligence. For the drill bits product line, the goal was to make technical attributes easier for engineers to evaluate and easier for field teams to share.',
    tags: ['Energy', 'Sales Enablement', 'Landing Pages', 'Technical GTM'],
    challenge: 'Field teams needed current, technically useful product information that engineers could actually evaluate. Printed collateral could become outdated quickly, and regional proof points needed to be easier to find and share.',
    responsibilities: [
      'Designed landing-page content for the drill bits product line so engineers could extract meaningful technical data quickly.',
      'Created geographically relevant case studies and linked them from product pages to support demand generation.',
      'Attended trade shows to gather market, customer, and competitive intelligence, then translated that insight into campaigns and sales-support content.',
      'Helped move field reps from outdated printed assets toward current digital assets they could email and share more easily.'
    ],
    outcomes: [
      'Supported growth in the applied drill bits business area from roughly $500K per year to roughly $2M per year, alongside broader product and sales execution.',
      'Improved sales enablement by giving field teams current, shareable digital assets instead of static printed collateral.',
      'Made technical product attributes easier for engineer buyers to inspect and compare.'
    ],
    whyItMattered: 'The work sat between product, marketing, analytics, and field execution. It made technical selling less painful by making complex information easier to inspect, compare, and share.'
  }
];
