// Screen 4: People tab — Nawaf Salam profile

const PeopleScreen = ({ ...nav }) => (
  <AppFrame active="People" {...nav}>
    <div style={{padding: 16, display:'flex', flexDirection:'column', gap: 12}}>
      {/* Search bar */}
      <div style={{position:'relative'}}>
        <input className="input" style={{height: 44, fontSize:14, paddingLeft: 42}} defaultValue="Nawaf Salam" />
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7E8699" strokeWidth="1.5" style={{position:'absolute', left:14, top:14}}>
          <circle cx="11" cy="11" r="7"/><line x1="16" y1="16" x2="21" y2="21"/>
        </svg>
        <span className="t-11 tx-3" style={{position:'absolute', right:14, top:16, fontFamily:'var(--mono)'}}>1 of 284 profiles</span>
      </div>

      {/* Filter row */}
      <div style={{display:'flex', gap: 8, flexWrap:'wrap', alignItems:'center'}}>
        <span className="t-11 tx-3" style={{letterSpacing:'0.06em'}}>FILTER:</span>
        {['Role type','Institution','Party','Community'].map(p => (
          <div key={p} className="select" style={{height: 28, width:'auto', padding:'0 10px', fontSize:12}}>
            <span className="placeholder">{p}</span>
            <span className="caret" style={{marginLeft:6}}>▾</span>
          </div>
        ))}
        <span style={{display:'inline-flex', alignItems:'center', gap:6, fontSize:12, color:'var(--text-2)', marginLeft:8}}>
          <span className="checkbox"/> Sanctioned only
        </span>
      </div>

      {/* Profile header */}
      <div style={{
        background: 'var(--surface-raised)',
        border: '1px solid var(--border)',
        borderRadius: 8,
        padding: 16,
        display: 'flex',
        gap: 16
      }}>
        <Initials size="lg">NS</Initials>
        <div style={{flex:1}}>
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <div>
              <div className="t-18">Nawaf Abdallah Salam</div>
              <div className="t-12" style={{color:'var(--teal)', marginTop: 2}}>Prime Minister of Lebanon</div>
              <div className="t-12 tx-2" style={{marginTop: 8}}>Sunni · Beirut · Born 15 Dec 1953</div>
              <div className="t-11 tx-3" style={{marginTop: 4}}>Family: Salam political dynasty (uncle: PM × 4, cousin: PM × 1)</div>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:6, alignItems:'flex-end'}}>
              <FreshDot status="live" label="Live"/>
              <span className="t-11 tx-3">Updated 6 min ago</span>
              <div style={{display:'flex', gap:6, marginTop:4}}>
                <span className="affiliation aff-state">VERIFIED PROFILE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-tabs */}
      <div style={{display:'flex', borderBottom:'1px solid var(--border)'}}>
        {['Overview','Career','Network','Record','Foreign Contacts','Sentiment'].map((t,i) => (
          <div key={t} style={{
            padding:'10px 14px', fontSize: 13,
            color: i === 3 ? 'var(--teal)' : 'var(--text-2)',
            borderBottom: i === 3 ? '2px solid var(--teal)' : '2px solid transparent',
            cursor:'pointer', marginBottom: -1
          }}>{t}</div>
        ))}
      </div>

      {/* KPI cards */}
      <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 12}}>
        <div className="kpi" style={{height: 88}}>
          <div className="t-11 tx-2" style={{letterSpacing:'0.06em'}}>CURRENT ROLE</div>
          <div>
            <div className="t-15">Prime Minister</div>
            <div className="t-11 tx-2" style={{marginTop: 3}}>Since Feb 2025</div>
          </div>
        </div>
        <div className="kpi" style={{height: 88}}>
          <div className="t-11 tx-2" style={{letterSpacing:'0.06em'}}>FAMILY DYNASTY</div>
          <div>
            <div className="t-15">2 former PMs</div>
            <div className="t-11 tx-2" style={{marginTop: 3}}>in family</div>
          </div>
        </div>
        <div className="kpi" style={{height: 88}}>
          <div className="t-11 tx-2" style={{letterSpacing:'0.06em'}}>SANCTIONS</div>
          <div>
            <div className="t-15 tx-teal">None</div>
            <div className="t-11 tx-2" style={{marginTop: 3}}>Clean</div>
          </div>
        </div>
        <div className="kpi" style={{height: 88}}>
          <div className="t-11 tx-2" style={{letterSpacing:'0.06em'}}>CONFIDENCE</div>
          <div>
            <div className="t-15">High</div>
            <div className="t-11 tx-2" style={{marginTop: 3}}>Multi-source</div>
          </div>
        </div>
      </div>

      {/* Record sub-tab content */}
      {/* TODO: data-layer — Salam profile, Achievements, Misconduct, Career history all hand-curated. */}
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 12}}>
        {/* Achievements */}
        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">Achievements</div>
            <VerifBadge kind="verified"/>
          </div>
          <div style={{display:'flex', flexDirection:'column', gap: 14}}>
            {[
              {t:'ICJ presidency — first Lebanese and second Arab', src:'UN official record', date:'2024', tag:'Official'},
              {t:'UN Resolution 1701 advocacy — implementation framework during Lebanon\'s SC membership', src:'UN records', date:'2010–2011', tag:'Official'},
              {t:'Academic: authored 6 books on Lebanese constitutional reform', src:'Publication records', date:'2003–2013', tag:'Research'},
            ].map((r,i) => (
              <div key={i} className="left-border-good">
                <div style={{display:'flex', alignItems:'flex-start', gap: 8, marginBottom: 4}}>
                  <span className="tx-teal">✓</span>
                  <span className="t-13" style={{lineHeight:1.5}}>{r.t}</span>
                </div>
                <div className="t-11 tx-3" style={{paddingLeft: 18, fontFamily:'var(--mono)'}}>
                  <span style={{color:'var(--teal-dim)'}}>{r.tag}</span> · {r.src} · {r.date} · Confirmed
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Misconduct / concerns */}
        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">Misconduct &amp; concerns</div>
            <VerifBadge kind="disputed"/>
          </div>
          <div style={{display:'flex', flexDirection:'column', gap: 14}}>
            <div className="left-border-good">
              <div style={{display:'flex', alignItems:'flex-start', gap: 8, marginBottom: 4}}>
                <span className="tx-teal">✓</span>
                <span className="t-13" style={{lineHeight:1.5}}>No corruption records found in public sources</span>
              </div>
              <div className="t-11 tx-3" style={{paddingLeft: 18, fontFamily:'var(--mono)'}}>
                Last checked: {todayLabel()}
              </div>
            </div>
            <div className="left-border-warn">
              <div style={{display:'flex', alignItems:'flex-start', gap: 8, marginBottom: 4}}>
                <span style={{color:'var(--warning)'}}>⚠</span>
                <span className="t-13" style={{lineHeight:1.5}}>Hezbollah opposition: Hezbollah opposed his appointment — political, not legal basis</span>
              </div>
              <div className="t-11 tx-3" style={{paddingLeft: 18, fontFamily:'var(--mono)'}}>
                <span style={{color:'var(--text-3)'}}>Source: Investigative</span> · Reuters, Al Jazeera · Jan 2025 · Documented
              </div>
            </div>
            <div className="left-border-warn">
              <div style={{display:'flex', alignItems:'flex-start', gap: 8, marginBottom: 4}}>
                <span style={{color:'var(--warning)'}}>⚠</span>
                <span className="t-13" style={{lineHeight:1.5}}>Cabinet formation negotiations — concession of 2 portfolios to Hezbollah ally bloc</span>
              </div>
              <div className="t-11 tx-3" style={{paddingLeft: 18, fontFamily:'var(--mono)'}}>
                <span style={{color:'var(--text-3)'}}>Source: Investigative</span> · L'Orient-Le Jour · Feb 2025 · Disputed by reviewer
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Positions list */}
      <div className="panel">
        <div className="panel-header">
          <div className="panel-title">Career history</div>
          <FreshDot status="idle" label="Sourced 24 Apr"/>
        </div>
        <div style={{display:'flex', flexDirection:'column'}}>
          {[
            {role:'Prime Minister of Lebanon', when:'Feb 2025 – present', cur:true},
            {role:'Resigned: ICJ President (upon appointment)', when:'Feb 2025'},
            {role:'ICJ President', when:'Feb 2024 – Feb 2025'},
            {role:'ICJ Judge', when:'Feb 2018 – Feb 2025'},
            {role:'Lebanon\'s UN Ambassador', when:'Jul 2007 – Dec 2017'},
            {role:'Professor, AUB Political Studies', when:'1979 – 2007'},
          ].map(r => (
            <div key={r.role} style={{
              display:'grid', gridTemplateColumns:'1fr 200px',
              padding: '10px 0',
              borderBottom:'1px solid var(--border-subtle)',
              alignItems:'center'
            }}>
              <div className="t-13" style={{color: r.cur ? 'var(--teal)' : 'var(--text-1)'}}>
                {r.cur && <span className="dot live" style={{marginRight: 8}}/>}
                {r.role}
              </div>
              <div className="t-12 tx-2 mono" style={{textAlign:'right'}}>{r.when}</div>
            </div>
          ))}
        </div>
        <div style={{height: 10}}/>
        <EvidenceChain
          title="Nawaf Salam — career & record"
          assessment="Nawaf Salam was appointed PM Feb 2025 after resigning the ICJ presidency, taking office with a confidence vote of 95/128. Cabinet formation negotiations ceded 2 portfolios (Health, Labour) to a Hezbollah-aligned bloc; reform mandate constrained by the Shia Duo's parliamentary leverage. No corruption records identified in public sources as of last review."
        />
      </div>
    </div>
  </AppFrame>
);

window.PeopleScreen = PeopleScreen;
