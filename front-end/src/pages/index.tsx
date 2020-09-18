import React from 'react';
import App from '@/app';

export default () => {

  React.useEffect(() => {
    window.location.href="/static/view-stream.html"
  })

  return (
    <App/>
  )
}