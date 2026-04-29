// Screen 2: Overview tab

const OverviewScreen = ({ historical = false, dropdownOpen = null, _canvasDrawer = null, ...nav }) => {
  const { open: openDrawer } = useDrawer();

  // TODO: data-layer — stability assessment, claims, three alert source sets, share-of-voice, regional pressure, community pulse all hand-curated.
  const stabilityAssessment = "Lebanon's reform government under PM Nawaf Salam continues to face structural blockage on banking-sector restructuring, with Hezbollah's two cabinet portfolios (Health, Labour) functioning as veto positions on IMF prior actions. Executive–Legislative friction increased after the 16 Apr session adjourned without a quorum on the Capital Controls Law. The financial system remains in deep crisis: BdL's negotiated FX corridor holds at LL 89,500/USD, but no resolution framework for losses on $86B of unrecognised deposits has cleared cabinet.";

  const stabilityClaims = [
    { text: 'Reform government faces structural blockage on banking-sector restructuring; IMF prior actions remain stalled.', support: ['IMF', 'Reuters Arabic', "L'Orient Today", 'Carnegie Middle East'] },
    { text: "Hezbollah's two cabinet portfolios (Health, Labour) function as veto positions on security-related decisions.", support: ['Carnegie Middle East', "L'Orient Today", 'Reuters Arabic'] },
    { text: 'BdL FX corridor holds at LL 89,500/USD but no resolution framework for $86B in unrecognised deposit losses has cleared cabinet.', support: ['BdL public data', 'IMF', 'World Bank', 'An-Nahar'] },
    { text: 'Executive–Legislative friction increased after the 16 Apr session adjourned without a quorum on the Capital Controls Law.', support: ['Reuters Arabic', "L'Orient Today", 'An-Nahar'] },
  ];

  const alertCampaign = {
    mode: 'assessment',
    title: 'Coordinated campaign — Hezbollah',
    assessment: 'Telegram volume on Hezbollah-affiliated channels reached 4.2× the trailing seven-day baseline across 14 monitored channels in the past 6 hours. Posting cadence shows synchronisation patterns consistent with coordinated narrative push, not organic response.',
    sources: [
      { name: 'GDELT',                excerpt: 'Telegram event volume +318% versus 7-day mean across Hezbollah-tagged channels.', updated: '6 min ago' },
      { name: 'Reuters Arabic',       excerpt: 'Synchronised statements appearing across multiple Hezbollah-aligned outlets within a 40-minute window.', updated: '14 min ago' },
      { name: 'Al-Manar',             excerpt: 'Editorial line emphasising regional resistance framing in lead segment.', updated: '22 min ago' },
      { name: 'NBN',                  excerpt: 'Amal-aligned coverage echoing main themes within 1 h, indicating coordinated repost.', updated: '31 min ago' },
      { name: 'BBC Arabic',           excerpt: 'Independent monitoring confirms volume spike but flags possible bot-amplified component.', updated: '47 min ago' },
      { name: 'Carnegie Middle East', excerpt: 'Pattern matches November 2024 coordinated media push around prior security event.', updated: '1 h 28 min ago' },
    ],
    claims: [
      { text: 'Telegram volume across 14 Hezbollah-tagged channels reached +318% over the trailing 7-day baseline.', support: ['GDELT', 'Reuters Arabic', 'BBC Arabic'] },
      { text: 'Posting cadence within a 40-minute window across 3 affiliated outlets indicates coordination, not organic response.', support: ['Reuters Arabic', 'Al-Manar', 'NBN'] },
      { text: 'Pattern matches the November 2024 coordinated push around the prior security event.', support: ['Carnegie Middle East', 'BBC Arabic'] },
    ],
  };

  const alertSentiment = {
    mode: 'assessment',
    title: 'Sentiment shift — Ministry of Finance',
    assessment: "Net public tone toward Ministry of Finance dropped 18 points across Lebanese press in the 4 hours following Yassine Jaber's remarks on bank deposit haircut. The drop is concentrated in independent and Sunni-aligned outlets; Hezbollah-aligned outlets lead attack framing.",
    sources: [
      { name: "L'Orient Today",  excerpt: 'Jaber statement triggers immediate response from depositor associations.', updated: '45 min ago' },
      { name: 'An-Nahar',        excerpt: 'Editorial tone shifts from cautious to critical within first publication cycle.', updated: '1 h ago' },
      { name: 'Reuters Arabic',  excerpt: 'Deposit-haircut signal viewed as confirmation of pre-leaked BdL circular content.', updated: '1 h ago' },
      { name: 'OTV',             excerpt: 'FPM-aligned framing emphasises ministerial overreach.', updated: '2 h ago' },
      { name: 'NBN',             excerpt: 'Amal-aligned coverage critical of Sunni-portfolio handling of depositor question.', updated: '2 h ago' },
      { name: 'BdL public data', excerpt: 'BdL circular under reference (no.13/2026) referenced in coverage but not yet officially published.', updated: '3 h ago' },
    ],
  };

  const alertNetwork = {
    mode: 'assessment',
    title: 'Network signal — Joseph Aoun / Nawaf Salam',
    assessment: 'Joint statement language between the Presidency and Office of the Prime Minister shows tighter alignment on judicial reform than at any point since government formation. Aligned terminology in both Arabic and French versions suggests pre-coordination, not parallel drafting.',
    sources: [
      { name: 'NNA (National News Agency)', excerpt: 'Identical phraseology on judicial-reform timeline in both Presidency and PM-office releases.', updated: '3 h ago' },
      { name: 'Reuters Arabic',             excerpt: 'Statement framing consistent across both Aoun and Salam offices, departure from prior pattern.', updated: '3 h ago' },
      { name: 'BBC Arabic',                 excerpt: 'Coverage notes shared talking points; analysts read as coordinated rollout.', updated: '4 h ago' },
      { name: "L'Orient Today",             excerpt: 'French-language version shows same shift; signals deliberate, not coincidental.', updated: '4 h ago' },
      { name: 'An-Nahar',                   excerpt: 'Editorial commentary emphasises rare alignment between two reformist offices.', updated: '5 h ago' },
    ],
  };

  return (
    <AppFrame active="Overview" historical={historical} _canvasDrawer={_canvasDrawer} {...nav}>
      <div style={{padding: 16, display:'flex', flexDirection:'column', gap: 12}}>

        {/* Row 1 — KPI cards */}
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 12}}>
          <div className="kpi">
            <div className="row">
              <div className="num">31</div>
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <rect x="4" y="3" width="16" height="18" rx="1"/>
                  <line x1="9" y1="8" x2="11" y2="8"/><line x1="13" y1="8" x2="15" y2="8"/>
                  <line x1="9" y1="12" x2="11" y2="12"/><line x1="13" y1="12" x2="15" y2="12"/>
                  <line x1="9" y1="16" x2="11" y2="16"/><line x1="13" y1="16" x2="15" y2="16"/>
                </svg>
              </span>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <div className="label">Institutions tracked · Lebanon</div>
            </div>
          </div>
          <div className="kpi">
            <div className="row">
              <div className="num">284</div>
            </div>
            <div className="label">People profiled · individuals</div>
          </div>
          <div className="kpi">
            <div className="row">
              <div className="num tx-crit">3</div>
              {!historical && <span className="dot crit"/>}
            </div>
            <div className="label">Live alerts · {historical ? 'on 14 Mar 2026' : 'active now'}</div>
          </div>
          <div className="kpi">
            <div className="row">
              <div style={{fontSize:18, fontWeight:500, color: historical ? 'var(--warning)' : 'var(--teal)'}}>
                {historical ? 'Historical' : 'Live'}
              </div>
              {!historical && <span className="dot live"/>}
            </div>
            <div className="t-11 tx-2">
              {historical ? '14 Mar 2026 · 04:18 UTC' : 'Updated 2 min ago'}
            </div>
          </div>
        </div>

        {/* Row 2 — 58/42 split */}
        <div style={{display:'grid', gridTemplateColumns:'58fr 42fr', gap: 12}}>

          {/* Institutional stability panel */}
          <div className="panel">
            <div className="panel-header">
              <div className="panel-title">Institutional stability <InfoTip>{TIPS.stability}</InfoTip></div>
              <FreshDot status={historical ? 'idle' : 'live'} label={historical ? '14 Mar 2026' : 'Updated 2 min ago'}/>
            </div>

            <div style={{display:'flex', flexDirection:'column', gap: 14}}>
              {[
                {name:'Executive', pct: 100, status: 'stable', trend:'flat'},
                {name:'Legislative', pct: 70, status: 'strained', trend:'down'},
                {name:'Security apparatus', pct: 100, status: 'stable', trend:'up'},
                {name:'Financial system', pct: 40, status: 'critical', trend:'down'},
              ].map(r => (
                <div key={r.name} style={{display:'grid', gridTemplateColumns:'160px 1fr 90px 18px', gap: 14, alignItems:'center'}}>
                  <div className="t-13 tx-1">{r.name}</div>
                  <FillBar pct={r.pct} kind={r.status === 'stable' ? 'ok' : r.status === 'strained' ? 'warn' : 'crit'}/>
                  <Pill kind={r.status}>{r.status[0].toUpperCase() + r.status.slice(1)}</Pill>
                  <Trend dir={r.trend}/>
                </div>
              ))}
            </div>

            <div className="divider"/>

            <div style={{display:'flex', alignItems:'center', gap: 10, marginBottom: 8}}>
              <span className="t-11 tx-2" style={{letterSpacing: '0.04em'}}>AI ASSESSMENT · {historical ? '14 MAR 2026' : todayLabel().toUpperCase()} ·</span>
              <VerifBadge kind="pending"/>
            </div>
            <div className="t-12 tx-2" style={{lineHeight: 1.65}}>
              {stabilityAssessment}
            </div>
            <div style={{height: 10}}/>
            <EvidenceChain title="Institutional stability" assessment={stabilityAssessment} claims={stabilityClaims}/>
          </div>

          {/* Live alerts panel */}
          <div className="panel">
            <div className="panel-header">
              <div className="panel-title">{historical ? 'Alerts on 14 March 2026' : 'Live alerts'} <InfoTip>{TIPS.alerts}</InfoTip></div>
              <span className="pill pill-critical" style={{background:'rgba(224,62,62,0.12)'}}>
                {!historical && <span className="dot crit"/>} 3 active
              </span>
            </div>

            <div style={{display:'flex', flexDirection:'column', gap: 8}}>
              <div className="alert crit">
                <div className="title"><span className="dot crit"/> Coordinated campaign — Hezbollah</div>
                <div className="body">Telegram volume 4.2× seven-day baseline across 14 channels.</div>
                <div className="meta">6 min ago · High confidence · <a href="#" onClick={(e) => { e.preventDefault(); openDrawer(alertCampaign); }}>Evidence →</a></div>
              </div>
              <div className="alert warn">
                <div className="title"><span className="dot stale"/> Sentiment shift — Ministry of Finance</div>
                <div className="body">Public tone dropped 18 pts in 4 hours after BdL circular leak.</div>
                <div className="meta">1 hr ago · Medium confidence · <a href="#" onClick={(e) => { e.preventDefault(); openDrawer(alertSentiment); }}>Evidence →</a></div>
              </div>
              <div className="alert info">
                <div className="title"><span className="dot" style={{background:'#3478CC'}}/> Network signal — Joseph Aoun / Nawaf Salam</div>
                <div className="body">Joint statement language: closer alignment on judicial reform.</div>
                <div className="meta">3 hr ago · Low confidence · <a href="#" onClick={(e) => { e.preventDefault(); openDrawer(alertNetwork); }}>Evidence →</a></div>
              </div>
            </div>

            <div className="divider"/>

            {/* On-demand report generator */}
            <div className="t-13 fw-5" style={{marginBottom: 10}}>Generate intelligence report</div>
            <div style={{display:'flex', flexDirection:'column', gap: 8}}>
              <div className="select" style={{position: dropdownOpen === 'subject' ? 'relative' : 'static'}}>
                <span className="placeholder">Select subject…</span>
                <span className="caret">▾</span>
                {dropdownOpen === 'subject' && (
                  <div className="dropdown-menu">
                    <div className="item section-label">SUBJECT TYPE</div>
                    <div className="item">Institution<span className="tx-3">→</span></div>
                    <div className="item">Individual<span className="tx-3">→</span></div>
                    <div className="item">Political party<span className="tx-3">→</span></div>
                    <div className="item">Topic<span className="tx-3">→</span></div>
                    <div className="item">Foreign actor<span className="tx-3">→</span></div>
                    <div className="item">Comparison (2 entities)<span className="tx-3">→</span></div>
                  </div>
                )}
              </div>
              <div className="select"><span>Last 7 days</span><span className="caret">▾</span></div>
              <div className="select" style={{position: dropdownOpen === 'focus' ? 'relative' : 'static'}}>
                <span className="placeholder">Select focus…</span>
                <span className="caret">▾</span>
                {dropdownOpen === 'focus' && (
                  <div className="dropdown-menu">
                    <div className="item">Current state &amp; developments</div>
                    <div className="item">Historical record</div>
                    <div className="item">Network &amp; influence</div>
                    <div className="item">Decision-making</div>
                    <div className="item">Foreign influence</div>
                    <div className="item">Risk &amp; stability</div>
                    <div className="item">Economic-political integration</div>
                  </div>
                )}
              </div>
              <button className="btn btn-block">Generate report →</button>
            </div>
            <div className="t-11 tx-3" style={{marginTop: 8}}>7 of 10 reports remaining · Available now</div>
          </div>
        </div>

        {/* Row 3 — three columns */}
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 12}}>

          {/* Share of voice */}
          <div className="panel">
            <div className="panel-header">
              <div>
                <div className="panel-title">Share of voice — institutions <InfoTip side="up">{TIPS.share}</InfoTip></div>
                <div className="t-11 tx-3" style={{marginTop:2}}>Last 7 days · 12,847 mentions</div>
              </div>
              <FreshDot status="live" label="2 min ago"/>
            </div>
            <div style={{display:'flex', height: 10, borderRadius: 4, overflow:'hidden', marginBottom: 14}}>
              <div style={{width:'24%', background:'#E03E3E'}}/>
              <div style={{width:'18%', background:'#7E8699'}}/>
              <div style={{width:'14%', background:'#5A6378'}}/>
              <div style={{width:'12%', background:'#454D63'}}/>
              <div style={{width:'32%', background:'#283040'}}/>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap: 8}}>
              {[
                {color:'#E03E3E', label:'Hezbollah (party)', pct:'24%'},
                {color:'#7E8699', label:'Presidency', pct:'18%'},
                {color:'#5A6378', label:'Parliament', pct:'14%'},
                {color:'#454D63', label:'Lebanese Armed Forces', pct:'12%'},
                {color:'#283040', label:'All others', pct:'32%'},
              ].map(r => (
                <div key={r.label} style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                  <span style={{display:'flex', alignItems:'center', gap:8}}>
                    <span style={{width:8, height:8, background:r.color, borderRadius:2}}/>
                    <span className="t-13">{r.label}</span>
                  </span>
                  <span className="t-13 fw-5 mono">{r.pct}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Regional pressure */}
          <div className="panel">
            <div className="panel-header">
              <div>
                <div className="panel-title">Regional pressure <InfoTip side="up">{TIPS.goldstein}</InfoTip></div>
                <div className="t-11 tx-3" style={{marginTop:2}}>Goldstein scores · 7-day mean</div>
              </div>
              <FreshDot status="live" label="6 min ago"/>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap: 10}}>
              {[
                {pair:'Lebanon — Israel', score:-7.8, kind:'critical', label:'Critical'},
                {pair:'Lebanon — Iran', score:-5.4, kind:'high', label:'High'},
                {pair:'Lebanon — Syria', score:-3.2, kind:'medium', label:'Medium'},
                {pair:'Lebanon — USA', score:+1.9, kind:'low', label:'Low'},
                {pair:'Syria — Israel', score:-8.4, kind:'critical', label:'Critical'},
              ].map(r => (
                <div key={r.pair} style={{display:'grid', gridTemplateColumns:'1fr 60px 90px', alignItems:'center', gap: 10}}>
                  <div className="t-13 tx-1">{r.pair}</div>
                  <div className="t-12 mono tx-2" style={{textAlign:'right'}}>{r.score > 0 ? '+' : ''}{r.score.toFixed(1)}</div>
                  <Pill kind={r.kind}>{r.label}</Pill>
                </div>
              ))}
            </div>
          </div>

          {/* Community pulse */}
          <div className="panel">
            <div className="panel-header">
              <div>
                <div className="panel-title">Community pulse <InfoTip side="up">{TIPS.community}</InfoTip></div>
                <div className="t-11 tx-3" style={{marginTop:2}}>Net sentiment · 24h</div>
              </div>
              <FreshDot status="live" label="4 min ago"/>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap: 10}}>
              {[
                {name:'Druze', pos:55, neu:25, neg:15, hos:5, score:'+6'},
                {name:'Sunni', pos:40, neu:20, neg:30, hos:10, score:'−4'},
                {name:'Shia', pos:32, neu:18, neg:35, hos:15, score:'−14'},
                {name:'Maronite', pos:54, neu:26, neg:14, hos:6, score:'+5'},
                {name:'Secular/Civil', pos:36, neu:22, neg:30, hos:12, score:'−9'},
                {name:'Armenian', pos:50, neu:28, neg:18, hos:4, score:'+2'},
              ].map(r => {
                const positive = r.score.startsWith('+');
                return (
                  <div key={r.name} style={{display:'grid', gridTemplateColumns:'90px 1fr 36px', alignItems:'center', gap: 10}}>
                    <div className="t-12">{r.name}</div>
                    <SentimentBar pos={r.pos} neu={r.neu} neg={r.neg} hos={r.hos} compact/>
                    <div className="t-13 fw-5 mono" style={{textAlign:'right', color: positive ? 'var(--teal)' : 'var(--neg)'}}>{r.score}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </AppFrame>
  );
};

window.OverviewScreen = OverviewScreen;
