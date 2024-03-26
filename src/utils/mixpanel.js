import mixpanel from 'mixpanel-browser'
mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN, {debug: true, track_pageview: true, persistence: 'localStorage'})

import {v4 as uuidv4} from 'uuid'

function getUserId() {
  let userId = localStorage.getItem('userId')
  if (!userId) {
    userId = uuidv4()
    localStorage.setItem('userId', userId)
  }
  return userId
}

mixpanel.identify(getUserId())

const trackEvent = (event, properties = {}) => {
  try {
    mixpanel.track(event, properties)
  } catch (error) {
    console.error(`Error tracking event ${event}:`, error)
  }
}

export const trackSearchQuery = (properties) => {
  trackEvent('search_query', properties)
}

export const trackSearchQueryResults = (properties) => {
  trackEvent('search_query_results', properties)
}

export const trackCartItemQuantityIncrease = (properties) => {
  trackEvent('cart_item_quantity_increased', properties)
}

export const trackCartItemQuantityDecrease = (properties) => {
  trackEvent('cart_item_quantity_decreased', properties)
}

export const trackRemovedFromCart = (properties) => {
  trackEvent('item_removed_from_cart', properties)
}

export const trackAddToCart = (properties) => {
  trackEvent('added_to_cart', properties)
}

export const trackViewCart = (properties) => {
  trackEvent('view_cart', properties)
}

export const trackFailedQRCodeScan = (properties) => {
  trackEvent('qr_code_scan_failed', properties)
}

export const trackQrCodeScan = (properties) => {
  trackEvent('qr_code_scanned', properties)
}

export const trackOrderPlaced = (properties) => {
  trackEvent('order_placed', properties)
}
