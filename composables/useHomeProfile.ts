import runningImage from '~/asset/running.jpeg'
import { computed, onMounted } from 'vue'
import { navigateTo } from '#app'

const createAvatarDataUrl = (seed: string) => {
  let hash = 7
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0
  }

  const hue = hash % 360
  const hueAlt = (hue + 60) % 360
  const hueAccent = (hue + 200) % 360
  const headX = 72 + (hash % 17)
  const headY = 52 + ((hash >> 4) % 15)
  const headR = 24 + ((hash >> 8) % 7)
  const bodyW = 110 + ((hash >> 12) % 18)
  const bodyY = headY + headR - 4
  const spotX = 28 + ((hash >> 16) % 90)
  const spotY = 18 + ((hash >> 20) % 80)

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="hsl(${hue}, 70%, 48%)"/>
          <stop offset="100%" stop-color="hsl(${hueAlt}, 75%, 38%)"/>
        </linearGradient>
      </defs>
      <rect width="160" height="160" rx="28" fill="url(#bg)"/>
      <circle cx="${spotX}" cy="${spotY}" r="46" fill="hsla(${hueAccent}, 70%, 70%, 0.35)"/>
      <circle cx="${160 - spotX}" cy="${120 - spotY}" r="34" fill="hsla(${hueAlt}, 80%, 80%, 0.25)"/>
      <rect x="${80 - bodyW / 2}" y="${bodyY}" width="${bodyW}" height="74" rx="36" fill="hsla(${hue}, 40%, 12%, 0.35)"/>
      <circle cx="${headX}" cy="${headY}" r="${headR}" fill="hsla(${hue}, 35%, 12%, 0.5)"/>
      <circle cx="${headX - 10}" cy="${headY - 8}" r="${headR * 0.35}" fill="hsla(0, 0%, 100%, 0.18)"/>
    </svg>
  `.trim()

  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

export const useHomeProfile = () => {
  const { user, signOut, getSession, loading } = useAuth()

  const profilePhoto = computed(() => {
    const seed = user.value?.email || user.value?.id || 'guest'
    return createAvatarDataUrl(seed)
  })

  const handleSignOut = async () => {
    await signOut()
    navigateTo('/login')
  }

  onMounted(async () => {
    await getSession()
  })

  return {
    runningImage,
    user,
    loading,
    profilePhoto,
    handleSignOut
  }
}
