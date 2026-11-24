/* ==========================================================================
   AGRAJ INFRASTRUCTURE PVT. LTD. - Main Interactive Script
   ========================================================================== */

const AGRAJ_SERVICES = {
  bituminous: {
    id: 'bituminous',
    group: 'A) Highways & Structures',
    title: 'Bituminous Road Works (Earthwork & GSB/WMM/DBM/BC)',
    shortTitle: 'Bituminous Road Works',
    icon: 'bi-signpost-split-fill',
    tagline: 'End-to-end flexible pavement execution for National & State Highways with Sensor Pavers and in-house WMM & Crusher Plants.',
    image: 'assets/images/read.png',
    overview: 'AGRAJ Infrastructure Pvt. Ltd. brings over 25 years of specialized expertise in executing National Highway and State Highway bituminous road works. Supported by our owned fleet of Tippers, Excavators, Backhoe Loaders, WMM Plants, Crusher Plants, and Sensor Paver Machines, we deliver smooth, durable carriageways ahead of schedule.',
    scope: [
      'Sub-grade preparation and engineered embankment Earthwork',
      'Granular Sub-Base (GSB) and Wet Mix Macadam (WMM) layers',
      'Dense Bituminous Macadam (DBM) and Bituminous Concrete (BC) surfacing',
      'Road furniture, separation barriers, and lined/unlined roadside drains'
    ],
    specs: [
      { label: 'Core Layers', value: 'Earthwork, GSB, WMM, DBM & BC' },
      { label: 'Owned Machinery', value: 'Sensor Paver, WMM Plant, Crusher & Tippers' },
      { label: 'Project Types', value: 'National Highways & State Highways' },
      { label: 'Delivery Track Record', value: 'Completed Before Time to Client Satisfaction' }
    ]
  },
  concrete: {
    id: 'concrete',
    group: 'A) Highways & Structures',
    title: 'Concrete Road Works (Earthworks & GSB/DLC/PQC)',
    shortTitle: 'Concrete Road Works',
    icon: 'bi-cone-striped',
    tagline: 'Heavy-duty rigid pavements engineered with GSB, Dry Lean Concrete (DLC), and Pavement Quality Concrete (PQC).',
    image: 'assets/images/Bituminous-Road-Works.png',
    overview: 'We execute high-load rigid concrete pavements designed for long service life and minimal maintenance. Utilizing our in-house Concrete Batching Plants, Concrete Mixers, and skilled civil engineering teams, we ensure strict mix accuracy, joint sealing, and surface texturing across every stretch.',
    scope: [
      'Bulk Earthworks and compacted Granular Sub-Base (GSB)',
      'Dry Lean Concrete (DLC) sub-base laying and curing',
      'Pavement Quality Concrete (PQC) with dowel & tie-bar placement',
      'Separation barriers, kerbs, shoulders, and storm-water drainage'
    ],
    specs: [
      { label: 'Core Layers', value: 'Earthworks, GSB, DLC & PQC' },
      { label: 'In-House Plants', value: 'Concrete Plant, Mixers & Shuttering Systems' },
      { label: 'Quality Focus', value: 'Strict Cube Testing & Surface Regularity' },
      { label: 'Execution Motto', value: 'Excellent Quality & On-Time Completion' }
    ]
  },
  structures: {
    id: 'structures',
    group: 'A) Highways & Structures',
    title: 'Bridges, PUP/VUP, Culverts & Retaining Structures',
    shortTitle: 'Bridges & Structural Works',
    icon: 'bi-diagram-3-fill',
    tagline: 'Major & Minor Bridges, PUP/VUP, Cross Drainage Culverts, Retaining Walls, and Industrial Sheds.',
    image: 'assets/images/bridge.png',
    overview: 'Our structural engineering division executes complex highway and industrial structures—including Major Bridges, Minor Bridges (such as 3-span and 2-span bridges along the Katni–Barhi road), Pedestrian & Vehicular Underpasses (PUP/VUP), Box/Slab/Pipe Culverts, Retaining Walls, and Industrial Sheds.',
    scope: [
      'Minor Bridges, Major Bridges (2-span, 3-span & multi-span), PUP & VUP',
      'Cross Drainage Works: Box Culverts, Slab Culverts, Pipe Culverts & Underpasses',
      'RCC Retaining Walls, Separation Barriers & Lined / Unlined Drains',
      'Structural Works including Industrial Sheds and heavy RCC foundations'
    ],
    specs: [
      { label: 'Bridge Credentials', value: '3-Span & 2-Span Minor Bridges (Katni–Barhi Rd)' },
      { label: 'Underpass Works', value: 'Package-3 (1 PUP) & Package-4 (3 PUPs)' },
      { label: 'Drainage Works', value: 'Box, Slab & Pipe Culverts, Lined/Unlined Drains' },
      { label: 'Resources', value: 'Owned Shuttering Materials & Concrete Plants' }
    ]
  },
  buildings: {
    id: 'buildings',
    group: 'B) Building Works',
    title: 'Building Works (Commercial, Residential, Institutional & Admin)',
    shortTitle: 'Building Construction',
    icon: 'bi-buildings-fill',
    tagline: 'Complete civil construction for Commercial, Residential, Institutional, and Administrative Buildings.',
    image: 'assets/images/building-Works.png',
    overview: 'AGRAJ Infrastructure Pvt. Ltd. delivers all types of building construction works with high structural standards and refined architectural finishing. From multi-storey residential and commercial developments to institutional and administrative blocks, we manage end-to-end civil execution with dedicated site supervision.',
    scope: [
      'Commercial Complexes & Office / Administrative Buildings',
      'Residential Housing & Multi-Storey Apartment Structures',
      'Institutional Campuses, Schools & Public Infrastructure Buildings',
      'Industrial Sheds, Compound Walls, Internal Roads & Site Development'
    ],
    specs: [
      { label: 'Building Categories', value: 'Commercial, Residential, Institutional & Admin' },
      { label: 'Execution Scope', value: 'Foundation, RCC Frame, Masonry & Finishing' },
      { label: 'Team Strength', value: 'Experienced Civil Engineers & Supervisors' },
      { label: 'Commitment', value: 'Safety, Quality & Timely Project Handover' }
    ]
  },
  survey: {
    id: 'survey',
    group: 'C) Survey',
    title: 'Highway & Railway Engineering Survey Works',
    shortTitle: 'Highways & Railways Survey',
    icon: 'bi-compass-fill',
    tagline: 'Complete precision survey works in Highways & Railways using Total Station, Theodolites & Auto Levels.',
    image: 'assets/images/Highway.png',
    overview: 'Accurate surveying is the backbone of every highway, railway, and structural project. Our dedicated team of experienced surveyors conducts complete alignment, topographic, cross-section, and layout surveys using modern, calibrated survey instrumentation.',
    scope: [
      'Complete Topographic, Alignment & Traverse Surveys for Highways',
      'Railway Route, Formation & Track-Alignment Survey Works',
      'Chainage Marking, Cross-Section Profiling & Earthwork Quantity Surveys',
      'Bridge Pier, Culvert & Building Structural Layout Setting-Out'
    ],
    specs: [
      { label: 'Sectors Covered', value: 'Highways, Railways & Structural Layouts' },
      { label: 'Instruments', value: 'Total Station, Theodolites & Auto Levels' },
      { label: 'Team', value: 'Qualified & Long-Serving Senior Surveyors' },
      { label: 'Accuracy', value: 'High-Precision Chainage & Level Verification' }
    ]
  }
};

const AGRAJ_PROJECTS = [
  {
    id: 1,
    title: 'Katni – Barhi Road Minor Bridges (3-Span & 2-Span)',
    category: 'bridges',
    categoryLabel: 'Bridges & Structures',
    status: 'Completed',
    location: 'Katni – Barhi Road, Madhya Pradesh',
    scopeTag: 'Bridge Work',
    image: 'assets/images/bridge.png',
    summary: 'Construction of 3-span and 2-span Minor Bridges at multiple strategic locations along the Katni – Barhi road corridor.',
    highlights: [
      'Multiple 3-span and 2-span Minor Bridge structures executed simultaneously',
      'Complete substructure, superstructure, approach earthwork & protection works',
      'Completed ahead of schedule to the full satisfaction of the client'
    ]
  },
  {
    id: 2,
    title: 'Highway Package-3: PUP & Road Works (Ch. 30+000 to Ch. 55+310)',
    category: 'highways',
    categoryLabel: 'Highways & Structures',
    status: 'Completed',
    location: 'Ch. 30+000 to Ch. 55+310',
    scopeTag: 'Package-3',
    image: 'assets/images/Highway.png',
    summary: 'Construction of 1 No. Pedestrian Underpass (PUP) and Road works up to GSB between Ch. 30+000 to Ch. 42+810, plus WMM works between Ch. 30+000 to Ch. 55+310.',
    highlights: [
      '1 No. Pedestrian Underpass (PUP) structural execution',
      '12.81 km Road works up to GSB (Ch. 30+000 to Ch. 42+810)',
      '25.31 km Wet Mix Macadam (WMM) works (Ch. 30+000 to Ch. 55+310)'
    ]
  },
  {
    id: 3,
    title: 'Highway Package-4: 3 Nos. PUP & Road Works (Ch. 42+810 to Ch. 55+310)',
    category: 'highways',
    categoryLabel: 'Highways & Structures',
    status: 'Completed',
    location: 'Ch. 42+810 to Ch. 55+310',
    scopeTag: 'Package-4',
    image: 'assets/images/Bituminous-Road-Works.png',
    summary: 'Construction of 3 Nos. Pedestrian Underpasses (PUP) and Road works up to Granular Sub-Base (GSB) across the 12.50 km stretch from Ch. 42+810 to Ch. 55+310.',
    highlights: [
      '3 Nos. RCC Pedestrian Underpasses (PUPs) with approaches',
      '12.50 km Earthwork and GSB road formation (Ch. 42+810 to Ch. 55+310)',
      'Delivered before stipulated timeline with strict QA/QC verification'
    ]
  },
  {
    id: 4,
    title: 'National & State Highway Bituminous & Concrete Works',
    category: 'highways',
    categoryLabel: 'Highways & Structures',
    status: 'Completed',
    location: 'National & State Highway Corridors',
    scopeTag: 'GSB/WMM/DBM/BC & PQC',
    image: 'assets/images/National-Highway.png',
    summary: 'Comprehensive Bituminous (GSB/WMM/DBM/BC) and Rigid Concrete (GSB/DLC/PQC) highway works with cross-drainage culverts, retaining walls, and separation barriers.',
    highlights: [
      'Sensor Paver laid DBM/BC and rigid DLC/PQC pavements',
      'Box culverts, slab culverts, pipe culverts & lined/unlined drains',
      'Executed with clients of international repute'
    ]
  },
  {
    id: 5,
    title: 'Commercial, Institutional & Administrative Buildings',
    category: 'buildings',
    categoryLabel: 'Building Works',
    status: 'Completed',
    location: 'Multi-Site Execution',
    scopeTag: 'Building Construction',
    image: 'assets/images/building-Works.png',
    summary: 'Turnkey civil construction of residential, commercial, institutional, and administrative buildings along with industrial sheds.',
    highlights: [
      'Complete RCC structural framework, masonry & architectural finishing',
      'Industrial sheds and heavy structural civil foundations',
      'On-time handover with zero safety incidents'
    ]
  },
  {
    id: 6,
    title: 'Highways & Railways Precision Engineering Survey',
    category: 'survey',
    categoryLabel: 'Survey Works',
    status: 'Completed',
    location: 'Highway & Railway Projects',
    scopeTag: 'Total Station & Auto Level',
    image: 'assets/images/Railways.png',
    summary: 'Complete alignment, topographic, and layout survey services for major Highway and Railway corridors using Total Station, Theodolites, and Auto Levels.',
    highlights: [
      'State-of-the-art Total Station, Theodolite & Auto Level deployment',
      'Chainage verification, cross-sections & structure setting-out',
      'Experienced in-house surveying team since inception'
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initBackToTop();
  initCounters();
  initProjectFilters();
  initServiceDetailPage();
  initCareerFilters();
  initFormsValidation();
  initQuoteTriggers();
});

function initNavbarScroll() {
  const nav = document.querySelector('.main-navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
}

function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 320 ? 'flex' : 'none';
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initCounters() {
  const counters = document.querySelectorAll('.counter-value');
  if (!counters.length) return;
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10) || 0;
      const suffix = el.dataset.suffix || '';
      const duration = 1300;
      const startTime = performance.now();

      function tick(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target).toLocaleString('en-IN') + suffix;
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target.toLocaleString('en-IN') + suffix;
      }
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.3 });
  counters.forEach(c => observer.observe(c));
}

function initProjectFilters() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  let activeCategory = 'all';

  function renderProjects() {
    const filtered = AGRAJ_PROJECTS.filter(p => activeCategory === 'all' || p.category === activeCategory);
    grid.innerHTML = filtered.map(p => `
      <div class="col-md-6 col-lg-4">
        <div class="project-card h-100 d-flex flex-column">
          <div class="project-img-wrap">
            <img src="${p.image}" alt="${p.title}" loading="lazy">
            <span class="project-status-badge bg-success text-white">${p.status}</span>
          </div>
          <div class="p-4 d-flex flex-column flex-grow-1">
            <div class="d-flex justify-content-between align-items-center mb-2 gap-2">
              <span class="badge bg-brand-lavender text-brand-purple fw-semibold">${p.categoryLabel}</span>
              <small class="text-muted fw-semibold"><i class="bi bi-tag-fill me-1 text-brand-amber"></i>${p.scopeTag}</small>
            </div>
            <h5 class="fw-bold mb-2">${p.title}</h5>
            <p class="text-muted small mb-3 flex-grow-1">${p.summary}</p>
            <div class="d-flex justify-content-between align-items-center pt-3 border-top">
              <small class="text-muted fw-semibold"><i class="bi bi-geo-alt-fill text-brand-amber me-1"></i>${p.location}</small>
              <button class="btn btn-sm btn-outline-brand view-case-study flex-shrink-0" data-id="${p.id}">
                Details <i class="bi bi-arrow-right ms-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('.view-case-study').forEach(btn => {
      btn.addEventListener('click', () => openCaseStudyModal(parseInt(btn.dataset.id, 10)));
    });
  }

  document.querySelectorAll('[data-filter-category]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter-category]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.filterCategory;
      renderProjects();
    });
  });

  renderProjects();
}

function openCaseStudyModal(projectId) {
  const p = AGRAJ_PROJECTS.find(item => item.id === projectId);
  if (!p) return;
  const modalEl = document.getElementById('caseStudyModal');
  if (!modalEl) return;

  modalEl.querySelector('#csTitle').textContent = p.title;
  modalEl.querySelector('#csImage').src = p.image;
  modalEl.querySelector('#csImage').alt = p.title;
  modalEl.querySelector('#csCategory').textContent = p.categoryLabel;
  modalEl.querySelector('#csLocation').textContent = p.location;
  modalEl.querySelector('#csScopeTag').textContent = p.scopeTag;
  modalEl.querySelector('#csStatus').textContent = p.status;
  modalEl.querySelector('#csSummary').textContent = p.summary;
  modalEl.querySelector('#csHighlights').innerHTML = p.highlights.map(h =>
    `<li class="mb-2"><i class="bi bi-check-circle-fill text-brand-amber me-2"></i>${h}</li>`
  ).join('');

  new bootstrap.Modal(modalEl).show();
}

function initServiceDetailPage() {
  const detailContainer = document.getElementById('serviceDetailRoot');
  if (!detailContainer) return;

  const params = new URLSearchParams(window.location.search);
  const serviceKey = params.get('service') || 'bituminous';
  const svc = AGRAJ_SERVICES[serviceKey] || AGRAJ_SERVICES.bituminous;

  document.title = `${svc.shortTitle} | AGRAJ INFRASTRUCTURE PVT. LTD.`;
  document.getElementById('sdHeroTitle').textContent = svc.title;
  document.getElementById('sdBreadcrumb').textContent = svc.shortTitle;
  document.getElementById('sdHeroTagline').textContent = svc.tagline;
  document.getElementById('sdImage').src = svc.image;
  document.getElementById('sdImage').alt = svc.title;
  document.getElementById('sdOverview').textContent = svc.overview;

  document.getElementById('sdScopeList').innerHTML = svc.scope.map(item =>
    `<li class="list-group-item border-0 ps-0 bg-transparent"><i class="bi bi-check2-square text-brand-amber me-2 fs-5 align-middle"></i>${item}</li>`
  ).join('');

  document.getElementById('sdSpecsGrid').innerHTML = svc.specs.map(sp => `
    <div class="col-sm-6">
      <div class="p-3 rounded bg-brand-lavender h-100 border">
        <small class="text-muted text-uppercase fw-semibold d-block mb-1">${sp.label}</small>
        <div class="fw-bold text-brand-purple">${sp.value}</div>
      </div>
    </div>
  `).join('');

  const quoteBtn = document.getElementById('sdQuoteBtn');
  if (quoteBtn) quoteBtn.dataset.service = svc.shortTitle;

  const sidebarNav = document.getElementById('sdSidebarNav');
  if (sidebarNav) {
    sidebarNav.innerHTML = Object.values(AGRAJ_SERVICES).map(item => `
      <a href="service-detail.html?service=${item.id}" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center ${item.id === svc.id ? 'active bg-brand-purple border-brand-purple text-white' : ''}">
        <span><i class="bi ${item.icon} me-2"></i>${item.shortTitle}</span>
        <i class="bi bi-chevron-right small"></i>
      </a>
    `).join('');
  }
}

function initCareerFilters() {
  const filterBtns = document.querySelectorAll('[data-job-dept]');
  const jobCards = document.querySelectorAll('.job-item');
  if (filterBtns.length && jobCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const dept = btn.dataset.jobDept;
        jobCards.forEach(card => {
          card.style.display = (dept === 'all' || card.dataset.dept === dept) ? '' : 'none';
        });
      });
    });
  }

  document.querySelectorAll('.apply-job-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const roleInput = document.getElementById('applyJobRole');
      const modalTitle = document.getElementById('applyJobTitle');
      if (roleInput) roleInput.value = btn.dataset.role || 'Engineering Role';
      if (modalTitle) modalTitle.textContent = `Apply: ${btn.dataset.role || 'Open Position'}`;
    });
  });
}

function initQuoteTriggers() {
  document.querySelectorAll('[data-open-quote]').forEach(btn => {
    btn.addEventListener('click', () => {
      const select = document.getElementById('quoteServiceSelect');
      if (select && btn.dataset.service) {
        for (const opt of select.options) {
          if (opt.value.toLowerCase().includes(btn.dataset.service.toLowerCase()) ||
              opt.text.toLowerCase().includes(btn.dataset.service.toLowerCase())) {
            select.value = opt.value;
            break;
          }
        }
      }
    });
  });
}

function initFormsValidation() {
  document.querySelectorAll('.needs-validation').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      event.stopPropagation();

      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }

      const successMsg = form.dataset.successMessage || 'Thank you! Your inquiry has been submitted to AGRAJ Infrastructure Pvt. Ltd.';
      showToast(successMsg);

      const parentModal = form.closest('.modal');
      if (parentModal) {
        const instance = bootstrap.Modal.getInstance(parentModal);
        if (instance) instance.hide();
      }
      form.reset();
      form.classList.remove('was-validated');
    });
  });
}

function showToast(message) {
  const toastEl = document.getElementById('agrajToast');
  const toastBody = document.getElementById('agrajToastBody');
  if (!toastEl || !toastBody) return;
  toastBody.textContent = message;
  new bootstrap.Toast(toastEl, { delay: 4500 }).show();
}


document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('[data-gallery-filter]');
  const items = Array.from(document.querySelectorAll('.gallery-item'));
  const lightboxEl = document.getElementById('galleryLightboxModal');

  if (!items.length || !lightboxEl) return;

  let visibleCards = items.map(item => item.querySelector('.gallery-card'));
  let currentIndex = 0;

  // Category Filtering
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.galleryFilter;

      visibleCards = [];
      items.forEach(item => {
        const match = filter === 'all' || item.dataset.category === filter;
        item.style.display = match ? '' : 'none';
        if (match) visibleCards.push(item.querySelector('.gallery-card'));
      });
    });
  });

  // Populate Lightbox
  function showLightboxImage(index) {
    if (!visibleCards.length) return;
    currentIndex = (index + visibleCards.length) % visibleCards.length;
    const card = visibleCards[currentIndex];
    document.getElementById('lbImage').src = card.dataset.img;
    document.getElementById('lbTitle').textContent = card.dataset.title;
    document.getElementById('lbCategory').textContent = card.dataset.cat;
    document.getElementById('lbDesc').textContent = card.dataset.desc;
    document.getElementById('lbCounter').textContent = `${currentIndex + 1} / ${visibleCards.length}`;
  }

  items.forEach(item => {
    const card = item.querySelector('.gallery-card');
    card.addEventListener('click', () => {
      const idx = visibleCards.indexOf(card);
      showLightboxImage(idx >= 0 ? idx : 0);
    });
  });

  document.getElementById('lbPrev').addEventListener('click', () => showLightboxImage(currentIndex - 1));
  document.getElementById('lbNext').addEventListener('click', () => showLightboxImage(currentIndex + 1));

  // Keyboard Arrow Navigation inside Lightbox
  document.addEventListener('keydown', e => {
    if (!lightboxEl.classList.contains('show')) return;
    if (e.key === 'ArrowLeft') showLightboxImage(currentIndex - 1);
    if (e.key === 'ArrowRight') showLightboxImage(currentIndex + 1);
  });
});


// Replace with your WhatsApp number (Country code + 10-digit number, no '+' or spaces)
const AGRAJ_WHATSAPP_NUMBER = '9198XXXXXXXX';

function initFormsValidation() {
  document.querySelectorAll('.needs-validation').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      event.stopPropagation();

      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }

      // Detect form title for the WhatsApp header
      const modalTitle = form.closest('.modal')?.querySelector('.modal-title')?.textContent?.trim();
      const formHeading = form.closest('section')?.querySelector('h3, h2')?.textContent?.trim();
      const title = modalTitle || formHeading || 'Website Inquiry';

      let message = `*AGRAJ INFRASTRUCTURE PVT. LTD.*\n`;
      message += `*${title}*\n`;
      message += `────────────────────\n`;

      // Collect all input, select, and textarea values
      const fields = form.querySelectorAll('input, select, textarea');
      fields.forEach(field => {
        if (field.type === 'submit' || field.type === 'button') return;

        // Find matching label or fallback to placeholder
        const labelEl = field.closest('div')?.querySelector('label');
        const label = (labelEl ? labelEl.textContent : field.placeholder || 'Field')
          .replace('*', '')
          .trim();

        if (field.type === 'file') {
          const fileName = field.files[0]?.name;
          if (fileName) {
            message += `*${label}:* ${fileName} _(Please attach this file in WhatsApp)_\n`;
          }
        } else {
          const val = field.value.trim();
          if (val) {
            message += `*${label}:* ${val}\n`;
          }
        }
      });

      // Open WhatsApp with pre-filled message
      const whatsappUrl = `https://wa.me/${AGRAJ_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      // Show toast confirmation
      const successMsg = form.dataset.successMessage || 'Redirecting to WhatsApp with your details...';
      showToast(successMsg);

      // Close modal if inside one and reset form
      const parentModal = form.closest('.modal');
      if (parentModal) {
        const instance = bootstrap.Modal.getInstance(parentModal);
        if (instance) instance.hide();
      }
      form.reset();
      form.classList.remove('was-validated');
    });
  });
}


document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('completedProjectSearch');
  const tableRows = document.querySelectorAll('#completedProjectsTable tbody tr');
  if (!searchInput || !tableRows.length) return;

  searchInput.addEventListener('input', () => {
    const term = searchInput.value.trim().toLowerCase();
    tableRows.forEach(row => {
      row.style.display = row.textContent.toLowerCase().includes(term) ? '' : 'none';
    });
  });
});


