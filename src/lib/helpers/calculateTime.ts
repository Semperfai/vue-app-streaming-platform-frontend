export const calculateTime = (duration: number): string => {
  const seconds = Math.floor(duration % 60)
  const minutes = Math.floor(duration / 60)
  const computedSeconds = seconds >= 10 ? seconds : `0${seconds}`

  return `${minutes}:${computedSeconds}`
}
