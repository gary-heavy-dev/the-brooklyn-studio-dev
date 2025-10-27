import { useEffect } from 'react'
import { LayoutProps } from 'sanity'

export function StagingLayout(props: LayoutProps) {
  useEffect(() => {
    const style = document.createElement('style')
    style.id = 'staging-workspace-styles'
    style.innerHTML = `
      [data-testId="document-panel-scroller"] {
        background-color: #fff4e6 !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      const existingStyle = document.getElementById('staging-workspace-styles')
      if (existingStyle) {
        document.head.removeChild(existingStyle)
      }
    }
  }, [])

  return props.renderDefault(props)
}
