/* ═══════════════════════════════════════════
   VINA COMPANY — WORKDAY HUB
   data/reference.js
   Locations, Cost Centers, Job Profiles,
   Comp Grades, Security Roles, JFG Colors
   ═══════════════════════════════════════════ */

const LOCATIONS = [
  {id:'LOC-VN-HCM-01', name:'Hồ Chí Minh City HQ',    country:'Vietnam', tz:'UTC+7', hier:'Vietnam'},
  {id:'LOC-VN-HCM-02', name:'Hồ Chí Minh City Sales',  country:'Vietnam', tz:'UTC+7', hier:'Vietnam'},
  {id:'LOC-VN-HAN-01', name:'Hà Nội Regional Office',   country:'Vietnam', tz:'UTC+7', hier:'Vietnam'},
  {id:'LOC-VN-BDG-01', name:'Bình Dương Factory',       country:'Vietnam', tz:'UTC+7', hier:'Vietnam'},
  {id:'LOC-VN-BDG-02', name:'Bình Dương Warehouse',     country:'Vietnam', tz:'UTC+7', hier:'Vietnam'},
];

const COST_CENTERS = [
  {id:'CC-EXEC',     name:'Executive Leadership',    hier:'Corporate',     currency:'USD'},
  {id:'CC-HR',       name:'Human Resources',          hier:'Corporate',     currency:'VND'},
  {id:'CC-FIN',      name:'Finance',                  hier:'Corporate',     currency:'VND'},
  {id:'CC-SALES',    name:'Sales & Marketing HCM',    hier:'Commercial',    currency:'VND'},
  {id:'CC-SALES-HAN',name:'Sales North Hà Nội',      hier:'Commercial',    currency:'VND'},
  {id:'CC-OPS',      name:'Operations & Supply Chain',hier:'Manufacturing', currency:'VND'},
  {id:'CC-PROD',     name:'Production',               hier:'Manufacturing', currency:'VND'},
  {id:'CC-WH',       name:'Warehouse & Logistics',    hier:'Manufacturing', currency:'VND'},
];

const JOB_PROFILES = {
  'JP-EXEC-CEO':  {name:'Chief Executive Officer',     group:'Management',         family:'Executive Leadership', level:'Executive',             grade:'Grade 1'},
  'JP-EXEC-COO':  {name:'Chief Operating Officer',     group:'Management',         family:'Executive Leadership', level:'Executive',             grade:'Grade 1'},
  'JP-MGMT-HEAD': {name:'Department Head',             group:'Management',         family:'People Management',    level:'Senior Manager',        grade:'Grade 2'},
  'JP-MGMT-MGR':  {name:'Team Manager',                group:'Management',         family:'People Management',    level:'Manager',               grade:'Grade 3'},
  'JP-HR-MGR':    {name:'HR Manager',                  group:'Corporate Functions',family:'Human Resources',      level:'Professional',          grade:'Grade 3'},
  'JP-HR-RWD':    {name:'Head of Rewards & Benefits',  group:'Corporate Functions',family:'Human Resources',      level:'Professional',          grade:'Grade 3'},
  'JP-HR-BP':     {name:'HR Business Partner',         group:'Corporate Functions',family:'Human Resources',      level:'Professional',          grade:'Grade 4'},
  'JP-HR-SPEC':   {name:'HR Specialist',               group:'Corporate Functions',family:'Human Resources',      level:'Individual Contributor',grade:'Grade 5'},
  'JP-FIN-MGR':   {name:'Finance Manager',             group:'Corporate Functions',family:'Finance',              level:'Professional',          grade:'Grade 3'},
  'JP-FIN-ACCT':  {name:'Senior Accountant',           group:'Corporate Functions',family:'Finance',              level:'Individual Contributor',grade:'Grade 4'},
  'JP-FIN-ANAL':  {name:'Finance Analyst',             group:'Corporate Functions',family:'Finance',              level:'Individual Contributor',grade:'Grade 5'},
  'JP-SALES-HEAD':{name:'Head of Sales',               group:'Commercial',         family:'Sales',                level:'Senior Manager',        grade:'Grade 2'},
  'JP-SALES-MGR': {name:'Sales Manager',               group:'Commercial',         family:'Sales',                level:'Manager',               grade:'Grade 3'},
  'JP-SALES-EXEC':{name:'Sales Executive',             group:'Commercial',         family:'Sales',                level:'Individual Contributor',grade:'Grade 5'},
  'JP-MKT-SPEC':  {name:'Marketing Specialist',        group:'Commercial',         family:'Marketing',            level:'Individual Contributor',grade:'Grade 5'},
  'JP-OPS-HEAD':  {name:'Head of Operations',          group:'Manufacturing',      family:'Operations',           level:'Senior Manager',        grade:'Grade 2'},
  'JP-OPS-MGR':   {name:'Operations Manager',          group:'Manufacturing',      family:'Operations',           level:'Manager',               grade:'Grade 3'},
  'JP-OPS-COORD': {name:'Operations Coordinator',      group:'Manufacturing',      family:'Operations',           level:'Individual Contributor',grade:'Grade 5'},
  'JP-PROD-SUP':  {name:'Production Supervisor',       group:'Manufacturing',      family:'Production',           level:'Supervisor',            grade:'Grade 4'},
  'JP-PROD-LEAD': {name:'Production Team Lead',        group:'Manufacturing',      family:'Production',           level:'Supervisor',            grade:'Grade 5'},
  'JP-PROD-OP':   {name:'Production Operator',         group:'Manufacturing',      family:'Production',           level:'Individual Contributor',grade:'Grade 5'},
  'JP-WH-SUP':    {name:'Warehouse Supervisor',        group:'Manufacturing',      family:'Logistics',            level:'Supervisor',            grade:'Grade 4'},
  'JP-WH-OP':     {name:'Warehouse Operator',          group:'Manufacturing',      family:'Logistics',            level:'Individual Contributor',grade:'Grade 5'},
};

const COMP_GRADES = {
  'Grade 1':{label:'Grade 1 — Executive',    color:'#7C3AED', min_usd:150000, max_usd:250000, min_vnd:null,     max_vnd:null},
  'Grade 2':{label:'Grade 2 — Senior Mgmt',  color:'#1D4ED8', min_usd:null,   max_usd:null,   min_vnd:80000000, max_vnd:120000000},
  'Grade 3':{label:'Grade 3 — Manager',      color:'#0891B2', min_usd:null,   max_usd:null,   min_vnd:55000000, max_vnd:85000000},
  'Grade 4':{label:'Grade 4 — Professional', color:'#059669', min_usd:null,   max_usd:null,   min_vnd:35000000, max_vnd:58000000},
  'Grade 5':{label:'Grade 5 — Staff',        color:'#D97706', min_usd:null,   max_usd:null,   min_vnd:15000000, max_vnd:35000000},
};

const SEC_ROLES = {
  'CEO':                  {color:'#1A1814', short:'CEO'},
  'System Admin':         {color:'#DC2626', short:'Admin'},
  'HR Partner':           {color:'#1D4ED8', short:'HRP'},
  'HR Analyst':           {color:'#0891B2', short:'HRA'},
  'Manager':              {color:'#059669', short:'MGR'},
  'Employee Self-Service':{color:'#6B6660', short:'ESS'},
};

const JFG_COLORS = {
  'Management':          '#7C3AED',
  'Corporate Functions': '#1D4ED8',
  'Commercial':          '#059669',
  'Manufacturing':       '#D97706',
};
