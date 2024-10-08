'use client'

// eslint-disable-next-line import/default
import CalHeatmap from 'cal-heatmap'
// @ts-ignore Could not find a declaration file for module 'cal-heatmap/plugins/Tooltip'.
import Tooltip from 'cal-heatmap/plugins/Tooltip'
import { useEffect } from 'react'

import 'cal-heatmap/cal-heatmap.css'

export default function HeatmapView() {
  useEffect(() => {
    // @ts-ignore This expression is not constructable. Type 'typeof import("/Users/ryota.murakami/unfarely/node_modules/.pnpm/@types+cal-heatmap@3.5.39/node_modules/@types/cal-heatmap/index")' has no construct signatures.
    const cal = new CalHeatmap()
    cal.paint(
      {
        domain: { type: 'month', sort: 'desc' },
        subDomain: { type: 'day' },
      },
      [[Tooltip]],
    )
    return () => {
      cal.destroy()
    }
  }, [])

  return <div id="cal-heatmap"></div>
}
