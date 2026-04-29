// Shared StriataGeo components

// Anchor for the static demo. Flip this line to re-anchor the demo's "as of" date.
// TODO: data-layer — replace with a real "as_of" timestamp from the data source.
const DEMO_TODAY = new Date('2026-04-28T09:00:00Z');

const todayLabel = () => {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${String(DEMO_TODAY.getUTCDate()).padStart(2,'0')} ${months[DEMO_TODAY.getUTCMonth()]} ${DEMO_TODAY.getUTCFullYear()}`;
};

// ────────────────────────────────────────────────────────────────────────────
// SOURCE_REGISTRY — Mock source registry for the v4 demo
//
// (a) RELIABILITY (0.00–1.00) is calibrated against historical accuracy of
//     the source's reporting on Levant institutional events 2019–2025 — not
//     an arbitrary editorial weighting. The score is a composite of
//     (i) factual accuracy on later-corroborated stories, (ii) corrections-
//     issued rate, (iii) lead-time vs. consensus, and (iv) source diversity
//     within the outlet's own reporting. Sanctions registries (OFAC, EU, UN,
//     UK OFSI) and IFI publications (IMF, World Bank) carry 1.00 because
//     they are the primary record, not reportage.
//
// (b) AFFILIATION CATEGORIES describe a source's ownership/control posture,
//     not its quality. Affiliated outlets are MONITORED, not excluded —
//     what a faction's media network is saying is itself intelligence.
//       indep   = Independent — no faction or state ownership/control
//       state   = State-affiliated — Lebanese state apparatus
//       actor   = Actor-affiliated — owned/controlled by a domestic faction
//       foreign = Foreign state-affiliated — owned/controlled by a non-LB state
//
// (c) THIS IS MOCK DATA shaped to match the project's source-treatment
//     doctrine (see striatageo_design_brief_v4 §6 Source Methodology). Real
//     production registry lives behind the API; do not rely on these
//     numbers for analysis.
// ────────────────────────────────────────────────────────────────────────────
// TODO: data-layer
const SOURCE_REGISTRY = [
  { name: 'Reuters Arabic',              reliability: 0.92, affiliation: 'indep',   lang: ['AR','EN'], type: 'Outlet' },
  { name: 'BBC Arabic',                  reliability: 0.90, affiliation: 'indep',   lang: ['AR','EN'], type: 'Outlet' },
  { name: "L'Orient Today",              reliability: 0.85, affiliation: 'indep',   lang: ['EN','FR'], type: 'Outlet' },
  { name: 'An-Nahar',                    reliability: 0.80, affiliation: 'indep',   lang: ['AR'],      type: 'Outlet' },
  { name: 'NNA (National News Agency)',  reliability: 0.70, affiliation: 'state',   lang: ['AR'],      type: 'Outlet' },
  { name: 'OTV',                         reliability: 0.62, affiliation: 'actor',   lang: ['AR'],      type: 'Outlet', actor: 'FPM' },
  { name: 'NBN',                         reliability: 0.62, affiliation: 'actor',   lang: ['AR'],      type: 'Outlet', actor: 'Amal' },
  { name: 'Al-Manar',                    reliability: 0.60, affiliation: 'actor',   lang: ['AR'],      type: 'Outlet', actor: 'Hezbollah' },
  { name: 'RT Arabic',                   reliability: 0.45, affiliation: 'foreign', lang: ['AR'],      type: 'Outlet', actor: 'Russia' },
  { name: 'OFAC sanctions list',         reliability: 1.00, affiliation: 'indep',   lang: ['EN'],      type: 'Sanctions' },
  { name: 'EU Council sanctions',        reliability: 1.00, affiliation: 'indep',   lang: ['EN'],      type: 'Sanctions' },
  { name: 'UN Security Council',         reliability: 1.00, affiliation: 'indep',   lang: ['EN'],      type: 'Sanctions' },
  { name: 'UK OFSI sanctions',           reliability: 1.00, affiliation: 'indep',   lang: ['EN'],      type: 'Sanctions' },
  { name: 'Carnegie Middle East',        reliability: 0.88, affiliation: 'indep',   lang: ['EN'],      type: 'Research' },
  { name: 'International Crisis Group',  reliability: 0.87, affiliation: 'indep',   lang: ['EN'],      type: 'Research' },
  { name: 'Chatham House',               reliability: 0.86, affiliation: 'indep',   lang: ['EN'],      type: 'Research' },
  { name: 'IISS',                        reliability: 0.85, affiliation: 'indep',   lang: ['EN'],      type: 'Research' },
  { name: 'WINEP',                       reliability: 0.82, affiliation: 'indep',   lang: ['EN'],      type: 'Research' },
  { name: 'LCPS',                        reliability: 0.78, affiliation: 'indep',   lang: ['EN','AR'], type: 'Research' },
  { name: 'GDELT',                       reliability: 0.80, affiliation: 'indep',   lang: ['EN'],      type: 'Data feed' },
  { name: 'World Bank',                  reliability: 0.92, affiliation: 'indep',   lang: ['EN'],      type: 'Institution' },
  { name: 'IMF',                         reliability: 0.92, affiliation: 'indep',   lang: ['EN'],      type: 'Institution' },
  { name: 'BdL public data',             reliability: 0.85, affiliation: 'state',   lang: ['AR','EN'], type: 'Institution' },
];

const AFFILIATION_LABELS = {
  indep:   'Independent',
  actor:   'Actor-affiliated',
  state:   'State-affiliated',
  foreign: 'Foreign state-affiliated',
};

const AFFILIATION_COLOR = {
  indep:   'var(--teal)',
  state:   'var(--info)',
  actor:   'var(--warning)',
  foreign: 'var(--critical)',
};

// TODO: data-layer
const DEFAULT_ASSESSMENT_SOURCES = [
  { name: 'Reuters Arabic',       excerpt: 'Council of Ministers session adjourned without quorum on the Capital Controls Law.', updated: '2 h ago' },
  { name: "L'Orient Today",       excerpt: 'Banking-sector restructuring stalled as Hezbollah retains veto via Health and Labour portfolios.', updated: '4 h ago' },
  { name: 'An-Nahar',             excerpt: 'BdL FX corridor at LL 89,500/USD held through April; deposit-loss framework not advanced past committee.', updated: '6 h ago' },
  { name: 'IMF',                  excerpt: '8 prior actions of the April 2022 Staff-Level Agreement: 1 completed, 7 pending as of latest review.', updated: '1 d ago' },
  { name: 'World Bank',           excerpt: 'Real GDP partial recovery driven by remittances and tourism against 2018–24 contraction of ~60%.', updated: '3 d ago' },
  { name: 'BdL public data',      excerpt: 'Sayrafa rate published daily; gap to parallel market widened in week ending 24 Apr.', updated: '12 h ago' },
  { name: 'Carnegie Middle East', excerpt: 'Salam government technocratic mandate constrained by coalitional veto on banking-sector losses.', updated: '5 d ago' },
];

// Drawer state lives at AppFrame level via context.
const DrawerContext = React.createContext({ open: () => {}, close: () => {} });
const useDrawer = () => React.useContext(DrawerContext);

const enrichSources = (sources) => sources.map(s => {
  const reg = SOURCE_REGISTRY.find(r => r.name === s.name) || {};
  return { ...reg, ...s };
});

// ────────────────────────────────────────────────────────────────────────────
// InfoTip — small "i" icon with hover/focus popover
//
// Used at panel headers, KPI labels, and status badges to expose definitions
// and methodology without a separate documentation surface. Hover or
// keyboard-focus reveals the popup; click toggles for touch.
//
// `_canvasOpen` — escape hatch for static-canvas captures only (forces the
// popup open). NOT a public deep-link API; same convention as
// AppFrame._canvasDrawer.
// ────────────────────────────────────────────────────────────────────────────
const InfoTip = ({ children, side = 'right', _canvasOpen = false }) => {
  const [hover, setHover] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  const open = hover || focused || _canvasOpen;
  return (
    <span
      className={`itip ${side === 'left' ? 'itip-left' : side === 'up' ? 'itip-up' : ''}`}
      data-open={open ? 'true' : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      role="button"
      tabIndex={0}
      aria-label="More info"
    >
      <span className="itip-i">i</span>
      <span className="itip-popup">{children}</span>
    </span>
  );
};

// Tooltip content registry — keeps copy consistent across screens.
// TODO: data-layer — methodology / glossary copy will move to docs.
const TIPS = {
  stability: <React.Fragment><strong>Stability bar.</strong> Composite of: institutional functioning (40%), elite cohesion (30%), public trust signals (20%), external pressure (10%). Calibrated against historical Lebanon series 1990–2024.</React.Fragment>,
  alerts: <React.Fragment><strong>Live alerts.</strong> Coordinated campaign = Telegram volume ≥ 4× 7-day baseline across ≥10 channels. Sentiment shift = ≥15-pt swing in 4h on institutional accounts. Network signal = co-occurrence pattern between named entities.</React.Fragment>,
  share: <React.Fragment><strong>Share of voice.</strong> Mention count across the 84 monitored sources, weighted by source reliability. Excludes mentions inside boilerplate captions and retweets.</React.Fragment>,
  goldstein: <React.Fragment><strong>Goldstein scores.</strong> Standard event-data scale (−10 to +10) for inter-state cooperation/conflict. −10 = military attack, 0 = neutral statement, +10 = defence treaty. Aggregated from GDELT events over a rolling 7-day window.</React.Fragment>,
  community: <React.Fragment><strong>Community pulse.</strong> Net sentiment (positive% − negative%) computed over Arabic-language sources affiliated with each community over the last 24 hours.</React.Fragment>,
  reform: <React.Fragment><strong>Reform tracker.</strong> Eight prior actions agreed in the IMF Staff-Level Agreement of April 2022. "Pending" = not advanced past committee. "Partial" = passed in part of the legislative track.</React.Fragment>,
  verification: <React.Fragment><strong>Verification states.</strong> Pending review = AI-generated, not yet validated by analyst. Verified = corroborated against ≥2 independent sources by a StriataGeo analyst. Disputed = credible contradicting evidence on the public record.</React.Fragment>,
  tier: <React.Fragment><strong>Confidence tiers.</strong> Named = at least one source identifies the actor by name. Described = sources describe the actor's role without naming. Signal = inferred from indirect indicators only.</React.Fragment>,
  cabinet: <React.Fragment><strong>Cabinet composition.</strong> Allocation of ministers by political affiliation across the 24-seat Council of Ministers. Sectarian distribution governed by 1990 Taif amendment; party allocation reflects coalition negotiation.</React.Fragment>,
  politicalFactors: <React.Fragment><strong>Political-economic linkage.</strong> Each macro indicator paired with the political cause and the actor responsible. Status reflects whether the underlying decision is open, blocked, or resolved.</React.Fragment>,
  partyControl: <React.Fragment><strong>Nominal vs. real authority.</strong> Differentiates constitutional/legal authority from observed decision-making power. Foreign-influence rows carry a confidence tier badge.</React.Fragment>,
  evidenceChain: <React.Fragment><strong>Evidence chain.</strong> Every assessment links back to its raw source items, the processed analysis layer, and the synthesised conclusion — with one click. Affiliated outlets are monitored, not excluded.</React.Fragment>,
};

const HexLogo = ({ size = 20, color = '#1AA882' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1" strokeLinejoin="round">
    <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" fill="none"/>
    <polygon points="12,5 18.5,8.5 18.5,15.5 12,19 5.5,15.5 5.5,8.5" fill="none" opacity="0.7"/>
    <polygon points="12,8 16,10.25 16,13.75 12,16 8,13.75 8,10.25" fill="none" opacity="0.5"/>
    <circle cx="12" cy="12" r="0.9" fill={color} stroke="none"/>
    <line x1="12" y1="12" x2="12" y2="2"/>
    <line x1="12" y1="12" x2="21" y2="7"/>
    <line x1="12" y1="12" x2="21" y2="17"/>
    <line x1="12" y1="12" x2="12" y2="22"/>
    <line x1="12" y1="12" x2="3" y2="17"/>
    <line x1="12" y1="12" x2="3" y2="7"/>
  </svg>
);

const TopBar = ({ historical = false, dateLabel = todayLabel(), userInitials = 'M.R.', onUserClick, onLogout, onToggleHistorical }) => (
  <div className={`topbar ${historical ? 'historical' : ''}`}>
    <div className="brand">
      <HexLogo size={20} />
      <span>StriataGeo</span>
    </div>
    <div className="divider-v"/>
    <div className="country-pill">
      <span style={{width:6,height:6,borderRadius:'50%',background:'#1AA882',display:'inline-block'}}/>
      Lebanon
      <span className="caret">▾</span>
    </div>
    <div className="date-pill" style={historical ? {color:'#E89B22', borderColor:'rgba(232,155,34,0.4)'} : {}}>
      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="2" y="3" width="12" height="11" rx="1"/>
        <line x1="2" y1="6" x2="14" y2="6"/>
        <line x1="6" y1="1.5" x2="6" y2="4.5"/>
        <line x1="10" y1="1.5" x2="10" y2="4.5"/>
      </svg>
      {dateLabel}
      <span className="caret">▾</span>
    </div>
    {historical && (
      <div style={{display:'flex', alignItems:'center', gap:8, marginLeft:4}}>
        <span className="t-12" style={{color:'var(--warning)'}}>Historical view — 14 Mar 2026</span>
        <a onClick={onToggleHistorical} style={{color:'var(--warning)', fontSize:12, textDecoration:'none', cursor:'pointer'}}>Return to live →</a>
      </div>
    )}
    <div style={{flex: 1}}/>
    {!historical && (
      <button onClick={onToggleHistorical} className="btn btn-ghost" style={{height:26, fontSize:11, padding:'0 10px'}}>
        ⏱ Historical
      </button>
    )}
    <div className="lang-pill">
      <span className="on">EN</span>
      <span>AR</span>
    </div>
    <div className="user-circle" onClick={onUserClick} title="Account">{userInitials}</div>
    {onLogout && (
      <button onClick={onLogout} className="btn btn-ghost" style={{height:26, fontSize:11, padding:'0 10px'}} title="Sign out">
        ⏻
      </button>
    )}
  </div>
);

const TabNav = ({ active = 'Overview', onSelect }) => {
  const tabs = ['Overview','Institutions','People','Network','Economics','Parties','Communities','Regional','Reports','Sources'];
  return (
    <div className="tabs">
      {tabs.map(t => (
        <div key={t} className={`tab ${active === t ? 'active' : ''}`} onClick={() => onSelect && onSelect(t)}>{t}</div>
      ))}
    </div>
  );
};

const HistoricalBanner = ({ date = '14 March 2026', onReturn }) => (
  <div className="hist-banner">
    <span className="ico">⏱</span>
    <span style={{fontWeight:500}}>Viewing historical data — {date}</span>
    <span className="meta">·  All data reflects this date</span>
    <a onClick={onReturn} style={{cursor:'pointer'}}>Return to live →</a>
  </div>
);

const FreshDot = ({ status = 'live', label }) => {
  const text = label || (status === 'live' ? 'Live' : status === 'stale' ? '26h ago — stale' : '3h ago');
  const cls = status === 'live' ? 'live' : status === 'stale' ? 'stale' : 'idle';
  return (
    <span className="fresh">
      <span className={`dot ${cls}`}/>
      <span>{text}</span>
    </span>
  );
};

const Pill = ({ kind, children }) => <span className={`pill pill-${kind}`}>{children}</span>;

const VerifBadge = ({ kind = 'pending', tip = true }) => {
  const config =
    kind === 'verified' ? { cls: 'v-verified', label: '✓ Verified' } :
    kind === 'disputed' ? { cls: 'v-disputed', label: '⚠ Disputed' } :
    { cls: 'v-pending', label: '⏳ Pending review' };
  return (
    <React.Fragment>
      <span className={`badge-verif ${config.cls}`}>{config.label}</span>
      {tip && <InfoTip>{TIPS.verification}</InfoTip>}
    </React.Fragment>
  );
};

const TierBadge = ({ tier = 1, sources = 4, tip = true }) => {
  let content;
  if (tier === 1) content = <span className="tier"><span className="dot" style={{background:'#1AA882'}}/>Named · {sources} sources</span>;
  else if (tier === 2) content = <span className="tier"><span className="dot" style={{background:'#E89B22'}}/>Described · {sources} source{sources>1?'s':''}</span>;
  else content = <span className="tier"><span className="dot" style={{background:'#7E8699'}}/>Signal only</span>;
  return (
    <React.Fragment>
      {content}
      {tip && <InfoTip side="left">{TIPS.tier}</InfoTip>}
    </React.Fragment>
  );
};

const Initials = ({ children, size }) => (
  <div className={`initials ${size === 'lg' ? 'lg' : size === 'sm' ? 'sm' : ''}`}>{children}</div>
);

const Trend = ({ dir = 'flat' }) => {
  const c = dir === 'up' ? '#1AA882' : dir === 'down' ? '#E03E3E' : '#7E8699';
  const ch = dir === 'up' ? '↑' : dir === 'down' ? '↓' : '↔';
  return <span style={{color:c, fontSize:13}}>{ch}</span>;
};

const SentimentBar = ({ pos, neu, neg, hos = 0, compact }) => (
  <div className={`sbar ${compact ? 'compact' : ''}`}>
    <span className="pos" style={{width: `${pos}%`}}/>
    <span className="neu" style={{width: `${neu}%`}}/>
    <span className="neg" style={{width: `${neg}%`}}/>
    {hos > 0 && <span className="hos" style={{width: `${hos}%`}}/>}
  </div>
);

const FillBar = ({ pct, kind = 'ok' }) => (
  <div className="fill-bar"><span className={kind} style={{width:`${pct}%`}}/></div>
);

const EvidenceChain = ({ assessment, sources = DEFAULT_ASSESSMENT_SOURCES, title = 'AI assessment', total, claims }) => {
  const { open } = useDrawer();
  const count = total != null ? total : sources.length;
  const fire = (mode) => (e) => { e.preventDefault(); open({ mode, title, assessment, sources, claims }); };
  return (
    <div className="evidence-chain">
      Evidence: [<a href="#" onClick={fire('raw')}>Raw sources ({count})</a>] <span className="arrow">→</span> [<a href="#" onClick={fire('processed')}>Processed analysis</a>] <span className="arrow">→</span> [<a href="#" onClick={fire('assessment')}>This assessment</a>]
      <InfoTip>{TIPS.evidenceChain}</InfoTip>
    </div>
  );
};

// One source row for the Assessment "Top citations" list and reused elsewhere.
const SourceRow = ({ src }) => {
  const aff = AFFILIATION_LABELS[src.affiliation] || src.affiliation || '—';
  const affCls = `src-tag src-${src.affiliation || 'indep'}`;
  return (
    <div className="src-row">
      <div className="src-name">
        {src.name}
        {src.actor && <span className="t-11 tx-3 mono" style={{marginLeft: 6}}>· {src.actor}</span>}
      </div>
      <div className="src-score mono">{(src.reliability ?? 0).toFixed(2)}</div>
      <div className="src-meta">
        <span className={affCls}>{aff}</span>
        {(src.lang || []).map(l => <span key={l} className="lang-tag">{l}</span>)}
        <span className="rel-bar"><span style={{width: `${(src.reliability || 0) * 100}%`}}/></span>
      </div>
      {src.excerpt && <div className="src-excerpt">"{src.excerpt}"</div>}
      {src.updated && <div className="src-updated">Updated {src.updated}</div>}
    </div>
  );
};

// ─── Drawer body — Raw mode ─────────────────────────────────────────────────
// What the algorithm saw. Source list ordered by capture time (call-site order
// is treated as chronological), full excerpts, capture timestamps.
const DrawerRawView = ({ sources }) => (
  <React.Fragment>
    <div className="drawer-section-label">Raw monitored items · {sources.length} captured</div>
    <div className="src-list">
      {sources.map(s => (
        <div key={s.name} className="src-row src-row-raw">
          <div className="src-name">
            {s.name}{s.actor && <span className="t-11 tx-3 mono" style={{marginLeft: 6}}>· {s.actor}</span>}
          </div>
          <div className="src-score mono">{(s.reliability ?? 0).toFixed(2)}</div>
          <div className="src-meta">
            <span className={`src-tag src-${s.affiliation || 'indep'}`}>{AFFILIATION_LABELS[s.affiliation] || '—'}</span>
            {(s.lang || []).map(l => <span key={l} className="lang-tag">{l}</span>)}
          </div>
          {s.excerpt && <div className="src-excerpt">"{s.excerpt}"</div>}
          <div className="src-row-foot">
            <span className="src-updated">Captured {s.updated || '—'}</span>
            <span className="rel-bar" style={{width: 80}}><span style={{width: `${(s.reliability || 0) * 100}%`}}/></span>
          </div>
        </div>
      ))}
    </div>
  </React.Fragment>
);

// ─── Drawer body — Processed mode ──────────────────────────────────────────
// How the raw signals were structured: cross-source convergence panel + a
// list of extracted claims with their supporting source clusters.
const DrawerProcessedView = ({ assessment, sources, claims }) => {
  const counts = sources.reduce((acc, s) => { acc[s.affiliation] = (acc[s.affiliation] || 0) + 1; return acc; }, {});
  const total = sources.length || 1;
  const avg = sources.reduce((a, s) => a + (s.reliability || 0), 0) / total;
  const order = ['indep', 'state', 'actor', 'foreign'];

  const presentClaims = (claims && claims.length) ? claims : [{
    text: assessment ? assessment.split('. ')[0].replace(/\.$/, '') + '.' : 'Synthesised assessment from monitored sources.',
    support: sources.map(s => s.name),
  }];

  return (
    <React.Fragment>
      <div>
        <div className="drawer-section-label">Cross-source convergence</div>
        <div className="convergence-panel">
          <div className="conv-row">
            <span className="t-11 tx-2">Reliability-weighted average</span>
            <span className="mono t-13 fw-5 tx-1">{avg.toFixed(2)}</span>
          </div>
          <div className="conv-row">
            <span className="t-11 tx-2">Affiliation mix · {sources.length} sources</span>
          </div>
          <div className="conv-bar">
            {order.map(k => counts[k] ? (
              <span key={k} className="conv-seg" style={{background: AFFILIATION_COLOR[k], width: `${(counts[k] / sources.length) * 100}%`}}/>
            ) : null)}
          </div>
          <div className="conv-legend">
            {order.map(k => counts[k] ? (
              <span key={k} className="conv-leg-item">
                <span className="conv-leg-dot" style={{background: AFFILIATION_COLOR[k]}}/>
                <span className="t-11 tx-2">{AFFILIATION_LABELS[k]} · {counts[k]}</span>
              </span>
            ) : null)}
          </div>
        </div>
      </div>
      <div>
        <div className="drawer-section-label">Extracted claims · {presentClaims.length}</div>
        <div className="claim-list">
          {presentClaims.map((c, i) => {
            const supportSrcs = (c.support || []).map(name => sources.find(s => s.name === name)).filter(Boolean);
            return (
              <div key={i} className="claim-card">
                <div className="claim-text">{c.text}</div>
                <div className="claim-foot">
                  <span className="t-11 tx-3">Support · {supportSrcs.length} source{supportSrcs.length === 1 ? '' : 's'}</span>
                  <div className="claim-chips">
                    {supportSrcs.slice(0, 8).map(s => (
                      <span key={s.name} className={`claim-chip src-${s.affiliation || 'indep'}`}>{s.name}</span>
                    ))}
                    {supportSrcs.length > 8 && <span className="claim-chip claim-chip-more">+{supportSrcs.length - 8}</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

// ─── Drawer body — Assessment mode ──────────────────────────────────────────
// The final synthesised conclusion — assessment paragraph + verification +
// top-3 citations + cross-links to the upstream layers.
const DrawerAssessmentView = ({ assessment, sources, onSwitchMode }) => {
  const top3 = [...sources].sort((a, b) => (b.reliability || 0) - (a.reliability || 0)).slice(0, 3);
  return (
    <React.Fragment>
      <div>
        <div className="drawer-section-label">Final assessment</div>
        <div className="assessment-card">
          <div><VerifBadge kind="pending"/></div>
          <div className="assessment-body">{assessment || 'No synthesised assessment for this source set.'}</div>
        </div>
      </div>
      <div>
        <div className="drawer-section-label">Top citations · {top3.length}</div>
        <div className="src-list">
          {top3.map(s => <SourceRow key={s.name} src={s}/>)}
        </div>
      </div>
      <div className="drawer-cross-links">
        <button className="see-all-btn" onClick={() => onSwitchMode('processed')}>How this was processed →</button>
        <button className="see-all-btn" onClick={() => onSwitchMode('raw')}>See raw sources →</button>
      </div>
    </React.Fragment>
  );
};

const EvidenceDrawer = ({ mode: initialMode = 'assessment', title, assessment, sources = [], claims, onClose }) => {
  const [mode, setMode] = React.useState(initialMode);
  const enriched = enrichSources(sources);
  const modeLabel = { raw: 'Raw sources', processed: 'Processed analysis', assessment: 'This assessment' }[mode];
  const modeTabs = [
    { k: 'raw',        l: 'Raw' },
    { k: 'processed',  l: 'Processed' },
    { k: 'assessment', l: 'Assessment' },
  ];
  return (
    <React.Fragment>
      <div className="drawer-backdrop" onClick={onClose}/>
      <div className="drawer" role="dialog" aria-label={modeLabel}>
        <div className="drawer-head">
          <div style={{minWidth: 0, flex: 1}}>
            <div className="mode">{modeLabel}</div>
            {title && <div className="title">{title}</div>}
          </div>
          <button className="drawer-close" onClick={onClose} aria-label="Close">×</button>
        </div>
        <div className="drawer-modes">
          {modeTabs.map(m => (
            <button
              key={m.k}
              className={`drawer-mode-tab ${mode === m.k ? 'on' : ''}`}
              onClick={() => setMode(m.k)}
            >{m.l}</button>
          ))}
        </div>
        <div className="drawer-body">
          {mode === 'raw'        && <DrawerRawView sources={enriched}/>}
          {mode === 'processed'  && <DrawerProcessedView assessment={assessment} sources={enriched} claims={claims}/>}
          {mode === 'assessment' && <DrawerAssessmentView assessment={assessment} sources={enriched} onSwitchMode={setMode}/>}
        </div>
      </div>
    </React.Fragment>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// _canvasDrawer — Canvas-capture escape hatch (NOT a public API)
//
// Initialises this AppFrame's drawer state to the given config so a static
// DCArtboard can render with the EvidenceDrawer pre-opened, for screenshot
// purposes only. Used by `All Screens (Canvas).html` to capture the
// drawer-open state without simulating clicks at render time.
//
// Why a separate prop instead of a useEffect that watches an external state:
//   - Kept as initial-state-only — there is no `useEffect` watching this
//     prop. If a future caller mutates _canvasDrawer at runtime, nothing
//     happens. By design. This is NOT a deep-link mechanism.
//   - The underscore prefix marks it as a non-public affordance. Anything
//     consuming this in normal interaction code is misusing it; the public
//     drawer API is `useDrawer().open(config)`.
//
// When to remove: if the design canvas grows a built-in capture mode (e.g.
// click-then-snapshot), this prop can be deleted without affecting any
// production interaction path. No screen depends on it for behaviour.
// ────────────────────────────────────────────────────────────────────────────
const AppFrame = ({ children, width, height, active = 'Overview', historical = false, hideChrome = false, dateLabel = todayLabel(), onTab, onUserClick, onLogout, onToggleHistorical, _canvasDrawer = null }) => {
  const [drawer, setDrawer] = React.useState(_canvasDrawer);
  const drawerApi = React.useMemo(() => ({
    open: (config) => setDrawer(config),
    close: () => setDrawer(null),
  }), []);
  const baseStyle = {display:'flex', flexDirection:'column', overflow:'hidden', background:'#0A0C10', position:'relative'};
  const style = (width && height) ? {width, height, ...baseStyle} : {width:'100%', height:'100%', ...baseStyle};
  return (
    <DrawerContext.Provider value={drawerApi}>
      <div className="sg" style={style}>
        {!hideChrome && <TopBar historical={historical} dateLabel={historical ? '14 Mar 2026' : dateLabel} onUserClick={onUserClick} onLogout={onLogout} onToggleHistorical={onToggleHistorical}/>}
        {historical && <HistoricalBanner onReturn={onToggleHistorical}/>}
        {!hideChrome && <TabNav active={active} onSelect={onTab}/>}
        <div style={{flex:1, overflow:'auto', background:'#0A0C10'}}>
          {children}
        </div>
        {drawer && <EvidenceDrawer {...drawer} onClose={drawerApi.close}/>}
      </div>
    </DrawerContext.Provider>
  );
};

Object.assign(window, {
  HexLogo, TopBar, TabNav, HistoricalBanner, FreshDot, Pill, VerifBadge,
  TierBadge, Initials, Trend, SentimentBar, FillBar, EvidenceChain, AppFrame,
  EvidenceDrawer, SourceRow, SOURCE_REGISTRY, AFFILIATION_LABELS, AFFILIATION_COLOR,
  DrawerContext, useDrawer, todayLabel, InfoTip, TIPS
});
