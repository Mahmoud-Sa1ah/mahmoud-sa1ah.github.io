export const siteConfig = {
    name: "Mahmoud Salah Mahmoud Abd El Malek",
    professionalName: "Mahmoud Salah",
    alias: "m0xsa1ah",
    role: "Cybersecurity Engineer & Penetration Tester",
    location: "Assiut, Egypt",
    headline: "Securing systems. Breaking vulnerabilities. Building resilient infrastructures.",
    about: "I am a Cybersecurity Engineer with a strong foundation in penetration testing and vulnerability assessment. I have practical experience in real-world web and internal network testing, supported by a strong networking background (CCNA level). My passion lies in red teaming, identifying critical security flaws, and assisting in the design of secure architectures. I have gained hands-on experience through internships and roles at ITSolera, ITI, and CIB Bank.",
    email: "Mahmoudsalah12341992@gmail.com",
    links: {
        github: "https://github.com/Mahmoud-sa1ah/",
        linkedin: "http://www.linkedin.com/in/mahmoud-salah-40264b280",
        medium: "https://medium.com/@mahmoudsa1ah"
    }
};

export const skillsData = [
    {
        category: "Web Security",
        skills: ["XSS", "SQL Injection", "CSRF", "SSRF", "IDOR", "RCE"]
    },
    {
        category: "Security Tools",
        skills: ["Burp Suite", "Nmap", "Metasploit", "Wireshark", "Hydra", "Kali Linux"]
    },
    {
        category: "Networking",
        skills: ["VLANs", "OSPF", "NAT/PAT", "HSRP", "Network Segmentation", "Firewalls", "VPN"]
    },
    {
        category: "Programming",
        skills: ["Python (Security Automation)", "Bash", "PowerShell", "C++", "PHP"]
    },
    {
        category: "Cloud & Virtualization",
        skills: ["VMware", "VirtualBox", "AWS (Foundations)"]
    }
];

export const projectsData = [
    {
        title: "University Network Infrastructure Project",
        description: "Designed a segmented secure network with robust firewall rules, VLAN architecture, OSPF routing, and strict access controls.",
        problem: "The university's network lacked segmentation, making it vulnerable to lateral movement and unauthorized access.",
        approach: "Implemented a segmented VLAN architecture, applying OSPF for dynamic routing and configuring firewall rules for strict access control between segments.",
        tools: ["Cisco Packet Tracer", "GNS3", "Firewalls", "Switches", "Routers"],
        lessons: "Gained hands-on experience with enterprise-level network segmentation and secure routing protocols.",
        github: "https://github.com/Mahmoud-Sa1ah/DEPI-University-Network-Infrastructure-Project",
        category: "Networking"
    },
    {
        title: "Payload-Generator-Offensive-Security",
        description: "An offensive security tool designed to generate various types of payloads for penetration testing and red teaming.",
        problem: "Manual payload generation can be repetitive and time-consuming during engagements.",
        approach: "Created an automated script to quickly generate custom payloads for different scenarios.",
        tools: ["Python", "Offensive Security"],
        lessons: "Gained deeper insight into payload structure, evasion techniques, and exploit delivery methods.",
        github: "https://github.com/Mahmoud-Sa1ah/Payload-Generator-Offensive-Security",
        category: "Tooling"
    },
    {
        title: "Reconnaissance-Automated-Tool",
        description: "Built automated Python scripts for information gathering and port scanning to streamline the initial stages of penetration testing.",
        problem: "Manual reconnaissance was time-consuming and often missed hidden endpoints.",
        approach: "Utilized Python's libraries to automate banner grabbing, port discovery, and basic web directory enumeration.",
        tools: ["Python", "Socket", "Requests"],
        lessons: "Learned how to efficiently parse network responses and handle asynchronous concurrent scanning.",
        github: "https://github.com/Mahmoud-Sa1ah/Mahmoud-Sa1ah-Reconnaissance-Automated-Tool",
        category: "Tooling"
    },
    {
        title: "Simple-password-strength-tester",
        description: "A utility script to evaluate the strength and complexity of passwords against common security policies.",
        problem: "Users often create weak passwords; a local utility is needed to validate strength safely without transmitting it.",
        approach: "Implemented a script to check password length, character diversity, and common patterns to determine entropy.",
        tools: ["Python", "Security Fundamentals"],
        lessons: "Understood password entropy and best practices for enforcing strong authentication credentials.",
        github: "https://github.com/Mahmoud-Sa1ah/Simple-password-strength-tester",
        category: "Tooling"
    }
];

export const experienceData = [
    {
        role: "Penetration Testing Intern",
        company: "ITSolera",
        date: "Recent",
        responsibilities: [
            "Conducted vulnerability assessments on web applications.",
            "Identified and reported critical security flaws.",
            "Collaborated with the team to propose remediation strategies."
        ],
        tools: ["Burp Suite", "Nmap", "Owasp ZAP"],
        impact: "Helped secure multiple internal projects before deployment.",
        image: "/Mahmoud Salah Mahmoud Abd El malek (1) itisolera internship.jpg"
    },
    {
        role: "Penetration Testing Intern",
        company: "ITI",
        date: "Past",
        responsibilities: [
            "Participated in comprehensive red team exercises.",
            "Gained hands-on experience with real-world exploitation."
        ],
        tools: ["Metasploit", "Wireshark", "Kali Linux"],
        impact: "Improved offensive security skillsets and teamwork.",
        image: "/iti certificate.jpg"
    },
    {
        role: "Trainee",
        company: "CIB Bank",
        date: "Past",
        responsibilities: [
            "Studied enterprise banking security architectures.",
            "Learned about compliance and secure network implementations."
        ],
        tools: ["Enterprise Security Concepts", "Networking"],
        impact: "Gained insight into enterprise-grade security operations."
    }
];

export const certificationsData = [
    { name: "eJPT (eLearnSecurity Junior Penetration Tester)", image: "/ejpt cert from THM.png" },
    { name: "Huawei HCCDA Tech Essentials", image: "/Mahmoud Salah --HCCDA-Tech Essentials.png" },
    { name: "IBM Cybersecurity Certificate", image: "/IBM CERT.png" },
    { name: "CyberTalents Certificate", image: "/certificate cybertalents.jpg" },
    { name: "Cisco Cybersecurity Engineering (DEPI)", image: "/Cybersecurity as a logo not cert.png" },
    { name: "AWS Academy Cloud Architecting", image: "/aws.png" },
    { name: "eCIR Prep (eLearnSecurity Certified Incident Responder Prep)", image: "/ecir cert .png" },
    { name: "Linux Administration 1", image: "/linux admin 1.png" }
];
