import awsCloudImage from "../assets/certificates/images/aws-cloud.png";
import awsDeveloperImage from "../assets/certificates/images/aws-developer.png";
import awsDataEngineerImage from "../assets/certificates/images/aws-data-engineer.png";
import infosysImage from "../assets/certificates/images/infosys.png";

import awsCloudPdf from "../assets/certificates/pdf/aws-cloud.pdf";
import awsDeveloperPdf from "../assets/certificates/pdf/aws-developer.pdf";
import awsDataEngineerPdf from "../assets/certificates/pdf/aws-data-engineer.pdf";
import infosysPdf from "../assets/certificates/pdf/infosys-fullstack.pdf";

import redHatPdf from "../assets/certificates/pdf/Arushi_Red Hat Academy certificate.pdf";
import ciscoPdf from "../assets/certificates/pdf/CISCO CA1.pdf";
import dartPdf from "../assets/certificates/pdf/Dart Certificate.pdf";
import sqlProgrammingPdf from "../assets/certificates/pdf/Database_Programming_with_SQL_-Certificate.pdf";
import djangoPdf from "../assets/certificates/pdf/Django Certificate.pdf";
import flaskPdf from "../assets/certificates/pdf/Flask Certificate.pdf";
import flutterPdf from "../assets/certificates/pdf/Flutter Certificate.pdf";
import githubBootcampImg from "../assets/certificates/pdf/GitHub Bootcamp Certificate(DSDL).jpeg";
import dbmsPdf from "../assets/certificates/pdf/Infosys DBMS Certificate.pdf";
import javaOopsPdf from "../assets/certificates/pdf/Java oops certificate.pdf";
import javascriptPdf from "../assets/certificates/pdf/Javascript Certificate.pdf";
import level7Pdf from "../assets/certificates/pdf/Level 7 certificate.pdf";
import networkingPdf from "../assets/certificates/pdf/Networking Essentials Certificate.pdf";
import nosqlPdf from "../assets/certificates/pdf/NoSql DBS Certificate.pdf";
import sqlAnalystDevtownPdf from "../assets/certificates/pdf/SQL for Analyst Certificate(Devtown).pdf";
import sqlAnalystGooglePdf from "../assets/certificates/pdf/SQL for Analyst Certificate(Google Developer).pdf";

export const certificates = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2026",
    image: awsCloudImage,
    pdf: awsCloudPdf,
    tags: ["AWS", "Cloud"],
  },

  {
    id: 2,
    title: "AWS Certified Developer Associate",
    issuer: "Amazon Web Services",
    date: "2026",
    image: awsDeveloperImage,
    pdf: awsDeveloperPdf,
    tags: ["AWS", "Developer"],
  },

  {
    id: 3,
    title: "AWS Certified Data Engineer Associate",
    issuer: "Amazon Web Services",
    date: "2026",
    image: awsDataEngineerImage,
    pdf: awsDataEngineerPdf,
    tags: ["AWS", "Data"],
  },

  {
    id: 4,
    title: "AI Accelerated Web Developer Bootcamp",
    issuer: "Infosys Springboard",
    date: "2026",
    image: infosysImage,
    pdf: infosysPdf,
    tags: ["React", "Full Stack"],
  },

  {
    id: 5,
    title: "Red Hat Academy Certificate",
    issuer: "Red Hat Academy",
    date: "2026",
    image: infosysImage,
    pdf: redHatPdf,
    tags: ["Linux", "Red Hat"],
  },

  {
    id: 6,
    title: "Cisco CA1",
    issuer: "Cisco",
    date: "2026",
    image: infosysImage,
    pdf: ciscoPdf,
    tags: ["Cisco", "Networking"],
  },

  {
    id: 7,
    title: "Dart Certificate",
    issuer: "Programming",
    date: "2026",
    image: infosysImage,
    pdf: dartPdf,
    tags: ["Dart", "Flutter"],
  },

  {
    id: 8,
    title: "Database Programming with SQL",
    issuer: "Oracle Academy",
    date: "2026",
    image: infosysImage,
    pdf: sqlProgrammingPdf,
    tags: ["SQL", "Database"],
  },

  {
    id: 9,
    title: "Django Certificate",
    issuer: "Python",
    date: "2026",
    image: infosysImage,
    pdf: djangoPdf,
    tags: ["Python", "Django"],
  },

  {
    id: 10,
    title: "Flask Certificate",
    issuer: "Python",
    date: "2026",
    image: infosysImage,
    pdf: flaskPdf,
    tags: ["Python", "Flask"],
  },

  {
    id: 11,
    title: "Flutter Certificate",
    issuer: "Flutter",
    date: "2026",
    image: infosysImage,
    pdf: flutterPdf,
    tags: ["Flutter", "Mobile"],
  },

  {
    id: 12,
    title: "GitHub Bootcamp",
    issuer: "DSDL",
    date: "2026",
    image: githubBootcampImg,
    pdf: githubBootcampImg,
    tags: ["Git", "GitHub"],
  },

  {
    id: 13,
    title: "DBMS Certificate",
    issuer: "Infosys",
    date: "2026",
    image: infosysImage,
    pdf: dbmsPdf,
    tags: ["DBMS"],
  },

  {
    id: 14,
    title: "Java OOPs Certificate",
    issuer: "Java",
    date: "2026",
    image: infosysImage,
    pdf: javaOopsPdf,
    tags: ["Java"],
  },

  {
    id: 15,
    title: "JavaScript Certificate",
    issuer: "JavaScript",
    date: "2026",
    image: infosysImage,
    pdf: javascriptPdf,
    tags: ["JavaScript"],
  },

  {
    id: 16,
    title: "Level 7 Certificate",
    issuer: "Certification",
    date: "2026",
    image: infosysImage,
    pdf: level7Pdf,
    tags: ["Level 7"],
  },

  {
    id: 17,
    title: "Networking Essentials",
    issuer: "Cisco",
    date: "2026",
    image: infosysImage,
    pdf: networkingPdf,
    tags: ["Networking"],
  },

  {
    id: 18,
    title: "NoSQL DBS Certificate",
    issuer: "Database",
    date: "2026",
    image: infosysImage,
    pdf: nosqlPdf,
    tags: ["NoSQL"],
  },

  {
    id: 19,
    title: "SQL for Analyst (Devtown)",
    issuer: "Devtown",
    date: "2026",
    image: infosysImage,
    pdf: sqlAnalystDevtownPdf,
    tags: ["SQL"],
  },

  {
    id: 20,
    title: "SQL for Analyst (Google Developer)",
    issuer: "Google Developer",
    date: "2026",
    image: infosysImage,
    pdf: sqlAnalystGooglePdf,
    tags: ["SQL"],
  },
];