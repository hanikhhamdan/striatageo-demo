// Screen 8: Reports tab

const ReportsScreen = ({ state = 'generated', ...nav }) => (
  <AppFrame active="Reports" {...nav}>
    <div style={{padding: 16, display:'flex', flexDirection:'column', gap: 12}}>
      {/* Generator section */}
      <div style={{
        background:'var(--surface-raised)',
        border:'1px solid var(--border)',
        borderRadius: 8,
        padding: 16
      }}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 16}}>
          <div className="t-15">Generate Intelligence Report</div>
          <div className="t-12 tx-2">7 of 10 remaining · Available now</div>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'120px 1fr', rowGap: 10, columnGap: 14, alignItems:'center'}}>
          <div className="t-12 tx-2">Subject</div>
          <div className="select">
            <span>Council of Ministers</span>
            <span className="caret">▾</span>
          </div>
          <div className="t-12 tx-2">Period</div>
          <div className="select">
            <span>Last 14 days</span>
            <span className="caret">▾</span>
          </div>
          <div className="t-12 tx-2">Focus</div>
          <div className="select">
            <span>Decision-making analysis</span>
            <span className="caret">▾</span>
          </div>
        </div>
        <div style={{display:'flex', justifyContent:'flex-end', marginTop: 16}}>
          {state === 'loading' ? (
            <div style={{
              flex:1, height: 36, background:'var(--surface)', border:'1px solid var(--teal)',
              borderRadius: 4, position:'relative', overflow:'hidden',
              display:'flex', alignItems:'center', padding:'0 14px'
            }}>
              <div style={{position:'absolute', left:0, top:0, bottom:0, width:'62%', background:'rgba(26,168,130,0.18)'}}/>
              <span className="t-12 tx-1" style={{position:'relative'}}>Analyzing 3,847 data points from 31 sources… <span className="tx-3">est. 18s</span></span>
            </div>
          ) : (
            <button className="btn" style={{minWidth: 220}}>Generate full report →</button>
          )}
        </div>
      </div>

      {/* Generated report */}
      {state === 'generated' && (
        <div className="panel" style={{padding: 0}}>
          <div style={{padding: 16, borderBottom: '1px solid var(--border)'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
              <div>
                <div className="t-18">Intelligence Report: Council of Ministers</div>
                <div className="t-12 tx-2" style={{marginTop: 4}}>Period: Last 14 days · Focus: Decision-making analysis</div>
                <div className="t-11 tx-3 mono" style={{marginTop: 4}}>Generated: {todayLabel()}, 14:32 UTC</div>
              </div>
              <div style={{display:'flex', flexDirection:'column', gap: 6, alignItems:'flex-end'}}>
                <VerifBadge kind="pending"/>
                <div className="t-11 tx-3">High confidence · 847 mentions · 31 sources · 4 languages</div>
              </div>
            </div>
          </div>

          <div style={{padding: 16}}>
            <div className="t-11 tx-3" style={{letterSpacing:'0.1em', marginBottom: 8}}>EXECUTIVE SUMMARY</div>
            <div className="t-13 tx-1" style={{lineHeight: 1.7, marginBottom: 18}}>
              The Council of Ministers demonstrated constrained decision-making capacity during the analysis period, with three cabinet sessions producing two minor administrative decrees and no progress on the four pending IMF reform conditions requiring cabinet approval. PM Salam's reform agenda continues to be obstructed at the cabinet level by Hezbollah's two portfolio-holders (Health, Labour) acting in coordination with Amal's two ministers (Finance, Public Works) — an effective 4/24 blocking minority on contested votes.
            </div>

            <div className="t-11 tx-3" style={{letterSpacing:'0.1em', marginBottom: 8}}>KEY FINDINGS</div>
            <div style={{display:'flex', flexDirection:'column', gap: 12, marginBottom: 18}}>
              {[
                'Hezbollah\'s portfolio ministers (Health, Labour) effectively blocked two proposed reform decrees on banking-sector resolution and BdL governance during the 16 Apr session.',
                'PM Salam\'s reform agenda faces structural resistance: of 6 prior IMF actions requiring cabinet movement, 0 advanced; only the bank secrecy amendment (parliamentary track) has progressed.',
                'Foreign pressure from USA and France visible in three closed-door delegations (Apr 14, Apr 19, Apr 22) coinciding with public statements supporting Salam government persistence.',
                'Berri\'s Amal voting bloc shows tighter coordination with Hezbollah on economic votes (4/4 contested) than on judicial reform (2/4 contested).',
              ].map((f,i) => (
                <div key={i} style={{display:'flex', gap: 10}}>
                  <div className="t-13 tx-teal mono" style={{flexShrink:0, width: 18}}>{i+1}.</div>
                  <div className="t-13" style={{lineHeight: 1.6}}>{f}</div>
                </div>
              ))}
            </div>

            <div style={{display:'flex', gap: 10}}>
              <button className="btn">Read full report ↓</button>
              <button className="btn btn-ghost">Download PDF</button>
              <button className="btn btn-ghost">Share with reviewer</button>
            </div>
          </div>
        </div>
      )}

      {/* Past reports library */}
      <div className="panel" style={{padding: 0}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding: '14px 16px', borderBottom:'1px solid var(--border)'}}>
          <div className="panel-title" style={{margin:0}}>Past Reports</div>
          <div style={{position:'relative', width: 220}}>
            <input className="input" style={{height: 30, fontSize: 12, paddingLeft: 28}} placeholder="Search library…"/>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7E8699" strokeWidth="1.5" style={{position:'absolute', left:10, top:9}}>
              <circle cx="11" cy="11" r="7"/><line x1="16" y1="16" x2="21" y2="21"/>
            </svg>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Report</th>
              <th style={{width: 110}}>Period</th>
              <th style={{width: 150}}>Generated</th>
              <th style={{width: 140}}>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO: data-layer — Past reports library + generated report executive summary hand-curated. */}
            <tr>
              <td className="t-13">Council of Ministers — Decision-making</td>
              <td className="t-12 tx-2">Last 14d</td>
              <td className="t-12 mono tx-2">Today 14:32</td>
              <td><VerifBadge kind="pending"/></td>
            </tr>
            <tr>
              <td className="t-13">Nawaf Salam — Network analysis</td>
              <td className="t-12 tx-2">Last 30d</td>
              <td className="t-12 mono tx-2">23 Apr 11:15</td>
              <td><VerifBadge kind="verified"/></td>
            </tr>
            <tr>
              <td className="t-13">Iran / IRGC — Foreign influence</td>
              <td className="t-12 tx-2">Last 30d</td>
              <td className="t-12 mono tx-2">21 Apr 09:20</td>
              <td><VerifBadge kind="verified"/></td>
            </tr>
            <tr>
              <td className="t-13">Lebanese Armed Forces — Current</td>
              <td className="t-12 tx-2">Last 7d</td>
              <td className="t-12 mono tx-2">18 Apr 16:40</td>
              <td><VerifBadge kind="verified"/></td>
            </tr>
            <tr>
              <td className="t-13">Lebanon — Country overview</td>
              <td className="t-12 tx-2">Last 14d</td>
              <td className="t-12 mono tx-2">15 Apr 10:05</td>
              <td><VerifBadge kind="disputed"/></td>
            </tr>
            <tr>
              <td className="t-13">Hezbollah — Risk &amp; stability</td>
              <td className="t-12 tx-2">Last 30d</td>
              <td className="t-12 mono tx-2">12 Apr 17:48</td>
              <td><VerifBadge kind="verified"/></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </AppFrame>
);

window.ReportsScreen = ReportsScreen;
