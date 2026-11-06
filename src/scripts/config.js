export const staticUrl = "https://leoschweiger.com";
export const aboutMeLong =
    `I’m a student and software developer based in Salzburg, Austria, focused on creating effective, interesting and fun projects. My technical and artistic background allowed me to create multiple <a href="${staticUrl}/games#developed">projects</a> already.`;
export const aboutMeShort =
    'I’m a software developer focused on creating interesting and fun software.';

export const mainTitle = "leo schweiger";

export const resume = "/resume-leo-schweiger.pdf"
export const email = "leo@leoschweiger.com"
export const emailDisplay = "leo＠leoschweiger.com"
export const links = {
    [email]: `mailto:${email}`,
    "linked in": "https://www.linkedin.com/in/leo-schweiger-256987339/",
    "itch": "https://leoschweiger.itch.io/",
    "github": "https://github.com/leoschweiger",
    "leoschweiger.com": staticUrl,
};

export const footerLinks = {
    [emailDisplay]: links[email],
    "linked in": links["linked in"],
    "itch.io": links["itch"],
    "github": links["github"]
};