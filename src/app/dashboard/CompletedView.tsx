'use client'

import React from 'react'

import { selectCompleted } from '@/redux/editorSlice'
import { useAppSelector } from '@/redux/hooks'

interface Props {}

export const CompletedView: React.FC<Props> = () => {
  const completed = useAppSelector(selectCompleted)
  return (
    <>
      <h2 className="text-primary-content">Completed</h2>
      <ul className="timeline timeline-vertical pr-[25%] text-primary-content">
        {completed.map((item, i) => (
          <li key={i}>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box text-balance bg-neutral-content">
              {item}
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
