import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../quartz/components/types"

const Footer: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  return (
    <footer
    class="footer"
    style={{
      padding: "1rem",
      textAlign: "center",
      fontSize: "0.9rem",
      color: "var(--gray)",
          borderTop: "1px solid var(--lightgray)",
          marginTop: "2rem",
    }}
    >
    <p style={{ margin: "0.5rem 0" }}>
    © 2025 <strong>fcamachos</strong> — Contenido bajo licencia{" "}
    <a
    href="https://creativecommons.org/licenses/by-sa/4.0/"
    target="_blank"
    rel="license noopener noreferrer"
    >
    CC BY-SA 4.0
    </a>
    . Código de la plantilla bajo{" "}
    <a
    href="https://opensource.org/licenses/MIT"
    target="_blank"
    rel="noopener noreferrer"
    >
    MIT License
    </a>
    .
    </p>
    </footer>
  )
}

export default (() => Footer) satisfies QuartzComponentConstructor
