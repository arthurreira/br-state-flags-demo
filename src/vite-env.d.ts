/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BEAM_TOKEN?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

