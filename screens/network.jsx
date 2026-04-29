// Screen 5: Network tab — force-directed graph

const NetworkScreen = ({ ...nav }) => {
  // TODO: data-layer — nodes, edges, hezbollahProfile assessment + claims all hand-curated.
  // Hand-laid coords for ~17 nodes inside an 820x620 graph area
  const nodes = [
    {id:'aoun', label:'Joseph Aoun', sub:'Presidency', x: 480, y: 180, r: 32, type:'person', color:'#7E8699', shape:'circle'},
    {id:'salam', label:'Nawaf Salam', sub:'PM', x: 530, y: 320, r: 30, type:'person', color:'#7E8699', shape:'circle'},
    {id:'laf', label:'LAF', sub:'Armed Forces', x: 320, y: 240, r: 24, type:'inst', color:'#5A6378', shape:'square'},
    {id:'hez', label:'Hezbollah', sub:'حزب الله', x: 700, y: 420, r: 38, type:'party', color:'#E03E3E', shape:'circle', selected: true},
    {id:'berri', label:'Nabih Berri', sub:'Speaker · Amal', x: 540, y: 470, r: 24, type:'person', color:'#3478CC', shape:'circle'},
    {id:'iran', label:'Iran / IRGC', sub:'Foreign', x: 880, y: 380, r: 34, type:'foreign', color:'#E03E3E', shape:'diamond'},
    {id:'usa', label:'USA', sub:'State Dept', x: 280, y: 100, r: 26, type:'foreign', color:'#3478CC', shape:'diamond'},
    {id:'france', label:'France', sub:'MFA', x: 480, y: 60, r: 24, type:'foreign', color:'#3478CC', shape:'diamond'},
    {id:'nasredine', label:'R. Nasredine', sub:'Health Min', x: 820, y: 540, r: 18, type:'person', color:'#E03E3E', shape:'circle'},
    {id:'haidar', label:'M. Haidar', sub:'Labour Min', x: 660, y: 560, r: 18, type:'person', color:'#E03E3E', shape:'circle'},
    {id:'lf', label:'Samir Geagea', sub:'LF', x: 180, y: 380, r: 24, type:'party', color:'#A78BFA', shape:'circle'},
    {id:'fpm', label:'Gebran Bassil', sub:'FPM', x: 380, y: 480, r: 24, type:'party', color:'#A78BFA', shape:'circle'},
    {id:'psp', label:'W. Jumblatt', sub:'PSP', x: 220, y: 520, r: 22, type:'party', color:'#A78BFA', shape:'circle'},
    {id:'parl', label:'Parliament', sub:'Legislature', x: 420, y: 380, r: 22, type:'inst', color:'#5A6378', shape:'square'},
    {id:'bdl', label:'BdL', sub:'Central Bank', x: 600, y: 200, r: 22, type:'inst', color:'#5A6378', shape:'square'},
  ];

  const edges = [
    {from:'hez', to:'iran', label:'commands', color:'#E03E3E', tier:1, dashed:false, w: 2.5},
    {from:'nasredine', to:'hez', label:'member', color:'#E03E3E', tier:1, w: 1.2},
    {from:'haidar', to:'hez', label:'member', color:'#E03E3E', tier:1, w: 1.2},
    {from:'aoun', to:'usa', label:'backed by', color:'#3478CC', tier:1, dashed:true, w: 1.5},
    {from:'aoun', to:'france', label:'backed by', color:'#3478CC', tier:1, dashed:true, w: 1.5},
    {from:'salam', to:'aoun', label:'reports to', color:'#7E8699', tier:1, w: 1.5},
    {from:'berri', to:'hez', label:'allied', color:'#E89B22', tier:1, w: 1.8},
    {from:'fpm', to:'hez', label:'former alliance', color:'#A78BFA', tier:2, dashed:true, w: 1},
    {from:'parl', to:'berri', label:'led by', color:'#7E8699', tier:1, w: 1.2},
    {from:'salam', to:'parl', label:'confidence', color:'#7E8699', tier:1, dashed:true, w: 1},
    {from:'laf', to:'aoun', label:'cmd chain', color:'#7E8699', tier:1, w: 1.2},
    {from:'lf', to:'salam', label:'supports', color:'#A78BFA', tier:1, dashed:true, w: 1},
    {from:'psp', to:'salam', label:'supports', color:'#A78BFA', tier:1, dashed:true, w: 1},
    {from:'bdl', to:'salam', label:'reports to', color:'#7E8699', tier:2, dashed:true, w: 0.9},
  ];

  const byId = Object.fromEntries(nodes.map(n => [n.id, n]));

  const { open: openDrawer } = useDrawer();
  const hezbollahProfile = {
    mode: 'assessment',
    title: 'Hezbollah — network summary',
    assessment: "Hezbollah operates as the dominant non-state node in Lebanon's power network, maintaining a direct command relationship with Iran's IRGC-Quds Force while holding 2 cabinet portfolios (Health, Labour) and exercising informal veto power over security policy. Connections include named ministers (Nasredine, Haidar), the Speaker of Parliament via Amal alliance, and an attenuated former-alliance link to FPM.",
    sources: [
      { name: 'OFAC sanctions list',         excerpt: 'Hezbollah designated as Specially Designated Global Terrorist (E.O. 13224); Naim Qassem on SDN list since 2018.', updated: 'Apr 2026' },
      { name: 'EU Council sanctions',        excerpt: 'Military wing designated 2013; political-wing designation under continuing review.', updated: '2024' },
      { name: 'UN Security Council',         excerpt: 'Resolution 1701 framework references; not subject to UNSC designation.', updated: '2024' },
      { name: 'Carnegie Middle East',        excerpt: 'Veto position over security policy operationalised through cabinet-portfolio leverage and parliamentary bloc.', updated: '5 d ago' },
      { name: 'International Crisis Group',  excerpt: "Cabinet seats sufficient for one-third veto under Lebanon's confessional power-sharing structure.", updated: '2 w ago' },
      { name: 'Chatham House',               excerpt: 'IRGC-Quds Force command relationship documented across multiple intelligence assessments 2018–2024.', updated: '1 mo ago' },
      { name: 'Reuters Arabic',              excerpt: 'Naim Qassem succeeded Hassan Nasrallah as Secretary General 29 Oct 2024.', updated: '6 mo ago' },
      { name: 'Al-Manar',                    excerpt: 'Editorial line on government cooperation framed within resistance-axis priorities.', updated: '3 d ago' },
    ],
    claims: [
      { text: "Hezbollah maintains a direct command relationship with Iran's IRGC-Quds Force.", support: ['OFAC sanctions list', 'Chatham House', 'Carnegie Middle East', 'EU Council sanctions'] },
      { text: 'Cabinet-portfolio leverage (Health, Labour) is sufficient for one-third veto under the confessional power-sharing structure.', support: ['International Crisis Group', 'Carnegie Middle East'] },
      { text: 'Editorial line in affiliated outlets frames government cooperation within resistance-axis priorities.', support: ['Al-Manar', 'Reuters Arabic'] },
      { text: 'Naim Qassem succeeded Hassan Nasrallah as Secretary General on 29 Oct 2024.', support: ['Reuters Arabic', 'OFAC sanctions list'] },
    ],
  };

  return (
    <AppFrame active="Network" {...nav}>
      <div style={{display:'flex', height:'100%'}}>
        {/* Left filter panel */}
        <div style={{width: 220, background:'var(--surface)', borderRight:'1px solid var(--border)', padding: 14, overflow:'auto', flexShrink:0}}>
          <div className="t-13 fw-5" style={{marginBottom: 12}}>Network filters</div>

          <div className="t-11 tx-3" style={{letterSpacing:'0.08em', marginBottom: 8}}>NODE TYPES</div>
          {[
            {c:'#3478CC', label:'People', on:true},
            {c:'#5A6378', label:'Institutions', on:true},
            {c:'#A78BFA', label:'Political parties', on:true},
            {c:'#E03E3E', label:'Foreign actors', on:true},
            {c:'#E89B22', label:'Business entities', on:false},
          ].map(r => (
            <div key={r.label} style={{display:'flex', alignItems:'center', gap: 8, padding:'4px 0'}}>
              <span className={`checkbox ${r.on ? 'on' : ''}`}/>
              <span style={{width:8, height:8, borderRadius:'50%', background: r.c}}/>
              <span className="t-12">{r.label}</span>
            </div>
          ))}

          <div className="divider"/>

          <div className="t-11 tx-3" style={{letterSpacing:'0.08em', marginBottom: 8}}>RELATIONSHIPS</div>
          {[
            {l:'Commands / has authority', on:true},
            {l:'Funds / is funded by', on:true},
            {l:'Party affiliation', on:true},
            {l:'Foreign contact', on:true},
            {l:'Business relationship', on:false},
            {l:'Family relationship', on:false},
          ].map(r => (
            <div key={r.l} style={{display:'flex', alignItems:'center', gap: 8, padding:'4px 0'}}>
              <span className={`checkbox ${r.on ? 'on' : ''}`}/>
              <span className="t-12">{r.l}</span>
            </div>
          ))}

          <div className="divider"/>

          <div className="t-11 tx-3" style={{letterSpacing:'0.08em', marginBottom: 8}}>CONFIDENCE</div>
          {[
            {l:'All tiers', on:true},
            {l:'Tier 1 only (named)', on:false},
            {l:'Tier 2+ (described)', on:false},
          ].map(r => (
            <div key={r.l} style={{display:'flex', alignItems:'center', gap: 8, padding:'4px 0'}}>
              <span className={`radio ${r.on ? 'on' : ''}`}/>
              <span className="t-12">{r.l}</span>
            </div>
          ))}

          <div className="divider"/>

          <div className="t-11 tx-3" style={{letterSpacing:'0.08em', marginBottom: 8}}>DATE RANGE</div>
          <div style={{display:'flex', flexDirection:'column', gap:6}}>
            <input className="input" defaultValue="01 May 2025" style={{height: 30, fontSize:12}}/>
            <input className="input" defaultValue={todayLabel()} style={{height: 30, fontSize:12}}/>
          </div>

          <div style={{height: 12}}/>
          <button className="btn btn-block" style={{height:32}}>Apply filters</button>
        </div>

        {/* Graph */}
        <div style={{flex:1, position:'relative', background: 'var(--canvas)', overflow:'hidden'}}>
          <svg width="100%" height="100%" viewBox="0 0 1000 660" preserveAspectRatio="xMidYMid meet">
            <defs>
              <pattern id="grid-net" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="1"/>
              </pattern>
              <marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#E03E3E"/>
              </marker>
              <marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#3478CC"/>
              </marker>
              <marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#7E8699"/>
              </marker>
            </defs>
            <rect width="1000" height="660" fill="url(#grid-net)"/>

            {/* Edges */}
            {edges.map((e,i) => {
              const a = byId[e.from], b = byId[e.to];
              if (!a || !b) return null;
              const arr = e.color === '#E03E3E' ? 'arr-red' : e.color === '#3478CC' ? 'arr-blue' : 'arr-gray';
              const dx = b.x - a.x, dy = b.y - a.y;
              const len = Math.sqrt(dx*dx+dy*dy);
              const ux = dx/len, uy = dy/len;
              const x1 = a.x + ux * a.r;
              const y1 = a.y + uy * a.r;
              const x2 = b.x - ux * (b.r + 4);
              const y2 = b.y - uy * (b.r + 4);
              const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
              return (
                <g key={i} opacity={0.85}>
                  <line x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke={e.color} strokeWidth={e.w}
                    strokeDasharray={e.dashed ? '4 3' : null}
                    markerEnd={`url(#${arr})`}/>
                  <text x={mx} y={my - 4} fontSize="9" fill="#7E8699" textAnchor="middle"
                    style={{fontFamily:'var(--mono)', letterSpacing:'0.04em'}}>{e.label}</text>
                </g>
              );
            })}

            {/* Nodes */}
            {nodes.map(n => {
              const sel = n.selected;
              const stroke = sel ? '#1AA882' : '#0A0C10';
              const sw = sel ? 2.5 : 1.5;
              return (
                <g key={n.id}>
                  {sel && <circle cx={n.x} cy={n.y} r={n.r + 6} fill="none" stroke="#1AA882" strokeWidth="1" opacity="0.5"/>}
                  {n.shape === 'circle' && (
                    <circle cx={n.x} cy={n.y} r={n.r} fill={n.color} stroke={stroke} strokeWidth={sw}/>
                  )}
                  {n.shape === 'square' && (
                    <rect x={n.x - n.r} y={n.y - n.r} width={n.r*2} height={n.r*2} fill={n.color} stroke={stroke} strokeWidth={sw}/>
                  )}
                  {n.shape === 'diamond' && (
                    <polygon points={`${n.x},${n.y-n.r} ${n.x+n.r},${n.y} ${n.x},${n.y+n.r} ${n.x-n.r},${n.y}`} fill={n.color} stroke={stroke} strokeWidth={sw}/>
                  )}
                  <text x={n.x} y={n.y + n.r + 14} textAnchor="middle" fontSize="11" fill="#E4E7F0" style={{fontFamily:'var(--font)', fontWeight:500}}>{n.label}</text>
                  <text x={n.x} y={n.y + n.r + 26} textAnchor="middle" fontSize="9" fill="#7E8699" style={{fontFamily:'var(--mono)'}}>{n.sub}</text>
                </g>
              );
            })}
          </svg>

          {/* Legend */}
          <div style={{
            position:'absolute', bottom: 14, left: 14,
            background:'rgba(17,21,32,0.92)', border:'1px solid var(--border)', borderRadius: 6,
            padding: '10px 12px', fontSize: 11
          }}>
            <div className="t-11 tx-3" style={{letterSpacing:'0.08em', marginBottom:6}}>LEGEND</div>
            {[
              {sh:'circle', c:'#3478CC', l:'Person'},
              {sh:'square', c:'#5A6378', l:'Institution'},
              {sh:'circle', c:'#A78BFA', l:'Political party'},
              {sh:'diamond', c:'#E03E3E', l:'Foreign actor'},
            ].map(r => (
              <div key={r.l} style={{display:'flex', alignItems:'center', gap:8, padding:'2px 0'}}>
                <svg width="14" height="14">
                  {r.sh === 'circle' && <circle cx="7" cy="7" r="5" fill={r.c}/>}
                  {r.sh === 'square' && <rect x="2" y="2" width="10" height="10" fill={r.c}/>}
                  {r.sh === 'diamond' && <polygon points="7,1 13,7 7,13 1,7" fill={r.c}/>}
                </svg>
                <span className="tx-2">{r.l}</span>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div style={{position:'absolute', top: 14, right: 14, display:'flex', gap: 6}}>
            <button className="btn btn-ghost" style={{height: 28, padding:'0 10px', fontSize:12}}>Re-layout</button>
            <button className="btn btn-ghost" style={{height: 28, padding:'0 10px', fontSize:12}}>+</button>
            <button className="btn btn-ghost" style={{height: 28, padding:'0 10px', fontSize:12}}>−</button>
          </div>
        </div>

        {/* Right detail */}
        <div style={{width: 280, borderLeft:'1px solid var(--border)', background:'var(--surface)', padding: 16, overflow:'auto', flexShrink:0}}>
          <div className="t-18">Hezbollah</div>
          <div className="t-13 tx-2" style={{fontFamily:'var(--font-ar)', marginTop:2}} dir="rtl">حزب الله</div>
          <div style={{height: 1, background:'var(--border)', margin:'12px 0'}}/>
          <div style={{display:'flex', flexDirection:'column', gap:4, marginBottom:12}}>
            <div style={{display:'flex', justifyContent:'space-between'}}><span className="t-12 tx-2">Type</span><span className="t-12">Political faction</span></div>
            <div style={{display:'flex', justifyContent:'space-between'}}><span className="t-12 tx-2">Community</span><span className="t-12">Shia</span></div>
            <div style={{display:'flex', justifyContent:'space-between'}}><span className="t-12 tx-2">Founded</span><span className="t-12 mono">1982</span></div>
            <div style={{display:'flex', justifyContent:'space-between'}}><span className="t-12 tx-2">Cabinet portfolios</span><span className="t-12 fw-5">2</span></div>
          </div>

          <div className="t-11 tx-3" style={{letterSpacing:'0.08em', marginBottom: 8}}>CONNECTIONS</div>
          <div style={{display:'flex', flexDirection:'column', gap: 10, marginBottom: 14}}>
            <div>
              <div className="t-12" style={{display:'flex', alignItems:'center', gap:6}}><span className="tx-3">→</span> Iran / IRGC</div>
              <div className="t-11 tx-3" style={{paddingLeft: 14, marginTop:2}}>Commands · <TierBadge tier={1} sources={4}/></div>
            </div>
            <div>
              <div className="t-12" style={{display:'flex', alignItems:'center', gap:6}}><span className="tx-3">→</span> Nabih Berri / Amal</div>
              <div className="t-11 tx-3" style={{paddingLeft: 14, marginTop:2}}>Allied · Shia Duo</div>
            </div>
            <div>
              <div className="t-12" style={{display:'flex', alignItems:'center', gap:6}}><span className="tx-3">→</span> R. Nasredine</div>
              <div className="t-11 tx-3" style={{paddingLeft: 14, marginTop:2}}>Member · Health Ministry</div>
            </div>
            <div>
              <div className="t-12" style={{display:'flex', alignItems:'center', gap:6}}><span className="tx-3">→</span> M. Haidar</div>
              <div className="t-11 tx-3" style={{paddingLeft: 14, marginTop:2}}>Member · Labour Ministry</div>
            </div>
          </div>

          <div style={{height: 1, background:'var(--border)', margin:'4px 0 12px'}}/>

          <div className="t-11 tx-3" style={{letterSpacing:'0.08em', marginBottom: 6}}>AI NETWORK SUMMARY</div>
          <div className="t-12 tx-2" style={{lineHeight: 1.6, marginBottom: 10}}>
            "Hezbollah operates as the dominant non-state node in Lebanon's power network, maintaining direct command relationship with Iran's IRGC-Quds Force while holding 2 cabinet portfolios and exercising informal veto power over security policy."
          </div>
          <div style={{display:'flex', alignItems:'center', gap: 8, flexWrap:'wrap'}}>
            <VerifBadge kind="pending"/>
            <span className="t-11 tx-3">Live AI · awaiting analyst review</span>
          </div>
          <div style={{height: 12}}/>
          <button className="btn btn-block btn-ghost" style={{height:32}} onClick={() => openDrawer(hezbollahProfile)}>View full profile →</button>
        </div>
      </div>
    </AppFrame>
  );
};

window.NetworkScreen = NetworkScreen;
