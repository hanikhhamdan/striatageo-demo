// Screen 6: Economics tab — Macro + Reform Tracker

const Sparkline = ({ values, color = '#1AA882', width = 60, height = 24 }) => {
  const min = Math.min(...values), max = Math.max(...values);
  const span = max - min || 1;
  const pts = values.map((v,i) => {
    const x = (i / (values.length - 1)) * width;
    const y = height - ((v - min) / span) * height;
    return `${x},${y}`;
  }).join(' ');
  return (
    <svg width={width} height={height} style={{display:'block'}}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.2"/>
      <circle cx={width} cy={height - ((values[values.length-1] - min) / span) * height} r="1.5" fill={color}/>
    </svg>
  );
};

const EconomicsScreen = ({ tab = 'macro', ...nav }) => (
  <AppFrame active="Economics" {...nav}>
    <div style={{padding: 16, display:'flex', flexDirection:'column', gap: 12}}>
      {/* Sub-tabs */}
      <div style={{display:'flex', borderBottom:'1px solid var(--border)'}}>
        {['Macro','Monetary & Exchange','Fiscal','Banking','Reform Tracker','Sanctions','External'].map((t) => {
          const active = (tab === 'macro' && t === 'Macro') || (tab === 'reform' && t === 'Reform Tracker');
          return (
            <div key={t} style={{
              padding:'10px 14px', fontSize: 13,
              color: active ? 'var(--teal)' : 'var(--text-2)',
              borderBottom: active ? '2px solid var(--teal)' : '2px solid transparent',
              cursor:'pointer', marginBottom: -1
            }}>{t}</div>
          );
        })}
      </div>

      {tab === 'macro' && <>
        {/* 6 indicator cards 3x2 */}
        {/* TODO: data-layer — macro KPIs, political-factors table, Reform Tracker conditions all hand-curated. */}
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 12}}>
          {[
            {label:'GDP (Real)', value:'$28.3B', change:'↑ from $23.7B 2024', src:'IMF · Apr 2026', up:true, spark:[24,23,22,23,24,25,27,28,28.3]},
            {label:'GDP per capita', value:'$5,240', change:'↑ from $4,390', src:'World Bank · Jan 2026', up:true, spark:[4.2,4.3,4.4,4.4,4.6,4.9,5.1,5.24]},
            {label:'Real GDP growth', value:'3.5%', change:'↑ from −7.1% 2024', src:'World Bank · Jan 2026', up:true, spark:[-9,-7,-7.1,-3,-1,1,2.5,3.5]},
            {label:'Inflation rate', value:'15.2%', change:'↓ from 28% 2024', src:'World Bank · Jun 2025', up:false, color:'#1AA882', spark:[221,180,120,80,55,40,28,18,15.2]},
            {label:'Unemployment', value:'~35%', change:'→ Stable (est.)', src:'ILO estimate · 2024', flat:true, spark:[34,35,36,35,35,35,35]},
            {label:'Poverty rate', value:'>80%', change:'→ No improvement', src:'World Bank · 2024', flat:true, color:'#E03E3E', spark:[78,80,82,82,82,80,80]},
          ].map((c,i) => (
            <div key={i} className="panel" style={{padding: 14}}>
              <div className="t-12 tx-2" style={{marginBottom: 10}}>{c.label}</div>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end'}}>
                <div className="t-24" style={{color: c.color || 'var(--text-1)'}}>{c.value}</div>
                <Sparkline values={c.spark} color={c.flat ? '#7E8699' : c.up ? '#1AA882' : '#1AA882'}/>
              </div>
              <div className="t-12" style={{marginTop: 8, color: c.up ? 'var(--teal)' : c.flat ? 'var(--text-2)' : 'var(--teal)'}}>{c.change}</div>
              <div className="t-11 tx-3 mono" style={{marginTop: 4}}>{c.src}</div>
            </div>
          ))}
        </div>

        {/* Political cause analysis */}
        <div className="panel" style={{background:'var(--surface-raised)'}}>
          <div className="panel-header">
            <div className="panel-title">Political factors driving current economic state <InfoTip>{TIPS.politicalFactors}</InfoTip></div>
            <VerifBadge kind="verified"/>
          </div>
          <table className="table" style={{marginTop:4}}>
            <thead>
              <tr>
                <th>Indicator</th>
                <th>Political cause</th>
                <th>Actor responsible</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="t-13">Banking sector collapse</td>
                <td className="t-12 tx-2">Political elite protected own deposits via early withdrawals 2019</td>
                <td className="t-12"><span className="affiliation aff-state">Multiple parties</span></td>
                <td><Pill kind="critical">Ongoing — no resolution</Pill></td>
              </tr>
              <tr>
                <td className="t-13">Exchange rate crisis</td>
                <td className="t-12 tx-2">BdL monetary financing of fiscal deficit (2016–2019)</td>
                <td className="t-12">Riad Salameh (BdL)</td>
                <td><Pill kind="critical">Ongoing — Salameh resigned Aug 2023; Souaid since Apr 2025; no FX-stability framework</Pill></td>
              </tr>
              <tr>
                <td className="t-13">IMF reforms blocked</td>
                <td className="t-12 tx-2">Key parties oppose bank restructuring losses falling on shareholders</td>
                <td className="t-12"><span className="affiliation aff-hez">Hezbollah</span> <span className="affiliation aff-state">Amal</span></td>
                <td><Pill kind="critical">1 completed · 1 partial · 6 pending</Pill></td>
              </tr>
              <tr>
                <td className="t-13">Electricity sector deficit</td>
                <td className="t-12 tx-2">Patronage hiring + tariff freeze; EDL accumulates ~$1.5B/yr loss</td>
                <td className="t-12">Ministry of Energy / FPM-aligned</td>
                <td><Pill kind="strained">Tariff reform Apr 2025</Pill></td>
              </tr>
            </tbody>
          </table>
        </div>
      </>}

      {tab === 'reform' && <>
        {/* IMF status banner */}
        <div style={{
          padding: 14,
          background: 'rgba(232,155,34,0.10)',
          borderLeft: '2px solid var(--warning)',
          borderRadius: '0 8px 8px 0',
          display:'flex', alignItems:'center', gap: 12
        }}>
          <span style={{color:'var(--warning)', fontSize: 18}}>⚠</span>
          <div style={{flex:1}}>
            <div className="t-13 fw-5">IMF Staff-Level Agreement: April 2022 <InfoTip>{TIPS.reform}</InfoTip></div>
            <div className="t-12 tx-2" style={{marginTop:2}}>8 prior actions required · <span className="tx-teal">1 completed</span> · <span style={{color:'var(--critical)'}}>7 pending</span> · 4 years overdue</div>
          </div>
          <button className="btn btn-ghost" style={{height: 32, fontSize: 12}}>View full SLA →</button>
        </div>

        {/* Reform table */}
        <div className="panel" style={{padding: 0, overflow:'hidden'}}>
          <table className="table">
            <thead>
              <tr>
                <th>Condition</th>
                <th style={{width:120}}>Status</th>
                <th style={{width:200}}>Responsible</th>
                <th style={{width:140}}>Deadline</th>
                <th style={{width:100, textAlign:'right'}}>Confidence</th>
              </tr>
            </thead>
            <tbody>
              {[
                {n:'Bank secrecy law amendment (Law 306)', s:'completed', r:'Parliament', d:'Oct 2025 ✓', t:1},
                {n:'Banking resolution framework', s:'pending', r:'Parliament', d:'Overdue 18 months', t:1},
                {n:'Capital controls legislation', s:'pending', r:'Ministry of Finance', d:'Overdue 24 months', t:1},
                {n:'BdL governance reform', s:'pending', r:'BdL / Parliament', d:'Overdue 12 months', t:1},
                {n:'Electricity sector reform', s:'pending', r:'Ministry of Energy', d:'Overdue 10 months', t:1},
                {n:'Public finance reform', s:'pending', r:'Ministry of Finance', d:'Overdue 14 months', t:2},
                {n:'Judicial reform package', s:'partial', r:'Parliament', d:'Jul 2025 ✓ partial', t:1},
                {n:'Financial gap resolution law', s:'pending', r:'Parliament', d:'TBD', t:1},
              ].map((r,i) => (
                <tr key={i}>
                  <td className="t-13">{r.n}</td>
                  <td>
                    {r.s === 'completed' && <span style={{color:'var(--teal)'}}>✓ Completed</span>}
                    {r.s === 'pending' && <span style={{color:'var(--critical)'}}>✗ Pending</span>}
                    {r.s === 'partial' && <span style={{color:'var(--warning)'}}>◐ Partial</span>}
                  </td>
                  <td className="t-12 tx-2">{r.r}</td>
                  <td className="t-12 mono" style={{color: r.d.includes('Overdue') ? 'var(--critical)' : r.d.includes('TBD') ? 'var(--text-3)' : 'var(--text-2)'}}>{r.d}</td>
                  <td style={{textAlign:'right'}}><TierBadge tier={r.t} sources={3}/></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{padding:'4px 4px'}}><EvidenceChain/></div>
      </>}
    </div>
  </AppFrame>
);

window.EconomicsScreen = EconomicsScreen;
