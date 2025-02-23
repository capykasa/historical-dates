export function getPageNumberView(page: number): string {
  return String(page).padStart(2, '0')
}
