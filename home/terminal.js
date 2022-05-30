const render = () => {
  return (
    <div
      style={{
        width: 'calc(100vw - 150px)',
        backgroundColor: 'hsl(var(--b2))',
        minHeight: 'calc(100vh - 35px)',
      }}
    >
      <webview src="https://music.youtube.com/" style={{height: '100%', width: 'calc(100vw - 150px)'}}></webview>
    </div>
  )
}

export default { render }