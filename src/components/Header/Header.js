import './Header.css';

export default function Header() {
  return (
    <header style={{background:'#090909', color:'#fff'}}>
      <div className="header-section">
        {/* <img src="/images/logo.svg" alt="Daily logo" /> */}
        <span className="title">Binay</span>
      </div>
      {/* <div className="header-section">
        <a
          className="new-tab-link"
          href="https://docs.daily.co/reference/daily-js"
          target="_blank"
          rel="noreferrer">
          <span>API docs</span>
          <img src="/images/newtab.svg" alt="New tab" />
        </a>
        <a
          className="github-link"
          href="https://github.com/daily-demos/custom-video-daily-react-hooks"
          target="_blank"
          rel="noreferrer">
          <img src="/images/github.svg" alt="Github" />
        </a>
      </div> */}
    </header>
  );
}
