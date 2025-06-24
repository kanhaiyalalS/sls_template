export function getTtlInSeconds(howMuchTimeShouldLiveInSeconds: number): number {
  return Math.floor(Date.now() / 1000) + howMuchTimeShouldLiveInSeconds;
}
