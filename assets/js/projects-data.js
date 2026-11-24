

const COMPLETED_PROJECTS = [
  {
    id: 1, sn: '01', category: 'Railways & FOB',
    shortTitle: '50-Beds Running Room & Stainless-Steel FOB at Bargawan Station',
    fullName: 'Construction of 50 beds Running Room and one Stainless-Steel FOB including plumbing work, drainage works, boundary wall, road works, electrical external and internal, and S&T works for building at Bargawan station in connection with Katni–Singrauli Rail Line Doubling project.',
    amount: '₹ 6,35,71,750', client: 'IRCON International Limited', date: '30.04.2025'
  },
  {
    id: 2, sn: '02', category: 'Railways & Structures',
    shortTitle: 'RVNL Phaphamau–Janghai NCR Roadbed, Minor Bridge & FOB Works',
    fullName: 'RVNL-PHAPHAMAU-JANGHAI-NCR WORK: Construction of Roadbed, Minor Bridge, Platform, Switchyard, FOB etc.',
    amount: '₹ 3,59,15,080', client: 'Mehrotra Buildcon Pvt. Ltd.', date: '20.10.2025'
  },
  {
    id: 3, sn: '03', category: 'High Speed Rail (MAHSR)',
    shortTitle: 'Mumbai–Ahmedabad High Speed Rail Site Offices & Development Works',
    fullName: 'Construction of Foundations, Flooring, External Water Supply & Sewerage System and other Development Works for Construction of Pre-fabricated Site Huts, Site Offices, Sub-Site Offices, Temporary Training Facilities etc. at various locations between Zaroli Village at Maharashtra–Gujarat Border (MAHSR km 156.600) and Vadodara (MAHSR km 393.700) in Gujarat and UT of Dadra and Nagar Haveli for Mumbai–Ahmedabad High Speed Rail Project.',
    amount: '₹ 5,99,03,566', client: 'IRCON International Limited', date: '25.06.2023'
  },
  {
    id: 4, sn: '04', category: 'State Highway (EPC)',
    shortTitle: 'Hamirpur–Rath Section of SH-42 Upgradation & Maintenance (EPC)',
    fullName: 'Engineering, Procurement and Construction Contract for Upgradation and Maintenance of Hamirpur–Rath section of SH-42 (From Km 2+065 to Km 19+000).',
    amount: '₹ 59,08,45,160', client: 'GHV (India) Pvt. Ltd.', date: '05.06.2021'
  },
  {
    id: 5, sn: '05', category: 'Dedicated Freight Corridor',
    shortTitle: 'Eastern Dedicated Freight Corridor Package No. 203 (ALH Work)',
    fullName: 'Construction of ALH work for Mughalsarai – New Bhaupur Section of Eastern Dedicated Freight Corridor Project Package No. 203.',
    amount: '₹ 5,91,20,633', client: 'CRSC Beijing National Railway Research & Design Institute of Signal and Communication Group Co., Ltd.', date: '17.12.2018'
  },
  {
    id: 6, sn: '06', category: 'NH-3 Package-4',
    shortTitle: '4-Laning of Shivpuri–Guna NH-3 (Package-4: Ch. 42+810 to 55+310)',
    fullName: 'Construction of Road for Ircon SGTL (Agreement No. ISGTL/CO/SG/IRCON/CORRES/02 Dated 02.09.2015) in connection with 4-Laning of Shivpuri–Guna Section of NH-3 from Km 236+000 to Km 332.100 in Madhya Pradesh (Stage-I), Package-4: CD works / Structure Works / Minor & Major Bridge / VUP and Road works up to GSB between Ch. 42+810 to 55+310.',
    amount: '₹ 34,72,63,516', client: 'Ashish Infracon Pvt. Ltd. / IRCON International Limited', date: '15.03.2018'
  },
  {
    id: 7, sn: '07', category: 'NH-3 Package-3',
    shortTitle: '4-Laning of Shivpuri–Guna NH-3 (Package-3: Ch. 30+000 to 55+310)',
    fullName: 'Construction of Road for Ircon SGTL (Agreement No. ISGTL/CO/SG/IRCON/CORRES/02 Dated 02.09.2015) in connection with 4-Laning of Shivpuri–Guna Section of NH-3 from Km 236+000 to Km 332.100 in Madhya Pradesh (Stage-I), Package-3: CD works / Structure Works / Minor & Major Bridge / VUP and Road works up to GSB between Ch. 30+000 to Ch. 42+810 & WMM works between Ch. 30+000 to 55+310.',
    amount: '₹ 32,15,26,075', client: 'Ashish Infracon Pvt. Ltd. / IRCON International Limited', date: '20.03.2018'
  },
  {
    id: 8, sn: '08', category: 'Institutional Building',
    shortTitle: 'Bihar Police Academy Family Qtr. & Senior Officer\'s Mess, Rajgir',
    fullName: 'Construction of balance work of Constable 4th grade family Qtr. 10B & Senior Officer\'s Mess at Bihar Police Academy, Rajgir, District Nalanda, Bihar (Pkg.-A) – Civil, Electrical and Plumbing works.',
    amount: '₹ 18,06,44,387', client: 'Engineering Projects (India) Ltd. (A Govt. of India Enterprise)', date: '08.12.2017'
  },
  {
    id: 9, sn: '09', category: 'Border Check Posts (BOT)',
    shortTitle: '24 Border Check Posts Modernization with Fabricated Work (MP)',
    fullName: 'Construction, upgradation and modernization of 24 Border Check Posts with Fabricated Work in Madhya Pradesh on BOT Basis.',
    amount: '₹ 43,50,20,725', client: 'GHV (India) Pvt. Ltd.', date: '30.06.2017'
  },
  {
    id: 10, sn: '10', category: 'Border Check Posts (BOT)',
    shortTitle: '24 Border Check Posts Paver Block Works (M40–M45 Grade, MP)',
    fullName: 'Construction, upgradation and modernization of 24 Border Check Posts in Madhya Pradesh on BOT Basis – Providing and laying of Paver Blocks (100 mm thick M40 to M45 grade).',
    amount: '₹ 6,81,15,000', client: 'IL&FS Transportation Network Limited', date: '30.06.2017'
  },
  {
    id: 11, sn: '11', category: 'Border Check Posts (BOT)',
    shortTitle: '24 Border Check Posts Miscellaneous Work at Rewa–Mirzapur (CP)',
    fullName: 'Construction, upgradation and modernization of 24 Border Check Posts in Madhya Pradesh on BOT Basis – Miscellaneous work at Rewa–Mirzapur (CP).',
    amount: '₹ 5,65,42,039', client: 'IL&FS Transportation Network Limited', date: '30.06.2017'
  },
  {
    id: 12, sn: '12', category: 'Public Infra / Pre-Fab',
    shortTitle: 'Pre-Fab Toilet Works under Swachh Bharat Abhiyan',
    fullName: 'Construction of Pre-Fab Toilet works under "Swachh Bharat Abhiyan".',
    amount: '₹ 15,98,00,000', client: 'Ircon Infrastructure and Services Limited', date: '06.08.2015'
  },
  {
    id: 13, sn: '13', category: 'Bridges & Roads',
    shortTitle: 'Katni–Barhi–Tala Road 3-Span & 2-Span Minor Bridges, Shahdol',
    fullName: 'Katni–Barhi–Tala & Tala Road Projects, Shahdol – 3-span and 2-span Minor Bridges at different locations between Katni–Barhi road.',
    amount: '₹ 18,54,90,950', client: 'Vijai Infrastructure Ltd.', date: '20.08.2010'
  },
  {
    id: 14, sn: '14', category: 'Cross Drainage (NH-25)',
    shortTitle: 'UP-05 NH-25 Cross Drainage Works (Km 178+000 to Km 183+700)',
    fullName: 'UP-05 Road Project on NH-25 – Cross Drainage works (culverts) between Km 178+000 to Km 183+700.',
    amount: '₹ 11,50,61,842', client: 'IRCON International Limited', date: '09.05.2008'
  },
  {
    id: 15, sn: '15', category: 'Structures / VUP',
    shortTitle: 'UP-05 NH-25 Vehicular Underpass (VUP) at AIT Bypass',
    fullName: 'UP-05 Road Project on NH-25 – Execution of Vehicular Underpass at AIT Bypass.',
    amount: '₹ 1,32,28,907', client: 'IRCON International Limited', date: '20.03.2007'
  },
  {
    id: 16, sn: '16', category: 'Highway Works',
    shortTitle: 'Bhoganipur–Chaudagra Road Work up to WMM (Km 51 to Km 63)',
    fullName: 'Bhoganipur–Chaudagra Road Project – Construction of Road work up to WMM Level from Km 51 to Km 63.',
    amount: '₹ 12,14,04,331', client: 'IRCON International Limited', date: '25.08.2006'
  },
  {
    id: 17, sn: '17', category: 'Culverts / CD Works',
    shortTitle: 'Bhoganipur–Chaudagra RCC Box & Pipe Culverts (Km 41 to 66+075)',
    fullName: 'Bhoganipur–Chaudagra Road Project – Construction of RCC culvert / Box culverts, RCC Pipe culverts from Km 41 to Km 66+075.',
    amount: '₹ 4,32,10,139', client: 'IRCON International Limited', date: '16.03.2006'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // 1. Render Short-View Cards Grid
  const grid = document.getElementById('completedProjectsGrid');
  if (grid) {
    function renderCards(list) {
      grid.innerHTML = list.map(p => `
        <div class="col-md-6 col-lg-4">
          <a href="project-detail.html?id=${p.id}" class="text-decoration-none d-block h-100">
            <div class="completed-card completed-card-short h-100 d-flex flex-column">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="badge bg-brand-lavender text-brand-purple fw-semibold">${p.category}</span>
                <small class="text-success fw-semibold"><i class="bi bi-check2-circle me-1"></i>${p.date}</small>
              </div>
              <h6 class="fw-bold text-dark mb-2 line-clamp-2">${p.shortTitle}</h6>
              <p class="small text-muted mb-3 flex-grow-1 line-clamp-2">${p.client}</p>
              <div class="d-flex justify-content-between align-items-center pt-2 border-top">
                <span class="fw-bold text-brand-purple small">${p.amount}</span>
                <span class="small fw-semibold text-brand-amber">View Details <i class="bi bi-arrow-right"></i></span>
              </div>
            </div>
          </a>
        </div>
      `).join('');
    }

    renderCards(COMPLETED_PROJECTS);

    const searchInput = document.getElementById('completedProjectSearch');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        const term = searchInput.value.trim().toLowerCase();
        const filtered = COMPLETED_PROJECTS.filter(p =>
          `${p.shortTitle} ${p.fullName} ${p.client} ${p.date} ${p.category}`.toLowerCase().includes(term)
        );
        renderCards(filtered);
      });
    }
  }

  // 2. Render Single Project Detail Page (project-detail.html?id=...)
  const detailRoot = document.getElementById('projectDetailRoot');
  if (detailRoot) {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'), 10) || 1;
    const idx = COMPLETED_PROJECTS.findIndex(p => p.id === id);
    const project = COMPLETED_PROJECTS[idx >= 0 ? idx : 0];

    document.title = `${project.shortTitle} | AGRAJ INFRASTRUCTURE PVT. LTD.`;
    document.getElementById('pdBreadcrumb').textContent = `Project #${project.sn}`;
    document.getElementById('pdCategory').textContent = project.category;
    document.getElementById('pdShortTitle').textContent = project.shortTitle;
    document.getElementById('pdShortTitle2').textContent = project.shortTitle;
    document.getElementById('pdSn').textContent = `#${project.sn}`;
    document.getElementById('pdFullName').textContent = project.fullName;
    document.getElementById('pdClient').textContent = project.client;
    document.getElementById('pdAmount').textContent = project.amount;
    document.getElementById('pdDate').textContent = project.date;

    const prevProject = COMPLETED_PROJECTS[(idx - 1 + COMPLETED_PROJECTS.length) % COMPLETED_PROJECTS.length];
    const nextProject = COMPLETED_PROJECTS[(idx + 1) % COMPLETED_PROJECTS.length];
    document.getElementById('pdPrevBtn').href = `project-detail.html?id=${prevProject.id}`;
    document.getElementById('pdNextBtn').href = `project-detail.html?id=${nextProject.id}`;
  }
});