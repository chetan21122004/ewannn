export type PressArticleCategory = "Case Study" | "Insights" | "Press" | "Directory";

export type PressArticleEntry = {
  id: string;
  title: string;
  copy: string;
  tag: PressArticleCategory;
  href: string;
  /** Opens in a new tab when true (external URLs and PDFs). */
  external?: boolean;
  featured?: boolean;
  image?: string;
};

/** External press coverage, published articles, and directory listings from the legacy Ewan media hub. */
export const PRESS_ARTICLES_CATALOG: PressArticleEntry[] = [
  {
    id: "showa-gloves-japan-partnership",
    title: "Building Strong International Ties: UVAN's Successful Partnership with SHOWA Gloves Japan",
    copy: "How UVAN orchestrated market research, distributor meetings, interpretation, and on-ground logistics for SHOWA's India entry.",
    tag: "Case Study",
    href: "/case-study/showa-japan",
    featured: true,
    image: "/page-assets/Building-Strong-International-Ties-Header-img-V2.jpg",
  },
  {
    id: "harvesting-asian-prosperity",
    title: "Harvesting Asian Prosperity Together",
    copy: "The agricultural sector was a highlight of the government work report - exploring Indo-Asian collaboration opportunities.",
    tag: "Insights",
    href: "https://www.ewan.co.in/wp-content/uploads/2024/09/Harvesting-Asian-Prosperity-Together.pdf",
    external: true,
    image: "/stitch/import-export/philosophy.jpg",
  },
  {
    id: "designrush-profile",
    title: "UVAN on DesignRush",
    copy: "View UVAN's agency profile on DesignRush - market entry, language services, and cross-border operations.",
    tag: "Directory",
    href: "https://www.designrush.com/agency/profile/ewan",
    external: true,
    image: "/stitch/insights/insight-asset-04.jpg",
  },
  {
    id: "boycott-chinese-products-india",
    title: "Can we truly boycott Chinese products in India?",
    copy: "A business-oriented analysis of India's economic relationship with Chinese goods and supply chains.",
    tag: "Press",
    href: "https://www.bytesofindia.com/newsdetails?NewsId=4620229552230953624&title=Jagbhar%20Jhirpalelya%20Chinache%20Antarang%20-%201&SectionId=1002&SectionName=Be%20Positive",
    external: true,
  },
  {
    id: "china-business-culture-history",
    title: "Business-oriented mentality and history of China",
    copy: "How China's commercial culture and historical context shape modern trade relationships.",
    tag: "Press",
    href: "https://www.bytesofindia.com/newsdetails/?NewsId=4660534694301534877&title=China%20business%20culture&SectionId=1002&SectionName=Be%20Positive",
    external: true,
  },
  {
    id: "china-covid-recovery",
    title: "China's story of overcoming the COVID-19 pandemic",
    copy: "How China's manufacturing sector rebounded and what it means for global supply chains.",
    tag: "Press",
    href: "https://www.bytesofindia.com/newsdetails/?NewsId=5270530112082538828&title=Jagbhar%20Jhirpalelya%20Chinache%20Antarang%20-%202&SectionId=1002&SectionName=Be%20Positive",
    external: true,
  },
  {
    id: "india-imports-from-china",
    title: "India's import from China: raw material to finished goods",
    copy: "A deep dive into India's trade and technology dependency on China across key sectors.",
    tag: "Press",
    href: "https://www.bytesofindia.com/newsdetails/?NewsId=5584968895459754128&title=Jagbhar%20Jhirpalelya%20Chinache%20Antarang%20-%205&SectionId=1002&SectionName=Be%20Positive",
    external: true,
  },
  {
    id: "chinese-investment-india",
    title: "How much money has China invested in India?",
    copy: "Tracking Chinese FDI in India and policy changes after tightening of FDI norms for neighbouring countries.",
    tag: "Press",
    href: "https://www.bytesofindia.com/newsdetails/?NewsId=5297982256231880202&title=Chinese%20investment%20in%20India&SectionId=1002&SectionName=Be%20Positive",
    external: true,
  },
  {
    id: "india-agro-export-china",
    title: "India can increase export of agro products to China",
    copy: "Exploring untapped potential for Indian agricultural exports and stronger bilateral trade.",
    tag: "Press",
    href: "https://www.bytesofindia.com/newsdetails?NewsId=5500783612555196153&title=Jagbhar%20Jhirpalelya%20Chinache%20Antarang%20-%206&SectionId=1002&SectionName=Be%20Positive",
    external: true,
  },
  {
    id: "china-world-factory",
    title: "From an agriculture economy to the 'world factory'",
    copy: "How China transformed its economic model and lessons for emerging market players.",
    tag: "Press",
    href: "https://www.bytesofindia.com/newsdetails/?NewsId=5478087530686533018&title=How%20china%20became%20factory%20of%20world&SectionId=1002&SectionName=Be%20Positive",
    external: true,
  },
  {
    id: "india-fdi-neighbouring-countries",
    title: "India tightened FDI policy for neighbouring countries",
    copy: "Policy shifts affecting foreign direct investment from China and other neighbouring markets.",
    tag: "Press",
    href: "https://www.bytesofindia.com/newsdetails?NewsId=5237432887813550752&title=China%20FDI&SectionId=1002&SectionName=Be%20Positive",
    external: true,
  },
  {
    id: "india-trade-tech-dependency-china",
    title: "India's trade and technology dependency on China",
    copy: "Examining India's reliance on Chinese inputs, components, and technology across industries.",
    tag: "Press",
    href: "https://www.bytesofindia.com/newsdetails?NewsId=4993578121101671223",
    external: true,
  },
  {
    id: "china-one-belt-one-road",
    title: "China's ambitious project 'One Belt One Road'",
    copy: "Understanding the Belt and Road Initiative and its implications for global trade corridors.",
    tag: "Press",
    href: "https://www.bytesofindia.com/newsdetails/?NewsId=4853772775737809002&title=China%20-%20One%20Belt%20One%20Road&SectionId=1002&SectionName=Be%20Positive",
    external: true,
  },
  {
    id: "made-in-china-europe",
    title: "Made in China can be seen in Europe too",
    copy: "How Chinese manufacturing presence extends across European markets and consumer goods.",
    tag: "Press",
    href: "https://www.bytesofindia.com/newsdetails/?NewsId=5493272224263577476&title=Made%20in%20China%20In%20European%20Countries&SectionId=1002&SectionName=Be%20Positive",
    external: true,
  },
  {
    id: "why-chinese-products-cheap",
    title: "Unleashing the secret: Why are Chinese products cheap?",
    copy: "Factors behind China's manufacturing cost advantages and global pricing dynamics.",
    tag: "Press",
    href: "https://www.bytesofindia.com/newsdetails/?NewsId=5530813754745952812&title=Why%20Chinese%20goods%20are%20cheap?&SectionId=1002&SectionName=Be%20Positive",
    external: true,
  },
  {
    id: "chinese-companies-enter-india",
    title: "Many Chinese companies wish to enter the Indian market",
    copy: "Why Chinese firms look to India for growth and what entry pathways they consider.",
    tag: "Press",
    href: "https://www.bytesofindia.com/newsdetails?NewsId=5396382741763649320&title=Chinese%20Companies%20in%20India&SectionId=1002&SectionName=Be%20Positive",
    external: true,
  },
  {
    id: "us-china-trade-war-india",
    title: "US-China trade war can benefit India",
    copy: "How evolving US-China trade dynamics can open new corridors for Indian exporters.",
    tag: "Press",
    href: "https://www.bytesofindia.com/newsdetails?NewsId=4746263661885901990&title=USA-China%20Trade%20War&SectionId=1002&SectionName=Be%20Positive",
    external: true,
  },
  {
    id: "china-africa-trade",
    title: "What China wants from African countries: Everything",
    copy: "China's economic engagement across Africa and the scale of bilateral trade relationships.",
    tag: "Press",
    href: "https://www.bytesofindia.com/newsdetails?NewsId=5084187731353671753&title=African%20Countries%20&%20China&SectionId=1002&SectionName=Be%20Positive",
    external: true,
  },
];

export const PRESS_ARTICLE_DEFAULT_IMAGE = "/stitch/insights/gazette-market-insight.jpg";
