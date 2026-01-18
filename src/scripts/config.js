export const staticUrl = "https://leoschweiger.com";
export const aboutMeLong =
    `I’m a student and game developer based in Salzburg, Austria, focused on creating effective, interesting and fun software. Since 2018, I have been working on projects ranging from utility tools to fully released games. My technical and artistic background allowed me to create multiple <a href="${staticUrl}/games#developed">game projects</a> already.`;
export const aboutMeShort =
    'I’m a game developer focused on creating interesting and fun software. My technical and artistic background allowed me to create multiple games already.';

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
    "itch": links["itch"],
    "github": links["github"]
};