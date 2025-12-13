import { ThemeSwitcher } from "../common/theme-switcher"

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-screen">
      <div className="mx-auto flex h-full w-full max-w-3xl items-center justify-between p-4 px-4">
        <div className="rounded-md px-2 py-1 backdrop-blur-xs">
          <p className="text-muted-foreground flex items-center gap-1 text-sm">
            <span>&copy;</span>
            {new Date().getFullYear()} Nischal Timalsina
          </p>
        </div>
        <ThemeSwitcher />
      </div>
    </footer>
  )
}
