import * as React from 'react'

import {Button, DevToolbar, Dropdown, Item} from 'devtoolbar-react/lib'

export default function Toolbar() {
  const [isDesignMode, setIsDesignMode] = React.useState(false)

  React.useEffect(() => {
    document.designMode = isDesignMode ? 'on' : 'off'
  }, [isDesignMode])

  return (
    <DevToolbar
      hosts={{
        production: ['https://www.threeq.app'],
        staging: ['https://standup-lovat.vercel.app'],
        development: ['http://localhost:3050', 'http://localhost:3051'],
      }}
    >
      <Button
        name="🎨"
        active={isDesignMode}
        onClick={() => setIsDesignMode(!isDesignMode)}
      />

      <Dropdown name="🔗" right>
        <Item>
          <a href="https://github.com/jacobparis/standup">🐙 GitHub</a>
        </Item>
      </Dropdown>
    </DevToolbar>
  )
}
