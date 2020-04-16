import React from "react"
import footerStyles from "../styles/footer.module.scss"

const Footer = () => {
  return (
  <footer className={footerStyles.siteFooter}>
    <div className={footerStyles.container}>
    <p>
      Site developed by Dorian Lannay &copy; {new Date().getFullYear().toString()}{" "}.
    </p>
    </div>
  </footer>
  )
}

export default Footer