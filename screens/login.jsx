// Screen 1: Login states (default, MFA, lockout, anomaly overlays)

const LoginCard = ({ variant = 'default', onContinue, onVerify }) => {
  const isMfa = variant === 'mfa';
  const isLockout = variant === 'lockout';
  const isNewDevice = variant === 'newdevice';
  const isUnregistered = variant === 'unregistered';
  const isUnknownCountry = variant === 'unknowncountry';

  const borderColor =
    isLockout ? 'var(--critical)' :
    (isUnregistered || isUnknownCountry) ? 'var(--warning)' :
    'var(--border)';

  return (
    <div style={{
      width: 400,
      background: 'var(--surface)',
      border: `1px solid ${borderColor}`,
      borderRadius: 8,
      padding: '32px 32px 28px',
      position: 'relative',
    }}>
      {/* Logo */}
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap: 10}}>
        <HexLogo size={32}/>
        <div style={{fontSize:20, fontWeight:500, color:'var(--teal)', letterSpacing:'0.04em'}}>StriataGeo</div>
        <div className="t-12 tx-2">Strategic intelligence platform</div>
      </div>

      <div style={{height: 28}}/>

      {isLockout && (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:10, padding:'8px 0 20px'}}>
          <div style={{
            width: 56, height: 56, borderRadius: '50%',
            background: 'rgba(224,62,62,0.10)',
            display:'flex', alignItems:'center', justifyContent:'center'
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E03E3E" strokeWidth="1.5">
              <rect x="4" y="11" width="16" height="11" rx="2"/>
              <path d="M8 11V7a4 4 0 1 1 8 0v4"/>
            </svg>
          </div>
          <div className="t-15" style={{color:'var(--critical)'}}>Account suspended</div>
          <div className="t-12 tx-2" style={{textAlign:'center', maxWidth: 300}}>
            Three failed verification attempts. Contact your account representative to reactivate.
          </div>
          <div style={{height: 8}}/>
          <button className="btn btn-block btn-40" style={{background:'transparent', color:'var(--critical)', border:'1px solid var(--critical)'}}>
            Contact representative →
          </button>
        </div>
      )}

      {isMfa && (
        <div>
          <div className="t-15" style={{textAlign:'center', marginBottom: 6}}>Verify your identity</div>
          <div className="t-12 tx-2" style={{textAlign:'center', marginBottom: 22, maxWidth:320, marginLeft:'auto', marginRight:'auto'}}>
            Insert your security key and tap it, or enter your authenticator code.
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(6, 1fr)', gap: 6, marginBottom: 18}}>
            {['4','7','2','9','1','6'].map((d,i) => (
              <div key={i} style={{
                height: 44,
                background:'var(--surface-raised)',
                border:'1px solid var(--teal)',
                borderRadius: 4,
                display:'flex', alignItems:'center', justifyContent:'center',
                fontFamily: 'var(--mono)', fontSize: 18, color:'var(--text-1)'
              }}>{d}</div>
            ))}
          </div>
          <button className="btn btn-block btn-40" onClick={onVerify}>Verify</button>
          <div style={{textAlign:'center', marginTop: 14}}>
            <a href="#" className="t-12" style={{color:'var(--info)', textDecoration:'none'}}>Use a different method</a>
          </div>

          {isNewDevice && (
            <div style={{marginTop: 16, padding: '10px 12px', background:'rgba(232,155,34,0.08)', borderLeft:'2px solid var(--warning)', borderRadius:'0 4px 4px 0'}}>
              <div className="t-12" style={{color:'var(--warning)', fontWeight: 500}}>New device detected</div>
              <div className="t-11 tx-2" style={{marginTop: 3}}>This is not a registered device. Your account administrator has been notified.</div>
            </div>
          )}
        </div>
      )}

      {!isMfa && !isLockout && (
        <div>
          <div className="t-11 tx-2" style={{marginBottom: 6, letterSpacing:'0.04em'}}>EMAIL</div>
          <input className="input" defaultValue="m.rashid@mission.example.org" style={{marginBottom: 12}}/>
          <div className="t-11 tx-2" style={{marginBottom: 6, letterSpacing:'0.04em'}}>PASSWORD</div>
          <div style={{position:'relative'}}>
            <input className="input" type="password" defaultValue="••••••••••••" style={{paddingRight: 36}}/>
            <span style={{position:'absolute', right: 10, top: 12, color:'var(--text-2)', cursor:'pointer'}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </span>
          </div>
          <div style={{height: 20}}/>
          <button className="btn btn-block btn-40" onClick={onContinue}>Continue</button>
          <div className="t-11 tx-3" style={{textAlign:'center', marginTop: 16}}>
            Multi-factor authentication required after login
          </div>
        </div>
      )}
    </div>
  );
};

const AnomalyOverlay = ({ kind = 'country' }) => {
  const data = {
    country: {
      icon: '⚠',
      title: 'Unrecognized country',
      body: 'Login attempted from Cyprus. This is not your registered location. Your access representative has been notified. If this is you, contact your representative to verify this location.'
    },
    device: {
      icon: '🛡',
      title: 'Unregistered device detected',
      body: 'This device is not registered to your account. Access has been blocked. Your representative has been notified. To register this device, contact your account representative.'
    }
  }[kind];
  return (
    <div style={{
      position:'absolute', inset:0,
      background:'rgba(10,12,16,0.78)',
      backdropFilter: 'blur(2px)',
      display:'flex', alignItems:'center', justifyContent:'center',
      zIndex: 5
    }}>
      <div style={{
        width: 380,
        background:'var(--surface)',
        border:'1px solid var(--warning)',
        borderRadius: 8,
        padding: 24
      }}>
        <div style={{display:'flex', gap: 12, alignItems:'flex-start', marginBottom: 12}}>
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            background:'rgba(232,155,34,0.12)',
            display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E89B22" strokeWidth="1.5">
              <path d="M12 2L2 21h20L12 2z"/>
              <line x1="12" y1="9" x2="12" y2="14"/>
              <circle cx="12" cy="17" r="0.6" fill="#E89B22"/>
            </svg>
          </div>
          <div className="t-15" style={{paddingTop: 6}}>{data.title}</div>
        </div>
        <div className="t-12 tx-2" style={{lineHeight: 1.6}}>{data.body}</div>
        <div style={{height: 18}}/>
        <button className="btn btn-block btn-ghost" style={{height: 36}}>I understand</button>
      </div>
    </div>
  );
};

const LoginScreen = ({ variant: initialVariant = 'default', onLogin }) => {
  const [variant, setVariant] = React.useState(initialVariant);
  const onContinue = () => setVariant('mfa');
  const onVerify = () => onLogin && onLogin();
  return (
  <div className="sg" style={{
    width: '100%', height: '100%', minHeight: '100vh',
    background: 'var(--canvas)',
    display:'flex', alignItems:'center', justifyContent:'center',
    position:'relative', overflow:'hidden'
  }}>
    {/* faint hexagon grid bg */}
    <svg width="1280" height="820" style={{position:'absolute', inset:0, opacity: 0.04}}>
      <defs>
        <pattern id="hex" width="60" height="52" patternUnits="userSpaceOnUse">
          <polygon points="30,2 56,16 56,42 30,56 4,42 4,16" fill="none" stroke="#1AA882" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width="1280" height="820" fill="url(#hex)"/>
    </svg>

    <div style={{display:'flex', flexDirection:'column', alignItems:'center', position:'relative', zIndex: 1}}>
      <LoginCard variant={variant === 'unknowncountry' || variant === 'unregistered' ? 'default' : variant} onContinue={onContinue} onVerify={onVerify}/>
      <div className="t-11 tx-3" style={{marginTop: 24, textAlign:'center', maxWidth: 360}}>
        Access by invitation only. Contact your account representative.
      </div>
    </div>

    {variant === 'unknowncountry' && <AnomalyOverlay kind="country"/>}
    {variant === 'unregistered' && <AnomalyOverlay kind="device"/>}
  </div>
  );
};

window.LoginScreen = LoginScreen;
