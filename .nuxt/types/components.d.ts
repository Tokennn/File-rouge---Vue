
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  'AuthLogoBackground': typeof import("../../components/AuthLogoBackground.vue").default
  'AdminContactRequestsSection': typeof import("../../components/admin/AdminContactRequestsSection.vue").default
  'AdminOrdersActionsSection': typeof import("../../components/admin/AdminOrdersActionsSection.vue").default
  'AdminPerformanceSection': typeof import("../../components/admin/AdminPerformanceSection.vue").default
  'AdminProductsSection': typeof import("../../components/admin/AdminProductsSection.vue").default
  'AdminStatsGrid': typeof import("../../components/admin/AdminStatsGrid.vue").default
  'AdminUsersSection': typeof import("../../components/admin/AdminUsersSection.vue").default
  'AuthPageShell': typeof import("../../components/auth/AuthPageShell.vue").default
  'LoginFormCard': typeof import("../../components/auth/LoginFormCard.vue").default
  'RegisterFormCard': typeof import("../../components/auth/RegisterFormCard.vue").default
  'CartEmptyState': typeof import("../../components/cart/CartEmptyState.vue").default
  'CartHeader': typeof import("../../components/cart/CartHeader.vue").default
  'CartItemRow': typeof import("../../components/cart/CartItemRow.vue").default
  'CartItemsGrid': typeof import("../../components/cart/CartItemsGrid.vue").default
  'CartSummary': typeof import("../../components/cart/CartSummary.vue").default
  'ContactFormCard': typeof import("../../components/contact/ContactFormCard.vue").default
  'HomeGuestCards': typeof import("../../components/home/HomeGuestCards.vue").default
  'HomeHero': typeof import("../../components/home/HomeHero.vue").default
  'HomeNav': typeof import("../../components/home/HomeNav.vue").default
  'HomeProfileCard': typeof import("../../components/home/HomeProfileCard.vue").default
  'DuoPackCard': typeof import("../../components/shop/DuoPackCard.vue").default
  'NewsletterCta': typeof import("../../components/shop/NewsletterCta.vue").default
  'ProductCard': typeof import("../../components/shop/ProductCard.vue").default
  'ProductFilters': typeof import("../../components/shop/ProductFilters.vue").default
  'ReviewsPanel': typeof import("../../components/shop/ReviewsPanel.vue").default
  'ShoesHero': typeof import("../../components/shop/ShoesHero.vue").default
  'SizeGuideModal': typeof import("../../components/shop/SizeGuideModal.vue").default
  'CartToast': typeof import("../../components/ui/CartToast.vue").default
  'NuxtWelcome': typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue").default
  'NuxtLayout': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout").default
  'NuxtErrorBoundary': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default
  'ClientOnly': typeof import("../../node_modules/nuxt/dist/app/components/client-only").default
  'DevOnly': typeof import("../../node_modules/nuxt/dist/app/components/dev-only").default
  'ServerPlaceholder': typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder").default
  'NuxtLink': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link").default
  'NuxtLoadingIndicator': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default
  'NuxtTime': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue").default
  'NuxtRouteAnnouncer': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default
  'NuxtImg': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg
  'NuxtPicture': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture
  'NuxtLinkLocale': typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale").default
  'SwitchLocalePathLink': typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink").default
  'NuxtPage': typeof import("../../node_modules/nuxt/dist/pages/runtime/page").default
  'NoScript': typeof import("../../node_modules/nuxt/dist/head/runtime/components").NoScript
  'Link': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Link
  'Base': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Base
  'Title': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Title
  'Meta': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Meta
  'Style': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Style
  'Head': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Head
  'Html': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Html
  'Body': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Body
  'NuxtIsland': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island").default
  'LazyAuthLogoBackground': LazyComponent<typeof import("../../components/AuthLogoBackground.vue").default>
  'LazyAdminContactRequestsSection': LazyComponent<typeof import("../../components/admin/AdminContactRequestsSection.vue").default>
  'LazyAdminOrdersActionsSection': LazyComponent<typeof import("../../components/admin/AdminOrdersActionsSection.vue").default>
  'LazyAdminPerformanceSection': LazyComponent<typeof import("../../components/admin/AdminPerformanceSection.vue").default>
  'LazyAdminProductsSection': LazyComponent<typeof import("../../components/admin/AdminProductsSection.vue").default>
  'LazyAdminStatsGrid': LazyComponent<typeof import("../../components/admin/AdminStatsGrid.vue").default>
  'LazyAdminUsersSection': LazyComponent<typeof import("../../components/admin/AdminUsersSection.vue").default>
  'LazyAuthPageShell': LazyComponent<typeof import("../../components/auth/AuthPageShell.vue").default>
  'LazyLoginFormCard': LazyComponent<typeof import("../../components/auth/LoginFormCard.vue").default>
  'LazyRegisterFormCard': LazyComponent<typeof import("../../components/auth/RegisterFormCard.vue").default>
  'LazyCartEmptyState': LazyComponent<typeof import("../../components/cart/CartEmptyState.vue").default>
  'LazyCartHeader': LazyComponent<typeof import("../../components/cart/CartHeader.vue").default>
  'LazyCartItemRow': LazyComponent<typeof import("../../components/cart/CartItemRow.vue").default>
  'LazyCartItemsGrid': LazyComponent<typeof import("../../components/cart/CartItemsGrid.vue").default>
  'LazyCartSummary': LazyComponent<typeof import("../../components/cart/CartSummary.vue").default>
  'LazyContactFormCard': LazyComponent<typeof import("../../components/contact/ContactFormCard.vue").default>
  'LazyHomeGuestCards': LazyComponent<typeof import("../../components/home/HomeGuestCards.vue").default>
  'LazyHomeHero': LazyComponent<typeof import("../../components/home/HomeHero.vue").default>
  'LazyHomeNav': LazyComponent<typeof import("../../components/home/HomeNav.vue").default>
  'LazyHomeProfileCard': LazyComponent<typeof import("../../components/home/HomeProfileCard.vue").default>
  'LazyDuoPackCard': LazyComponent<typeof import("../../components/shop/DuoPackCard.vue").default>
  'LazyNewsletterCta': LazyComponent<typeof import("../../components/shop/NewsletterCta.vue").default>
  'LazyProductCard': LazyComponent<typeof import("../../components/shop/ProductCard.vue").default>
  'LazyProductFilters': LazyComponent<typeof import("../../components/shop/ProductFilters.vue").default>
  'LazyReviewsPanel': LazyComponent<typeof import("../../components/shop/ReviewsPanel.vue").default>
  'LazyShoesHero': LazyComponent<typeof import("../../components/shop/ShoesHero.vue").default>
  'LazySizeGuideModal': LazyComponent<typeof import("../../components/shop/SizeGuideModal.vue").default>
  'LazyCartToast': LazyComponent<typeof import("../../components/ui/CartToast.vue").default>
  'LazyNuxtWelcome': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue").default>
  'LazyNuxtLayout': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout").default>
  'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default>
  'LazyClientOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only").default>
  'LazyDevOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only").default>
  'LazyServerPlaceholder': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder").default>
  'LazyNuxtLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link").default>
  'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default>
  'LazyNuxtTime': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue").default>
  'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default>
  'LazyNuxtImg': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg>
  'LazyNuxtPicture': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture>
  'LazyNuxtLinkLocale': LazyComponent<typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale").default>
  'LazySwitchLocalePathLink': LazyComponent<typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink").default>
  'LazyNuxtPage': LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page").default>
  'LazyNoScript': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").NoScript>
  'LazyLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Link>
  'LazyBase': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Base>
  'LazyTitle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Title>
  'LazyMeta': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Meta>
  'LazyStyle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Style>
  'LazyHead': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Head>
  'LazyHtml': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Html>
  'LazyBody': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Body>
  'LazyNuxtIsland': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island").default>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
