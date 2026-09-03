const profile = {
  name: "Hoàng Thái Dương",
  youtube: "https://youtube.com/@thaiduongdeveloper",
  email: "thaiduongh504@gmail.com",
};
const stats = [
  ["9", "PROJECTS"],
  ["WEB", "CREATING"],
  ["∞", "IDEAS"],
];
const about = [
  [
    "⌘",
    "Thích làm web",
    "Thích thử nghiệm giao diện và biến ý tưởng thành những website có thể trải nghiệm.",
  ],
  [
    "◈",
    "Thích chơi game",
    "Thích chơi game, khám phá gameplay và thử làm những ý tưởng game của riêng mình.",
  ],
  [
    "✦",
    "Thích thử ý tưởng mới",
    "Không ngại bắt đầu từ một ý tưởng nhỏ rồi phát triển thành một project.",
  ],
  [
    "⌁",
    "Thích khám phá công nghệ",
    "Tìm hiểu cách các công nghệ, website và công cụ mới hoạt động.",
  ],
];
const skills = [
  ["HTML", "Markup", "Cấu trúc và nội dung website."],
  ["CSS", "UI", "Giao diện, responsive và hiệu ứng."],
  ["JavaScript", "Logic", "Tương tác và chức năng web."],
  ["Python", "Code", "Tìm hiểu và thử nghiệm project nhỏ."],
  ["Lua", "Game", "Script và thử nghiệm liên quan đến game."],
  ["Roblox Studio", "Game", "Khám phá việc tạo và thử nghiệm game."],
];
const projects = [
  {
    name: "VELIX Browser",
    desc: "Trình duyệt web do mình xây dựng để khám phá trải nghiệm duyệt web hiện đại, trực quan và tối giản.",
    url: "https://velixbrowser.lovable.app/",
    category: "WEB • BROWSER",
    label: "VELIX",
    icon: "V",
  },
  {
    name: "Nova AI Assistant",
    desc: "Project trợ lý AI tập trung vào trải nghiệm tương tác với công nghệ AI trên nền web.",
    url: "https://novaaiassistantbyduong.lovable.app/",
    category: "AI • ASSISTANT",
    label: "NOVA",
    icon: "N",
  },
  {
    name: "Game Đoán Số VIP Pro",
    desc: "Game web tương tác dựa trên cơ chế đoán số, tập trung vào trải nghiệm đơn giản, rõ ràng và dễ sử dụng.",
    url: "https://gamedoansovippro.lovable.app/",
    category: "GAME • CASUAL",
    label: "GAME",
    icon: "#",
  },
  {
    name: "Cyber Arcade 9-in-1 Collection",
    desc: "Bộ sưu tập game web gồm nhiều trải nghiệm arcade trong một project.",
    url: "https://cyberarcade9in1collection.lovable.app/",
    category: "GAME • ARCADE",
    label: "CYBER",
    icon: "9",
  },
  {
    name: "Kingdom Rush",
    desc: "Project game lấy cảm hứng từ thể loại tower defense, kết hợp chiến thuật, phòng thủ và trải nghiệm trực quan.",
    url: "https://kingdomrushbyduong.lovable.app/",
    category: "GAME • DEFENSE",
    label: "KR",
    icon: "KR",
  },
  {
    name: "Stick War Legacy",
    desc: "Project game phong cách chiến đấu người que, được thực hiện để thử nghiệm gameplay và ý tưởng game web.",
    url: "https://stickwarbyduong.lovable.app/",
    category: "GAME • ACTION",
    label: "SW",
    icon: "SW",
  },
  {
    name: "Pagely",
    desc: "Project web tập trung vào việc tạo và trình bày nội dung theo cách trực quan, gọn gàng và dễ tiếp cận.",
    url: "https://pagelydemo.lovable.app/",
    category: "WEB • INTERACTIVE",
    label: "P",
    icon: "P",
  },
  {
    name: "Nexia Meeting",
    desc: "Project web hướng tới trải nghiệm họp trực tuyến và tương tác trên nền tảng web.",
    url: "https://nexiameeting.lovable.app/",
    category: "WEB • MEETING",
    label: "NEXIA",
    icon: "N",
  },
  {
    name: "Roblox Project",
    desc: "Project liên quan đến Roblox, nơi mình thử nghiệm ý tưởng game và gameplay.",
    url: "https://links.lootlabs.gg/s?YpFYx4Ny",
    category: "ROBLOX • GAME",
    label: "ROBLOX",
    icon: "R",
  },
];
const hobbies = [
  ["⌘", "Coding", "Thích thử code và tạo những thứ của riêng mình."],
  ["🎮", "Gaming", "Thích chơi game và khám phá những game mới."],
  ["✦", "Creating", "Thích thiết kế, làm website và tạo project."],
  ["⌁", "Exploring", "Thích tìm hiểu công nghệ và thử những ý tưởng mới."],
];
const goals = [
  "Học hỏi",
  "Thử nghiệm",
  "Tạo project",
  "Cải thiện",
  "Khám phá thêm",
];
const exploring = [
  "Web Development",
  "Personal Projects",
  "UI Design",
  "Game Development",
];

const el = (s) => document.querySelector(s);
el("#stats").innerHTML = stats
  .map(
    (s) =>
      `<div class="hero-stat"><strong>${s[0]}</strong><span>${s[1]}</span></div>`,
  )
  .join("");
el("#aboutCards").innerHTML = about
  .map(
    (x) =>
      `<article class="about-card reveal"><div class="about-icon">${x[0]}</div><h3>${x[1]}</h3><p>${x[2]}</p></article>`,
  )
  .join("");
el("#skillsGrid").innerHTML = skills
  .map(
    (x) =>
      `<article class="skill-card reveal"><div class="skill-card-top"><span>${x[0]}</span><small>${x[1]}</small></div><p>${x[2]}</p></article>`,
  )
  .join("");
el("#hobbiesGrid").innerHTML = hobbies
  .map(
    (x) =>
      `<article class="hobby-card reveal"><div class="hobby-icon">${x[0]}</div><h3>${x[1]}</h3><p>${x[2]}</p><span class="card-arrow">↗</span></article>`,
  )
  .join("");
el("#timeline").innerHTML = goals
  .map(
    (x, i) =>
      `<div class="timeline-item"><span class="timeline-dot">0${i + 1}</span><div><small>STEP 0${i + 1}</small><h3>${x}</h3></div></div>`,
  )
  .join("");
el("#exploring").innerHTML = exploring
  .map((x, i) => `<span><i>0${i + 1}</i>${x}</span>`)
  .join("");
el("#projectsGrid").innerHTML = projects
  .map(
    (p, i) =>
      `<article class="project-card reveal"><a class="project-open" href="${p.url}" target="_blank" rel="noopener noreferrer" aria-label="Mở ${p.name}"><span class="project-icon">${p.icon}</span><span class="project-index">${String(i + 1).padStart(2, "0")}</span><div class="project-body"><span class="project-category">${p.category}</span><h3>${p.name}</h3><p>${p.desc}</p></div><span class="project-link">Xem dự án <b>↗</b></span></a></article>`,
  )
  .join("");
el("#contactLinks").innerHTML =
  `<a class="contact-link" href="${profile.youtube}" target="_blank" rel="noopener noreferrer"><span class="contact-icon">▶</span><span><strong>YouTube</strong><small>@thaiduongdeveloper</small></span><b>↗</b></a><a class="contact-link" href="https://zaloapp.com/qr/p/1ef5s0d3gve0x?src=qr" target="_blank" rel="noopener noreferrer"><span class="contact-icon">Z</span><span><strong>Zalo</strong><small>Kết nối qua Zalo</small></span><b>↗</b></a><div class="contact-link"><span class="contact-icon">@</span><span><strong>Email</strong><small>${profile.email}</small></span><button id="copyEmail" class="copy-btn" type="button">COPY</button></div>`;

const nav = el("#nav"),
  menuToggle = el("#menuToggle");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }),
);

const sectionEls = [...document.querySelectorAll("main section[id]")],
  navLinks = [...nav.querySelectorAll("a")];
const sectionObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting)
        navLinks.forEach((link) =>
          link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + entry.target.id,
          ),
        );
    }),
  { rootMargin: "-35% 0px -55% 0px" },
);
sectionEls.forEach((s) => sectionObserver.observe(s));

const revealObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    }),
  { threshold: 0.08 },
);
document.querySelectorAll(".reveal").forEach((x) => revealObserver.observe(x));

const progress = el("#scrollProgress"),
  backTop = el("#backTop");
function onScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + "%";
  backTop.classList.toggle("show", scrollY > 600);
  document
    .querySelector(".site-header")
    ?.classList.toggle("scrolled", scrollY > 12);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const glow = el(".cursor-glow");
if (matchMedia("(pointer:fine)").matches) {
  window.addEventListener(
    "pointermove",
    (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    },
    { passive: true },
  );
}

const particles = el("#techParticles");
if (particles) {
  const count = 28;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    p.style.setProperty("--x", `${Math.random() * 100}%`);
    p.style.setProperty("--y", `${Math.random() * 100}%`);
    p.style.setProperty("--s", `${0.5 + Math.random() * 1.5}px`);
    p.style.setProperty("--d", `${3.5 + Math.random() * 5}s`);
    p.style.setProperty("--delay", `${-Math.random() * 7}s`);
    frag.appendChild(p);
  }
  particles.appendChild(frag);
}

const toast = el("#toast"),
  copyEmail = el("#copyEmail");
copyEmail?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(profile.email);
    toast.textContent = "Đã sao chép email!";
  } catch {
    toast.textContent = profile.email;
  }
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
});
