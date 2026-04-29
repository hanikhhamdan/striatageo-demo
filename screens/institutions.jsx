// Screen 3: Institutions tab

const InstitutionsScreen = ({ ...nav }) => (
  <AppFrame active="Institutions" {...nav}>
    <div style={{display:'flex', height:'100%'}}>
      {/* Sidebar */}
      <div className="sidebar" style={{height: '100%'}}>
        <div style={{padding: 12, borderBottom: '1px solid var(--border)'}}>
          <div style={{position:'relative'}}>
            <input className="input" style={{height: 32, fontSize:12, paddingLeft:30}} placeholder="Search institutions…"/>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7E8699" strokeWidth="1.5" style={{position:'absolute', left:10, top:10}}>
              <circle cx="11" cy="11" r="7"/><line x1="16" y1="16" x2="21" y2="21"/>
            </svg>
          </div>
          <div style={{display:'flex', gap:4, marginTop: 10, flexWrap:'wrap'}}>
            {['All','Executive','Legislative','Judicial','Security','Financial'].map((p,i) => (
              <span key={p} className="pill" style={{
                background: i === 0 ? 'rgba(26,168,130,0.12)' : 'var(--surface-raised)',
                color: i === 0 ? 'var(--teal)' : 'var(--text-2)',
                border: '1px solid var(--border)', cursor:'pointer'
              }}>{p}</span>
            ))}
          </div>
        </div>

        {/* TODO: data-layer — sidebar institutions, cabinet pie, party-control rows all hand-curated. */}
        <div className="group-label">EXECUTIVE</div>
        {[
          {name:'Presidency of the Republic', sub:'Joseph Aoun · Maronite', status:'stable', trend:'flat', fresh:'Live'},
          {name:'Council of Ministers', sub:'Nawaf Salam · Sunni', status:'strained', trend:'down', fresh:'Live', active:true},
          {name:'Office of the Prime Minister', sub:'Nawaf Salam', status:'stable', trend:'flat', fresh:'4h ago'},
        ].map(r => <InstRow key={r.name} {...r}/>)}

        <div className="group-label">SECURITY</div>
        {[
          {name:'Lebanese Armed Forces', sub:'Gen. Rodolphe Haykal · Maronite', status:'stable', trend:'up', fresh:'Live'},
          {name:'Internal Security Forces', sub:'Maj.Gen. Raed Abdallah · Sunni', status:'stable', trend:'flat', fresh:'Live'},
          {name:'General Security', sub:'Maj.Gen. Hassan Choucair · Shia', status:'stable', trend:'flat', fresh:'3h ago'},
          {name:'State Security', sub:'Brig.Gen. Edgar Lawandos · Greek Catholic', status:'stable', trend:'flat', fresh:'6h ago'},
        ].map(r => <InstRow key={r.name} {...r}/>)}

        <div className="group-label">JUDICIAL</div>
        {[
          {name:'Higher Judicial Council', sub:'Souheil Abboud · First President, Court of Cassation', status:'strained', trend:'flat', fresh:'12h ago'},
          {name:'Constitutional Council', sub:'10 members · 5 yr terms', status:'stable', trend:'flat', fresh:'2d ago'},
        ].map(r => <InstRow key={r.name} {...r}/>)}

        <div className="group-label">LEGISLATIVE</div>
        {[
          {name:'Parliament', sub:'Nabih Berri · Speaker · Shia', status:'strained', trend:'down', fresh:'Live'},
        ].map(r => <InstRow key={r.name} {...r}/>)}

        <div className="group-label">FINANCIAL</div>
        {[
          {name:'Banque du Liban (BdL)', sub:'Karim Souaid · Governor since Apr 2025', status:'critical', trend:'down', fresh:'8h ago'},
          {name:'Ministry of Finance', sub:'Yassine Jaber · Amal', status:'critical', trend:'flat', fresh:'Live'},
        ].map(r => <InstRow key={r.name} {...r}/>)}
      </div>

      {/* Main panel — Council of Ministers */}
      <div style={{flex:1, padding: 16, display:'flex', flexDirection:'column', gap: 12, overflow:'auto'}}>
        {/* Profile header */}
        <div style={{
          background: 'var(--surface-raised)',
          border: '1px solid var(--border)',
          borderRadius: 8,
          padding: 16,
          display: 'flex',
          gap: 16,
          alignItems:'flex-start'
        }}>
          <div style={{
            width: 56, height: 56,
            background: 'rgba(26,168,130,0.10)',
            border: '1px solid var(--teal-dim)',
            borderRadius: 8,
            display:'flex', alignItems:'center', justifyContent:'center',
            flexShrink:0
          }}>
            <HexLogo size={32}/>
          </div>
          <div style={{flex:1}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
              <div>
                <div className="t-18">Council of Ministers</div>
                <div className="t-13 tx-2" style={{fontFamily:'var(--font-ar)', marginTop: 2}} dir="rtl">مجلس الوزراء</div>
                <div className="t-12 tx-2" style={{marginTop: 6}}>Executive · 24 ministers · Formed Feb 2025</div>
                <div className="t-11 tx-3" style={{marginTop: 4}}>Constitutional basis: Taif Agreement Art. 17</div>
              </div>
              <div style={{display:'flex', flexDirection:'column', gap: 6, alignItems:'flex-end'}}>
                <FreshDot status="live" label="Live"/>
                <span className="t-11 tx-3">Updated 4 min ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* KPI cards */}
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 12}}>
          <div className="kpi" style={{height: 88}}>
            <div className="t-11 tx-2" style={{letterSpacing:'0.06em'}}>PRIME MINISTER</div>
            <div>
              <div className="t-15">Nawaf Salam</div>
              <div className="t-11 tx-2" style={{marginTop: 3}}>Sunni · Reform-oriented</div>
            </div>
          </div>
          <div className="kpi" style={{height: 88}}>
            <div className="t-11 tx-2" style={{letterSpacing:'0.06em'}}>FORMATION</div>
            <div>
              <div className="t-15">Feb 2025</div>
              <div className="t-11 tx-2" style={{marginTop: 3}}>First new govt in 3 years</div>
            </div>
          </div>
          <div className="kpi" style={{height: 88}}>
            <div className="t-11 tx-2" style={{letterSpacing:'0.06em'}}>CONFIDENCE VOTE</div>
            <div>
              <div className="t-15"><span className="tx-teal">95</span> <span className="tx-3">/</span> 128</div>
              <div className="t-11 tx-2" style={{marginTop: 3}}>Won Feb 26, 2025</div>
            </div>
          </div>
        </div>

        {/* Sub-tabs */}
        <div style={{display:'flex', gap:0, borderBottom:'1px solid var(--border)'}}>
          {['Current State','History','Decision-Making','Foreign Influence','Network','Milestones','Performance'].map((t,i) => (
            <div key={t} style={{
              padding:'10px 14px',
              fontSize: 13,
              color: i === 0 ? 'var(--teal)' : 'var(--text-2)',
              borderBottom: i === 0 ? '2px solid var(--teal)' : '2px solid transparent',
              cursor:'pointer',
              marginBottom: -1
            }}>{t}</div>
          ))}
        </div>

        {/* Current state */}
        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">24 ministers — party distribution <InfoTip>{TIPS.cabinet}</InfoTip></div>
            <FreshDot status="live" label="Live"/>
          </div>
          <div style={{display:'flex', height: 14, borderRadius: 4, overflow:'hidden', marginBottom: 12, border:'1px solid var(--border)'}}>
            {[
              {w:'16.7%', c:'#7C3AED', l:'LF 4'},
              {w:'8.3%', c:'#A78BFA', l:'FPM 2'},
              {w:'8.3%', c:'#E03E3E', l:'Hez 2'},
              {w:'8.3%', c:'#9A2222', l:'Amal 2'},
              {w:'4.2%', c:'#3478CC', l:'PSP 1'},
              {w:'4.2%', c:'#5A6378', l:'Kataeb 1'},
              {w:'50.0%', c:'#283040', l:'Indep 12'},
            ].map((s,i) => <div key={i} style={{width: s.w, background: s.c}} title={s.l}/>)}
          </div>
          <div style={{display:'flex', gap: 14, flexWrap:'wrap'}}>
            {[
              {c:'#7C3AED', l:'LF — 4'},
              {c:'#A78BFA', l:'FPM — 2'},
              {c:'#E03E3E', l:'Hezbollah — 2'},
              {c:'#9A2222', l:'Amal — 2'},
              {c:'#3478CC', l:'PSP — 1'},
              {c:'#5A6378', l:'Kataeb — 1'},
              {c:'#283040', l:'Independents — 12'},
            ].map(s => (
              <div key={s.l} style={{display:'flex', alignItems:'center', gap: 6}}>
                <span style={{width:8, height:8, background:s.c, borderRadius:2}}/>
                <span className="t-12 tx-2">{s.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Party control assessment */}
        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">Party control assessment <InfoTip>{TIPS.partyControl}</InfoTip></div>
            <VerifBadge kind="pending"/>
          </div>
          <div style={{display:'flex', flexDirection:'column'}}>
            {[
              {label:'Nominal authority', value:'Nawaf Salam (PM) per constitutional mandate', tier: null},
              {label:'Real decision authority', value:'Coalition negotiated — Hezbollah retains 2 portfolios (Health, Labour), Amal 2 portfolios (Finance, Public Works)', tier: 1, sources: 6},
              {label:'Veto actors', value:'Hezbollah: armed capacity creates implicit veto on security-related decisions', tier: 2, sources: 1},
              {label:'Foreign influence', value:'USA/France: supported Salam appointment. Iran: opposes current government direction.', tier: 1, sources: 4},
            ].map(r => (
              <div key={r.label} style={{
                display:'grid', gridTemplateColumns:'200px 1fr 160px',
                gap: 16, padding: '12px 0',
                borderBottom: '1px solid var(--border-subtle)',
                alignItems:'flex-start'
              }}>
                <div className="t-12 tx-2">{r.label}</div>
                <div className="t-13 tx-1" style={{lineHeight: 1.55}}>{r.value}</div>
                <div style={{display:'flex', justifyContent:'flex-end'}}>
                  {r.tier && <TierBadge tier={r.tier} sources={r.sources}/>}
                </div>
              </div>
            ))}
          </div>
          <div style={{height: 10}}/>
          <EvidenceChain
            title="Council of Ministers — party control"
            assessment="The Council of Ministers under PM Nawaf Salam (Sunni, reform-oriented) operates as a 24-minister coalition cabinet. Real decision authority is constrained by Hezbollah's two portfolios (Health, Labour) functioning as veto positions on security-related decisions, despite nominal PM authority per the constitutional mandate. USA and France supported Salam's appointment; Iran opposes the current government direction."
          />
        </div>
      </div>
    </div>
  </AppFrame>
);

const InstRow = ({ name, sub, status, trend, fresh, active }) => (
  <div className={`row ${active ? 'active' : ''}`}>
    <div className="top">
      <div style={{display:'flex', alignItems:'center', gap: 8, flex:1, minWidth:0}}>
        <HexLogo size={14}/>
        <span className="name" style={{whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{name}</span>
      </div>
      <div style={{display:'flex', alignItems:'center', gap: 6, flexShrink: 0}}>
        <Pill kind={status}>{status[0].toUpperCase() + status.slice(1)}</Pill>
        <Trend dir={trend}/>
      </div>
    </div>
    <div className="sub">
      <span style={{whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{sub}</span>
      <span className="tx-3" style={{flexShrink:0}}>{fresh}</span>
    </div>
  </div>
);

window.InstitutionsScreen = InstitutionsScreen;
