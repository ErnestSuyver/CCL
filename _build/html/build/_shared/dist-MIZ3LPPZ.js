import{h as m,q as e}from"/build/_shared/chunk-MJFQO7Q4.js";import"/build/_shared/chunk-RTIGS2T3.js";import"/build/_shared/chunk-RAQ24GF6.js";var u={name:"proof",alias:["prf:proof","prf:theorem","prf:axiom","prf:lemma","prf:definition","prf:criterion","prf:remark","prf:conjecture","prf:corollary","prf:algorithm","prf:example","prf:property","prf:observation","prf:proposition","prf:assumption"],arg:{type:e.parsed},options:{label:{type:e.string},class:{type:e.string},nonumber:{type:e.boolean}},body:{type:e.parsed,required:!0},run(r){var o,p,i,t;let n=[];r.arg&&n.push({type:"admonitionTitle",children:r.arg}),r.body&&n.push(...r.body);let s=(p=(o=r.options)===null||o===void 0?void 0:o.nonumber)!==null&&p!==void 0?p:!1,a=(i=r.options)===null||i===void 0?void 0:i.label,{label:c,identifier:f}=m(a)||{};return[{type:"proof",kind:r.name!=="proof"?r.name.replace("prf:",""):void 0,label:c,identifier:f,class:(t=r.options)===null||t===void 0?void 0:t.class,enumerated:!s,children:n}]}};var l;(function(r){r.proof="proof",r.axiom="axiom",r.lemma="lemma",r.definition="definition",r.criterion="criterion",r.remark="remark",r.conjecture="conjecture",r.corollary="corollary",r.algorithm="algorithm",r.example="example",r.property="property",r.observation="observation",r.proposition="proposition",r.assumption="assumption",r.theorem="theorem"})(l||(l={}));export{l as ProofKind,u as proofDirective};
