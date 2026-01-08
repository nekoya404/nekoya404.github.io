import { ReactNode } from 'react'
import './DosStatusBar.css'

interface DosStatusBarProps {
  message?: ReactNode
}

function DosStatusBar({
  message = 'Press the Alt key to select the menu, or use the cursor keys to select a file',
}: DosStatusBarProps) {
  return (
    <div className="dos-statusbar" role="status" aria-live="polite">
      <div className="dos-statusbar-inner">
        <span className="dos-statusbar-text">{message}</span>
      </div>
    </div>
  )
}

export default DosStatusBar
