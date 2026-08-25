import { COMPANY_EMAIL, SITE_URL } from "@/lib/site";

export const privacyPolicyMeta = {
  title: "Privacy Policy | UVAN",
  description:
    "Read UVAN's privacy policy to understand how we collect, use, and protect your personal data across our website and services.",
  companyLegalName: "Uvan International Liaisoning Private Limited",
  effectiveDate: "July 2026",
  jurisdiction: "Pune, India",
  summary:
    "This document sets out how UVAN collects, uses, stores, and protects personal information on our website, together with the disclaimer and terms governing use of the site.",
};

export const privacyPolicySections = [
  {
    id: "disclaimer",
    title: "Disclaimer",
    blocks: [
      {
        type: "paragraph" as const,
        text: "By clicking on the ‘Agree’ button, you expressly acknowledge having read and understood this Disclaimer & Terms of Use. If you do not agree with these terms, please click on the close button on your browser to be re-directed to leave this website.",
      },
      {
        type: "paragraph" as const,
        text: "You expressly understand, acknowledge, and agree to the following:",
      },
      {
        type: "list" as const,
        items: [
          `All material and content on the website are copyrighted and proprietary information of Uvan International Liaisoning Private Limited (“UVAN”). By subscribing to alerts or newsletters, if any, you agree to receive updates from UVAN on your registered e-mail ID or your mobile phone. If you wish to unsubscribe, please write to us at ${COMPANY_EMAIL}.`,
          "To the fullest extent permitted by law, in no event will the website, its owners, partners, developers, affiliates, or employees be liable for any direct, indirect, special, incidental, or consequential (including loss of use, data, business, or profits) damages.",
          `If you think that you have received an unsolicited invitation from UVAN to view this website, please provide details about the invitation by sending an email to ${COMPANY_EMAIL}.`,
        ],
      },
    ],
  },
  {
    id: "privacy-notice",
    title: "Privacy Policy / Website Privacy Notice",
    blocks: [
      {
        type: "paragraph" as const,
        text: `We, Uvan International Liaisoning Private Limited or any of its Directors, affiliates or subsidiaries, (“UVAN”, “We”) are the owners of the website: ${SITE_URL}/ (“Website”).`,
      },
      {
        type: "paragraph" as const,
        text: "We respect data privacy rights and are committed to protecting the Personal Information collected on this website. This privacy policy / Website Privacy Notice (“Privacy Policy”) sets forth how we collect, use, and protect the Personal Information collected on this website.",
      },
      {
        type: "notice" as const,
        text: `PLEASE READ THIS PRIVACY POLICY CAREFULLY. BY CLICKING “I AGREE” OR PROVIDING US PERSONAL INFORMATION, YOU PROVIDE SPECIFIC, INFORMED, UNCONDITIONAL, UNAMBIGUOUS CONSENT TO OUR USE OF YOUR PERSONAL INFORMATION IN ACCORDANCE WITH THE TERMS OF THIS PRIVACY POLICY. IF YOU DO NOT AGREE TO THIS PRIVACY POLICY, YOU MAY WITHDRAW YOUR CONSENT OR ALTERNATIVELY CHOOSE NOT TO PROVIDE YOUR PERSONAL INFORMATION ON THE WEBSITE. SUCH AN INTIMATION TO WITHDRAW YOUR CONSENT CAN BE PROVIDED BY WRITING TO US AT THE CONTACT DETAILS MENTIONED BELOW.`,
      },
      {
        type: "notice" as const,
        text: "IF YOU ARE ACCESSING THE WEBSITE ON BEHALF OF A THIRD PARTY, YOU REPRESENT THAT YOU HAVE THE AUTHORITY TO BIND SUCH THIRD PARTY TO THE TERMS AND CONDITIONS OF THIS PRIVACY POLICY AND, IN SUCH AN EVENT YOUR USE OF THE WEBSITE SHALL REFER TO USE BY SUCH THIRD PARTY. IF YOU DO NOT HAVE SUCH AN AUTHORITY (TO PROVIDE ANY PERSONAL INFORMATION OF A THIRD PARTY) OR DO NOT AGREE TO THE TERMS OF THIS PRIVACY POLICY, THEN YOU SHOULD REFRAIN FROM USING THE WEBSITE.",
      },
    ],
  },
  {
    id: "what-data",
    title: "What data do we collect?",
    blocks: [
      {
        type: "paragraph" as const,
        text: "For the purposes of this Privacy Policy, ‘Personal Information’ means any data about an individual who is identifiable by or in relation to such data, including the name of an individual, name of an entity, designation, email id, and resume (which may include the name of the applicant, contact number, address, qualification details, work experience, etc). The reason your Personal Information available with us is that you have provided it to us. For example, by entering into an agreement with us, giving us your business card, entering your data on our website, agreeing to receive briefings and other publications from us, or applying for a position with us. Personal Information that we may collect, and process may include:",
      },
      {
        type: "list" as const,
        items: [
          "Basic information like your name, employer and title or position.",
          "Contact information, including your e-mail address, company address, postal address and phone number.",
          "Identification and background information provided by you or otherwise collected by us as part of our business acceptance procedures.",
          "Information that you may provide to us for the purpose of a job application or availing our services.",
          "Data relating to your visit to our Website or materials and communications sent to you electronically.",
          "Any other Personal Information that you may provide to us.",
        ],
      },
      {
        type: "subheading" as const,
        text: "Website and Social media accounts",
      },
      {
        type: "paragraph" as const,
        text: "Please make sure that any Personal Information you share with us is accurate and up-to-date. You hereby agree not to provide the Personal Information of any other person. If you are sharing any Personal Information on behalf of a third organisation, you should ensure that you are duly authorised to do so.",
      },
    ],
  },
  {
    id: "accuracy",
    title: "Accuracy of information",
    blocks: [
      {
        type: "paragraph" as const,
        text: "UVAN Business Solutions follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services’ analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information.",
      },
    ],
  },
  {
    id: "cookies-tracking",
    title: "Cookies and Tracking Technologies",
    blocks: [
      {
        type: "paragraph" as const,
        text: "We may also automatically collect certain information through cookies to improve our website and offerings, such as the pattern of your use of the Website, our offerings, visits, material that you viewed or searched for; page response times, download errors, length of visits to certain pages, page interaction information, IP address, and date and time when you access or use the website. Cookies are small, encrypted files, that the website transfers to the device through which you access our website.",
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    blocks: [
      {
        type: "paragraph" as const,
        text: "We use cookies and similar tracking technologies to track Website traffic patterns and store certain registration information. Tracking technologies that are also used are beacons, tags, and scripts to collect and track information and to improve and analyse our service. If you wish to not have the information these technologies collect be used for the purpose of serving you targeted ads, the Settings menu on the menu bar of most browsers will tell you how to prevent your browser from accepting new cookies, and how to disable cookies altogether, etc.",
      },
      {
        type: "subheading" as const,
        text: "Types of cookies used",
      },
      {
        type: "list" as const,
        items: ["Strictly necessary cookies.", "Analytical or performance cookies.", "Targeting cookies."],
      },
      {
        type: "subheading" as const,
        text: "We use cookies to",
      },
      {
        type: "list" as const,
        items: [
          "Improve your experience on the Website.",
          "Understand the usage based on the geographical area.",
          "Understand the usage based on the demographics.",
          "Understand and get the usage patterns of the users.",
        ],
      },
      {
        type: "subheading" as const,
        text: "The cookies may collect the following information",
      },
      {
        type: "paragraph" as const,
        text: "Website scrolling and clicking, your operating system, browser information, CPU, GPU, and details about the service provider.",
      },
      {
        type: "subheading" as const,
        text: "Will disabling the cookies allow you to use the website?",
      },
      {
        type: "paragraph" as const,
        text: "Yes, the website will still be accessible. We will not restrict the use of the website if the cookies are disabled.",
      },
    ],
  },
  {
    id: "use-of-data",
    title: "What do we do with your data?",
    blocks: [
      {
        type: "paragraph" as const,
        text: "Personal Information is collected and used to:",
      },
      {
        type: "list" as const,
        items: [
          "Provide and improve our offerings.",
          "Handle your job application or manage our recruitment processes in any other way.",
          "Provide information and services as requested by you.",
          "Perform client communication, service, billing and administration.",
          "Manage our interaction with you.",
          "Generate statistics about our website’s usage or analysing and improving our website.",
          "Keep and manage our website.",
          "Send updates, e-mails and communications.",
          "Internal record keeping and complying or fulfilling our legal, regulatory, and risk management obligations, including establishing, exercising, or defending legal claims.",
          "Develop new products, services, features, and functionality.",
        ],
      },
    ],
  },
  {
    id: "retention",
    title: "How long do we retain your data",
    blocks: [
      {
        type: "paragraph" as const,
        text: "We endeavour to only collect such Personal Information that is necessary for the purposes indicated, and to retain such data for no longer than is necessary for such purposes. The length of time Personal Information is retained, and the criteria for determining that time, are dependent on the nature of the Personal Information and the purpose for which it was provided or collected.",
      },
      {
        type: "paragraph" as const,
        text: `Subject to this section, we will try to delete your Personal Information upon reasonable written request for the same. Please note, however, that there might be latency in deleting Personal Information from our servers and backed-up versions might exist even after deletion. For more information on where and how long your personal data is stored, and for more information on your rights of erasure and portability, please contact us at ${COMPANY_EMAIL}.`,
      },
    ],
  },
  {
    id: "security",
    title: "Our Security Measures",
    blocks: [
      {
        type: "paragraph" as const,
        text: "Your Personal Information is stored on third-party cloud servers. Although we provide appropriate firewalls and protections, we cannot warrant the security of Personal Information transmitted as these systems are not hackproof. Data pilferage due to unauthorized hacking, virus attacks, or technical issues is possible, and we will take the necessary measures to mitigate such events. You are required to be careful to avoid “phishing” scams, where someone may send you an e-mail that looks like it is from us asking for your Personal Information.",
      },
    ],
  },
  {
    id: "rights",
    title: "Your Rights",
    blocks: [
      {
        type: "paragraph" as const,
        text: "You have the right to access your Personal Information in our possession; the right to have us rectify or modify any such Personal Information; the right to have us erase or delete your Personal Information; the right to restrict us from processing such Personal Information; the right to object to our use of your Personal Information; and the right to withdraw consent at any time; the right to nominate a person to exercise your rights. Depending on the nature of your request, we may ask you to complete a Personal Information request form or seek certain details to verify the request. In certain cases, we may charge a fee for this service, but we will inform you at the time. All requests for Personal Information will be handled within a reasonable period.",
      },
      {
        type: "paragraph" as const,
        text: `If you would like to exercise ANY of these rights, please contact ${COMPANY_EMAIL}.`,
      },
    ],
  },
  {
    id: "children",
    title: "Children’s Privacy",
    blocks: [
      {
        type: "paragraph" as const,
        text: `We do not knowingly collect Personal Information from children under the age of 18 or person with disability without the prior, verifiable consent of his or her parent or lawful guardian. If you are a child under the age of 18 or person with disability, please do not provide any Personal Information. If the parent or lawful guardian of the child or a person with disability discovers that the child or person with disability has provided us with Personal Information, we request the parent or lawful guardian of the child or person with disability to contact us at ${COMPANY_EMAIL} to have the Personal Information deleted.`,
      },
    ],
  },
  {
    id: "opt-out",
    title: "Choice and Opt-Out",
    blocks: [
      {
        type: "paragraph" as const,
        text: `We may send you communications, including but not limited to (a) notices about your use of our website and offerings, including those concerning violations of use; (b) updates; (c) information regarding our offerings; and (d) newsletters. You may opt-out of receiving emails and newsletters from us by following the unsubscribe instructions provided in those emails. Alternatively, you can opt-out at any time by emailing ${COMPANY_EMAIL} with your specific concerns.`,
      },
    ],
  },
  {
    id: "external-links",
    title: "Links to other Websites",
    blocks: [
      {
        type: "paragraph" as const,
        text: "Our website may contain links to other websites or applications of your interest. Please note that we do not have any control over such other websites or applications, and you will be accessing these websites or applications at your own risk. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such websites/applications and those are not governed by this Privacy Policy. You should exercise caution and look at the privacy policies applicable to such websites or applications.",
      },
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    blocks: [
      {
        type: "paragraph" as const,
        text: "To the fullest extent permitted by law, we will not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages arising out of this Privacy Policy, including but not limited to damages for loss of profits, goodwill, data, information, or other intangible losses (even if we have been advised of the possibility of such damages).",
      },
    ],
  },
  {
    id: "governing-law",
    title: "Governing Laws and Disputes",
    blocks: [
      {
        type: "paragraph" as const,
        text: "This privacy policy shall be construed and governed by the laws of India. You agree that the courts in Pune, India, shall have exclusive jurisdiction over such disputes.",
      },
    ],
  },
  {
    id: "changes",
    title: "Changes to this Policy",
    blocks: [
      {
        type: "paragraph" as const,
        text: "We may update this Privacy Policy from time to time, and you are encouraged to check this Privacy Policy on a regular basis to be aware of the changes made to it.",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    blocks: [
      {
        type: "paragraph" as const,
        text: `If you wish to withdraw your consent or have any questions, concerns, or grievances regarding this Privacy Policy, you can reach out to us at ${COMPANY_EMAIL}.`,
      },
    ],
  },
] as const;
