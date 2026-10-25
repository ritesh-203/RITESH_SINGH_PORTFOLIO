/**
 * RITESH SINGH - PORTFOLIO INTERACTIVITY & MOTION SCRIPT
 * Production-ready, fully accessible, clean ES6+ JavaScript
 */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide Icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // State
  const state = {
    theme: localStorage.getItem("portfolio-theme") || "dark",
    activeSkillCategory: "all",
    activeCertFilter: "all",
    terminalHistoryIndex: -1,
    terminalCommandHistory: [],
  };

  /* ============================================================
     1. THEME SWITCHER (Dark & Light)
     ============================================================ */
  const htmlRoot = document.documentElement;
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeIconDark = document.getElementById("theme-icon-dark");
  const themeIconLight = document.getElementById("theme-icon-light");

  function applyTheme(theme) {
    state.theme = theme;
    htmlRoot.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);

    if (theme === "dark") {
      themeIconDark.classList.add("hidden");
      themeIconLight.classList.remove("hidden");
    } else {
      themeIconDark.classList.remove("hidden");
      themeIconLight.classList.add("hidden");
    }

    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  applyTheme(state.theme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const nextTheme = state.theme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      showToast(`Switched to ${nextTheme} mode`, "info");
    });
  }

  /* ============================================================
     2. MOBILE MENU NAVIGATION
     ============================================================ */
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIconOpen = document.getElementById("menu-icon-open");
  const menuIconClose = document.getElementById("menu-icon-close");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  function toggleMobileMenu() {
    const isExpanded = !mobileMenu.classList.contains("hidden");
    if (isExpanded) {
      mobileMenu.classList.add("hidden");
      menuIconOpen.classList.remove("hidden");
      menuIconClose.classList.add("hidden");
    } else {
      mobileMenu.classList.remove("hidden");
      menuIconOpen.classList.add("hidden");
      menuIconClose.classList.remove("hidden");
    }
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", toggleMobileMenu);
  }

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (!mobileMenu.classList.contains("hidden")) {
        toggleMobileMenu();
      }
    });
  });

  /* ============================================================
     3. TOAST NOTIFICATION SYSTEM
     ============================================================ */
  const toastContainer = document.getElementById("toast-container");

  window.showToast = function (message, type = "success") {
    if (!toastContainer) return;

    const toast = document.createElement("div");
    toast.className = "toast";

    let iconName = "check-circle";
    let iconColor = "text-emerald-400";
    if (type === "info") {
      iconName = "info";
      iconColor = "text-brand-400";
    } else if (type === "error") {
      iconName = "alert-circle";
      iconColor = "text-rose-400";
    }

    toast.innerHTML = `
      <i data-lucide="${iconName}" class="w-4 h-4 ${iconColor}"></i>
      <span class="text-xs font-medium">${message}</span>
    `;

    toastContainer.appendChild(toast);
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }

    requestAnimationFrame(() => {
      toast.classList.add("show");
    });

    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 350);
    }, 3200);
  };

  /* ============================================================
     4. RENDER SKILLS & FILTERING (Focused 7 Core Skills)
     ============================================================ */
  const skillsGrid = document.getElementById("skills-grid");
  const skillFilterButtons = document.querySelectorAll("#skill-filter-buttons .skill-tab-btn");

  function renderSkills(category = "all") {
    if (!skillsGrid || !window.PORTFOLIO_DATA) return;
    skillsGrid.innerHTML = "";

    const skills = window.PORTFOLIO_DATA.skills || [];
    let filteredSkills = skills;

    if (category === "languages") {
      filteredSkills = skills.filter((s) => s.category === "languages" || s.id === "javascript");
    } else if (category === "web") {
      filteredSkills = skills.filter((s) => s.category === "web");
    } else if (category === "dsa") {
      filteredSkills = skills.filter((s) => s.category === "dsa" || s.category === "ai");
    }

    filteredSkills.forEach((skill) => {
      const card = document.createElement("div");
      card.className = "glass-card p-5 rounded-2xl flex flex-col justify-between group hover:border-brand-400/50 transition-all";
      card.innerHTML = `
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-400 group-hover:scale-110 group-hover:bg-brand-500/10 transition-all shadow-md">
              <i data-lucide="${skill.icon || 'code'}" class="w-5 h-5"></i>
            </div>
            <span class="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-brand-400">
              ${skill.badge}
            </span>
          </div>
          <div>
            <h4 class="font-bold text-base text-main group-hover:text-brand-400 transition-colors">${skill.name}</h4>
            <p class="text-xs text-muted mt-1 leading-relaxed">${skill.description}</p>
          </div>
        </div>
        <div class="pt-4 border-t border-white/5 mt-4 flex items-center justify-between text-[11px] font-mono">
          <span class="text-dim">Proficiency</span>
          <span class="text-emerald-400 font-semibold">${skill.level}</span>
        </div>
      `;
      skillsGrid.appendChild(card);
    });

    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  skillFilterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      skillFilterButtons.forEach((b) => {
        b.classList.remove("active", "bg-brand-500", "text-white", "shadow-md", "shadow-brand-500/20");
        b.classList.add("bg-white/5", "text-muted", "border-white/10");
      });
      btn.classList.add("active", "bg-brand-500", "text-white", "shadow-md", "shadow-brand-500/20");
      btn.classList.remove("bg-white/5", "text-muted", "border-white/10");

      state.activeSkillCategory = btn.dataset.category;
      renderSkills(state.activeSkillCategory);
    });
  });

  renderSkills("all");

  /* ============================================================
     5. RENDER CERTIFICATES & CREDENTIALS
     ============================================================ */
  const certificatesGrid = document.getElementById("certificates-grid");
  const certFilterButtons = document.querySelectorAll("#cert-filter-buttons .cert-tab-btn");

  function renderCertificates(filter = "all") {
    if (!certificatesGrid || !window.PORTFOLIO_DATA) return;
    certificatesGrid.innerHTML = "";

    const certificates = window.PORTFOLIO_DATA.certificates || [];
    const filteredCerts = filter === "all" 
      ? certificates 
      : certificates.filter((c) => c.category === filter);

    filteredCerts.forEach((cert) => {
      const card = document.createElement("div");
      card.className = "glass-card rounded-2xl overflow-hidden group flex flex-col justify-between hover:border-brand-400/50 transition-all";
      
      const skillsHtml = cert.skillsLearned.map((skill) => `
        <span class="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-muted">
          ${skill}
        </span>
      `).join("");

      const verifyLabel = cert.isCredly ? "Verify on Credly" : "View Certificate";

      card.innerHTML = `
        <div class="relative overflow-hidden bg-black/40 border-b border-white/10 aspect-video flex items-center justify-center p-3">
          <img src="${cert.image}" alt="${cert.title}" class="w-full h-full object-contain rounded-lg group-hover:scale-102 transition-transform duration-500" />
          <div class="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur border border-brand-400/40 text-[10px] font-mono text-brand-400 flex items-center gap-1.5 shadow-lg">
            <i data-lucide="check-circle-2" class="w-3 h-3 text-emerald-400"></i>
            <span>${cert.badge}</span>
          </div>
        </div>

        <div class="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
          <div class="space-y-3">
            <div class="flex items-center justify-between text-xs font-mono text-muted">
              <span class="text-brand-400 font-semibold flex items-center gap-1">
                <i data-lucide="award" class="w-3.5 h-3.5"></i>
                ${cert.issuer}
              </span>
              <span>${cert.issueDate}</span>
            </div>

            <h3 class="text-xl font-bold text-main group-hover:text-brand-400 transition-colors leading-snug">
              ${cert.title}
            </h3>

            <p class="text-xs sm:text-sm text-muted leading-relaxed line-clamp-3">
              ${cert.shortDesc}
            </p>

            <div class="flex flex-wrap gap-1.5 pt-1">
              ${skillsHtml}
            </div>
          </div>

          <div class="pt-5 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
            <button data-cert-id="${cert.id}" class="view-cert-btn inline-flex items-center gap-1.5 text-xs font-semibold text-brand-400 hover:text-brand-300 cursor-pointer">
              <span>View Credential Details</span>
              <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
            </button>

            <a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="p-2 px-3 rounded-lg bg-brand-500/10 hover:bg-brand-500/20 border border-brand-500/30 text-brand-400 hover:text-brand-300 text-xs transition-colors flex items-center gap-1.5 font-semibold" title="Verify or view full certificate">
              <i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-400"></i>
              <span class="text-[11px] font-mono">${verifyLabel}</span>
              <i data-lucide="external-link" class="w-3 h-3 opacity-60"></i>
            </a>
          </div>
        </div>
      `;
      certificatesGrid.appendChild(card);
    });

    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }

    document.querySelectorAll(".view-cert-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        openCertificateModal(btn.dataset.certId);
      });
    });
  }

  certFilterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      certFilterButtons.forEach((b) => {
        b.classList.remove("active", "bg-brand-500", "text-white", "shadow-md", "shadow-brand-500/20");
        b.classList.add("bg-white/5", "text-muted", "border-white/10");
      });
      btn.classList.add("active", "bg-brand-500", "text-white", "shadow-md", "shadow-brand-500/20");
      btn.classList.remove("bg-white/5", "text-muted", "border-white/10");

      state.activeCertFilter = btn.dataset.filter;
      renderCertificates(state.activeCertFilter);
    });
  });

  renderCertificates("all");

  /* ============================================================
     6. CERTIFICATE DETAIL MODAL
     ============================================================ */
  const projectModal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-content");
  const modalCloseBtn = document.getElementById("modal-close-btn");

  function openCertificateModal(certId) {
    if (!projectModal || !modalContent || !window.PORTFOLIO_DATA) return;
    const cert = window.PORTFOLIO_DATA.certificates.find((c) => c.id === certId);
    if (!cert) return;

    const topicsList = cert.topics.map((t) => `
      <li class="flex items-start gap-2 text-xs sm:text-sm text-muted">
        <i data-lucide="check-circle" class="w-4 h-4 text-emerald-400 mt-0.5 shrink-0"></i>
        <span>${t}</span>
      </li>
    `).join("");

    const skillsHtml = cert.skillsLearned.map((s) => `
      <span class="text-xs font-mono px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-brand-400">
        ${s}
      </span>
    `).join("");

    modalContent.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-center justify-between flex-wrap gap-2">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-full bg-brand-400/10 border border-brand-400/20 text-xs font-mono text-brand-400">
              ${cert.badge}
            </span>
            <span class="text-xs font-mono text-emerald-400 flex items-center gap-1">
              <i data-lucide="check-circle-2" class="w-3.5 h-3.5"></i>
              Verified Credential
            </span>
          </div>
          <span class="text-xs font-mono text-muted">
            Issued: ${cert.issueDate}
          </span>
        </div>

        <h3 class="text-2xl sm:text-3xl font-extrabold text-main">
          ${cert.title}
        </h3>
        <p class="text-xs sm:text-sm font-mono text-brand-400">
          Issued by: ${cert.issuer}
        </p>

        <div class="rounded-xl overflow-hidden border border-white/10 bg-black/40 p-2 sm:p-4 aspect-video flex items-center justify-center">
          <img src="${cert.image}" alt="${cert.title}" class="w-full h-full object-contain rounded-lg" />
        </div>

        <div class="space-y-2">
          <h4 class="text-xs font-mono uppercase tracking-wider text-dim">Accreditation Summary</h4>
          <p class="text-sm text-muted leading-relaxed">
            ${cert.fullDesc}
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-xs font-mono uppercase tracking-wider text-dim">Core Competencies Validated</h4>
          <ul class="space-y-2 bg-white/5 p-4 rounded-xl border border-white/5">
            ${topicsList}
          </ul>
        </div>

        <div class="space-y-2">
          <h4 class="text-xs font-mono uppercase tracking-wider text-dim">Skills Acquired</h4>
          <div class="flex flex-wrap gap-2">
            ${skillsHtml}
          </div>
        </div>

        <div class="p-3.5 rounded-xl bg-black/30 border border-white/10 font-mono text-xs text-muted space-y-1">
          <div><strong class="text-slate-300">Recipient:</strong> Ritesh Singh</div>
          <div><strong class="text-slate-300">Credential ID:</strong> ${cert.credentialId}</div>
          ${cert.courseId ? `<div><strong class="text-slate-300">Course Code:</strong> ${cert.courseId}</div>` : ""}
          ${cert.systemOfRecord ? `<div><strong class="text-slate-300">Verification System:</strong> ${cert.systemOfRecord}</div>` : ""}
        </div>

        <div class="pt-4 border-t border-white/10 flex flex-wrap items-center justify-end gap-3">
          <a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-accent-purple text-white text-xs font-mono font-semibold shadow-md shadow-brand-500/20 hover:shadow-brand-500/40 transition-all">
            <i data-lucide="${cert.isCredly ? 'shield-check' : 'external-link'}" class="w-4 h-4"></i>
            <span>${cert.isCredly ? 'Verify on Credly Official Registry' : 'View Full Certificate Document'}</span>
            <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
          </a>
        </div>
      </div>
    `;

    projectModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.add("hidden");
    document.body.style.overflow = "";
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeProjectModal);
  }

  if (projectModal) {
    projectModal.addEventListener("click", (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
  }

  /* ============================================================
     7. INTERACTIVE TERMINAL SIMULATOR
     ============================================================ */
  const terminalHistory = document.getElementById("terminal-history");
  const terminalForm = document.getElementById("terminal-form");
  const terminalInput = document.getElementById("terminal-input");
  const termChips = document.querySelectorAll(".term-chip");

  function runTerminalCommand(commandText) {
    if (!terminalHistory || !terminalInput) return;
    const cleanCmd = commandText.trim().toLowerCase();
    if (!cleanCmd) return;

    const inputEcho = document.createElement("div");
    inputEcho.className = "flex items-center gap-2 text-slate-300 font-mono text-xs";
    inputEcho.innerHTML = `<span class="text-emerald-400">ritesh@cli:~$</span> <span>${commandText}</span>`;
    terminalHistory.appendChild(inputEcho);

    state.terminalCommandHistory.push(commandText);
    state.terminalHistoryIndex = state.terminalCommandHistory.length;

    const output = document.createElement("div");
    output.className = "font-mono text-xs whitespace-pre-line pl-4 text-muted border-l-2 border-brand-500/40 my-1";

    if (cleanCmd === "clear") {
      terminalHistory.innerHTML = "";
      return;
    } else if (cleanCmd === "theme") {
      const nextTheme = state.theme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      output.innerHTML = `<span class="text-brand-400">Switched theme to: ${nextTheme}</span>`;
    } else if (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.terminalCommands[cleanCmd]) {
      output.innerHTML = `<span class="text-slate-200">${window.PORTFOLIO_DATA.terminalCommands[cleanCmd]}</span>`;
    } else {
      output.innerHTML = `<span class="text-rose-400">Command not recognized: "${cleanCmd}".</span>\nType <span class="text-brand-400 font-bold">help</span> to view available commands.`;
    }

    terminalHistory.appendChild(output);
    terminalHistory.scrollTop = terminalHistory.scrollHeight;
    terminalInput.value = "";
  }

  if (terminalForm) {
    terminalForm.addEventListener("submit", (e) => {
      e.preventDefault();
      runTerminalCommand(terminalInput.value);
    });
  }

  termChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      runTerminalCommand(chip.textContent.trim());
    });
  });

  /* ============================================================
     8. COMMAND PALETTE (Ctrl + K)
     ============================================================ */
  const cmdPaletteModal = document.getElementById("cmd-palette-modal");
  const cmdPaletteBtn = document.getElementById("cmd-palette-btn");
  const mobileCmdBtn = document.getElementById("mobile-cmd-btn");
  const cmdInput = document.getElementById("cmd-input");
  const cmdResults = document.getElementById("cmd-results");
  const cmdCopyEmailBtn = document.getElementById("cmd-copy-email");

  function openCommandPalette() {
    if (!cmdPaletteModal) return;
    cmdPaletteModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    if (cmdInput) {
      cmdInput.value = "";
      cmdInput.focus();
    }
  }

  function closeCommandPalette() {
    if (!cmdPaletteModal) return;
    cmdPaletteModal.classList.add("hidden");
    document.body.style.overflow = "";
  }

  if (cmdPaletteBtn) {
    cmdPaletteBtn.addEventListener("click", openCommandPalette);
  }
  if (mobileCmdBtn) {
    mobileCmdBtn.addEventListener("click", () => {
      toggleMobileMenu();
      openCommandPalette();
    });
  }

  if (cmdPaletteModal) {
    cmdPaletteModal.addEventListener("click", (e) => {
      if (e.target === cmdPaletteModal) {
        closeCommandPalette();
      }
    });
  }

  if (cmdInput && cmdResults) {
    cmdInput.addEventListener("input", () => {
      const query = cmdInput.value.toLowerCase().trim();
      const items = cmdResults.querySelectorAll(".cmd-item");
      items.forEach((item) => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
    });
  }

  if (cmdResults) {
    cmdResults.querySelectorAll(".cmd-item").forEach((item) => {
      item.addEventListener("click", () => {
        closeCommandPalette();
      });
    });
  }

  /* ============================================================
     9. GLOBAL KEYBOARD SHORTCUTS
     ============================================================ */
  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (cmdPaletteModal && !cmdPaletteModal.classList.contains("hidden")) {
        closeCommandPalette();
      } else {
        openCommandPalette();
      }
    }

    if (e.key === "Escape") {
      if (cmdPaletteModal && !cmdPaletteModal.classList.contains("hidden")) {
        closeCommandPalette();
      }
      if (projectModal && !projectModal.classList.contains("hidden")) {
        closeProjectModal();
      }
    }
  });

  /* ============================================================
     10. COPY EMAIL TO CLIPBOARD
     ============================================================ */
  const emailToCopy = "rriteshsingh1601@gmail.com";

  function copyEmail() {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(emailToCopy).then(() => {
        showToast("Email address copied to clipboard!", "success");
      }).catch(() => {
        fallbackCopyText(emailToCopy);
      });
    } else {
      fallbackCopyText(emailToCopy);
    }
  }

  function fallbackCopyText(text) {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    showToast("Email address copied to clipboard!", "success");
  }

  const heroCopyEmailBtn = document.getElementById("hero-copy-email");
  if (heroCopyEmailBtn) {
    heroCopyEmailBtn.addEventListener("click", copyEmail);
  }

  const cardCopyEmailBtn = document.getElementById("copy-email-card-btn");
  if (cardCopyEmailBtn) {
    cardCopyEmailBtn.addEventListener("click", copyEmail);
  }

  if (cmdCopyEmailBtn) {
    cmdCopyEmailBtn.addEventListener("click", () => {
      copyEmail();
      closeCommandPalette();
    });
  }

  /* ============================================================
     11. CONTACT FORM HANDLER
     ============================================================ */
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("contact-name").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const subject = document.getElementById("contact-subject").value.trim();
      const message = document.getElementById("contact-message").value.trim();

      if (!name || !email || !subject || !message) {
        showToast("Please complete all required fields.", "error");
        return;
      }

      const mailtoUrl = `mailto:${emailToCopy}?subject=${encodeURIComponent(
        `[Portfolio] ${subject}`
      )}&body=${encodeURIComponent(
        `Sender Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}`
      )}`;

      showToast("Message prepared! Opening default email client...", "success");
      
      setTimeout(() => {
        window.location.href = mailtoUrl;
        contactForm.reset();
      }, 700);
    });
  }

  /* ============================================================
     12. DYNAMIC HEADER SHADOW ON SCROLL
     ============================================================ */
  const header = document.getElementById("main-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("shadow-lg", "shadow-black/20");
    } else {
      header.classList.remove("shadow-lg", "shadow-black/20");
    }
  });

  /* ============================================================
     13. INTERACTIVE CONSTELLATION & PARTICLE MESH CANVAS
     ============================================================ */
  function initConstellationCanvas() {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width, height;

    const mouse = { x: null, y: null, radius: 140 };
    const particles = [];
    const particleCount = window.innerWidth < 768 ? 40 : 85;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resize);
    resize();

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener("mouseleave", () => {
      mouse.x = null;
      mouse.y = null;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.radius = Math.random() * 1.8 + 1;
        this.baseColor = Math.random() > 0.4 ? "56, 189, 248" : "168, 85, 247";
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const dirX = dx / dist;
            const dirY = dy / dist;
            this.x -= dirX * force * 2.5;
            this.y -= dirY * force * 2.5;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.baseColor}, 0.75)`;
        ctx.shadowColor = `rgba(${this.baseColor}, 0.5)`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 115) {
            const alpha = (1 - dist / 115) * 0.22;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        if (mouse.x !== null && mouse.y !== null) {
          const mdx = particles[i].x - mouse.x;
          const mdy = particles[i].y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 140) {
            const mAlpha = (1 - mdist / 140) * 0.35;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${mAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  }

  /* ============================================================
     14. INTERACTIVE CURSOR SPOTLIGHT
     ============================================================ */
  function initCursorSpotlight() {
    const spotlight = document.getElementById("cursor-spotlight");
    if (!spotlight) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    window.addEventListener("mousemove", (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      spotlight.style.opacity = "1";
    });

    window.addEventListener("mouseleave", () => {
      spotlight.style.opacity = "0";
    });

    function renderSpotlight() {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      spotlight.style.transform = `translate(${currentX - 250}px, ${currentY - 250}px)`;
      requestAnimationFrame(renderSpotlight);
    }

    renderSpotlight();
  }

  /* ============================================================
     15. HERO TYPEWRITER ANIMATION
     ============================================================ */
  function initTypewriter() {
    const textElement = document.getElementById("typing-text");
    if (!textElement) return;

    const phrases = [
      "Upcoming Developer",
      "B.Tech Student @ GL Bajaj",
      "C++ & DSA Practitioner",
      "AI & Web Enthusiast",
      "Creative Problem Solver"
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 90;

    function type() {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 45;
      } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 90;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        typingSpeed = 1800;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 400;
      }

      setTimeout(type, typingSpeed);
    }

    type();
  }

  /* ============================================================
     16. 3D CARD PARALLAX TILT WITH SPECULAR GLARE
     ============================================================ */
  function initTiltCards() {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    function applyTilt(card) {
      if (card.dataset.tiltApplied) return;
      card.dataset.tiltApplied = "true";
      card.classList.add("tilt-card");

      let glare = card.querySelector(".tilt-glare");
      if (!glare) {
        glare = document.createElement("div");
        glare.className = "tilt-glare";
        card.appendChild(glare);
      }

      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -7;
        const rotateY = ((x - centerX) / centerX) * 7;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
        glare.style.opacity = "1";
        glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.18) 0%, transparent 65%)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
        glare.style.opacity = "0";
      });
    }

    document.querySelectorAll(".glass-card, .terminal-window").forEach(applyTilt);

    const observer = new MutationObserver(() => {
      document.querySelectorAll(".glass-card, .terminal-window").forEach(applyTilt);
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  /* ============================================================
     17. SCROLL-TRIGGERED REVEAL & STAGGER
     ============================================================ */
  function initScrollReveal() {
    const revealElements = document.querySelectorAll(
      "section, .glass-card, .terminal-window, #certificates-grid > div, #skills-grid > div"
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach((el, index) => {
      el.classList.add("reveal-on-scroll");
      if (index % 4 === 1) el.classList.add("stagger-1");
      if (index % 4 === 2) el.classList.add("stagger-2");
      if (index % 4 === 3) el.classList.add("stagger-3");
      observer.observe(el);
    });
  }

  /* ============================================================
     18. STATS COUNTER ANIMATION
     ============================================================ */
  function initCounterAnimations() {
    const counters = document.querySelectorAll("[data-counter]");

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const targetVal = parseFloat(el.getAttribute("data-counter"));
          const isDecimal = targetVal % 1 !== 0;
          const isPercent = el.textContent.includes("%");
          const isPlus = el.textContent.includes("+");

          let start = 0;
          const duration = 1600;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeVal = 1 - Math.pow(1 - progress, 3);
            const currentNumber = start + (targetVal - start) * easeVal;

            if (isDecimal) {
              el.textContent = currentNumber.toFixed(2) + (isPercent ? "%" : "");
            } else {
              el.textContent = Math.floor(currentNumber) + (isPlus ? "+" : "") + (isPercent ? "%" : "");
            }

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            }
          }

          requestAnimationFrame(updateCounter);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    counters.forEach((c) => observer.observe(c));
  }

  /* ============================================================
     19. BUTTON RIPPLE EFFECT
     ============================================================ */
  function initButtonRipples() {
    document.querySelectorAll("button, a.hero-buttons a").forEach((btn) => {
      btn.classList.add("ripple-effect");
      btn.addEventListener("click", function (e) {
        const circle = document.createElement("span");
        circle.className = "ripple-circle";
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        circle.style.width = circle.style.height = `${size}px`;
        circle.style.left = `${e.clientX - rect.left - size / 2}px`;
        circle.style.top = `${e.clientY - rect.top - size / 2}px`;
        this.appendChild(circle);

        setTimeout(() => circle.remove(), 600);
      });
    });
  }

  // Launch Motion Systems
  initConstellationCanvas();
  initCursorSpotlight();
  initTypewriter();
  initTiltCards();
  initScrollReveal();
  initCounterAnimations();
  initButtonRipples();

});
