import { useState } from 'react'
import { useSpring, config, animated } from '@react-spring/web'
import clsx from 'clsx'
import {
  makeStyles,
  createStyles,
} from '@material-ui/core/styles'

export type AnimationSlimeProps = {
  viewBox: string
  d: string[]
  fill: string
  duration?: number
  className?: string
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      height: '100%',
    },
  }),
)

export const AnimationSlime = ({
  viewBox,
  d,
  fill,
  duration = 3000,
  className,
}: AnimationSlimeProps) => {
  const classes = useStyles()
  const [index, setIndex] = useState(0)

  const { path } = useSpring({
    from: {
      path: d[index],
    },
    path: d[index + 1] || d[0],
    config: {
      ...config.molasses,
      duration,
    },
    onRest: () => setIndex((i) => (i + 1) % d.length),
  })

  return (
    <svg
      className={clsx(classes.root, className)}
      fill={fill}
      viewBox={viewBox}
      preserveAspectRatio="none"
    >
      <animated.path d={path} />
    </svg>
  )
}
