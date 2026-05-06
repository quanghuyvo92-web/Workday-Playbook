/* ═══════════════════════════════════════════
   VINA COMPANY — WORKDAY HUB
   data/concepts.js
   Concept config, org type teaching text,
   guided story steps
   ═══════════════════════════════════════════ */

const CONCEPTS = {
  org: {
    color:'var(--c-org)', bg:'var(--c-org-bg)', activeColor:'#1D4ED8',
    label:'Supervisory Org & Hierarchies',
    intro:'A Supervisory Org answers one question: <strong>"Who do you report to?"</strong> It is not about cost, location, or legal entity — those are separate org types in Workday.',
    takeaway:'💡 Supervisory Org = reporting line only. Everything else is a different dimension.',
    links:[
      {c:'stf', desc:'Positions live inside Supervisory Orgs'},
      {c:'sec', desc:'Security access is scoped to your org boundary'},
    ],
  },
  stf: {
    color:'var(--c-stf)', bg:'var(--c-stf-bg)', activeColor:'#9D174D',
    label:'Staffing Model',
    intro:'The Staffing Model defines how headcount is managed. Vina uses <strong>Position Management</strong> — every seat exists before anyone sits in it. Vacancies are always visible.',
    takeaway:'💡 You always know how many seats exist, who\'s in them, and which ones are empty.',
    links:[
      {c:'org', desc:'Positions always belong to a Supervisory Org'},
      {c:'jp',  desc:'Each position inherits from a Job Profile'},
    ],
  },
  jp: {
    color:'var(--c-jp)', bg:'var(--c-jp-bg)', activeColor:'#B45309',
    label:'Job Profile',
    intro:'A <strong>Job Profile</strong> is the master template for a job. It carries the title, family, level, and grade. Many positions share one profile — the profile is the blueprint, the position is the chair.',
    takeaway:'💡 One blueprint, many positions. Change the profile and it affects every position built from it.',
    links:[
      {c:'comp', desc:'Comp Grade is defined on the Job Profile'},
      {c:'stf',  desc:'Positions inherit their definition from the profile'},
    ],
  },
  comp: {
    color:'var(--c-comp)', bg:'var(--c-comp-bg)', activeColor:'#DC2626',
    label:'Compensation',
    intro:'Compensation is the <strong>full contractual package</strong> — base salary, Tháng 13 (equal to one month\'s base), BHXH, Phụ cấp, and performance bonus. Each component tracked separately.',
    takeaway:'💡 Every element of pay is structured, auditable, and consistent across the whole company.',
    links:[
      {c:'jp', desc:'Grade band comes from the Job Profile'},
      {c:'bp', desc:'Pay changes trigger an approval workflow'},
    ],
  },
  sec: {
    color:'var(--c-sec)', bg:'var(--c-sec-bg)', activeColor:'#065F46',
    label:'Security',
    intro:'Workday security is <strong>role-based and org-scoped</strong>. Your role determines what you can do. Your org boundary determines what you can see.',
    takeaway:'💡 Security = Role + Org. Before go-live, decide who sees what.',
    links:[
      {c:'org', desc:'Org boundary defines your access scope'},
      {c:'bp',  desc:'Security roles determine who can action workflow steps'},
    ],
  },
  bp: {
    color:'var(--c-bp)', bg:'var(--c-bp-bg)', activeColor:'#7C3AED',
    label:'Business Process Framework',
    intro:'Every Workday action triggers a <strong>Business Process</strong>. Highly configurable — but keep it <strong>streamlined</strong>. Fewer steps = faster decisions = no bottlenecks.',
    takeaway:'💡 Recommendation for Vina Company: max 2 approvers per process.',
    links:[
      {c:'org',  desc:'Approvers follow the org hierarchy'},
      {c:'sec',  desc:'Security roles determine who can action a step'},
      {c:'comp', desc:'Pay changes are a business process'},
    ],
  },
};

const ORG_TYPE_TEACH = {
  sup:     {title:'Supervisory Org',  msg:'<strong>"Who do you report to?"</strong> Defines the management hierarchy. A worker belongs to exactly one Supervisory Org at a time.'},
  company: {title:'Company',          msg:'<strong>The legal entity — who employs you on paper.</strong> All 51 Vina workers are employed by the same legal entity, regardless of which team they report to.'},
  cc:      {title:'Cost Center',      msg:'<strong>"Which budget pays for this person?"</strong> A worker\'s Supervisory Org and Cost Center can differ — and often do.'},
  loc:     {title:'Location',         msg:'<strong>"Where do you physically work?"</strong> Drives tax jurisdiction and time zone. More specific than a region — Bình Dương Factory and Bình Dương Warehouse are two different locations.'},
  custom:  {title:'Custom Org',       msg:'<strong>Any grouping your company defines.</strong> Blue Collar vs White Collar cuts across reporting lines. One worker can belong to multiple Custom Orgs simultaneously.'},
};

const STORY = [
  {icon:'🏭', title:'Meet Vina Company',
    body:'A Vietnamese FMCG manufacturer — <strong>51 employees</strong>, 3 sites, 6 departments implementing Workday HCM.',
    hl:'Click any group to expand it and see its members. Click a worker to explore their full data.',
    c:null, ot:null},
  {icon:'🏢', title:'Supervisory Org — who reports to who',
    body:'The Supervisory Org answers one question: <strong>"Who do you report to?"</strong> Nothing more.',
    hl:'Use the org type switcher to see the same people through different lenses.',
    c:'org', ot:'sup'},
  {icon:'🏛️', title:'Company — the legal lens',
    body:'One box: <strong>Vina Company Ltd.</strong> All 51 employees — same legal entity, regardless of reporting line.',
    hl:'Same people. Different grouping. That\'s the multi-org model.',
    c:'org', ot:'company'},
  {icon:'🏦', title:'Cost Center — the finance lens',
    body:'Workers regroup by <strong>which budget pays for them</strong>. Hierarchies: Corporate, Commercial, Manufacturing.',
    hl:'Click a hierarchy to expand its cost centers. Click a cost center to see its workers.',
    c:'org', ot:'cc'},
  {icon:'📍', title:'Location — where work happens',
    body:'Workers grouped by <strong>physical workplace</strong>. More specific — Factory and Warehouse are separate locations even in Bình Dương.',
    hl:'All 5 locations sit under the Vietnam location hierarchy.',
    c:'org', ot:'loc'},
  {icon:'⚙️', title:'Custom Org — your own logic',
    body:'<strong>Blue Collar vs White Collar</strong> cuts across reporting lines. One worker can belong to multiple Custom Orgs.',
    hl:'Võ Thị Lan reports to Operations but belongs to Blue Collar Custom Org.',
    c:'org', ot:'custom'},
  {icon:'💺', title:'Staffing Model — positions before people',
    body:'Vina uses <strong>Position Management</strong>. Every seat exists before anyone is hired. 4 positions are currently vacant.',
    hl:'Worker cards now show filled (green) vs vacant (dashed grey).',
    c:'stf', ot:null},
  {icon:'✅', title:'Now explore freely',
    body:'Switch tabs. Switch org type views. Click workers. Follow the cross-concept links.',
    hl:null, c:null, ot:null},
];
