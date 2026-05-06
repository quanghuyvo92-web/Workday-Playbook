/* ═══════════════════════════════════════════
   VINA COMPANY — WORKDAY HUB
   data/orgs.js — Supervisory Organisations
   ═══════════════════════════════════════════ */

const ORGS = [
  {id:'exec', name:'Executive Leadership',     manager:'David Chen',       loc:'LOC-VN-HCM-01', cc:'CC-EXEC',    parent:null,  level:0},
  {id:'sales',name:'Sales & Marketing',         manager:'Nguyễn Thị Hoa',  loc:'LOC-VN-HCM-02', cc:'CC-SALES',   parent:'exec',level:1},
  {id:'ops',  name:'Operations & Supply Chain', manager:'Trần Văn Minh',   loc:'LOC-VN-BDG-01', cc:'CC-OPS',     parent:'exec',level:1},
  {id:'hr',   name:'Human Resources',           manager:'Lê Thị Mai',      loc:'LOC-VN-HCM-01', cc:'CC-HR',      parent:'exec',level:1},
  {id:'fin',  name:'Finance',                   manager:'Phạm Văn Đức',    loc:'LOC-VN-HAN-01', cc:'CC-FIN',     parent:'exec',level:1},
  {id:'prod', name:'Production',                manager:'Võ Thị Lan',      loc:'LOC-VN-BDG-01', cc:'CC-PROD',    parent:'ops', level:2},
  {id:'wh',   name:'Warehouse & Logistics',     manager:'Dương Thị Liên',  loc:'LOC-VN-BDG-02', cc:'CC-WH',      parent:'ops', level:2},
];
