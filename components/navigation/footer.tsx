import { ThemeSwitcher } from "../common/theme-switcher"

export function Footer() {
  return (
    <footer className="bg-background fixed bottom-0 left-0 w-screen">
      <div className="mx-auto flex h-full w-full max-w-3xl items-center justify-between p-4 px-4">
        <p className="flex items-center gap-1 text-xs">
          <span className="text-base">&copy;</span> Nischal Timalsina
        </p>
        <ThemeSwitcher />
      </div>
    </footer>
  )
}
