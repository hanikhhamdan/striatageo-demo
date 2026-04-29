// Screen 9: Personal account

const AccountScreen = ({ ...nav }) => (
  <AppFrame active="Account" {...nav}>
    <div style={{padding: '32px 16px', display:'flex', justifyContent:'center'}}>
      <div style={{width: 680, display:'flex', flexDirection:'column', gap: 16}}>
        {/* Profile */}
        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">Profile</div>
            <span className="t-11 tx-3">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{verticalAlign:-1, marginRight:4}}>
                <rect x="4" y="11" width="16" height="11" rx="2"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/>
              </svg>
              Read-only
            </span>
          </div>
          <div style={{display:'flex', gap: 16}}>
            <Initials size="lg">M.R.</Initials>
            <div style={{flex:1, display:'grid', gridTemplateColumns:'140px 1fr', rowGap: 10, columnGap: 16, alignItems:'center'}}>
              <span className="t-12 tx-2">Full name</span>
              <span className="t-13">Mohammed Rashid</span>
              <span className="t-12 tx-2">Role</span>
              <span className="t-13">Political Analyst</span>
              <span className="t-12 tx-2">Organization</span>
              <span className="t-13">Diplomatic Mission &middot; Beirut</span>
              <span className="t-12 tx-2">Subscription</span>
              <span className="t-13">Lebanon · Annual · <span className="tx-2 mono">expires 31 Dec 2026</span></span>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">Security</div>
          </div>
          <div style={{display:'flex', flexDirection:'column'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 0', borderBottom:'1px solid var(--border-subtle)'}}>
              <div>
                <div className="t-13">Password</div>
                <div className="t-11 tx-3 mono" style={{marginTop:2}}>•••••••••••••••• · last changed 12 Jan 2026</div>
              </div>
              <a href="#" style={{color:'var(--teal)', fontSize:12, textDecoration:'none'}}>Change password →</a>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 0', borderBottom:'1px solid var(--border-subtle)'}}>
              <div>
                <div className="t-13">Multi-factor authentication</div>
                <div className="t-11 tx-2" style={{marginTop:2}}>FIDO2 Security Key · <span style={{color:'var(--teal)'}}>Active</span></div>
              </div>
              <a href="#" style={{color:'var(--teal)', fontSize:12, textDecoration:'none'}}>Manage →</a>
            </div>
          </div>

          {/* TODO: data-layer — Profile, registered devices, session log all hand-curated. */}
          <div className="t-11 tx-3" style={{letterSpacing:'0.08em', marginTop: 16, marginBottom: 8}}>REGISTERED DEVICES (2/2) · FIDO2-PAIRED</div>
          <div style={{display:'flex', flexDirection:'column'}}>
            <div style={{display:'grid', gridTemplateColumns:'1fr 200px 80px', alignItems:'center', padding:'10px 0', borderBottom:'1px solid var(--border-subtle)'}}>
              <div>
                <div className="t-13">MacBook Pro · Chrome</div>
                <div className="t-11 tx-3 mono" style={{marginTop:2}}>FIDO2 paired · YubiKey 5C</div>
              </div>
              <div className="t-12 tx-2 mono">Registered 15 Jan 2026</div>
              <a href="#" style={{color:'var(--critical)', fontSize:12, textAlign:'right', textDecoration:'none'}}>Remove</a>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 200px 80px', alignItems:'center', padding:'10px 0', borderBottom:'1px solid var(--border-subtle)'}}>
              <div>
                <div className="t-13">iPhone 15</div>
                <div className="t-11 tx-3 mono" style={{marginTop:2}}>FIDO2 paired · Platform authenticator</div>
              </div>
              <div className="t-12 tx-2 mono">Registered 22 Feb 2026</div>
              <a href="#" style={{color:'var(--critical)', fontSize:12, textAlign:'right', textDecoration:'none'}}>Remove</a>
            </div>
          </div>
          <div className="t-11 tx-3" style={{marginTop: 8}}>Add device — limit reached (max 2). Remove a device to add a new one.</div>
        </div>

        {/* Session history */}
        <div className="panel" style={{padding: 0}}>
          <div style={{padding: '14px 16px', borderBottom:'1px solid var(--border)'}}>
            <div className="panel-title">Session history</div>
            <div className="t-11 tx-3" style={{marginTop:2}}>Recent access · last 7 days</div>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Date / time</th>
                <th>IP</th>
                <th>Country</th>
                <th>Device</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                {dt:'26 Apr 2026, 14:30', ip:'212.43.x.x', co:'Lebanon', d:'MacBook Pro', a:'Login'},
                {dt:'26 Apr 2026, 14:32', ip:'212.43.x.x', co:'Lebanon', d:'MacBook Pro', a:'Report generated — Council of Ministers'},
                {dt:'25 Apr 2026, 09:15', ip:'212.43.x.x', co:'Lebanon', d:'MacBook Pro', a:'Login'},
                {dt:'24 Apr 2026, 18:40', ip:'212.43.x.x', co:'Lebanon', d:'iPhone 15', a:'Login'},
                {dt:'23 Apr 2026, 11:15', ip:'212.43.x.x', co:'Lebanon', d:'MacBook Pro', a:'Report generated — Nawaf Salam'},
                {dt:'22 Apr 2026, 11:02', ip:'212.43.x.x', co:'Lebanon', d:'MacBook Pro', a:'Report downloaded'},
              ].map((r,i) => (
                <tr key={i}>
                  <td className="t-12 mono">{r.dt}</td>
                  <td className="t-12 mono tx-2">{r.ip}</td>
                  <td className="t-12">{r.co}</td>
                  <td className="t-12 tx-2">{r.d}</td>
                  <td className="t-12">{r.a}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="t-11 tx-3" style={{padding: '10px 16px', borderTop:'1px solid var(--border-subtle)'}}>
            Full access log retained for 12 months. Contact your account representative for a complete export.
          </div>
        </div>

        <div style={{textAlign:'center'}}>
          <a href="#" style={{color:'var(--teal)', fontSize:12, textDecoration:'none'}}>View your reports →</a>
        </div>
      </div>
    </div>
  </AppFrame>
);

window.AccountScreen = AccountScreen;
