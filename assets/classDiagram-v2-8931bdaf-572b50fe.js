import{p as I,d as N,s as M}from"./styles-aefe6593-a17349b7.js";import{l as p,c,h as w,y as R,t as B,r as D,o as E,p as G,j as _}from"./mermaid.core-e1b65938.js";import{G as z}from"./layout-35579530.js";import{r as P}from"./index-a92ac404-2025ddf7.js";import"./app-57e901dd.js";import"./commonjsHelpers-042e6b4d.js";import"./edges-49ac43a2-c93f7123.js";import"./createText-3df630b5-92dc4e08.js";import"./svgDraw-0fcc813d-c313cfda.js";import"./line-900637f8.js";import"./array-9f3ba611.js";import"./path-53f90ab3.js";const S=s=>_.sanitizeText(s,c());let k={dividerMargin:10,padding:5,textHeight:10,curve:void 0};const q=function(s,t,y,a){const e=Object.keys(s);p.info("keys:",e),p.info(s),e.forEach(function(i){var l,r;const o=s[i],d={shape:"rect",id:o.id,domId:o.domId,labelText:S(o.id),labelStyle:"",style:"fill: none; stroke: black",padding:((l=c().flowchart)==null?void 0:l.padding)??((r=c().class)==null?void 0:r.padding)};t.setNode(o.id,d),A(o.classes,t,y,a,o.id),p.info("setNode",d)})},A=function(s,t,y,a,e){const i=Object.keys(s);p.info("keys:",i),p.info(s),i.forEach(function(l){var r,o;const n=s[l];let d="";n.cssClasses.length>0&&(d=d+" "+n.cssClasses.join(" "));const f={labelStyle:"",style:""},h=n.label??n.id,b=0,m="class_box",u={labelStyle:f.labelStyle,shape:m,labelText:S(h),classData:n,rx:b,ry:b,class:d,style:f.style,id:n.id,domId:n.domId,tooltip:a.db.getTooltip(n.id,e)||"",haveCallback:n.haveCallback,link:n.link,width:n.type==="group"?500:void 0,type:n.type,padding:((r=c().flowchart)==null?void 0:r.padding)??((o=c().class)==null?void 0:o.padding)};t.setNode(n.id,u),e&&t.setParent(n.id,e),p.info("setNode",u)})},F=function(s,t,y,a){p.info(s),s.forEach(function(e,i){var l,r;const o=e,n="",d={labelStyle:"",style:""},f=o.text,h=0,b="note",m={labelStyle:d.labelStyle,shape:b,labelText:S(f),noteData:o,rx:h,ry:h,class:n,style:d.style,id:o.id,domId:o.id,tooltip:"",type:"note",padding:((l=c().flowchart)==null?void 0:l.padding)??((r=c().class)==null?void 0:r.padding)};if(t.setNode(o.id,m),p.info("setNode",m),!o.class||!(o.class in a))return;const u=y+i,g={id:`edgeNote${u}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:D(k.curve,E)};t.setEdge(o.id,o.class,g,u)})},H=function(s,t){const y=c().flowchart;let a=0;s.forEach(function(e){var i;a++;const l={classes:"relation",pattern:e.relation.lineType==1?"dashed":"solid",id:"id"+a,arrowhead:e.type==="arrow_open"?"none":"normal",startLabelRight:e.relationTitle1==="none"?"":e.relationTitle1,endLabelLeft:e.relationTitle2==="none"?"":e.relationTitle2,arrowTypeStart:C(e.relation.type1),arrowTypeEnd:C(e.relation.type2),style:"fill:none",labelStyle:"",curve:D(y==null?void 0:y.curve,E)};if(p.info(l,e),e.style!==void 0){const r=G(e.style);l.style=r.style,l.labelStyle=r.labelStyle}e.text=e.title,e.text===void 0?e.style!==void 0&&(l.arrowheadStyle="fill: #333"):(l.arrowheadStyle="fill: #333",l.labelpos="c",((i=c().flowchart)==null?void 0:i.htmlLabels)??c().htmlLabels?(l.labelType="html",l.label='<span class="edgeLabel">'+e.text+"</span>"):(l.labelType="text",l.label=e.text.replace(_.lineBreakRegex,`
`),e.style===void 0&&(l.style=l.style||"stroke: #333; stroke-width: 1.5px;fill:none"),l.labelStyle=l.labelStyle.replace("color:","fill:"))),t.setEdge(e.id1,e.id2,l,a)})},V=function(s){k={...k,...s}},W=async function(s,t,y,a){p.info("Drawing class - ",t);const e=c().flowchart??c().class,i=c().securityLevel;p.info("config:",e);const l=(e==null?void 0:e.nodeSpacing)??50,r=(e==null?void 0:e.rankSpacing)??50,o=new z({multigraph:!0,compound:!0}).setGraph({rankdir:a.db.getDirection(),nodesep:l,ranksep:r,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),n=a.db.getNamespaces(),d=a.db.getClasses(),f=a.db.getRelations(),h=a.db.getNotes();p.info(f),q(n,o,t,a),A(d,o,t,a),H(f,o),F(h,o,f.length+1,d);let b;i==="sandbox"&&(b=w("#i"+t));const m=i==="sandbox"?w(b.nodes()[0].contentDocument.body):w("body"),u=m.select(`[id="${t}"]`),g=m.select("#"+t+" g");if(await P(g,o,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",t),R.insertTitle(u,"classTitleText",(e==null?void 0:e.titleTopMargin)??5,a.db.getDiagramTitle()),B(o,u,e==null?void 0:e.diagramPadding,e==null?void 0:e.useMaxWidth),!(e!=null&&e.htmlLabels)){const T=i==="sandbox"?b.nodes()[0].contentDocument:document,$=T.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const x of $){const L=x.getBBox(),v=T.createElementNS("http://www.w3.org/2000/svg","rect");v.setAttribute("rx",0),v.setAttribute("ry",0),v.setAttribute("width",L.width),v.setAttribute("height",L.height),x.insertBefore(v,x.firstChild)}}};function C(s){let t;switch(s){case 0:t="aggregation";break;case 1:t="extension";break;case 2:t="composition";break;case 3:t="dependency";break;case 4:t="lollipop";break;default:t="none"}return t}const J={setConf:V,draw:W},se={parser:I,db:N,renderer:J,styles:M,init:s=>{s.class||(s.class={}),s.class.arrowMarkerAbsolute=s.arrowMarkerAbsolute,N.clear()}};export{se as diagram};
