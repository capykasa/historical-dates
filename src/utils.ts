export function getPageNumberView(page: number): string {
  return String(page).padStart(2, '0')
}

export function findDistanceOfArrayItems(array: number[], startItem: number, endItem: number): [boolean, number] {
  let sortedItemIndexes = [array.indexOf(startItem), array.indexOf(endItem)].sort((a, b) => a - b)
  let isForward = true

  const remainderArray = array.slice()

  const forwardLength = remainderArray.slice(sortedItemIndexes[0], sortedItemIndexes[1]).length
  remainderArray.splice(0, forwardLength)
  const remainderLength = remainderArray.length

  if (endItem > startItem) isForward = false
  if (forwardLength > remainderLength) isForward = !isForward

  return [!isForward, Math.min(forwardLength, remainderLength)]
}
