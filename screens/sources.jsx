// Screen 10: Sources & Methodology

const SourcesScreen = ({ ...nav }) => {
  const [search, setSearch] = React.useState('');
  const [filter, setFilter] = React.useState('all');

  const filtered = SOURCE_REGISTRY.filter(s => {
    if (filter !== 'all' && s.affiliation !== filter) return false;
    if (search && !s.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const legendCards = [
    { key: 'indep',   range: '0.80 – 1.00', desc: 'No faction or state ownership/control. Includes IFI/sanctions registries, IFI publications, and accountable independent press.' },
    { key: 'state',   range: '0.65 – 0.75', desc: 'Lebanese state apparatus. Lower for editorial line; higher for primary data publication (BdL, statistical agencies).' },
    { key: 'actor',   range: '0.55 – 0.65', desc: 'Owned or controlled by a domestic political faction. Inherent bias on coverage of own faction.' },
    { key: 'foreign', range: '0.40 – 0.50', desc: 'Owned or controlled by a non-Lebanese state. Highest skepticism for political coverage.' },
  ];

  const rubric = [
    { k: 'Factual accuracy', v: 'Share of stories later corroborated by independent sources or primary records.' },
    { k: 'Corrections rate', v: 'Frequency of issued corrections, retractions, or stealth-edits within 30 days of publication.' },
    { k: 'Lead vs. consensus', v: "Time between this source's coverage and consensus reporting on the same event." },
    { k: 'Internal diversity', v: "Range of viewpoints surfaced within the outlet's own reporting on the same topic." },
  ];

  const filterPills = [
    { k: 'all',     l: 'All' },
    { k: 'indep',   l: 'Independent' },
    { k: 'state',   l: 'State-affiliated' },
    { k: 'actor',   l: 'Actor-affiliated' },
    { k: 'foreign', l: 'Foreign state-affiliated' },
  ];

  return (
    <AppFrame active="Sources" {...nav}>
      <div style={{padding: 20, display:'flex', flexDirection:'column', gap: 16, maxWidth: 1240, margin:'0 auto'}}>

        {/* Header */}
        <div>
          <div className="t-18">Sources & Methodology</div>
          <div className="t-12 tx-2" style={{marginTop: 4, lineHeight: 1.5}}>
            All assessments on this platform are evidence-chained to this registry. Affiliated outlets are monitored, not excluded — what a faction's media network is saying is itself intelligence.
          </div>
        </div>

        {/* Affiliation legend — 4 cards */}
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 12}}>
          {legendCards.map(c => (
            <div key={c.key} className="panel" style={{padding: 14}}>
              <div style={{marginBottom: 10}}>
                <span className={`src-tag src-${c.key}`}>{AFFILIATION_LABELS[c.key]}</span>
              </div>
              <div className="t-12 tx-2" style={{lineHeight: 1.55, marginBottom: 10, minHeight: 66}}>{c.desc}</div>
              <div className="t-11 tx-3 mono" style={{letterSpacing:'0.04em'}}>Reliability range · {c.range}</div>
            </div>
          ))}
        </div>

        {/* Reliability rubric */}
        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">Reliability scoring rubric</div>
            <span className="t-11 tx-3 mono" style={{marginLeft: 'auto'}}>0.00 – 1.00</span>
          </div>
          <div className="t-12 tx-2" style={{lineHeight: 1.6, marginBottom: 12}}>
            Reliability is calibrated against historical accuracy on Levant institutional events 2019–2025 — not editorial weighting. The score is a composite of four components, recomputed monthly.
          </div>
          <div style={{display:'grid', gridTemplateColumns:'200px 1fr', rowGap: 10, columnGap: 16}}>
            {rubric.map(r => (
              <React.Fragment key={r.k}>
                <div className="t-12 tx-1 fw-5">{r.k}</div>
                <div className="t-12 tx-2" style={{lineHeight: 1.5}}>{r.v}</div>
              </React.Fragment>
            ))}
          </div>
          <div className="t-11 tx-3" style={{marginTop: 14, lineHeight: 1.6}}>
            Sanctions registries (OFAC, EU, UN, UK OFSI) and IFI publications (IMF, World Bank) carry 1.00 because they are the primary record, not reportage. They do not undergo recalibration.
          </div>
        </div>

        {/* Source registry table */}
        <div className="panel" style={{padding: 0}}>
          <div style={{padding: '14px 16px', borderBottom:'1px solid var(--border)', display:'flex', alignItems:'center', gap: 12, flexWrap:'wrap'}}>
            <div>
              <div className="panel-title">Source registry</div>
              <div className="t-11 tx-3" style={{marginTop:2}}>{SOURCE_REGISTRY.length} sources monitored · last refresh varies per source</div>
            </div>
            <div style={{flex: 1}}/>
            <div style={{position: 'relative', width: 240}}>
              <input
                className="input"
                placeholder="Search sources…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{height: 32, fontSize: 12, paddingLeft: 30}}
              />
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7E8699" strokeWidth="1.5" style={{position:'absolute', left:10, top:9}}>
                <circle cx="11" cy="11" r="7"/><line x1="16" y1="16" x2="21" y2="21"/>
              </svg>
            </div>
          </div>
          <div style={{padding: '10px 16px', display:'flex', gap: 8, flexWrap:'wrap', borderBottom:'1px solid var(--border-subtle)'}}>
            {filterPills.map(p => (
              <span
                key={p.k}
                className={`sources-filter-pill ${filter === p.k ? 'on' : ''}`}
                onClick={() => setFilter(p.k)}
              >{p.l}</span>
            ))}
            <div style={{flex: 1}}/>
            <span className="t-11 tx-3 mono" style={{alignSelf: 'center'}}>Showing {filtered.length} of {SOURCE_REGISTRY.length}</span>
          </div>
          <table className="sources-table">
            <thead>
              <tr>
                <th>Source</th>
                <th>Type</th>
                <th>Lang</th>
                <th>Reliability</th>
                <th>Affiliation</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(s => (
                <tr key={s.name}>
                  <td>
                    <div className="t-13 tx-1 fw-5">{s.name}</div>
                    {s.actor && <div className="t-11 tx-3 mono" style={{marginTop: 2}}>· {s.actor}-aligned</div>}
                  </td>
                  <td className="t-12 tx-2">{s.type}</td>
                  <td>{(s.lang || []).map(l => <span key={l} className="lang-tag" style={{marginRight: 4}}>{l}</span>)}</td>
                  <td>
                    <div style={{display:'flex', alignItems:'center', gap:8}}>
                      <span className="mono t-12 tx-1" style={{minWidth: 44, flexShrink: 0, paddingLeft: 2, paddingRight: 2, textAlign: 'right'}}>{(s.reliability ?? 0).toFixed(2)}</span>
                      <span className="rel-bar" style={{width: 100, flexShrink: 0, display: 'inline-block'}}>
                        <span style={{display: 'block', width: `${(s.reliability ?? 0) * 100}%`, height: '100%', background: 'var(--teal)'}}/>
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={`src-tag src-${s.affiliation}`}>{AFFILIATION_LABELS[s.affiliation]}</span>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan="5" className="t-12 tx-3" style={{textAlign:'center', padding: 24}}>
                    No sources match the current filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </AppFrame>
  );
};

window.SourcesScreen = SourcesScreen;
