import{J as m,e as r}from"./xml-GvJS-TfU.js";import"./react--JssUoLx.js";const c=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
<Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
</Types>`,p=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>`,h=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<sheets><sheet name="Action plan" sheetId="1" r:id="rId1"/></sheets></workbook>`,d=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
</Relationships>`,l=["STOP","INVESTIGATE","CRITICAL","REQUIRED","PLAN","MONITOR","NOTE","NONE"];function x(i,a){const o=[];for(const t of i.systems){const s=t.obligations.find(n=>n.live_now),e=t.obligations.find(n=>n.deadline);for(const n of t.actions)n.severity!=="NONE"&&o.push({system:t.name.split(`
`)[0],severity:n.severity,action:n.text,article:(s==null?void 0:s.article)??(e==null?void 0:e.article)??"—",deadline:s?"LIVE NOW":(e==null?void 0:e.deadline)??"—",owner:"",status:"Open"})}return o.sort((t,s)=>{const e=+(s.deadline==="LIVE NOW")-+(t.deadline==="LIVE NOW");return e!==0?e:l.indexOf(t.severity)-l.indexOf(s.severity)}),a&&o.push({system:"",severity:"",action:a,article:"",deadline:"",owner:"",status:""}),o}function f(i,a){let o="",t=i;for(;o=String.fromCharCode(65+t%26)+o,t=Math.floor(t/26)-1,!(t<0););return`${o}${a}`}function u(i){return`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
<cols><col min="1" max="1" width="24" customWidth="1"/><col min="2" max="2" width="14" customWidth="1"/><col min="3" max="3" width="80" customWidth="1"/><col min="4" max="4" width="18" customWidth="1"/><col min="5" max="5" width="14" customWidth="1"/><col min="6" max="6" width="16" customWidth="1"/><col min="7" max="7" width="10" customWidth="1"/></cols>
<sheetData>${i.map((o,t)=>{const s=o.map((e,n)=>`<c r="${f(n,t+1)}" t="inlineStr"><is><t xml:space="preserve">${r(e)}</t></is></c>`).join("");return`<row r="${t+1}">${s}</row>`}).join("")}</sheetData></worksheet>`}async function T(i,a){const o=x(i,a),t=[["System","Severity","Action","Article","Deadline","Owner","Status"],...o.map(e=>[e.system,e.severity,e.action,e.article,e.deadline,e.owner,e.status])],s=new m;return s.file("[Content_Types].xml",c),s.file("_rels/.rels",p),s.file("xl/workbook.xml",h),s.file("xl/_rels/workbook.xml.rels",d),s.file("xl/worksheets/sheet1.xml",u(t)),s.generateAsync({type:"base64",compression:"DEFLATE",mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"})}export{x as actionRows,T as buildActionPlanXlsx};
