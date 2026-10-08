/* Relatório semanal de aprendizado. Dados detalhados locais a partir desta atualização. */
(function weeklyReport(){
  "use strict";
  const KEY="vb-weekly-report-v1",MAX_WEEKS=12;
  const FIELDS=["vocab","newWords","reviews","remembered","difficult","mistakes","phrases","texts","scenes","stories","quizAnswers","quizCorrect"];
  let weekOffset=0,selectedDay=null;
  const empty=()=>Object.fromEntries(FIELDS.map(k=>[k,0]));
  const el=id=>document.getElementById(id);
  function read(key,fallback){try{const v=localStorage.getItem(key);return v?JSON.parse(v):fallback}catch(_){return fallback}}
  function save(data){try{localStorage.setItem(KEY,JSON.stringify(data))}catch(_){}}
  function dateKey(d){return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")}
  function monday(offset){const d=new Date();d.setHours(12,0,0,0);d.setDate(d.getDate()-((d.getDay()+6)%7)+offset*7);return d}
  function weekKeys(offset){const start=monday(offset),result=[];for(let i=0;i<7;i++){const d=new Date(start);d.setDate(start.getDate()+i);result.push({key:dateKey(d),date:d})}return result}
  const count=(obj,key)=>Math.max(0,Math.floor(Number(obj&&obj[key])||0));
  function aggregate(rows){const sum=empty();for(const row of rows)for(const k of FIELDS)sum[k]+=count(row,k);return sum}
  function load(){const data=read(KEY,{days:{}});return data&&typeof data==="object"&&data.days&&typeof data.days==="object"&&!Array.isArray(data.days)?data:{days:{}}}
  function track(type,meta,language){
    const lang=["de","it","fr"].includes(language)?language:"de",key=dateKey(new Date()),data=load(),day=data.days[key]||(data.days[key]={}),row=day[lang]||(day[lang]=empty());
    switch(type){
      case "vocab":
        row.vocab=count(row,"vocab")+1;
        if(meta&&meta.isNew)row.newWords=count(row,"newWords")+1;else row.reviews=count(row,"reviews")+1;
        if(meta&&meta.grade===2)row.remembered=count(row,"remembered")+1;
        else if(meta&&meta.grade===1)row.difficult=count(row,"difficult")+1;
        else row.mistakes=count(row,"mistakes")+1;
        break;
      case "phrase":row.phrases=count(row,"phrases")+1;break;
      case "text":row.texts=count(row,"texts")+1;break;
      case "storyScene":row.scenes=count(row,"scenes")+1;break;
      case "storyFinish":row.stories=count(row,"stories")+1;break;
      case "quiz":row.quizAnswers=count(row,"quizAnswers")+1;if(meta&&meta.correct)row.quizCorrect=count(row,"quizCorrect")+1;break;
      default:return;
    }
    const dates=Object.keys(data.days).sort();while(dates.length>430)delete data.days[dates.shift()];
    save(data);
    const view=el("view-relatorio");if(view&&!view.hidden)render();
  }
  const shortDate=d=>String(d.getDate()).padStart(2,"0")+"/"+String(d.getMonth()+1).padStart(2,"0");
  const fmt=n=>n.toLocaleString("pt-BR");
  function render(){
    const root=el("weekly-report");if(!root)return;
    const week=weekKeys(weekOffset),activity=read("vb-activity",{}),db=load().days;
    const days=week.map(({key,date})=>({key,date,metrics:aggregate(Object.values(db[key]||{}).filter(v=>v&&typeof v==="object")),activity:Math.max(0,Number(activity&&activity[key])||0)}));
    const total=aggregate(days.map(d=>d.metrics));
    const active=days.filter(d=>d.activity>0).length,all=days.reduce((a,d)=>a+d.activity,0),prev=weekKeys(weekOffset-1).filter(d=>Number(activity&&activity[d.key])>0).length;
    const currentWeek=weekOffset===0,begin=week[0].date,end=week[6].date;
    const history=days.some(d=>d.activity>0),details=days.some(d=>FIELDS.some(f=>d.metrics[f]>0));
    const quizAccuracy=total.quizAnswers?Math.round(total.quizCorrect/total.quizAnswers*100):null;
    const max=Math.max(1,...days.map(d=>d.activity)),labels=["Seg","Ter","Qua","Qui","Sex","Sáb","Dom"];
    const chosen=selectedDay&&days.some(d=>d.key===selectedDay)?selectedDay:currentWeek?dateKey(new Date()):null;
    const day=days.find(d=>d.key===chosen);
    const comparison=active===prev?"Mesmo número de dias ativos da semana anterior":active>prev?`${active-prev} dia${active-prev===1?"":"s"} a mais que na semana anterior`:`${prev-active} dia${prev-active===1?"":"s"} a menos que na semana anterior`;
    const stat=(label,value,extra)=>`<div class="wr-stat"><span>${label}</span><strong>${value}</strong><small>${extra}</small></div>`;
    const bars=days.map((d,i)=>{
      const height=d.activity?Math.max(7,Math.round(d.activity/max*100)):0;
      const selected=chosen===d.key,upcoming=currentWeek&&d.key>dateKey(new Date());
      return `<button type="button" class="wr-day${selected?" chosen":""}${upcoming?" upcoming":""}" data-weekday="${d.key}" aria-pressed="${selected}" aria-label="${labels[i]}, ${shortDate(d.date)}: ${fmt(d.activity)} atividades">
      <span class="wr-number">${d.activity?fmt(d.activity):"–"}</span><span class="wr-rail"><span class="wr-fill" style="height:${height}%"></span></span><span class="wr-dayname">${labels[i]}</span><span class="wr-daydate">${d.date.getDate()}</span></button>`;
    }).join("");
    const detail=day?`<div class="wr-detail"><strong>${day.date.toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long"})}</strong><span>${fmt(day.activity)} atividades · ${day.metrics.vocab} cartas · ${day.metrics.phrases+day.metrics.texts} frases/textos · ${day.metrics.stories} histórias finalizadas · ${day.metrics.quizAnswers} respostas no quiz</span></div>`:"";
    root.innerHTML=`<section class="wr-head">
      <div><p class="wr-eyebrow">RESUMO DE APRENDIZAGEM</p><h2>Seu progresso, semana a semana</h2><p>Veja como sua prática evolui, em todos os idiomas.</p></div>
      <div class="wr-period"><button type="button" id="wr-prev" aria-label="Semana anterior" ${weekOffset<=-(MAX_WEEKS-1)?"disabled":""}>←</button><span>${shortDate(begin)} – ${shortDate(end)}${currentWeek?" · atual":""}</span><button type="button" id="wr-next" aria-label="Semana seguinte" ${weekOffset>=0?"disabled":""}>→</button></div>
    </section>
    <section class="wr-stats" aria-label="Indicadores da semana">
      ${stat("Dias de estudo",`${active}<em>/7</em>`,comparison)}
      ${stat("Cartas praticadas",fmt(total.vocab),`${total.newWords} novas · ${total.reviews} revisões`)}
      ${stat("Frases e textos",fmt(total.phrases+total.texts),`${total.phrases} frases · ${total.texts} textos`)}
      ${stat("Histórias finalizadas",fmt(total.stories),`${total.scenes} cenas lidas`)}
      ${stat("Acertos no quiz",quizAccuracy===null?"—":`${quizAccuracy}%`,total.quizAnswers?`${total.quizCorrect} de ${total.quizAnswers} questões`:"Nenhuma questão registrada")}
      ${stat("Atividades totais",fmt(all),"Inclui seu histórico da racha")}
    </section>
    <section class="wr-panel"><div class="wr-panelhead"><div><h3>Atividade diária</h3><p>Toque em um dia para ver os detalhes.</p></div><span>${active} dias ativos</span></div>
      <div class="wr-chart" role="group" aria-label="Atividades realizadas nos sete dias da semana">${bars}</div>${detail}
    </section>
    <section class="wr-panel wr-breakdown"><h3>O que você praticou</h3>
      <div class="wr-breakrow"><span>Vocabulário</span><b>${fmt(total.vocab)}</b></div>
      <div class="wr-breakrow"><span>Frases e parágrafos</span><b>${fmt(total.phrases+total.texts)}</b></div>
      <div class="wr-breakrow"><span>Cenas de histórias</span><b>${fmt(total.scenes)}</b></div>
      <div class="wr-breakrow"><span>Histórias concluídas</span><b>${fmt(total.stories)}</b></div>
      <div class="wr-breakrow"><span>Questões de quiz</span><b>${fmt(total.quizAnswers)}</b></div>
    </section>
    ${history&&!details?'<p class="wr-note">Há atividades registradas nesta semana, mas os tipos de exercício anteriores à atualização não podem ser identificados. Os dias de estudo foram recuperados do histórico da racha.</p>':''}
    <p class="wr-note">Os detalhes por tipo de exercício começam a ser registrados nesta versão. O histórico anterior aparece como atividade diária, sem valores inventados para cada modalidade. Os dados ficam neste navegador e ainda não são sincronizados entre dispositivos.</p>`;
    el("wr-prev").onclick=()=>{if(weekOffset>-(MAX_WEEKS-1)){weekOffset--;selectedDay=null;render()}};
    el("wr-next").onclick=()=>{if(weekOffset<0){weekOffset++;selectedDay=null;render()}};
    root.querySelectorAll("[data-weekday]").forEach(b=>b.onclick=()=>{selectedDay=b.dataset.weekday;render()});
  }
  window.VB_REPORT={track,open:render,refresh:render,_internal:{dateKey,weekKeys,aggregate,empty}};
  window.addEventListener("storage",e=>{const view=el("view-relatorio");if([KEY,"vb-activity"].includes(e.key)&&view&&!view.hidden)render()});
})();
