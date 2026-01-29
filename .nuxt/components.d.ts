
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


export const AuthLogoBackground: typeof import("../components/AuthLogoBackground.vue").default
export const AdminContactRequestsSection: typeof import("../components/admin/AdminContactRequestsSection.vue").default
export const AdminOrdersActionsSection: typeof import("../components/admin/AdminOrdersActionsSection.vue").default
export const AdminPerformanceSection: typeof import("../components/admin/AdminPerformanceSection.vue").default
export const AdminProductsSection: typeof import("../components/admin/AdminProductsSection.vue").default
export const AdminStatsGrid: typeof import("../components/admin/AdminStatsGrid.vue").default
export const AdminUsersSection: typeof import("../components/admin/AdminUsersSection.vue").default
export const AuthPageShell: typeof import("../components/auth/AuthPageShell.vue").default
export const LoginFormCard: typeof import("../components/auth/LoginFormCard.vue").default
export const RegisterFormCard: typeof import("../components/auth/RegisterFormCard.vue").default
export const CartEmptyState: typeof import("../components/cart/CartEmptyState.vue").default
export const CartHeader: typeof import("../components/cart/CartHeader.vue").default
export const CartItemRow: typeof import("../components/cart/CartItemRow.vue").default
export const CartItemsGrid: typeof import("../components/cart/CartItemsGrid.vue").default
export const CartSummary: typeof import("../components/cart/CartSummary.vue").default
export const ContactFormCard: typeof import("../components/contact/ContactFormCard.vue").default
export const HomeGuestCards: typeof import("../components/home/HomeGuestCards.vue").default
export const HomeHero: typeof import("../components/home/HomeHero.vue").default
export const HomeNav: typeof import("../components/home/HomeNav.vue").default
export const HomeProfileCard: typeof import("../components/home/HomeProfileCard.vue").default
export const DuoPackCard: typeof import("../components/shop/DuoPackCard.vue").default
export const NewsletterCta: typeof import("../components/shop/NewsletterCta.vue").default
export const ProductCard: typeof import("../components/shop/ProductCard.vue").default
export const ProductFilters: typeof import("../components/shop/ProductFilters.vue").default
export const ReviewsPanel: typeof import("../components/shop/ReviewsPanel.vue").default
export const ShoesHero: typeof import("../components/shop/ShoesHero.vue").default
export const SizeGuideModal: typeof import("../components/shop/SizeGuideModal.vue").default
export const CartToast: typeof import("../components/ui/CartToast.vue").default
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue").default
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout").default
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only").default
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only").default
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder").default
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link").default
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue").default
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture
export const NuxtLinkLocale: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale").default
export const SwitchLocalePathLink: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink").default
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page").default
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components").NoScript
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components").Link
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components").Base
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components").Title
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components").Meta
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components").Style
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components").Head
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components").Html
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components").Body
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island").default
export const LazyAuthLogoBackground: LazyComponent<typeof import("../components/AuthLogoBackground.vue").default>
export const LazyAdminContactRequestsSection: LazyComponent<typeof import("../components/admin/AdminContactRequestsSection.vue").default>
export const LazyAdminOrdersActionsSection: LazyComponent<typeof import("../components/admin/AdminOrdersActionsSection.vue").default>
export const LazyAdminPerformanceSection: LazyComponent<typeof import("../components/admin/AdminPerformanceSection.vue").default>
export const LazyAdminProductsSection: LazyComponent<typeof import("../components/admin/AdminProductsSection.vue").default>
export const LazyAdminStatsGrid: LazyComponent<typeof import("../components/admin/AdminStatsGrid.vue").default>
export const LazyAdminUsersSection: LazyComponent<typeof import("../components/admin/AdminUsersSection.vue").default>
export const LazyAuthPageShell: LazyComponent<typeof import("../components/auth/AuthPageShell.vue").default>
export const LazyLoginFormCard: LazyComponent<typeof import("../components/auth/LoginFormCard.vue").default>
export const LazyRegisterFormCard: LazyComponent<typeof import("../components/auth/RegisterFormCard.vue").default>
export const LazyCartEmptyState: LazyComponent<typeof import("../components/cart/CartEmptyState.vue").default>
export const LazyCartHeader: LazyComponent<typeof import("../components/cart/CartHeader.vue").default>
export const LazyCartItemRow: LazyComponent<typeof import("../components/cart/CartItemRow.vue").default>
export const LazyCartItemsGrid: LazyComponent<typeof import("../components/cart/CartItemsGrid.vue").default>
export const LazyCartSummary: LazyComponent<typeof import("../components/cart/CartSummary.vue").default>
export const LazyContactFormCard: LazyComponent<typeof import("../components/contact/ContactFormCard.vue").default>
export const LazyHomeGuestCards: LazyComponent<typeof import("../components/home/HomeGuestCards.vue").default>
export const LazyHomeHero: LazyComponent<typeof import("../components/home/HomeHero.vue").default>
export const LazyHomeNav: LazyComponent<typeof import("../components/home/HomeNav.vue").default>
export const LazyHomeProfileCard: LazyComponent<typeof import("../components/home/HomeProfileCard.vue").default>
export const LazyDuoPackCard: LazyComponent<typeof import("../components/shop/DuoPackCard.vue").default>
export const LazyNewsletterCta: LazyComponent<typeof import("../components/shop/NewsletterCta.vue").default>
export const LazyProductCard: LazyComponent<typeof import("../components/shop/ProductCard.vue").default>
export const LazyProductFilters: LazyComponent<typeof import("../components/shop/ProductFilters.vue").default>
export const LazyReviewsPanel: LazyComponent<typeof import("../components/shop/ReviewsPanel.vue").default>
export const LazyShoesHero: LazyComponent<typeof import("../components/shop/ShoesHero.vue").default>
export const LazySizeGuideModal: LazyComponent<typeof import("../components/shop/SizeGuideModal.vue").default>
export const LazyCartToast: LazyComponent<typeof import("../components/ui/CartToast.vue").default>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue").default>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout").default>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only").default>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only").default>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder").default>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link").default>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue").default>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture>
export const LazyNuxtLinkLocale: LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale").default>
export const LazySwitchLocalePathLink: LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink").default>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page").default>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").NoScript>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Link>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Base>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Title>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Meta>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Style>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Head>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Html>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Body>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island").default>

export const componentNames: string[]
