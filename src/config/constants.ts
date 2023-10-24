export const ACCENT_COLOR = '#1e90ff'
export const BG_COLOR = '#191B1F'

export const IS_SERVER = typeof window === 'undefined'
export const IS_CLIENT = typeof window !== 'undefined'
export const IS_PRODUCTION = process.env.APP_ENV === 'production'
